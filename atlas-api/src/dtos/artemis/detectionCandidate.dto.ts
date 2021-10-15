import { IsArray, IsBoolean, IsString } from "class-validator";

export class DetectionCandidate {
  @IsString()
  public application: string;

  @IsArray()
  public languages: string[];

  @IsBoolean()
  public onlineMode?: boolean;

  @IsBoolean()
  public repositoryMode?: boolean;

  @IsString()
  public pythiaURL?: string;

  @IsString()
  public pythiaToken?: string;
}
