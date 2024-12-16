import { Test, TestingModule } from '@nestjs/testing';
import { BookingDetailController } from './booking-detail.controller';

describe('BookingDetailController', () => {
  let controller: BookingDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingDetailController],
    }).compile();

    controller = module.get<BookingDetailController>(BookingDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
