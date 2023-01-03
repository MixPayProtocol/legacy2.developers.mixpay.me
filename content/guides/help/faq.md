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
 
 ## What about refund logic? How can I deal with it?

If a customer pays with a "tolerate period" (set by the `expiredTimestamp` when you create a payment) expired payment, if is "Pay with Mixin wallet", the crypto assets will refund, and the payment result will be `payment overtime`. If is "Pay using an on-chain Wallet", due to the crypto transfer's nature, we can not refund the money directly, we must get the customer's wallet address first, in this scenario, you can instruct the customer to [contact our customer service](https://help.mixpay.me/en/articles/6836092-how-to-contact-customer-service). 
