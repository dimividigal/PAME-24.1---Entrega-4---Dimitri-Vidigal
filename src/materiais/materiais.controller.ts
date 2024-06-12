import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaisService } from './materiais.service';
import { CreateMateriaiDto } from './dto/create-materiai.dto';
import { UpdateMateriaiDto } from './dto/update-materiai.dto';

@Controller('materiais')
export class MateriaisController {
  constructor(private readonly materiaisService: MateriaisService) {}

  @Post()
  create(@Body() createMateriaiDto: CreateMateriaiDto) {
    return this.materiaisService.create(createMateriaiDto);
  }

  @Get()
  findAll() {
    return this.materiaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaiDto: UpdateMateriaiDto) {
    return this.materiaisService.update(+id, updateMateriaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaisService.remove(+id);
  }
}
