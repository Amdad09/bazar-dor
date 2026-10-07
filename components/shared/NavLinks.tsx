import { getCategories } from "@/lib/api/categories";
import Link from "next/link";

const NavLinks = async () => {
    const categories = await getCategories();
  return (
      <div className="w-full justify-start flex gap-8">
          
          {categories.map(category => <Link href={`/categories/${category.id}`} key={category.id}><span>{category.icon}</span> <span className="font-semibold text-neutral-800">{ category.nameBn}</span></Link>)}
    </div>
  );
};

export default NavLinks;