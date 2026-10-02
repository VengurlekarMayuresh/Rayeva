export const categoriesData = [
  {
    id: 'food-wellness',
    title: 'Food & Wellness',
    tagline: 'Organic, ethically sourced & regenerative nutrition',
    description: 'Nourish your body and planet with certified organic superfoods, regenerative tea blends, artisanal plant protein, and zero-chemical wellness formulations.',
    iconName: 'Utensils',
    coverImage: '/viewUI/food.png',
    products: [
      {
        id: 'fw-1',
        name: 'Regenerative Organic Matcha Green Tea',
        price: 1499,
        originalPrice: 1899,
        rating: 4.9,
        reviews: 142,
        badge: 'Regenerative Organic',
        impact: 'Saves 1.8kg CO2e per tin',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
        description: 'Shade-grown, ceremonial grade Japanese matcha harvested from biodynamic farms using zero synthetic pesticides.'
      },
      {
        id: 'fw-2',
        name: 'Artisanal Cold-Pressed Hemp Seed Oil',
        price: 899,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 98,
        badge: 'Zero Additives',
        impact: 'Carbon-Negative Crop',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80',
        description: 'Raw, unrefined organic hemp seed oil rich in Omega 3-6-9 fatty acids packaged in infinitely recyclable UV glass.'
      }
    ]
  },
  {
    id: 'beauty-care',
    title: 'Beauty & Personal Care',
    tagline: 'Clean, cruelty-free & zero-waste personal care',
    description: 'Clean skincare and personal hygiene formulated with wildcrafted botanicals, microplastic-free ingredients, and plastic-free refillable packaging.',
    iconName: 'Flower2',
    coverImage: '/viewUI/beauty.png',
    products: [
      {
        id: 'bc-1',
        name: 'Botanical Facial Oil with Rosehip & Squalane',
        price: 1899,
        originalPrice: 2299,
        rating: 4.9,
        reviews: 215,
        badge: 'Plastic-Free Glass Bottle',
        impact: 'Replaces 12 plastic cosmetic bottles',
        image: 'https://images.unsplash.com/photo-1608248597263-000799965760?w=600&auto=format&fit=crop&q=80',
        description: 'Deeply nourishing facial elixir formulated with 100% cold-pressed organic botanicals for radiant, hydrated skin.'
      },
      {
        id: 'bc-2',
        name: 'Solid Shampoo & Conditioner Bar Duo',
        price: 999,
        originalPrice: 1299,
        rating: 4.7,
        reviews: 184,
        badge: 'Zero Waste Bar',
        impact: 'Prevents 3 plastic shampoo bottles',
        image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&auto=format&fit=crop&q=80',
        description: 'pH-balanced, sulfate-free solid hair bar infused with coconut oil, argan oil, and French green clay.'
      }
    ]
  },
  {
    id: 'zero-waste',
    title: 'Zero Waste Everyday Essentials',
    tagline: 'Eliminate single-use plastic from daily living',
    description: 'Durable, reusable, and biodegradable replacements for everyday single-use items. Designed for circular longevity and zero landfill footprint.',
    iconName: 'Recycle',
    coverImage: '/viewUI/zerowaste.png',
    products: [
      {
        id: 'zw-1',
        name: 'Organic Cotton Produce & Grocery Bags (Set of 6)',
        price: 799,
        originalPrice: 999,
        rating: 4.9,
        reviews: 310,
        badge: 'GOTS Certified Organic',
        impact: 'Eliminates 400 plastic grocery bags/yr',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
        description: 'Unbleached, washable mesh produce bags with heavy-duty drawstring closures for plastic-free shopping.'
      },
      {
        id: 'zw-2',
        name: 'Stainless Steel Insulated Water Flask (750ml)',
        price: 1299,
        originalPrice: 1599,
        rating: 4.9,
        reviews: 420,
        badge: 'Lifetime Guarantee',
        impact: 'Eliminates 1,200 single-use bottles',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
        description: 'Triple-wall vacuum insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.'
      }
    ]
  },
  {
    id: 'fashion-kids',
    title: 'Fashion, Accessories & Kids',
    tagline: 'Ethical apparel, upcycled accessories & non-toxic toys',
    description: 'Fair-trade slow fashion crafted from organic fibers, recycled textiles, and non-toxic children items made with natural plant dyes.',
    iconName: 'ShoppingBag',
    coverImage: '/viewUI/fashion.png',
    products: [
      {
        id: 'fk-1',
        name: 'Upcycled Denim Tote Bag with Eco Bird Emblem',
        price: 1999,
        originalPrice: 2499,
        rating: 4.8,
        reviews: 76,
        badge: '100% Upcycled Textile',
        impact: 'Saves 2,500 liters of water',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80',
        description: 'Handcrafted durable tote bag made from post-consumer recycled denim with reinforced organic cotton straps.'
      },
      {
        id: 'fk-2',
        name: 'Organic Cotton Children’s Unisex Jumpsuit',
        price: 1499,
        originalPrice: 1799,
        rating: 4.9,
        reviews: 64,
        badge: 'Non-Toxic Plant Dyes',
        impact: 'Hypoallergenic & Chemical-Free',
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80',
        description: 'Ultra-soft, breathable organic cotton jumpsuit colored with natural vegetable-based botanical dyes.'
      }
    ]
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    tagline: 'Sustainable home decor, kitchenware & linen',
    description: 'Transform your indoor spaces with bamboo furniture, compostable kitchen items, organic bedding, and artisan-crafted eco decor.',
    iconName: 'Leaf',
    coverImage: '/viewUI/home.png',
    products: [
      {
        id: 'hl-1',
        name: 'Artisanal Hand-Woven Bamboo Pendant Light',
        price: 2999,
        originalPrice: 3799,
        rating: 4.9,
        reviews: 112,
        badge: 'Handcrafted Bamboo',
        impact: 'FSC Certified Sustainable Wood',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
        description: 'Architectural ceiling pendant hand-woven by rural artisans using fast-growing renewable natural bamboo.'
      },
      {
        id: 'hl-2',
        name: 'French Linen Duvet Cover Set (Natural Flax)',
        price: 4999,
        originalPrice: 5999,
        rating: 4.8,
        reviews: 156,
        badge: '100% Organic Flax Linen',
        impact: 'Zero Pesticides & Biodegradable',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
        description: 'Pre-washed thermoregulating organic flax linen bedding that becomes softer with every wash cycle.'
      }
    ]
  },
  {
    id: 'gifting',
    title: 'Conscious Gifting',
    tagline: 'Meaningful eco gift boxes & corporate hampers',
    description: 'Curated sustainable gift hampers, plantable seed paper goods, and eco gift sets for birthdays, corporate milestones, and celebrations.',
    iconName: 'Gift',
    coverImage: '/viewUI/gifts.png',
    products: [
      {
        id: 'cg-1',
        name: 'Deluxe Eco-Conscious Self Care Gift Box',
        price: 2499,
        originalPrice: 2999,
        rating: 5.0,
        reviews: 89,
        badge: 'Curated Gift Set',
        impact: '1 Tree Planted per Purchase',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80',
        description: 'Includes Soy wax candle, organic tea tin, bamboo hairbrush, and plantable wildflower seed greeting card.'
      },
      {
        id: 'cg-2',
        name: 'Plantable Seed Paper Journal & Pen Set',
        price: 899,
        originalPrice: 1199,
        rating: 4.9,
        reviews: 130,
        badge: 'Zero Waste Stationers',
        impact: 'Grows into Herbs & Wildflowers',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
        description: 'Recycled cotton paper journal embedded with non-GMO wildflower seeds that can be planted in soil after use.'
      }
    ]
  },
  {
    id: 'clean-tech',
    title: 'Clean Tech & Energy',
    tagline: 'Solar devices, energy efficient devices & smart eco tech',
    description: 'Innovations for renewable power living: portable solar chargers, energy monitors, LED ambient lights, and bio-based tech accessories.',
    iconName: 'Zap',
    coverImage: '/viewUI/tech.png',
    products: [
      {
        id: 'ct-1',
        name: 'Portable Foldable Solar Panel Charger (28W)',
        price: 3999,
        originalPrice: 4999,
        rating: 4.8,
        reviews: 94,
        badge: 'High-Efficiency SunPower Cells',
        impact: '100% Clean Off-Grid Energy',
        image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80',
        description: 'Weatherproof portable solar charger with dual USB ports for charging phones and power banks during outdoors or emergency power outages.'
      },
      {
        id: 'ct-2',
        name: 'Biodegradable Wheat-Straw Wireless Charging Pad',
        price: 1299,
        originalPrice: 1599,
        rating: 4.7,
        reviews: 58,
        badge: 'Wheat-Straw Composite',
        impact: '75% Less Fossil Plastic',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&auto=format&fit=crop&q=80',
        description: 'Fast 15W Qi wireless charger encased in eco-friendly bio-based agricultural wheat straw composite.'
      }
    ]
  },
  {
    id: 'packaging',
    title: 'Sustainable Packaging',
    tagline: 'Compostable mailers, honeycomb wrap & paper tape',
    description: 'Industrial and home-compostable shipping supplies designed for ecommerce businesses and conscious individuals seeking zero-plastic logistics.',
    iconName: 'Box',
    coverImage: '/viewUI/packaging.png',
    products: [
      {
        id: 'sp-1',
        name: 'Home Compostable Shipping Mailers (Pack of 50)',
        price: 1199,
        originalPrice: 1499,
        rating: 4.9,
        reviews: 175,
        badge: 'TUV OK Compost Certified',
        impact: 'Breaks down in 90 days in soil',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80',
        description: 'Heavy-duty waterproof mailers made from cornstarch and PBAT bio-polymers that decompose into rich humus.'
      },
      {
        id: 'sp-2',
        name: 'Recycled Paper Honeycomb Protective Cushioning Roll',
        price: 1499,
        originalPrice: 1799,
        rating: 4.8,
        reviews: 82,
        badge: '100% Recycled Kraft Paper',
        impact: 'Replaces Plastic Bubble Wrap',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&auto=format&fit=crop&q=80',
        description: 'Expandable 3D honeycomb paper wrap that locks around fragile glass and ceramics without requiring adhesive tape.'
      }
    ]
  },
  {
    id: 'materials',
    title: 'Sustainable Materials',
    tagline: 'Mycelium leather, recycled polymers & bio-textiles',
    description: 'Raw eco-materials for designers, brands, and makers: mushroom leather samples, organic hemp canvas, recycled ocean plastics, and bio-resins.',
    iconName: 'Layers',
    coverImage: '/viewUI/sustainable.png',
    products: [
      {
        id: 'sm-1',
        name: 'Organic Hemp Heavyweight Canvas Fabric (Per Meter)',
        price: 899,
        originalPrice: 1199,
        rating: 4.9,
        reviews: 48,
        badge: 'GOTS & OEKO-TEX Certified',
        impact: 'Zero Chemical Fertilizers',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
        description: 'Durable, natural unbleached hemp canvas fabric ideal for bags, upholstery, aprons, and outdoor gear.'
      },
      {
        id: 'sm-2',
        name: 'Mycelium Mushroom Leather Sheet Sample (30x30cm)',
        price: 1899,
        originalPrice: 2399,
        rating: 5.0,
        reviews: 34,
        badge: 'Bio-Fabricated Mycelium',
        impact: '100% Animal-Free & Compostable',
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&auto=format&fit=crop&q=80',
        description: 'Next-generation vegan leather grown from fungal mycelium roots. Soft, supple, durable, and completely plastic-free.'
      }
    ]
  }
];
