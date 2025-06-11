"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SquareController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareController = void 0;
const common_1 = require("@nestjs/common");
const square_service_1 = require("./square.service");
let SquareController = SquareController_1 = class SquareController {
    constructor(squareService) {
        this.squareService = squareService;
        this.logger = new common_1.Logger(SquareController_1.name);
    }
    getSquare(num) {
        this.logger.debug(`Received number: ${num}`);
        if (num < 0) {
            this.logger.warn(`Invalid input: ${num} (must be non-negative)`);
            throw new common_1.BadRequestException('Number must be non-negative');
        }
        const result = this.squareService.square(num);
        this.logger.debug(`Square of ${num} is ${result}`);
        return result;
    }
};
exports.SquareController = SquareController;
__decorate([
    (0, common_1.Get)('/:num'),
    __param(0, (0, common_1.Param)('num', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], SquareController.prototype, "getSquare", null);
exports.SquareController = SquareController = SquareController_1 = __decorate([
    (0, common_1.Controller)('square'),
    __metadata("design:paramtypes", [square_service_1.SquareService])
], SquareController);
//# sourceMappingURL=square.controller.js.map