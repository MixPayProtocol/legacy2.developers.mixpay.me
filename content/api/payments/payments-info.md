---
summary:  MixPay API for get a payment detail.
---

## GET /payments_info

Get the payments info.

### Endpoint URL

```
https://api.mixpay.me/v1/payments_info
```

### Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `traceId` | <span class="required">*required</span> | String | UUID, varchar(36), used to prevent double payment. |
| `clientId` | optional  | String | UUID of client of the payment. |

### Example request - Payments Info.

```bash
curl -i -X GET -G https://api.mixpay.me/v1/payments_info \
  -d "traceId"="a38ed284-5689-4fb9-8c2a-91fba5e32ce9" \
  -d "clientId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" 
```


```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":{
    "isChain":false,
    // Payment expiration time
    "expire":1648191480,
    "seconds":900,
    "payeeId":"834c17e1-1427-434a-a280-1b3cfee05111",
    // The trace id when the user pays, to get the result of payment. And trace for mixin.
    "traceId":"4f7b0b8c-5112-4c25-9cea-4281ebf0d2dd",
    "clientId":"640a555a-b554-4790-95ec-6c5675381035",
    // Assets to be paid by payer. And asset for mixin
    "paymentAssetId":"25dabac5-056a-48ff-b9f9-f67395dc407c",
    "settlementAssetId":"25dabac5-056a-48ff-b9f9-f67395dc407c",
    "quoteAssetId":"25dabac5-056a-48ff-b9f9-f67395dc407c",
    // The amount of assets to be paid by payer. And amount for mixin
    "paymentAmount":"4",
    "quoteAmount":"4",
    "estimatedSettlementAmount":"4",
    // memo for mixin
    "memo":"cGF5bWVudHw2NDBhNTU1YS1iNTU0LTQ3OTAtOTVlYy02YzU2NzUzODEwMzU=",
    // recipient for mixin
    "recipient":"3539c3ce-52c0-4b0b-9573-c035ecb98d48",
    "settlementAssetSymbol":"TRX",
    "paymentAssetSymbol":"TRX",
    "quoteAssetSymbol":"TRX",
    "destination":"",
    "tag":""
  },
  "timestampMs":1648190580346
}
```

Or on-chain Payment:

```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":{
    "isChain":true,
    // Payment expiration time
    "expire":1647179141,
    "seconds":600,
    "payeeId":"834c17e1-1427-434a-a280-1b3cfee05111",
    // The trace id when the user pays,
    to get the result of payment"traceId":"1b638d3f-e156-4621-87fd-778a410f4884",
    "clientId":"8f263764-3103-4be2-aff1-0530d6976e86",
    "paymentAssetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "settlementAssetId":"eea900a8-b327-488c-8d8d-1428702fe240",
    "quoteAssetId":"4d8c508b-91c5-375b-92b0-ee702ed2dac5",
    // The amount of assets to be paid by payer
    "paymentAmount":"0.00025836",
    "quoteAmount":"10",
    "estimatedSettlementAmount":"2.06515747",
    "memo":"",
    "recipient":"",
    "settlementAssetSymbol":"MOB",
    "paymentAssetSymbol":"BTC",
    "quoteAssetSymbol":"USDT",
    // Address
    "destination":"1NohyFdBUZ4g3ZNBoe9FL16poBUveXXf3e",
    // tag, only useful in transfering EOS
    "tag":""
  },
  "timestampMs":1648190663161
}
```
