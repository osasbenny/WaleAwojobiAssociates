import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyDetailsModalProps {
  property: {
    id: number;
    title: string;
    type: string;
    status: string;
    price: number;
    location: string;
    region: string;
    image: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyDetailsModal({
  property,
  isOpen,
  onClose,
}: PropertyDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen) return null;

  // Generate image gallery based on property
  const getPropertyImages = () => {
    const baseImage = property.image;
    const images = [baseImage];

    // Add additional images based on property type
    if (property.id === 1 || property.id === 5) {
      // Utako duplex
      for (let i = 2; i <= 14; i++) {
        images.push(`/properties/property-utako-duplex-${i}.jpg`);
      }
    } else if (property.id === 2 || property.id === 4 || property.id === 6) {
      // Birgi office
      for (let i = 2; i <= 8; i++) {
        images.push(`/properties/property-birgi-office-${i}.jpg`);
      }
    } else if (property.id === 3) {
      // Gwagwalada duplex
      for (let i = 2; i <= 6; i++) {
        images.push(`/properties/property-gwagwalada-duplex-${i}.jpg`);
      }
    }

    return images;
  };

  const images = getPropertyImages();
  const currentImage = images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000000) {
      return `₦${(price / 1000000000).toFixed(1)}B`;
    } else if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `₦${(price / 1000).toFixed(1)}K`;
    }
    return `₦${price}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="relative bg-gray-900 aspect-video flex items-center justify-center overflow-hidden">
          <img
            src={currentImage}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Price and Status */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600 mb-2">{property.location}</p>
              <p className="text-3xl font-bold text-orange-500">
                {formatPrice(property.price)}
              </p>
            </div>
            <div className="flex gap-2">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                  property.status === "For Sale"
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
              >
                {property.status}
              </span>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition ${
                  isFavorite
                    ? "bg-red-100 text-red-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <Heart className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-3 gap-4">
            {property.bedrooms > 0 && (
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {property.bedrooms}
                </p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {property.bathrooms}
                </p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {property.area.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Sq Ft</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About this property
            </h3>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Property Type</p>
              <p className="font-semibold text-gray-900">{property.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Region</p>
              <p className="font-semibold text-gray-900">{property.region}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
              Contact Agent
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
