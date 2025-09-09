export interface City {
  id: string;
  name: string;
  rates: {
    gold: {
      '24K': number;
      '22K': number;
      '18K': number;
    };
    silver: number;
  };
}

export interface JewelryItem {
  id: string;
  type: string;
  carat: '24K' | '22K' | '18K';
  weight: number;
  hallmark: string;
  makingCharges: number;
  makingChargeType: 'fixed' | 'percentage';
  isGoldItem: boolean;
}

export interface CalculatedItem extends JewelryItem {
  ratePerGram: number;
  subtotal: number;
  makingChargeAmount: number;
  gstAmount: number;
  total: number;
}

export interface Receipt {
  mode: 'buying' | 'selling';
  city: string;
  items: CalculatedItem[];
  subtotal: number;
  totalMakingCharges: number;
  gstAmount: number;
  grandTotal: number;
  date: string;
  receiptNumber: string;
}