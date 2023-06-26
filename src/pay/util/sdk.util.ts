import AlipaySdk from 'alipay-sdk';
import { readFileSync } from 'fs';

const certpath = `${process.cwd()}/src/pay/certs`;

const alipaySdk = (appid: string) =>
  new AlipaySdk({
    appId: appid,
    privateKey: readFileSync(`${certpath}/private-key.pem`, 'ascii'),
    // 传入支付宝根证书、支付宝公钥证书和应用公钥证书。
    alipayRootCertPath: `${certpath}/alipayRootCert.crt`,
    alipayPublicCertPath: `${certpath}/alipayPublicCert.crt`,
    appCertPath: `${certpath}/appPublicCert.crt`,
    gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do',
  });
export { alipaySdk };
