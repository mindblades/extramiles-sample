import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CalcDto } from '../dto/calc.dto';
import { PercentageCalcService } from './percentage-calc.service';

@Controller('percentage-calc')
export class PercentageCalcController {
  constructor(private readonly percentageCalcService: PercentageCalcService) {}

  @Post()
  async create(@Res() response, @Body() calcDto: CalcDto) {
    const price = calcDto.price;
    const discount = calcDto.discount;

    if (price && discount) {
      const calculatedDiscount = price * (discount / 100);
      const discountedPrice = price - calculatedDiscount;

      calcDto.price = price;
      calcDto.discount = discount;
      calcDto.discountedPrice = discountedPrice;
      calcDto.saving = calculatedDiscount;
    } else {
      calcDto.price = 0;
      calcDto.discount = 0;
      calcDto.discountedPrice = 0;
      calcDto.saving = 0;
    }

    try {
      const newCacl = await this.percentageCalcService.create(calcDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Calculated successfully',
        newCacl,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Calculation Failed!',
        error: 'Bad Request',
      });
    }
  }
}
