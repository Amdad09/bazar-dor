import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}
const Button = ({ children, className, ...rest}: ButtonProps) => {
    return (
        <button {...rest}
            className={`cursor-pointer bg-[#05893E] text-[#F3FBF4] rounded-lg ${className} px-4 py-2 inline-flex justify-center items-center font-semibold shadow-sm shadow-green-400 `}
        >
            {children}
        </button>
    );
};

export default Button;
