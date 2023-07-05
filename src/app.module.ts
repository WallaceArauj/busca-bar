import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './busca/bar.module';
import { UserModule } from './busca/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BarModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
