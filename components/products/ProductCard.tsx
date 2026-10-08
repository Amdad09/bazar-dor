import type { Product } from '@/types/product';
import { banglaNumber } from '@/utils/bnNumber';
import Link from 'next/link';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';

interface ProductCardProps {
    product: Product;
}
type UnitsProps = {
    litre: string;
    kg: string;
    dozen: string;
    piece: string;
};

export const units:UnitsProps = {
    litre: 'লিটার',
    kg: 'কেজি',
    dozen: 'ডজন',
    piece: 'পিস',
};

export type Unit = keyof UnitsProps;

const ProductCard = ({ product }: ProductCardProps) => {
    const { image, nameBn, unit, today, change} = product;
    const { dir, pct } = change;
    let style = '';
    let icon = null;
    if (dir === 'up') {
        style = 'text-red-600 bg-red-500/10';
        icon = <FaCaretUp/>;
    } else if (dir === 'down') {
        style = 'text-green-500 bg-green-500/10';
        icon = <FaCaretDown />;
    } else {
        style = 'text-neutral-800 bg-neutral-700/10';
        icon = <FiMinus/>;
    }

    return (
        <Link href={`/products/${product.id}`} className="bg-white p-4 rounded-2xl border border-neutral-200">
            <div className="flex gap-2">
                <span className="bg-neutral-100 w-12 h-12 rounded-xl inline-flex justify-center items-center">
                    <span className="text-2xl">{image}</span>
                </span>
                <div>
                    <p className="font-semibold text-lg">{nameBn}</p>
                    <p className="text-neutral-400">প্রতি {units[unit]}</p>
                </div>
            </div>
            <div className="pt-4">
                <p>আজকের দাম</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg">
                        <span className="font-bold">{banglaNumber(today)}</span> টাকা
                    </p>
                    <p
                        className={`rounded-full px-2 py-0.1 flex justify-center items-center ${style}`}
                    >
                        <span className='top-8'>{icon}</span>
                        {banglaNumber(pct)}%
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
