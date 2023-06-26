import { Module } from '@nestjs/common';
import { PayModule } from './pay/pay.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PayModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
