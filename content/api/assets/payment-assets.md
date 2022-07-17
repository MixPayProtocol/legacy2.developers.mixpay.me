---
summary: setting/payment_assets API lists all supported assets you can use as payment assets.
---

## GET /setting/payment_assets

Payment assets only support cryptocurrency.

### Endpoint URL

```
https://api.mixpay.me/v1/setting/payment_assets
```

### Authentication and options

|  |  |
| -- | -- |
| Authorization | Public Access |
| Limitation | No limitation |

### Example request - Get Payment Assets

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
      }
    },
    ...
  ],
  "timestampMs":1645588240845
}
```

:::note
This interface will only return a list of assets which can be used for payment.
:::
