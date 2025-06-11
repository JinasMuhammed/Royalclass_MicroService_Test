import { Test, TestingModule } from '@nestjs/testing';
import { SquareController } from './square.controller';
import { SquareService } from './square.service';
import { BadRequestException } from '@nestjs/common';

describe('SquareController', () => {
  let controller: SquareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquareController],
      providers: [SquareService],
    }).compile();

    controller = module.get<SquareController>(SquareController);
  });

  it('should return the square of a number', () => {
    expect(controller.getSquare(5)).toBe(25);
  });

  it('should throw an error for invalid (non-numeric) input', async () => {
    try {
      // simulate what would happen if Nest couldn't convert 'abc' to number
      controller.getSquare(Number('abc'));
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });
});
