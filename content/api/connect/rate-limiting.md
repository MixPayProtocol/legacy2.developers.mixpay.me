---
summary:  MixPay API  rate limits can show in the header "x-ratelimit".
---

### Rate Limiting

MixPay limits all APIs to 60 requests per minute. When you exceed the limit, the API will report error 1429.


You can run the following command to test it out:

```bash
curl -s -I -X GET https://api.mixpay.me/v1/setting/payment_assets \
| grep ratelimit
```

```json
// title: Result
x-ratelimit-limit: 60
x-ratelimit-remaining: 59
```
