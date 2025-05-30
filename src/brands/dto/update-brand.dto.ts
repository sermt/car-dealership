import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  readonly name: string;
}
