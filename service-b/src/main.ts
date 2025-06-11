import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: configService.get<string>('REDIS_HOST') || 'localhost',
      port: parseInt(configService.get<string>('REDIS_PORT'), 10) || 6379,
      username: configService.get<string>('REDIS_USERNAME') || '',
      password: configService.get<string>('REDIS_PASSWORD') || '',
    },
  });

  await app.startAllMicroservices();
  await app.listen(configService.get('PORT') || 3100);
}
bootstrap();
