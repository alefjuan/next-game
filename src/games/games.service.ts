import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class GamesService {
  async createGame(data) {
    return prisma.game.create({ data });
  }

  async getAllGames() {
    return prisma.game.findMany();
  }

  async getGameById(id: number) {
    return prisma.game.findUnique({ where: { id } });
  }

  async updateGame(id: number, data) {
    return prisma.game.update({ where: { id }, data });
  }

  async deleteGame(id: number) {
    return prisma.game.delete({ where: { id } });
  }
}
