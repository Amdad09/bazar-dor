import type { Product } from "@/types/product";

export const getCategoryProducts = async (slug: string): Promise<Product[]> => {
    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
        { next: { revalidate: 60 } },
    );
    return res.json();
};
