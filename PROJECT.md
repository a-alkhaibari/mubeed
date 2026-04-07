# مبيد (Mubeed) — Project Documentation

## Project Overview

**What is this?** A lead-generation static website for pest control services in Saudi Arabia. Covers general pest spraying, specific pest treatments (cockroaches, bed bugs, rats, termites), pigeon deterrent installation, and pre-construction pest treatment. Captures leads via WhatsApp.

**Business Model:** Lead-gen platform. Revenue target: 30-50 SAR per lead (highest across all 7 sites due to premium CPCs averaging 20-35 SAR).

**Relationship to Other Sites:**
- Site #1: kashshaf.com — Water services
- Site #2: sibakah.com — Plumbing
- Site #3: takyeefna.com — AC & Cooling
- Site #4: nsalleh.com — Home Appliances
- Site #5: kahrabiyat.com — Electrical
- Site #6: ajhizah.com — Tech Devices
- **Site #7: mubeed.com — Pest Control (THIS SITE)**

**What makes this vertical unique:**
- **Highest CPCs** across all 7 verticals (average 20-35 SAR, peak 66.60 SAR for القصيم)
- **Best city coverage** — 21 cities with volume data, 8 cities above 5K/mo
- **Strongest commercial (B2B) angle** — restaurants, hotels, mosques need annual contracts + health certificates
- **Pre-construction treatment** is a high-value niche (رش قبل البناء, 1,000-3,000 SAR per job)
- **Annual contracts** (عقد مكافحة حشرات) = recurring revenue, not one-time leads
- **75% service intent** — highest conversion-ready traffic of any vertical

---

## Brand & Identity

**Brand Name:** مبيد (Mubeed — "Pesticide / Exterminator")
**Domain:** mubeed.com
**WhatsApp Number:** +966555435986 (shared with all sites)
**GA4 Measurement ID:** G-FKGZLWWVJP

### Design System

**Font:** Tajawal (Google Fonts) — weights: 400, 500, 700, 800, 900

**Color Palette (Crimson + Dark Slate — urgent, professional):**
```css
--dark: #1C1917          /* Primary dark (warm charcoal) */
--deep: #292524          /* Secondary dark */
--mid: #44403C           /* Gradients */
--accent: #DC2626        /* Crimson red — links / accents */
--bright: #EF4444        /* Bright red — highlights / hero */
--pale: #FEF2F2          /* Light red — backgrounds / tags */
--ice: #FFFBFB           /* Near-white warm — alternate sections */
--white: #FFFFFF
--text-primary: #1C1917
--text-secondary: #57534E
--text-light: #A8A29E
--whatsapp: #25D366
```

**Logo:** SVG crosshair/target icon in crimson — suggests precision pest elimination.

**Direction:** RTL (right-to-left)

**Color comparison across all seven sites:**
| Site | Color | Hex |
|------|-------|-----|
| kashshaf.com | Blue | #2D8BCA |
| sibakah.com | Teal | #2A9D8F |
| kahrabiyat.com | Amber | #E8A838 |
| takyeefna.com | Frost | #0891B2 |
| nsalleh.com | Purple | #7C3AED |
| ajhizah.com | Emerald | #059669 |
| **mubeed.com** | **Crimson** | **#DC2626** |

---

## Site Architecture

```
/
├── index.html                          # Main landing page
├── cities/
│   ├── riyadh.html                     # الرياض ⚠️ NEEDS CONTENT
│   ├── jeddah.html                     # جدة ⚠️ NEEDS CONTENT
│   └── dammam.html                     # الدمام ⚠️ NEEDS CONTENT
├── articles/
│   ├── cockroach-guide.html            # دليل الصراصير ⚠️ NEEDS CONTENT
│   ├── bedbug-guide.html               # دليل بق الفراش ⚠️ NEEDS CONTENT
│   ├── pigeon-guide.html               # دليل طارد الحمام ⚠️ NEEDS CONTENT
│   └── pest-prices.html                # أسعار مكافحة الحشرات ⚠️ NEEDS CONTENT
├── sitemap.xml
├── robots.txt
├── llms.txt
├── firebase.json
└── PROJECT.md                          # This file
```

**Total: 12 files, ~186KB**
**Pages needing content: 7 (3 cities + 4 articles)**

