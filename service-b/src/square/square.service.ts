import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SquareService {
  private readonly logger = new Logger(SquareService.name);

  square(num: number): number {
    this.logger.debug(`Calculating square of ${num}`); // Log before computation
    const result = num * num;
    this.logger.debug(`Result: ${result}`); // Log result
    return result;
  }
}
