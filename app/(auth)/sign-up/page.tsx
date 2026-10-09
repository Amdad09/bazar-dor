'use client';

import { Eye, EyeSlash } from '@gravity-ui/icons';
import { useState } from 'react';

import PrimaryButton from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import {
    Button,
    Description,
    FieldError,
    Form,
    InputGroup,
    Label,
    TextField,
} from '@heroui/react';
import Link from 'next/link';
import { IoReturnDownBackOutline } from 'react-icons/io5';

import AuthSocial from '@/components/ui/AuthSocial';
import { signUp } from '@/lib/auth-client';
import { toast } from 'sonner';

export default function SignUpForm() {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as Record<
            string,
            string
        >;

        const { name, email, password } = user;
        const { data, error } = await signUp.email({
            name,
            email,
            password,
        });
        if (error) {
            toast.error(
                'অ্যাকাউন্ট তৈরি করা সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
            );
            return;
        }
        console.log('Sign up data', data);
        toast.success('আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।');
    };

    return (
        <section className="min-h-[calc(100vh-64px)] bg-neutral-50">
            <Container className="flex justify-center py-12 md:py-16 lg:py-20">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
                            অ্যাকাউন্ট তৈরি করুন
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                        <Form
                            className="flex w-full flex-col gap-5"
                            onSubmit={onSubmit}
                        >
                            {/* Name */}
                            <TextField
                                isRequired
                                name="name"
                                type="text"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return 'কমপক্ষে ৩টি অক্ষর লিখুন';
                                    }

                                    return null;
                                }}
                            >
                                <Label className="mb-1.5 font-medium text-neutral-800">
                                    নাম
                                </Label>

                                <InputGroup className="h-11">
                                    <InputGroup.Input
                                        placeholder="আপনার নাম লিখুন"
                                        type="text"
                                    />
                                </InputGroup>

                                <FieldError />
                            </TextField>

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

                                <InputGroup className="h-11">
                                    <InputGroup.Input
                                        placeholder="আপনার ইমেইল লিখুন"
                                        type="email"
                                    />
                                </InputGroup>

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
                        <AuthSocial />
                        {/* Bottom text */}
                        <p className="mt-6 text-center text-sm text-neutral-500">
                            ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                            <a
                                href="/sign-in"
                                className="font-semibold text-green-600 transition-colors hover:text-green-700"
                            >
                                সাইন ইন করুন
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
