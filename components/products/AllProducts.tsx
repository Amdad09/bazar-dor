import { getProducts } from "@/lib/api/products";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
    const products = await getProducts();
  return (
      <div className="">
          <div className="pt-8">
              <h2 className="font-bold text-lg">সব পণ্য</h2>
              <p className="text-neutral-500">মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => <ProductCard key={product.id} product={ product} />)}
          </div>
      </div>
  );
};

export default AllProducts;