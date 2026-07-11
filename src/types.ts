export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string; // 'coffee' | 'bakery' | 'breakfast' | 'wine' | 'small-plates' | 'burgers'
  tags?: string[]; // 'טבעוני' | 'צמחוני' | 'ללא גלוטן' | 'מנת דגל' | 'בשרי'
  image?: string;
}

export interface Reservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  createdAt: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'morning' | 'evening' | 'interior' | 'pastries' | 'wine';
}

export interface InstagramPost {
  id: string;
  url: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
}
