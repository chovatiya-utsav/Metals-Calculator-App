
import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { City } from '../types';
import { statesAndCities } from '../data/rates';

interface CitySelectorProps {
  selectedCity: City;
  onCityChange: (city: City) => void;
  liveRates?: City['rates'] | null;
  loadingRates?: boolean;
  rateError?: string | null;
}

const CitySelector: React.FC<CitySelectorProps> = ({
  selectedCity,
  onCityChange,
  liveRates,
  loadingRates,
  rateError
}) => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [availableCities, setAvailableCities] = useState<City[]>([]);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setAvailableCities(statesAndCities[state as keyof typeof statesAndCities] || []);
  };

  const handleCityChange = (cityId: string) => {
    const city = availableCities.find(c => c.id === cityId);
    if (city) {
      onCityChange(city);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <MapPin className="text-yellow-600" size={20} />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Select Location for Current Rates</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select State
          </label>
          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Choose State</option>
              {Object.keys(statesAndCities).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select City
          </label>
          <div className="relative">
            <select
              value={selectedCity.id}
              onChange={(e) => handleCityChange(e.target.value)}
              disabled={!selectedState}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Choose City</option>
              {availableCities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {selectedCity.id && (
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Current Rates in {selectedCity.name}</h3>
          {loadingRates ? (
            <div className="text-center text-yellow-600">Loading live rates...</div>
          ) : rateError ? (
            <div className="text-center text-red-600 mb-2">{rateError}</div>
          ) : null}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {(() => {
              const rates = liveRates ?? selectedCity.rates ?? null;
              const gold24 = rates?.gold?.['24K'];
              const gold22 = rates?.gold?.['22K'];
              const gold18 = rates?.gold?.['18K'];
              const silver = rates?.silver;

              const format = (v: number | undefined | null) => (v === undefined || v === null ? '—' : `₹${v}/g`);

              return (
                <>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Gold 24K</div>
                    <div className="text-lg font-bold text-yellow-600">{format(gold24)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Gold 22K</div>
                    <div className="text-lg font-bold text-yellow-600">{format(gold22)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Gold 18K</div>
                    <div className="text-lg font-bold text-yellow-600">{format(gold18)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Silver</div>
                    <div className="text-lg font-bold text-gray-600">{format(silver)}</div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;