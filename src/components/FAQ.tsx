import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "How are gold and silver prices calculated?",
      answer: "Our calculator uses real-time market rates from major exchanges and applies current purity standards (24K, 22K, 18K for gold, and 999 for silver). Prices are updated throughout the day to reflect current market conditions, ensuring accurate calculations for both buying and selling scenarios."
    },
    {
      question: "What is the difference between 24K, 22K, and 18K gold?",
      answer: "Gold purity is measured in karats: 24K is 99.9% pure gold (999 hallmark), 22K is 91.6% pure gold (916 hallmark), and 18K is 75% pure gold (750 hallmark). Higher karat gold is more valuable but softer, while lower karat gold is more durable for jewelry making."
    },
    {
      question: "How is GST calculated on jewelry purchases?",
      answer: "GST (Goods and Services Tax) is calculated at 3% on the total value of gold jewelry purchases in India. This includes the metal value plus making charges. Our calculator automatically applies the correct GST rate based on your location and purchase type."
    },
    {
      question: "Why do metal prices change daily?",
      answer: "Metal prices fluctuate based on global market conditions, currency exchange rates, supply and demand, economic indicators, and geopolitical events. Our calculator fetches live rates to ensure you always have the most current pricing information for accurate calculations."
    },
    {
      question: "What are making charges and how are they calculated?",
      answer: "Making charges are the cost of crafting jewelry from raw metal. They can be calculated as a fixed amount per gram or as a percentage of the metal value. Our calculator supports both methods and automatically applies the charges based on your input, showing the impact on your final total."
    },
    {
      question: "Can I use this calculator for both buying and selling jewelry?",
      answer: "Yes! Our calculator is designed for both scenarios. When buying, it adds making charges and GST to give you the total cost. When selling, it calculates the pure metal value you'll receive. Simply select your mode and the calculator will adjust all calculations accordingly."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-medium text-gray-800 pr-4">{item.question}</span>
              {openItem === index ? (
                <ChevronUp className="text-yellow-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-yellow-600 flex-shrink-0" size={20} />
              )}
            </button>
            
            {openItem === index && (
              <div className="px-4 pb-4">
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
