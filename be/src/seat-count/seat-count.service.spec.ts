import { Test, TestingModule } from '@nestjs/testing';
import { SeatCountService } from './seat-count.service';

describe('SeatCountService', () => {
  let service: SeatCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeatCountService],
    }).compile();

    service = module.get<SeatCountService>(SeatCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
