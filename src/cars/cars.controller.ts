import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id) {
    const car = this.carsService.findACar(id);
    if (car) {
      return car;
    } else {
      throw new NotFoundException();
    }
  }

  @Post()
  createCar(@Body() body) {
    return this.carsService.addACar(body);
  }

  @Patch(':id')
  upadteCarById(@Body() body, @Param('id', ParseUUIDPipe) id) {
    const car = this.carsService.updateCar(id, body);
    if (car) {
      return car;
    } else {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  deleteCarById(@Param('id', ParseUUIDPipe) id) {
    const car = this.carsService.deleteCar(id);
    if (car) {
      return car;
    } else {
      throw new NotFoundException();
    }
  }
}
