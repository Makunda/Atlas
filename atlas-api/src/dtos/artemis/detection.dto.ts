import { IsBoolean, IsString } from "class-validator";

export class LaunchDetectionDto {
  @IsString()
  public application: string;

  @IsString()
  public language: string;

  @IsBoolean()
  public onlineMode: boolean;

  @IsBoolean()
  public repositoryMode: boolean;

  @IsBoolean()
  public pythiaMode: boolean;
}
