
import { Shield, Clock, Headphones, CreditCard, Wifi, Utensils } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'Enhanced safety protocols and sanitization for your peace of mind'
    },
    {
      icon: Clock,
      title: 'On-Time Performance',
      description: 'Industry-leading punctuality with minimal delays'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you anytime'
    },
    {
      icon: CreditCard,
      title: 'Easy Booking',
      description: 'Simple and secure online booking with multiple payment options'
    },
    {
      icon: Wifi,
      title: 'In-Flight WiFi',
      description: 'Stay connected with complimentary WiFi on select flights'
    },
    {
      icon: Utensils,
      title: 'Fresh Meals',
      description: 'Delicious meals and snacks prepared with fresh ingredients'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IndiGo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best in air travel with our comprehensive services and amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
