import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';

@Module({
  providers: [CarsService],
})
export class CarsModule {}
