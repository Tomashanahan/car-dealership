import { v4 as uuid } from 'uuid';
import { Brands } from 'src/brands/interfaces/brands.interfaces';

export const BRANDS_SEED: Brands[] = [
  {
    id: uuid(),
    createdAt: new Date().getTime(),
    name: 'Bmw',
  },
];
