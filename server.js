import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Stripe from 'stripe'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json())

const stripeKey = process.env.STRIPE_SECRET_KEY
const stripe = stripeKey ? new Stripe(stripeKey) : null

app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'checkout_unavailable' })
  }
  const { name, amount, image } = req.body || {}
  const unitAmount = Math.round(Number(amount) * 100)
  if (!name || !Number.isFinite(unitAmount) || unitAmount < 50 || unitAmount > 500000) {
    return res.status(400).json({ error: 'invalid_request' })
  }
  const origin = req.headers.origin || `${req.protocol}://${req.get('host')}`
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            product_data: {
              name,
              images: image ? [image] : []
            }
          }
        }
      ],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`
    })
    res.json({ url: session.url })
  } catch (err) {
    console.error('stripe error:', err.message)
    res.status(502).json({ error: 'stripe_error' })
  }
})

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`DreamBodX server on :${port}`))
