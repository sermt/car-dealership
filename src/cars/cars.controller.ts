import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getOneCar(@Param('id', ParseUUIDPipe) id: string): void | Car {
    return this.carsService.getOneCar(id);
  }

  @Post()
  createCar(@Body() carData: CreateCarDto): void {
    return this.carsService.createCar(carData);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() carData: UpdateCarDto,
  ): void {
    return this.carsService.updateCar(id, carData);
  }

  @Delete(':id')
  deleteCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): void {
    return this.carsService.deleteCar(id);
  }
}
