import CategoriesProductAction from '@/components/categories/CategoriesProductAction';
import Container from '@/components/ui/Container';
import { getCategories } from '@/lib/api/categories';
import { getCategoryProducts } from '@/lib/api/category';

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
        <div className="py-8">
            <Container>
                <div className="bg-white p-6 rounded-2xl border-neutral-300 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="text-4xl bg-green-50 p-4 rounded-xl">
                            {category?.icon}
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-neutral-800">
                                {category?.nameBn}
                            </h3>
                            <p className="text-neutral-600">
                                এই ক্যাটাগরির
                                সকল পণ্যের বাজারদর
                            </p>
                        </div>
                    </div>
                </div>
                <CategoriesProductAction products={products} />
            </Container>
        </div>
    );
};

export default CategoryProductsPage;
