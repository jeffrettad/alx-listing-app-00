// components/property/PropertyDetail.tsx
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center gap-4 text-gray-600 mt-2">
        <span className="text-yellow-500 font-medium">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img src={property.image} alt={property.name} className="col-span-2 h-96 w-full object-cover rounded-lg" />
        {property.gallery?.map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} className="h-48 w-full object-cover rounded-lg" />
        ))}
      </div>

      {/* Description Tabs */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
        <ul className="flex flex-wrap gap-2">
          {property.category.map((item, idx) => (
            <li key={idx} className="bg-gray-200 px-3 py-1 rounded-md">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
