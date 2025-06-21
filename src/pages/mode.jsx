import React from 'react'
import { useState, useEffect } from 'react';



export default function mode() {
    const [mode, setMode] = useState('light');
    const [timer, setTimer] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLightMode, setIsLightMode] = useState(true);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }
, []);

    useEffect(() => {
        if (timer % 10 === 0) {
            setIsDarkMode(true);
            setIsLightMode(false);
            setMode('dark');
        } else if (timer % 5 === 0) {
            setIsLightMode(true);
            setIsDarkMode(false);
            setMode('light');
        }
    }, [timer]);

    return (
        <div className={`mode-container ${mode}`}>
            <h1>Current Mode: {mode}</h1>
            <p>Timer: {timer} seconds</p>
        </div>
    );
}