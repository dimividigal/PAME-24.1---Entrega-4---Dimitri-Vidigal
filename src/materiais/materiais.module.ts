import { Module } from '@nestjs/common';
import { MateriaisService } from './materiais.service';
import { MateriaisController } from './materiais.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MateriaisController],
  providers: [MateriaisService, PrismaService],
})
export class MateriaisModule {}
