import { IAsset, IComponent, ILocation } from "../types/tree";

export const buildTree = (locations: ILocation[], assets: IAsset[]) => {
  const locationMap: Record<string, ILocation> = {};
  const assetMap: Record<string, IAsset> = {};
  const tree: Array<ILocation | IAsset | IComponent> = [];

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
  data: Array<ILocation | IAsset | IComponent>,
  searchText: string
): Array<ILocation | IAsset | IComponent> => {
  return data.reduce(
    (filtered: Array<ILocation | IAsset | IComponent>, item) => {
      const children = filterTree(item?.children || [], searchText);

      if (
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        children.length > 0
      ) {
        filtered.push({ ...item, children });
      }

      return filtered;
    },
    []
  );
};
