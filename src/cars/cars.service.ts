import {
  Injectable,
  MethodNotAllowedException,
  NotFoundException,
} from '@nestjs/common';
import { Car, CarInfo } from './interfaces/cars.interfaces';
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
    const car = this.cars.find((car) => car.id === id);

    if (car) {
      return car;
    } else {
      throw new NotFoundException(`The car with id:${id} wasnt found`);
    }
  }

  addACar(newCar: CarInfo) {
    const checkIfCarExist = this.cars.find(
      (car) => car.brand === newCar.brand && car.model === newCar.model,
    );

    if (!checkIfCarExist) {
      const car = {
        id: uuid(),
        brand: newCar.brand,
        model: newCar.model,
      };
      this.cars.push(car);
      return car;
    } else {
      throw new MethodNotAllowedException('Car already exist');
    }
  }

  updateCar(id: string, newCarInfo: CarInfo) {
    let carUpdated = this.findACar(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carUpdated = {
          ...car,
          ...newCarInfo,
          id,
        };
        return carUpdated;
      }
      return car;
    });
    return carUpdated;
  }

  deleteCar(id: string) {
    this.findACar(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }
}
