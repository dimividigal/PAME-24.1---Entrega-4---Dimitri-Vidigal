import { Injectable } from '@nestjs/common';
import { CreateCheklistDto } from './dto/create-cheklist.dto';
import { UpdateCheklistDto } from './dto/update-cheklist.dto';

@Injectable()
export class CheklistService {
  create(createCheklistDto: CreateCheklistDto) {
    return 'This action adds a new cheklist';
  }

  findAll() {
    return `This action returns all cheklist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cheklist`;
  }

  update(id: number, updateCheklistDto: UpdateCheklistDto) {
    return `This action updates a #${id} cheklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} cheklist`;
  }
}
