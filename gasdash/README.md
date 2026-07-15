# ⚡ GasDash — Gas Delivery & Jump Starts, On-Demand

Uber-style roadside rescue. One app, two modes: **get help** or **drive & earn**.

## The model

| | Customer pays | Driver receives | Platform keeps |
|---|---|---|---|
| ⛽ **Gas delivery** | $35 service fee (first 5 mi included) + $2/mi after + fuel at pump price | 70% of service fee + **100% fuel reimbursed** + 100% tips | 30% of service fee |
| 🔋 **Jump start** | $40 service fee (first 5 mi included) + $2/mi after | 70% of service fee + 100% tips | 30% of service fee |

- Customer pays **in the app up front** — picks fuel type & gallons, sees the exact
  fare (distance included) before confirming.
- **Live map tracking** — watch your driver come to you, Uber-style.
- **4-digit verification code** — shown to the customer when the driver arrives;
  the driver must enter it to start the job. Proves both sides are legit.
- **Customer confirms completion** — a "job complete" button closes the order.
- **Drivers are paid instantly** the moment the job completes, with a
  fare + fuel + tip breakdown. Tip prompt appears after every order (like Uber);
  drivers keep every cent.
- ⭐ Premium ($9.99/mo): 15% off service fees. The discount never touches the
  driver's cut — drivers are paid on the full fare.
- 🤖 Dash Assistant — in-app help chat that knows your live order state.
- 📲 Installable PWA with offline app shell.

## Run it

Fully static — open `index.html`, or serve the folder:

```bash
npx serve gasdash
```

> Demo app: payments and driver matching are simulated, data stays in
> `localStorage` on your device. No real charges ever occur.
