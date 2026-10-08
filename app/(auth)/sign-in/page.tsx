'use client';

import { Eye, EyeSlash } from '@gravity-ui/icons';
import { useState } from 'react';

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    InputGroup,
} from '@heroui/react';
import Container from '@/components/ui/Container';
import PrimaryButton from '@/components/ui/Button';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function SignInForm() {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { name, email, password } = Object.fromEntries(
            formData.entries(),
        ) as Record<string, string>;

        console.log(name, email, password);
    };

    return (
        <section className="min-h-[calc(100vh-64px)] bg-neutral-50">
            <Container className="flex justify-center py-12 md:py-16 lg:py-20">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
                            সাইন ইন করুন
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে
                            অ্যাকাউন্টে ঢুকুন।
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                        <Form
                            className="flex w-full flex-col gap-5"
                            onSubmit={onSubmit}
                        >
                           

                            {/* Email */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                            value,
                                        )
                                    ) {
                                        return 'সঠিক ইমেইল ঠিকানা লিখুন';
                                    }

                                    return null;
                                }}
                            >
                                <Label className="mb-1.5 font-medium text-neutral-800">
                                    ইমেইল
                                </Label>

                                <Input
                                    placeholder="আপনার ইমেইল লিখুন"
                                    className="h-11"
                                />

                                <FieldError />
                            </TextField>

                            {/* Password */}
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return 'পাসওয়ার্ডে কমপক্ষে ৮টি অক্ষর থাকতে হবে';
                                    }

                                    if (!/[A-Z]/.test(value)) {
                                        return 'কমপক্ষে ১টি বড় হাতের অক্ষর থাকতে হবে';
                                    }

                                    if (!/[0-9]/.test(value)) {
                                        return 'কমপক্ষে ১টি সংখ্যা থাকতে হবে';
                                    }

                                    return null;
                                }}
                            >
                                <Label className="mb-1.5 font-medium text-neutral-800">
                                    পাসওয়ার্ড
                                </Label>

                                <InputGroup className="h-11">
                                    <InputGroup.Input
                                        placeholder="পাসওয়ার্ড লিখুন"
                                        type={isVisible ? 'text' : 'password'}
                                    />

                                    <InputGroup.Suffix className="pe-1">
                                        <Button
                                            isIconOnly
                                            aria-label={
                                                isVisible
                                                    ? 'পাসওয়ার্ড লুকান'
                                                    : 'পাসওয়ার্ড দেখুন'
                                            }
                                            size="sm"
                                            variant="ghost"
                                            onPress={() =>
                                                setIsVisible((prev) => !prev)
                                            }
                                        >
                                            {isVisible ? (
                                                <Eye className="size-4" />
                                            ) : (
                                                <EyeSlash className="size-4" />
                                            )}
                                        </Button>
                                    </InputGroup.Suffix>
                                </InputGroup>

                                <Description className="mt-1.5 text-xs leading-5 text-neutral-500">
                                    কমপক্ষে ৮টি অক্ষর, ১টি বড় হাতের অক্ষর এবং
                                    ১টি সংখ্যা থাকতে হবে।
                                </Description>

                                <FieldError />
                            </TextField>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-2">
                                <PrimaryButton className="flex-1 hover:bg-green-700">
                                    অ্যাকাউন্ট তৈরি করুন
                                </PrimaryButton>

                                <Button
                                    type="reset"
                                    variant="secondary"
                                    className="h-11 px-5 text-green-600"
                                >
                                    রিসেট
                                </Button>
                            </div>
                        </Form>
                        <div className="divider">অথবা</div>
                        <div className="flex items-center gap-2">
                            {/* Google */}
                            <button className="btn bg-white text-black border-[#e5e5e5]">
                                <svg
                                    aria-label="Google logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <g>
                                        <path
                                            d="m0 0H512V512H0"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            fill="#34a853"
                                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                        ></path>
                                        <path
                                            fill="#4285f4"
                                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                        ></path>
                                        <path
                                            fill="#fbbc02"
                                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                        ></path>
                                        <path
                                            fill="#ea4335"
                                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                        ></path>
                                    </g>
                                </svg>
                                Google দিয়ে চালিয়ে যান
                            </button>
                            <button className="btn bg-white text-black border-[#e5e5e5]">
                                <FaGithub />
                                GitHub দিয়ে চালিয়ে যান
                            </button>
                        </div>
                        {/* Bottom text */}
                        <p className="mt-6 text-center text-sm text-neutral-500">
                             অ্যাকাউন্ট নেই?{' '}
                            <a
                                href="/sign-in"
                                className="font-semibold text-green-600 transition-colors hover:text-green-700"
                            >
                                সাইন আপ করুন
                            </a>
                        </p>
                    </div>
                    <Link
                        href={'/'}
                        className="text-neutral-700 flex items-center text-center justify-center pt-8"
                    >
                        <IoReturnDownBackOutline /> হোম পেজে ফিরে যান
                    </Link>
                </div>
            </Container>
        </section>
    );
}
