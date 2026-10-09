
import { getCategories } from '@/lib/api/categories';
import ActiveLinks from '../ui/ActiveLinks';
import ShowHeader from './ShowHeader';

const NavLinks = async () => {
  const categories = await getCategories();
    return (
        <div className="w-full justify-between items-center flex gap-8">
            <div className='flex items-center'>
                {categories.map((category) => (
                    <ActiveLinks
                        href={`/categories/${category.id}`}
                        key={category.id}
                    >
                        <span>{category.icon}</span>{' '}
                        <span className="font-semibold">{category.nameBn}</span>
                    </ActiveLinks>
                ))}
            </div>
            <a href='#header'>
                <ShowHeader/>
            </a>
        </div>
    );
};

export default NavLinks;
