import { City } from '../types';

export const statesAndCities = {
  'Maharashtra': [
    {
      id: 'mumbai',
      name: 'Mumbai',
      rates: {
        gold: {
          '24K': 6420,
          '22K': 5885,
          '18K': 4815
        },
        silver: 78
      }
    },
    {
      id: 'pune',
      name: 'Pune',
      rates: {
        gold: {
          '24K': 6410,
          '22K': 5875,
          '18K': 4805
        },
        silver: 77
      }
    },
    {
      id: 'nagpur',
      name: 'Nagpur',
      rates: {
        gold: {
          '24K': 6400,
          '22K': 5865,
          '18K': 4795
        },
        silver: 76
      }
    }
  ],
  'Delhi': [
    {
      id: 'delhi',
      name: 'Delhi',
      rates: {
        gold: {
          '24K': 6380,
          '22K': 5845,
          '18K': 4785
        },
        silver: 76
      }
    },
    {
      id: 'gurgaon',
      name: 'Gurgaon',
      rates: {
        gold: {
          '24K': 6385,
          '22K': 5850,
          '18K': 4790
        },
        silver: 76
      }
    },
    {
      id: 'noida',
      name: 'Noida',
      rates: {
        gold: {
          '24K': 6375,
          '22K': 5840,
          '18K': 4780
        },
        silver: 75
      }
    }
  ],
  'Gujarat': [
    {
      id: 'ahmedabad',
      name: 'Ahmedabad',
      rates: {
        gold: {
          '24K': 6400,
          '22K': 5865,
          '18K': 4800
        },
        silver: 77
      }
    },
    {
      id: 'surat',
      name: 'Surat',
      rates: {
        gold: {
          '24K': 6395,
          '22K': 5860,
          '18K': 4795
        },
        silver: 77
      }
    },
    {
      id: 'vadodara',
      name: 'Vadodara',
      rates: {
        gold: {
          '24K': 6390,
          '22K': 5855,
          '18K': 4790
        },
        silver: 76
      }
    }
  ],
  'Karnataka': [
    {
      id: 'bangalore',
      name: 'Bangalore',
      rates: {
        gold: {
          '24K': 6430,
          '22K': 5895,
          '18K': 4825
        },
        silver: 79
      }
    },
    {
      id: 'mysore',
      name: 'Mysore',
      rates: {
        gold: {
          '24K': 6425,
          '22K': 5890,
          '18K': 4820
        },
        silver: 78
      }
    }
  ],
  'Tamil Nadu': [
    {
      id: 'chennai',
      name: 'Chennai',
      rates: {
        gold: {
          '24K': 6440,
          '22K': 5905,
          '18K': 4835
        },
        silver: 80
      }
    },
    {
      id: 'coimbatore',
      name: 'Coimbatore',
      rates: {
        gold: {
          '24K': 6435,
          '22K': 5900,
          '18K': 4830
        },
        silver: 79
      }
    }
  ]
};

export const getAllCities = (): City[] => {
  const allCities: City[] = [];
  Object.values(statesAndCities).forEach(cities => {
    allCities.push(...cities);
  });
  return allCities;
};

export const purityPercentage = {
  '24K': 99.9,
  '22K': 91.6,
  '18K': 75.0
};

export const GST_RATE = 3; // 3% GST on jewelry