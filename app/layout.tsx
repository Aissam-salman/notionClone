import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";
import {ConvexClientProvider} from "@/components/convex-provider";

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
        <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
        <ConvexClientProvider>
            <ThemeProvider
                attribute={`class`}
                defaultTheme={`system`}
                enableSystem
                disableTransitionOnChange
                storageKey={`Nobsi-theme`}
            >

                {children}
            </ThemeProvider>
        </ConvexClientProvider>
        </body>
        </html>
    );
}
