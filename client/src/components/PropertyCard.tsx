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

  const statusColor = status === "For Sale" ? "bg-green-500" : "bg-blue-500";
  const statusText = status === "For Sale" ? "For Sale" : "For Rent";

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 card-hover">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 ${statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {statusText}
        </div>
        {/* Featured Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
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
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                <Bed size={16} />
              </div>
              <p className="text-sm font-semibold text-foreground">{bedrooms}</p>
              <p className="text-xs text-muted-foreground">Beds</p>
            </div>
          )}
          {bathrooms > 0 && (
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                <Bath size={16} />
              </div>
              <p className="text-sm font-semibold text-foreground">{bathrooms}</p>
              <p className="text-xs text-muted-foreground">Baths</p>
            </div>
          )}
          <div>
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
              <Maximize2 size={16} />
            </div>
            <p className="text-sm font-semibold text-foreground">{area}</p>
            <p className="text-xs text-muted-foreground">sqft</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 btn-primary text-sm">View Details</button>
          <button className="flex-1 border border-border text-foreground hover:bg-muted rounded-lg py-2 transition">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}
