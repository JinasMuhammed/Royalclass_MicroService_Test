import { Controller, Get, Param, ParseIntPipe, BadRequestException, Logger } from '@nestjs/common';
import { SquareService } from './square.service';

@Controller('square')
export class SquareController {
  private readonly logger = new Logger(SquareController.name); 

  constructor(private readonly squareService: SquareService) {}

  @Get('/:num')
  getSquare(@Param('num', ParseIntPipe) num: number): number {
    this.logger.debug(`Received number: ${num}`); // Log input

    // Validation: Ensure number is non-negative
    if (num < 0) {
      this.logger.warn(`Invalid input: ${num} (must be non-negative)`);
      throw new BadRequestException('Number must be non-negative');
    }

    const result = this.squareService.square(num);

    this.logger.debug(`Square of ${num} is ${result}`); 

    return result;
  }
}
