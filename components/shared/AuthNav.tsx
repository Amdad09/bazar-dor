'use client';

import Link from 'next/link';
import Button from '../ui/Button';
import { signOut, useSession } from '@/lib/auth-client';
import { toast } from 'sonner';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const AuthNav = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    if (isPending) return <div className="h-10 w-32" />;
    const name = session?.user?.name;
    const email = session?.user?.email

    const x = name?.split(' ');
    // if (!x) throw new Error('Invalid name');
    // if (x[0].length > 2) userName = x[0];

    if (!session?.user || !x) {
        return (
            <div className="flex items-center gap-3">
                <Link className="font-bold" href="/sign-in">
                    সাইন ইন
                </Link>
                <Link href="/sign-up">
                    <Button>সাইন আপ</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#05893E] text-md font-semibold uppercase text-white shadow-sm">
                {(x?.[0]?.length > 2
                    ? x[0][0]
                    : (x?.[1]?.[0] ?? x?.[0]?.[0] ?? 'U')
                ).toUpperCase()}
            </span>
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center cursor-pointer font-bold"
                >
                    <span className="text-md font-bold text-neutral-700">
                        {x[0].length > 2 ? x[0] : x[1]}
                    </span>{' '}
                    <span>
                        <IoMdArrowDropdown />
                    </span>
                </div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content z-50 mt-2 w-auto rounded-box bg-base-100 p-4 shadow-lg"
                >
                    <li className="">
                        <span className="font-bold text-neutral-600 text-base leading-none hover:bg-white cursor-default">
                            {name}
                        </span>
                        <span className="leading-none hover:bg-white cursor-default">
                            {email}
                        </span>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className="leading-tight pt-3 text-base"
                        >
                            <span className="text-blue-300">
                                <BsFillPersonFill />
                            </span>{' '}
                            আমার প্রোফাইল
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="text-red-500 leading-tight text-base"
                            onClick={async () => {
                                await signOut();
                                router.push('/');
                                toast.success('সাইন আউট সফল হয়েছে');
                            }}
                        >
                            <span>
                                <IoReturnDownBackOutline />
                            </span>
                            সাইন আউট
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthNav;
