import { DoubleController } from './double.controller';
import { of } from 'rxjs';

describe('DoubleController', () => {
  // Mocking the ClientProxy with a send method that returns an observable of 10
  const mockClient = {
    send: jest.fn().mockReturnValue(of(10)),
  };
  // Creating an instance of the controller with the mocked Redis client
  const controller = new DoubleController(mockClient as any);

  it('should double the number via Redis', async () => {
    // Call the controller method with input 5 and expect the result to be 10
    const result = await controller.getDouble(5);
    // As the mocked Redis response is 10
    expect(result).toBe(10);
  });
});
