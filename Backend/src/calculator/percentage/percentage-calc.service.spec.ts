import { Test, TestingModule } from '@nestjs/testing';
import { PercentageCalcService } from './percentage-calc.service';

describe('PercentageCalcService', () => {
  let service: PercentageCalcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PercentageCalcService],
    }).compile();

    service = module.get<PercentageCalcService>(PercentageCalcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
