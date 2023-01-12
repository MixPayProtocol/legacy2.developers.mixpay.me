---
summary:  MixPay API to get the estimated price and the estimated amount of the transaction.
---

## GET /payments_estimated

Get the estimated price and the estimated amount of the transaction.

This API is used to calculate the total amount that a customer has to pay and show it for the customer to confirm.

### Endpoint URL

```
https://api.mixpay.me/v1/payments_estimated
```

### Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `paymentAssetId` | <span class="required">*required</span> | String | assetId of payment cryptocurrency. |
| `settlementAssetId` | <span class="required">*required</span> | String | assetId of settlement cryptocurrency. Settlement assets you prefer. |
| `quoteAmount` | <span class="required">*required</span> | Numeric | Corresponding to the amount of quoteAssetId, for example, the current commodity value is 10 USDT |
| `quoteAssetId` | <span class="required">*required</span> | String | assetId of quote cryptocurrency.|
| `paymentAmount` | optional | Numeric | The quoteAmount parameter is invalid when paymentAmount is not null. |

### Example request - Payments Estimated.

```bash
curl -i -X GET -G https://api.mixpay.me/v1/payments_estimated \
  -d "paymentAssetId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" \
  -d "settlementAssetId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" \
  -d "quoteAssetId"="usd" \
  -d "quoteAmount"="10" 
```

```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":{
    // paymentAmount/quoteAmount
    "price":"0.00147078",
    "estimatedSettlementAmount":"0.0001",
    "settlementAssetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "settlementAssetSymbol":"BTC",
    "paymentAssetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "paymentAssetSymbol":"BTC",
    "paymentAmount":"0.0001",
    "quoteAssetSymbol":"BTC",
    "quoteAssetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "quoteAmount":"0.0001",
  },
  "timestampMs":1645768221722
}
```
