import React from 'react';
import { Trash2, Edit } from 'lucide-react';
import { CalculatedItem } from '../types';

interface ItemListProps {
  items: CalculatedItem[];
  mode: 'buying' | 'selling';
  onRemoveItem: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, mode, onRemoveItem }) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <p className="text-gray-500">No items added yet. Add your first jewelry item above.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 sm:mb-6">
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-b">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          {mode === 'buying' ? 'Items to Purchase' : 'Items to Sell'}
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Details
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rate/Gram
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subtotal
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Making
              </th>
              {mode === 'buying' && (
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GST
                </th>
              )}
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <div className="text-xs sm:text-sm font-medium text-gray-900">{item.type}</div>
                  <div className="text-xs text-gray-500">
                    {item.isGoldItem ? `${item.carat} Gold` : 'Silver'} | {item.weight}g | {item.hallmark}
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  ₹{item.ratePerGram.toFixed(2)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  ₹{item.subtotal.toFixed(2)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  {mode === 'buying' ? '+' : '-'}₹{item.makingChargeAmount.toFixed(2)}
                  <div className="text-xs text-gray-500">
                    ({item.makingCharges}{item.makingChargeType === 'percentage' ? '%' : ' ₹'})
                  </div>
                </td>
                {mode === 'buying' && (
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    ₹{item.gstAmount.toFixed(2)}
                  </td>
                )}
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                  ₹{item.total.toFixed(2)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-900 transition-colors duration-200 p-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;