---

## Services Offered

### 1. رش مبيدات شامل (General Pest Spraying) — PRIMARY
- **Search Volume:** 40,750/mo combined
- **Key Terms:** رش مبيدات (5K, 25 SAR), رش حشرات (5K, 27 SAR), رش مبيدات بالرياض (5K, 25 SAR), رش مبيدات بجدة (5K, 35 SAR), شركة رش مبيدات بالرياض (5K, 25 SAR), مبيد حشرات (5K, 17 SAR)
- **CPC Range:** 17-35 SAR (highest across all verticals)
- **Price Range:** شقة 200-400 SAR, فيلا 500-1,000 SAR
- **Guarantee:** 3-6 months
- **Sub-keywords:** رش ضبابي (50), رش وتعقيم (500), تبخير حشرات, مبيدات عضوية (50)

### 2. مكافحة صراصير ونمل (Cockroaches & Ants)
- **Search Volume:** 8,350/mo (cockroaches) + 7,750/mo (ants) = 16,100/mo combined
- **Cockroach Terms:** علاج الصراصير (5K, 7.92 SAR), مكافحة صراصير (500, 19 SAR), مكافحة صراصير بالرياض (500, 20 SAR), جل الصراصير (500), بخاخ صراصير (500)
- **Ant Terms:** بودرة النمل (5K, 7 SAR), مكافحة نمل (500, 29 SAR), بخاخ نمل (500)
- **Problem Keywords:** الصراصير في المطبخ (50), صراصير صغيرة في المطبخ (50), صراصير المجاري (50), النمل في البيت (500), النمل الأسود في البيت (50), النمل الطائر (500)
- **Price Range:** 200-500 SAR

### 3. مكافحة بق الفراش (Bed Bugs)
- **Search Volume:** 17,900/mo combined (including related terms)
- **Key Terms:** حشرات الفراش (5K), حشرة البق (5K, 9 SAR), شكل قرصة البق (5K), مكافحة بق الفراش (500, 19 SAR), شكل بق الفراش (500, 8 SAR), علاج بق الفراش (500, 7 SAR), بخاخ بق الفراش (500), حشرة الفاش (500)
- **Problem Keywords:** بق الفراش كيف اتخلص منه (50), كيف اعرف ان عندي بق (50), علامات وجود بق الفراش (50), اسباب ظهور البق (50), قرص بق الفراش (50)
- **Treatment:** 2-3 sessions over 2-3 weeks, specialized chemicals + heat treatment
- **Price Range:** 300-800 SAR
- **Content Angle:** Most distressing pest psychologically — content should be empathetic and authoritative

### 4. مكافحة فئران وقوارض (Rats & Rodents)
- **Search Volume:** 13,200/mo combined
- **Key Terms:** مصيدة فئران (5K, 2.71 — product search), سم فئران (5K, 2.22 — product search), مكافحة فئران (500, 20 SAR), مكافحة فئران بالرياض (500, 20 SAR), مكافحة القوارض (500, 12 SAR), جهاز طارد فئران (500)
- **Problem Keywords:** الفئران في البيت (50), سبب وجود الفئران (50), كيف اتخلص من الفئران (50)
- **Note:** مصيدة فئران (5K) and سم فئران (5K) are product searches — content should bridge: "tried traps/poison? here's why professional treatment works better"
- **Price Range:** 300-700 SAR

### 5. تركيب طارد وشبك حمام (Pigeon Control)
- **Search Volume:** 16,200/mo combined — a sub-vertical on its own
- **Key Terms:** شبك حمام (5K, 13 SAR), تركيب طارد حمام (5K, 11 SAR), طارد حمام (5K, 7 SAR), تركيب طارد حمام بالرياض (500, 11 SAR), مكافحة حمام (500, 6 SAR)
- **Product Terms:** جهاز طارد حمام الكتروني, انواع طارد الحمام, طارد حمام شفاف, طارد حمام ستيل, شوك طارد حمام, اسلاك طارد حمام
- **Types of Deterrents:**
  - شوك ستانلس ستيل: 30-50 SAR/meter — most common
  - أسلاك معدنية: 40-60 SAR/meter — more aesthetic
  - شبك شفاف: 150-500 SAR/window or balcony — full protection
  - طارد كهربائي: 200-500 SAR — for severe cases
