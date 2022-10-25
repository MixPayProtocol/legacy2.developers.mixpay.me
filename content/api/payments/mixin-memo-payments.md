---
summary:  Using Mixin Memo for creating a payment.
---

MixPay also supports using Mixin transaction memos to create orders. Being familiar with Mixin transfer methods is a prerequisite for using this feature.

The memo is an optional parameter that a Mixin transaction carries when making a payment. The recipient can see the content of this memo when receiving payment. Using this, we can put the information needed in the memo to create an order.

## Memo Specification

Each parameter is separated by `|` and encoded in Base64 format. 

```bash
SOURCE|PAYEE|SETTLEMENTASSETID
```

|  Param | Optional | Description |
| --- | --- | --- |
| SOURCE | <span class="required">*required</span> | Must be `swap` |
| PAYEE | <span class="required">*required</span> | The payee ID. Please refer to the [Three types of accounts](https://mixpay.me/developers/guides/integration-verview#three-types-of-account) and [how to get a payee ID](https://mixpay.me/developers/guides/integration-verview#payee-id). |
| SETTLEMENTASSETID | <span class="required">*required</span> | Receipt crypto. [Here](https://mixpay.me/developers/api/assets/settlement-assets) you can see the settlement cryptos supported by MixPay. |

For example: 

```bash
swap|a38ed284-5689-4fb9-8c2a-91fba5e32ce9|4d8c508b-91c5-375b-92b0-ee702ed2dac5
```

Then encrypt it to Base64 format:

```bash
c3dhcHxhMzhlZDI4NC01Njg5LTRmYjktOGMyYS05MWZiYTVlMzJjZTl8NGQ4YzUwOGItOTFjNS0zNzViLTkyYjAtZWU3MDJlZDJkYWM1
```

Then you can use Mixin to transfer crypto to MixPay.

## Refunding

MixPay will return the cryptos to the payer's Mixin account when the transaction fails. We will attach the reason code in the transaction [memo](https://mixpay.me/developers/api/memo#memo-specification). Please see [here](https://mixpay.me/developers/api/error-codes#reason-for-refund) for details.
