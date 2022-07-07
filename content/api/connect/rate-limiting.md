---
summary:  MixPay API  rate limits can show in the header "x-ratelimit".
---

### Rate Limiting

MixPay limits all APIs to 60 requests per minute. When you exceed the limit, the API will report error 1429.

You can always make use of those response headers:

```json
x-ratelimit-limit: 60
x-ratelimit-remaining: 59
```
