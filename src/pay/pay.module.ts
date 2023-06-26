import { Module } from '@nestjs/common';
import { PayController } from './controller/pay.contoller';
import { PayService } from './service/pay.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [PayController],
  providers: [PayService],
})
export class PayModule {}
