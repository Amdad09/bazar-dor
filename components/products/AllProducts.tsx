import { getProducts } from '@/lib/api/products';
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io';
import CardMotion from '../motion/CardMotion';
import ProductCard from './ProductCard';

const AllProducts = async () => {
    const products = await getProducts();

    const cheapPorducts = products.filter(
        (product) => product?.change?.dir === 'down',
    );
    const cheapSorted = [...cheapPorducts].sort(
        (a, b) => a.change?.pct - b.change?.pct,
    );

    const expensivePorducts = products.filter(
        (product) => product?.change?.dir === 'up',
    );
    const expensiveSorted = [...expensivePorducts].sort(
        (a, b) => b.change?.pct - a.change?.pct,
    );

    return (
        <div className="pb-12: md:pb-16">
            {/* expensive products */}
            <div>
                <div className="pt-8 pb-4 flex gap-2 items-start">
                    <span className="bg-red-600/10 p-3 rounded-2xl text-2xl font-bold">
                        <IoMdTrendingUp color="red" />
                    </span>
                    <div>
                        <h2 className="font-bold text-2xl flex gap-2 items-center">
                            আজ দাম বেড়েছে{' '}
                            <span className="text-red-600">▲</span>
                        </h2>
                        <p className="text-neutral-500">
                            আজকের সর্বোচ্চ মূল্যবৃদ্ধির ৬টি পণ্য
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {expensiveSorted.slice(0, 6).map((product) => (
                        <CardMotion key={product.id}>
                            <ProductCard product={product} />
                        </CardMotion>
                    ))}
                </div>
            </div>
            {/* cheap products */}
            <div>
                <div className="pt-12 md:pt-16 pb-4 flex gap-2 items-start">
                    <span className="bg-green-600/10 p-3 rounded-2xl text-2xl font-bold">
                        <IoMdTrendingDown color="green" />
                    </span>
                    <div>
                        <h2 className="font-bold text-2xl flex gap-2 items-center">
                            আজ দাম কমেছে{' '}
                            <span className="text-green-600">▼</span>
                        </h2>
                        <p className="text-neutral-500">
                            আজকের সর্বোচ্চ মূল্যহ্রাসের ৬টি পণ্য
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cheapSorted.slice(0, 6).map((product) => (
                        <CardMotion key={product.id}>
                            <ProductCard product={product} />
                        </CardMotion>
                    ))}
                </div>
            </div>

            {/* all products */}
            <div id="all-products">
                <div className="pt-12 md:pt-16 pb-4">
                    <p className='text-green-500 leading-2'>আমাদের পণ্যসমূহ</p>
                    <h2 className="font-bold text-2xl pt-2">সব পণ্য</h2>
                    <p className="text-neutral-500">
                        আপনার প্রয়োজনীয় নিত্যপ্রয়োজনীয় সকল পণ্যের আজকের
                        বাজারদর এক জায়গায়। বিস্তারিত জানতে যেকোনো পণ্যে ক্লিক
                        করুন।
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <CardMotion key={product.id}>
                            <ProductCard product={product} />
                        </CardMotion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
