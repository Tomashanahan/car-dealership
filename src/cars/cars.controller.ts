import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/index';

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
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.addACar(createCarDto);
  }

  @Patch(':id')
  upadteCarById(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  deleteCarById(@Param('id', ParseUUIDPipe) id) {
    return this.carsService.deleteCar(id);
  }
}
