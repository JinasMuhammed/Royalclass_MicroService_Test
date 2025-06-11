"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.connectMicroservice({
        transport: microservices_1.Transport.REDIS,
        options: {
            host: configService.get('REDIS_HOST') || 'localhost',
            port: parseInt(configService.get('REDIS_PORT'), 10) || 6379,
            username: configService.get('REDIS_USERNAME') || '',
            password: configService.get('REDIS_PASSWORD') || '',
        },
    });
    await app.startAllMicroservices();
    await app.listen(configService.get('PORT') || 3100);
}
bootstrap();
//# sourceMappingURL=main.js.map