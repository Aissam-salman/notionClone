import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import React from "react";

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Nosbi",
    description: "Type fast with Markdown",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/favicon-dark.svg",
                href: "/favicon-dark.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/favicon-white.svg",
                href: "/favicon-white.svg",
            }
        ]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className}>{children}</body>
        </html>
    );
}
