import { Injectable } from '@nestjs/common';
import { IAliPay } from '../interface/aliPay.interface';
import { alipaySdk } from '../util/sdk.util';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PayService {
  constructor(private configService: ConfigService) {}

  createPayLink(aliPay: IAliPay): string {
    const AppID = this.configService.get<string>('AppID');

    const bizContent = {
      out_trade_no: aliPay.orderId,
      product_code: 'FAST_INSTANT_TRADE_PAY',
      subject: '好东西', // 订单标题
      body: '大概是白色的丝袜', // 订单描述
      total_amount: '300.00', // 订单总金额，单位为元，精确到小数点后两位
    };
    const result = alipaySdk(AppID).pageExec('alipay.trade.page.pay', {
      method: 'POST',
      bizContent,
      returnUrl: aliPay.redirect,
    });
    return result;
  }
}
