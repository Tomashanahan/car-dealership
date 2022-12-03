import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [CarsModule],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
