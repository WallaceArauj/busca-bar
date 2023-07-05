import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { BarRepository } from './bar.repository';

@Module({
    imports: [TypeOrmModule.forFeature([BarRepository])],
    controllers: [BarController],
    providers: [BarService],
})
export class BarModule { }
