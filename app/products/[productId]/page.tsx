import { getProduct } from "@/lib/api/product";
export const instant = false;
interface ProductDetailsProps{
    params: Promise<{productId: string}>
}
const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const { productId } = await params;
    const product = await getProduct(productId);
    console.log(product);
  return (
    <div>
        ProductDetails
    </div>
  );
};

export default ProductDetails;