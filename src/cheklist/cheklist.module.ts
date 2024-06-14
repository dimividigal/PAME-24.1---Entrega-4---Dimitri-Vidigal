import { Module } from '@nestjs/common';
import { CheklistService } from './cheklist.service';
import { CheklistController } from './cheklist.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CheklistController],
  providers: [CheklistService, PrismaService],
})
export class CheklistModule {}
