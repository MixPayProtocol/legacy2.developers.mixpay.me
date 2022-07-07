---
summary: setting/settlement_assets API list all supported assets you can use as the payment's settlement assets.
---

## GET /setting/settlement_assets

Settlement assets support cryptocurrency and fiat currency.

### Endpoint URL

```
https://api.mixpay.me/v1/setting/settlement_assets
```

### Authentication and options


|  |  |
| -- | -- |
| Authorization | Public Access |
| Limitation | No limitation |

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
