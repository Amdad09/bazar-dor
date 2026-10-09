import CategoriesProductAction from '@/components/categories/CategoriesProductAction';
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
                <CategoriesProductAction products={products}/>
            </Container>
        </div>
    );
};

export default CategoryProductsPage;
