"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SquareService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareService = void 0;
const common_1 = require("@nestjs/common");
let SquareService = SquareService_1 = class SquareService {
    constructor() {
        this.logger = new common_1.Logger(SquareService_1.name);
    }
    square(num) {
        this.logger.debug(`Calculating square of ${num}`);
        const result = num * num;
        this.logger.debug(`Result: ${result}`);
        return result;
    }
};
exports.SquareService = SquareService;
exports.SquareService = SquareService = SquareService_1 = __decorate([
    (0, common_1.Injectable)()
], SquareService);
//# sourceMappingURL=square.service.js.map