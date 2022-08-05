---
summary: setting/quote_assets API lists all supported assets you can use as the payment's quote assets.
---

## GET /setting/quote_assets

Quote assets support cryptocurrency and fiat currency.

### Endpoint URL

```
https://api.mixpay.me/v1/setting/quote_assets
```

## Example request - Get Quote Assets

```bash
curl -i -X GET -H "Content-Type: application/json" \
  https://api.mixpay.me/v1/setting/quote_assets
```

```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":[
    {
      "symbol":"USD",
      "iconUrl":"https://mixpay.me/fiats/us.svg",
      "minQuoteAmount":"0.1",
      "maxQuoteAmount":"1000",
      "decimalDigit":2,
      // 0 fiat currency, 1 cryptocurrency
      "isAsset":0,
      "assetId":"usd",
      "chainAsset":{
        
      }
    },
    {
      "symbol":"BTC",
      "iconUrl":"https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
      "minQuoteAmount":"0.00000263",
      "maxQuoteAmount":"0.02632853",
      "decimalDigit":8,
      "isAsset":1,
      "assetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      "chainAsset":{
        "id":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "symbol":"BTC",
        "name":"Bitcoin",
        "iconUrl":"https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
      }
    },
    
  ],
  "timestampMs":1645588240845
}
```

:::note
This interface will only return a list of assets used for a quote.
:::
