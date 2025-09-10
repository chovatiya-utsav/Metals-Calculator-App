import { useState, useEffect } from 'react';
import { Gem, Calculator, TrendingUp, Shield, Users, Award } from 'lucide-react';
import { JewelryItem, CalculatedItem, City, Receipt as ReceiptType } from './types';
import { calculateItemValue, calculateTotals } from './utils/calculations';
import CitySelector from './components/CitySelector';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Summary from './components/Summary';
import Receipt from './components/Receipt';
import AdBanner from './components/AdBanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {

  const [selectedCity, setSelectedCity] = useState<City>({} as City);
  // Maintain separate item lists for buying and selling
  const [itemsByMode, setItemsByMode] = useState<{ buying: JewelryItem[]; selling: JewelryItem[] }>({ buying: [], selling: [] });
  const [calculatedByMode, setCalculatedByMode] = useState<{ buying: CalculatedItem[]; selling: CalculatedItem[] }>({ buying: [], selling: [] });
  const [showReceiptBuying, setShowReceiptBuying] = useState(false);
  const [showReceiptSelling, setShowReceiptSelling] = useState(false);
  const [liveRates, setLiveRates] = useState<City['rates'] | null>(null);
  const [loadingRates, setLoadingRates] = useState(false);
  const [rateError, setRateError] = useState<string | null>(null);

  // Fetch live rates when selectedCity changes
  useEffect(() => {
    if (!selectedCity.id) {
      setLiveRates(null);
      return;
    }
    setLoadingRates(true);
    setRateError(null);
    fetch(`https://784e85c4-4229-42c4-8a31-926f199db8ca.web.createdevserver.com/api/rates?city=${selectedCity.name}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch rates');
        return res.json();
      })
      .then(data => {
        // API returns: { success: true, rates: { gold_24k: "...", gold_22k: "...", gold_18k: "...", silver: "..." } }
        if (!data) throw new Error('No data');
        const apiRates = data.rates || data;
        // If API returns wrapper with success flag, use data.rates
        const gold24 = apiRates.gold_24k ?? apiRates.gold24k ?? apiRates['24K'] ?? null;
        const gold22 = apiRates.gold_22k ?? apiRates.gold22k ?? apiRates['22K'] ?? null;
        const gold18 = apiRates.gold_18k ?? apiRates.gold18k ?? apiRates['18K'] ?? null;
        const silver = apiRates.silver ?? null;

        if (gold24 == null || gold22 == null || gold18 == null || silver == null) {
          // Unexpected shape — fall back to static rates
          throw new Error('Unexpected API response shape');
        }

        setLiveRates({
          gold: {
            '24K': parseFloat(gold24 as string),
            '22K': parseFloat(gold22 as string),
            '18K': parseFloat(gold18 as string)
          },
          silver: parseFloat(silver as string)
        });
      })
      .catch(err => {
        console.warn('Live rates fetch failed:', err);
        setRateError('Could not fetch live rates. Showing static rates.');
        setLiveRates(selectedCity.rates);
      })
      .finally(() => setLoadingRates(false));
  }, [selectedCity]);

  // Recalculate items for both modes when items, rates, or city changes
  useEffect(() => {
    if (!selectedCity.id || !liveRates) {
      setCalculatedByMode({ buying: [], selling: [] });
      return;
    }
    const cityWithLiveRates: City = { ...selectedCity, rates: liveRates };
    const buying = itemsByMode.buying.map(item => calculateItemValue(item, cityWithLiveRates, 'buying'));
    const selling = itemsByMode.selling.map(item => calculateItemValue(item, cityWithLiveRates, 'selling'));
    setCalculatedByMode({ buying, selling });
  }, [itemsByMode, selectedCity, liveRates]);

  const addItem = (itemData: Omit<JewelryItem, 'id'>, mode: 'buying' | 'selling') => {
    const newItem: JewelryItem = { ...itemData, id: Date.now().toString() };
    setItemsByMode(prev => ({ ...prev, [mode]: [...prev[mode], newItem] }));
  };

  const removeItem = (modeForRemove: 'buying' | 'selling', id: string) => {
    setItemsByMode(prev => ({ ...prev, [modeForRemove]: prev[modeForRemove].filter(item => item.id !== id) }));
  };

  const totalsBuying = calculateTotals(calculatedByMode.buying);
  const totalsSelling = calculateTotals(calculatedByMode.selling);

  const generateReceipt = (forMode: 'buying' | 'selling'): ReceiptType => {
    const items = calculatedByMode[forMode];
    const totals = forMode === 'buying' ? totalsBuying : totalsSelling;
    return {
      mode: forMode,
      city: selectedCity.name,
      items,
      ...totals,
      date: new Date().toLocaleDateString('en-IN'),
      receiptNumber: `JWL${forMode.toUpperCase()}${Date.now().toString().slice(-6)}`
    };
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 overflow-x-hidden">
      <Navigation currentPage="home" />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Gem className="text-yellow-600" size={24} />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Metals Calculator
            </h1>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Professional metals pricing system with real-time calculations, GST computation, 
            and receipt generation for buying and selling scenarios.
          </p>
        </div>

        {/* Rich Content Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Professional Precious Metals Pricing Calculator
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What is the Metals Calculator?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Metals Calculator is a comprehensive tool designed for jewelry professionals, traders, and consumers 
                  who need accurate pricing for precious metals transactions. Our calculator provides real-time market rates 
                  for gold, silver, and platinum, with automatic GST calculations and professional receipt generation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're buying jewelry for personal use, selling family heirlooms, or managing a jewelry business, 
                  our calculator ensures you have the most current and accurate pricing information at your fingertips.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Who Can Benefit?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="text-yellow-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Jewelry Retailers</h4>
                      <p className="text-gray-600 text-sm">Accurate pricing for inventory management and customer transactions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calculator className="text-yellow-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Individual Buyers</h4>
                      <p className="text-gray-600 text-sm">Fair pricing information for personal jewelry purchases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="text-yellow-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Traders & Investors</h4>
                      <p className="text-gray-600 text-sm">Market analysis and investment decision support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <Shield className="text-yellow-600 mx-auto mb-2" size={24} />
                  <p className="text-sm font-medium text-gray-800">GST Compliant</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="text-yellow-600 mx-auto mb-2" size={24} />
                  <p className="text-sm font-medium text-gray-800">Real-Time Rates</p>
                </div>
                <div className="text-center">
                  <Award className="text-yellow-600 mx-auto mb-2" size={24} />
                  <p className="text-sm font-medium text-gray-800">Professional Receipts</p>
                </div>
                <div className="text-center">
                  <Calculator className="text-yellow-600 mx-auto mb-2" size={24} />
                  <p className="text-sm font-medium text-gray-800">Easy to Use</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CitySelector
          selectedCity={selectedCity}
          onCityChange={(city) => setSelectedCity(city)}
          liveRates={liveRates}
          loadingRates={loadingRates}
          rateError={rateError}
        />

        {/* Top Ad Banner */}
        <div className="mb-6">
          <AdBanner 
            adSlot="1234567890" 
            adFormat="auto" 
            fullWidthResponsive={true} 
            className="text-center"
          />
        </div>

        {!selectedCity.id && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 text-center">
              Please select a state and city to view current rates and start calculations.
            </p>
          </div>
        )}

        {selectedCity.id && (
          <>
        <ItemForm onAddItem={addItem} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Buying Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Buying Items</h2>
            {itemsByMode.buying.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center mb-6">
                <p className="text-yellow-800">No buying items yet. Add your first buying item above.</p>
              </div>
            ) : (
              <>
                <ItemList
                  items={calculatedByMode.buying}
                  mode={'buying'}
                  onRemoveItem={(id: string) => removeItem('buying', id)}
                />

                <div className="mb-6">
                  <Summary mode="buying" {...totalsBuying} />
                  <div className="text-center mt-4">
                    <button
                      onClick={() => setShowReceiptBuying(prev => !prev)}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-lg hover:from-yellow-700 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Gem size={20} />
                      {showReceiptBuying ? 'Hide Buying Receipt' : 'Generate Buying Receipt'}
                    </button>
                  </div>
                  {showReceiptBuying && (
                    <Receipt receipt={generateReceipt('buying')} onPrint={handlePrint} />
                  )}
                </div>
              </>
            )}
          </div>

          Selling Section
          <div>
            <h2 className="text-lg font-semibold mb-3">Selling Items</h2>
            {itemsByMode.selling.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center mb-6">
                <p className="text-yellow-800">No selling items yet. Add your first selling item above.</p>
              </div>
            ) : (
              <>
                <ItemList
                  items={calculatedByMode.selling}
                  mode={'selling'}
                  onRemoveItem={(id: string) => removeItem('selling', id)}
                />

                <div className="mb-6">
                  <Summary mode="selling" {...totalsSelling} />
                  <div className="text-center mt-4">
                    <button
                      onClick={() => setShowReceiptSelling(prev => !prev)}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-lg hover:from-yellow-700 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Gem size={20} />
                      {showReceiptSelling ? 'Hide Selling Receipt' : 'Generate Selling Receipt'}
                    </button>
                  </div>
                  {showReceiptSelling && (
                    <Receipt receipt={generateReceipt('selling')} onPrint={handlePrint} />
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom Ad Banner */}
        <div className="mt-8">
          <AdBanner 
            adSlot="1234567890" 
            adFormat="auto" 
            fullWidthResponsive={true} 
            className="text-center"
          />
        </div>
          </>
        )}

        {/* FAQ Section */}
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;