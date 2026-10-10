/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { FieldError, InputGroup, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { toast } from 'sonner';

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const name = session?.user?.name ?? '';
    const email = session?.user?.email;

    const [newName, setNewName] = useState('');
    const [touched, setTouched] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isPending && !session?.user) router.replace('/sign-in');
    }, [isPending, session, router]);

    useEffect(() => {
        if (name) setNewName(name);
    }, [name]);

    if (isPending || !session?.user) {
        return <div className="min-h-screen" />;
    }

    const parts = name.trim().split(/\s+/);
    const initial = Array.from(
        parts[0]?.length > 2 ? parts[0] : (parts[1] ?? parts[0] ?? 'U'),
    )[0].toUpperCase();

    const isInvalid = touched && newName.trim().length < 3;

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched(true);
        if (newName.trim().length < 3 || newName.trim() === name) return;

        setSaving(true);
        try {
            await updateUser({ name: newName.trim() });
            toast.success('আপনার নামটি আপডেট হয়েছে');
        } catch {
            toast.error('নাম আপডেট করা যায়নি');
        } finally {
            setSaving(false);
        }
    };

    const handleSignOut = async () => {
        await signOut();
        toast.success('সাইন আউট সফল হয়েছে');
        router.push('/');
    };

    return (
        <div className="bg-base-200/50 py-8 sm:py-12">
            <Container>
                <div className="mx-auto max-w-4xl space-y-6">
                    {/* Header */}
                    <div>
                        <p className="text-sm font-medium text-green-600">
                            BazarDor Account
                        </p>
                        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                            আমার প্রোফাইল
                        </h1>
                        <p className="mt-2 text-sm text-base-content/60">
                            আপনার ব্যক্তিগত তথ্য এবং অ্যাকাউন্ট পরিচালনা করুন।
                        </p>
                    </div>

                    {/* Profile Card */}
                    <section className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
                                {initial}
                            </div>

                            <div className="min-w-0 flex-1">
                                <h2 className="truncate text-xl font-bold">
                                    {name}
                                </h2>
                                <p className="mt-1 truncate text-sm text-base-content/60">
                                    {email}
                                </p>
                                <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                    সাধারণ সদস্য
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="flex items-center rounded-lg border border-red-500 px-3 py-1.5 text-red-500"
                            >
                                <IoReturnDownBackOutline className="mr-2" />
                                সাইন আউট
                            </button>
                        </div>
                    </section>

                    {/* Update form */}
                    <form
                        onSubmit={handleUpdate}
                        className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8"
                    >
                        <h3 className="text-lg font-bold">তথ্য</h3>
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                            isInvalid={isInvalid}
                        >
                            <Label className="mb-1.5 font-medium text-neutral-800">
                                নাম
                            </Label>
                            <InputGroup className="h-11">
                                <InputGroup.Input
                                    placeholder="আপনার নাম লিখুন"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    onBlur={() => setTouched(true)}
                                />
                            </InputGroup>
                            <FieldError>কমপক্ষে ৩টি অক্ষর লিখুন</FieldError>
                        </TextField>

                        <Button
                            type="submit"
                            className="mt-4 w-full"
                            disabled={saving}
                        >
                            {saving ? 'আপডেট হচ্ছে...' : 'আপডেট'}
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default ProfilePage;
