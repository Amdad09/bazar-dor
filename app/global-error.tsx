'use client';
interface GlobalErrorProps{
    error: Error & { digest?: string };
    reset: () => void;
}
export default function GlobalError({
    error,
    reset,
}: GlobalErrorProps) {
    return (
        <html>
            <body>
                <p>কিছু একটা সমস্যা হয়েছে</p>
                <pre>{error.message}</pre>
                <button onClick={reset}>আবার চেষ্টা করুন</button>
            </body>
        </html>
    );
}
