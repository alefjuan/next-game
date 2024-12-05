import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() data) {
    return this.gamesService.createGame(data);
  }

  @Get()
  findAll() {
    return this.gamesService.getAllGames();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gamesService.getGameById(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.gamesService.updateGame(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gamesService.deleteGame(+id);
  }
}
