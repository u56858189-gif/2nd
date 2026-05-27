import { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "c1", name: "Running Shoes", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1000" },
  { id: "c2", name: "Gym Wear", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" },
  { id: "c3", name: "Equipment", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" },
  { id: "c4", name: "Smart Watches", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=1000" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Aero Glide Pro",
    price: 189.99,
    category: "Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviews: 428,
    isNew: true,
    isBestSeller: true,
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["#EF4444", "#1F2937"],
    description: "Experience zero gravity. The Aero Glide Pro integrates advanced kinetic foam for unparalleled energy return and a futuristic translucent mesh upper."
  },
  {
    id: "p2",
    name: "Carbon Plate X",
    price: 249.99,
    category: "Running Shoes",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviews: 156,
    isNew: true,
    isBestSeller: false,
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["#1F2937", "#10B981"],
    description: "Designed for marathon elites. A full-length carbon fiber propulsion plate combined with maximum stack height for record-breaking speed."
  },
  {
    id: "p3",
    name: "Neon Zoom XT",
    price: 159.99,
    category: "Running Shoes",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000",
    rating: 4.7,
    reviews: 89,
    isNew: false,
    isBestSeller: false,
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    colors: ["#10B981", "#3B82F6"],
    description: "Electric aesthetics meet tactical performance. Built for agility with multi-directional traction nodes and a locked-in flywire fit."
  },
  {
    id: "p4",
    name: "Phantom Stealth",
    price: 199.99,
    category: "Running Shoes",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviews: 642,
    isNew: false,
    isBestSeller: true,
    sizes: ["US 9", "US 10", "US 11", "US 12"],
    colors: ["#0B0B0B", "#4B5563"],
    description: "Minimalist exterior, maximalist interior engine. The Phantom Stealth offers adaptive cushioning that hardens on impact and softens at rest."
  },
  {
    id: "p5",
    name: "Velocity Knit",
    price: 149.99,
    category: "Gym Wear",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    reviews: 210,
    isNew: false,
    isBestSeller: false,
    sizes: ["US 8", "US 9", "US 10"],
    colors: ["#EAB308", "#1F2937"],
    description: "Breathable engineered knit conforms mapping perfectly to your foot's natural expansion during intense training circuits."
  },
  {
    id: "p6",
    name: "Titanium Lift",
    price: 210.00,
    category: "Running Shoes",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviews: 112,
    isNew: true,
    isBestSeller: false,
    sizes: ["US 9", "US 10", "US 10.5", "US 11"],
    colors: ["#9CA3AF", "#F3F4F6"],
    description: "An immovable foundation for your heaviest sets. Flat, ultra-wide outsole with a titanium-reinforced heel block for absolute stability."
  }
];
