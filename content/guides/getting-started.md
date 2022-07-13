---
summary:  In this article will guide how to integrate MixPay into your existing system.
---

This article is your first step to integrating MixPay crypto payment gateway into your existing system.

## Mixin & MixPay

First of all, let's get familiar with Mixin & MixPay.

### 1. Whit is Mixin?

In general,  [Mixin consists of two-part:

- Mixin Network
- Mixin Messenger App

### 2. What is Mixin Network?

A lightning-fast and decentralized network for transferring digital assets.

You can see it as a blockchain that handles all the payment transactions.

### 3. What is Mixin App?

Most of the time, we refer Mixin App as the Mixin Messenger App.

Mixin App is an open-source **cryptocurrency wallet**. Mixin App also has a real-time messaging feature, like WhatsApp.

### 4. Mixin & MixPay?

MixPay uses the Mixin App [Messenger Bot](https://developers.mixin.one/docs/dapp/mixin-applications#messenger-bot) to construct the UI, which is an application inside Mixin App. 

On the server-side, MixPay leverage the [Mixin Network](https://developers.mixin.one/docs/mainnet/overview) to transfer crypto-assets.

### 5. How to install Mixin App?

You can download the  Mixin Messenger App at [Mixin's official website](https://mixin.one/messenger), currently, it supports desktop applications, but only the mobile App has the wallet feature. In order to proceed with our integration with MixPay, please install the mobile App.

After installed, just use your phone number to register an account, and set up the wallet's PIN number, and you are all set.

### 6. How to install MixPay App?

Once you have a Mixin account. Open the Mixin App:

- Step 1. Search for `7000104220` , like the image shown below;
- Step 2. Click "Add bot";
- Step 3. Click the little robot icon to open MixPay.

![](https://developers.mixpay.me/images/mipklmn.png)

## MixPay Payment flow

To get started, let's have a bird's eyes view of the MixPay Payment flow: 

1.  The customer confirms the order details.
2.  The merchant creates orders and asks customers to pay (The checkout page).
3.  MixPay is waiting for payment.
4.  The merchant queries payment results and shows the result to the customer.

![](https://developers.mixpay.me/images/qmhxunt.png)

## How to integrate? 

There are several ways you can integrate MixPay to accept crypto payments:

1. Paylink -  MixPay hosted web page, all user interaction happened on this page, you can use it as a "Pay with Crypto" button.
2. JS Plugin -  Like Paylink to handle all user payment relative interaction, but on your own web page, you can have more control over it.
3. Raw API call - Above to method are in the browser, if you are in the circumstance that can't use the browser, maybe this is your choice.
4. Shopify Plugin.
5. WordPress  WooCommerce Plugin.

Above is just a brief of the integration method available, for more detailed instructions, please visit the doc entry at the left menu.

## Where does the money go?

When you received the customer's payment, you have two options to transfer the crypto assets into: 

1. Mixin Wallet (default) ;
2. MixPay Wallet.

## Where to view all the transactions?

Open the MixPay App in the Mixin App, click the "Payment History" entry like below:

![](https://developers.mixpay.me/images/payment_history.png)
