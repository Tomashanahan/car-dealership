import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly branServise: BrandsService,
  ) {}

  populateDB() {
    this.branServise.seedBrandFeel(BRANDS_SEED);
    this.carsService.seedCarFeel(CARS_SEED);
    return CARS_SEED;
    // return 'seed has been activated correctly';
  }
}