- **Price Range:** 30-70 SAR/meter (deterrents), 150-500 SAR (netting)
- **Saudi Context:** Pigeons are a major problem on Saudi buildings — nesting on AC units, balconies, windows. Their droppings damage paint and surfaces and carry diseases.

### 6. رش نمل أبيض ومعالجة أرضة (Termite Treatment + Pre-Construction)
- **Search Volume:** 8,550/mo combined (including ants)
- **Key Terms:** علاج النمل الابيض (500, 12 SAR), مكافحة نمل ابيض (50), النمل الابيض في الجدار (50), الرمة في البيت (50), علاج الرمة (50), مكافحة الرمة (50)
- **Pre-Construction:** رش قبل البناء, رش اساسات, رش دفان (50), معالجة الرمة قبل البناء, رش قبل الصبة, رش مبيدات اساسات
- **Related:** سوسة النخيل الحمراء (500) — palm weevil, agricultural pest
- **Price Range:** 500-2,000 SAR (existing building), 1,000-3,000 SAR (pre-construction)
- **Note:** This is the highest-value per-job service. Pre-construction termite treatment is required by building codes in many Saudi municipalities. A single job = 1,000-3,000 SAR.

---

## Keyword Research Summary (4 rounds, Google Keyword Planner April 2026)

**Total volume: ~191,650/mo across 179 keywords with volume**

### Tier 1 — 5,000/mo Keywords (20 keywords at 5K each)
| Keyword | CPC | Competition | Category |
|---------|-----|-------------|----------|
| مكافحة حشرات بجدة | 35.24 | Medium | General - Jeddah |
| رش مبيدات بجدة | 35.23 | Medium | Spraying - Jeddah |
| رش حشرات بجدة | 35.04 | Low | Spraying - Jeddah |
| شركة مكافحة حشرات بجدة | 34.80 | Low | Company - Jeddah |
| شركة مكافحة حشرات | 31.01 | Low | Company - Generic |
| مكافحة حشرات | 27.98 | Medium | General |
| رش حشرات | 27.56 | Medium | Spraying |
| شركة رش مبيدات بالرياض | 25.81 | Low | Company - Riyadh |
| رش مبيدات بالرياض | 25.77 | Medium | Spraying - Riyadh |
| رش مبيدات | 25.03 | Medium | Spraying |
| شركة مكافحة حشرات بالدمام | 25.02 | Low | Company - Dammam |
| مكافحة حشرات بالدمام | 25.02 | Low | General - Dammam |
| مكافحة حشرات بالرياض | 24.03 | Medium | General - Riyadh |
| شركة مكافحة حشرات بالرياض | 22.03 | Low | Company - Riyadh |
| شركة مكافحة حشرات بالخبر | 21.24 | Low | Company - Khobar |
| شركة مكافحة حشرات بالجبيل | 19.95 | Low | Company - Jubail |
| شركة مكافحة حشرات بمكة | 18.50 | Low | Company - Makkah |
| شركة مكافحة حشرات بالاحساء | 14.43 | Low | Company - Ahsa |
| شركة مكافحة حشرات بالطائف | 13.41 | Low | Company - Taif |
| شبك حمام | 13.79 | High | Pigeon |
| تركيب طارد حمام | 11.90 | Low | Pigeon |
| حشرة البق | 9.32 | Medium | Bed Bugs |
| علاج الصراصير | 7.92 | High | Cockroach |
| طارد حمام | 7.38 | High | Pigeon |
| بودرة النمل | 7.19 | High | Ants (product) |
| حشرات الفراش | 6.65 | High | Bed Bugs |
| مبيد حشرات | 17.64 | High | Product |
| مصيدة فئران | 2.71 | High | Rats (product) |
| سم فئران | 2.22 | High | Rats (product) |
| طارد ناموس | 1.73 | High | Mosquito (product) |
| شكل قرصة البق | — | Low | Bed Bugs (info) |

