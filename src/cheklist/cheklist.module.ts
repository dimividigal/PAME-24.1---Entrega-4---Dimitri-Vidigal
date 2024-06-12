import { Module } from '@nestjs/common';
import { CheklistService } from './cheklist.service';
import { CheklistController } from './cheklist.controller';

@Module({
  controllers: [CheklistController],
  providers: [CheklistService],
})
export class CheklistModule {}
