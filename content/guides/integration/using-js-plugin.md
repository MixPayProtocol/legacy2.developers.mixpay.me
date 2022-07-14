

You can use our open-source [JavaScript plugin](https://github.com/MixPayHQ/mixpayjs) to support crypto payment on your web page.

## Online Demo

![](https://developers.mixpay.me/images/js-plugin-popup.png)

- Real-time Demo: https://mixpay.me/plugins/payment.html
- Source code of the Demo: https://github.com/MixPayHQ/mixpayjs/tree/master/docs

## JS Plugin vs Paylink

Compare to Paylink, MixPay JS plugin is running on your own page, you can have more control over it. For example:

- Customize the UI;
- Use the plugin's callback function or `hide()`  and `show()` method to customize the logic.


The disadvantage of the JS Plugin is when MixPay new feature is added, you have to manually update the JS plugin.

## Source Code

The JS plugin source code repo is [https://github.com/MixPayHQ/mixpayjs](https://github.com/MixPayHQ/mixpayjs).

```bash
├── dist - Prodction ready code.
├── example - Example of the JS Plugin.
└── src - Source code of the JS Plugin.
```


`dist` file explain:

```bash
dist/
├── mixpay.css
├── mixpay.min.css   (compressed)
├── mixpay.js        (UMD)
├── mixpay.min.js    (UMD, compressed)
├── mixpay.common.js (CommonJS, default)
└── mixpay.esm.js    (ES Module)
```

## Install JS Plugin 


### Option 1. Use npm

```bash
npm install mixpayjs
```

### Option 2. Use CDN

```html
<link href="https://cdn.jsdelivr.net/npm/mixpayjs/dist/mixpay.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/mixpayjs/dist/mixpay.min.js""></script>
```

## Using JS Plugin

### Syntax

Just new the `MixPay` object and provide the necessary parameters:

```javascript
new MixPay(element, options);
```

- element
  - Type: `HTMLElement`
  - Default: `document.body`
- options
  - Type: `Object`
  - The options for payment. Check out the available [options](#options)

### Example


```html
// title: index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example of MixPay JS Plugin</title>
    <link rel="stylesheet" href="css/mixpay.css">
  </head>
  <body>
    <div id="mixpay-plugin-wrapper"></div>
    <button id="pay-with-mixpy-btn">Pay with MixPay</button>
  </body>
  <script src="js/mixpay.js"></script>
  <script src="js/main.js"></script>
</html>
```

Using the plugin as a popup:

```javascript
// title: js/main.js
window.onload = function () {

  var MixPay = window.MixPay;
  var element = document.getElementById('mixpay-plugin-wrapper');
  var btn = document.getElementById('pay-with-mixpy-btn');

  var mixpayModal = new MixPay(element, {
    isModal: true,
    hasMask: true,
    payeeId: '093bf620-9aba-4dab-90ad-6f2c9b32bb39',
    settlementAssetId: '4d8c508b-91c5-375b-92b0-ee702ed2dac5',
    settlementMemo: 'this is a demo.',
    settlementMethod: 'mixin',
    orderId: '123131',
    fontSize: 16,
    remark: 'this is a demo.',

    onReady: function () {
      console.log('onReady');
    },
    onShow: function () {
      console.log('onShow');
    },
    onClose: function () {
      console.log('onClose');
    },
    onPaymentCreate: function () {
      console.log('onPaymentCreate');
    },
    onPaymentSuccess: function () {
      console.log('onPaymentSuccess');
    },
    onPaymentFail: function () {
      console.log('onPaymentFail');
    },
  });

  btn.onclick = function () {
    if (!mixpayModal.isShow) {
      mixpayModal.show();
    } else {
      mixpayModal.close();
    }
  };
};
```

Using it as embedded element:

```
const mixpay = new MixPay(element, {
  isModal: false, // as embedded element
  .
  .
  .
});
```

## Options

| params | type    | default  |  description |
| ------ | ------- | -------- | ----------- |
| isModal| boolean| false | Render as a modal |
| hasMask | boolean|  false | Has mask or not  |
| payeeId | string | '' | The Mixin UUID of the payee |
| settlementAssetId | string | '' | AssetId of settlement cryptocurrency |
| settlementMemo | string | '' | memo |
| settlementMethod | string | mixin | 'mixin' or 'mixpay', settle to your Mixin Wallet or MixPay Account |
| clientId | string | MixPay.newUUID() |  UUID of client of the payment |
| traceId | string | '' | UUID of the payment for preventing duplicate payment |
| orderId | string | null | orderId and payeeId makes a payment unique, must be 6-36 letters, [0-9a-zA-Z_-]{6,36} |
| remark | string | '' | Payees leave a message to payers |
| note   | string | '' | Payers leave a message to payees |
| quoteAssetId | string | '' | assetId of quote cryptocurrencies |
| quoteAmount | number | '' | Amount of quote cryptocurrency |
| onReady | function | null | This event fires when quote assets and payment assets are loaded |
| onShow  | function | null | This event fires when the modal is show |
| onClose | function | null | This event fires when the modal is closed |
| onPaymentCreate | function | null  | This event fires when a payment is created |
| onPaymentSuccess | function | null | This event fires when a payment is successful |
| onPaymentFail | function | null | This event fires when a payment is failed |

## Instance properties

### `payments`

the infomation of the payment you create.

### `result`

the result infomation of the your payment;

## Instance Methods

### `show()` and `hide()`

show/hide the modal/popup, if `isModal` is `true`.


### `destory()`

Remove the modal/element and events from document.

## Global Methods

### `newUUID()`

create a random UUID for `clientId` and `traceId`.

## How to customize the UI?

You can customize the UI through `--mixpay` parent CSS class. It acts like a namespace, will not messing with your website style.

![Using CSS class to customize the UI](https://developers.mixpay.me/images/js-plugin-class.png)

## Resources

* [Documentation API](https://developers.mixpay.me/docs/api-overview)
