'use client'
import React from 'react';
import {useScrollTop} from "@/hooks/use-sroll-top";
import {cn} from "@/lib/utils";
import Logo from './logo';
import {useConvexAuth, useQuery} from "convex/react";
import {ModeToggle} from "@/components/ui/mode-toogle";
import {api} from "@/convex/_generated/api";
import {SignInButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import Link from "next/link";

function Content() {
    // @ts-ignore
    const messages = useQuery(api.messages.getForCurrentUser);
    return <div>Authenticated content: {messages?.length}</div>;
}

const Navbar = () => {
    const {isLoading, isAuthenticated} = useConvexAuth();

    const scrolled = useScrollTop()
    return (
        <div
            className={cn(`z-50 bg-background dark:bg-neutral-800 fixed top-0 flex items-center w-full p-6`, scrolled && "border-b" +
                " shadow-sm")}>
            <Logo/>
            <div className={`md:ml-auto md:justify-end justify-between w-full flex items-center font-medium gap-x-2`}>
                {isLoading && (
                    <Spinner/>
                )}
                {!isLoading && !isAuthenticated && (
                    <>
                        <SignInButton mode={`modal`}>
                            <Button variant={`ghost`} size={`sm`}>
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode={`modal`}>
                            <Button size={`sm`}>
                                Get Nobsi free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <div className={`flex items-center justify-center`}>
                        <Button variant={`ghost`} size={`sm`} asChild>
                            <Link href={`/documents`}>
                                Enter Nobsi
                            </Link>
                        </Button>
                        <UserButton/>
                    </div>
                )}

                <ModeToggle/>
            </div>
        </div>
    );
};

export default Navbar;
