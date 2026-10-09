'use client';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { FieldError, InputGroup, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { toast } from 'sonner';
const ProfilePage = () => {
    const { data: session } = useSession();
    const name = session?.user?.name;
    const email = session?.user?.email;
    const [newName, setNewName] = useState<string>('');
    const router = useRouter();
    const x = name?.split(' ');
    if (!x) return router.push('/')

    const handleUpdate = () => {
        updateUser({ name:newName });
        toast.success('আপনার নামটি আপডেট হয়েছে');
    };
    return (
        <div className="min-h-screen bg-base-200/50 py-8 sm:py-12">
            <Container>
                <div className="mx-auto max-w-4xl space-y-6">
                    {/* Page Header */}
                    <div>
                        <p className="text-sm font-medium text-green-600">
                            BazarDor Account
                        </p>
                        <h1 className="mt-1 text-2xl font-bold text-base-content sm:text-3xl">
                            আমার প্রোফাইল
                        </h1>
                        <p className="mt-2 text-sm text-base-content/60">
                            আপনার ব্যক্তিগত তথ্য এবং অ্যাকাউন্ট পরিচালনা করুন।
                        </p>
                    </div>

                    {/* Profile Card */}
                    <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                            {/* Avatar */}
                            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
                                {(x?.[0]?.length > 2
                                    ? x[0][0]
                                    : (x?.[1]?.[0] ?? x?.[0]?.[0] ?? 'U')
                                ).toUpperCase()}
                            </div>

                            {/* User Info */}
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-base-content">
                                    {name}
                                </h2>
                                <p className="mt-1 text-sm text-base-content/60">
                                    {email}
                                </p>
                                <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                    সাধারণ সদস্য
                                </span>
                            </div>

                            {/* Edit Button */}
                            <button
                                className="text-red-500 leading-tight text-base border border-red-500 rounded-lg flex items-center px-3 py-1.5 cursor-pointer"
                                onClick={() => {
                                    signOut();
                                    router.push('/');
                                    toast.success('সাইন আউট সফল হয়েছে');
                                }}
                            >
                                <span className="pr-2">
                                    <IoReturnDownBackOutline />
                                </span>
                                সাইন আউট
                            </button>
                        </div>
                    </section>
                    <form
                        onSubmit={handleUpdate}
                        className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8"
                    >
                        <h3 className="font-bold text-lg">তথ্য</h3>
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                            isInvalid={newName.trim().length < 3}
                        >
                            <Label className="mb-1.5 font-medium text-neutral-800">
                                নাম
                            </Label>

                            <InputGroup className="h-11">
                                <InputGroup.Input
                                    placeholder="আপনার নাম লিখুন"
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                            </InputGroup>

                            <FieldError>কমপক্ষে ৩টি অক্ষর লিখুন</FieldError>
                        </TextField>
                        <Button type="submit" className="w-full mt-4">
                            আপডেট
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default ProfilePage;
