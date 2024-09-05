import { assetsType, locationType } from "../types/companies";
import { FirlterType } from "../types/filter";
import { ITreeData } from "../types/tree";

export const buildTree = (locations: ITreeData[], assets: ITreeData[]) => {
  const locationMap: Record<string, ITreeData> = {};
  const assetMap: Record<string, ITreeData> = {};
  const tree: Array<ITreeData> = [];

  locations.forEach((location) => {
    locationMap[location.id] = {
      ...location,
      type: "location",
      children: [],
    };
  });

  assets.forEach((asset) => {
    const isComponent = asset.sensorType !== null;
    const type = isComponent ? "component" : "asset";
    assetMap[asset.id] = { ...asset, type, children: [] };

    if (isComponent && !asset.parentId && !asset.locationId) {
      tree.push(assetMap[asset.id]);
    }
  });

  assets.forEach((asset) => {
    if (asset.parentId) {
      assetMap[asset.parentId]?.children?.push(assetMap[asset.id]);
    } else if (asset.locationId) {
      locationMap[asset.locationId]?.children?.push(assetMap[asset.id]);
    }
  });

  Object.values(locationMap).forEach((location) => {
    if (location.parentId) {
      locationMap[location.parentId]?.children?.push(location);
    } else {
      tree.push(location);
    }
  });

  return tree;
};

export const filterTree = (
  data: Array<ITreeData>,
  searchText: string,
  filter: FirlterType
): Array<ITreeData> => {
  return data.reduce((filtered: Array<ITreeData>, item) => {
    const children = filterTree(item.children || [], searchText, filter);

    const matchesSearchText = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesFilter =
      (filter === "energy" && item?.sensorType === "energy") ||
      (filter === "critical" && item.status === "alert");

    const noFilterApplied = filter === "";

    if (
      (noFilterApplied && (matchesSearchText || children.length > 0)) ||
      (matchesFilter &&
        (matchesSearchText || searchText === "" || children.length > 0)) ||
      children.length > 0
    ) {
      filtered.push({ ...item, children });
    }

    return filtered;
  }, []);
};

export const parseLocationToTreeData = (locations: locationType[]) => {
  return locations.map((loc) => {
    const dataParsed: ITreeData = {
      ...loc,
    };

    return dataParsed;
  });
};

export const parseAssetsToTreeData = (assets: assetsType[]) => {
  return assets.map((asset) => {
    const dataParsed: ITreeData = {
      ...asset,
    };

    return dataParsed;
  });
};
