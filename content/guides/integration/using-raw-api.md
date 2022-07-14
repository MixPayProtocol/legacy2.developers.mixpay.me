This method is the most flexible way to make a payment.

It's suitable for scenarios that can not use a browser, such as the Mobile Native App.


## Constructing the accept payment view

When a customer makes a purchase, on your App check-out page, show a "Pay with Crypto" button. When the customer clicks the button, you should construct an App view like our [MixPay payment page](https://mixpay.me/pay?payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9&settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa&quoteAssetId=4d8c508b-91c5-375b-92b0-ee702ed2dac5&quoteAmount=10&orderId=product1000432&returnTo=the_customer_order_payment_url_on_your_site)

![Request for payment view](https://developers.mixpay.me/images/pay-with-mixpay-iphone.png)


1. In this view:
    1. Using [Quote Assets ](https://developers.mixpay.me/api/assets/quote-assets)API to fetch the price in any supported cryptocurrency;
    2. Using [Payment Assets ](https://developers.mixpay.me/api/assets/payment-assets)API to let customer select which cryptocurrency he/she wants to pay;
    3. Tip: Above API calls can all happen on your App Side.

2. When the customer **clicks to confirm**, based on which wallet has been chosen: 
    1. If the customer chose "Mixin Wallet", you can call our [accepting-payments API](https://developers.mixpay.me/api/payments/accepting-payments) to create a payment;
    
    2. If It's an "On-chain Wallet", should call our [onchain-payments API](https://developers.mixpay.me/api/payments/onchain-payments) to create a payment;
    
3. When payment is created successfully, your App base the response, performs corresponding actions, to collect user payments (This step will explain later).

4. When the customer finishes paying crypto ( depending on what cryptocurrency the customer chooses to pay, the delay varies from 5 seconds to 30mins or more), showing a "Waiting Payment Processing" hint to the customer;

5. In the meantime, the App client uses the `orderId` to call [payments-results API](https://developers.mixpay.me/api/payments/payments-results) for checking payment results. Or using the [Payment Callback](https://developers.mixpay.me/api/payments/payment-callback) on your server side.

6. It's recommended to make the Payments Results API call every two seconds.


### Pay with Mixin wallet 

In the above **step 3**, if the customer is selecting **Pay using** **Mixin** **Wallet**, your App should make a call to  [accepting-payments API](https://developers.mixpay.me/api/payments/accepting-payments).

When getting the MixPay API result, your App client has to call Mixin App using URL Schema([What is URL Schema? ](https://helpcenter.trendmicro.com/en-us/article/tmka-18277)) to finish the payment:  

```bash
mixin://pay?recipient=&asset=&amount=&memo=&trace=
```

As you can see, there are parameters in the Mixin URL Schema, those parameter value are matching  [Accepting Payments ](https://developers.mixpay.me/api/payments/accepting-payments)response as following: 

```bash
// Mixin Param = MixPay Accepting Payments API result
recipient=recipient
asset=paymentAssetId
amount=paymentAmount
memo=memo
trace=traceId
```

Just passing the key value correspondingly, and the URL Schema will do the rest.

### Pay using an on-chain Wallet

In above **step 3**, if the customer is selecting **Pay using the on-chain Wallet**, your App should make a call to  [onchain-payments API](https://developers.mixpay.me/api/payments/onchain-payments).

> Note: [onchain-payments API](https://developers.mixpay.me/api/payments/onchain-payments)and [accepting-payments API](https://developers.mixpay.me/api/payments/accepting-payments) are using the same endpoint, there're only difference is the on-chain payment API payload with an `isChain` key set to `true`.

At the [onchain-payments API](https://developers.mixpay.me/api/payments/onchain-payments) JSON Response, there is a key call `destination`， this is the Address customer has to transfer the cryptocurrency.

You can reference the following UI to construct your App View:

![Show wallet address QRcode View](https://developers.mixpay.me/images/show-wallet-address-qrcode-iphone.png)

> **Note: If the payment assets are EOS, you can use the** **`tag`** **and** **`destination`** **from the API result.**


## Getting the result

At this point, customers are paying crypto using our Paylink, how can you get the paying results?

On your server side, you can loop through the [payments-results API](https://developers.mixpay.me/api/payments/payments-results), using `orderId` + `payeeId`.

It's recommended to implement the [Payment Callback](https://developers.mixpay.me/api/payments/payment-callback) flow, for better performance.

