import { Module } from '@nestjs/common';
import { DoubleController } from './double.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'REDIS_SERVICE', // This name is used for injecting the ClientProxy
        imports: [ConfigModule], // Enables access to environment variables
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.REDIS,
          options: {
            host: configService.get<string>('REDIS_HOST') || 'localhost', // Host of the Redis server (default: localhost)
            port: parseInt(configService.get<string>('REDIS_PORT'), 10) || 6379, // Port of the Redis server (default: 6379)
            username: configService.get<string>('REDIS_USERNAME') || '', // Optional: Redis username (usually empty unless Redis is secured)
            password: configService.get<string>('REDIS_PASSWORD') || '', // Optional: Redis password (used if Redis auth is enabled)
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [DoubleController],
})
export class DoubleModule {}
