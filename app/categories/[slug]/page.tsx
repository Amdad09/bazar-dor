import ProductCard from '@/components/products/ProductCard';
import Container from '@/components/ui/Container';
import { getCategories } from '@/lib/api/categories';
import { getCategoryProducts } from '@/lib/api/category';
import { banglaNumber } from '@/utils/bnNumber';
export const instant = false;
interface CategoryProductsPageProps {
    params: Promise<{ slug: string }>;
}
const CategoryProductsPage = async ({ params }: CategoryProductsPageProps) => {
    const { slug } = await params;
    const categories = await getCategories();
    const category = categories.find((category) => category.id === slug);
    const products = await getCategoryProducts(slug);
    console.log(category, products);

    return (
        <div className="bg-neutral-100 py-8">
            <Container>
                <div className="bg-white p-6 rounded-2xl border-neutral-300 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl">{category?.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800">
                                {category?.nameBn}
                            </h3>
                            <p className="text-neutral-600">
                                {banglaNumber(products.length)}টি পণ্যের আজকের
                                দাম ও পরিবর্তন
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border-neutral-300 mb-8">
                    <div className="flex gap-4 items-center justify-end">
                        <p className="text-neutral-600 font-medium">সাজান</p>
                        <select
                            defaultValue=""
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
                            <option value="" disabled>
                                সাজান
                            </option>

                            <option value="low-to-high">কম থেকে বেশি</option>

                            <option value="high-to-low">বেশি থেকে কম</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-lg pb-2">
                        পণ্যগুলো দেখানো হচ্ছে{' '}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryProductsPage;
