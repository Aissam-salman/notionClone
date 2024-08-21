"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
const Error = () => {
  const images = ["/404.jpg", "/404-2.jpg","/404-3.jpg"];
  
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setSelectedImage(randomImage);
  }, []);
  
  return (
      <div className="relative h-screen w-screen">
        <div className="absolute bottom-5 right-5 w-full z-10 flex justify-center p-4">
          <Button variant="destructive" size="lg" asChild>
            <Link href="/documents">Go back</Link>
          </Button>
        </div>
        {selectedImage && (
            <Image
                src={selectedImage}
                alt="Error"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
            />
        )}
      </div>
  );
};

export default Error;
