import { Link } from "wouter";
import PropertyCard from "./PropertyCard";
import { MOCK_PROPERTIES } from "@/const";

export default function FeaturedListings() {
  const featured = MOCK_PROPERTIES.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Explore Our Top Selections
          </p>
          <h2 className="section-title">Premium Property Picks</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of premium properties across Nigeria
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              status={property.status as "For Sale" | "For Rent"}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/listings">
            <button className="btn-secondary">View All Properties</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
