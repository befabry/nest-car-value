import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Report } from 'src/reports/report.entity';

export interface IUser {
  id: number;
  email: string;
  password: string;
  admin: boolean;
  reports: Report[];
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  afterUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  afterRemove() {
    console.log('Removed User with id', this.id);
  }
}
