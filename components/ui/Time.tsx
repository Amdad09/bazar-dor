/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        setTime(new Date().toLocaleDateString('bn-BD', {
            timeZone: 'Asia/Dhaka',
            dateStyle: 'full'
        }))
    },[])
    return time;
};

export default Time;