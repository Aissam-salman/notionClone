"use client";
import React from 'react';
import {useConvexAuth} from "convex/react";
import {Spinner} from "@/components/ui/spinner";
import {redirect} from "next/navigation";
import Navigation from "@/app/(main)/_components/navigation";

interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({children}: LayoutProps) => {
    const {isAuthenticated, isLoading} = useConvexAuth();

    if (isLoading) {
        return (
            <div className={`h-full flex items-center justify-center`}>
                <Spinner size={`lg`}/>
            </div>
        )
    }

    if (!isAuthenticated) {
        return redirect('/');
    }

    return (
        <div className={`h-full flex     dark:bg-neutral-800`}>
            <Navigation/>
            <main className={`flex-1 h-full overflow-y-auto`}>{children}</main>
        </div>
    );
};

export default MainLayout;
