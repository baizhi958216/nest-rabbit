import AlipaySdk from 'alipay-sdk';
import { readFileSync } from 'fs';

const alipaySdk = (appid: string) =>
  new AlipaySdk({
    appId: appid,
    privateKey: readFileSync(
      `${process.cwd()}/src/pay/certs/private-key.pem`,
      'ascii',
    ),
    // 传入支付宝根证书、支付宝公钥证书和应用公钥证书。
    alipayRootCertPath: `${process.cwd()}/src/pay/certs/alipayRootCert.crt`,
    alipayPublicCertPath: `${process.cwd()}/src/pay/certs/alipayPublicCert.crt`,
    appCertPath: `${process.cwd()}/src/pay/certs/appPublicCert.crt`,
    gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do',
  });
export { alipaySdk };
