type ProductType = "location" | "asset" | "component";

export interface ILocation {
  id: string;
  name: string;
  parentId: string | null;
  type?: ProductType;
  children?: Array<ILocation | IAsset | IComponent>;
}

export interface IAsset {
  id: string;
  name: string;
  locationId: string | null;
  parentId: string | null;
  sensorType: string | null;
  type?: ProductType;
  children?: Array<IAsset | IComponent>;
}

export interface IComponent {
  id: string;
  name: string;
  parentId: string | null;
  sensorType: string;
  type: ProductType;
  children?: Array<IComponent>;
}
