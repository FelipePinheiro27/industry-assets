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
  gatewayId: string;
  id: string;
  locationId: string;
  name: string;
  parentId: string;
  sensorId: string;
  sensorType: string;
  status: string;
};
