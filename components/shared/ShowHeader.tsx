'use client';

import { useEffect, useState } from 'react';
import { FaArrowTurnUp } from 'react-icons/fa6';
import Button from '../ui/Button';

const ShowHeader = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!show) return null;

    return (
        <Button
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
        >
            <FaArrowTurnUp />
        </Button>
    );
};

export default ShowHeader;
