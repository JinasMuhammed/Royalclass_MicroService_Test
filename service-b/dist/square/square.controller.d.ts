import { SquareService } from './square.service';
export declare class SquareController {
    private readonly squareService;
    private readonly logger;
    constructor(squareService: SquareService);
    getSquare(num: number): number;
}
