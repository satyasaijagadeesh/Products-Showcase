import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    description: "Premium over-ear headphones with industry-leading noise cancellation, 30-hour battery life, and crystal-clear audio. Perfect for immersive listening experiences whether you're commuting, working, or relaxing.",
    price: 349,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 2847
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Advanced fitness tracking, health monitoring, and seamless connectivity. Features include heart rate monitoring, GPS, sleep tracking, and a stunning always-on display that lasts up to 7 days.",
    price: 429,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 1923
  },
  {
    id: "3",
    name: "Portable Bluetooth Speaker",
    description: "Compact yet powerful speaker with 360-degree sound, waterproof design (IP67), and 24-hour playtime. Take your music anywhere with this rugged, travel-friendly companion.",
    price: 149,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 3156
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with hot-swappable switches, RGB backlighting, and aircraft-grade aluminum frame. Designed for both gaming and professional typing with customizable key mappings.",
    price: 179,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 1456
  },
  {
    id: "5",
    name: "Wireless Earbuds",
    description: "True wireless earbuds with active noise cancellation, transparency mode, and premium sound quality. Features include touch controls, voice assistant support, and 8 hours of playback.",
    price: 199,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.4,
    reviews: 2341
  },
  {
    id: "6",
    name: "4K Webcam",
    description: "Professional-grade webcam with 4K resolution, auto-focus, and built-in ring light. Perfect for streaming, video calls, and content creation with natural skin tones and low-light performance.",
    price: 199,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 876
  },
  {
    id: "7",
    name: "USB-C Hub",
    description: "11-in-1 USB-C hub with 4K HDMI, USB 3.0 ports, SD card reader, and 100W power delivery. Expand your laptop's connectivity with this sleek, portable docking solution.",
    price: 79,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 1234
  },
  {
    id: "8",
    name: "Fitness Tracker Band",
    description: "Slim fitness band with heart rate monitoring, sleep tracking, and 14-day battery life. Water-resistant design with customizable watch faces and smartphone notifications.",
    price: 99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.2,
    reviews: 3421
  },
  {
    id: "9",
    name: "Wireless Charging Pad",
    description: "Fast wireless charger compatible with all Qi-enabled devices. Features intelligent temperature control, foreign object detection, and a sleek minimalist design.",
    price: 49,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.4,
    reviews: 2156
  },
  {
    id: "10",
    name: "Studio Monitor Headphones",
    description: "Reference-quality studio headphones with flat frequency response, comfortable velour earpads, and detachable cable. Ideal for mixing, mastering, and critical listening.",
    price: 299,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 567
  },
  {
    id: "11",
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium audio, built-in voice assistant, and smart home hub functionality. Control your lights, thermostat, and more with just your voice.",
    price: 129,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 1876
  },
  {
    id: "12",
    name: "Ergonomic Mouse",
    description: "Vertical ergonomic mouse designed to reduce wrist strain. Features adjustable DPI, programmable buttons, and long-lasting rechargeable battery for all-day comfort.",
    price: 89,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 943
  }
];

export const categories = ["All", "Audio", "Wearables", "Accessories"];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  );
}
