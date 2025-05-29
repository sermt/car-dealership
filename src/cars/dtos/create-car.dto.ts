import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(2, { message: 'Brand must be at least 2 characters' })
  readonly brand: string;

  @IsString()
  @MinLength(2, { message: 'Model must be at least 2 characters' })
  readonly model: string;
}
