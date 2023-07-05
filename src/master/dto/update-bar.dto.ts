import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UpdateBarDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    address: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsUrl()
    website: string;
  
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    photos: string[];
  
    // Outros campos do UpdateBarDto, se necessário
  }