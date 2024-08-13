'use client'

import React from 'react';
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import {useConvexAuth} from "convex/react";
import {Spinner} from "@/components/ui/spinner";
import Link from "next/link";

const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();


    return (
        <div className={`max-w-3xl space-y-4`}>
            <h1 className={`text-3xl sm:text-5xl md:text-5xl font-bold`}>Your notes fast & simple. Welcome to <span
                className="underline">Nobsi</span>
            </h1>
            <h3 className={`text-base sm:text-xl md:text-2xl font-medium`}>Nobsi is a space for all your idea, better &
                faster you
                needed</h3>
            {isLoading && (
                <div className={`flex w-full justify-center items-center`}>
                    <Spinner size={`lg`}/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button>
                    <Link href={`/documents`}>
                        Enter Nobsi
                        <ArrowRightIcon className={`h-4 w-4 ml-2`}/>
                    </Link>
                </Button>
            )}
        </div>
    );
};

export default Heading;
