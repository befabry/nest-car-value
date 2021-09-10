import { IsBoolean } from 'class-validator';
import { IReport } from '../report.entity';

export class ApproveReportDto implements Pick<IReport, 'approved'> {
  @IsBoolean()
  approved: boolean;
}
