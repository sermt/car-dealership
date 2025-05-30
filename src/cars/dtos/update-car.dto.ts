import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @MinLength(36, { message: 'Id must be at least 36 characters' })
  @IsOptional()
  readonly id?: string;

  @IsString()
  @MinLength(2, { message: 'Brand must be at least 2 characters' })
  readonly brand: string;

  @IsString()
  @MinLength(2, { message: 'Model must be at least 2 characters' })
  readonly model: string;
}
