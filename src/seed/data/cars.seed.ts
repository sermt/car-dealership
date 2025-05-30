import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    model: 'Model X',
    brand: 'Toyota',
  },
  {
    id: uuid(),
    model: 'Model Y',
    brand: 'Toyota',
  },
  {
    id: uuid(),
    model: 'Ford',
    brand: 'Ford',
  },
];
