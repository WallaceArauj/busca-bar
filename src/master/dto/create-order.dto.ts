import { IsInt, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  barId: number;

  @IsInt()
  userId: number;

  // Outros campos do DTO

  @IsArray()
  @ArrayNotEmpty()
  items: string[];
}
