'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
interface HeroContentMotionProps {
    children: ReactNode;
}
const HeroContentMotion = ({ children }: HeroContentMotionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default HeroContentMotion;