### Notable High-CPC Keywords
| Keyword | Volume | CPC | Why it matters |
|---------|--------|-----|---------------|
| شركة مكافحة حشرات بالقصيم | 500 | **66.60** | Highest CPC across ALL 7 verticals |
| شركة مكافحة حشرات بتبوك | 500 | **48.60** | Extremely low competition |
| مكافحة حشرات بالمدينة | 500 | 34.72 | Premium market |
| عقد مكافحة حشرات | 500 | 32.03 | Recurring revenue (annual contracts) |
| مكافحة نمل | 500 | 29.92 | High destruction potential |

---

## City Coverage — 21 Cities (Best across all 7 verticals)

### Tier 1 — Major Cities (5,000+ mo combined)
| City | Volume | Keywords | Top CPC | Priority |
|------|--------|----------|---------|----------|
| الرياض | 23,150/mo | 13 | 25.81 | ★★★ Dedicated city page |
| جدة | 21,500/mo | 7 | 35.24 | ★★★ Dedicated city page (highest CPCs!) |
| الدمام | 11,550/mo | 6 | 25.02 | ★★★ Dedicated city page |
| مكة | 6,050/mo | 4 | 19.02 | ★★ Should get dedicated page |
| الطائف | 5,550/mo | 3 | 14.49 | ★★ Should get dedicated page |
| الخبر | 5,550/mo | 3 | 21.24 | ★★ Should get dedicated page |
| الأحساء | 5,550/mo | 3 | 15.35 | ★★ Should get dedicated page |
| الجبيل | 5,550/mo | 3 | 19.95 | ★★ Should get dedicated page |

### Tier 2 — Medium Cities (500-1,000/mo)
| City | Volume | Top CPC |
|------|--------|---------|
| حائل | 1,050/mo | 13.11 |
| القصيم | 1,050/mo | **66.60** (highest CPC!) |
| المدينة المنورة | 1,000/mo | 34.72 |
| تبوك | 550/mo | **48.60** |
| نجران | 500/mo | 27.84 |
| جازان | 500/mo | 13.16 |
| الخرج | 500/mo | 12.01 |

### Tier 3 — Small Cities (50/mo)
| City | Volume |
|------|--------|
| أبها | 100/mo |
| القطيف | 100/mo |
| خميس مشيط | 50/mo |
| ينبع | 50/mo |
| سكاكا | 50/mo |
| الظهران | 50/mo |

**Recommended city pages: Build 8 dedicated city pages** (Riyadh, Jeddah, Dammam, Makkah, Taif, Khobar, Ahsa, Jubail) — each has 5K+ volume. The remaining cities can be listed on the main page and served via the generic WhatsApp flow.

---

## City Page Content Differentiation

| City | Unique Angle | Pest Focus |
|------|-------------|------------|
| الرياض | Desert climate, extreme heat, dust. New construction = termite risk. Large villas = more surface area for spraying. | Cockroaches (sewer system), termites (new builds), rats (older neighborhoods) |
| جدة | Coastal humidity = more pests year-round. Highest CPCs (35 SAR) = most competitive market. Moisture creates ideal breeding for mosquitoes and cockroaches. | Mosquitoes (humidity), bed bugs (hotels/tourism), cockroaches (moisture) |
| الدمام | Eastern Province industrial area. Heat + humidity from Gulf. Large compounds and warehouses need commercial pest control. | Cockroaches, termites, commercial pest control |
| مكة | Hajj/Umrah tourism = bed bug transfer risk. Hotels and furnished apartments need regular treatment. Dense urban housing. | Bed bugs (tourism), cockroaches, annual contracts for hotels |
| الطائف | Mountain climate, cooler than other cities. Agricultural area = different pest profile. | Garden pests, ants, scorpions |
| الخبر | Part of Dammam metro. Residential focus. | Same as Dammam, residential emphasis |
| الأحساء | Agricultural oasis. Date palms = سوسة النخيل risk. Older buildings. | Palm weevil, termites, ants |
| الجبيل | Industrial city. New residential areas alongside industrial zones. | Industrial pest control, new construction termite prevention |

---

## Article Content Guidelines

