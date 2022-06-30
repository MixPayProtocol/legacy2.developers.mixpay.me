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
| `payeeId` | <span class="required">*required</span> | String |  three settlement modes are supported, normal user, robot, and multisig group, so it is usually the Mixin UUID of a normal user or robot, and you can also specify the multisigId of a sub-account. |
| `orderId` | <span class="required">*required</span> if no `traceId` | String | Unique in your system. String length **between 6-36**, must be letters, numbers, dashes and underscores and NOT space. `orderId` and `payeeId` makes a payment unique. |
| `traceId` | optional | String |  UUID, used to prevent double payment and checking the payment result. You should use `orderId` instead.  |
| `settlementAssetId` | optional | String |  assetId of settlement cryptocurrency. Settlement assets you prefer. If left blank, the payee will receive the cryptocurrency the user pays for. |
| `quoteAssetId` | optional | String |  assetId of quote cryptocurrency, the asset include cryptocurrency and fiat currency. |
| `quoteAmount` | optional | Numeric | Amount of cryptocurrency received, if left blank, the user can enter manually. |
| `remark` | optional | String |  maximum 50. Payment remark viewable by the payee. |
| `expireSeconds` | optional | Numeric | minimum 60, maximum 172800. This parameter is invalid when the quote currency and the payment currency are not the same. |
| `settlementMethod` | optional | String | Instant settlement wallet. This parameter has two values, mixin and mixpay, the default is mixin. |
| `settlementMemo` | optional | String |  maximum 200. A memo similar to Mixin Snapshots, this parameter you can customize. This parameter only takes effect when your settlementMethod is equal to mixin. |
| `returnTo` | optional | String | After successful payment, the page will jump to returnTo URL. |
| `failedReturnTo` | optional | String | After payment failure, the page will jump to failedReturnTo URL. |

### Example request - Get Payment Link

You can copy the link and open it in a brower:

```bash
https://mixpay.me/pay?payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9&settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa&quoteAssetId=usd&quoteAmount=10
```
