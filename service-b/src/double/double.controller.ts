import { Controller, Logger } from '@nestjs/common';
import { DoubleService } from './double.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class DoubleController {
  // NestJS Logger instance for logging
  private readonly logger = new Logger(DoubleController.name);

  constructor(private readonly doubleService: DoubleService) {}

  // Listens to messages with the pattern 'double_number' from Redis
  @MessagePattern('double_number')
  handleDoubleNumber(@Payload() data: number): number {
    // Log incoming data
    this.logger.log(`Received number: ${data}`);

    // Validate if the data is a valid number
    if (typeof data !== 'number' || isNaN(data)) {
      this.logger.error(`Invalid data received: ${data}`);
      throw new Error('Payload must be a valid number');
    }

    // Call the service method to compute the result
    const result = this.doubleService.double(data);

    // Log the result before returning
    this.logger.log(`Returning result: ${result}`);
    return result;
  }
}
