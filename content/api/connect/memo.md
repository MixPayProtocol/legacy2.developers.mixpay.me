---
summary:  Decode MixPay payment's memo.
---

If you use Mixin API [GET /snapshots](https://developers.mixin.one/docs/api/transfer/snapshots), you can get the following response. The parameter Memo is sent by MixPay settings.


```json
// title: Response
{
  "data": [
    {
      "type": "transfer",
      "snapshot_id": "922a6f2c-206e-4a05-863d-a542c4e32227",
      "opponent_id": "a37c0fcf-1fd6-4375-a7f8-7ec6e2544c7b",
      "asset_id": "25dabac5-056a-48ff-b9f9-f67395dc407c",
      "amount": "1",
      "opening_balance": "32.65891055",
      "closing_balance": "33.65891055",
      "trace_id": "6aaf1873-d834-4d39-954f-c79eaa07f768",
      "memo": "UE18ZDI0OWQwNDYtZjYzOC00NDFjLThlNDMtOThjZGI1N2EzMmM2fFRoaXMgaXMgbXkgY3VzdG9tIG1lbW9+IDEwMCBjaGFyIG9ubHk=",
      "created_at": "2022-03-22T09:53:13.50183Z",
      "counter_user_id": "a37c0fcf-1fd6-4375-a7f8-7ec6e2544c7b"
    }
  ]
}
```

Parse the parameters in the response memo via `base64_decode`, you can get the original information.

```json
// title: Response
base64_decode('UE18ZDI0OWQwNDYtZjYzOC00NDFjLThlNDMtOThjZGI1N2EzMmM2fFRoaXMgaXMgbXkgY3VzdG9tIG1lbW9+IDEwMCBjaGFyIG9ubHk')
PM|d249d046-f638-441c-8e43-98cdb57a32c6
```

## Memo Specification

Each parameter is separated by `|` and encoded in base64 format.

And the parameters include `SOURCE|TRACE|EXPAND`. Below is the detailed parameter information.

| CODE | SOURCE | TRACE | EXPAND |
| :-- | :-- | :-- | :-- |
| Payment | PM (Payment) | TraceId |  |
| Withdraw | WD (Withdraw) | TraceId of the paid EPC transaction |  |
| Free EPC on first transfer | SE(SendEPC) |  |  |
| Pay with Mixin Messenger refund | RF (Refund) | TraceId |  |
| On-chain payment refund | CF(Chain Refund) |  |
