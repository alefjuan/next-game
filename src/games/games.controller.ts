import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.strategy'; 
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto'; 

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @UseGuards(JwtAuthGuard) // Protege este endpoint
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gamesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll(); // Endpoint público
  }

  @UseGuards(JwtAuthGuard) // Protege este endpoint
  @Put(':id')
  update(@Param('id') id: number, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(id, updateGameDto);
  }

  @UseGuards(JwtAuthGuard) // Protege este endpoint
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gamesService.remove(id);
  }
}
