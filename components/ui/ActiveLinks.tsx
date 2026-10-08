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
            className={`${active ? 'bg-[#05893E] text-[#F3FBF4] px-4 py-1 rounded-lg' : 'text-neutral-800'} ${className}`}
            href={href}
        >
            {children}
        </Link>
    );
};

export default ActiveLinks;
