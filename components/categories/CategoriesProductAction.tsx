'use client';

import type { Product } from '@/types/product';
import { useState } from 'react';
import ProductCard from '../products/ProductCard';
import CardMotion from '../motion/CardMotion';

interface CategoriesProductActionProps {
    products: Product[];
}
const CategoriesProductAction = ({
    products,
}: CategoriesProductActionProps) => {
    const [sortedBy, setSortedBy] = useState('default');
    const sortedProducts = [...products].sort((a, b) => {
        if (sortedBy === 'low-to-high') {
            return a.today - b.today;
        }
        if (sortedBy === 'high-to-low') {
            return b.today - a.today;
        }
        return 0;
    });
    return (
        <>
            <div className="bg-white p-6 rounded-2xl border-neutral-300 mb-8">
                {/* <CategoriesProductAction products={ products} /> */}
                <div className="flex gap-4 items-center justify-end">
                    <p className="text-neutral-600 font-medium">সাজান</p>
                    <select
                        value={sortedBy}
                        onChange={(e) => setSortedBy(e.target.value)}
                        className="
        h-10 w-36
        rounded-lg
        border border-neutral-300
        bg-white
        px-3
        text-sm font-medium text-neutral-700
        outline-none
        cursor-pointer
        transition-colors duration-200
        hover:border-green-500
        focus:border-green-600
        focus:ring-2 focus:ring-green-100
    "
                    >
                        <option value="default" disabled>
                            ডিফল্ট
                        </option>

                        <option value="low-to-high">কম থেকে বেশি</option>

                        <option value="high-to-low">বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <div>
                <p className="font-bold text-lg pb-2">পণ্যগুলো দেখানো হচ্ছে </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product) => (
                        <CardMotion key={product.id}>
                            <ProductCard product={product} />
                        </CardMotion>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoriesProductAction;
