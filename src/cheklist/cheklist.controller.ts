import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheklistService } from './cheklist.service';
import { CreateCheklistDto } from './dto/create-cheklist.dto';
import { UpdateCheklistDto } from './dto/update-cheklist.dto';

@Controller('cheklist')
export class CheklistController {
  constructor(private readonly cheklistService: CheklistService) {}

  @Post()
  create(@Body() createCheklistDto: CreateCheklistDto) {
    return this.cheklistService.create(createCheklistDto);
  }

  @Get()
  findAll() {
    return this.cheklistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cheklistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheklistDto: UpdateCheklistDto) {
    return this.cheklistService.update(+id, updateCheklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cheklistService.remove(+id);
  }
}
