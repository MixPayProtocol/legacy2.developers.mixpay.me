
Before you get started, please make sure you are familiar with MixPay and Mixin Messenger, and then you need to have a Mixin account. You need to search for `7000104220` in Mixin Messenger, click "Add bot" and open it. This bot is the best demo for this API. This article will explain to you how to use this API better by showing the features of MixPay.

![](https://developers.mixpay.me/images/mipklmn.png)

In MixPay, click the "Receive" button to enter the personal QR code home page. When you scan this QR code with your phone, you will go to a payment page. Come and have a try. Just scan the QR code below.

:::note
Note: The payee of all examples in this article is the official MixPay demo account.
:::

![](https://developers.mixpay.me/images/rposbfm.png)

Using the MixPay API, you only need to perform the following steps.

1.  The customer confirms the payment details.
2.  The merchant creates orders and asks customers to pay.
3.  MixPay is waiting for payment.
4.  The merchant query payment results and notify the customer.

![](https://developers.mixpay.me/images/qmhxunt.png)

Let's assume a scenario where someone goes to your store to buy something, he needs to pay you $10, and you want to receive BTC. But how do you receive payments in your store or at the POS with MixPay? Get started accepting crypto payments by following along in our step-by-step integration guide.

For example, you need to charge $10 in BTC, we can do this (You can copy the link and open it in a brower:):

```
https://mixpay.me/pay?payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9&settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa&quoteAssetId=usd&amount=10
```

You just need to ask someone to open this link to pay.

![](https://developers.mixpay.me/images/pvfjlpq.gif)

Please [see here](https://developers.mixpay.me/api/overview#one-time-payment) for link generation rules.

If you want to exchange 0.01 BTC to ETH, you need to do a lot of work. But if you use MixPay, you only need to make a simple request.

```bash
curl -i -X POST -H "Content-Type: application/json" \
    https://api.mixpay.me/v1/payments --data PAYLOAD
```

PAYLOAD

```json
{
    "amount": "0.01",
    "paymentAssetId": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "settlementAssetId": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "payeeId":"a38ed284-5689-4fb9-8c2a-91fba5e32ce9",
    "quoteAssetId": "43d61dcd-e413-450d-80b8-101d5e903357",
}
```

For more parameters, please check [API](https://developers.mixpay.me/api/overview).
