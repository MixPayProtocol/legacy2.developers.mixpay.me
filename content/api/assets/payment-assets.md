---
summary: setting/payment_assets API lists all supported assets you can use as payment assets.
---

## GET /setting/payment_assets

Payment assets only support cryptocurrency.

### Endpoint URL

```
https://api.mixpay.me/v1/setting/payment_assets
```

## Parameters

### `payeeId` | optional | String

Account ID for receiving money, pls see [Three types of account](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [How to get payeeId](https://mixpay.me/developers/guides/integration-verview#payee-id).

If you want to support more crypto assets or remove some assets, you can [contact our customer service](https://mixpay.me/developers/guides/contact-customer-service) and use this parameter to fetch your exclusive customized payment assets list.

### `quoteAssetId` | optional | String

`assetId` of quote cryptocurrency, the asset include cryptocurrency and fiat currency. 

### `quoteAmount` | optional | Numeric

Corresponding to the amount of quoteAssetId, for example, the current commodity value is 10 USD.

**Notes: `quoteAmount` has to work together with `quoteAssetId`.**

In MixPay, different crypto asset supports different price range, for example ETH support 0.01~50000 range, and  less popular crypto due to less liquidity we will support less trading amount. 

MixPay use `quoteAmount` and `quoteAssetId` to calculate the payment supported assets. It will response with `minPaymentAmount` and `maxPaymentAmount` two fields, if `maxPaymentAmount` is 0, means you cannot use this asset for this payment.

:::note
It's recommended to use this method to get the supported payment assets list.
:::

## Example request - Get Payment Assets

```bash
curl -i -X GET -H "Content-Type: application/json" \
  https://api.mixpay.me/v1/setting/payment_assets
```


```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":[
    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "iconUrl": "https://app.mixpay.me/fiats/c6d0c728-2624-429b-8e0d-d9d19b6592fa.png",
      "assetId": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      "network": "Bitcoin",
      // onChainSupported: bool, some assets may not support on-chain payment.
      "onChainSupported": true,
      // paymentAmount must not lower than this value
      "minPaymentAmount": "0.0000005",
      // paymentAmount must not greater than this value
      "maxPaymentAmount": "0.50075062",
      "chainAsset": {
        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "name": "Bitcoin",
        "symbol": "BTC",
        "iconUrl": "https://app.mixpay.me/fiats/c6d0c728-2624-429b-8e0d-d9d19b6592fa.png"
      },
      "minPaymentAmount": "0.00000043",
      "maxPaymentAmount": "0.43547747"
    },
    ...
  ],
  "timestampMs":1645588240845
}
```

:::note
This interface will only return a list of assets which can be used for payment.
:::
