import { Test, TestingModule } from '@nestjs/testing';
import { DoubleController } from './double.controller';
import { DoubleService } from './double.service';

describe('DoubleController', () => {
  let controller: DoubleController;
  let service: DoubleService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoubleController],
      providers: [DoubleService], 
    }).compile();

    // Retrieve instances from the testing module
    controller = module.get<DoubleController>(DoubleController);
    service = module.get<DoubleService>(DoubleService);
  });

  //  Should return the correct doubled number
  it('should return the doubled number', () => {
    const result = controller.handleDoubleNumber(6); // 6 * 2 = 12
    expect(result).toBe(12);
  });

  it('should call doubleService.double with correct input', () => {
    // Spy on the double method of the service to track its call
    const spy = jest.spyOn(service, 'double');

    // Invoke the controller method
    controller.handleDoubleNumber(10);

    // Expect that the service method was called with 10
    expect(spy).toHaveBeenCalledWith(10);
  });
});
