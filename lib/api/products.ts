import type { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products',
        { next: { revalidate: 60 } },
    );
    if (!res.ok) throw new Error("Products fetch failed!");
    return res.json();
};
