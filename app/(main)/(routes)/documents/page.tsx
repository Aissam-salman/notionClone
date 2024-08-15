"use client"
import React from 'react';
import Image from "next/image";
import {useUser} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

const DocumentsPage = () => {
    const {user} = useUser();
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src={`/empty.doc.png`}
                alt={`illustration of empty document`}
                width={300}
                height={300}
            />
            <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s Nobsi</h2>
            <Button>
                <PlusCircle className="w-4 h-4 mr-2"/>
                Create a note
            </Button>
        </div>

    );
};

export default DocumentsPage;
