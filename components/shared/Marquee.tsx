import { getProducts } from '@/lib/api/products';
import { units } from '@/types/product';
import { banglaNumber } from '@/utils/bnNumber';
import Link from 'next/link';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import MarqueeText from 'react-marquee-text';

const Marquee = async () => {
    const products = await getProducts();

    return (
        <MarqueeText direction='right' duration={10} className='hidden md:inline-block'>
            {products.map((product) => {
                const { image, nameBn, unit, today, change, id } = product;
                const { dir, pct } = change;

                let style = '';
                let icon = null;

                if (dir === 'up') {
                    style = 'text-red-600 bg-red-500/10';
                    icon = <FaCaretUp />;
                } else if (dir === 'down') {
                    style = 'text-green-600 bg-green-500/10';
                    icon = <FaCaretDown />;
                } else {
                    style = 'text-neutral-800 bg-neutral-700/10';
                    icon = <FiMinus />;
                }

                return (
                    
                    <Link href={`/products/${id}`}
                        key={id}
                        className="inline-flex items-center gap-2 px-4 hover:underline border-b border-neutral-200"
                    >
                        <span>{image}</span>
                        <span className="font-semibold text-neutral-800">
                            {nameBn}
                        </span>
                        <span>{banglaNumber(today)}টাকা</span>
                        <span className="text-sm text-neutral-500">
                            / {units[unit]}
                        </span>
                        <span
                            className={`inline-flex items-center gap-1 rounded px-2 py-1.5 ${style} bg-none`}
                        >
                            {icon}
                            {banglaNumber(pct)}%
                        </span>
                    </Link>
                );
            })}
        </MarqueeText>
    );
};

export default Marquee;
