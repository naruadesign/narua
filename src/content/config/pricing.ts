export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '0',
    period: 'forever',
    description: 'Perfect for trying out Narua',
    features: ['1 Project', '1 Week', 'Basic analytics', 'Proof of Concepts', 'Community support'],
    cta: 'Get started free',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '1.9k',
    period: 'month',
    description: 'For growing teams',
    features: ['One request at a time', 'Up to 5 projects', 'Avg. 48 hour delivery', 'Up to 5 brands', 'Up to 2 users', 'Pause or cancel anytime'],
    cta: 'Start free trial',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '4.9k',
    period: 'month',
    description: 'For large organizations',
    features: ['Everything in Pro', 'Unlimited projects', 'Webflow development', 'Dedicated account manager', 'Unlimited stock photos'],
    cta: 'Contact sales',
    href: '/contact',
    highlighted: false,
  },
]
