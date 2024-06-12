import { Test, TestingModule } from '@nestjs/testing';
import { CheklistController } from './cheklist.controller';
import { CheklistService } from './cheklist.service';

describe('CheklistController', () => {
  let controller: CheklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheklistController],
      providers: [CheklistService],
    }).compile();

    controller = module.get<CheklistController>(CheklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
