# UPI ID validator and UPI handle list (JavaScript + Python)

Validate a **UPI ID (VPA)** like `name@okhdfcbank` offline, and look up which **app and bank** a UPI handle belongs to – `@ybl` (PhonePe / Yes Bank), `@okhdfcbank` (Google Pay / HDFC Bank), `@ptyes` (Paytm / Yes Bank) and more.

**Use it online: [zee4refer.github.io/upi-id-validator](https://zee4refer.github.io/upi-id-validator/)**

## Usage

```js
const { validateUpiId } = require('./upi-id');
validateUpiId('demo.shop@okhdfcbank');
// { valid: true, name: 'demo.shop', handle: 'okhdfcbank', app: 'Google Pay', bank: 'HDFC Bank', knownHandle: true }
validateUpiId('9876543210@ybl').looksLikeMobile;  // true
```

```python
from upi_id import validate_upi_id
validate_upi_id("demo.shop@okhdfcbank")["app"]    # 'Google Pay'
```

> A valid format does not mean the UPI ID exists. Before paying, your UPI app shows the name registered to it – check that name.

## Common UPI handles

| Handle | App | Bank |
|---|---|---|
| `@ybl` | PhonePe | Yes Bank |
| `@ibl` | PhonePe | ICICI Bank |
| `@axl` | PhonePe | Axis Bank |
| `@okhdfcbank` | Google Pay | HDFC Bank |
| `@okicici` | Google Pay | ICICI Bank |
| `@oksbi` | Google Pay | State Bank of India |
| `@okaxis` | Google Pay | Axis Bank |
| `@ptyes` | Paytm | Yes Bank |
| `@ptaxis` | Paytm | Axis Bank |
| `@pthdfc` | Paytm | HDFC Bank |
| `@ptsbi` | Paytm | State Bank of India |
| `@paytm` | Paytm | Paytm Payments Bank (older IDs) |
| `@apl` | Amazon Pay | Axis Bank |
| `@yapl` | Amazon Pay | Yes Bank |
| `@rapl` | Amazon Pay | RBL Bank |
| `@waicici` | WhatsApp Pay | ICICI Bank |
| `@wahdfcbank` | WhatsApp Pay | HDFC Bank |
| `@waaxis` | WhatsApp Pay | Axis Bank |
| `@wasbi` | WhatsApp Pay | State Bank of India |
| `@upi` | BHIM | NPCI BHIM app |
| `@sbi` | SBI / YONO | State Bank of India |
| `@hdfcbank` | HDFC Bank app | HDFC Bank |
| `@icici` | ICICI iMobile | ICICI Bank |
| `@axisbank` | Axis Bank app | Axis Bank |
| `@kotak` | Kotak 811 / Kotak app | Kotak Mahindra Bank |
| `@pnb` | PNB ONE | Punjab National Bank |
| `@barodampay` | bob World | Bank of Baroda |
| `@fbl` | Federal Bank app | Federal Bank |
| `@idfcbank` | IDFC FIRST Bank app | IDFC FIRST Bank |
| `@indus` | IndusInd Bank app | IndusInd Bank |
| `@airtel` | Airtel Thanks | Airtel Payments Bank |
| `@freecharge` | Freecharge | Axis Bank |
| `@jupiteraxis` | Jupiter | Axis Bank |

Handles change as apps add bank partners; `handles.json` is easy to update – pull requests welcome.

## Paying a UPI QR on credit

Every UPI ID above can be paid from a **UPI credit card** instead of your bank balance – you scan the same QR codes.
**[slice](https://slice.bank.in/t?c=TzZu64A&ic=SUPER)** offers a UPI credit card along with a zero-balance savings account.
Joining? Use invite code **`SUPER`** to get **₹500 on your first payment** (as per slice's referral offer).
Credit limits depend on slice's eligibility checks, and a credit line is still borrowing – repay by the due date.

## Tests

```bash
node test.js && python3 upi_id.py demo@okhdfcbank
```

---
MIT licence · made by Zee · more tools: [github.com/zee4refer](https://github.com/zee4refer)
