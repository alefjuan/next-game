import { Controller, Post, Get, Param, Body, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.strategy';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createListDto: CreateListDto, @Req() req) {
    const userId = req.user.userId;
    return this.listsService.create({ ...createListDto, userId });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    const userId = req.user.userId;
    return this.listsService.findOne(+id, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    const userId = req.user.userId;
    return this.listsService.findAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto, @Req() req) {
    const userId = req.user.userId;
    return this.listsService.update(+id, updateListDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    const userId = req.user.userId;
    return this.listsService.remove(+id, userId);
  }
}
