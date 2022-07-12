---
summary:  MixPay API for creating a one-time payment.
---

## POST /one_time_payment

If you think the above link is too long, you can use the following API to generate a temporary payment code and send this link to the payer. And temporary links can be used only once.

### Endpoint URL

```
https://api.mixpay.me/v1/one_time_payment
```

### Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `payeeId` | <span class="required">*required</span> | String | three settlement modes are supported, normal user, robot, and multisig group, so it is usually the Mixin UUID of a normal user or robot. You can also specify the multisigId of a sub-account. |
| `quoteAmount` | <span class="required">*required</span> | Numeric | Corresponding to the amount of `quoteAssetId`. For example, the current commodity value is 10 USD. |
| `quoteAssetId` | <span class="required">*required</span> | String | `assetId` of quote cryptocurrency, the asset include cryptocurrency and fiat currency. |
| `settlementAssetId` | <span class="required">*required</span> | String | `assetId` of settlement cryptocurrency. Settlement assets you prefer. |
| `isTemp` | <span class="required">*required</span> | Boolean | If `true`, it can be used only once. |
| `paymentAssetId` | optional | String | `assetId` of payment cryptocurrency. |
| `remark` | optional | String | maximum 50. Payment remark viewable by the payee. |
| `expireSeconds` | optional | Numeric | Default 86400, minimum 1, maximum 31536000. |


### Example request - One-Time Payment

```bash
curl -i -X POST https://api.mixpay.me/v1/one_time_payment \
  -d "payeeId"="a38ed284-5689-4fb9-8c2a-91fba5e32ce9" \
  -d "settlementAssetId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" \
  -d "quoteAssetId"="usd" \
  -d "quoteAmount"="10" \
  -d "isTemp"="1" 
```

```json
// title: Response
{
    "code": 0,
    "success": true,
    "message": "",
    "data": {
        "code": "525502dd-e552-4505-b114-32fe32ff23c2"
    },
    "timestampMs": 1645411665245

}
```

:::note
This interface response is a short code; you can access it by `https://mixpay.me/code/525502dd-e552-4505-b114-32fe32ff23c2`.
:::
