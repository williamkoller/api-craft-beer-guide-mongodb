import { IsOptional, IsString } from 'class-validator';

export class UpdateStyleDto {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  name?: string;
}
