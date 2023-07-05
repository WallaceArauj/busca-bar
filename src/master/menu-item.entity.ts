import { Entity, Column, ManyToOne } from 'typeorm';
import { Bar } from './bar.entity';

@Entity()
export class MenuItem {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => Bar, bar => bar.menuItems)
  bar: Bar;
}
