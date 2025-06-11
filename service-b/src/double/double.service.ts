import { Injectable } from '@nestjs/common';

@Injectable()
export class DoubleService {

    
  /**
   * A method that takes a number and returns its double.
   * @param num - The number to be doubled.
   * @returns The result of num multiplied by 2.
   */
  
  double(num: number): number {
    return num * 2;
  }
}
