import { SpainHighlight, ScheduleItem, FaqItem } from './types';

// Direct ES Module imports so Vite resolves asset paths reliably
import heroImg from './assets/images/hero_mediterranean_coast_1785648984495.jpg';
import villageImg from './assets/images/mediterranean_village_alley_1785648999408.jpg';
import coveImg from './assets/images/spanish_family_cove_1785649010211.jpg';
import tapasImg from './assets/images/mediterranean_tapas_table_1785649021492.jpg';
import sailingImg from './assets/images/sailing_mediterranean_sea_1785649032553.jpg';
import cityImg from './assets/images/palma_city_hero_1785622886903.jpg';

// Curated high-resolution Unsplash Mediterranean fallbacks in case of image load errors
export const FALLBACK_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
  village: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
  cove: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop',
  sailing: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  tapasTable: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop',
  palmaOldTown: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
};

export const IMAGES = {
  hero: heroImg,
  village: villageImg,
  cove: coveImg,
  sailing: sailingImg,
  sollerTrain: villageImg,
  palmaOldTown: cityImg,
  tapasTable: tapasImg,
  golfTennis: sailingImg,
};

// Brand Colors from "colores mediterraneos" palette
export const BRAND_COLORS = {
  tealDark: '#016278',     // Deep Teal Green
  tealMedium: '#02858D',   // Medium Teal Green
  tealVivid: '#00A692',    // Vivid Turquoise / Emerald
  greenPalm: '#64BA88',    // Palm Green
  terracotta: '#D97757',   // Warm Terracotta / Coral Accent
  oliveOlive: '#5A5A40',   // Warm Olive / Sage Neutral
  sandCanvas: '#FDFBF7',   // Light Warm Cream Background
  sandCard: '#F5F0E6',     // Card Accent
  tealLight: '#D2EFEC',    // Soft Light Teal
  darkCanvas: '#016278',   // Dark section background
};

export const SPAIN_HIGHLIGHTS: SpainHighlight[] = [
  {
    id: 'slow-life',
    name: 'Slow-Paced Life',
    region: 'Lifestyle & Well-being',
    description: 'A relaxed, balanced pace of living where stress dissolves, meals are savored, and families connect without rushing.',
    highlight: 'Unhurried morning coffee and long lunches under the sun.',
    image: IMAGES.village,
  },
  {
    id: 'sunshine',
    name: '12 Hours of Sunshine',
    region: 'Weather & Climate',
    description: 'Endless blue skies and sunny days, offering guaranteed outdoor warm Mediterranean days.',
    highlight: 'Reliable warm weather for daily sea dips and park visits.',
    image: IMAGES.cove,
  },
  {
    id: 'food-scene',
    name: 'Incredible Food Scene',
    region: 'Gastronomy & Tapas',
    description: 'World-renowned culinary traditions from fresh seafood to vibrant farmers market produce and authentic local tavernas.',
    highlight: 'Fresh evening tapas and artisan gelato in animated plazas.',
    image: IMAGES.tapasTable,
  },
  {
    id: 'culture',
    name: 'Vibrant Culture',
    region: 'Heritage & Community',
    description: 'Historic architecture, warm welcoming locals, colorful summer festivals, and a deeply family-friendly atmosphere.',
    highlight: 'Historic cobblestone streets and lively evening town squares.',
    image: IMAGES.palmaOldTown,
  },
  {
    id: 'active-sports',
    name: 'Sports, Clubs & Adventures',
    region: 'Outdoors & Recreation',
    description: 'Surrounding beaches, top-tier tennis & golf facilities close by, scenic mountain hikes, and relaxed beach clubs.',
    highlight: 'Morning tennis or golf rounds followed by beach club afternoons.',
    image: IMAGES.sailing,
  },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: '08:30 AM',
    title: 'Morning Beach & Local Cafe Stroll',
    forWho: 'Family',
    description: 'Start the day at a slow pace with a gentle beach walk, spending time in lush parks, and fresh espresso at a neighborhood cafe.',
    iconName: 'Sun',
  },
  {
    time: '09:30 AM - 01:00 PM',
    title: 'Farmers Markets & Parks Discovery',
    forWho: 'Family',
    description: 'Browse vibrant local farmers markets for fresh fruit and pastries, followed by playground time with the kids.',
    iconName: 'Compass',
  },
  {
    time: '01:00 PM - 02:30 PM',
    title: 'Long Spanish Lunch & Relaxation',
    forWho: 'Family',
    description: 'Gather under shaded terraces for a relaxed Mediterranean meal, fresh seafood, and peaceful afternoon downtime.',
    iconName: 'Utensils',
  },
  {
    time: '02:30 PM - 06:30 PM',
    title: 'Co-Working Hours & Kids Enrichment',
    forWho: 'Parents',
    description: 'Parents connect to fast Wi-Fi for US timezone calls while kids enjoy supervised sports, arts, and swimming.',
    iconName: 'Laptop',
  },
  {
    time: '~09:00 PM',
    title: 'Kids Pickup & Walk to Local Tapas',
    forWho: 'Family',
    description: 'After picking up the kids, stroll down pedestrian lanes to a local restaurant for tapas dinner and artisan gelato.',
    iconName: 'Sparkles',
  },
  {
    time: 'Weekends',
    title: 'Exploring Beaches, Hikes, Tennis & Golf',
    forWho: 'Family',
    description: 'Weekends are for discovering surrounding beaches, coastal hikes, sports with tennis and golf facilities close by, and beach clubs.',
    iconName: 'Clock',
  },
];

