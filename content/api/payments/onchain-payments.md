---
summary:  MixPay API for creating an on-chain payment.
---

## POST /payments

MixPay also supports on-chain wallet payments.

### Endpoint URL

```
https://api.mixpay.me/v1/payments
```

### Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `payeeId` | <span class="required">*required</span> | String | Account ID for receiving money, pls see [Three types of account](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [How to get payeeId](https://mixpay.me/developers/guides/integration-verview#payee-id). |
| `orderId` | <span class="required">*required</span> if no `traceId` | String | Unique in your system. String lengths **between 6-36** must be letters, numbers, dashes and underscores and NOT space. `orderId` and `payeeId` make a payment unique. |
| `paymentAssetId` | <span class="required">*required</span> | String | `assetId` of payment cryptocurrency. |
| `settlementAssetId` | <span class="required">*required</span> | String | `assetId` of settlement cryptocurrency. Settlement assets you prefer. |
| `quoteAmount` | <span class="required">*required</span> | Numeric | Corresponding to the amount of quoteAssetId. For example, the current commodity value is 10 USD. |
| `quoteAssetId` | <span class="required">*required</span> | String | `assetId` of quote cryptocurrency, the asset include cryptocurrency and fiat currency. |
| `isChain` | <span class="required">*required</span> | Boolean | Whether is an on-chain payment or not. `true` is using on-chain payment, `false` means pay using Mixin App. |
| `traceId` | optional | String |  UUID, used to prevent double payment and checking the payment result. You should use `orderId` instead.  |
| `clientId` | optional | String | UUID of client of the payment. |
| `paymentAmount` | optional | String | The `quoteAmount` parameter is invalid when `paymentAmount` is not null. |
| `remark` | optional | String | maximum 50. Payment remark viewable by the payer. |
| `note` | optional | String | maximum 50. Payment note viewable by the payer. |
| `settlementMemo` | optional | String | maximum 200. A memo is similar to Mixin Snapshots, this parameter you can customize. |
| `returnTo` | optional | String | After successful payment, the URL page will want to redirect to. Useful when you are in a browser JavaScript environment. |
| `failedReturnTo` | optional | String | After payment failure, the URL page will want to redirect to. Useful when you are in a browser JavaScript environment. |
| `callbackUrl` | optional | String | After payment successfully, MixPay will issue a POST request to this URL on our server-side. For security reasons, URLs only support HTTPS and has to be [URL encoded](https://www.w3schools.com/tags/ref_urlencode.ASP). Please refer to [Payment Callback](https://mixpay.me/developers/api/payments/payment-callback). |
| `expiredTimestamp` | optional | int | Set a expired [timestamp](https://en.wikipedia.org/wiki/Unix_time). This value must be greater than 10s and less than 240min. After this period, the payment result status field will be marked as `failed`, and the `failureReason` will be `Payment overtime`. If you are not setting this value, the payer can have unlimited time to complete this payment. |

##### INFO

`settlementMemo` parameter explanations: If you use Mixin API like [GET /snapshots](https://developers.mixin.one/docs/api/transfer/snapshots), you can find the `memo` in this response. This memo is the settlementMemo set by you. If you don't use this parameter, the specification of the memo can be found [here](https://mixpay.me/developers/api/memo).

### Example request - Create On-chain Payment

```bash
curl -i -X POST https://api.mixpay.me/v1/payments \
  -d "payeeId"="a38ed284-5689-4fb9-8c2a-91fba5e32ce9" \
  -d "paymentAssetId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" \
  -d "settlementAssetId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" \
  -d "quoteAssetId"="usd" \
  -d "quoteAmount"="10" \
  -d "isChain"=1
```

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
    // The trace id when the user pays, to get the result of payment
    "traceId":"1b638d3f-e156-4621-87fd-778a410f4884",
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
    // Wallet Address for recive money
    "destination":"1NohyFdBUZ4g3ZNBoe9FL16poBUveXXf3e",
    // tag,
    "tag":""
  },
  "timestampMs":1648190663161
}
```



## Collect the money


Please refer to [Pay using an on-chain Wallet](https://mixpay.me/developers/guides/using-raw-api#pay-using-an-on-chain-wallet).



## Expiration



When is a MixPay payment expired? Please refer to [Expiration](https://mixpay.me/developers/guides/using-raw-api#expiration).

