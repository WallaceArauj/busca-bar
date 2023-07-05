import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BarService } from './bar.service';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';

@Controller('bars')
export class BarController {
  constructor(private readonly barService: BarService) {}

  @Get()
  getAllBars() {
    return this.barService.getAllBars();
  }

  @Get(':id')
  getBar(@Param('id') id: number) {
    return this.barService.getBar(id);
  }

  @Post()
  createBar(@Body() createBarDto: CreateBarDto) {
    return this.barService.createBar(createBarDto);
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
