import Link from 'next/link';
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5';

export default function NotFound() {
    return (
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-neutral-50 px-4">
            <div className="w-full max-w-lg text-center">
                {/* 404 Illustration */}
                <div className="mb-6 flex justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100">
                        <IoSearchOutline className="h-14 w-14 text-green-600" />
                    </div>
                </div>

                {/* Error Code */}
                <p className="text-7xl font-extrabold tracking-tight text-green-600">
                    404
                </p>

                {/* Heading */}
                <h1 className="mt-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
                    পৃষ্ঠা খুঁজে পাওয়া যায়নি!
                </h1>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
                    দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, এর
                    ঠিকানা পরিবর্তন হয়েছে অথবা পৃষ্ঠাটি আর উপলভ্য নেই।
                </p>

                {/* Home Button */}
                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-green-600 px-6 font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        <IoHomeOutline className="h-5 w-5" />
                        হোম পেজে ফিরে যান
                    </Link>
                </div>

                {/* Additional Text */}
                <p className="mt-6 text-sm text-neutral-400">
                    bazar-dor — সঠিক দামের সহজ সন্ধান।
                </p>
            </div>
        </main>
    );
}
