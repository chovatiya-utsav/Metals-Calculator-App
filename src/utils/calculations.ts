import { JewelryItem, CalculatedItem, City } from '../types';
import { purityPercentage, GST_RATE } from '../data/rates';

export const calculateItemValue = (
  item: JewelryItem,
  city: City,
  mode: 'buying' | 'selling'
): CalculatedItem => {
  const baseRate = item.isGoldItem 
    ? city.rates.gold[item.carat] 
    : city.rates.silver;
  
  // Apply purity percentage for gold items
  const ratePerGram = item.isGoldItem 
    ? (baseRate * purityPercentage[item.carat]) / 100
    : baseRate;
  
  const subtotal = ratePerGram * item.weight;
  
  // Calculate making charges
  const makingChargeAmount = item.makingChargeType === 'percentage'
    ? (subtotal * item.makingCharges) / 100
    : item.makingCharges;
  
  // For selling, deduct making charges; for buying, add them
  const adjustedSubtotal = mode === 'buying' 
    ? subtotal + makingChargeAmount
    : subtotal - makingChargeAmount;
  
  // Calculate GST (only on buying)
  const gstAmount = mode === 'buying' ? (adjustedSubtotal * GST_RATE) / 100 : 0;
  
  const total = adjustedSubtotal + gstAmount;
  
  return {
    ...item,
    ratePerGram: Math.round(ratePerGram * 100) / 100,
    subtotal: Math.round(subtotal * 100) / 100,
    makingChargeAmount: Math.round(makingChargeAmount * 100) / 100,
    gstAmount: Math.round(gstAmount * 100) / 100,
    total: Math.round(total * 100) / 100
  };
};

export const calculateTotals = (calculatedItems: CalculatedItem[]) => {
  const subtotal = calculatedItems.reduce((sum, item) => sum + item.subtotal, 0);
  const totalMakingCharges = calculatedItems.reduce((sum, item) => sum + item.makingChargeAmount, 0);
  const gstAmount = calculatedItems.reduce((sum, item) => sum + item.gstAmount, 0);
  const grandTotal = calculatedItems.reduce((sum, item) => sum + item.total, 0);
  
  return {
    subtotal: Math.round(subtotal * 100) / 100,
    totalMakingCharges: Math.round(totalMakingCharges * 100) / 100,
    gstAmount: Math.round(gstAmount * 100) / 100,
    grandTotal: Math.round(grandTotal * 100) / 100
  };
};