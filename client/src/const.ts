export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Company Information
export const COMPANY_NAME = "Wale Awojobi Associates";
export const COMPANY_TAGLINE = "Your Trusted Estate Surveyors and Valuation Professionals.";
export const COMPANY_ADDRESS = "58 Accra Street, Zone 5, Wuse Abuja, Nigeria";
export const COMPANY_PHONE = ["07788249154", "08078697158"];
export const COMPANY_EMAIL = "waleawojobi@gmail.com";
export const COMPANY_WEBSITE = "https://waleawojobiassociates.com.ng";
export const WHATSAPP_NUMBER = "08078697158";

// Navigation Items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// Statistics
export const COMPANY_STATS = [
  { number: "100+", label: "Happy Clients" },
  { number: "50+", label: "5-Star Reviews" },
  { number: "200+", label: "Successful Sales" },
  { number: "10+", label: "Years of Experience" },
];

// Team Members
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Wale Awojobi",
    title: "Principal Partner",
    credentials: "RSV, ANIVS",
    bio: "Experienced estate surveyor and valuation professional with over 10 years in the industry.",
    image: "/team/wale-awojobi.jpg",
  },
  {
    id: 2,
    name: "Adebayo Okafor",
    title: "Estate Surveyor and Valuer",
    credentials: "ESV",
    bio: "Specialist in property valuation and market analysis with extensive portfolio.",
    image: "/team/adebayo-okafor.jpg",
  },
  {
    id: 3,
    name: "Chioma Nwankwo",
    title: "Accountant",
    credentials: "ACA",
    bio: "Financial management expert ensuring transparent and accurate transactions.",
    image: "/team/chioma-nwankwo.jpg",
  },
  {
    id: 4,
    name: "Emeka Okonkwo",
    title: "ICT Consultant",
    credentials: "BSc",
    bio: "Technology specialist managing digital solutions and client platforms.",
    image: "/team/emeka-okonkwo.jpg",
  },
];

// Property Types
export const PROPERTY_TYPES = [
  "All",
  "Apartments",
  "Houses",
  "Land",
  "Offices",
  "Industrial",
];

// Regions
export const REGIONS = [
  "All",
  "Abuja",
  "Lagos",
  "Port Harcourt",
  "Kano",
  "Ibadan",
];

// Price Ranges
export const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "NGN 0 - 1M", min: 0, max: 1000000 },
  { label: "NGN 1M - 5M", min: 1000000, max: 5000000 },
  { label: "NGN 5M - 20M", min: 5000000, max: 20000000 },
  { label: "NGN 20M+", min: 20000000, max: Infinity },
];

