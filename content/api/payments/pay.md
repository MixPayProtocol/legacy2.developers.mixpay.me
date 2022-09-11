---
summary:  MixPay payment link page for quickly accepting crypto payments.
---

## GET /pay

You only need to set the amount and currency of the payment link, and MixPay will do the rest.

### Endpoint URL

```
https://mixpay.me/pay
```

### Authentication and options

|  |  |
| -- | -- |
| Authorization | Public Access |
| Limitation | No limitation |

### Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `payeeId` | <span class="required">*required</span> | String |  Account ID for receiving money, pls see [Three types of account](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [How to get payeeId](https://mixpay.me/developers/guides/integration-verview#payee-id). |
| `orderId` | <span class="required">*required</span> if no `traceId` | String | Unique in your system. String lengths **between 6-36** must be letters, numbers, dashes and underscores and NOT space. `orderId` and `payeeId` make a payment unique. |
| `traceId` | optional | String |  UUID, used to prevent double payment and to check the payment result. You should use `orderId` instead.  |
| `settlementAssetId` | optional | String | `assetId` of settlement cryptocurrency. Settlement assets you prefer. If left blank, the payee will receive the cryptocurrency the user pays for. |
| `quoteAssetId` | optional | String | `assetId` of quote cryptocurrency, the asset include cryptocurrency and fiat currency. |
| `quoteAmount` | optional | Numeric | Amount of cryptocurrency received, if left blank, the user can enter manually. |
| `remark` | optional | String |  maximum 50. Payment remark viewable by the payer. |
| `settlementMemo` | optional | String | maximum 200. A memo is similar to Mixin Snapshots, this parameter you can customise. |
| `returnTo` | optional | String | After successful payment, the page will jump to `returnTo` URL. |
| `failedReturnTo` | optional | String | After payment failure, the page will jump to `failedReturnTo` URL. |
| `callbackUrl` | optional | String | After payment successfully, MixPay will issue a POST request to this URL on our server-side. For security reasons, URLs only support HTTPS and has to be [URL encoded](https://www.w3schools.com/tags/ref_urlencode.ASP). Please refer to [Payment Callback](https://mixpay.me/developers/api/payments/payment-callback). |
| `expiredTimestamp` | optional | int | Set a expired [timestamp](https://en.wikipedia.org/wiki/Unix_time). This value must be greater than 10s and less than 240min. After this period, the payment result status field will be marked as `failed`, and the `failureReason` will be `Payment overtime`. If you are not setting this value, the payer can have unlimited time to complete this payment. |


### Example request - Get Payment Link

You can copy the link and open it in a browser:

```bash
https://mixpay.me/pay?payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9&settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa&quoteAssetId=usd&quoteAmount=10
```
