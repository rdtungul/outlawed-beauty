export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? '#'

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'color',
    title: 'Hair Coloring',
    description: 'Full color, highlights, balayage, and color corrections. Customized to complement your skin tone and lifestyle.',
    price: 'Starting at $120',
    icon: 'Palette',
  },
  {
    id: 'cut',
    title: 'Cuts & Styling',
    description: 'Precision cuts, blowouts, and special occasion styling. Every cut is tailored to your face shape and texture.',
    price: 'Starting at $65',
    icon: 'Scissors',
  },
  {
    id: 'treatment',
    title: 'Treatments',
    description: 'Keratin smoothing, deep conditioning, and scalp treatments. Restore strength, shine, and health to your hair.',
    price: 'Starting at $95',
    icon: 'Sparkles',
  },
  {
    id: 'balayage',
    title: 'Balayage',
    description: 'Hand-painted highlights for a natural, sun-kissed look. Low-maintenance color that grows out beautifully.',
    price: 'Starting at $150',
    icon: 'Brush',
  },
  {
    id: 'gloss',
    title: 'Gloss & Toning',
    description: 'Refresh your color, enhance shine, and neutralize unwanted tones. A fast, transformative treatment.',
    price: 'Starting at $55',
    icon: 'Droplets',
  },
  {
    id: 'extensions',
    title: 'Extensions',
    description: 'Tape-in, hand-tied, and clip-in extensions. Add length, volume, and dimension naturally.',
    price: 'Starting at $300',
    icon: 'Wind',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Jasmine R.',
    service: 'Balayage',
    quote: "I've been going to salons for 15 years and this was hands-down the best color experience I've ever had. My hair looks exactly how I imagined — natural and effortless.",
    rating: 5,
  },
  {
    name: 'Mia T.',
    service: 'Keratin Treatment',
    quote: "My curls were out of control and now I have the smoothest, healthiest hair. The whole experience felt luxurious. I'll never go anywhere else.",
    rating: 5,
  },
  {
    name: 'Destiny L.',
    service: 'Cut & Style',
    quote: "She listened to exactly what I wanted and executed it perfectly. The atmosphere is intimate and the quality is unmatched. Highly recommend.",
    rating: 5,
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Book Online',
    description: 'Choose your service and preferred time online. Available 24/7 — no phone calls needed.',
  },
  {
    step: '02',
    title: 'Consultation',
    description: 'Every appointment starts with a thorough consultation to understand your hair goals and create a custom plan.',
  },
  {
    step: '03',
    title: 'Transform',
    description: "Sit back and relax while your hair is transformed. Leave with a look you'll love and the knowledge to maintain it.",
  },
]
