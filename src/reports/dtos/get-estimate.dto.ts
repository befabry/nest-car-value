import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
import { IReport } from '../report.entity';

export class GetEstimateDto
  implements Omit<IReport, 'id' | 'approved' | 'user' | 'price'>
{
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
