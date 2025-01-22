import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto) {
    const game = await this.prisma.game.create({
      data: createGameDto,
    });
    return game;
  }

  async findAll() {
    return this.prisma.game.findMany();
  }

  async findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    return this.prisma.game.update({
      where: { id },
      data: updateGameDto,
    });
  }

  async remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
