
import { useState } from 'react';
import { Plane, Calendar, Users, ArrowLeftRight } from 'lucide-react';

const FlightBooking = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('Delhi (DEL)');
  const [to, setTo] = useState('Mumbai (BOM)');
  const [departDate, setDepartDate] = useState('2024-06-15');
  const [returnDate, setReturnDate] = useState('2024-06-20');
  const [passengers, setPassengers] = useState('1 Adult');

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fly with IndiGo
          </h1>
          <p className="text-xl text-blue-100">
            Book your flight and experience hassle-free travel
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          {/* Trip Type Selection */}
          <div className="flex flex-wrap gap-4 mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                value="roundtrip"
                checked={tripType === 'roundtrip'}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2"
              />
              <span className="text-gray-700">Round Trip</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2"
              />
              <span className="text-gray-700">One Way</span>
            </label>
          </div>

          {/* Flight Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* From */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Delhi (DEL)">Delhi (DEL)</option>
                <option value="Mumbai (BOM)">Mumbai (BOM)</option>
                <option value="Bangalore (BLR)">Bangalore (BLR)</option>
                <option value="Chennai (MAA)">Chennai (MAA)</option>
                <option value="Kolkata (CCU)">Kolkata (CCU)</option>
              </select>
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex items-end justify-center pb-3">
              <button
                onClick={swapCities}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <ArrowLeftRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            {/* To */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Mumbai (BOM)">Mumbai (BOM)</option>
                <option value="Delhi (DEL)">Delhi (DEL)</option>
                <option value="Bangalore (BLR)">Bangalore (BLR)</option>
                <option value="Chennai (MAA)">Chennai (MAA)</option>
                <option value="Kolkata (CCU)">Kolkata (CCU)</option>
              </select>
            </div>

            {/* Departure Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Return Date */}
            {tripType === 'roundtrip' && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
          </div>

          {/* Passengers and Search */}
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults">4 Adults</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 w-full md:w-auto">
              <Plane className="w-5 h-5" />
              <span>Search Flights</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
