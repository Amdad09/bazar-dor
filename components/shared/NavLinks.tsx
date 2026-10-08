
import { getCategories } from '@/lib/api/categories';
import ActiveLinks from '../ui/ActiveLinks';

const NavLinks = async () => {
  const categories = await getCategories();
    return (
        <div className="w-full justify-start items-center flex gap-8">
        {categories.map((category) => (
              
                <ActiveLinks href={`/categories/${category.id}`} key={category.id}>
                    <span>{category.icon}</span>{' '}
                    <span className="font-semibold">
                        {category.nameBn}
                    </span>
                </ActiveLinks>
            ))}
        </div>
    );
};

export default NavLinks;
