import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorModule } from './calculator/calculator.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'extramiles',
    }),
    CalculatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
