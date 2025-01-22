import { IsString, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class CreateListDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  isFavorite?: boolean;

  @IsOptional()
  @IsBoolean()
  isPriority?: boolean;

  @IsInt()
  userId: number;
  @IsInt() gameId: number;
}
