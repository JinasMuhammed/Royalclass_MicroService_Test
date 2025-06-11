import { SquareService } from './square.service';

describe('SquareService', () => {
  let service: SquareService;

  beforeEach(() => {
    service = new SquareService();
  });

  it('should return the square of a positive number', () => {
    expect(service.square(5)).toBe(25);
  });

  it('should return the square of a negative number', () => {
    expect(service.square(-3)).toBe(9);
  });

  it('should return 0 when the input is 0', () => {
    expect(service.square(0)).toBe(0);
  });
});
