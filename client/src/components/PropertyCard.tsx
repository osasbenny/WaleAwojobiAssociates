import { Bed, Bath, Maximize2, MapPin } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  location: string;
  status: "For Sale" | "For Rent";
  bedrooms: number;
  bathrooms: number;
  area: number;
}

export default function PropertyCard({
  id,
  title,
  image,
  price,
  location,
  status,
  bedrooms,
  bathrooms,
  area,
}: PropertyCardProps) {
  const formatPrice = (price: number) => {
    if (price >= 1000000000) {
      return `₦${(price / 1000000000).toFixed(1)}B`;
    }
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    }
    return `₦${price.toLocaleString()}`;
  };

  const statusColor = status === "For Sale" ? "bg-green-500" : "bg-blue-600";
  const statusText = status === "For Sale" ? "For Sale" : "For Rent";

  return (
    <div className="property-card">
      {/* Image Container */}
      <div className="property-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%236b7280' text-anchor='middle' dy='.3em'%3EImage not available%3C/text%3E%3C/svg%3E";
          }}
        />
        {/* Status Badge */}
        <div className={`property-badge property-badge-${status === "For Sale" ? "sale" : "rent"}`}>
          {statusText}
        </div>
        {/* Featured Badge */}
        <div className="property-badge-featured">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-accent mb-4">{formatPrice(price)}</div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border text-center">
          {bedrooms > 0 && (
            <div className="hover:bg-gray-50 transition-colors duration-300 rounded p-2">
              <div className="flex items-center justify-center gap-1 text-accent mb-1">
                <Bed size={16} />
              </div>
              <p className="text-sm font-semibold text-foreground">{bedrooms}</p>
              <p className="text-xs text-muted-foreground">Beds</p>
            </div>
          )}
          {bathrooms > 0 && (
            <div className="hover:bg-gray-50 transition-colors duration-300 rounded p-2">
              <div className="flex items-center justify-center gap-1 text-accent mb-1">
                <Bath size={16} />
              </div>
              <p className="text-sm font-semibold text-foreground">{bathrooms}</p>
              <p className="text-xs text-muted-foreground">Baths</p>
            </div>
          )}
          <div className="hover:bg-gray-50 transition-colors duration-300 rounded p-2">
            <div className="flex items-center justify-center gap-1 text-accent mb-1">
              <Maximize2 size={16} />
            </div>
            <p className="text-sm font-semibold text-foreground">{area}</p>
            <p className="text-xs text-muted-foreground">sqft</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 btn-primary text-sm">View Details</button>
          <button className="flex-1 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg py-2 transition-all duration-300 font-semibold">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}
