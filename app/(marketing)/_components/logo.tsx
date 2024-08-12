'use client'
import React, {useLayoutEffect, useState} from 'react';
import NobsiLogo from '@/public/logo.svg';
import {useTheme} from "next-themes";

const Logo = () => {
    const {theme, resolvedTheme} = useTheme();
    const [fillColor, setFillColor] = useState('black');


    useLayoutEffect(() => {
        if (theme == 'system') {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setFillColor(systemPrefersDark ? 'white' : 'black');
        } else {
            setFillColor(theme === 'dark' ? 'white' : 'black');
        }

    }, [theme, resolvedTheme]);

    return (
        <div className={`hidden md:flex items-center gap-x-2`}>
            <NobsiLogo color={fillColor} src="/logo.svg" alt="logo" width={100} height={50}/>
        </div>
    );
};

export default Logo;
