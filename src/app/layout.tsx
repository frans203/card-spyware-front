import type {Metadata} from "next";
import "./globals.css";
import {Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600"]
})

export const metadata: Metadata = {
    title: "Safe Wallet",
    description: "Guarde seus cartões de crédito localmente com segurança",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${poppins.className} bg-gray-200 scrollbar-hide no-scrollbar`}
        >
        {children}
        </body>
        </html>
    );
}
