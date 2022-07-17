---
summary:  You can use our MixPay payment page to create a MixPay payment. Paylink is the most convenient way of integrating MixPay.
---

You can use our MixPay payment page to create a MixPay payment. Paylink is the most convenient way of integrating MixPay.

## Start with an example.

Here is an example, click the following button and check it out yourself:


<a href="https://mixpay.me/pay?payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9&settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa&quoteAssetId=4d8c508b-91c5-375b-92b0-ee702ed2dac5&quoteAmount=10&orderId=product1000432&returnTo=the_customer_order_payment_url_on_your_site">
<img src="https://developers.mixpay.me/images/pay-with-crypto-btn.png" width="300px"}>
</a>


For better reference, the "Pay with crypto" button's link is:

https://mixpay.me/pay?payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9&settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa&quoteAssetId=4d8c508b-91c5-375b-92b0-ee702ed2dac5&quoteAmount=10&orderId=product1000432&returnTo=the_customer_order_payment_url_on_your_site


When customers are on the checkout page, provide a "Pay with Crypto" button (with the above URL): 


1. When customers click the button, jump to our MixPay payment page;
2. On our MixPay payment page, customers pay the crypto coin;
3. We will redirect you to your site after the customer finishes the payment.


## Parameters explain

Below is how to construct the URL parameters, according to the example URL above: 

```bash
payeeId=a38ed284-5689-4fb9-8c2a-91fba5e32ce9
settlementAssetId=c6d0c728-2624-429b-8e0d-d9d19b6592fa
quoteAssetId=4d8c508b-91c5-375b-92b0-ee702ed2dac5
quoteAmount=10
orderId=product1000432
returnTo=the_customer_order_payment_url_on_your_site
```


1. `payeeId` is the receiver ID in UUID format. Here is how you can see the UUID  [get-mixin-uuid API](https://developers.mixpay.me/docs/api/users/get-mixin-uuid);
2. `settlementAssetId` is the specific coin will the payee wan to accept. You can see the supported asset id in [Settlement Assets](https://developers.mixpay.me/docs/api/assets/settlement-assets) in UUID format.
3. `quoteAssetId` is the cryptocurrency in UUID format, and you can see the supported asset id in [Quote Assets](https://developers.mixpay.me/docs/api/assets/quote-assets).
4. `quoteAmount` is the total payment amount according to the `quoteAssetId`.
5. `orderId`   -   Unique in your system. String lengths **between 6 and 36 must be letters, numbers, dashes, underscores, and NO space. `orderId` and `payeeId` make a payment unique. 
6. `returnTo` when the payment is finished, the customer will be redirected to this URL. Generally will be the order detail page.



## Getting the result

At this point, customers are paying crypto using our Paylink; how can you get the paying results?

On your server side, you can loop through the [payments-results API](https://developers.mixpay.me/api/payments/payments-results) using `orderId` + `payeeId`.

It's recommended to implement the [Payment Callback](https://developers.mixpay.me/api/payments/payment-callback) flow for better performance.

