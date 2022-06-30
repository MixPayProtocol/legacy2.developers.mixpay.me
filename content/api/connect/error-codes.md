### Global error response

Global error response, example:

```json
{
  "code": 10008,
  "success": false,
  "message": "The system is under maintenance and cannot be paid temporarily. If you have any questions, please contact customer service.",
  "data": [],
  "timestampMs": 1635734004508
}
```

### Basic code

| Code | Message |
| :-- | :-- |
| -1 | Server error, please try again later. |
| 2000 | Insufficient permissions. |
| 404 | The payment link you visited does not exist. |
| 1017 | Parameter error. |
| 1429 | Your request frequency is too high, please try again later. |
| 10000 | Mixin authorization expired. |
| 10001 | User does not exist. |
| 10002 | The currency does not exist or does not supported exchanging. |
| 10003 | Does not support this quote asset. |
| 10004 | The price is too low. |
| 10005 | The price is too high. |
| 10006 | The transfer amount exceeds 1000 USDT. |
| 10007 | We can not provide service to you. |
| 10008 | Payments are suspended temporarily due to system maintenance. Please contact customer service if you have any questions. |
| 10009 | Withdrawals are suspended temporarily due to system maintenance. If you have any questions, please contact customer service. |
| 10010 | Insufficient balance of assets. |
| 10011 | Parameter error |
| 10032 | Unpaid. |
| 10033 | The same user can be added only 3 times in 24 hours. |
| 10034 | Price exception, please try again later. |
| 10035 | The multisigId does not belong to the token. |
| 10036 | The robot does not exist. |
| 10037 | This is not a robot. |
| 10039 | This is not your robot and cannot be bound. |
| 10040 | The robot is already bound. |
| 10041 | The threshold cannot exceed the number of payees. |
| 10042 | More than 20 multi-signature group bindings. |
| 10043 | More than 20 robot bindings. |
| 10044 | Please set the name of this multi-signature group first. |

### Reason for refund

| Code | Message |
| :-- | :-- |
| 40000 | Payment timeout. |
| 40001 | The payee does not exist in the url. |
| 40002 | The asset in url does not exist or does not support exchanging. |
| 40003 | The transfer amount exceeds 1000 USDT. |
| 40005 | The minimum number of decimal places in url exceeds the limit. |
| 40006 | The minimum number of integer digits in url exceeds the limit. |
| 40008 | Insufficient balance of assets. |
| 40008 | Server error. |
| 40011 | The system is temporarily out of service. |
| 40012 | Withdrawal methods with memo do not exist. |
| 40013 | Withdrawal assets with memo do not exist. |
| 40014 | The withdrawal address with memo does not exist. |
| 40015 | You currently have an incomplete withdrawal, please complete it first and then try again. |
| 40016 | The withdrawal amount is too large. |
| 40017 | The Withdrawal amount is too small. |
| 40018 | Transfer amount is too small. |
| 40019 | Transfer amount is too large. |
| 40020 | Wrong payment assets. |
| 40021 | Double payment. |
| 40022 | TraceId does not exist. |
| 40023 | Payee does not exist in Memo. |
| 40024 | Wrong Amount paid. |
