import {Product} from '../types.ts';

export const mockProducts: Product[] = [
    { id: 1, name: 'Wireless Headphones', description: 'Over-ear, noise-cancelling.', price: 129.99, category: 'Bluetooth devices', imageUrl: 'https://placehold.co/300x200?text=Headphones' },
    { id: 2, name: 'Mechanical Keyboard', description: 'Tactile switches, compact layout.', price: 89.5, category: 'Computer accessories', imageUrl: 'https://placehold.co/300x200?text=Keyboard', featured: true },
    { id: 3, name: 'USB-C Hub', description: '7-in-1, 4K HDMI output.', price: 39.0, category: 'Connectors', imageUrl: 'https://placehold.co/300x200?text=Hub' },
];