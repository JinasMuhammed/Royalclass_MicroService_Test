import { DoubleService } from './double.service';

describe('DoubleService', () => {
  let service: DoubleService;

  beforeEach(() => {
    service = new DoubleService();
  });

  it('should double a positive number', () => {
    expect(service.double(4)).toBe(8);
  });

  it('should double a negative number', () => {
    expect(service.double(-3)).toBe(-6);
  });

  it('should return 0 when input is 0', () => {
    expect(service.double(0)).toBe(0);
  });
});
