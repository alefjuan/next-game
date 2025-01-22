import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateGameDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  platform?: string;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsNumber()
  releaseYear?: number;

  @IsOptional()
  @IsString()
  developer?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;
}