### Article 1: cockroach-guide.html (دليل الصراصير)
**Target:** علاج الصراصير (5K), مكافحة صراصير (500), كيف اتخلص من الصراصير (50), بخاخ صراصير (500), جل الصراصير (500)
**Combined volume:** ~8,300/mo
**Content should include:**
- Types of cockroaches in Saudi: صراصير المانية (small, kitchen), صراصير أمريكية (large, sewer)
- Why cockroaches appear: moisture, food scraps, sewer access, cracks/gaps
- Kitchen cockroaches vs bathroom cockroaches — different sources
- DIY treatments: بخاخ صراصير (temporary), جل الصراصير (more effective), بودرة (limited)
- Why DIY often fails — cockroaches develop resistance, eggs survive spraying
- Professional treatment: what a pest control company does differently
- Prevention tips: sealing gaps, fixing leaks, cleaning, garbage management
- Cost comparison: DIY products vs professional service
- Health risks: cockroaches carry bacteria, trigger asthma
- FAQ: هل الصراصير تنقل أمراض, سبب وجود الصراصير, صراصير صغيرة في المطبخ

### Article 2: bedbug-guide.html (دليل بق الفراش)
**Target:** حشرة البق (5K), حشرات الفراش (5K), شكل قرصة البق (5K), مكافحة بق الفراش (500), شكل بق الفراش (500), علاج بق الفراش (500)
**Combined volume:** ~17,900/mo — BIGGEST article opportunity
**Content should include:**
- What bed bugs look like: شكل بق الفراش (size, color, photos description)
- Where they hide: mattress seams, bed frame, behind headboard, electrical outlets, carpet edges
- Signs of infestation: قرصة البق (bite marks), blood spots on sheets, dark spots (feces), skin shells
- How you get bed bugs: travel/hotels, used furniture, visiting infested homes, NOT from poor hygiene
- شكل قرصة البق — what bed bug bites look like vs mosquito bites vs other insect bites
- Why bed bugs are so hard to kill: resistant to common pesticides, hide in tiny cracks, can survive months without feeding
- Professional treatment process: inspection → specialized spray → heat treatment → follow-up (2-3 sessions)
- DIY options and why they usually fail
- Hotel/travel prevention tips
- Cost: 300-800 SAR (depends on severity and sessions needed)
- FAQ: كيف اعرف ان عندي بق, هل البق ينتقل من شخص لآخر, اسباب ظهور البق
- Emotional tone: bed bugs are distressing — content should be reassuring and action-oriented

### Article 3: pigeon-guide.html (دليل طارد الحمام)
**Target:** شبك حمام (5K), تركيب طارد حمام (5K), طارد حمام (5K), تركيب طارد حمام بالرياض (500)
**Combined volume:** ~16,200/mo
**Content should include:**
- Why pigeons are a problem: droppings damage paint/surfaces, carry diseases, noise, clog drains
- Types of deterrents with pros/cons:
  - شوك ستانلس ستيل: 30-50 SAR/m, most common, visible but effective
  - أسلاك معدنية (wire system): 40-60 SAR/m, more aesthetic, good for ledges
  - شبك شفاف: 150-500 SAR/opening, full protection for balconies and windows
  - طارد كهربائي: 200-500 SAR, mild shock, for severe cases
  - أجهزة صوتية/الكترونية: 100-300 SAR, ultrasonic, less reliable
- Where to install: مكيفات, بلكونات, نوافذ, أسطح, حواف المبنى
- Price per meter comparison table
- Installation process and time
- What to clean before installation (pigeon droppings cleanup)
- Maintenance after installation
- FAQ: انواع طارد الحمام, سعر متر شبك حمام, اسعار طارد حمام

### Article 4: pest-prices.html (أسعار مكافحة الحشرات)
**Target:** اسعار مكافحة الحشرات (50), ارخص شركة مكافحة حشرات (500), كم سعر رش المبيدات
**Content should include:**
- Complete pricing tables by service:
  - رش مبيدات: شقة (200-400), فيلا (500-1,000), مجلس/استراحة (150-300)
  - مكافحة صراصير: 200-500 SAR
  - مكافحة نمل: 200-400 SAR
  - مكافحة بق الفراش: 300-800 SAR (2-3 sessions)
  - مكافحة فئران: 300-700 SAR
  - تركيب طارد حمام: 30-70 SAR/meter
  - تركيب شبك حمام: 150-500 SAR/opening
  - رش نمل أبيض (مبنى): 500-2,000 SAR
  - رش قبل البناء: 1,000-3,000 SAR
  - عقد سنوي: 1,500-4,000 SAR (4-6 visits)
  - رش مطعم/محل: 300-1,000 SAR + شهادة صحية
