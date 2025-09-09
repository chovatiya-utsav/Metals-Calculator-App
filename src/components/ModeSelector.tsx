import React from 'react';
import { ShoppingCart, Coins } from 'lucide-react';

interface ModeSelectorProps {
  mode: 'buying' | 'selling';
  onModeChange: (mode: 'buying' | 'selling') => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onModeChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Mode</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onModeChange('buying')}
          className={`p-6 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
            mode === 'buying'
              ? 'border-green-500 bg-green-50 text-green-700'
              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
          }`}
        >
          <ShoppingCart size={24} />
          <div className="text-left">
            <div className="text-lg font-medium">Buying</div>
            <div className="text-sm opacity-75">Purchase jewelry items</div>
          </div>
        </button>
        <button
          onClick={() => onModeChange('selling')}
          className={`p-6 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
            mode === 'selling'
              ? 'border-orange-500 bg-orange-50 text-orange-700'
              : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
          }`}
        >
          <Coins size={24} />
          <div className="text-left">
            <div className="text-lg font-medium">Selling</div>
            <div className="text-sm opacity-75">Sell jewelry items</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModeSelector;