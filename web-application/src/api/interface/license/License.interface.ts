export enum LicenseStatus {
  VALID,
  NOT_VALID
}

export interface LicenseInterface {
  license: string;
  status: LicenseStatus;
}
