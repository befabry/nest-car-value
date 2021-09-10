import { IsEmail, IsString } from 'class-validator';
import { IUser } from '../user.entity';

export class CreateUserDto implements Pick<IUser, 'email' | 'password'> {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
