import { Module } from '@nestjs/common';
import { PayController } from './controller/pay.contoller';
import { PayService } from './service/pay.service';

@Module({
  controllers: [PayController],
  providers: [PayService],
})
export class PayModule {}
