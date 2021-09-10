import { IsEmail, IsOptional, IsString } from 'class-validator';
import { IUser } from '../user.entity';

export class UpdateUserDto implements Pick<IUser, 'email' | 'password'> {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
