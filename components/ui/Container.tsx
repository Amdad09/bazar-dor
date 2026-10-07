import type { ReactNode } from 'react';

interface ContainerPorps {
    children: ReactNode;
    className?: string;
}
const Container = ({ children, className }: ContainerPorps) => {
    return (
        <div className={`max-w-7xl px-6 mx-auto ${className}`}>{children}</div>
    );
};

export default Container;
