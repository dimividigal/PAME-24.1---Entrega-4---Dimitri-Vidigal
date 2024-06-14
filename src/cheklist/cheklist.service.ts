import { Injectable } from '@nestjs/common';
import { CreateCheklistDto } from './dto/create-cheklist.dto';
import { UpdateCheklistDto } from './dto/update-cheklist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CheklistService {

  constructor (private readonly prisma:PrismaService){}
  
  create(data: CreateCheklistDto) {
    const cheklistcriada = this.prisma.checklist.create({ data });
    return cheklistcriada
  }

  findAll() {
    const encontrarchecklist = this.prisma.checklist.findMany();
    return encontrarchecklist
  }

  findOne(id: number) {
    const cheklistespecifica = this.prisma.checklist.findUnique ({where: {id}});
    return cheklistespecifica
  }

  update(id: number, updateCheklistDto: UpdateCheklistDto) {
    const checklistatualizada = this.prisma.checklist.update({where: {id}, data: updateCheklistDto});
    return checklistatualizada
  }

  async remove(id: number) {
    await this.prisma.checklist.delete({where:{id}});
    return 'item da checklist deletado!'
  }
}
