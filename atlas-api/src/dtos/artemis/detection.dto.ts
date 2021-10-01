import { IsString } from "class-validator";

export class LaunchDetectionDto {
  @IsString()
  public application: string;

  @IsString()
  public language: string;
}
