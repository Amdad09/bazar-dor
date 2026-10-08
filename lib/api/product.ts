import type { Product } from "@/types/product";

export const getProduct = async (id:string): Promise<Product>=> {
    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${id}`,{next: {revalidate: 60}}
    );
    if (!res.ok) throw new Error('Failed to fetch Product ');
    return res.json();
};