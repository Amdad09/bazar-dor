'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
interface ActiveLinksProps {
    href: string;
    children: ReactNode;
    className?: string;
}
const ActiveLinks = ({ href, children, className='' }: ActiveLinksProps) => {
    const pathname = usePathname();
    const active = href === pathname;
    return (
        <Link
            className={`
        rounded-lg px-4 py-1.5
        transition-all duration-200 ease-out
        ${
            active
                ? 'bg-[#05893E] text-[#F3FBF4] shadow-sm'
                : 'text-neutral-800 hover:bg-[#EAF7EE] hover:text-[#05893E]'
        }
        ${className}
    `}
            href={href}
        >
            {children}
        </Link>
    );
};

export default ActiveLinks;
