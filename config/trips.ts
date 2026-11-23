import { HeroContent, SiteConfig, TripPackage } from '@/types';

export const siteConfig: SiteConfig = {
  brandName: 'KORA',
  tagline: 'Private Journeys & Curated Expeditions',
  contactEmail: 'concierge@koratravel.com',
  location: 'Kyoto • Zurich • Patagonia',
  navLinks: [
    { label: 'Itineraries', href: '#itineraries' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Stories', href: '#stories' },
    { label: 'FAQ', href: '#faq' },
  ],
};

export const heroContent: HeroContent = {
  eyebrow: 'PRIVATE EXPEDITION CURATORS — EST. 2026',
  headline: 'Unscripted landscapes, tailored with quiet precision.',
  subheadline:
    'We design private, small-group journeys across remote alpine passes, heritage sanctuaries, and coastal frontiers—crafted around your pace, never a timetable.',
  primaryCtaLabel: 'Explore Itineraries',
  primaryCtaHref: '#itineraries',
  secondaryCtaLabel: 'Estimate Trip Cost',
  secondaryCtaHref: '#estimator',
  imageSrc: '/images/hero-landscape.jpg',
  imageAlt: 'High-contrast monochrome mountain ridge shrouded in mist',
  imageCaption: 'PLATE 01 — NORTHERN RIDGE EXPEDITION, 06:40 LOCAL TIME',
  highlights: [
    { label: 'GROUP SIZE', value: 'Max 6 Guests' },
    { label: 'PLANNING', value: '100% Bespoke' },
    { label: 'CONCIERGE', value: '24/7 Field Support' },
  ],
};

export const tripPackages: TripPackage[] = [
  {
    id: 'private-expedition',
    name: 'Private Expedition',
    tagline: 'High-altitude traverses and uncharted backcountry routes.',
    summary:
      'Led by certified mountain guides with private helicopter transfers, heated basecamps, and custom acclimatization schedules.',
    baseDailyRate: 650,
    minDays: 4,
    maxDays: 14,
    highlights: [
      'Dedicated UIAGM-certified alpine guide & field medic',
      'Private 4x4 overland and rotary-wing transfers',
      'Custom cold-weather expedition kit prepared on arrival',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Gear Briefing',
        location: 'Base Valley Terminal',
        description:
          'Private tarmac transfer to the lodge, equipment fitting with your lead guide, and topographic route calibration.',
      },
      {
        day: 2,
        title: 'Glacial Moraine Ascent',
        location: 'North Ridge Camp',
        description:
          'Full-day traverse across ancient moraine ridges with private telemetry support and warm camp setup.',
      },
      {
        day: 3,
        title: 'High Pass Crossing',
        location: '3,400m Saddle',
        description:
          'Early alpine start to cross the granite pass before noon winds, descending into an uninhabited glacial basin.',
      },
      {
        day: 4,
        title: 'Heli-Extraction & Recovery',
        location: 'Southern Fjord',
        description:
          'Morning ridge walk followed by direct helicopter extraction to a private coastal sauna and farewell dinner.',
      },
    ],
  },
  {
    id: 'cultural-immersion',
    name: 'Cultural Immersion',
    tagline: 'After-hours access to living heritage and master artisans.',
    summary:
      'Step behind closed temple gates, private architectural archives, and family-run workshops rarely open to outside visitors.',
    baseDailyRate: 520,
    minDays: 3,
    maxDays: 10,
    highlights: [
      'Private after-hours entry to historic sanctuaries',
      'Bespoke sessions with master ceramicists and architects',
      'Curated regional dining in private heritage residences',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Architectural Orientation',
        location: 'Old Quarter',
        description:
          'Walking study of timber joinery and courtyard proportions led by a local conservation architect.',
      },
      {
        day: 2,
        title: 'Dawn Sanctuary Access',
        location: 'Hillside Monastery',
        description:
          'Pre-opening entry for morning chanting, private garden viewing, and tea ceremony with the head abbot.',
      },
      {
        day: 3,
        title: 'Kiln & Foundry Workshop',
        location: 'Artisan District',
        description:
          'Hands-on afternoon inside a fourth-generation kiln studio, followed by an unlisted kaiseki tasting.',
      },
      {
        day: 4,
        title: 'Private Archive & Departure',
        location: 'Museum Vaults',
        description:
          'Curator-guided viewing of woodblock manuscripts before private rail transfer to your onward hub.',
      },
    ],
  },
  {
    id: 'remote-sanctuary',
    name: 'Remote Sanctuary',
    tagline: 'Architectural solitude in off-grid coastal and forest retreats.',
    summary:
      'Designed for deep restoration in minimalist residences accessible only by private boat, floatplane, or unmarked forest tracks.',
    baseDailyRate: 780,
    minDays: 5,
    maxDays: 12,
    highlights: [
      'Exclusive buyout of off-grid architectural cabins',
      'Private chef sourcing daily from local fishermen and foragers',
      'Unscheduled days with optional guided foraging and sea kayaking',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Harbor Crossing',
        location: 'Outer Archipelago',
        description:
          'Private vessel crossing through mist-covered islets to your cliffside timber sanctuary.',
      },
      {
        day: 2,
        title: 'Coastal Foraging & Thermal Bath',
        location: 'West Cove',
        description:
          'Morning shoreline walk with a marine botanist, afternoon wood-fired cedar sauna overlooking the tide.',
      },
      {
        day: 3,
        title: 'Silent Fjords Expedition',
        location: 'Mirror Sound',
        description:
          'Guided sea-kayak drift through calm granite channels with zero motorized boat traffic.',
      },
      {
        day: 4,
        title: 'Stillness & Celestial Observation',
        location: 'Observatory Deck',
        description:
          'Unstructured reading and rest day culminating in dark-sky astronomy with a resident astronomer.',
      },
    ],
  },
];