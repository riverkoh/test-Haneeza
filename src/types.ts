export type ProductCategory = 'handbags' | 'accessories' | 'footwear' | 'ready-to-wear' | 'jewelry';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  image: string;
  altText: string;
  isLimitedEdition?: boolean;
  isFeatured?: boolean;
  description: string;
  details: string[];
  craftsmanship: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface EditorialArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  coverImage: string;
  summary: string;
  paragraphs: string[];
  quote?: string;
  quoteAuthor?: string;
}

export type ActiveTab = 'home' | 'shop' | 'collections' | 'editorial' | 'about';
