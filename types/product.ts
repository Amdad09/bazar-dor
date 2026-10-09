
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

export type UnitsProps = {
    litre: string;
    kg: string;
    dozen: string;
    piece: string;
};

export const units: UnitsProps = {
    litre: 'লিটার',
    kg: 'কেজি',
    dozen: 'ডজন',
    piece: 'পিস',
};

export type Unit = keyof UnitsProps;