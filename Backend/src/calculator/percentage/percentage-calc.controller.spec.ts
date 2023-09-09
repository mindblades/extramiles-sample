import { Test, TestingModule } from '@nestjs/testing';
import { PercentageCalcController } from './percentage-calc.controller';

describe('PercentageCalcController', () => {
  let controller: PercentageCalcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PercentageCalcController],
    }).compile();

    controller = module.get<PercentageCalcController>(PercentageCalcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
