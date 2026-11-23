export type TripCategory =
  | 'private-expedition'
  | 'cultural-immersion'
  | 'remote-sanctuary';

export type ServiceTier = 'standard' | 'private-luxury';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  contactEmail: string;
  location: string;
  navLinks: NavLinkItem[];
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  highlights: {
    label: string;
    value: string;
  }[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
}

export interface TripPackage {
  id: TripCategory;
  name: string;
  tagline: string;
  summary: string;
  baseDailyRate: number;
  minDays: number;
  maxDays: number;
  highlights: string[];
  itinerary: ItineraryDay[];
}

export interface CostEstimateSelection {
  category: TripCategory;
  packageName: string;
  travelers: number;
  days: number;
  serviceTier: ServiceTier;
  estimatedTotal: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  origin: string;
  tripTaken: string;
}

export interface InquiryPayload {
  full_name: string;
  email: string;
  package_type: string;
  days_count: number;
  service_tier: ServiceTier;
  travelers_count: number;
  estimated_total: number;
}