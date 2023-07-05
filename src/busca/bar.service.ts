import { Injectable, NotFoundException } from '@nestjs/common';
import { Bar } from './bar.entity';
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

@Injectable()
export class BarService {
  private bars: Bar[] = [];

  createBar(createBarDto: CreateBarDto): Bar {
    const bar: Bar = {
      id: this.bars.length + 1,
      name: createBarDto.name,
      address: createBarDto.address,
      description: createBarDto.description,
      website: createBarDto.website,
      photos: createBarDto.photos,
      averageRating: 0,
      reviews: [],
      // Outros campos do Bar, se necessário
    };
    this.bars.push(bar);
    return bar;
  }

  getAllBars(): Bar[] {
    return this.bars;
  }

  getBar(id: number): Bar {
    const bar = this.bars.find((bar) => bar.id === id);
    if (!bar) {
      throw new NotFoundException('Bar not found');
    }
    return bar;
  }

  updateBar(id: number, updateBarDto: UpdateBarDto): Bar {
    const bar = this.getBar(id);
    const updatedBar: Bar = {
      ...bar,
      ...updateBarDto,
    };
    this.bars = this.bars.map((b) => (b.id === id ? updatedBar : b));
    return updatedBar;
  }

  deleteBar(id: number): void {
    const index = this.bars.findIndex((bar) => bar.id === id);
    if (index === -1) {
      throw new NotFoundException('Bar not found');
    }
    this.bars.splice(index, 1);
  }
}
