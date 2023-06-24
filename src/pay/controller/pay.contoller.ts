import { Controller, Get, Query, Res } from '@nestjs/common';
import { aliPayDto } from '../dto/aliPay.dto';
import { PayService } from '../service/pay.service';
import { Response } from 'express';
import { join } from 'path';

@Controller('/pay')
export class PayController {
  constructor(private readonly payService: PayService) {}

  @Get('/aliPay')
  aliPay(@Query() query: aliPayDto): string {
    /* 

    文档: https://opendocs.alipay.com/apis/api_1/alipay.trade.app.pay#响应参数

    http://127.0.0.1:5173/?charset=utf-8&
    out_trade_no=商户订单号
    method=app支付接口2.0&
    total_amount=订单价格&
    sign=签名&
    trade_no=支付宝系统中的交易流水号&
    auth_app_id=AppID&
    version=1.0&
    app_id=AppID&
    sign_type=RSA2&
    seller_id=收款支付宝账号对应的支付宝唯一用户号&
    timestamp=时间
    */
    return this.payService.createPayLink(query);
  }
}
