import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <div className={`flex 
            flex-col
            justify-center
            items-center
            max-w-5xl
        `}>
            <div className={`flex-col items-center`}>
                <div className={`relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]`}>
                    <Image src="/black&white-nobg.png" fill className={`object-contain`} alt="Hero"/>

                </div>
            </div>
        </div>
    );
};

export default Hero;
