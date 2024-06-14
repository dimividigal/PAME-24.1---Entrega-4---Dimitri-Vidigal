import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstoqueService {

  constructor (private readonly prisma:PrismaService){}

  create(data: CreateEstoqueDto) {

    const estoqueCriado = this.prisma.estoque.create({ data });
    return estoqueCriado
  }

  findAll() {
    const estoques = this.prisma.estoque.findMany();
    return estoques
    }

  findOne(id: number) {
    const umestoque = this.prisma.estoque.findUnique ({where: {id}});
    return umestoque
  }

  update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    const estoqueatualizado = this.prisma.estoque.update({where: {id}, data: updateEstoqueDto});
    return estoqueatualizado
  }

  async remove(id: number) {
    await this.prisma.estoque.delete({where:{id}});
    return 'item do estoque deletado!'
  }
}
