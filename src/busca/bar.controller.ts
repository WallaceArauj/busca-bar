import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BarService } from './bar.service';
import { IsString, IsNotEmpty, IsUrl, IsInt, Min, Max, IsArray, ArrayNotEmpty } from 'class-validator';

class CreateBarDto {
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

  // Outros campos do CreateBarDto, se necessário
}

class UpdateBarDto {
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

@Controller('bars')
export class BarController {
  constructor(private readonly barService: BarService) {}

  @Post()
  createBar(@Body() createBarDto: CreateBarDto) {
    return this.barService.createBar(createBarDto);
  }

  @Get()
  getAllBars() {
    return this.barService.getAllBars();
  }

  @Get(':id')
  getBar(@Param('id') id: number) {
    return this.barService.getBar(id);
  }

  @Put(':id')
  updateBar(@Param('id') id: number, @Body() updateBarDto: UpdateBarDto) {
    return this.barService.updateBar(id, updateBarDto);
  }

  @Delete(':id')
  deleteBar(@Param('id') id: number) {
    return this.barService.deleteBar(id);
  }
}
