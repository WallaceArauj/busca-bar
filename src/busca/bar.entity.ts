import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNotEmpty, IsInt, Min, Max, IsArray, ArrayNotEmpty } from 'class-validator';

@Entity()
export class Bar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  address: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  website: string;

  @Column()
  @IsInt()
  @Min(1)
  @Max(5)
  averageRating: number;

  @Column('simple-array', { nullable: true })
  @IsArray()
  @ArrayNotEmpty()
  photos: string[];

  // Outros campos do Bar, se necessário

  @Column('simple-json', { nullable: true })
  reviews: {
    userId: string;
    comment: string;
    rating: number;
  }[];

}
