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
var DoubleController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleController = void 0;
const common_1 = require("@nestjs/common");
const double_service_1 = require("./double.service");
const microservices_1 = require("@nestjs/microservices");
let DoubleController = DoubleController_1 = class DoubleController {
    constructor(doubleService) {
        this.doubleService = doubleService;
        this.logger = new common_1.Logger(DoubleController_1.name);
    }
    handleDoubleNumber(data) {
        this.logger.log(`Received number: ${data}`);
        if (typeof data !== 'number' || isNaN(data)) {
            this.logger.error(`Invalid data received: ${data}`);
            throw new Error('Payload must be a valid number');
        }
        const result = this.doubleService.double(data);
        this.logger.log(`Returning result: ${result}`);
        return result;
    }
};
exports.DoubleController = DoubleController;
__decorate([
    (0, microservices_1.MessagePattern)('double_number'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], DoubleController.prototype, "handleDoubleNumber", null);
exports.DoubleController = DoubleController = DoubleController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [double_service_1.DoubleService])
], DoubleController);
//# sourceMappingURL=double.controller.js.map