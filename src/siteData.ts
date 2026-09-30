export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  headline: string;
  subtext: string;
  location: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  metrics: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  experience: string;
  rating?: number;
  image: string;
  specialty: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  desc: string;
  details: string;
  duration: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Off-Grid';
  capacity: string;
  location: string;
  savings: string;
  image: string;
  summary: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  systemSize: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const siteData = {
  company: {
    name: 'Solara',
    legalName: 'Solara Energy Systems India Pvt. Ltd.',
    tagline: 'Powering India with Clean Solar Energy',
    establishedYear: '2016',
    phone: '+91 98201 44552',
    tollFree: '1800 209 8899',
    email: 'contact@solaraenergy.in',
    headquarters: 'Solara Tower, Tech Park, Baner Road, Pune, Maharashtra 411045',
    hours: 'Mon - Sat: 9:00 AM – 7:30 PM IST',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
    },
  },

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],

  hero: {
    headline: 'CLEAN SOLAR POWER.',
    subtext: 'High-efficiency solar & battery systems engineered for 25+ years of savings across India.',
    pillTags: [
      'Rooftop Solar',
      'PM Surya Ghar Subsidy',
      'DISCOM Net Metering',
    ],
    slides: [
      {
        id: 1,
        image: 'https://i.postimg.cc/P5Rp3M8F/image.png',
        badge: 'Residential Solar',
        headline: 'CLEAN SOLAR POWER.',
        subtext: 'High-efficiency solar & battery systems engineered for 25+ years of savings across India.',
        location: '14.8 kW Rooftop Array · Pune, MH',
      },
      {
        id: 2,
        image: '/images/solar-commercial-1.jpg',
        badge: 'Commercial Systems',
        headline: 'COMMERCIAL MICROGRIDS.',
        subtext: 'Tier-1 rooftop installations slashing corporate and industrial power bills up to 80%.',
        location: '150 kW Industrial Grid · Sanand, Gujarat',
      },
      {
        id: 3,
        image: '/images/solar-battery-1.jpg',
        badge: 'Battery Storage',
        headline: '24/7 BATTERY BACKUP.',
        subtext: 'Intelligent lithium battery systems for round-the-clock power independence during grid cuts.',
        location: '30 kWh PowerBank · Bengaluru, KA',
      },
      {
        id: 4,
        image: '/images/solar-ground-1.jpg',
        badge: 'Turnkey Ground Mounts',
        headline: 'TURNKEY SOLAR ARRAYS.',
        subtext: 'High-yield bifacial installations delivered with complete DISCOM approvals & MNRE subsidy.',
        location: '2.5 MW Solar Park · Rajasthan',
      },
      {
        id: 5,
        image: '/images/solar-home-1.jpg',
        badge: 'Smart Telemetry',
        headline: 'SMART ENERGY TELEMETRY.',
        subtext: 'Module-level monitoring ensuring peak power production and live rupee savings every day.',
        location: 'Real-Time Solar Telemetry · Mumbai, MH',
      },
    ] as HeroSlide[],
    featuredLeadEngineer: {
      name: 'Er. Rajesh Patil',
      title: 'Lead Solar Engineer',
      experience: '12 years Experience (4.9 Rating)',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      badge: 'MNRE Certified',
    },
  },

  featuresSection: {
    eyebrow: 'Our Features /',
    headline: 'DISCOVER OUR SOLAR SOLUTIONS',
    supportingParagraph:
      'From DISCOM net metering approvals to Tier-1 ALMM installation and live telemetry, we deliver reliable solar systems engineered for maximum output.',
    socialProof: {
      installationsCount: '1,200+',
      installationsLabel: 'Installations Completed',
      blurb:
        'See how Indian homeowners and businesses are cutting their electricity bills to near zero with Solara.',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      ],
    },
    serviceCards: [
      {
        id: 'solar-install',
        title: 'Solar Panel Installation',
        shortDesc: 'Turnkey residential and commercial rooftop solar installation with PM Surya Ghar subsidy assistance.',
        fullDesc:
          'Precision roof mounting using aerospace-grade aluminum clamps, non-penetrating seam anchors, and tier-1 monocrystalline panels producing up to 22.8% cell efficiency.',
        image: '/images/solar-residential-1.jpg',
        features: ['Bifacial high-efficiency ALMM panels', 'Non-invasive roof mounting & elevated structures', 'Quick 48-hour physical install', '25-Year performance warranty'],
        metrics: 'Up to 90% Bill Reduction',
      },
      {
        id: 'battery-storage',
        title: 'Battery Storage Systems',
        shortDesc: 'Reliable LiFePO4 home battery backup ensuring uninterrupted power day and night.',
        fullDesc:
          'Seamless hybrid inverters paired with safe lithium-iron-phosphate battery storage that charge during low-cost solar hours and power your critical circuits during grid power cuts.',
        image: '/images/solar-battery-1.jpg',
        features: ['Instant microsecond cutover', 'Modular capacity 5–30 kWh', 'Runs ACs, pumps, and refrigerators', '10-Year unmetered warranty'],
        metrics: '24/7 Grid Independence',
      },
      {
        id: 'maintenance-monitoring',
        title: 'Solar Maintenance & Monitoring',
        shortDesc: 'Real-time telemetry, robotic thermal scans, and proactive on-site service.',
        fullDesc:
          'Comprehensive module diagnostics, thermal infrared drone scans to pinpoint micro-cracks, scheduled robotic panel washing, and rapid response technician dispatch.',
        image: '/images/solar-maintenance-1.jpg',
        features: ['Live cloud production app in ₹ savings', 'Annual infrared inspections', 'Automated fault notifications', 'Guaranteed 99.2% uptime SLA'],
        metrics: '99.2% System Availability',
      },
      {
        id: 'commercial-microgrids',
        title: 'Commercial Microgrids & Carports',
        shortDesc: 'High-yield commercial solar canopies with integrated EV fast-charging stations.',
        fullDesc:
          'Dual-purpose solar carports protecting fleet vehicles while generating megawatt-hours for corporate facilities and factories with smart demand-charge controllers.',
        image: '/images/solar-carport-1.jpg',
        features: ['Dual EV fast-charge tie-in', 'Structural galvanized steel canopies', 'Accelerated depreciation tax benefits (Section 32)', 'Sub-metered billing capability'],
        metrics: 'Sub-3.5 Year Payback',
      },
      {
        id: 'off-grid-systems',
        title: 'Off-Grid & Remote Power Systems',
        shortDesc: 'Self-sufficient solar generator packages for farmhouses, agro-pumps, and remote sites.',
        fullDesc:
          'Autonomous solar arrays engineered for extreme weather with dual-redundant inverters and smart diesel generator sync for 100% remote continuity.',
        image: '/images/solar-offgrid-1.jpg',
        features: ['100% independent off-grid', 'Solar water pump integration', 'Satellite telemetry link', 'Heavy-duty surge suppressors'],
        metrics: 'Zero Grid Connection Required',
      },
    ] as ServiceCard[],
  },

  aboutSection: {
    eyebrow: 'About Solara /',
    headline: 'TRUSTED SOLAR EXPERTS DELIVERING LASTING SAVINGS',
    paragraph:
      'We design, install, and maintain solar systems built to perform for 25+ years — backed by transparent pricing, tier-1 engineering standards, and dedicated after-sales support across India.',
    mainImage: '/images/solar-ground-1.jpg',
    stats: [
      { value: '99%', label: 'System Uptime', description: 'Industry-leading SLA backed by real-time IoT monitors' },
      { value: '75MW+', label: 'Energy Installed', description: 'Over 75 megawatts of clean solar capacity commissioned across India' },
      { value: '4.9★', label: 'Customer Rating', description: 'Verified satisfaction across residential and commercial clients' },
    ] as StatItem[],
    teamMembers: [
      {
        name: 'Er. Aditi Kulkarni',
        title: 'Chief Design Engineer',
        experience: '8+ Years in Photovoltaic CAD & Shadow Simulation',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        specialty: 'Rooftop 3D Laser Modeling',
      },
      {
        name: 'Er. Sanjay More',
        title: 'Head of Grid Approvals',
        experience: '14+ Years in Electrical Infrastructure & DISCOM Interconnection',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
        specialty: 'DISCOM Net Metering & CEIG Clearance',
      },
    ] as TeamMember[],
  },

  howItWorks: [
    {
      stepNumber: '01',
      title: 'Free Site Survey & Shadow Analysis',
      desc: 'Our certified engineers conduct satellite roof analysis, 3D sun-path simulation, and structural integrity audits at zero cost to you.',
      details: 'We evaluate roof tilt, shade factors, azimuth, and sanction load to calculate exact annual solar generation potential.',
      duration: 'Day 1–2',
    },
    {
      stepNumber: '02',
      title: 'Engineering & DISCOM Approvals',
      desc: 'We draft CAD electrical layouts, select optimal microinverters or string units, and manage 100% of DISCOM and CEIG approvals.',
      details: 'All paperwork for net metering interconnection agreements and PM Surya Ghar government subsidy schemes is prepared and filed on your behalf.',
      duration: 'Day 3–10',
    },
    {
      stepNumber: '03',
      title: 'Certified Rapid Installation',
      desc: 'Our in-house master electricians and certified technicians mount the racking, ALMM panels, and inverter in typically just 24–48 hours.',
      details: 'We treat your roof with watertight flashings and test every circuit with high-voltage insulation tests before final DISCOM net meter synchronization.',
      duration: 'Day 11–14',
    },
    {
      stepNumber: '04',
      title: 'Turnkey Net Metering & Telemetry',
      desc: 'DISCOM bi-directional net meter is energized, subsidies are triggered to your bank account, and your phone connects to our live solar tracking app.',
      details: 'Receive monthly production reports and enjoy peace of mind with our 25-year all-inclusive equipment and linear performance warranty.',
      duration: 'Day 15 onwards',
    },
  ] as ProcessStep[],

  savingsCalculator: {
    title: 'Calculate How Much You Can Save With Solar',
    subtitle: 'Enter your average monthly electricity bill to calculate 25-year estimated savings in Rupees, panel count, and environmental offset.',
    defaultMonthlyBill: 4500,
    minBill: 1500,
    maxBill: 50000,
    rates: {
      averageCostPerKWh: 8.5, // ₹8.5 per unit (typical Indian tariff)
      annualUtilityInflation: 0.05, // 5% annual DISCOM tariff escalation
      solarOffsetPercentage: 0.92, // 92% offset
      co2KgPerKwh: 0.82,
    },
  },

  projects: [
    {
      id: 'proj-1',
      title: 'Gulmohar Luxury Villa',
      category: 'Residential',
      capacity: '12.4 kW',
      location: 'Baner, Pune, MH',
      savings: '₹1,85,000 / yr Saved',
      image: '/images/solar-residential-1.jpg',
      summary: '30 all-black monocrystalline bifacial panels flush-mounted on RCC terrace with elevated superstructure and net metering.',
    },
    {
      id: 'proj-2',
      title: 'Balaji Agro Cold Storage & Logistics',
      category: 'Commercial',
      capacity: '185 kW',
      location: 'MIDC Ambad, Nashik',
      savings: '₹24,50,000 / yr Saved',
      image: '/images/solar-commercial-1.jpg',
      summary: 'High-tensile industrial rooftop system powering deep-freeze units with automated peak-demand shaving.',
    },
    {
      id: 'proj-3',
      title: 'Suryam Organic Farms & Processing',
      category: 'Commercial',
      capacity: '65 kW',
      location: 'Anand, Gujarat',
      savings: '₹8,90,000 / yr Saved',
      image: '/images/solar-ground-1.jpg',
      summary: 'Ground-mount solar array powering agricultural drip-irrigation pumps and climate-controlled packaging cellars.',
    },
    {
      id: 'proj-4',
      title: 'Prestige Tech Campus Solar Canopy',
      category: 'Industrial',
      capacity: '320 kW',
      location: 'Whitefield, Bengaluru',
      savings: '₹46,20,000 / yr Saved',
      image: '/images/solar-carport-1.jpg',
      summary: 'Architectural solar canopy covering 160 parking bays with 24 Level-2 and 4 DC Fast EV charging stations.',
    },
    {
      id: 'proj-5',
      title: 'Sahyadri Eco-Resort & Spa',
      category: 'Off-Grid',
      capacity: '15 kW',
      location: 'Mahabaleshwar, MH',
      savings: '100% Diesel Free',
      image: '/images/solar-offgrid-1.jpg',
      summary: 'Completely off-grid solar system paired with a 35 kWh lithium battery bank operating reliably through misty monsoon months.',
    },
    {
      id: 'proj-6',
      title: 'Shantiniketan Cooperative Housing Society',
      category: 'Residential',
      capacity: '45 kW',
      location: 'Andheri West, Mumbai',
      savings: '₹6,40,000 / yr Saved',
      image: '/images/solar-home-1.jpg',
      summary: 'Common area lighting, water pumps, and high-speed elevators powered by rooftop solar under PM Surya Ghar society scheme.',
    },
  ] as ProjectItem[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Arvind & Priya Kulkarni',
      role: 'Homeowners',
      location: 'Baner, Pune, MH',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      systemSize: '10 kW Rooftop + Net Metering',
      quote:
        'Our monthly MSEDCL electricity bill crashed from ₹8,500 down to just the ₹180 fixed grid charge! The Solara team got our PM Surya Ghar subsidy of ₹78,000 approved and credited directly to our bank account in 28 days. Seamless installation with zero rooftop leakage during heavy monsoon rains.',
    },
    {
      id: 'test-2',
      name: 'Rajesh Singhania',
      role: 'Managing Director, Singhania Polymer Works',
      location: 'Sanand GIDC, Ahmedabad',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      systemSize: '180 kW Industrial Rooftop Array',
      quote:
        'Our manufacturing plant commercial tariff was touching ₹11.50 per unit. Solara engineered a customized 180 kW solar rooftop that slashed our monthly bill by nearly ₹2.2 Lakhs. The DISCOM net metering inspection was cleared smoothly on the first go.',
    },
    {
      id: 'test-3',
      name: 'Dr. Ananya Sundaram',
      role: 'Architect & Villa Owner',
      location: 'Whitefield, Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      systemSize: '12.5 kW Hybrid Solar with LiFePO4 Storage',
      quote:
        'Frequent BESCOM power cuts during summer were frustrating. With Solara hybrid lithium storage, our lights, computers, and 2 air conditioners run non-stop. The Solara mobile app lets me see live solar generation in Rupees saved every single day.',
    },
  ] as Testimonial[],

  faqs: [
    {
      id: 'faq-1',
      category: 'Financing & Subsidies',
      question: 'How does the PM Surya Ghar: Muft Bijli Yojana subsidy work in India?',
      answer:
        'Under the central government PM Surya Ghar Muft Bijli Yojana, residential consumers receive direct bank transfer (DBT) subsidies: ₹30,000 for 1 kW systems, ₹60,000 for 2 kW systems, and up to ₹78,000 for 3 kW and higher systems. Solara handles 100% of the portal registration, DISCOM feasibility clearance, and subsidy claim paperwork for you.',
    },
    {
      id: 'faq-2',
      category: 'Net Metering & Bills',
      question: 'How does DISCOM Net Metering reduce electricity bills?',
      answer:
        'Through bi-directional Net Metering approved by your state electricity board (e.g. MSEDCL, BESCOM, Tata Power, Adani, Torrent, BSES), any surplus electricity generated during peak sunny daytime is exported to the grid. At night, you draw power from the grid. At the end of the billing cycle, you only pay for the net units consumed, saving up to 90% on electricity costs.',
    },
    {
      id: 'faq-3',
      category: 'Technology & Storage',
      question: 'How does the system perform during monsoon and cloudy days?',
      answer:
        'Modern Tier-1 monocrystalline bifacial panels generate electricity even in cloudy or rainy weather using diffused daylight (typically 25% to 45% of peak generation). For areas with frequent load shedding, our hybrid solar systems include lithium-ferro-phosphate (LiFePO4) battery backup that provides instant power cutover within 10 milliseconds.',
    },
    {
      id: 'faq-4',
      category: 'Warranty & Durability',
      question: 'What warranties are provided on panels and inverters?',
      answer:
        'Every Solara installation includes an industry-leading Triple-Layer Warranty: (1) 25-Year Linear Power Performance Warranty guaranteeing at least 84.8% output at year 25; (2) 10-Year Comprehensive Product Warranty on ALMM-approved panels; (3) 8- to 10-Year Warranty on inverters. All mounting hardware uses rust-proof anodized aluminium and hot-dip galvanized steel rated for 150 km/h wind gusts.',
    },
    {
      id: 'faq-5',
      category: 'Roof & Structure',
      question: 'Can solar panels be installed on RCC terrace slabs without losing terrace space?',
      answer:
        'Yes! We provide elevated solar superstructures (raised 7 to 9 feet above roof level) that preserve your entire terrace floor for walking, gardening, or recreation, while creating shade underneath and keeping top-floor rooms significantly cooler during hot Indian summers.',
    },
  ] as FAQItem[],
};
