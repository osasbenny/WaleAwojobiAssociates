import { useState, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import { MOCK_PROPERTIES, PROPERTY_TYPES, REGIONS, PRICE_RANGES } from "@/const";

export default function Listings() {
  const [filters, setFilters] = useState({
    type: "All",
    region: "All",
    priceRange: "All",
    status: "All",
  });

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter((property) => {
      const typeMatch = filters.type === "All" || property.type === filters.type;
      const regionMatch = filters.region === "All" || property.region === filters.region;
      const statusMatch = filters.status === "All" || property.status === filters.status;

      let priceMatch = true;
      if (filters.priceRange !== "All") {
        const range = PRICE_RANGES.find((r) => r.label === filters.priceRange);
        if (range) {
          priceMatch = property.price >= range.min && property.price <= range.max;
        }
      }

      return typeMatch && regionMatch && statusMatch && priceMatch;
    });
  }, [filters]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Listings</h1>
          <p className="text-xl opacity-90">Discover Your Perfect Property</p>
        </div>
      </section>

      {/* Listings Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Filters */}
          <div className="bg-card p-6 rounded-lg border border-border mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6">Filter Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Property Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Region</label>
                <select
                  value={filters.region}
                  onChange={(e) => handleFilterChange("region", e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  {REGIONS.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  {PRICE_RANGES.map((range) => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                >
                  <option value="All">All</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>

              {/* Reset Button */}
              <div className="flex items-end">
                <button
                  onClick={() =>
                    setFilters({
                      type: "All",
                      region: "All",
                      priceRange: "All",
                      status: "All",
                    })
                  }
                  className="w-full px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredProperties.length}</span> properties
            </p>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  status={property.status as "For Sale" | "For Rent"}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No properties found matching your filters.</p>
              <button
                onClick={() =>
                  setFilters({
                    type: "All",
                    region: "All",
                    priceRange: "All",
                    status: "All",
                  })
                }
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
