import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { categories, collections, SHOPIFY_DOMAIN } from './data/products.js'
import { ebooks } from './data/ebooks.js'
import { initScene, setSceneProgress, setSceneAccent, setScenePointer } from './scene.js'

gsap.registerPlugin(ScrollTrigger)

const fmt = (n) => (n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`)

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

function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      ★★★★★
    </span>
  )
}

// Proportional star rating (supports fractional values like 4.7).
function StarRating({ rating, count }) {
  const pct = `${(rating / 5) * 100}%`
  return (
    <div className="rating" aria-label={`Rated ${rating} out of 5 from ${count} reviews`}>
      <span className="stars-wrap" aria-hidden="true">
        <span className="stars-bg">★★★★★</span>
        <span className="stars-fg" style={{ width: pct }}>★★★★★</span>
      </span>
      <span className="rating-num">{rating.toFixed(1)}</span>
      <span className="rating-count">({count})</span>
    </div>
  )
}

function SplitChars({ text, className }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split('').map((ch, i) => (
        <span className="char" aria-hidden="true" key={i}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}

const BAND_TEXT =
  'REAL GEAR · REAL PROGRAMS · REAL RESULTS · FREE YOUR DREAM BODY · DREAMBODX FITNESS · '

function Hero() {
  const ref = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.char', {
        yPercent: 130,
        rotate: 10,
        stagger: 0.03,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.25
      })
      gsap.from('.hero-sub, .hero-chips, .hero-actions, .hero-scroll-cue, .rot-badge', {
        opacity: 0,
        y: 26,
        stagger: 0.1,
        duration: 0.9,
        delay: 1.2,
        ease: 'power3.out'
      })
      // parallax: each headline line escapes at a different speed, video zooms
      gsap.to('.hero-line.l1', { yPercent: -60, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-line.l2', { yPercent: -30, xPercent: 6, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-line.l3', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-media video', { scale: 1.18, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-inner', { opacity: 0, ease: 'none', scrollTrigger: { trigger: ref.current, start: '40% top', end: 'bottom top', scrub: true } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <header className="hero" ref={ref}>
      <div className="hero-media" aria-hidden="true">
        {/* Real training footage: drop a free-license clip at public/hero-video.mp4.
            If the file is missing the element hides itself and the aurora + 3D
            scene carry the background. */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => videoRef.current && (videoRef.current.style.display = 'none')}
        />
        <div className="hero-duotone" />
      </div>

      <div className="hero-band top" aria-hidden="true">
        <span className="hero-band-track">{BAND_TEXT.repeat(4)}</span>
      </div>

      <div className="hero-inner">
        <p className="hero-sub">DreamBodX Fitness</p>
        <h1 className="hero-title">
          <span className="hero-line l1"><SplitChars text="BUILD" /></span>
          <span className="hero-line l2"><SplitChars text="THE BODY" /></span>
          <span className="hero-line l3">
            <SplitChars text="YOU " />
            <em className="grad"><SplitChars text="DREAM" /></em>
            <SplitChars text=" OF" />
          </span>
        </h1>
        <div className="hero-chips" aria-hidden="true">
          <span>eBooks &amp; Programs</span>
          <span>Instant Download</span>
          <span>Gym Equipment</span>
          <span>Activewear</span>
        </div>
        <div className="hero-actions">
          <a className="btn-primary" href="#ebooks">Shop eBooks ↓</a>
          <a className="btn-ghost" href="#cardio">Browse Gear →</a>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="cue-dot" /> scroll to enter the gym
        </div>
      </div>

      <div className="rot-badge" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text><textPath href="#badge-circle">TRAIN HARD · DREAM BIG · DBX ·</textPath></text>
        </svg>
        <span className="badge-arrow">↓</span>
      </div>

      <div className="hero-band bottom" aria-hidden="true">
        <span className="hero-band-track">{BAND_TEXT.repeat(4)}</span>
      </div>
    </header>
  )
}

const EBOOK_ACCENT = '#ff5c2d'

function EbookShowcase() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => self.isActive && setSceneAccent(EBOOK_ACCENT)
      })
      gsap.from('.ebook-head > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 72%' }
      })
      gsap.from('.ebook-trust span', {
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.ebook-trust', start: 'top 90%' }
      })
      gsap.utils.toArray('.ebook-card', ref.current).forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          rotateX: -5,
          duration: 0.9,
          delay: (i % 3) * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 92%' }
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="ebooks" id="ebooks" ref={ref} style={{ '--accent': EBOOK_ACCENT }}>
      <div className="cat-index" aria-hidden="true">📚</div>
      <div className="ebook-head cat-head">
        <p className="cat-kicker">Digital Library — Instant Download</p>
        <h2>DreamBodX eBooks &amp; Programs</h2>
        <p className="cat-blurb">
          Science-backed weight-loss guides, muscle-building programs, and healthy cookbooks —
          written for real results. Buy once, download instantly, and start today. No shipping,
          no waiting, yours forever.
        </p>
      </div>

      <div className="ebook-trust" role="list">
        <span role="listitem">⚡ Instant PDF download</span>
        <span role="listitem">🔒 Secure Shopify checkout</span>
        <span role="listitem">📱 Read on any device</span>
        <span role="listitem">♾️ Yours to keep forever</span>
      </div>

      <div className="ebook-grid">
        {ebooks.map((book) => {
          const href = `${SHOPIFY_DOMAIN}/cart/${book.checkoutVariant}:1`
          const productHref = `${SHOPIFY_DOMAIN}/products/${book.handle}`
          return (
            <article className="ebook-card" key={book.id}>
              <a className="ebook-cover" href={productHref} target="_blank" rel="noreferrer"
                 aria-label={`${book.title} — view details`}>
                <img src={book.image} alt={`${book.title} — DreamBodX Fitness eBook cover`} loading="lazy" />
                {book.badge && <span className="ebook-badge">{book.badge}</span>}
                <span className="ebook-tag">{book.tag}</span>
              </a>
              <div className="ebook-body">
                <StarRating rating={book.rating} count={book.reviewCount} />
                <h3>{book.title}</h3>
                <p className="ebook-blurb">{book.blurb}</p>
                <ul className="ebook-bullets">
                  {book.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <blockquote className="ebook-review">
                  <Stars />
                  <span className="ebook-review-text">“{book.review}”</span>
                  <cite className="ebook-review-name">— {book.reviewer}</cite>
                </blockquote>
                <div className="ebook-foot">
                  <span className="ebook-price">{fmt(book.price)}</span>
                  <a className="buy-btn ebook-buy" href={href} target="_blank" rel="noreferrer">
                    Get Instant Access
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function CategorySection({ category, flip, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // retint the 3D scene as this section takes over the viewport
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => self.isActive && setSceneAccent(category.accent)
      })
      gsap.from('.cat-head > *', {
        opacity: 0,
        y: 46,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' }
      })
      gsap.utils.toArray('.product-card', ref.current).forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 90,
          rotateX: -6,
          duration: 1,
          delay: (i % 4) * 0.09,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
        const img = card.querySelector('.product-img img')
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
            }
          )
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [category.accent])

  return (
    <section
      className={`category ${flip ? 'flip' : ''}`}
      id={category.id}
      ref={ref}
      style={{ '--accent': category.accent }}
    >
      <div className="cat-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
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
              {p.review && (
                <blockquote className="product-review">
                  <Stars />
                  <span>“{p.review}”</span>
                </blockquote>
              )}
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
      <div className="marquee-track">{words.repeat(6)}</div>
    </div>
  )
}

function Collections() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => self.isActive && setSceneAccent('#c8ff2d')
      })
      gsap.from('.coll-tile', {
        opacity: 0,
        y: 60,
        scale: 0.96,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 72%' }
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
          The complete DreamBodX catalog — over 60 products across fourteen collections.
        </p>
      </div>
      <div className="coll-grid">
        {collections.map((c) => (
          <a
            className="coll-tile"
            key={c.handle}
            href={`${SHOPIFY_DOMAIN}/collections/${c.handle}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={c.image} alt={c.title} loading="lazy" />
            <div className="coll-tile-info">
              <span className="coll-title">{c.title}</span>
              <span className="coll-count">{c.count} products →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

// The eBooks now have their own dedicated showcase, so drop the small
// "programs" category from the gear loop to avoid listing them twice.
const gearCategories = categories.filter((c) => c.id !== 'programs')

export default function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const handle = initScene(canvasRef.current)

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => setSceneProgress(self.progress)
    })

    const onMove = (e) => {
      setScenePointer(
        (e.clientX / window.innerWidth - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2
      )
    }
    window.addEventListener('pointermove', onMove)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenis
    let raf
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      lenis.on('scroll', ScrollTrigger.update)
      raf = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
    }
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) gsap.ticker.remove(raf)
      lenis?.destroy()
      handle.destroy()
    }
  }, [])

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <canvas className="bg-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <nav className="topbar">
        <span className="logo">DREAMBODX</span>
        <a className="topbar-link" href={SHOPIFY_DOMAIN} target="_blank" rel="noreferrer">
          Full Store ↗
        </a>
      </nav>
      <Hero />
      <main>
        <EbookShowcase />
        {gearCategories.map((c, i) => (
          <div key={c.id}>
            <CategorySection category={c} flip={i % 2 === 1} index={i} />
            {i === 0 && <Marquee />}
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
        <p className="footer-fine">
          Ratings &amp; review highlights are illustrative — replace with your verified buyer feedback before publishing.
        </p>
        <p className="footer-fine">© {new Date().getFullYear()} DreamBodX Fitness. All rights reserved.</p>
      </footer>
    </>
  )
}
