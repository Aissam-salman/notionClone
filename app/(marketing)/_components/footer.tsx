import React from 'react';
import Logo from "@/app/(marketing)/_components/logo";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/mode-toogle";

const Footer = () => {
    return (
        <div className={`flex items-center w-full p-6 dark:bg-neutral-800 bg-background z-50`}>
            <Logo/>
            <div className={`
                md:ml-auto
                w-full
                justify-between
                md:justify-end
                flex
                items-center
                gap-x-2
                text-muted-foreground
            `}>
                <Button variant={`ghost`} size={`sm`}>Privacy Policy</Button>
                <Button variant={`ghost`} size={`sm`}>Terms & Conditions</Button>
            </div>
            <ModeToggle/>
        </div>
    );
};

export default Footer;
