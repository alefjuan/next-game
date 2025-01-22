import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateListDto {
  @IsOptional()
  @IsBoolean()
  isFavorite?: boolean;

  @IsOptional()
  @IsBoolean()
  isPriority?: boolean;
}
