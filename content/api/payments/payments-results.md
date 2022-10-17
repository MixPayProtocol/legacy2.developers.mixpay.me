---
summary:  MixPay API for getting a payment results.
---

## GET /payments_result

Get payment results.

:::warning
For security best practice, you **should not** trust the client side application for getting the payment result. Always make sure to call this API in your server side, to make sure the payment result is 100% correct.
:::

## Endpoint URL

```bash
https://api.mixpay.me/v1/payments_result
```

## Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `traceId` | <span class="required">*required</span> if no `orderId` | String | Trace Id of payments. |
| `orderId` | <span class="required">*required</span> if no `traceId` | String | Unique in your system. String lengths **between 6-36** must be letters, numbers, dashes and underscores and NOT space. |
| `payeeId` | <span class="required">*required</span> if has `orderId` | String | Account ID for receiving money, pls see [Three types of account](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [How to get payeeId](https://mixpay.me/developers/guides/integration-verview#payee-id). |

## Example request - GET payment results.

```json
curl -i -X GET -G https://api.mixpay.me/v1/payments_result \
-d "traceId"="a0d7791408776b47eb1dd3f94ed15d6a"
```

```json
// title: Response
{
    "code": 0,
    "success": true,
    "message": "",
    "data": {
        // `unpaid`, `pending`(processing), `failed` and `success`
        "status": "success",
        "quoteAmount": "0.01",
        "quoteSymbol": "USD",
        "paymentAmount": "0.010013",
        "paymentSymbol": "USDT",
        "payee": "payee_username",
        "payeeMixinNumber": "38xxxxx08",
        "payeeAvatarUrl": "https://mixin-images.zeromesh.net/X_GkLgUq-z7ktU_u5maX99sJKWxxxxxx170k1XcSryAsinVwtPgCRwKRu3nkjHWSEOaKco1G4yDX2E=s256",
        // On-chain transaction ID, only when on-chain payment
        "txid": "",
        "date": 1656513302,
        // when the payer pays more than he/her should 
        // pay, here is the surplus amount
        "surplusAmount": "0",
        // surplus refund status.
        // `no` - no refund needed;
        // `pending` - not refund yet;
        // `sending` - refund is processing;
        // `success` - done refund.
        "surplusStatus": "no",
        // On-chain transfer confirmations count. 
        // Only when `status` is `pending`, `confirmations` will be greater than -1.
        "confirmations": -1,
        // amount should pay
        "payableAmount": "0.010013",
        // see the "Checking for failure" section
        "failureCode": "0",
        "failureReason": "",
        // If status is `success`, will return `returnTo` when 
        // you create a payment, failed will return `failedReturnTo`'s value.
        "returnTo": "https://www.exmaple.com/show_payment_success?order_id=xxxxx",
        "traceId": "a0d7791408776b47eb1dd3f94ed15d6a"
    },
    "timestampMs": 1656561881048
}
```

:::note
This response status returns `unpaid`, `pending`(processing), `failed` and `success`. You can loop query with the `traceId`.
:::

### Checking for failure

You can use the `failureCode` and `failureReason` to check the result, their possible values are:

```json
'40000' => 'Payment overtime',
'40001' => 'Receipt address is invalid. Maybe repeat transfer or timeout.',
'40020' => 'Wrong asset paid',
'40021' => 'Double payment',
'40022' => 'TraceID does not exist',
'40024' => 'Wrong Amount paid',
```
