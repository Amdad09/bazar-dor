
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface ActiveLinksProps {
    href: string;
    children: ReactNode;
    className?: string;
}

const ActiveLinks = ({
    href,
    children,
    className = '',
}: ActiveLinksProps) => {
    const pathname = usePathname();
    const active = href === pathname;

    return (
        <Link
            className={`
                group relative inline-flex items-center rounded-lg
                text-sm sm:text-base
                transition-all duration-200 ease-out
                ${
                    active
                        ? 'bg-[#05893E] text-[#F3FBF4] shadow-sm'
                        : 'text-neutral-800 hover:bg-[#EAF7EE] '
                }
                ${className}
            `}
            href={href}
        >
            <span
                className="
            relative
            after:absolute
            after:-bottom-1
            after:left-0
            after:h-0.5
            after:w-0
            after:bg-[#05893E]
            after:transition-all
            after:duration-500
            after:ease-in-out
            group-hover:after:w-full
        "
            >
                {children}
            </span>
        </Link>
    );
};

export default ActiveLinks;