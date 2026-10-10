
import { getCategories } from '@/lib/api/categories';
import ActiveLinks from '../ui/ActiveLinks';
import ShowHeader from './ShowHeader';

const NavLinks = async () => {
    const categories = await getCategories();

    return (
        <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap ">
                {categories.map((category) => (
                    <ActiveLinks
                        href={`/categories/${category.id}`}
                        key={category.id}
                        className="shrink-0 px-3 py-1 sm:px-4 sm:py-1"
                    >
                        <span className="hidden lg:inline-block pr-1">
                            {category.icon}
                        </span>{' '}
                        <span className="font-semibold">
                            {category.nameBn}
                        </span>
                    </ActiveLinks>
                ))}
            </div>

            <div className="shrink-0">
                <a href="#header">
                    <ShowHeader />
                </a>
            </div>
        </div>
    );
};

export default NavLinks;