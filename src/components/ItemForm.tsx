import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { JewelryItem } from '../types';

interface ItemFormProps {
  onAddItem: (item: Omit<JewelryItem, 'id'>, mode: 'buying' | 'selling') => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    type: '',
    carat: '22K' as '24K' | '22K' | '18K',
    weight: 0,
    hallmark: '916',
    makingCharges: 0,
    makingChargeType: 'percentage' as 'fixed' | 'percentage',
    isGoldItem: true
  });
  const [mode, setMode] = useState<'buying' | 'selling'>('buying');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type || formData.weight <= 0) return;
    
    onAddItem(formData, mode);
    setFormData({
      type: '',
      carat: '22K',
      weight: 0,
      hallmark: '916',
      makingCharges: 0,
      makingChargeType: 'percentage',
      isGoldItem: true
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Jewelry Item</h3>
      
      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setMode('buying')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
              mode === 'buying'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
            }`}
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              {mode === 'buying' && (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="text-left">
              <div className="text-lg font-medium">Buying</div>
              <div className="text-sm opacity-75">Purchase jewelry items</div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setMode('selling')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
              mode === 'selling'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
            }`}
          >
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              {mode === 'selling' && (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="text-left">
              <div className="text-lg font-medium">Selling</div>
              <div className="text-sm opacity-75">Sell jewelry items</div>
            </div>
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Type
            </label>
            <input
              type="text"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              placeholder="e.g., Ring, Necklace, Bracelet"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Metal Type
            </label>
            <select
              value={formData.isGoldItem ? 'gold' : 'silver'}
              onChange={(e) => setFormData({ 
                ...formData, 
                isGoldItem: e.target.value === 'gold',
                hallmark: e.target.value === 'gold' ? '916' : '999'
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
          </div>

          {formData.isGoldItem && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carat
              </label>
              <select
                value={formData.carat}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  carat: e.target.value as '24K' | '22K' | '18K',
                  hallmark: e.target.value === '24K' ? '999' : e.target.value === '22K' ? '916' : '750'
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="24K">24K</option>
                <option value="22K">22K</option>
                <option value="18K">18K</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight (grams)
            </label>
            <input
              type="number"
              value={formData.weight || ''}
              onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) || 0 })}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hallmark
            </label>
            <input
              type="text"
              value={formData.hallmark}
              onChange={(e) => setFormData({ ...formData, hallmark: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Making Charges
            </label>
            <input
              type="number"
              value={formData.makingCharges || ''}
              onChange={(e) => setFormData({ ...formData, makingCharges: parseFloat(e.target.value) || 0 })}
              placeholder="0"
              step="0.01"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Charge Type
            </label>
            <select
              value={formData.makingChargeType}
              onChange={(e) => setFormData({ ...formData, makingChargeType: e.target.value as 'fixed' | 'percentage' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="percentage">Percentage (%)</option>
              <option value="fixed">Fixed Amount (₹)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <Plus size={16} />
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ItemForm;