import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './master/bar.module';
import { UserModule } from './master/user.module';
import { OrderModule } from './master/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BarModule,
    UserModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