- City pricing comparison (Jeddah slightly higher)
- What affects pricing: مساحة, نوع الحشرات, شدة الإصابة, نوع المبيد
- Annual contract vs per-visit: cost comparison showing savings
- Commercial vs residential pricing
- How to evaluate quotes: what to ask, red flags
- FAQ: كم يستمر مفعول رش المبيدات, كم مرة يجب الرش

---

## Additional Article Opportunities (Phase 2)

### Article 5: termite-guide.html (دليل النمل الأبيض)
**Target:** علاج النمل الابيض (500), مكافحة نمل ابيض, الرمة في البيت, رش قبل البناء
**Volume:** ~8,600/mo combined
**Content:** Most destructive pest, signs of infestation (mud tubes, hollow wood), pre-construction treatment requirements, existing building treatment, cost (high-value content)

### Article 6: safety-guide.html (أمان رش المبيدات)
**Target:** هل رش المبيدات آمن, يضر الأطفال, يضر الحامل, يضر القطط, متى ادخل البيت بعد الرش, مبيدات عضوية
**Volume:** ~1,500/mo but extremely high trust-building value
**Content:** Safety protocols, when to leave house, organic options, pet safety, pregnant women precautions

### Article 7: pest-identification.html (تعريف الحشرات)
**Target:** حشرات صغيرة سوداء, حشرات بيضاء, حشرات بنية, حشرات تطير, دود, حشرة السمك الفضي, حشرات الرطوبة
**Volume:** ~3,000/mo
**Content:** Visual identification guide — "what is this bug?" with descriptions and CTAs. People photograph mystery insects and search.

---

## WhatsApp Integration

**Number:** +966555435986

**Pre-filled Messages:**
- General: "السلام عليكم، أحتاج مكافحة حشرات"
- Spraying: "السلام عليكم، أحتاج رش مبيدات للمنزل"
- Cockroach: "السلام عليكم، عندي مشكلة صراصير"
- Bed bug: "السلام عليكم، عندي مشكلة بق الفراش"
- Rats: "السلام عليكم، عندي مشكلة فئران"
- Pigeon: "السلام عليكم، أحتاج تركيب طارد حمام"
- Termite: "السلام عليكم، أحتاج رش نمل أبيض أو أرضة"
- Inquiry: "السلام عليكم، عندي استفسار عن خدمات مكافحة الحشرات"
- City-specific: "السلام عليكم، أحتاج مكافحة حشرات في [city]"

---

## Analytics

**GA4 Property:** G-FKGZLWWVJP
**Custom Events:** `whatsapp_click` with `event_category`, `event_label`, `page_title`

---

## Deployment

```bash
cd pest-site
firebase login
firebase init hosting    # New project: mubeed-site, public: ., SPA: No
firebase deploy
```

---

## Pricing Reference (Market Estimates 2026)

### Residential
| Service | Apartment | Villa |
|---------|-----------|-------|
| رش مبيدات شامل | 200-400 SAR | 500-1,000 SAR |
| مكافحة صراصير | 200-400 SAR | 300-500 SAR |
| مكافحة نمل | 200-300 SAR | 300-400 SAR |
| مكافحة بق الفراش | 300-600 SAR | 500-800 SAR |
| مكافحة فئران | 300-500 SAR | 400-700 SAR |

### Pigeon Control
| Type | Price |
|------|-------|
| شوك ستانلس ستيل | 30-50 SAR/meter |
| أسلاك معدنية | 40-60 SAR/meter |
| شبك شفاف (بلكونة) | 150-500 SAR/opening |
| طارد كهربائي | 200-500 SAR |

### Termite Treatment
| Service | Price |
|---------|-------|
| معالجة مبنى قائم | 500-2,000 SAR |
| رش قبل البناء (أساسات) | 1,000-3,000 SAR |
| رش دفان | 500-1,500 SAR |

### Commercial
| Service | Price |
|---------|-------|
| رش مطعم/محل (مع شهادة) | 300-1,000 SAR |
| عقد سنوي (4-6 زيارات) | 1,500-4,000 SAR |
| رش فندق | 1,000-5,000 SAR |
| رش مستودع | 500-2,000 SAR |

---

## Growth Roadmap

