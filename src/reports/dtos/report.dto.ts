import { Expose, Transform } from 'class-transformer';
import { IReport } from '../report.entity';

export class ReportDto implements Omit<IReport, 'user'> {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  year: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  mileage: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  approved: boolean;

  @Transform(({ obj }: { obj: IReport }) => obj.user.id)
  @Expose()
  userId: number;
}
