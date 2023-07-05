import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Bar } from './bar.entity';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barId: number;

  @Column()
  userId: number;

 

  @ManyToOne(() => Bar, bar => bar.orders)
  bar: Bar;

  @ManyToOne(() => User, user => user.orders)
  user: User;
}