// Mock Property Listings
export const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Well Finished 2 Bedroom Flat",
    type: "Apartments",
    status: "For Rent",
    price: 3000000,
    location: "Wuse, Abuja",
    region: "Abuja",
    image: "/properties/property-1.jpg",
    description: "Newly renovated 2-bedroom apartment with modern amenities in a secure estate.",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
  },
  {
    id: 2,
    title: "Newly Finished Four Bedroom Duplex",
    type: "Houses",
    status: "For Rent",
    price: 6000000,
    location: "Belham Estate, Abuja",
    region: "Abuja",
    image: "/properties/property-2.jpg",
    description: "Luxurious 4-bedroom duplex with excellent finishing and modern facilities.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
  },
  {
    id: 3,
    title: "Office Space for Let",
    type: "Offices",
    status: "For Rent",
    price: 180000,
    location: "Garki, Abuja",
    region: "Abuja",
    image: "/properties/property-3.jpg",
    description: "Prime office space in a commercial area with high visibility and accessibility.",
    bedrooms: 0,
    bathrooms: 2,
    area: 800,
  },
  {
    id: 4,
    title: "Plaza for Sale",
    type: "Industrial",
    status: "For Sale",
    price: 1500000000,
    location: "Jabi, Abuja",
    region: "Abuja",
    image: "/properties/property-4.jpg",
    description: "Commercial plaza with multiple units, ideal for investment and business.",
    bedrooms: 0,
    bathrooms: 4,
    area: 5000,
  },
  {
    id: 5,
    title: "Six Units of Three Bedroom Flats",
    type: "Apartments",
    status: "For Sale",
    price: 450000000,
    location: "Maitama, Abuja",
    region: "Abuja",
    image: "/properties/property-5.jpg",
    description: "Investment opportunity: 6 units of 3-bedroom flats in a prime location.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
  },
  {
    id: 6,
    title: "Four Units of Three Bedroom Flats",
    type: "Apartments",
    status: "For Sale",
    price: 300000000,
    location: "Ikoyi, Lagos",
    region: "Lagos",
    image: "/properties/property-6.jpg",
    description: "Premium residential units in a secure and well-developed estate.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
  },
  {
    id: 7,
    title: "Well Finished 5 Bedroom Duplex with Swimming Pool",
    type: "Houses",
    status: "For Sale",
    price: 800000000,
    location: "Utako, Abuja",
    region: "Abuja",
    image: "/properties/property-utako-duplex-1.jpg",
    description: "Luxurious 5-bedroom duplex with swimming pool, 2-room boys quarters, and premium finishes. Located in the prestigious Utako area of Abuja.",
    bedrooms: 5,
    bathrooms: 4,
    area: 5000,
  },
  {
    id: 8,
    title: "Office Space at Birgi Plaza",
    type: "Offices",
    status: "For Rent",
    price: 4500000,
    location: "Wuye, Abuja",
    region: "Abuja",
    image: "/properties/property-birgi-office-1.jpg",
    description: "Premium office space available in various sizes at Birgi Plaza, Wuye. Modern facilities, excellent location, and high visibility for business operations.",
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
  },
  {
    id: 9,
    title: "5 Bedroom Duplex with 2-Room BQ",
    type: "Houses",
    status: "For Sale",
    price: 450000000,
    location: "Gwagwalada, Abuja",
    region: "Abuja",
    image: "/properties/property-gwagwalada-duplex-1.jpg",
    description: "Well-finished 5-bedroom duplex with 2-room boys quarters in Gwagwalada. Modern amenities, spacious layout, and excellent investment opportunity.",
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    title: "Dream Home Found",
    text: "Wale Awojobi Associates provided exceptional service during the valuation of our properties. Their professionalism, attention to detail, and deep understanding of the market were evident throughout the entire process. We are highly satisfied and look forward to future collaborations.",
    author: "John Adeyemi",
    role: "Real Estate Developer, Lagos",
  },
  {
    id: 2,
    title: "Seamless Buying Experience",
    text: "Working with Wale Awojobi Associates was a seamless experience. They managed our property with expertise and ensured that all tenant issues were handled promptly. We could not have asked for a better property management team.",
    author: "Fatima Musa",
    role: "Private Property Owner, Abuja",
  },
  {
    id: 3,
    title: "Effortless Selling Process",
    text: "Wale Awojobi Associates project appraisal services were invaluable to the success of our recent real estate development. Their thorough feasibility report helped us secure financing and complete the project on time and within budget.",
    author: "Linda Martins Okoye",
    role: "CEO, Apex Construction Ltd., Port Harcourt",
  },
  {
    id: 4,
    title: "Perfect Relocation Solution",
    text: "The team provided comprehensive support throughout our relocation process. From property search to final documentation, everything was handled professionally and efficiently. Highly recommended!",
    author: "Dr Kevin Chukwuemeka",
    role: "Relocated and Thrilled",
  },
];

// Blog Articles
export const BLOG_ARTICLES = [
  {
    id: 1,
    title: "The Complete Guide to Property Valuation in Nigeria",
    excerpt: "Understanding property valuation is crucial for making informed real estate decisions. Learn the key factors that influence property values.",
    image: "/blog/valuation-guide.jpg",
    date: "2024-10-15",
    author: "Wale Awojobi",
    category: "Valuation",
  },
  {
    id: 2,
    title: "Investment Tips: Finding the Right Property in Abuja",
    excerpt: "Abuja real estate market offers excellent investment opportunities. Discover the best neighborhoods and investment strategies.",
    image: "/blog/investment-tips.jpg",
    date: "2024-10-10",
    author: "Adebayo Okafor",
    category: "Investment",
  },
  {
    id: 3,
    title: "Estate Surveying: What You Need to Know",
    excerpt: "Estate surveying is a critical service for property transactions. Learn what surveyors do and why their expertise matters.",
    image: "/blog/surveying-guide.jpg",
    date: "2024-10-05",
    author: "Wale Awojobi",
    category: "Services",
  },
];

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO ||
  "https://placehold.co/128x128/E1E7EF/1F2937?text=App";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
