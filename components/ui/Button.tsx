import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}
const Button = ({ children, className, ...rest}: ButtonProps) => {
    return (
        <button
            {...rest}
            className={`cursor-pointer bg-[#05893E] text-[#F3FBF4] ${className} inline-flex items-center justify-center
        rounded-lg border px-4 py-2
        font-bold text-sm
        transition-all duration-200
        hover:-translate-y-0.5
        hover:bg-green-800
        active:translate-y-0
        active:scale-[0.98] shadow-green-400 `}
        >
            {children}
        </button>
    );
};

export default Button;
