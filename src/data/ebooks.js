// DreamBodX Fitness — digital eBook & program catalog.
// Real single-variant products from the live Shopify store. Every guide is an
// instant-download PDF, so the buy button uses a cart permalink that jumps
// straight into Shopify's secure checkout.
import { SHOPIFY_DOMAIN } from './products.js'

export { SHOPIFY_DOMAIN }

export const ebooks = [
  {
    id: 'glp1-ozempic-guide',
    title: 'The Complete GLP-1 & Ozempic Weight Loss Guide',
    tag: 'Weight Loss',
    badge: 'Bestseller',
    price: 39.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/FullSizeRender_2e6d6c38-9956-402e-8d9c-147c296bee91.jpg?v=1782499100',
    handle:
      'the-complete-glp-1-ozempic-weight-loss-guide-exercise-nutrition-muscle-preservation-program-digital-pdf',
    checkoutVariant: 48819711115479,
    blurb:
      'Maximize your results on Ozempic®, Wegovy®, and Mounjaro®. Exercise, nutrition, and muscle-preservation strategies for every stage of GLP-1 treatment.',
    bullets: ['Muscle-preservation protocol', 'GLP-1 nutrition framework', 'Instant PDF download']
  },
  {
    id: 'semaglutide-diabetes-guide',
    title: 'The Ultimate Semaglutide Nutrition Guide for Type 2 Diabetes',
    tag: 'Weight Loss',
    badge: null,
    price: 39.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/b662542c577c41d1b7bb27b7e8e07680.thumbnail.0000000000.jpg?v=1782451979',
    handle:
      'the-ultimate-semaglutide-nutrition-guide-for-type-2-diabetes-complete-ozempic-glp-1-meal-plan-ebook-digital-pdf',
    checkoutVariant: 48819611926743,
    blurb:
      'A complete Ozempic® & GLP-1 meal plan built for managing type 2 diabetes while getting the most from your medication.',
    bullets: ['Blood-sugar-friendly meals', 'Complete GLP-1 meal plan', 'Instant PDF download']
  },
  {
    id: 'postpartum-recovery',
    title: 'The Ultimate Postpartum Recovery Program',
    tag: 'Weight Loss',
    badge: 'New',
    price: 45.0,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/ac25746b298849d384637a1324ad1ab3.thumbnail.0000000000.jpg?v=1782919326',
    handle: 'the-ultimate-postpartum-recovery-program-safe-weight-loss-after-baby-ebook',
    checkoutVariant: 48993417003223,
    blurb:
      'Heal first, rebuild strong, lose weight safely after baby. A science-backed fourth-trimester reset with workouts and meal plans for new moms.',
    bullets: ['Safe post-baby workouts', 'Recovery meal plan', 'Instant PDF download']
  },
  {
    id: '30-day-reset',
    title: 'The 30-Day Reset — Fat Loss Meal Plan & Home Workout',
    tag: 'Weight Loss',
    badge: null,
    price: 19.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/IMG_8954_2ae69dd4-867f-47dd-994e-97f36f4469e0.jpg?v=1781293582',
    handle: '30-day-reset-fat-loss-meal-plan-home-workout-ebook',
    checkoutVariant: 48816184361175,
    blurb:
      'Lose fat without crash dieting. A science-backed 32-page plan that builds habits that actually last — meals and home workouts included.',
    bullets: ['30-day meal plan', 'No-equipment home workouts', '32-page PDF']
  },
  {
    id: 'get-ripped-at-home',
    title: 'Get Ripped At Home — 8-Week Bodyweight Program',
    tag: 'Build Muscle',
    badge: null,
    price: 14.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/ed35f28d373947daa6131cb595267a12.thumbnail.0000000000.jpg?v=1781850278',
    handle:
      'get-ripped-at-home-8-week-bodyweight-muscle-building-program-no-gym-home-workout-ebook-digital-pdf',
    checkoutVariant: 48816418095319,
    blurb:
      'Build muscle and burn fat without ever stepping into a gym. A premium 8-week bodyweight training program you can do anywhere.',
    bullets: ['8-week training split', 'Zero equipment needed', 'Instant PDF download']
  },
  {
    id: 'ultimate-chest-blueprint',
    title: 'Ultimate Chest Blueprint — Science-Based Chest Growth',
    tag: 'Build Muscle',
    badge: null,
    price: 14.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/525099ca1da541d491f4d56624b24585.thumbnail.0000000000.jpg?v=1782461697',
    handle:
      'ultimate-chest-blueprint-science-based-chest-growth-program-build-a-bigger-chest-fast-digital-pdf',
    checkoutVariant: 48816455286999,
    blurb:
      'Stop wasting years on random chest workouts. A proven, science-based program to build a bigger, fuller, stronger chest fast.',
    bullets: ['Science-based programming', 'Progressive overload plan', 'Instant PDF download']
  },
  {
    id: 'bigger-arms',
    title: 'How to Build Bigger Arms — 8-Week Growth Program',
    tag: 'Build Muscle',
    badge: null,
    price: 9.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/b15afa9a0ced4582adf67452d71398cd.thumbnail.0000000000.jpg?v=1782451979',
    handle: 'how-to-build-bigger-arms-8-week-biceps-triceps-forearm-growth-program',
    checkoutVariant: 48816435495127,
    blurb:
      'A science-based arm specialization program to maximize biceps, triceps, and forearm growth in just 8 weeks.',
    bullets: ['Biceps, triceps & forearms', '8-week specialization', 'Instant PDF download']
  },
  {
    id: 'grilled-chicken-cookbook',
    title: 'Healthy Grilled Chicken Cookbook',
    tag: 'Nutrition',
    badge: 'Under $10',
    price: 9.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/710rQJbxdyL_faae2280-93c1-4ddd-912a-579032bba26a.jpg?v=1782457367',
    handle: 'healthy-grilled-chicken-cookbook-for-weight-loss-high-protein-recipe-ebook',
    checkoutVariant: 48816243540183,
    blurb:
      'Lose weight without giving up flavor. High-protein grilled chicken recipes that make lean eating genuinely delicious.',
    bullets: ['High-protein recipes', 'Weight-loss friendly', 'Instant PDF download']
  },
  {
    id: 'couples-workout-challenge',
    title: 'Couples Workout Challenge — Home Plan for Two',
    tag: 'Home Workout',
    badge: null,
    price: 14.99,
    image:
      'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/85ae6e44814b4d528db9eb5c9d3734c7.thumbnail.0000000000.jpg?v=1780482336',
    handle: 'couples-workout-challenge-home-plan-for-two-ebook',
    checkoutVariant: 48708518183127,
    blurb:
      'Get fit together, right at home. A complete home workout guide built for two — no equipment, no gym, no experience required.',
    bullets: ['Workouts for two', 'No equipment needed', 'Instant PDF download']
  }
]
