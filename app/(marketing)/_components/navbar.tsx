'use client'
import React from 'react';
import {useScrollTop} from "@/hooks/use-sroll-top";
import {cn} from "@/lib/utils";
import Logo from './logo';

const Navbar = () => {
    const scrolled = useScrollTop()
    return (
        <div
            className={cn(`z-50 bg-background dark:bg-neutral-800 fixed top-0 flex items-center w-full p-6`, scrolled && "border-b" +
                " shadow-sm")}>
            <Logo/>
            <div
                className={`md:ml-auto md:justify-end justify-between w-full flex items-center font-medium gap-x-2`}>Login
            </div>
        </div>
    );
};

export default Navbar;
