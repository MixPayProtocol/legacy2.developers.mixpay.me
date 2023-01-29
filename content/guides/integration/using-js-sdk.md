---
summary:  MixPay API for creating a one-time payment.
---

The Javascript version of the MixPay API sdk

## Install

```shell
npm install mixpayjs
```

If you use `yarn`

```shell
yarn add mixpayjs
```

## Usage

```javascript
const client = require('mixpayjs')();
cient
  .createOneTimePaymentLink({
    payeeId: '{Account_ID_for_receiving_money}',
    orderId: '{Unique_ID_in_your_system}',
    // Settlement in Bitcoin
    settlementAssetId: 'c6d0c728-2624-429b-8e0d-d9d19b6592fa',
    // Quote in USD
    quoteAssetId: 'usd',
    // Receive amount
    quoteAmount: '10',
  })
  .then((data) => {
    const paymentLink = 'https://mixpay.me/code/' + data.code;
  });
```


## Resources

* [Documentation API](https://mixpay.me/developers/api/overview)