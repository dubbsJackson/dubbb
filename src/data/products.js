// Real DreamBodX Fitness catalog data pulled from the live Shopify store.
export const SHOPIFY_DOMAIN = 'https://dreambodxfitness.com'

export const categories = [
  {
    id: 'cardio',
    kicker: '01 — Burn',
    title: 'Cardio & Weight Loss Equipment',
    blurb:
      'Studio-quality cardio at home. Machines built to torch calories without the membership, the commute, or the wait for a bike.',
    accent: '#c8ff2d',
    products: [
      {
        name: 'Smart Magnetic Indoor Cycling Bike',
        price: 415,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/717y3TwoLXL.jpg',
        handle:
          'sunny-health-fitness-smart-magnetic-indoor-cycling-bike-stationary-exercise-cardio-equipment-free-sunnyfit-training-app',
        blurb: 'Whisper-quiet belt drive. Ride-studio smooth, living-room sized.'
      },
      {
        name: 'Waver Vibration Plate',
        price: 315,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71VaXGNl5pL.jpg',
        handle:
          'lifepro-waver-vibration-plate-exercise-machine-high-intensity-vibration-plate-for-lymphatic-drainage-full-body-workout-vibrating-platform-with-loop-bands-fitness-equipment-for-strength-toning',
        blurb: 'More muscle activation in less time — stand, squat, stretch.'
      },
      {
        name: 'Curved Vibration Plate Machine',
        price: 115,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71zq9-fqQ9L.jpg',
        handle:
          'vibration-plate-exercise-machine-curved-vibration-plate-for-lymphatic-drainage-weight-loss-400-lbs-capacity-shake-platform-with-250-speeds-full-body-workout-equipment-for-home-women-men',
        blurb: '10 minutes a day. Zero joint stress. 400 lb capacity.'
      }
    ]
  },
  {
    id: 'programs',
    kicker: '02 — Learn',
    title: 'Weight Loss Programs & eBooks',
    blurb:
      'Digital guides written for real results — nutrition, training, and the science of keeping the weight off.',
    accent: '#ff5c2d',
    products: [
      {
        name: 'The Complete GLP-1 & Ozempic Weight Loss Guide',
        price: 39.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/FullSizeRender_2e6d6c38-9956-402e-8d9c-147c296bee91.jpg',
        handle:
          'the-complete-glp-1-ozempic-weight-loss-guide-exercise-nutrition-muscle-preservation-program-digital-pdf',
        // single-variant product — cart permalink goes straight to Shopify checkout
        checkoutVariant: 48819711115479,
        blurb: 'Exercise, nutrition & muscle preservation on GLP-1 medications. Digital PDF.'
      },
      {
        name: 'Healthy Grilled Chicken Cookbook',
        price: 9.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/710rQJbxdyL_faae2280-93c1-4ddd-912a-579032bba26a.jpg',
        handle:
          'healthy-grilled-chicken-cookbook-for-weight-loss-high-protein-recipe-ebook',
        checkoutVariant: 48816243540183,
        blurb: 'High-protein recipes that make losing weight taste good. eBook.'
      }
    ]
  },
  {
    id: 'mens',
    kicker: '03 — Train',
    title: "Men's Activewear",
    blurb:
      'Compression, quick-dry, sauna-heat — gear engineered to work as hard as you do.',
    accent: '#2da8ff',
    products: [
      {
        name: "Men's Compression Tank Tops — 5-Pack",
        price: 35,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/61BAbRy-v3L_0d528953-1ee4-47ee-9ca5-2e89fde59ed6.jpg',
        handle:
          'telaleo-5-pack-mens-athletic-compression-shirts-sleeveless-workout-tank-top-sports-base-layer-running-basketball',
        blurb: 'Sweat-wicking base layers that hug muscle and stay dry.'
      },
      {
        name: "Men's Athletic Running Shorts",
        price: 36,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/61EoCDx9l4L._AC_SL1500_3d2b3a99-5e8a-4cd0-a99f-f75584a9e387.jpg',
        handle:
          'northyard-mens-athletic-running-shorts-gym-workout-7-9-5-quick-dry-lightweight-sports-basketball-tennis-3-zipper-pockets',
        blurb: 'Quick-dry, lightweight, three zipper pockets.'
      },
      {
        name: "Men's 2-in-1 Running Pants",
        price: 19.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/510RYuMn73L.jpg',
        handle:
          'aolesy-mens-2-in-1-running-pants-gym-workout-compression-pants-for-men-training-athletic',
        blurb: 'Compression layer inside, freedom outside.'
      },
      {
        name: "Men's Sauna Sweat Shirt",
        price: 17.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71XsmZUE9uL.jpg',
        handle:
          'remebsweat-sauna-sweat-suits-shirt-for-men-sweat-suit-compression-t-shirt-workout-sports-shapewear-gym-exercise-jacket',
        blurb: 'Traps heat to turn every session up a degree.'
      }
    ]
  },
  {
    id: 'womens',
    kicker: '04 — Move',
    title: "Women's Activewear",
    blurb:
      'Squat-proof, buttery-soft, built to move — the pieces you reach for every gym day.',
    accent: '#ff2d8f',
    products: [
      {
        name: "Women's High-Waisted Workout Shorts — 4-Pack",
        price: 42,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71rC4NZOhjL.jpg',
        handle:
          'chrleisure-workout-shorts-sets-for-women-high-waisted-gym-butt-lifting-scrunch-butt-seamless-shorts',
        blurb: 'Seamless, butt-lifting, holds everything in place.'
      },
      {
        name: "Women's High-Waisted Leggings with Pockets",
        price: 16.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/51v6_86Lx5L_99f9cac3-089e-4596-9400-2f4ee066ea72.jpg',
        handle:
          'sinophant-high-waisted-leggings-with-pockets-women-full-length-capri-buttery-soft-stretchy-yoga-pants',
        blurb: 'Buttery-soft with real side pockets. Live in them.'
      },
      {
        name: 'Scrunch Butt-Lifting Leggings',
        price: 25,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/612h-apGvxL._AC_SL1500.jpg',
        handle:
          'ieumaz-scrunch-butt-lifting-leggings-for-women-gym-seamless-workout-leggings-mid-low-waist-tummy-control-yoga-pants',
        blurb: 'Sculpts curves, stays opaque through every squat.'
      },
      {
        name: "Women's Weighted Vest",
        price: 46.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71CClo5DU3L_7cc14c84-c676-4bd4-b945-5514bde4019b.jpg',
        handle:
          'fuff-weighted-vest-woman-5-10-12-15-20-25-30-lb-womens-weight-vest-for-walking-strength-training-weight-vests-for-female-men-reflective-stripe-body-vest-for-workout-running-jogging-fitness',
        blurb: 'Reflective, adjustable resistance for runs and walks.'
      }
    ]
  },
  {
    id: 'shape',
    kicker: '05 — Sculpt',
    title: 'Waist Trainers & Shapewear',
    blurb:
      'Instant shape, everyday support — smooth lines under clothes, extra sweat in the gym.',
    accent: '#b02dff',
    products: [
      {
        name: 'Waist Trainer Trimmer Belt',
        price: 45,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/61VjJUXHjLS_650a5987-1db9-466d-8ff2-3c2d27f049c4.jpg',
        handle:
          'feelingirl-waist-trainer-belt-waist-cincher-trimmer-ab-belt-tummy-control-body-shaper-with-triple-wrap-women-and-men',
        blurb: 'Tummy control and lower-back support, all day.'
      },
      {
        name: 'Waist Trainer Corset with Zipper',
        price: 26.99,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71Axbxk3PiL.jpg',
        handle:
          'nebility-waist-trainer-for-women-corset-shapewear-with-zipper-womens-waist-cincher-tank-top-with-adjustable-straps',
        blurb: 'Zip-front cinch with adjustable straps.'
      },
      {
        name: 'Deadlift & Weightlifting Shoes',
        price: 45,
        image:
          'https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71DmtXOxbYL.jpg',
        handle:
          'manueklear-deadlift-shoes-weight-lifting-shoes-for-men-women-weightlifting-squat-shoes-fitness-cross-trainer-barefoot-gym-training-sneakers',
        blurb: 'Flat, hard-soled base to lift heavier from the ground up.'
      }
    ]
  }
]

export const collections = [
  { title: 'DreamBodX Gear', handle: 'dreambodx-gear', count: 20 },
  { title: 'DreamBodX Gym', handle: 'dreambodx-gym', count: 26 },
  { title: 'DreamBodX Accessories', handle: 'dreambodx-accessories', count: 6 },
  { title: 'Cardio & Weight Loss Equipment', handle: 'cardio-weight-loss-equipment', count: 7 },
  { title: 'Strength & Home Gym Equipment', handle: 'strength-home-gym-equipment', count: 11 },
  { title: 'Resistance Bands & Accessories', handle: 'resistance-bands-workout-accessories', count: 10 },
  { title: 'Activewear & Training Apparel', handle: 'activewear-training-apparel', count: 9 },
  { title: 'Waist Trainers & Shapewear', handle: 'waist-trainers-shapewear', count: 5 },
  { title: 'Water Bottles & Shakers', handle: 'water-bottles-shakers', count: 6 },
  { title: 'Workout Plans & eBooks', handle: 'workout-plans-ebooks', count: 10 }
]
