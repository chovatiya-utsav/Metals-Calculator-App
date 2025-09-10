import React from 'react';
import { Calculator } from 'lucide-react';

interface SummaryProps {
  mode: 'buying' | 'selling';
  subtotal: number;
  totalMakingCharges: number;
  gstAmount: number;
  grandTotal: number;
}

const Summary: React.FC<SummaryProps> = ({
  mode,
  subtotal,
  totalMakingCharges,
  gstAmount,
  grandTotal
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <Calculator className="text-yellow-600" size={20} />
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Summary</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Making Charges:</span>
          <span className={mode === 'buying' ? 'text-red-600' : 'text-green-600'}>
            {mode === 'buying' ? '+' : '-'}₹{totalMakingCharges.toFixed(2)}
          </span>
        </div>
        
        {mode === 'buying' && gstAmount > 0 && (
          <div className="flex justify-between text-gray-600">
            <span>GST (3%):</span>
            <span className="text-red-600">+₹{gstAmount.toFixed(2)}</span>
          </div>
        )}
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800">
          <span>{mode === 'buying' ? 'Total Amount:' : 'You Will Receive:'}</span>
          <span className={`${mode === 'buying' ? 'text-red-600' : 'text-green-600'}`}>
            ₹{grandTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;