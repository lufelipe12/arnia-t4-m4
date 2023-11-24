import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column({ length: 8 })
  zipCode: string;

  @OneToOne(() => User, (user) => user.address, { nullable: false })
  @JoinColumn()
  user: User;
}
