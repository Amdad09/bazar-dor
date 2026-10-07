import type { Category } from "@/types/category";

export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories',
        { next: { revalidate: 60 } },
    );
    if (!res.ok) throw new Error('Categories data fetch failed');
    return res.json();
};
