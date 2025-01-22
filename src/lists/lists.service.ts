import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Injectable()
export class ListsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createListDto: CreateListDto) {
    // Verifique se o jogo existe
    const gameExists = await this.prisma.game.findUnique({
      where: { id: createListDto.gameId },
    });

    if (!gameExists) {
      throw new BadRequestException('Jogo não encontrado.');
    }

    const list = await this.prisma.list.create({
      data: {
        name: createListDto.name,
        isFavorite: createListDto.isFavorite,
        isPriority: createListDto.isPriority,
        userId: createListDto.userId,
        games: {
          create: {
            gameId: createListDto.gameId,
          },
        },
      },
    });
    return list;
  }

  async findOne(id: number, userId: number) {
    return this.prisma.list.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        games: true, // Incluir jogos relacionados
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.list.findMany({
      where: {
        userId,
      },
      include: {
        games: true, // Incluir jogos relacionados
      },
    });
  }

  async update(id: number, updateListDto: UpdateListDto, userId: number) {
    const list = await this.prisma.list.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!list) {
      throw new NotFoundException('Lista não encontrada.');
    }

    return this.prisma.list.update({
      where: { id },
      data: {
        isFavorite: updateListDto.isFavorite,
        isPriority: updateListDto.isPriority,
      },
    });
  }

  async remove(id: number, userId: number) {
    const list = await this.prisma.list.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!list) {
      throw new NotFoundException('Lista não encontrada.');
    }

    return this.prisma.list.delete({
      where: { id },
    });
  }
}
