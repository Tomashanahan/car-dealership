import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsOptional()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsNumber()
  @IsOptional()
  readonly createdAt: number;

  @IsNumber()
  @IsOptional()
  readonly updatedAt?: number;
}
