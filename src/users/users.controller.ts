import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.strategy';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number, @Req() req) {
    const userId = req.user.userId;
    if (id !== userId) {
      throw new UnauthorizedException('Você só pode acessar seus próprios dados.');
    }
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto, @Req() req) {
    const userId = req.user.userId;
    if (id !== userId) {
      throw new UnauthorizedException('Você só pode atualizar seus próprios dados.');
    }
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number, @Req() req) {
    const userId = req.user.userId;
    if (id !== userId) {
      throw new UnauthorizedException('Você só pode remover sua própria conta.');
    }
    return this.usersService.remove(id);
  }
}
