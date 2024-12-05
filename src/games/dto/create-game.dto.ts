import { IsString, IsInt } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  platform: string;

  @IsString()
  genre: string;

  @IsInt()
  year: number;

  @IsString()
  description: string;
}
