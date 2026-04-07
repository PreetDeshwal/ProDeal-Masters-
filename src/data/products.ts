export interface Product {
  id: number;
  name: string;
  category: string;
  duration: string;
  description: string;
  type?: 'career' | 'business' | 'sales' | 'ai';
  limitedStock?: boolean;
}

export const products: Product[] = [
  // ===================== CAREER PLANS =====================
  {
    id: 1,
    name: 'LinkedIn Career Plan',
    category: 'LinkedIn Plans',
    duration: '3 Months',
    description: 'Career development with job search features',
    type: 'career',
    limitedStock: true,
  },
  {
    id: 2,
    name: 'LinkedIn Career Plan',
    category: 'LinkedIn Plans',
    duration: '6 Months',
    description: 'Extended career growth features',
    type: 'career',
    limitedStock: true,
  },
  {
    id: 3,
    name: 'LinkedIn Career Plan',
    category: 'LinkedIn Plans',
    duration: '12 Months',
    description: 'Full year premium career access',
    type: 'career',
    limitedStock: true,
  },

  // ===================== BUSINESS PLANS =====================
  {
    id: 4,
    name: 'LinkedIn Business Plan',
    category: 'LinkedIn Plans',
    duration: '2 Months',
    description: 'Business account with networking tools',
    type: 'business',
    limitedStock: true,
  },
  {
    id: 5,
    name: 'LinkedIn Business Plan',
    category: 'LinkedIn Plans',
    duration: '3 Months',
    description: 'Team collaboration and business insights',
    type: 'business',
    limitedStock: true,
  },
  {
    id: 6,
    name: 'LinkedIn Business Plan',
    category: 'LinkedIn Plans',
    duration: '6 Months',
    description: 'Extended business growth tools',
    type: 'business',
    limitedStock: true,
  },
  {
    id: 7,
    name: 'LinkedIn Business Plan',
    category: 'LinkedIn Plans',
    duration: '12 Months',
    description: 'Annual business premium access',
    type: 'business',
    limitedStock: true,
  },

  // ===================== SALES NAVIGATOR =====================
  // Core
  {
    id: 8,
    name: 'Sales Navigator Core',
    category: 'LinkedIn Plans',
    duration: '2 Months',
    description: 'Lead generation and prospecting tools',
    type: 'sales',
    limitedStock: true,
  },
  {
    id: 9,
    name: 'Sales Navigator Core',
    category: 'LinkedIn Plans',
    duration: '3 Months',
    description: 'Extended access to core sales tools',
    type: 'sales',
    limitedStock: true,
  },
  {
    id: 10,
    name: 'Sales Navigator Core',
    category: 'LinkedIn Plans',
    duration: '6 Months',
    description: 'Half-year sales intelligence access',
    type: 'sales',
    limitedStock: true,
  },
  {
    id: 11,
    name: 'Sales Navigator Core',
    category: 'LinkedIn Plans',
    duration: '12 Months',
    description: 'Full-year access for sales professionals',
    type: 'sales',
    limitedStock: true,
  },

  // Advanced
  {
    id: 12,
    name: 'Sales Navigator Advanced',
    category: 'LinkedIn Plans',
    duration: '1 Month',
    description: 'Advanced sales intelligence tools',
    type: 'sales',
    limitedStock: true,
  },
  {
    id: 13,
    name: 'Sales Navigator Advanced',
    category: 'LinkedIn Plans',
    duration: '3 Months',
    description: 'Advanced tools for deep insights',
    type: 'sales',
    limitedStock: true,
  },
  {
    id: 14,
    name: 'Sales Navigator Advanced',
    category: 'LinkedIn Plans',
    duration: '6 Months',
    description: 'Extended advanced sales tools',
    type: 'sales',
    limitedStock: true,
  },
  {
    id: 15,
    name: 'Sales Navigator Advanced',
    category: 'LinkedIn Plans',
    duration: '12 Months',
    description: 'Full-year advanced sales suite',
    type: 'sales',
    limitedStock: true,
  },

  // ===================== AI TOOLS =====================
  {
    id: 16,
    name: 'Claude Pro',
    category: 'AI Tools',
    duration: '6 Months',
    description: 'Advanced AI assistant for productivity',
    type: 'ai',
    limitedStock: true,
  },

  {
    id: 17,
    name: 'ChatGPT Plus',
    category: 'AI Tools',
    duration: '1 Month',
    description: 'Access to GPT-4 with faster response times',
    type: 'ai',
    limitedStock: true,
  },

  {
    id: 18,
    name: 'Midjourney Pro',
    category: 'AI Tools',
    duration: '1 Month',
    description: 'Create stunning AI-generated artwork',
    type: 'ai',
    limitedStock: true,
  },
];

export const categories = [
  'All Products',
  'LinkedIn Plans',
  'AI Tools',
];