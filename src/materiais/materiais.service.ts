import { Injectable } from '@nestjs/common';
import { CreateMateriaiDto } from './dto/create-materiai.dto';
import { UpdateMateriaiDto } from './dto/update-materiai.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MateriaisService {

  constructor(private readonly prisma:PrismaService){}
  
  create(data: CreateMateriaiDto) {
    const materialCriado = this.prisma.material.create({ data });
    return materialCriado
    
  }

  findAll() {
    const materiais = this.prisma.material.findMany();
    return materiais
  }

  findOne(id: number) {
    const material = this.prisma.material.findUnique ({where: {id}});
    return material
  }

  update(id: number, updateMateriaiDto: UpdateMateriaiDto) {
    const materialatualizado = this.prisma.material.update({where: {id}, data: updateMateriaiDto});
    return materialatualizado
  }

  async remove(id: number) {
    await this.prisma.material.delete({where:{id}});
    return 'Material deletado!'
  }
}
