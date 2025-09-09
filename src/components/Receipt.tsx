import React from 'react';
import { Printer, Download } from 'lucide-react';
import { Receipt as ReceiptType } from '../types';

interface ReceiptProps {
  receipt: ReceiptType;
  onPrint: () => void;
}

const Receipt: React.FC<ReceiptProps> = ({ receipt, onPrint }) => {
  const handleDownload = () => {
    const element = document.getElementById('receipt-content');
    if (element) {
      const printContent = element.innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Receipt</h3>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <Download size={16} />
            Download
          </button>
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <Printer size={16} />
            Print
          </button>
        </div>
      </div>

      <div id="receipt-content" className="print:p-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Jewelry Store</h1>
          <p className="text-gray-600">Premium Jewelry Collection</p>
          <hr className="my-4" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p><strong>Receipt No:</strong> {receipt.receiptNumber}</p>
            <p><strong>Date:</strong> {receipt.date}</p>
            <p><strong>Mode:</strong> {receipt.mode === 'buying' ? 'Purchase' : 'Sale'}</p>
          </div>
          <div>
            <p><strong>City:</strong> {receipt.city}</p>
            <p><strong>Items:</strong> {receipt.items.length}</p>
          </div>
        </div>

        <table className="w-full border-collapse border border-gray-300 text-sm mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1 text-left">Item</th>
              <th className="border border-gray-300 px-2 py-1 text-right">Weight(g)</th>
              <th className="border border-gray-300 px-2 py-1 text-right">Rate/g</th>
              <th className="border border-gray-300 px-2 py-1 text-right">Subtotal</th>
              <th className="border border-gray-300 px-2 py-1 text-right">Making</th>
              {receipt.mode === 'buying' && (
                <th className="border border-gray-300 px-2 py-1 text-right">GST</th>
              )}
              <th className="border border-gray-300 px-2 py-1 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {receipt.items.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-2 py-1">
                  {item.type}<br />
                  <small className="text-gray-600">
                    {item.isGoldItem ? `${item.carat} Gold` : 'Silver'} | {item.hallmark}
                  </small>
                </td>
                <td className="border border-gray-300 px-2 py-1 text-right">{item.weight}</td>
                <td className="border border-gray-300 px-2 py-1 text-right">₹{item.ratePerGram.toFixed(2)}</td>
                <td className="border border-gray-300 px-2 py-1 text-right">₹{item.subtotal.toFixed(2)}</td>
                <td className="border border-gray-300 px-2 py-1 text-right">
                  {receipt.mode === 'buying' ? '+' : '-'}₹{item.makingChargeAmount.toFixed(2)}
                </td>
                {receipt.mode === 'buying' && (
                  <td className="border border-gray-300 px-2 py-1 text-right">₹{item.gstAmount.toFixed(2)}</td>
                )}
                <td className="border border-gray-300 px-2 py-1 text-right font-medium">₹{item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right space-y-2 text-sm">
          <p>Subtotal: ₹{receipt.subtotal.toFixed(2)}</p>
          <p>Making Charges: {receipt.mode === 'buying' ? '+' : '-'}₹{receipt.totalMakingCharges.toFixed(2)}</p>
          {receipt.mode === 'buying' && receipt.gstAmount > 0 && (
            <p>GST (3%): +₹{receipt.gstAmount.toFixed(2)}</p>
          )}
          <hr className="my-2" />
          <p className="text-lg font-bold">
            {receipt.mode === 'buying' ? 'Total Amount' : 'Amount Payable'}: ₹{receipt.grandTotal.toFixed(2)}
          </p>
        </div>

        <div className="mt-6 text-center text-xs text-gray-600">
          <p>Thank you for your business!</p>
          <p>Visit us again for premium jewelry collection</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;