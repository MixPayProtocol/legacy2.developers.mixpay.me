---
summary:  About MixPay payment's strict mode.
---

### Strict Mode

MixPay will be traded in real-time through the exchange at the time of settlement. However, due to the different depths of each currency, MixPay has set limit protection to not go to the exchange when the settlement amount is exceeded to prevent the loss of enormous slippage caused by trading too large amounts at the time of settlement.


1. `strictMode` is off by default. However, under the above extreme conditions, MixPay may not be able to settle according to the `settlementAssetId` you initially set. Therefore, we will settle for you according to `quoteAssetId` so that it will not affect the payers' payment.

	In addition, you need to pay attention when you use Fiat currency as `quoteAssetId`. If the quoted currency is Fiat, `AED`, the settlement currency will be `mAED`. Otherwise, the settlement currency will be `USDC`.

2. If you enable strict mode, payers cannot make the payments under the above extreme conditions because MixPay can only settle according to the `settlementAssetId`. 

