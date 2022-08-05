---
summary: setting/settlement_assets API lists all supported assets you can use as the payment's settlement assets.
---

## GET /setting/settlement_assets

Settlement assets support cryptocurrency and fiat currency.

### Endpoint URL

```
https://api.mixpay.me/v1/setting/settlement_assets
```

## Parameters

### `payeeId` | optional | String

Account ID for receiving money, pls see [Three types of account](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [How to get payeeId](https://mixpay.me/developers/guides/integration-verview#payee-id).

If you want to use a specified crypto asset we not yet publiclly supported, you can [contact our customer service](https://mixpay.me/developers/guides/contact-customer-service) and use this parameter to fetch your exclusive customized settlement asset.

### `quoteAssetId` | optional | String

`assetId` of quote cryptocurrency, the asset include cryptocurrency and fiat currency. 

### `quoteAmount` | optional | Numeric

Corresponding to the amount of quoteAssetId, for example, the current commodity value is 10 USD.

**Notes: `quoteAmount` has to work together with `quoteAssetId`.**

In MixPay, different crypto asset supports different trading range, for example ETH support 0.01~50000 range, and less popular crypto due to less liquidity we will support less trading amount. 

MixPay uses `quoteAmount` and `quoteAssetId` to calculate the settlement-supported assets. It will respond with `isAvailable` field, if `isAvailable` is `false`, means you cannot use this asset as a settlement asset. If you use an unsupported settlement asset, we will choose the settlement asset for you, most of the time will be the quote asset.

:::note
It's recommended to use this method to get the supported settlement assets list.
:::

### Example request - Get Settlement Assets

```bash
curl -i -X GET -H "Content-Type: application/json" \
  https://api.mixpay.me/v1/setting/settlement_assets
```


```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":[
    {
      "name":"Bitcoin",
      "symbol":"BTC",
      "iconUrl":"https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
      "assetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      "network":"Bitcoin",
      "isAsset":true,
      "chainAsset":{
        "id":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "symbol":"BTC",
        "name":"Bitcoin",
        "iconUrl":"https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
      }
    }
  ],
  "timestampMs":1645588240845
}
```

:::note
This interface will only return a list of assets which can be used for settlement.
:::
