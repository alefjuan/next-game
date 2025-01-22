import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  platform: string;

  @IsString()
  genre: string;

  @IsInt()
  releaseYear: number;

  @IsString()
  developer: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;
}
