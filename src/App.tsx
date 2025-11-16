import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gem, Calculator, TrendingUp, Shield, Users, Award } from 'lucide-react';
import { JewelryItem, CalculatedItem, City, Receipt as ReceiptType } from './types';
import { calculateItemValue, calculateTotals } from './utils/calculations';
import CitySelector from './components/CitySelector';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Summary from './components/Summary';
import Receipt from './components/Receipt';
import SmartAd from './components/Ads/SmartAd';
import Layout from './components/Layout';
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
    <Layout 
      currentPage="home"
      title="Metals Calculator - Professional Gold & Silver Pricing Tool"
      description="Professional precious metals calculator with real-time gold, silver, and platinum pricing. GST compliant calculations, receipt generation, and accurate jewelry valuation for buyers and sellers."
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        {/* Top Ad - Homepage */}
        <div className="mb-6 sm:mb-8">
          <SmartAd slot="1234567890" />
        </div>

        {/* Rich Content Introduction */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Additional Content Section for SEO */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              How Our Precious Metals Calculator Works
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Understanding Precious Metals Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Precious metals like gold and silver are valued based on their purity and current market rates. Our calculator 
                  simplifies this complex process by automatically fetching the latest market rates for your selected city and 
                  calculating accurate prices based on the purity level of your jewelry. Whether you have 24K pure gold, 22K gold 
                  (which contains 91.6% pure gold), or 18K gold (75% pure gold), our system accurately computes the value.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For silver jewelry, we use 999 purity silver rates and calculate the exact value based on the weight of your items. 
                  The calculator also accounts for making charges, which are the costs associated with crafting jewelry from raw metal. 
                  These charges can be calculated as a fixed amount per gram or as a percentage of the metal value, giving you 
                  complete flexibility in your calculations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Buying vs. Selling Calculations</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our calculator supports two distinct modes to accurately reflect real-world transactions. In buying mode, the system 
                  adds making charges to the base metal value and applies GST (Goods and Services Tax) at the standard rate of 3% 
                  for jewelry purchases in India. This gives you the total amount you'll need to pay when purchasing new jewelry.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When selling jewelry, the calculator works differently. It deducts making charges from the pure metal value, as 
                  these are costs that were incurred during manufacturing and cannot be recovered. No GST is applied to selling 
                  transactions. This mode helps you understand the actual value you'll receive when selling your jewelry, accounting 
                  for the fact that second-hand jewelry typically fetches a price based on metal content rather than original retail value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">City-Specific Rate Accuracy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Precious metal rates vary by location due to local market conditions, transportation costs, and regional demand. 
                  Our calculator supports multiple cities across various states, allowing you to select your location for the most 
                  accurate pricing. We integrate with live rate APIs to fetch real-time market prices, ensuring your calculations 
                  reflect current market conditions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If live rate data is unavailable, the system automatically falls back to our comprehensive database of static rates, 
                  which are regularly updated to maintain accuracy. This dual-system approach ensures you always get reliable pricing 
                  information, even during network issues or API downtime.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Receipt Generation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once you've calculated your jewelry values, our system generates professional receipts that you can print or save. 
                  Each receipt includes a unique receipt number, detailed breakdown of all items with their individual calculations, 
                  subtotals, making charges, GST amount (for buying transactions), and the final grand total. This feature is 
                  particularly valuable for jewelry businesses that need to provide customers with detailed transaction records.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The receipt format is designed to be professional and comprehensive, suitable for both personal records and business 
                  documentation. You can print these receipts directly from your browser, making it easy to maintain accurate records 
                  of your precious metals transactions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <CitySelector
          selectedCity={selectedCity}
          onCityChange={(city) => setSelectedCity(city)}
          liveRates={liveRates}
          loadingRates={loadingRates}
          rateError={rateError}
        />

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

        {/* Middle Ad - Only show when city selected AND items exist */}
        {(itemsByMode.buying.length > 0 || itemsByMode.selling.length > 0) && (
          <div className="mb-6">
            <SmartAd slot="1234567890" />
          </div>
        )}

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
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowReceiptBuying(prev => !prev);
                      }}
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
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowReceiptSelling(prev => !prev);
                      }}
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

        {/* Bottom Ad - Only show when city selected AND items exist */}
        {(itemsByMode.buying.length > 0 || itemsByMode.selling.length > 0) && (
          <div className="mt-8">
            <SmartAd slot="1234567890" />
          </div>
        )}
          </>
        )}

        {/* Gold Price Calculator for India - SEO Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Gold Price Calculator for India
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Understanding Gold Pricing in India</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Gold Price Calculator for India is specifically designed to help you understand and calculate accurate gold prices based on current market rates across different cities in India. Gold pricing in India is influenced by several factors including international gold rates, currency exchange rates, local demand, and regional market conditions. Whether you're buying gold jewelry for a special occasion or selling family heirlooms, understanding how gold prices are calculated is essential for making informed decisions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The calculator takes into account the purity of gold, which is measured in karats. In India, the most common gold purities are 24K (pure gold), 22K (91.6% pure gold), and 18K (75% pure gold). Each karat level affects the final price, with 24K gold being the most expensive due to its higher purity. Our calculator automatically adjusts prices based on the karat value you select, ensuring accurate calculations for your specific gold items.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">City-Based Gold Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gold prices vary significantly across different cities in India due to local market dynamics, transportation costs, and regional demand patterns. Major metropolitan cities like Mumbai, Delhi, and Bangalore often have different gold rates compared to smaller cities. Our calculator supports multiple cities across various states, allowing you to select your location for the most accurate pricing. We integrate with live rate APIs to fetch real-time market prices, ensuring your calculations reflect current market conditions in your specific city.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The city-based pricing feature is particularly important for accurate calculations because gold rates can differ by several hundred rupees per 10 grams between cities. This variation occurs due to factors such as local taxes, dealer margins, and regional supply-demand dynamics. By selecting your city, you ensure that the calculator uses rates that are most relevant to your location, giving you a more accurate estimate of gold prices for your transactions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">GST Calculation for Gold in India</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When purchasing gold jewelry in India, Goods and Services Tax (GST) is applicable at a rate of 3% on the total value of the gold item, including making charges. Our calculator automatically calculates GST for buying transactions, ensuring compliance with Indian tax regulations. The GST is calculated on the sum of the gold value and making charges, providing you with a complete breakdown of all costs involved in your purchase.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  It's important to note that GST is only applicable when buying new gold jewelry. When selling gold, no GST is charged as it's considered a sale of used goods. Our calculator handles both scenarios correctly - adding GST for buying transactions and excluding it for selling transactions. This ensures you have a clear understanding of the total amount you'll pay when buying gold or the amount you'll receive when selling gold jewelry.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Making Charges and Final Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Making charges are the costs associated with crafting gold jewelry from raw metal. These charges can be calculated as a fixed amount per gram or as a percentage of the gold value. Our calculator supports both calculation methods, giving you flexibility to match how your jeweler calculates making charges. When buying gold jewelry, making charges are added to the base gold value, and then GST is calculated on the total.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When selling gold jewelry, making charges are deducted from the pure gold value, as these are manufacturing costs that cannot be recovered. This reflects the reality that second-hand jewelry is typically valued based on its metal content rather than its original retail price. Our calculator provides transparent calculations showing the breakdown of gold value, making charges, GST (if applicable), and the final total, helping you understand exactly how your gold price is determined.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </Layout>
  );
}

export default App;