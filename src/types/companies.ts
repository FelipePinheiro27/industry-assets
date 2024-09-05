export type companyType = {
  id: string;
  name: string;
};

export type locationType = {
  id: string;
  name: string;
  parentId: string;
};

export type assetsType = {
  id: string;
  locationId: string;
  name: string;
  gatewayId: string;
  parentId: string;
  sensorId: string;
  sensorType: string;
  status?: "alert" | "operating";
};
