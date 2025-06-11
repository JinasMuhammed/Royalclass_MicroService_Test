import { DoubleService } from './double.service';
export declare class DoubleController {
    private readonly doubleService;
    private readonly logger;
    constructor(doubleService: DoubleService);
    handleDoubleNumber(data: number): number;
}
