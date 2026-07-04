import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { categories, collections, SHOPIFY_DOMAIN } from './data/products.js'

gsap.registerPlugin(ScrollTrigger)

const fmt = (n) =>
  n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`

// Buy buttons use Shopify's native checkout. Single-variant products jump
// straight into checkout via a cart permalink; multi-variant products open
// the product page so the shopper can pick size/color first.
function BuyButton({ product, accent }) {
  const href = product.checkoutVariant
    ? `${SHOPIFY_DOMAIN}/cart/${product.checkoutVariant}:1`
    : `${SHOPIFY_DOMAIN}/products/${product.handle}`
  return (
    <a
      className="buy-btn"
      style={{ '--accent': accent }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {`Buy Now — ${fmt(product.price)}`}
    </a>
  )
}

function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        yPercent: 110,
        stagger: 0.12,
        duration: 1.1,
        ease: 'power4.out',
        delay: 0.2
      })
      gsap.from('.hero-sub, .hero-cta, .hero-scroll-cue', {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out'
      })
      gsap.to('.hero-inner', {
        yPercent: -12,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <header className="hero" ref={ref}>
      <div className="hero-inner">
        <p className="hero-sub">DreamBodX Fitness — gear · gym · programs</p>
        <h1 className="hero-title" aria-label="Build the body you dream of">
          <span className="hero-mask"><span className="hero-line">BUILD THE</span></span>
          <span className="hero-mask"><span className="hero-line accent">BODY YOU</span></span>
          <span className="hero-mask"><span className="hero-line">DREAM OF</span></span>
        </h1>
        <p className="hero-cta">
          Real equipment. Real programs. Real results — shipped to your door.
        </p>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="cue-dot" /> scroll to explore
        </div>
      </div>
    </header>
  )
}

function CategorySection({ category, flip }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cat-head > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' }
      })
      gsap.utils.toArray('.product-card', ref.current).forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          delay: (i % 4) * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' }
        })
        const img = card.querySelector('.product-img img')
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
            }
          )
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      className={`category ${flip ? 'flip' : ''}`}
      id={category.id}
      ref={ref}
      style={{ '--accent': category.accent }}
    >
      <div className="cat-head">
        <p className="cat-kicker">{category.kicker}</p>
        <h2>{category.title}</h2>
        <p className="cat-blurb">{category.blurb}</p>
      </div>
      <div className="product-grid">
        {category.products.map((p) => (
          <article className="product-card" key={p.handle}>
            <a
              className="product-img"
              href={`${SHOPIFY_DOMAIN}/products/${p.handle}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.name} on DreamBodX Fitness`}
            >
              <img src={p.image} alt={p.name} loading="lazy" />
            </a>
            <div className="product-meta">
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <BuyButton product={p} accent={category.accent} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Marquee() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  const words = 'TRAIN · SWEAT · SCULPT · REPEAT · '
  return (
    <div className="marquee" ref={ref} aria-hidden="true">
      <div className="marquee-track">{(words.repeat(6))}</div>
    </div>
  )
}

function Collections() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.coll-row', {
        opacity: 0,
        x: -40,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section className="collections" ref={ref}>
      <div className="cat-head">
        <p className="cat-kicker">06 — Everything</p>
        <h2>Shop the Full Collection</h2>
        <p className="cat-blurb">
          The complete DreamBodX catalog lives on our store — over 60 products across ten collections.
        </p>
      </div>
      <ul className="coll-list">
        {collections.map((c) => (
          <li key={c.handle}>
            <a
              className="coll-row"
              href={`${SHOPIFY_DOMAIN}/collections/${c.handle}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="coll-title">{c.title}</span>
              <span className="coll-count">{c.count} products →</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <nav className="topbar">
        <span className="logo">DREAMBODX</span>
        <a className="topbar-link" href={SHOPIFY_DOMAIN} target="_blank" rel="noreferrer">
          Full Store ↗
        </a>
      </nav>
      <Hero />
      <main>
        {categories.map((c, i) => (
          <div key={c.id}>
            <CategorySection category={c} flip={i % 2 === 1} />
            {i === 1 && <Marquee />}
          </div>
        ))}
        <Collections />
      </main>
      <footer className="footer">
        <p className="footer-logo">DREAMBODX FITNESS</p>
        <p>
          Secure checkout powered by Shopify ·{' '}
          <a href={SHOPIFY_DOMAIN} target="_blank" rel="noreferrer">dreambodxfitness.com</a>
        </p>
        <p className="footer-fine">© {new Date().getFullYear()} DreamBodX Fitness. All rights reserved.</p>
      </footer>
    </>
  )
}
