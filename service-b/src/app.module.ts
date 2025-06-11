import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquareModule } from './square/square.module';
import { DoubleModule } from './double/double.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SquareModule,
    DoubleModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
