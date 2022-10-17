---
summary:  MixPay API for creating a mixin payment.
---

## POST /payments

You can get the complete parameters to evoke [Mixin payment](https://developers.mixin.one/docs/schema#payment) from the API below to transfer assets.

## Endpoint URL

```
https://api.mixpay.me/v1/payments
```

## Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `payeeId` | <span class="required">*required</span> | String | Account ID for receiving money, pls see [Three types of account](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [How to get payeeId](https://mixpay.me/developers/guides/integration-verview#payee-id). |
| `orderId` | <span class="required">*required</span> if no `traceId` | String | Unique in your system. String lengths **between 6-36** must be letters, numbers, dashes and underscores and NOT space. `orderId` and `payeeId` make a payment unique. |
| `paymentAssetId` | <span class="required">*required</span> | String | `assetId` of payment cryptocurrency. |
| `settlementAssetId` | <span class="required">*required</span> | String | `assetId` of settlement cryptocurrency. Settlement assets you prefer. |
| `quoteAmount` | <span class="required">*required</span> | Numeric | Corresponding to the amount of quoteAssetId, for example, the current commodity value is 10 USD |
| `quoteAssetId` | <span class="required">*required</span> | String | `assetId` of quote cryptocurrency, the asset include cryptocurrency and fiat currency. |
| `traceId` | optional | String |  UUID, used to prevent double payment and checking the payment result. You should use `orderId` instead.  |
| `clientId` | optional | String | UUID of client of the payment. |
| `paymentAmount` | optional | Numeric | The `quoteAmount` parameter is invalid when `paymentAmount` is not null. |
| `remark` | optional | String | maximum 50. Payment remark viewable by the payer. |
| `note` | optional | String | maximum 50. Payment note viewable by the payer. |
| `settlementMemo` | optional | String | maximum 200. A memo is similar to Mixin Snapshots, this parameter you can customize. |
| `returnTo` | optional | String | After successful payment, the URL page will want to redirect to. Useful when you are in a browser JavaScript environment. |
| `failedReturnTo` | optional | String | After payment failure, the URL page will want to redirect to. Useful when you are in a browser JavaScript environment. |
| `callbackUrl` | optional | String | After payment successfully, MixPay will issue a POST request to this URL on our server-side. For security reasons, URLs only support HTTPS and has to be [URL encoded](https://www.w3schools.com/tags/ref_urlencode.ASP). Please refer to [Payment Callback](https://mixpay.me/developers/api/payments/payment-callback). |
| `expiredTimestamp` | optional | int | Set a expired [timestamp](https://en.wikipedia.org/wiki/Unix_time). This value must be greater than 10s and less than 240min. After this period, the payment result status field will be marked as `failed`, and the `failureReason` will be `Payment overtime`. If you are not setting this value, the payer can have unlimited time to complete this payment. |


#### INFO

`settlementMemo` parameter explanations: If you use Mixin API like [GET /snapshots](https://developers.mixin.one/docs/api/transfer/snapshots), you can find the `memo` in this response. This memo is the settlementMemo set by you. If you don't use this parameter, the specification of the memo can be found [here](https://mixpay.me/developers/api/memo).

## Example request - Accepting Payments



The following is a coffee shop example: 



- Merchant wants to accept BTC as a settlement asset.
- The coffee order is 10  USD (Quote Asset is USD).
- The customer wants to pay in ETH.



The request will be: 



```bash
curl -i -X POST https://api.mixpay.me/v1/payments \
  -d "payeeId"=a0d7791408776b47eb1dd3f94ed15d6a \
  -d "orderId"=myapp_20001 \
  -d "paymentAssetId"="43d61dcd-e413-450d-80b8-101d5e903357" \
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
    "isChain":false,
    
    // `expire` and `seconds` are the same thing as marking the 
    // payment "tolerate period" expired (see article end). When 
    // the "tolerate period" expired, you can reuse the same request
    // to refresh the payment.
    "expire":1659340995,
    "seconds":60,
    
    // Who will receive the money
    "payeeId":"a0d7791408776b47eb1dd3f94ed15d6a",
    
    // The trace id when the user pays, use to get the result of payment. 
    // You can use this to construct a Mixin Wallet request.
    "traceId":"fdc93358-7555-4c47-9e49-3a8343ca7c34",
    
    "clientId":"87583280-5837-464b-abd5-31038eed9aee",
    
    // Unique in your system.
    "orderId":"myapp_20001",
    
    "paymentAssetSymbol":"ETH",
    "paymentAssetId":"43d61dcd-e413-450d-80b8-101d5e903357",
    "paymentAmount":"0.00593523",
    
    "settlementAssetSymbol":"BTC",
    "settlementAssetId":"c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "estimatedSettlementAmount":"0.0004284",
    
    "quoteAssetId":"usd",
    "quoteAssetSymbol":"USD",
    "quoteAmount":"10",

    // Use to making a Mixin Wallet request.
    "memo":"cGF5bWVudHw4NzU4MzI4MC01ODM3LTQ2NGItYWJkNS0zMTAzOGVlZDlhZWU=",
    
    "recipient":"3539c3ce-52c0-4b0b-9573-c035ecb98d48",
    "destination":"",
    "tag":""
  },
  "timestampMs":1659340935523
}
```



## Collect the money


And then, you can use this response to make [Mixin Payment](https://developers.mixin.one/docs/schema#payment). Please refer to [Pay with Mixin wallet](https://mixpay.me/developers/guides/using-raw-api#pay-with-mixin-wallet).



## Expiration



When is a MixPay payment expired? Please refer to [Expiration](https://mixpay.me/developers/guides/using-raw-api#expiration).



 
