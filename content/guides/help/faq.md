---
summary:  A frequently asked question for using MixPay crypto payment gateway.
---

## How much do I cost to use MixPay?

There are no setup fees or monthly fees for merchants to integrate the MixPay API.

Merchants settle in cryptocurrency without any fees.

## When payer pays with on-chain payment, is there a network fee for merchants?

Merchants will always get the full amount in the quotes they choose, no matter how payer pays in any wallet or any crypto.

## When my Mixin robot recived money, how can I make sure it's come from MixPay?

You can use your Mixin robot in MixPay to recive money, and you want to use the [Mixin Snapshots](https://developers.mixin.one/docs/api/transfer/snapshots) to comfirm the money has been recived. 

Every time [create a payment in MixPay](https://mixpay.me/developers/guides/integration-verview#how-to-integrate), you can specified a `traceId`. When reading your robot's [Mixin Snapshots](https://developers.mixin.one/docs/api/transfer/snapshots), there is a `memo` JSON field, base64 decode it, and you will get the original `traceId` you specified, please refer to [About Memo](https://mixpay.me/developers/api/memo).
 
