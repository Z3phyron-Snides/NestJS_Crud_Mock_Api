import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Fruit } from './fruit';

@Controller('api/fruits')
export class AppController {
  fruits: Fruit[] = [
    {
      id: 1,
      name: 'mango',
      cost: 30,
    },
    {
      id: 2,
      name: 'apple',
      cost: 40,
    },
  ];
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  getFruits(): Fruit[] {
    return this.fruits;
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  createFruits(@Body() newFruit: Fruit) {
    newFruit.id = this.fruits.length + 1;
    this.fruits.push(newFruit);
    return newFruit;
  }

  @Put('update')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateFruits(@Body() updateFruit: Fruit) {
    this.fruits = this.fruits.filter((_) => _.id != updateFruit.id);
    this.fruits.push(updateFruit);
    return updateFruit;
  }
  @Delete('delete')
  deleteFruit(@Query('id') id:number) {
    this.fruits = this.fruits.filter((_) => _.id != id);
    return "deleted"
  }
}
