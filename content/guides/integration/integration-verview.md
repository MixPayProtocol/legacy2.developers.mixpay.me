---
summary:  Overview of all the integration methods that MixPay provided.
---

## MixPay Payment flow

To get started, let's have a bird's eyes view of the MixPay Payment flow: 

1.  The customer confirms the order details.
2.  The merchant creates orders and asks customers to pay (The checkout page).
3.  MixPay is waiting for payment.
4.  The merchant queries payment results and shows the result to the customer.

![](https://developers.mixpay.me/images/qmhxunt.png)

## Where does the money go?

When you received the customer's payment, you have two options to transfer the crypto assets into: 

1. Mixin Wallet (default) ;
2. MixPay Wallet.



Through the API of MixPay, the crypto paid by the user is **settled directly to your Mixin bot, MixPay user, or Mixin Wallet.**



## Where to view all the transactions?

Open the MixPay App in the Mixin App, click the "Payment History" entry like below:

![](https://developers.mixpay.me/images/payment-history-entry.png)

## Three types of assets

- [Payment Assets](https://developers.mixpay.me/docs/api/assets/payment-assets) - Used when you create a payment;
- [Quote Assets](https://developers.mixpay.me/docs/api/assets/quote-assets) - Used when you calculate the total payment amount and show it to the customers.
- [Settlement Assets](https://developers.mixpay.me/docs/api/assets/settlement-assets) - Used when you setting the payee settlement assets;

## Three type of account

MixPay supports three type of account: 

- User account - Normal Mixin & MixPay user, the account that you created using mobile phone number. ID of MixPay user is equal to Mixin ID.
- Multi-Signature account -  This is suitable for if your store is owned by mulitple people. Please refer to thoes articles:
  -  [How to create a multi-signature account？](https://help.mixpay.me/tutorials/creat-a-multi-signature-account) . 
  - [How to use multi-signature group](https://help.mixpay.me/tutorials/how-to-use-multi-signature-group?from_search=93093843)
  - [How to use multi-signature groups and withdrawals?](https://help.mixpay.me/tutorials/how-to-use-multi-signature-groups-and-withdrawals)

- Mixin Robot account - [Mixin's Messenger Bot](https://developers.mixin.one/docs/dapp/mixin-applications#messenger-bot), it's programmable, thus is more flexible, this is for more advanced users.

If you don't know how to choce, you can go with the "User account", or [contact our customer service](https://developers.mixpay.me/guides/contact-customer-service).

## Payee ID

`payeeId` is the account's UUID.

This UUID is very important and **determines the destination of the money received.** 

There are two ways of getting the payee's UUID: 

- You can use this bot (7000101422) to get the Mixin User/Robot UUID, just send the Mixin ID in the chat window to the bot, and it will reply back with the corresponding UUID. It's simple and no programming is required.

- Also if the user UUID you want to acquire is a MixPay user, you can easily get this UUID via [Get Mixin UUID API](https://developers.mixpay.me/api/users/get-mixin-uuid) .



## How to integrate? 

There are several ways you can integrate MixPay to accept crypto payments:

1. [Paylink](https://developers.mixpay.me/guides/using-paylink) -  MixPay hosted web page, all user interaction happened on this page, you can use it as a "Pay with Crypto" button.
2. [JS Plugin](https://developers.mixpay.me/guides/shopify-plugin) -  Like Paylink to handle all user payment relative interaction, but on your own web page, you can have more control over it.
3. [Raw API call](https://developers.mixpay.me/guides/using-raw-api) - Above to method are in the browser, if you are in the circumstance that can't use the browser, maybe this is your choice.
4. [Shopify Plugin](https://developers.mixpay.me/guides/shopify-plugin).
5. WordPress WooCommerce Plugin (Work in proccess...).

Here is just a brief of the integration method available, for more detailed instructions, please visit the doc entry at the left menu.