export const INCLUDED_SERVICES = [
  {
    title: "Kids' summer program adapted to US working hours",
    description: "Curated local sports, marine activities, and language modules timed so parents can comfortably manage US timezone hours.",
  },
  {
    title: "Curated family-friendly accommodation options",
    description: "A curated list of family-friendly boutique apartments with fast Wi-Fi, air conditioning, full kitchens, and child-safe spaces in prime locations.",
  },
  {
    title: "Local support before and during your stay",
    description: "Dedicated bilingual local concierge team handling doctor visits, rentals, reservations, and everyday advice.",
  },
  {
    title: "Authentic Spanish cultural experiences for the family",
    description: "Private coastal boat excursions, olive oil tastings, farm visits, ceramic workshops, and secret cove expeditions.",
  },
  {
    title: "Adults-only social evenings",
    description: "Sunset wine pairings and quiet beach sessions while trusted local caregivers look after children.",
  },
  {
    title: "A community of like-minded international families",
    description: "Small group cohort of remote-working families who value culture, slow living, and shared adventures.",
  },
  {
    title: "Babysitting and trusted local services",
    description: "Vetted English & Spanish speaking sitters, grocery stocking before arrival, and airport transfers.",
  },
  {
    title: "Our curated insider guide to the region we love",
    description: "Hand-picked local spots away from tourist crowds—where to buy hot bread, secluded beaches, top tennis courts, and authentic tavernas.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is A Local Summer?",
    answer: "A Local Summer is a boutique summer program designed for remote-working families who want to spend an extended period living in Spain. Parents maintain their US work schedules while children participate in local afternoon summer programming, leaving mornings and weekends for families to experience Spain together.",
    category: "Program",
  },
  {
    question: "How do the US working hours work while in Spain?",
    answer: "Spain is 6 hours ahead of US Eastern Time (9 hours ahead of Pacific Time). This means 9:00 AM in New York is 3:00 PM in Spain. Parents can spend mornings exploring beaches, parks, and cafes with family, then dedicate afternoon/evening hours to quiet US work calls while kids are in afternoon activities or supervised care.",
    category: "Work & Tech",
  },
{
    question: "How do the US working hours work while in Spain?",
    answer: "Spain is 6 hours ahead of US Eastern Time (9 hours ahead of Pacific Time). This means 9:00 AM in New York is 3:00 PM in Spain. Parents can spend mornings exploring beaches, parks, and cafes with family, then dedicate afternoon/evening hours to quiet US work calls while kids are in afternoon activities or supervised care.",
    category: "Work & Tech",
  },
  {
    question: "What ages are eligible for the children's summer program?",
    answer: "Children of all ages are welcome. Camp activities and groups will be organized by age, focusing on sports, local arts, Spanish immersion, and outdoor exploration.",
    category: "Program",
  },
  {
    question: "What type of accommodation options will be available?",
    answer: "We offer a curated list of vetted boutique apartments and central family residences equipped with fast Wi-Fi, air conditioning, fully equipped kitchens, and central access to both the kids' program center and local amenities.",
    category: "Housing",
  },
  {
    question: "Is this a tour group or resort package?",
    answer: "Neither! Local Summer provides the ideal infrastructure (vetted housing, child enrichment program, fast Wi-Fi, local concierge, and cohort community) so your family can live authentically in Spain with complete freedom and no tourist stress.",
    category: "Logistics",
  },
  {
    question: "What are the exact dates for Summer 2027?",
    answer: "We are planning for mid-June to mid-July, but final dates will be confirmed. Waitlist members will receive priority date selection and early notification as soon as official dates are locked in.",
    category: "Program",
  },
];

