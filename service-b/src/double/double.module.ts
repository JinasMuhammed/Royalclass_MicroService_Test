import { Module } from '@nestjs/common';
import { DoubleService } from './double.service';
import { DoubleController } from './double.controller';

@Module({
  controllers: [DoubleController],
  providers: [DoubleService],
})
export class DoubleModule {}
