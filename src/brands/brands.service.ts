import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Ford',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Honda',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBRand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: Date.now(),
    };
    this.brands.push(newBRand);
    return 'New brand created: ' + JSON.stringify(newBRand);
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string): Brand | void {
    const brand = this.brands.find((brand) => brand.id === id.toString());
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto,
          updatedAt: Date.now(),
        };
      }
      return brand;
    });

    return `This action updates a #${id} brand`;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return `This action removes a #${id} brand`;
  }
}
