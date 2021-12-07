export enum LicenseStatus {
  VALID,
  NOT_VALID
}

export interface License {
  license: string;
  status: LicenseStatus;
}
