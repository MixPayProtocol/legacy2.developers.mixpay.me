---
summary:  MixPay API for translating a Mixin ID into UUID for format.
---

## GET /user/mixin_uuid/{mixin_id}

Providing a Mixin ID, like `40053095`, will get back to your `a38ed284-5689-4fb9-8c2a-91fba5e32ce9`.

:::info
This API only searches the MixPay users, and will not search Mixin Network. That means you have to use our MixPay App first. How to use MixPay? Please reference [Getting Started](https://developers.mixpay.me/guides/getting-started). Normally you can use this API to get `payeeID`.
:::

## How to get Mixin ID?

<p align="center">
    <img src="https://developers.mixpay.me/images/mixin-id.jpg"/>
</p>

### Endpoint URL

```json
https://api.mixpay.me/v1/user/mixin_uuid/{mixin_id}
```

### Authentication and options


|  |  |
| -- | -- |
| Authorization | Public Access |
| Limitation | No limitation |


### Example request - Get Mixin UUID.

```bash
curl -i -X GET https://api.mixpay.me/v1/user/mixin_uuid/40053095
```

```json
// title: Response
{
    "code":0,
    "success":true,
    "message":"",
    "data":{
        "payeeId":"72562124-2db9-4210-aaa6-69983610d0b7"
    },
    "timestampMs":1654769200076
}
```
