import type { Unit } from "@/components/products/ProductCard";

export interface Market {
    division: string;
    market: string;
    max: number;
    min: number;
}

export interface Product {
    category: string;
    categoryIcon: string;
    categoryNameBn: string;
    change: { dir: 'down' | 'up' | 'flat'; pct: number };
    id: number;
    image: string;
    lastMonth: number;
    lastWeek: number;
    markets: Market[];
    nameBn: string;
    slug: string;
    today: number;
    unit: Unit;
    yesterday: number;
}
