import { getProducts } from "@/lib/api/products";
import ProductCard from "./ProductCard";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const AllProducts = async () => {
    const products = await getProducts();
    const cheapPorducts = products.filter(product => product?.change?.dir === 'down');
    const expensivePorducts = products.filter(product => product?.change?.dir === 'up');
  return (
      <div className="">
          {/* expensive products */}
          <div>
              <div className="pt-8 pb-4">
                  <h2 className="font-bold text-xl flex gap-2 items-center">
                      <FaCaretUp color="red" />
                      আজ দাম বেড়েছে
                  </h2>
                  <p className="text-neutral-500">
                      মোট {expensivePorducts.length}টি পণ্য দেখানো হচ্ছে
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expensivePorducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
          {/* expensive products */}
          <div>
              <div className="pt-8 pb-4">
                  <h2 className="font-bold text-xl flex gap-2 items-center">
                      <FaCaretDown color="green"/> আজ দাম কমেছে
                  </h2>
                  <p className="text-neutral-500">
                      মোট {cheapPorducts.length}টি পণ্য দেখানো হচ্ছে
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cheapPorducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>

          {/* all products */}
          <div>
              <div className="pt-8 pb-4">
                  <h2 className="font-bold text-lg">সব পণ্য</h2>
                  <p className="text-neutral-500">
                      মোট {products.length}টি পণ্য দেখানো হচ্ছে
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </div>
      </div>
  );
};

export default AllProducts;