import React from 'react';
import { Gem, Target, Users, Award, TrendingUp, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout 
      currentPage="about"
      title="About Us - Metals Calculator | Professional Precious Metals Pricing"
      description="Learn about Metals Calculator - the professional precious metals pricing tool for jewelry professionals, traders, and consumers. Real-time gold, silver, and platinum calculations."
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gem className="text-yellow-600" size={40} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              About Metals Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in precious metals pricing and jewelry valuation
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Metals Calculator, we understand the complexities of precious metals pricing and the challenges 
              faced by jewelry professionals, traders, and consumers. Our mission is to provide accurate, real-time 
              calculations that help you make informed decisions about gold, silver, and platinum transactions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Do</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our comprehensive calculator system provides instant pricing for precious metals based on current 
              market rates. Whether you're buying jewelry for personal use, selling family heirlooms, or managing 
              a jewelry business, our tools ensure you have the most accurate and up-to-date pricing information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <TrendingUp className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Real-Time Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Live market rates updated throughout the day for accurate calculations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">GST Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    Automatic GST calculation following current tax regulations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Professional Tools</h3>
                  <p className="text-gray-600 text-sm">
                    Designed for jewelry professionals and serious traders
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Receipt Generation</h3>
                  <p className="text-gray-600 text-sm">
                    Professional receipts for all transactions and calculations
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Who We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <Target className="text-yellow-600 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">Jewelry Retailers</h3>
                <p className="text-gray-600 text-sm">
                  Accurate pricing for inventory management and customer transactions
                </p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <Users className="text-yellow-600 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">Individual Buyers</h3>
                <p className="text-gray-600 text-sm">
                  Fair pricing information for personal jewelry purchases
                </p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <TrendingUp className="text-yellow-600 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">Traders & Investors</h3>
                <p className="text-gray-600 text-sm">
                  Market analysis and investment decision support
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Our Technology</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Metals Calculator is built using modern web technologies to ensure fast, reliable, and accurate calculations. 
              Our platform integrates with real-time market data APIs to fetch the latest precious metals rates, ensuring 
              that your calculations always reflect current market conditions. We've designed our system with reliability 
              in mind, incorporating automatic fallback mechanisms that switch to our curated static rate database if 
              live data becomes temporarily unavailable.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The calculator engine uses precise mathematical formulas that account for metal purity percentages, apply 
              making charges correctly, and calculate GST according to current tax regulations. All calculations are 
              performed client-side for instant results, while maintaining complete transparency so you can see exactly 
              how each value is derived. Our commitment to accuracy means we regularly update our rate databases and 
              calculation algorithms to reflect any changes in market practices or regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Metals Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Accuracy First</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every calculation is performed using verified market rates and standardized formulas. We understand that 
                  precision matters when dealing with precious metals, and our system is designed to provide accurate 
                  results you can trust for important financial decisions.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">User-Friendly Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our intuitive interface makes complex calculations simple. Whether you're a jewelry professional with 
                  years of experience or someone making their first precious metals purchase, our calculator guides you 
                  through the process step by step.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Always Available</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access our calculator anytime, anywhere. Our cloud-based platform works on all devices - desktop computers, 
                  tablets, and smartphones. No downloads or installations required, just open your browser and start calculating.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Free to Use</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe everyone should have access to accurate precious metals pricing information. Our calculator 
                  is completely free to use, with no hidden fees, registration requirements, or usage limits. Calculate 
                  as many times as you need without any restrictions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand that financial calculations are sensitive, and we take your privacy seriously. Metals Calculator 
              performs all calculations locally in your browser - your data never leaves your device unless you choose to 
              generate and save a receipt. We don't track your calculations, store your personal information, or share your 
              data with third parties.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive privacy policy details exactly how we handle any information you provide when contacting us 
              for support. We believe in transparency and give you complete control over your data. You can use our calculator 
              with confidence, knowing that your privacy is protected.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Try our calculator today and experience the most accurate precious metals pricing available.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Use Calculator Now
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;
