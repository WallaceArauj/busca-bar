import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsUrl, ValidateNested } from 'class-validator';

class OpeningHoursDto {
  @IsString()
  @IsNotEmpty()
  dayOfWeek: string;

  @IsString()
  @IsNotEmpty()
  openingTime: string;

  @IsString()
  @IsNotEmpty()
  closingTime: string;
}

export class CreateBarDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  openingHours: OpeningHoursDto[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  photos: string[];

  @IsUrl()
  website: string;

  // Outros campos do Bar, se necessário
}
