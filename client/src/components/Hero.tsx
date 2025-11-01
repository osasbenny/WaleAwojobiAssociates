import { Link } from "wouter";
import { COMPANY_TAGLINE } from "@/const";

export default function Hero() {
  return (
    <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Wale Awojobi Associates
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {COMPANY_TAGLINE}
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Property Type
              </label>
              <select className="w-full px-4 py-2 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>All</option>
                <option>Apartments</option>
                <option>Houses</option>
                <option>Land</option>
                <option>Offices</option>
                <option>Industrial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Region
              </label>
              <select className="w-full px-4 py-2 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>All</option>
                <option>Abuja</option>
                <option>Lagos</option>
                <option>Port Harcourt</option>
                <option>Kano</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Price Range
              </label>
              <select className="w-full px-4 py-2 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>All</option>
                <option>NGN 0 - 1M</option>
                <option>NGN 1M - 5M</option>
                <option>NGN 5M - 20M</option>
                <option>NGN 20M+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-accent text-accent-foreground font-semibold py-2 rounded-lg hover:bg-accent/90 transition">
                Search
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 justify-center flex-wrap">
            <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold">
              All
            </button>
            <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition">
              For Sale
            </button>
            <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition">
              For Rent
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/listings">
          <button className="btn-primary text-lg">View All Listings</button>
        </Link>
      </div>
    </section>
  );
}
