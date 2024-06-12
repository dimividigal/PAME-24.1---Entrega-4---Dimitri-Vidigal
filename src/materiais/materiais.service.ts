import { Injectable } from '@nestjs/common';
import { CreateMateriaiDto } from './dto/create-materiai.dto';
import { UpdateMateriaiDto } from './dto/update-materiai.dto';

@Injectable()
export class MateriaisService {
  create(createMateriaiDto: CreateMateriaiDto) {
    return 'This action adds a new materiai';
  }

  findAll() {
    return `This action returns all materiais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiai`;
  }

  update(id: number, updateMateriaiDto: UpdateMateriaiDto) {
    return `This action updates a #${id} materiai`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiai`;
  }
}
