import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }: TransformFnParams) => parseInt(value))
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  mileage: number;

  @Transform(({ value }: TransformFnParams) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }: TransformFnParams) => parseFloat(value))
  @IsLatitude()
  lat: number;
}
