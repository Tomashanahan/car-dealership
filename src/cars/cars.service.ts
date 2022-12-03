import { Injectable } from '@nestjs/common';
import { Car, CarInfoToUpdate } from './interfaces/cars.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Bmw',
      model: 'M5',
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'rs7',
    },
    {
      id: uuid(),
      brand: 'Mecedes Benz',
      model: 'c63 amg',
    },
  ];

  findAllCars() {
    return this.cars;
  }

  findACar(id: string) {
    return this.cars.find((car) => car.id === id);
  }

  addACar(newCar: Car) {
    this.cars.push({
      id: uuid(),
      brand: newCar.brand,
      model: newCar.model,
    });
    return this.cars;
  }

  updateCar(id: string, newInfo: CarInfoToUpdate) {
    const car = this.cars.find((car) => car.id === id);
    car.brand = newInfo.brand;
    car.model = newInfo.model;
    return this.cars;
  }

  deleteCar(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }
}
