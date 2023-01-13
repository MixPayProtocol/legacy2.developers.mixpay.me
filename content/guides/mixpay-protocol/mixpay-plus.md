---
summary: Integrate into MixPay Checkout page with your wallet payment method.
---


## Introduction

This document is used to guide crypto wallet App developers to integrate your payment functionality into MixPay's Checkout Page.

> You can visit this link to experience [MixPay's Checkout Page](https://mixpay.me/pay?payeeId=a0d77914-0877-6b47-eb1d-d3f94ed15d6a).

After integration, when users scan the payment QRCode with your wallet App and open the MixPay Checkout Page, they can use your wallet to pay. And the User Experience is close to App Native.



![](https://mixpay.me/developers/images/qrcode.png)


## Get started

In your app's Webview, inject the global `window.mixpayPlus` variable into our Checkout Page under the domain name `mixpay.me`.

The `mixpayPlus` object needs to have the following configuration and methods:

```javascript
window.mixpayPlus = {
  appId: 'example', // 唯一标识
  appName: 'Example Pay'， // 按钮|选项会显示成 Example Pay
  appIcon: 'https://xxxx.xxx/xxx.png', // 图标链接
  themeColor: '#fff', // 按钮颜色
  assetList: [], // 钱包方支持的支付币种
  ready: false, // 能否调用支付功能 false
  pay: function(optionsJSON) {} // 拉起转账
}
```

## Properties explain

| Property | Type | Description | Example |
| ------------ | ------------ | ------------ | ------------ |
| appId | String | Custom unique identification , used for page identification wallet, statistical source, etc., it is recommended to be consistent with the wallet name | For example, the appId of the Image is mixin, indicating that the source is Mixin Wallet ; if your wallet is called binance, please fill in as binance |
| appName | String | Custom button name | Just like the Mixin Pay button in Image 1, the value of appName is "Mixin Pay" |
| appIcon | String | Custom button icon | Taking Image 1 as an example, the Image in front of the word "Mixin Pay" in the Mixin Pay button is customized by this appIcon |
| themeColor | String | Customize button background color | '#fafafa' |
| ready | Boolean | Are the `pay` methods available? | true |
| assetList | Arrray<String> | List of supported payment currencies | ['43d61dcd-e413-450d-80b8-101d5e903357'] Support ETH, see [asset list API](https://api.mixpay.me/v1/setting/assets) |
| pay | Function | Button click triggers the callback method | Here in the callback Function, you can write your payment logic, such as calling the native interface of the App to initiate a transfer, or calling indeplink to initiate a transfer. |


Image 1:

![](https://mixpay.me/developers/images/checkout-page.png)


## `mixpayPlus.pay` Callback method

```javascript
mixpayPlus.pay = function(optionsJSON) {}
```

1.  `Pay` is a callback method, the role is to evoke the wallet to the specified address to the specified number of currency , click the button above will be called ;
2.  This method is customized by you. It can be implemented natively or by DeepLink and other means ;
3.  Success or failure of order payment is subject to MixPay's confirmation of receipt of currency or confirmation of order failure ;
4.  `The optionsJSON` of the `pay` method is a json string, for the convenience of native direct use. string includes the following



| Property | Type | Description | Example |
| ------------ | ------------ | ------------ | ------------ |
| assetId | String | Currency to be paid Asset identification | See [list of assets API](https://api.mixpay.me/v1/setting/assets) |
| chainAssetId | String | The asset identification of the main chain currency of the currency to be paid | See [list of assets API](https://api.mixpay.me/v1/setting/assets) |
| chainId | String | Hexadecimal number, the network Id of the main chain currency | '0x1 ' - Used to distinguish a coin on multiple chains, see Appendix 1 |
| amount | String | Decimal digits, the precision problem uses string type | '0.001' |
| address | String | Currency receiving address |  |
| memo | String | Remarks, memo (if EOS transfer requires memo field, please use the given value) |  |
| contract | String | Contract address (if the contract is used for transfer, or the given value can be used when determining the currency and other requirements) |  |
| symbol | String | Currency abbreviation , this should correspond to the currency in Schedule 1 | ETH |
| precision | Number | Currency transfer accuracy | 6 |


## Appendix 1: chainId possible parameters

```bash
0x1 Ethereum Mainnet
0x120c7 Mixin Virtual Machine
0x89 Polygon Mainnet
0x38 Binance Smart Chain
```

## Resources

-   [Android MixPay+ DEMO](https://github.com/MixPayProtocol/mixpay-plus-demo-android)
-   [List of assets API](https://api.mixpay.me/v1/setting/assets)
