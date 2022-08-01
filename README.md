# MixPay Developers

Source Code for https://mixpay.me/developers/guides/introduction.

> MixPay, Payment for Web3.

## Introduction

MixPay is a decentralized crypto payment service platform built on [Mixin Network](https://developers.mixin.one/docs/introduction). You only need to specify a certain amount of currency to MixPay, the user choose any cryptocurrency to pay, and MixPay converts them automatically. For example, suppose there is a current commodity valued at $10 that needs to be payed, the merchant can choose to charge $10 in BTC or any cryptocurrency, and the user can choose to pay $10 in USDT or any cryptocurrency. And all this can be achieved only by scanning the QR code using  [Mixin Messenger](https://mixin.one/messenger). 


## Installation

```
npm install
```

## Development


```
npm run dev

.
.
.
╭────────────────────────────────────────────────────────╮
│                                                        │
│    Server address: http://127.0.0.1:3333               │
│    Watching filesystem for changes: YES                │
│    Encore server address: http://localhost:8080        │
│                                                        │
╰────────────────────────────────────────────────────────╯
.
.
.

```

## Generate static file

Generate .html static file in to public/ folder:


```
npm run build
```

> Please remote `ENV=local` entry from .env when generating static file on production.


## Run tests


```
node ace test
```
