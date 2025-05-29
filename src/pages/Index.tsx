
import Header from '@/components/Header';
import FlightBooking from '@/components/FlightBooking';
import PopularDestinations from '@/components/PopularDestinations';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FlightBooking />
      <PopularDestinations />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
