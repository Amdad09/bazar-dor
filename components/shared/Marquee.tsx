
import { getProducts } from '@/lib/api/products';
import { units } from '@/types/product';
import { banglaNumber } from '@/utils/bnNumber';
import Link from 'next/link';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import MarqueeText from 'react-marquee-text';
import Container from '../ui/Container';

const Marquee = async () => {
    const products = await getProducts();

    if (!products?.length) return null;

    return (
        <div className="hidden w-full border-b border-green-100 bg-white md:block">
            <Container>
                <div className="flex h-12 items-center gap-4">
                    {/* Ticker label */}
                    <div className="flex shrink-0 items-center gap-2 border-r border-neutral-200 pr-4">
                        <span className="relative flex size-2.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500/40" />
                            <span className="relative inline-flex size-2.5 rounded-full bg-green-600" />
                        </span>

                        <span className="whitespace-nowrap text-base font-bold tracking-tight text-neutral-900">
                            বাজারদর
                        </span>
                    </div>

                    {/* Moving product prices */}
                    <div className="min-w-0 flex-1 overflow-hidden">
                        <MarqueeText
                            direction="right"
                            duration={10}
                            pauseOnHover
                            className="w-full"
                        >
                            {products.map((product) => {
                                const {
                                    image,
                                    nameBn,
                                    unit,
                                    today,
                                    change,
                                    id,
                                } = product;

                                const { dir, pct } = change;

                                const isUp = dir === 'up';
                                const isDown = dir === 'down';

                                const changeStyle = isUp
                                    ? 'text-red-700'
                                    : isDown
                                      ? 'text-green-700'
                                      : 'text-neutral-600';

                                const ChangeIcon = isUp
                                    ? FaCaretUp
                                    : isDown
                                      ? FaCaretDown
                                      : FiMinus;

                                return (
                                    <span
                                        key={id}
                                        className="inline-flex items-center gap-3 px-3"
                                    >
                                        <span className="text-sm text-neutral-300">
                                            •
                                        </span>

                                        <Link
                                            href={`/products/${id}`}
                                            className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-200 hover:bg-green-50"
                                        >
                                            <span className="text-lg">
                                                {image}
                                            </span>

                                            <span className="whitespace-nowrap text-sm font-bold tracking-tight text-neutral-800 transition-colors group-hover:text-green-700">
                                                {nameBn}
                                            </span>

                                            <span className="whitespace-nowrap text-base font-bold tabular-nums tracking-tight text-neutral-950">
                                                {banglaNumber(today)}
                                                <span className="ml-1 font-semibold text-neutral-700">
                                                    টাকা
                                                </span>
                                            </span>

                                            <span className="whitespace-nowrap text-sm font-medium text-neutral-500">
                                                / {units[unit]}
                                            </span>

                                            <span
                                                className={`inline-flex items-center gap-0.5 whitespace-nowrap text-sm font-bold tabular-nums ${changeStyle}`}
                                            >
                                                <ChangeIcon className="size-4" />
                                                {banglaNumber(pct)}%
                                            </span>
                                        </Link>
                                    </span>
                                );
                            })}
                        </MarqueeText>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Marquee;
