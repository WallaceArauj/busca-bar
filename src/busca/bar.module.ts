import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { Bar } from './bar.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bar])],
    controllers: [BarController],
    providers: [BarService],
})
export class BarModule { }
