import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CalculatorDocument } from '../schema/calculator.schema';
import { CalcDto } from '../dto/calc.dto';

@Injectable()
export class PercentageCalcService {
  constructor(
    @InjectModel('Calculator') private calcModel: Model<CalculatorDocument>,
  ) {}

  async create(calcDto: CalcDto): Promise<CalculatorDocument> {
    const newCalc = await new this.calcModel(calcDto);
    return newCalc.save();
  }
}
