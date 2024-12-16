import { Test, TestingModule } from '@nestjs/testing';
import { SeatCountController } from './seat-count.controller';

describe('SeatCountController', () => {
  let controller: SeatCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeatCountController],
    }).compile();

    controller = module.get<SeatCountController>(SeatCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
