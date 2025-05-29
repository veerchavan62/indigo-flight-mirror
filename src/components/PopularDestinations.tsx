
import { ArrowRight } from 'lucide-react';

const PopularDestinations = () => {
  const destinations = [
    {
      city: 'Goa',
      country: 'India',
      price: '₹3,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop',
      description: 'Beautiful beaches and vibrant nightlife'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      description: 'Luxury shopping and stunning architecture'
    },
    {
      city: 'Bangkok',
      country: 'Thailand',
      price: '₹8,999',
      image: 'https://images.unsplash.com/photo-1563492065-b6c1ce273d8e?w=400&h=300&fit=crop',
      description: 'Rich culture and delicious street food'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      price: '₹15,999',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      description: 'Modern city with lush gardens'
    },
    {
      city: 'Kathmandu',
      country: 'Nepal',
      price: '₹6,999',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&h=300&fit=crop',
      description: 'Ancient temples and mountain views'
    },
    {
      city: 'Colombo',
      country: 'Sri Lanka',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=300&fit=crop',
      description: 'Tropical paradise with rich heritage'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing places around the world with IndiGo's extensive network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.city}</h3>
                  <span className="text-sm text-gray-500">{destination.country}</span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
