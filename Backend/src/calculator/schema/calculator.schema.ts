import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CalculatorDocument = Calculator & Document;
@Schema()
export class Calculator {
  @Prop()
  price: number;
  @Prop()
  discount: number;
  @Prop()
  discountedPrice: number;
  @Prop()
  saving: number;
}
export const CalculatorSchema = SchemaFactory.createForClass(Calculator);
