import { Injectable, NotFoundException } from '@nestjs/common';
import { Bar } from './bar.entity';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BarRepository } from './bar.repository';
import { Repository } from 'typeorm';

@Injectable()
export class BarService {
  constructor(
    @InjectRepository(BarRepository)
    private barRepository: Repository<Bar>,
   
  ) { }

  async createBar(createBarDto: CreateBarDto): Promise<Bar> {
    const bar = this.barRepository.create(createBarDto);
    return this.barRepository.save(bar);
  }

  async getAllBars(): Promise<Bar[]> {
    return this.barRepository.find();
  }

  async getBar(id: number): Promise<Bar> {
    const bar = await this.barRepository.findOne({ where: { id } });
    if (!bar) {
      throw new NotFoundException('Bar not found');
    }
    return bar;
  }

  async updateBar(id: number, updateBarDto: UpdateBarDto): Promise<Bar> {
    const bar = await this.getBar(id);
    const updatedBar = this.barRepository.merge(bar, updateBarDto);
    return this.barRepository.save(updatedBar);
  }

  async deleteBar(id: number): Promise<void> {
    const bar = await this.getBar(id);
    await this.barRepository.remove(bar);
  }

}
