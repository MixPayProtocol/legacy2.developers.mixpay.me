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
curl -i -X POST https://api.mixpay.me/v1/multisig \
  -d "receivers[]"="f4dc0c64-b169-11ec-b909-0242ac120002" \
  -d "receivers[]"="081172a6-b16a-11ec-b909-0242ac120002" \
  -d "receivers[]"="0c64b4e4-b16a-11ec-b909-0242ac120002" \
  -d "threshold"=2
```

:::warning
The `multisigId` show bellow is fake data, please don't use it on any purpose.
:::

```json
// title: Response
{
  "code":0,
  "success":true,
  "message":"",
  "data":{
    "multisigId":"bd6039-ffae-451b-9748-33624d731dfa"
  },
  "timestampMs":1648632759499
}
```

