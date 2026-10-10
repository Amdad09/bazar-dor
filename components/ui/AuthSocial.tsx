'use client'
import { githubSignIn, googleSignIn } from '@/lib/auth-client';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const AuthSocial = () => {
    const [pending, setPending] = useState<'google' | 'github' | null>(null);

    const handleSignIn = async (provider: 'google' | 'github') => {
        setPending(provider);
        try {
            const signIn = provider === 'google' ? googleSignIn: githubSignIn;
            const result = await signIn();
            if (result?.error) {
                setPending(null);
            }

        } catch(error) {
             console.error(`${provider} sign-in failed:`, error);
             setPending(null);
        }
    };
    return (
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
            {/* Google */}
            <button
                type="button"
                onClick={() => handleSignIn('google')}
                disabled={pending !== null}
                className="btn w-full flex-nowrap gap-2 whitespace-nowrap border-[#e5e5e5] bg-white px-3 text-sm text-black"
            >
                {pending === 'google' ? (
                    <>
                        <span className="loading loading-spinner loading-sm" />
                        Signing in...
                    </>
                ) : (
                    <>
                        <svg
                            aria-label="Google logo"
                            className="shrink-0"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff" />
                                <path
                                    fill="#34a853"
                                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                />
                                <path
                                    fill="#4285f4"
                                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                />
                                <path
                                    fill="#fbbc02"
                                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                />
                                <path
                                    fill="#ea4335"
                                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                />
                            </g>
                        </svg>
                        <span>Google দিয়ে চালিয়ে যান</span>
                    </>
                )}
            </button>

            {/* GitHub */}
            <button
                type="button"
                onClick={() => handleSignIn('github')}
                disabled={pending !== null}
                className="btn w-full flex-nowrap gap-2 whitespace-nowrap border-[#e5e5e5] bg-white px-3 text-sm text-black"
            >
                {pending === 'github' ? (
                    <>
                        <span className="loading loading-spinner loading-sm" />
                        Signing in...
                    </>
                ) : (
                    <>
                        <FaGithub />
                        GitHub দিয়ে চালিয়ে যান
                    </>
                )}
            </button>
        </div>
    );
};

export default AuthSocial;
