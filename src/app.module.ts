import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CarsModule],
})
export class AppModule {}
