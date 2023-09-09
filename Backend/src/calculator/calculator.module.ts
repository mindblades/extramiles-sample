import { Module } from '@nestjs/common';
import { PercentageCalcController } from './percentage/percentage-calc.controller';
import { PercentageCalcService } from './percentage/percentage-calc.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CalculatorSchema } from './schema/calculator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Calculator', schema: CalculatorSchema },
    ]),
  ],
  controllers: [PercentageCalcController],
  providers: [PercentageCalcService],
})
export class CalculatorModule {}
