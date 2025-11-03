
// Company Information
export const COMPANY_NAME = "Wale Awojobi Associates";
export const COMPANY_TAGLINE = "Your Trusted Estate Surveyors and Valuation Professionals.";
export const COMPANY_ADDRESS = "58 Accra Street, Zone 5, Wuse Abuja, Nigeria";
export const COMPANY_PHONE = ["08023143976"];
export const COMPANY_EMAIL = "waleawojobi@gmail.com";
export const COMPANY_WEBSITE = "https://waleawojobiassociates.com.ng";
export const WHATSAPP_NUMBER = "08023143976";

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
    name: "ESV. Ademiyu Adetunji",
    title: "Associate Partner",
    credentials: "ESV",
    bio: "Specialist in property valuation and market analysis with extensive portfolio.",
    image: "/team/ademiyu-adetunji.jpg",
  },
  {
    id: 3,
    name: "ESV. Tonyin Ilori",
    title: "Associate Partner",
    credentials: "ESV",
    bio: "Expert in real estate advisory and property management with proven track record.",
    image: "/team/tonyin-ilori.jpg",
  },
  {
    id: 4,
    name: "Lewis Iyoghigie",
    title: "ICT Consultant",
    credentials: "BSc",
    bio: "Technology specialist managing digital solutions and client platforms.",
    image: "/team/lewis-iyoghigie.jpg",
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

// Mock Property Listings - Using Real Images
export const MOCK_PROPERTIES = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
    title: "Premium Office Space - Birgi Plaza",
    type: "Offices",
    status: "For Rent",
    price: 4500000,
    location: "Wuye, Abuja",
    region: "Abuja",
    image: "/properties/property-birgi-office-2.jpg",
    description: "Spacious office suite with modern amenities in the heart of Wuye business district.",
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
  },
  {
    id: 5,
    title: "Luxury Duplex - Utako Estate",
    type: "Houses",
    status: "For Sale",
    price: 800000000,
    location: "Utako, Abuja",
    region: "Abuja",
    image: "/properties/property-utako-duplex-2.jpg",
    description: "Exquisitely finished 5-bedroom duplex with world-class amenities and premium location.",
    bedrooms: 5,
    bathrooms: 4,
    area: 5000,
  },
  {
    id: 6,
    title: "Commercial Office Suite",
    type: "Offices",
    status: "For Rent",
    price: 4500000,
    location: "Wuye, Abuja",
    region: "Abuja",
    image: "/properties/property-birgi-office-3.jpg",
    description: "Prime office location with excellent visibility and accessibility for business growth.",
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
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
    text: "The team at Wale Awojobi Associates helped us find the perfect property for our business relocation. Their knowledge of the market and professional approach made the entire process smooth and stress-free.",
    author: "Michael Obi",
    role: "Business Owner, Abuja",
  },
];

// Blog Articles
export const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Understanding Property Valuation in Nigeria",
    excerpt: "Learn the key factors that influence property valuation and how to get the best value for your investment.",
    image: "/blog/blog-1.jpg",
    date: "November 1, 2025",
    author: "Wale Awojobi",
    category: "Valuation",
  },
  {
    id: 2,
    title: "Top 5 Real Estate Investment Tips",
    excerpt: "Discover the strategies used by successful real estate investors to maximize returns and minimize risks.",
    image: "/blog/blog-2.jpg",
    date: "October 28, 2025",
    author: "Adebayo Okafor",
    category: "Investment",
  },
  {
    id: 3,
    title: "The Future of Real Estate in Abuja",
    excerpt: "Explore emerging trends and opportunities in the Abuja real estate market for the coming years.",
    image: "/blog/blog-3.jpg",
    date: "October 25, 2025",
    author: "Wale Awojobi",
    category: "Market Analysis",
  },
];

// App Configuration
export const APP_TITLE = "Wale Awojobi Associates";
export const APP_LOGO = "/logo.png";
