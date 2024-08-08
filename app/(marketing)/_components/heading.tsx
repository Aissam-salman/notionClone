'use client'

import React from 'react';
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "@radix-ui/react-icons";

const Heading = () => {
    return (
        <div className={`max-w-3xl space-y-4`}>
            <h1 className={`text-3xl sm:text-5xl md:text-5xl font-bold`}>Your notes fast & simple. Welcome to <span
                className="underline">Nobsi</span>
            </h1>
            <h3 className={`text-base sm:text-xl md:text-2xl font-medium`}>Nobsi is a space for all your idea, better &
                faster you
                needed</h3>
            <Button>Enter Nobsi <ArrowRightIcon className={`h-4 w-4 ml-2`}/></Button>
        </div>
    );
};

export default Heading;
