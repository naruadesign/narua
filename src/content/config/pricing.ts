export interface PricingTier {
  name: string
  price: number
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
    price: 0,
    period: 'forever',
    description: 'Perfect for trying out Narua',
    features: ['Up to 3 projects', 'Basic analytics', 'Community support'],
    cta: 'Get started free',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 49,
    period: 'month',
    description: 'For growing teams',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'],
    cta: 'Start free trial',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For large organizations',
    features: ['Everything in Pro', 'SSO / SAML', 'Dedicated account manager', 'SLA guarantee'],
    cta: 'Contact sales',
    href: '/contact',
    highlighted: false,
  },
]
