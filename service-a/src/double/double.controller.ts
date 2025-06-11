import {
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('double')
export class DoubleController {
  constructor(@Inject('REDIS_SERVICE') private client: ClientProxy) {}

  /**
   * GET /double/:num
   * Sends the number to service-b via Redis to get the doubled value
   * @param num - number from the URL path
   * @returns doubled number from service-b
   */

  @Get('/:num')
  async getDouble(@Param('num', ParseIntPipe) num: number): Promise<number> {
    try {
      return await firstValueFrom(this.client.send('double_number', num));
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to get double from service-b',
      );
    }
  }
}
