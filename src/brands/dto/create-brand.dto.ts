import { IsString, isString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  readonly name: string;
}
