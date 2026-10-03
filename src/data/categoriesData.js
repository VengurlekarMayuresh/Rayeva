export const categoriesData = [
  {
    id: 'food-wellness',
    title: 'Food & Wellness',
    tagline: 'Organic, ethically sourced & regenerative nutrition',
    description: 'Nourish your body and planet with certified organic superfoods, regenerative tea blends, artisanal plant protein, and zero-chemical wellness formulations.',
    iconName: 'Utensils',
    coverImage: '/viewUI/food and wellness.png',
    products: [
      {
        id: 'fw-1',
        name: 'Regenerative Organic Ceremonial Matcha Green Tea (30g)',
        price: 1499,
        originalPrice: 1899,
        rating: 4.9,
        reviews: 142,
        badge: 'Regenerative Organic',
        impact: 'Saves 1.8kg CO2e per tin',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Shade-grown, first-harvest ceremonial grade Japanese matcha cultivated under organic bamboo screens with zero synthetic fertilizers.',
        bulletPoints: [
          '100% Ceremonial Grade: Stone-ground first harvest leaves for maximum L-theanine and antioxidant potency.',
          'Biodynamic Farming: Cultivated on solar-powered farms in Uji with zero chemical runoff into local rivers.',
          'Zero Plastic Packaging: Sealed inside infinitely recyclable violet UV-glass and aluminum tin.',
          'Direct Fair Trade: 100% transparent direct trade supporting heritage tea artisan families.'
        ],
        ecoBadges: ['JAS ORGANIC', 'SHADE GROWN', 'ZERO SYNTHETICS', 'CARBON NEUTRAL'],
        impactMetrics: {
          waterSavedPerUnit: 18.5,
          plasticPreventedPerUnit: 0.8,
          carbonAvoidedPerUnit: 1.8,
          energySavedPerUnit: 6.2,
          waterEquiv: 'liters water saved in soil',
          plasticEquiv: 'plastic tea bags prevented',
          carbonEquiv: 'miles of driving offset',
          energyEquiv: 'hours solar power generated'
        },
        makerStory: 'Harvested in the mist-covered hills of Uji, Japan, by 4th-generation tea masters. Our matcha is shade-grown for 30 days to boost chlorophyll levels, creating a vibrant emerald powder rich in natural amino acids.',
        makerBadges: [
          'Direct fair-trade certified',
          'Solar-powered processing',
          '100% plastic-free tin',
          'Soil regeneration champion',
          'Zero synthetic pesticides',
          'Certified carbon neutral'
        ]
      },
      {
        id: 'fw-2',
        name: 'Artisanal Cold-Pressed Hemp Seed Oil (250ml)',
        price: 899,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 98,
        badge: 'Zero Additives',
        impact: 'Carbon-Negative Hemp Crop',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Raw, unrefined organic hemp seed oil rich in Omega 3-6-9 essential fatty acids, cold-pressed at sub-30°C to preserve vital enzymes.',
        bulletPoints: [
          'Golden Omega Ratio: Ideal 3:1 ratio of Omega-6 to Omega-3 essential fatty acids for brain & heart health.',
          'Himalayan Sourced: Grown in high-altitude organic soil requiring zero artificial irrigation.',
          'Cold-Filtered: Zero chemical solvents, hexane, or preservatives used during extraction.',
          'Protective UV Glass: Packaged in dark Miron glass to preserve nutrients without synthetic antioxidants.'
        ],
        ecoBadges: ['COLD PRESSED', 'NON-GMO', 'HIMALAYAN GROWN', 'ZERO CHEMICALS'],
        impactMetrics: {
          waterSavedPerUnit: 14.0,
          plasticPreventedPerUnit: 0.5,
          carbonAvoidedPerUnit: 2.4,
          energySavedPerUnit: 4.5,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'plastic bottles eliminated',
          carbonEquiv: 'kg CO2 absorbed by crop',
          energyEquiv: 'hours processing energy'
        },
        makerStory: 'Sourced from Himalayan smallholder farmers who cultivate industrial hemp—a powerhouse crop that sequesters 4x more CO2 per hectare than commercial forests while cleansing contaminated soils.',
        makerBadges: [
          'Wildcrafted Himalayan seeds',
          'Sub-30°C cold extraction',
          'Zero artificial additives',
          'Supports mountain farmers',
          'UV Miron glass protection',
          '100% Biodegradable waste'
        ]
      },
      {
        id: 'fw-water',
        name: 'Impact Water: Premium Mineral Drinking Water (350ml Pack of 24)',
        price: 1600,
        originalPrice: 1896,
        rating: 4.9,
        reviews: 234,
        badge: 'FSC Paper Carton',
        impact: 'Prevents 24 plastic bottles per pack',
        image: '/impact-water-box.png',
        gallery: [
          '/impact-water-box.png',
          '/impact-water-cartons.png',
          'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?w=800&auto=format&fit=crop&q=80',
          '/impact-water-box.png'
        ],
        description: 'Premium mineral-enriched hydration served in eco-friendly FSC-certified paper cartons. Infused with essential electrolytes and zero microplastics.',
        bulletPoints: [
          'Mineral-Enriched Hydration: Balanced pH 7.8 with natural calcium, magnesium, and potassium.',
          'FSC-Certified Paper Box: Made with 88% renewable plant-based materials and plant-based sugar cane cap.',
          'Microplastic Free: Zero phthalates or endocrine disruptors leaching from pet bottles.',
          'Carbon-Offset Delivery: Closed-loop logistics model saving 70% CO2 versus traditional glass bottling.'
        ],
        ecoBadges: ['FSC CERTIFIED', 'BPA FREE', 'MICROPLASTIC FREE', 'CARBON NEUTRAL'],
        impactMetrics: {
          waterSavedPerUnit: 12.0,
          plasticPreventedPerUnit: 0.9,
          carbonAvoidedPerUnit: 1.5,
          energySavedPerUnit: 5.8,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'plastic bottles eliminated',
          carbonEquiv: 'miles vehicle emissions',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Impact Water was launched to eradicate single-use plastic bottles from Indian hospitality and everyday living, converting paper pulp into waterproof recyclable hydrators.',
        makerBadges: [
          'FSC forest management',
          'Plant-based bio-caps',
          'Recyclable carton structure',
          'Zero plastic liner',
          'Ethically bottled',
          '1% donated to ocean cleanup'
        ]
      },
      {
        id: 'fw-3',
        name: 'Biodynamic Himalayan Chamomile & Ashwagandha Tea (100g)',
        price: 699,
        originalPrice: 899,
        rating: 4.9,
        reviews: 78,
        badge: 'Biodynamic Leaf',
        impact: 'Saves 0.9kg CO2 per pouch',
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Soothe evening anxiety with whole chamomile flowers blended with organic KSM-66 ashwagandha root harvested at twilight.',
        bulletPoints: [
          'Whole Whole-Flower Cut: No tea dust or sweeping leftovers—only whole aromatic chamomile heads.',
          'Adaptogenic Ashwagandha: Infused with clinically validated organic root powder for stress regulation.',
          'Compostable Pouch: Packaged in unbleached kraft paper pouch lined with home-compostable PLA.',
          'Wildcrafted Herbs: Hand-plucked by high-altitude women foraging cooperatives.'
        ],
        ecoBadges: ['BIODYNAMIC', 'WHOLE FLOWER', 'HOME COMPOSTABLE', 'ADAPTOGENIC'],
        impactMetrics: {
          waterSavedPerUnit: 10.0,
          plasticPreventedPerUnit: 0.3,
          carbonAvoidedPerUnit: 0.9,
          energySavedPerUnit: 3.2,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'nylon tea bags avoided',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours processing power'
        },
        makerStory: 'Grown on a solar-powered biodynamic farm in Uttarakhand where crops are planted following lunar cycles to maximize essential oil concentration and root potency.',
        makerBadges: [
          'Demeter biodynamic standard',
          'Hand-picked whole flowers',
          'PLA compostable lining',
          'Women cooperative empowerment',
          'Zero synthetic pesticides',
          '100% Natural essential oils'
        ]
      }
    ]
  },
  {
    id: 'beauty-care',
    title: 'Beauty & Personal Care',
    tagline: 'Clean, cruelty-free & zero-waste personal care',
    description: 'Clean skincare and personal hygiene formulated with wildcrafted botanicals, microplastic-free ingredients, and plastic-free refillable packaging.',
    iconName: 'Flower2',
    coverImage: '/viewUI/beauty and personal care.png',
    products: [
      {
        id: 'bc-1',
        name: 'Botanical Facial Oil with Rosehip & Squalane (30ml)',
        price: 1899,
        originalPrice: 2299,
        rating: 4.9,
        reviews: 215,
        badge: 'Plastic-Free Glass',
        impact: 'Replaces 12 plastic cosmetic bottles',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1608248597260-65219e820904?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Deeply nourishing facial elixir formulated with 100% cold-pressed organic rosehip seed oil and olive-derived squalane for radiant skin barrier repair.',
        bulletPoints: [
          'Plant-Retinol Alternative: Rich in natural trans-retinoic acid for collagen stimulation without peeling.',
          'Zero Microplastics: Formulated without silicones, dimethicone, or synthetic fragrance oils.',
          'Refillable Glass Vessel: Heavy glass dropper bottle designed for multi-year reuse with aluminum refills.',
          '100% Vegan & Leaping Bunny Certified: Zero animal testing across the entire supply chain.'
        ],
        ecoBadges: ['GLASS PACKAGING', 'CRUELTY FREE', 'ORGANIC BOTANICALS', 'REFILLABLE'],
        impactMetrics: {
          waterSavedPerUnit: 22.0,
          plasticPreventedPerUnit: 0.7,
          carbonAvoidedPerUnit: 2.1,
          energySavedPerUnit: 7.5,
          waterEquiv: 'liters water saved in formula',
          plasticEquiv: 'cosmetic dropper bottles saved',
          carbonEquiv: 'kg CO2 saved in transport',
          energyEquiv: 'hours lab power offset'
        },
        makerStory: 'Formulated in a small batch lab using wild-gathered Patagonian rosehip seeds. Pressed within hours of harvest to capture maximum vitamin C and pro-vitamin A.',
        makerBadges: [
          'Wildcrafted botanicals',
          'Cold-extracted lipids',
          'Recyclable amber glass',
          'Cruelty free & vegan',
          'Zero synthetic preservatives',
          'Carbon-neutral apothecary'
        ]
      },
      {
        id: 'bc-2',
        name: 'Solid Shampoo & Conditioner Bar Duo (Argan & Clay)',
        price: 999,
        originalPrice: 1299,
        rating: 4.7,
        reviews: 184,
        badge: 'Zero Waste Bar',
        impact: 'Prevents 6 plastic shampoo bottles',
        image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'pH-balanced, sulfate-free solid hair cleanser and conditioner bar infused with Moroccan argan oil, cocoa butter, and French green clay.',
        bulletPoints: [
          'Equivalent to 80 washes: Concentrated formula lasts up to 3x longer than liquid shampoo.',
          'Zero Water Transport: Waterless formulation saves 90% shipping volume and fuel emissions.',
          'Sulfate & Silicone Free: Gentle coconut-based cleansers preserve scalp natural oils.',
          'Compostable Box: Packaged in recycled paper box printed with soy ink.'
        ],
        ecoBadges: ['WATERLESS BEAUTY', 'ZERO PLASTIC', 'SULFATE FREE', 'CONCENTRATED BAR'],
        impactMetrics: {
          waterSavedPerUnit: 35.0,
          plasticPreventedPerUnit: 1.2,
          carbonAvoidedPerUnit: 3.4,
          energySavedPerUnit: 9.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'shampoo bottles eliminated',
          carbonEquiv: 'kg freight CO2 reduced',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Hand-poured using traditional cold-process techniques that cure over 4 weeks to create a long-lasting, dense bar that never mushifies in your soap dish.',
        makerBadges: [
          'Waterless solid format',
          'French green clay detox',
          'Ethical Moroccan argan oil',
          'Zero plastic packaging',
          'Biodegradable lather',
          'Travel-friendly design'
        ]
      },
      {
        id: 'bc-3',
        name: 'Reef-Safe Mineral Sunscreen Balm SPF 50 (80g)',
        price: 1299,
        originalPrice: 1599,
        rating: 4.8,
        reviews: 112,
        badge: 'Reef Safe Tint',
        impact: 'Protects 100 sq ft coral reef',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Broad-spectrum non-nano zinc oxide sunscreen in an infinitely recyclable aluminum tin. Water resistant for 80 minutes with zero oxybenzone.',
        bulletPoints: [
          '100% Non-Nano Zinc: Non-toxic physical barrier that won’t bleach delicate ocean coral reefs.',
          'Nourishing Base: Formulated with organic shea butter, jojoba oil, and non-nano zinc oxide.',
          'Zero Plastic Container: Reusable and recyclable aluminum push tin.',
          'Water-Resistant Formula: Stays on during ocean swims without ocean toxicity.'
        ],
        ecoBadges: ['REEF SAFE', 'NON-NANO ZINC', 'ALUMINUM TIN', 'OCEAN FRIENDLY'],
        impactMetrics: {
          waterSavedPerUnit: 15.0,
          plasticPreventedPerUnit: 0.6,
          carbonAvoidedPerUnit: 1.4,
          energySavedPerUnit: 4.8,
          waterEquiv: 'liters unpolluted ocean water',
          plasticEquiv: 'sunscreen tubes prevented',
          carbonEquiv: 'miles driving offset',
          energyEquiv: 'hours processing energy'
        },
        makerStory: 'Developed by marine biologists to halt chemical coral bleaching caused by common sunscreen ingredients like oxybenzone and octinoxate.',
        makerBadges: [
          'Formulated by marine biologists',
          'Zero synthetic chemical filters',
          'Infinitely recyclable aluminum',
          'Water resistant 80 minutes',
          'Organic unrefined butter base',
          'Non-comedogenic pore friendly'
        ]
      }
    ]
  },
  {
    id: 'zero-waste',
    title: 'Zero Waste Everyday Essentials',
    tagline: 'Eliminate single-use plastic from daily living',
    description: 'Durable, reusable, and biodegradable replacements for everyday single-use items. Designed for circular longevity and zero landfill footprint.',
    iconName: 'Recycle',
    coverImage: '/viewUI/zero waste everday ess.png',
    products: [
      {
        id: 'zw-1',
        name: 'Organic Cotton Produce & Grocery Bags (Set of 6)',
        price: 799,
        originalPrice: 999,
        rating: 4.9,
        reviews: 310,
        badge: 'GOTS Organic Cotton',
        impact: 'Eliminates 400 plastic grocery bags/yr',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Unbleached, machine-washable mesh produce bags with tare weight tags for effortless plastic-free grocery shopping.',
        bulletPoints: [
          '6-Piece Multi-Size Set: Includes 2 Small, 2 Medium, and 2 Large bags for grains, fruits, and veggies.',
          'Visible Tare Weight Tags: Color-coded tare weight tags stitched in grams and ounces for quick checkout.',
          'Heavy-Duty Double Stitching: Holds up to 10kg of produce per bag without tearing.',
          '100% GOTS Certified Cotton: Unbleached cotton free from pesticide residue.'
        ],
        ecoBadges: ['GOTS COTTON', 'WASHABLE', 'TARE WEIGHT TAGS', 'ZERO WASTE'],
        impactMetrics: {
          waterSavedPerUnit: 40.0,
          plasticPreventedPerUnit: 3.5,
          carbonAvoidedPerUnit: 5.2,
          energySavedPerUnit: 14.0,
          waterEquiv: 'liters water saved in cotton',
          plasticEquiv: 'plastic bags avoided',
          carbonEquiv: 'kg landfill CO2 eliminated',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Woven by a fair-trade certified women seamstress collective in Tamil Nadu using organic cotton grown on rain-fed farms.',
        makerBadges: [
          'Fair trade certified factory',
          'GOTS organic standard',
          'Rain-fed cotton crop',
          'Machine washable durable',
          'Biodegradable natural thread',
          '100% Plastic-free packaging'
        ]
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
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Triple-wall vacuum insulated stainless steel water flask that keeps drinks ice cold for 24 hours or piping hot for 12 hours.',
        bulletPoints: [
          '18/8 Pro-Grade Stainless Steel: Corrosion-resistant alloy won’t retain flavor or odor.',
          'Powder-Coated Grip: Sweat-free matte finish designed for rugged outdoor and gym use.',
          'BPA-Free Bamboo Cap: Leak-proof lid fitted with food-grade silicone ring and bamboo accent.',
          'Lifetime Durability: Built to withstand drop impacts for decades of daily hydration.'
        ],
        ecoBadges: ['STAINLESS STEEL', 'VACUUM INSULATED', 'BPA FREE', 'LIFETIME DURABLE'],
        impactMetrics: {
          waterSavedPerUnit: 85.0,
          plasticPreventedPerUnit: 6.0,
          carbonAvoidedPerUnit: 12.0,
          energySavedPerUnit: 32.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'single-use bottles avoided',
          carbonEquiv: 'kg CO2 offset over lifespan',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Engineered for extreme durability to eliminate plastic beverage containers. Designed with a wide mouth for easy cleaning and ice cube insertion.',
        makerBadges: [
          'Food-grade 18/8 steel',
          'Condensation-free exterior',
          'Natural bamboo top',
          'Fits standard cup holders',
          'Plastic-free shipment',
          'Backed by lifetime warranty'
        ]
      },
      {
        id: 'zw-3',
        name: 'Biodegradable Bamboo Toothbrush Set & Travel Tube',
        price: 499,
        originalPrice: 699,
        rating: 4.8,
        reviews: 145,
        badge: 'Zero Plastic Handle',
        impact: 'Keeps 4 plastic brushes out of ocean',
        image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Smooth ergonomic Moso bamboo toothbrushes paired with a ventilated bamboo travel tube. Infused with soft charcoal bristles.',
        bulletPoints: [
          'Naturally Antimicrobial Handle: Organic Moso bamboo resists bacterial growth naturally.',
          'Castor Oil Bio-Bristles: BPA-free soft bristles derived from renewable castor oil plants.',
          'Compostable Handle: Handle decomposes into natural soil nutrients in under 180 days.',
          'Carved Travel Case: Includes custom ventilated bamboo case for hygienic transport.'
        ],
        ecoBadges: ['BAMBOO HANDLE', 'CHARCOAL INFUSED', 'BIO BRISTLES', 'COMPOSTABLE'],
        impactMetrics: {
          waterSavedPerUnit: 8.0,
          plasticPreventedPerUnit: 0.4,
          carbonAvoidedPerUnit: 1.1,
          energySavedPerUnit: 3.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'plastic toothbrushes replaced',
          carbonEquiv: 'miles driving offset',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Moso bamboo is chosen because panda bears do not eat it and it grows up to 1 meter per day without artificial fertilizer or pesticide.',
        makerBadges: [
          'Sustainable Moso bamboo',
          'Castor oil bio-polymers',
          'Charcoal detox bristles',
          'Panda-friendly harvesting',
          'Zero plastic packaging',
          '100% Biodegradable handle'
        ]
      }
    ]
  },
  {
    id: 'fashion-kids',
    title: 'Fashion, Accessories & Kids',
    tagline: 'Ethical apparel, upcycled accessories & non-toxic toys',
    description: 'Fair-trade slow fashion crafted from organic fibers, recycled textiles, and non-toxic children items made with natural plant dyes.',
    iconName: 'ShoppingBag',
    coverImage: '/viewUI/fashion and acc.png',
    products: [
      {
        id: 'fk-1',
        name: 'Upcycled Denim Tote Bag with Eco Bird Emblem',
        price: 1999,
        originalPrice: 2499,
        rating: 4.8,
        reviews: 76,
        badge: '100% Upcycled Denim',
        impact: 'Saves 2,500 liters of water',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Handcrafted tote bag created from post-consumer discarded denim jeans with reinforced organic cotton straps and inner laptop compartment.',
        bulletPoints: [
          'Zero Virgin Cotton: Upcycling denim saves thousands of liters of cotton crop irrigation water.',
          'Artisan Crafted: Every tote has unique wash patterns and distress details.',
          'Reinforced Stitching: Heavy-duty magnetic snap button and inner zippered pocket.',
          'Circular Fashion: Diverts discarded garments directly from municipal landfills.'
        ],
        ecoBadges: ['UPCYCLED TEXTILE', 'ZERO VIRGIN COTTON', 'HANDMADE', 'CIRCULAR FASHION'],
        impactMetrics: {
          waterSavedPerUnit: 2500.0,
          plasticPreventedPerUnit: 1.5,
          carbonAvoidedPerUnit: 8.5,
          energySavedPerUnit: 24.0,
          waterEquiv: 'liters water saved in cotton crop',
          plasticPreventedPerUnit: 1.5,
          carbonEquiv: 'kg CO2 offset from textile waste',
          energyEquiv: 'hours manufacturing energy'
        },
        makerStory: 'Created by upcycling discarded denim collected from textile recycling centers, washed with eco-friendly ozone processes, and sewn by women craft artisans.',
        makerBadges: [
          '100% Upcycled denim',
          'Ozone waterless wash',
          'Fair living wages',
          'Zero landfill waste',
          'Durable heavy canvas lining',
          'Unique one-of-a-kind look'
        ]
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
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Ultra-soft, breathable organic cotton jumpsuit colored with natural vegetable-based botanical dyes for delicate infant skin.',
        bulletPoints: [
          '100% GOTS Organic Cotton: Free from heavy metals, formaldehydes, and synthetic azo dyes.',
          'Natural Botanical Dyes: Colored using madder root, turmeric, and indigo plants.',
          'Expandable Snaps: Lead-free nickel-safe snaps for easy diaper changes.',
          'Breathable All-Season Comfort: Gentle stretch ribbing for growing toddlers.'
        ],
        ecoBadges: ['GOTS ORGANIC', 'PLANT DYED', 'NICKEL FREE', 'HYPOALLERGENIC'],
        impactMetrics: {
          waterSavedPerUnit: 350.0,
          plasticPreventedPerUnit: 0.4,
          carbonAvoidedPerUnit: 2.8,
          energySavedPerUnit: 8.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'synthetic microfiber shed saved',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Designed with growing toddlers in mind, using unbleached organic cotton that becomes softer with every wash while keeping synthetic microfibers out of baby skin.',
        makerBadges: [
          'GOTS certified organic yarn',
          'Natural plant dye baths',
          'Nickel-free copper snaps',
          'Zero synthetic pesticides',
          'Fair-trade ethical stitching',
          'Recyclable paper packaging'
        ]
      }
    ]
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    tagline: 'Sustainable home decor, kitchenware & linen',
    description: 'Transform your indoor spaces with bamboo furniture, compostable kitchen items, organic bedding, and artisan-crafted eco decor.',
    iconName: 'Leaf',
    coverImage: '/viewUI/home and living.png',
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
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Architectural ceiling pendant light fixture hand-woven by rural artisans using fast-growing renewable natural bamboo cane.',
        bulletPoints: [
          '100% Sustainable Bamboo: Fast-renewing natural material that sequesters carbon rapidly.',
          'Warm Ambient Glow: Woven lattice design casts delicate shadow patterns across living spaces.',
          'Hand-Crafted Heritage: Hand-woven over 14 hours by master bamboo artisans.',
          'Non-Toxic Finish: Sealed with natural linseed oil and zero VOC chemical lacquers.'
        ],
        ecoBadges: ['SUSTAINABLE BAMBOO', 'ZERO VOC', 'HANDMADE', 'BIODEGRADABLE'],
        impactMetrics: {
          waterSavedPerUnit: 60.0,
          plasticPreventedPerUnit: 2.2,
          carbonAvoidedPerUnit: 6.8,
          energySavedPerUnit: 18.0,
          waterEquiv: 'liters water saved in timber',
          plasticEquiv: 'plastic lampshades replaced',
          carbonEquiv: 'kg CO2 absorbed by bamboo',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Woven in the northeastern bamboo belt of India where bamboo grows naturally without artificial irrigation, providing sustainable livelihoods for rural weaving communities.',
        makerBadges: [
          'Fast-growing wild bamboo',
          'Linseed oil non-toxic finish',
          'Supports indigenous weavers',
          'Biodegradable timber frame',
          'Plastic-free bubble alternative packaging',
          'Energy-efficient E27 fitting'
        ]
      },
      {
        id: 'hl-2',
        name: 'French Linen Duvet Cover Set (Natural Flax)',
        price: 4999,
        originalPrice: 5999,
        rating: 4.8,
        reviews: 156,
        badge: '100% Organic Flax',
        impact: 'Zero Pesticides & Biodegradable',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Pre-washed thermoregulating organic flax linen bedding set that grows softer with every wash while maintaining temperature balance.',
        bulletPoints: [
          '100% European Flax Linen: Grown using natural rainfall with zero synthetic pesticides.',
          'Thermoregulating Fibers: Keeps body cool during humid summers and cozy in winter months.',
          'OEKO-TEX Standard 100: Certified free from toxic chemicals, bleach, and synthetic softeners.',
          'Includes Duvet Cover & 2 Pillowcases: Coconut shell button closures and corner ties.'
        ],
        ecoBadges: ['OEKO-TEX 100', 'FRENCH FLAX', 'COCONUT BUTTONS', 'ZERO SYNTHETICS'],
        impactMetrics: {
          waterSavedPerUnit: 1200.0,
          plasticPreventedPerUnit: 1.8,
          carbonAvoidedPerUnit: 14.2,
          energySavedPerUnit: 38.0,
          waterEquiv: 'liters water saved vs conventional cotton',
          plasticEquiv: 'polyester sheets avoided',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours textile mill energy saved'
        },
        makerStory: 'Flax requires 5x less water and zero chemical fertilizers compared to industrial cotton. Every part of the flax plant is utilized, leaving zero agricultural waste.',
        makerBadges: [
          'Zero-waste flax plant processing',
          'Rain-fed European crops',
          'Real coconut shell buttons',
          'Stonewashed softness',
          'Completely biodegradable',
          'Plastic-free storage bag'
        ]
      }
    ]
  },
  {
    id: 'gifting',
    title: 'Conscious Gifting',
    tagline: 'Meaningful eco gift boxes & corporate hampers',
    description: 'Curated sustainable gift hampers, plantable seed paper goods, and eco gift sets for birthdays, corporate milestones, and celebrations.',
    iconName: 'Gift',
    coverImage: '/viewUI/gift.png',
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
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Thoughtfully curated luxury gift hamper featuring a soy wax candle, organic herbal tea tin, bamboo hairbrush, and plantable wildflower greeting card.',
        bulletPoints: [
          '100% Wild Soy Wax Candle: Hand-poured with pure lavender essential oils in a reusable ceramic jar.',
          'Organic Botanical Tea Tin: Whole leaf Chamomile Green Tea blend packed in recyclable tin.',
          'Hand-Carved Bamboo Cushion Brush: Scalp-soothing wooden bristles that massage naturally.',
          'Plantable Wildflower Card: Seed paper greeting card that sprouts into colorful blooms when buried.'
        ],
        ecoBadges: ['PLANT A TREE', 'SOY WAX', 'SEED PAPER', 'ZERO WASTE BOX'],
        impactMetrics: {
          waterSavedPerUnit: 45.0,
          plasticPreventedPerUnit: 2.0,
          carbonAvoidedPerUnit: 7.2,
          energySavedPerUnit: 16.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'gift wrap plastic avoided',
          carbonEquiv: 'kg CO2 offset via tree planting',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Every purchase of this deluxe gift set funds the planting of 1 native fruit tree through our agro-forestry partner network in rural communities.',
        makerBadges: [
          'Tree planting certificate included',
          'Recycled kraft gift box',
          'Soy wax clean burn',
          'Essential oil aroma',
          'Plantable greeting card',
          'Zero plastic ribbon'
        ]
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
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Recycled cotton rag paper journal embedded with non-GMO basil and wildflower seeds that can be planted in soil after use.',
        bulletPoints: [
          'Embedded Non-GMO Seeds: Pages sprout into marigolds, basil, and poppies when planted.',
          'Tree-Free Cotton Rag Paper: Handmade from cotton garment factory offcuts without felling trees.',
          'Includes Newspaper Pens: 4 recycled newspaper ballpoint pens with non-toxic ink.',
          'Natural Jute Binding: Bound with organic jute twine for 100% natural biodegradability.'
        ],
        ecoBadges: ['TREE FREE', 'EMBEDDED SEEDS', 'RECYCLED COTTON', 'PLANTABLE'],
        impactMetrics: {
          waterSavedPerUnit: 28.0,
          plasticPreventedPerUnit: 0.7,
          carbonAvoidedPerUnit: 2.1,
          energySavedPerUnit: 5.5,
          waterEquiv: 'liters water saved in paper pulp',
          plasticEquiv: 'plastic pens & covers avoided',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours paper mill energy saved'
        },
        makerStory: 'Handmade by traditional papermakers using cotton textile rags rescued from garment factories. No trees were harmed and zero chlorine bleaching was used.',
        makerBadges: [
          '100% Tree-free paper',
          'Upcycled cotton scraps',
          'Embedded wildflower seeds',
          'Non-toxic vegetable ink',
          'Natural jute cord binding',
          'Sprouts real garden flowers'
        ]
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
        badge: 'SunPower Cells',
        impact: '100% Clean Off-Grid Energy',
        image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1508873696983-2df515122519?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Weatherproof portable solar panel array with dual USB smart ports for charging smartphones, cameras, and power banks on outdoor journeys.',
        bulletPoints: [
          '24% Cell Efficiency: SunPower monocrystalline solar array generates electricity even in overcast conditions.',
          'Rugged Recycled Canvas: IPX4 waterproof fabric casing crafted from recycled PET ocean bottles.',
          'Smart IC Charging: Automatically detects connected devices to deliver safe 2.4A fast charging.',
          'Ultra Light & Foldable: Weighs only 600g and folds down to book-size for easy backpack storage.'
        ],
        ecoBadges: ['24% SOLAR EFFICIENCY', 'RECYCLED PET CANVAS', 'IPX4 WATERPROOF', 'OFF-GRID POWER'],
        impactMetrics: {
          waterSavedPerUnit: 50.0,
          plasticPreventedPerUnit: 4.0,
          carbonAvoidedPerUnit: 18.0,
          energySavedPerUnit: 65.0,
          waterEquiv: 'liters water saved in grid energy',
          plasticEquiv: 'plastic power brick waste',
          carbonEquiv: 'kg grid CO2 avoided per year',
          energyEquiv: 'kWh clean energy generated'
        },
        makerStory: 'Designed for eco-explorers and digital nomads who want reliable clean power without relying on fossil-fuel powered grid electricity.',
        makerBadges: [
          'Monocrystalline silicon',
          'Recycled ocean PET fabric',
          'Dual USB Smart IC',
          'IPX4 weatherproof',
          'Folds to compact pouch',
          '2-year hardware warranty'
        ]
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
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1622445268465-8438a05981f2?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1508873696983-2df515122519?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Fast 15W Qi wireless charger encased in eco-friendly bio-based agricultural wheat straw composite.',
        bulletPoints: [
          '15W Fast Wireless Output: Compatible with all Qi-enabled iPhone and Android devices.',
          'Wheat-Straw Bioplastic Body: Made from upcycled agricultural wheat stalk waste.',
          'Overheat & Surge Protection: Built-in smart chip prevents voltage spikes and overheating.',
          'Braided Recycled Cable: Includes 1m USB-C cable wrapped in recycled cotton braiding.'
        ],
        ecoBadges: ['WHEAT STRAW BIO', '15W QI FAST', 'RECYCLED CABLE', 'BIO COMPOSITE'],
        impactMetrics: {
          waterSavedPerUnit: 18.0,
          plasticPreventedPerUnit: 0.8,
          carbonAvoidedPerUnit: 3.2,
          energySavedPerUnit: 8.5,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'fossil plastic eliminated',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Replaces virgin ABS plastic in electronics with agricultural byproduct wheat straw, turning crop residue that would otherwise be burned into sleek desk technology.',
        makerBadges: [
          'Upcycled wheat straw bio-body',
          'Fast Qi wireless standard',
          'Braided recycled cable',
          'Low standby power consumption',
          'Plastic-free gift packaging',
          'CE & RoHS certified safe'
        ]
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
        badge: 'TUV OK Compost',
        impact: 'Breaks down in 90 days in soil',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Heavy-duty waterproof shipping mailers crafted from cornstarch and PBAT bio-polymers that decompose into organic humus.',
        bulletPoints: [
          'TUV OK Compost Certified: Decomposes in home compost bins within 90 days without toxic residue.',
          'Waterproof & Tear Resistant: Double adhesive strip allows envelope reuse before composting.',
          'Zero Microplastics: Certified free from polyethylene and synthetic plasticizers.',
          'Printed with Soy Ink: Non-toxic natural ink graphics that do not pollute compost soil.'
        ],
        ecoBadges: ['HOME COMPOSTABLE', 'TUV CERTIFIED', 'DOUBLE ADHESIVE', 'ZERO MICROPLASTICS'],
        impactMetrics: {
          waterSavedPerUnit: 30.0,
          plasticPreventedPerUnit: 2.5,
          carbonAvoidedPerUnit: 6.0,
          energySavedPerUnit: 15.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'plastic poly-mailers eliminated',
          carbonEquiv: 'kg CO2 avoided from plastic manufacturing',
          energyEquiv: 'hours energy saved'
        },
        makerStory: 'Designed to solve the massive poly-mailer crisis generated by modern e-commerce. Made from renewable cornstarch that turns into soil fertilizer after use.',
        makerBadges: [
          'TUV Austria OK Compost Home certified',
          'PBAT & cornstarch matrix',
          'Re-sealable dual tape strip',
          'Waterproof rain barrier',
          'Non-toxic soy ink',
          'Zero microplastic residue'
        ]
      },
      {
        id: 'sp-2',
        name: 'Recycled Paper Honeycomb Protective Cushioning Roll (50m)',
        price: 1499,
        originalPrice: 1799,
        rating: 4.8,
        reviews: 82,
        badge: '100% Recycled Kraft',
        impact: 'Replaces Plastic Bubble Wrap',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Expandable 3D honeycomb paper wrap that interlocks around fragile glassware and ceramics without requiring sticky tape.',
        bulletPoints: [
          'Self-Interlocking Design: Hexagonal cells expand to lock items securely without adhesive plastic tape.',
          '100% Recycled Kraft: FSC recycled paper source reduces raw timber consumption.',
          'Saves Storage Space: Expands 1.6x upon stretching, reducing warehouse storage footprint.',
          '100% Recyclable with Paper: Easily discarded in normal curbside paper recycling.'
        ],
        ecoBadges: ['RECYCLED KRAFT', 'NO TAPE NEEDED', '3D HONEYCOMB', 'CURBSIDE RECYCLABLE'],
        impactMetrics: {
          waterSavedPerUnit: 65.0,
          plasticPreventedPerUnit: 4.2,
          carbonAvoidedPerUnit: 9.8,
          energySavedPerUnit: 22.0,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'bubble wrap rolls replaced',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours manufacturing energy'
        },
        makerStory: 'Engineering inspired by bee honeycomb architecture. Provides high shock absorption for fragile items while replacing plastic bubble wrap completely.',
        makerBadges: [
          'Inspired by natural hexagonal geometry',
          '100% Post-consumer paper',
          'Zero plastic tape requirement',
          'Curbside recyclable',
          'Biodegradable in 30 days',
          'Compact storage roll'
        ]
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
        badge: 'GOTS & OEKO-TEX',
        impact: 'Zero Chemical Fertilizers',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Durable, natural unbleached hemp canvas fabric ideal for eco-fashion, tote bags, aprons, upholstery, and outdoor gear.',
        bulletPoints: [
          'High Tensile Strength: 3x stronger than conventional cotton with natural antimicrobial properties.',
          'Natural Unbleached Finish: Chemical-free raw ivory tone with zero synthetic optical brighteners.',
          'Soil-Restorative Crop: Hemp farming enriches topsoil nitrogen without requiring pesticides.',
          'Sold by the Meter: 150cm width roll for designers and DIY textile craft makers.'
        ],
        ecoBadges: ['HEMP CANVAS', 'UNBLEACHED', 'GOTS CERTIFIED', 'SOIL RESTORATIVE'],
        impactMetrics: {
          waterSavedPerUnit: 450.0,
          plasticPreventedPerUnit: 1.0,
          carbonAvoidedPerUnit: 5.5,
          energySavedPerUnit: 14.0,
          waterEquiv: 'liters water saved per meter',
          plasticEquiv: 'synthetic canvas replaced',
          carbonEquiv: 'kg CO2 absorbed by hemp crop',
          energyEquiv: 'hours weaving energy'
        },
        makerStory: 'Woven from long-bast hemp fibers harvested from rain-fed fields. Hemp produces 250% more fiber per hectare than cotton with zero artificial irrigation.',
        makerBadges: [
          '100% Pure hemp bast fiber',
          'Zero synthetic pesticides',
          'Unbleached raw finish',
          'Naturally pest-resistant',
          'OEKO-TEX certified non-toxic',
          'Fully compostable textile'
        ]
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
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&auto=format&fit=crop&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'Next-generation vegan leather grown from fungal mycelium roots fed on agricultural sawdust waste. Soft, supple, durable, and completely plastic-free.',
        bulletPoints: [
          'Grown in 2 Weeks: Cultivated indoors using vertical farming trays fed on organic sawdust.',
          'Zero Plastic PU or PVC: Unlike traditional synthetic vegan leathers, contains zero polyurethane.',
          'Warm Leather Feel: Soft tactile texture with natural flex memory and moisture breathability.',
          'Home Compostable: Decomposes into nutrient-rich soil at end of product life.'
        ],
        ecoBadges: ['MYCELIUM LEATHER', 'ZERO PVC', 'ANIMAL FREE', 'HOME COMPOSTABLE'],
        impactMetrics: {
          waterSavedPerUnit: 800.0,
          plasticPreventedPerUnit: 1.5,
          carbonAvoidedPerUnit: 12.0,
          energySavedPerUnit: 28.0,
          waterEquiv: 'liters water saved vs cow leather',
          plasticEquiv: 'polyurethane synthetic leather saved',
          carbonEquiv: 'kg CO2 offset',
          energyEquiv: 'hours bio-reactor energy'
        },
        makerStory: 'Cultivated by bio-engineers using fungal mycelium root networks grown on upcycled sawdust. Grown to custom thickness in just 14 days with zero animal suffering.',
        makerBadges: [
          '100% Bio-fabricated material',
          'Upcycled sawdust substrate',
          'Zero toxic chromium tanning',
          'Completely polyurethane free',
          'Biodegradable natural material',
          'Sample sheet for sustainable fashion designers'
        ]
      }
    ]
  }
];

export const starterKitProduct = {
  id: 'starter-kit-1',
  name: 'Rayeva Starter Kit: Begin Your Journey',
  price: 499,
  originalPrice: 650,
  rating: 4.9,
  reviews: 234,
  badge: 'Starter Kit',
  impact: 'Saves 15kg plastic per year',
  image: '/starter-kit.png',
  gallery: [
    '/starter-kit.png',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
    '/starter-kit.png'
  ],
  categoryTitle: 'Zero Waste Everyday Essentials',
  categoryPath: 'Zero Waste › Starter Bundles',
  description: 'Our curated starter kit contains everything you need to begin your sustainable lifestyle transformation. Each product is carefully selected for maximum impact and ease of use.',
  bulletPoints: [
    'Complete Sustainable Transition Bundle: Includes stainless steel water flask, bamboo toothbrush set, organic cotton produce bag, and solid shampoo bar.',
    'Zero Single-Use Waste: Replaces over 1,500 disposable single-use plastic items per year.',
    'Non-Toxic & Food-Safe: Made from 100% food-grade stainless steel, organic cotton, and bamboo.',
    'Artisan Crafted Quality: Built for circular longevity with a lifetime durability promise.'
  ],
  ecoBadges: ['ZERO WASTE', 'GOTS ORGANIC', 'BPA FREE', 'CIRCULAR DESIGN'],
  impactMetrics: {
    waterSavedPerUnit: 25.0,
    plasticPreventedPerUnit: 2.5,
    carbonAvoidedPerUnit: 4.8,
    energySavedPerUnit: 18.0,
    waterEquiv: 'liters water saved',
    plasticEquiv: 'plastic bags avoided',
    carbonEquiv: 'kg CO2 reduced',
    energyEquiv: 'hours energy saved'
  },
  makerStory: `Rayeva Starter Kit is engineered to make eco-friendly living effortless. By replacing daily disposable items with durable, beautiful alternatives, this kit helps you reduce your household waste by up to 80% in your first month.`,
  makerBadges: [
    'Curated zero-waste bundle',
    'Ethically handcrafted',
    'Carbon-neutral shipping',
    'Plastic-free packaging',
    'Cruelty-free & non-toxic',
    '1% for the Planet'
  ]
};

export const impactWaterProduct = {
  id: 'impact-water',
  name: 'Impact Water: Premium Mineral Drinking Water (350ml Pack of 24)',
  price: 1600,
  originalPrice: 1896,
  rating: 4.9,
  reviews: 234,
  badge: 'FSC Paper Carton',
  impact: 'Prevents 24 plastic bottles per pack',
  image: '/impact-water-box.png',
  gallery: [
    '/impact-water-box.png',
    '/impact-water-cartons.png',
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?w=800&auto=format&fit=crop&q=80',
    '/impact-water-box.png'
  ],
  categoryTitle: 'Food & Wellness',
  categoryPath: 'Food & Wellness › Beverages',
  description: 'Premium Mineral-Enriched Hydration: Each carton is infused with essential minerals for a crisp, refreshing taste and enhanced wellness. Perfect for daily hydration with a premium touch.',
  bulletPoints: [
    'Premium Mineral-Enriched Hydration: Each carton is infused with essential minerals for a crisp, refreshing taste.',
    'Eco-Friendly Paper-Based Carton: Say goodbye to plastic bottles with FSC-certified paper cartons.',
    '100% Recyclable & BPA-Free: Safe for you and the planet with zero synthetic toxins.',
    'Convenient & Travel-Friendly: Compact 350ml size ideal for work, gym, or on-the-go hydration.'
  ],
  ecoBadges: ['NON-TOXIC', 'LOW EMISSION', 'CARBON NEUTRAL', 'PARTIALLY PLASTIC FREE'],
  impactMetrics: {
    waterSavedPerUnit: 12.0,
    plasticPreventedPerUnit: 0.5,
    carbonAvoidedPerUnit: 1.2,
    energySavedPerUnit: 5.0,
    waterEquiv: 'small water bottles',
    plasticEquiv: 'plastic straws saved',
    carbonEquiv: 'miles not driven',
    energyEquiv: 'hours laptop power'
  },
  makerStory: `Impact Water redefines hydration with a premium mineral-enriched drinking water packaged in eco-friendly, FSC-certified paper cartons. Unlike conventional plastic bottles, Impact Water's sustainable approach reduces plastic waste and environmental impact. Made in India with global standards, Impact Water's commitment to non-toxic, partially plastic-free packaging ensures a healthier planet.`,
  makerBadges: [
    'Eco-conscious material choice',
    'Offsets carbon emissions',
    'Supports sustainable forestry',
    'Reduces environmental footprint',
    'No animal testing',
    'Eco-conscious materials'
  ]
};

export function findProductById(id) {
  if (!id || id === 'impact-water' || id === 'fw-water') {
    return impactWaterProduct;
  }
  
  if (id === 'starter-kit-1') {
    return starterKitProduct;
  }

  // Search all categories
  for (const cat of categoriesData) {
    const found = cat.products.find(p => p.id === id);
    if (found) {
      return {
        ...found,
        categoryTitle: cat.title,
        categoryPath: `${cat.title} › ${found.badge}`,
        gallery: found.gallery || [found.image, found.image, found.image, found.image],
        bulletPoints: found.bulletPoints || [
          `${found.name} is ethically produced according to strict certified environmental standards.`,
          `Designed for circular longevity with 100% recyclable, compostable, or biodegradable materials.`,
          `Directly reduces your individual environmental footprint (${found.impact}).`,
          `Formulated and packaged with zero harmful microplastics, synthetic pesticides, or chemical toxins.`
        ],
        ecoBadges: found.ecoBadges || [
          found.badge.toUpperCase(),
          'VERIFIED ECO',
          'ZERO TOXINS',
          'CARBON NEUTRAL'
        ],
        impactMetrics: found.impactMetrics || {
          waterSavedPerUnit: Math.round(found.price * 0.02 * 10) / 10 || 8.5,
          plasticPreventedPerUnit: Math.round(found.price * 0.0005 * 100) / 100 || 0.4,
          carbonAvoidedPerUnit: Math.round(found.price * 0.0015 * 10) / 10 || 1.5,
          energySavedPerUnit: Math.round(found.price * 0.004 * 10) / 10 || 5.2,
          waterEquiv: 'liters water saved',
          plasticEquiv: 'plastic bottles saved',
          carbonEquiv: 'miles not driven',
          energyEquiv: 'hours energy saved'
        },
        makerStory: found.makerStory || `${found.name} represents the pinnacle of conscious craftsmanship. ${found.description} Made with care for both people and planet.`,
        makerBadges: found.makerBadges || [
          'Eco-conscious material choice',
          'Offsets carbon emissions',
          'Supports sustainable production',
          'Reduces environmental footprint',
          'No synthetic toxins',
          '100% Transparent Supply Chain'
        ]
      };
    }
  }

  // Fallback
  return impactWaterProduct;
}
