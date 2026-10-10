import { getProducts } from "@/lib/api/products";
import ProductCard from "./ProductCard";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import CardMotion from "../motion/CardMotion";

const AllProducts = async () => {
    const products = await getProducts();

    const cheapPorducts = products.filter(product => product?.change?.dir === 'down');
    const cheapSorted = [...cheapPorducts].sort((a, b) => a.change?.pct - b.change?.pct)
    
    const expensivePorducts = products.filter(product => product?.change?.dir === 'up');
    const expensiveSorted = [...expensivePorducts].sort((a,b)=> b.change?.pct - a.change?.pct)

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
                      বাজারের সর্বোচ্চমূল্যের ৬ টি পণ্য দেখানো হচ্ছে
                  </p>
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
              <div className="pt-12 pb-4">
                  <h2 className="font-bold text-xl flex gap-2 items-center">
                      <FaCaretDown color="green" /> আজ দাম কমেছে
                  </h2>
                  <p className="text-neutral-500">
                      বাজারের সল্পমূল্যের ৬ টি পণ্য দেখানো হচ্ছে
                  </p>
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
              <div className="pt-12 pb-4">
                  <h2 className="font-bold text-xl">সব পণ্য</h2>
                  <p className="text-neutral-500">
                      মোট {products.length}টি পণ্য দেখানো হচ্ছে
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