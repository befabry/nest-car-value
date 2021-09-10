import { Expose } from 'class-transformer';
import { IUser } from '../user.entity';

export class UserDto implements Pick<IUser, 'id' | 'email'> {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
