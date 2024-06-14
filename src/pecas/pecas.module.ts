import { Module } from '@nestjs/common';
import { PecasService } from './pecas.service';
import { PecasController } from './pecas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PecasController],
  providers: [PecasService, PrismaService],
})
export class PecasModule {}
