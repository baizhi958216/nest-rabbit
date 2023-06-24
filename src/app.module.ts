import { Module } from '@nestjs/common';
import { PayModule } from './pay/pay.module';

@Module({
  imports: [PayModule],
})
export class AppModule {}
