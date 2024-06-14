import { Injectable } from '@nestjs/common';
import { CreatePecaDto } from './dto/create-peca.dto';
import { UpdatePecaDto } from './dto/update-peca.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PecasService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreatePecaDto) {
    const pecaCriada = this.prisma.pecas.create({ data });
    return pecaCriada
  }

  findAll() {
    const pecas = this.prisma.pecas.findMany();
    return pecas
  }

  findOne(id: number) {
    const peca = this.prisma.pecas.findUnique ({where: {id}});
    return peca
  }

  update(id: number, updatePecaDto: UpdatePecaDto) {
    const pecaatualizada = this.prisma.pecas.update({where: {id}, data: updatePecaDto});
    return pecaatualizada
  }

  async remove(id: number) {
    await this.prisma.pecas.delete({where:{id}});
    return 'peca deletada!'
  }
}
