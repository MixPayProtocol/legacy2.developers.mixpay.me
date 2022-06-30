## POST /payments

You can get the complete parameters to evoke [Mixin payment](https://developers.mixin.one/docs/schema#payment) from the api below to transfer assets.

### Endpoint URL

```
https://api.mixpay.me/v1/payments
```

### Parameters

|  Param | Optional | Type | Description |
| --- | --- | --- | --- |
| `payeeId` | <span class="required">*required</span> | String | three settlement modes are supported, normal user, robot, and multisig group, so it is usually the Mixin UUID of a normal user or robot, and you can also specify the multisigId of a sub-account. |
| `orderId` | <span class="required">*required</span> if no `traceId` | String | Unique in your system. String length **between 6-36**, must be letters, numbers, dashes and underscores and NOT space. `orderId` and `payeeId` makes a payment unique. |
| `paymentAssetId` | <span class="required">*required</span> | String | assetId of payment cryptocurrency. |
| `settlementAssetId` | <span class="required">*required</span> | String | assetId of settlement cryptocurrency. Settlement assets you prefer. |
| `quoteAmount` | <span class="required">*required</span> | Numeric | Corresponding to the amount of quoteAssetId, for example, the current commodity value is 10 USD |
| `quoteAssetId` | <span class="required">*required</span> | String | assetId of quote cryptocurrency, the asset include cryptocurrency and fiat currency. |
| `traceId` | optional | String |  UUID, used to prevent double payment and checking the payment result. You should use `orderId` instead.  |
| `clientId` | optional | String | UUID of client of the payment. |
| `paymentAmount` | optional | Numeric | The quoteAmount parameter is invalid when paymentAmount is not null. |
| `expireSeconds` | optional | Numeric | minimum 60, maximum 172800. This parameter is invalid when the quote currency and the payment currency are not the same. |
| `settlementMethod` | optional | String | Instant settlement wallet. This parameter has two values, mixin and mixpay, the default is mixin. |
| `remark` | optional | String | maximum 50. Payment remark viewable by the payee. |
| `note` | optional | String | maximum 50. Payment note viewable by the payer. |
| `settlementMemo` | optional | String | maximum 200. A memo similar to Mixin Snapshots, this parameter you can customize. This parameter only takes effect when your settlementMethod is equal to mixin. |
| `returnTo` | optional | String | After successful payment, the URL page will want to redirect to. Useful when you in a browser JavaScript environment. |
| `failedReturnTo` | optional | String | After payment failure, the URL page will want to redirect to. Useful when you in a browser JavaScript environment. |

##### INFO

`settlementMemo` parameter explanations: If you use Mixin API like [GET /snapshots](https://developers.mixin.one/docs/api/transfer/snapshots), you can find the `memo` in this response. This memo is the settlementMemo set by you. If you don't use this parameter, the specification of the memo can be found [here](https://developers.mixpay.me/docs/memo).

### Example request - Accepting Payments

```bash
curl -i -X POST https://api.mixpay.me/v1/payments \
  -d "payeeId"=a38ed284-5689-4fb9-8c2a-91fba5e32ce9 \
  -d "paymentAssetId"="c6d0c728-2624-429b-8e0d-d9d19b6592fa" \
  -d "paymentAmount"="0.001" \
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
    "expire":1648191480,
    // Payment expiration time
    "seconds":900,
    "payeeId":"834c17e1-1427-434a-a280-1b3cfee05111",
    // The trace id when the user pays, use to get the result of payment. And trace for mixin.
    "traceId":"4f7b0b8c-5112-4c25-9cea-4281ebf0d2dd",
    "clientId":"640a555a-b554-4790-95ec-6c5675381035",
    "paymentAssetId":"25dabac5-056a-48ff-b9f9-f67395dc407c",
    // Assets to be paid by payer. And asset for mixin
    "settlementAssetId":"25dabac5-056a-48ff-b9f9-f67395dc407c",
    "quoteAssetId":"25dabac5-056a-48ff-b9f9-f67395dc407c",
    "paymentAmount":"4",
    // The amount of assets to be paid by payer. And amount for mixin
    "quoteAmount":"4",
    "estimatedSettlementAmount":"4",
    // recipient for mixin
    "recipient":"3539c3ce-52c0-4b0b-9573-c035ecb98d48",
    // memo for mixin
    "memo":"cGF5bWVudHw2NDBhNTU1YS1iNTU0LTQ3OTAtOTVlYy02YzU2NzUzODEwMzU=",
    "settlementAssetSymbol":"TRX",
    "paymentAssetSymbol":"TRX",
    "quoteAssetSymbol":"TRX",
    "destination":"",
    "tag":""
  },
  "timestampMs":1648190580346
}
```

:::note
And then, you can use this response to make [Mixin Payment](https://developers.mixin.one/docs/schema#payment).
:::
