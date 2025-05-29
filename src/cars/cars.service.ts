import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  getAllCars(): Car[] {
    return this.cars;
  }

  getOneCar(id: string): Car | void {
    if (!id) {
      throw new BadRequestException('Id is required');
    }

    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException('Car not found');
    }

    return car;
  }

  createCar(car: CreateCarDto): void {
    if (!car) {
      throw new BadRequestException('All car fields are required');
    }
    const newCar = { ...car, id: uuidv4() };

    this.cars.push(newCar);
  }

  updateCar(car: Car): Car {
    if (!car) {
      throw new BadRequestException('All car fields are required');
    }

    const updatedCar = this.cars.find((car) => car.id === car.id);

    if (!updatedCar) {
      throw new NotFoundException('Car not found');
    }

    Object.assign(updatedCar, car);
    return updatedCar;
  }

  deleteCar(id: string): void {
    if (!id) {
      throw new BadRequestException('Id is required');
    }

    const carIndex = this.cars.findIndex((car) => car.id === id);

    if (carIndex === -1) {
      throw new NotFoundException('Car not found');
    }

    this.cars.splice(carIndex, 1);
  }
}
