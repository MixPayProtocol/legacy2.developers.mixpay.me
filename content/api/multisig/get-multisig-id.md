---
summary:  MixPay API for getting Multisig Group Id
---

## POST /multisig

Get Multisig Group Id

### Endpoint URL

```
https://api.mixpay.me/v1/multisig
```

### Parameters

|  Param | Description |
| --- | --- |
| `receivers` | Array, members of multisig group, each member must be a valid Mixin UUID, minimum 3, maximum 256. |
| `threshold` | Integer, threshold values for multisig group, not more significant than the size of receivers. |

### Example request - Get Multisig Group Id.

```bash
curl -i -X GET -H "Content-Type: application/json" https://api.mixpay.me/v1/multisig?receivers=['f4dc0c64-b169-11ec-b909-0242ac120002','081172a6-b16a-11ec-b909-0242ac120002','0c64b4e4-b16a-11ec-b909-0242ac120002']&threshold=2
```

```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":{
    "multisigId":"bd603c59-ffae-451b-9748-33624d731dfa"
  },
  "timestampMs":1648632759499
}
```
