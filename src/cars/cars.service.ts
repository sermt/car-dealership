import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

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

  updateCar(id: string, carData: UpdateCarDto): void {
    this.findCarById(id);

    if (carData.id && carData.id !== id) {
      throw new BadRequestException('Car id is not valid inside the body');
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return { ...car, ...carData, id };
      }
      return car;
    });
  }

  deleteCar(id: string): void {
    this.findCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  private findCarById(id: string): Car | void {
    if (this.cars.length === 0) {
      throw new BadGatewayException('Cars are not available');
    }

    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }
}