### Phase 1: Launch (Month 1-2)
- Fill 7 placeholder pages using Claude Code
- Priority: bedbug-guide.html first (17,900/mo — biggest article)
- Deploy to Firebase
- Submit to Search Console + Bing
- Time launch for pre-summer (April = pest season starts)

### Phase 2: City Expansion (Month 2-4)
- Add 5 more city pages: مكة, الطائف, الخبر, الأحساء, الجبيل (all 5K+ volume)
- Add القصيم page (500/mo but 66.60 SAR CPC — highest value per lead)
- Add المدينة page (500/mo, 34.72 CPC)
- Total: 10 city pages covering 90,000/mo in city-specific searches

### Phase 3: Content Expansion (Month 3-6)
- Add termite guide article (8,600/mo cluster)
- Add safety guide article (trust-building)
- Add pest identification guide (3,000/mo — "what bug is this?")
- Add commercial pest control page (restaurants, hotels, شهادة صحية)
- TikTok/Reels with before/after pest treatment videos

### Phase 4: Commercial B2B (Month 6+)
- Dedicated commercial services page targeting مطاعم, فنادق, مساجد, مستودعات
- Annual contract landing page (عقد مكافحة حشرات سنوي — 500/mo, 32 SAR CPC)
- Health certificate / شهادة صحية service page
- B2B leads are higher value — restaurants pay 300-1,000 SAR per visit

### Phase 5: Monetize
- Route leads to vetted pest control companies per city
- Premium lead fees during summer (peak pest season)
- Higher lead fees for: القصيم (66 SAR CPC), تبوك (48 SAR CPC), جدة (35 SAR CPC)
- Annual contract leads = recurring revenue for both the provider and you

---

## Comparison Across All Seven Sites

| Aspect | kashshaf | sibakah | takyeefna | **mubeed** | nsalleh | kahrabiyat | ajhizah |
|--------|---------|---------|-----------|------------|---------|------------|---------|
| Vertical | Water | Plumbing | Cooling | **Pest** | Appliances | Electrical | Tech |
| Volume | ~550K | ~256K | ~248K | **~192K** | ~171K | ~121K | ~99K |
| Top CPC | 55 | 30 | 24 | **67** | 19 | 52 | 22 |
| Avg CPC | ~15 | ~12 | ~10 | **~25** | ~8 | ~12 | ~5 |
| Color | Blue | Teal | Frost | **Crimson** | Purple | Amber | Emerald |
| GA4 | G-Y4MR28N87T | G-2DGZXY60Q0 | G-RP5SS1RVBS | **G-FKGZLWWVJP** | G-CT7WZ0320V | G-WR7HRW6KQK | G-6NGDNZ48LJ |
| Cities | 8 | 8 | 3 | **21 (8 priority)** | 3 | 3 | 3 |
| Seasonality | Low | Low | Very High | **High (summer)** | Low | Low | Low |
| Unique | NWC reports | Emergency drain | Freon/seasonal | **B2B + annual contracts** | TV guide | EV chargers | Gaming/3D |
| Articles | 5 ✅ | 4 ✅ | 4 placeholder | **4 placeholder** | 8 placeholder | 4 placeholder | 4 placeholder |

**Combined: ~1,636,400 monthly searches across 7 verticals, 103 files total.**

---

## File Modification Guide

### Changing Brand Name
"مبيد" / "مبي<span>د</span>" in all HTML files.

### Changing WhatsApp Number
`966555435986` in all wa.me links, footer, schema, llms.txt.

### Changing GA4 ID
`G-FKGZLWWVJP` in every HTML file head.

### Filling Article Content
1. Open article HTML
2. Replace placeholder section with full content
3. Follow content guidelines above
4. Keep existing article-cta div
5. For bedbug guide: empathetic tone, lots of identification detail, emphasis on professional treatment
6. For pigeon guide: comparison table of deterrent types with price per meter
7. For cockroach guide: bridge DIY products to professional service

### Adding City Pages
1. Copy existing city template
2. Write unique content (see City Differentiation table)
3. Add to sitemap.xml
4. Add city card to index.html
5. Update llms.txt
6. **Priority cities to add:** مكة, الطائف, الخبر, الأحساء, الجبيل, القصيم, المدينة
