type ProductType = "location" | "asset" | "component";

export interface ITreeData {
  id: string;
  name: string;
  parentId: string | null;
  locationId?: string | null;
  sensorType?: string | null;
  sensorId?: string | null;
  gatewayId?: string | null;
  status?: "alert" | "operating";
  type?: ProductType | null;
  children?: Array<ITreeData> | null;
}
