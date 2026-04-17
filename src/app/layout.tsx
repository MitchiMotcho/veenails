import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    display: "swap",
});

const fraunces = Fraunces({
    variable: "--font-display",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Vee's Nail Studio",
        template: "%s | Vee's Nail Studio",
    },
    description:
        "Vee's Nail Studio — clean, modern nail services with easy online booking.",
    applicationName: "Vee's Nail Studio",
    appleWebApp: {
        title: "Vee's Nails",
        capable: true,
        statusBarStyle: "default",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#fff7fb" },
        { media: "(prefers-color-scheme: dark)", color: "#120a10" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <body className="min-h-dvh bg-background text-foreground antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
