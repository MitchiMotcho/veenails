"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Squash as Hamburger } from "hamburger-react";

const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
];

function NavLink({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick?: () => void;
}) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={[
                "text-sm font-semibold transition-colors duration-200",
                active
                    ? "text-link underline underline-offset-8 decoration-2"
                    : "text-muted hover:text-link-hover",
            ].join(" ")}
        >
            {label}
        </Link>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const close = () => setOpen(false);

    // Prevent background scroll when menu open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link
                    href="/"
                    onClick={close}
                    className="group flex items-center gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-surface-2"
                    aria-label="Go to homepage"
                >
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                        <Image
                            src="/logo.png"
                            alt="Vee's Nail Studio Logo"
                            sizes="40px"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <p className="text-sm font-semibold transition-colors group-hover:text-link-hover">
                        Vee&apos;s Nail Studio
                    </p>
                </Link>

                {/* Desktop: everything right-aligned */}
                <div className="hidden items-center gap-8 md:flex">
                    <nav className="flex items-center gap-7">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                label={item.label}
                            />
                        ))}
                    </nav>

                    <Link href="/booking" className="btn-primary">
                        Book Now
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <Hamburger
                        toggled={open}
                        toggle={setOpen}
                        size={22}
                        rounded
                        label="Toggle menu"
                    />
                </div>
            </div>

            {/* Overlay */}
            <div
                className={[
                    "fixed inset-0 z-40 md:hidden",
                    "bg-black/20 backdrop-blur-sm",
                    "transition-opacity duration-200",
                    open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                ].join(" ")}
                onClick={close}
                aria-hidden="true"
            />

            {/* Drawer */}
            <aside
                className={[
                    "fixed left-0 top-0 z-50 w-full md:hidden",
                    "border-b-2 border-border bg-background/98 backdrop-blur",
                    "transform transition-transform duration-300 ease-out",
                    open ? "translate-y-0" : "-translate-y-full",
                ].join(" ")}
                aria-label="Mobile menu"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex items-center justify-between py-2 border-b-2 border-border">
                        <Link
                            href="/"
                            className="flex flex-row items-center justify-center gap-x-2"
                        >
                            <Image
                                src="/logo.png"
                                alt="Vee's Nail Studio Logo"
                                width={30}
                                height={30}
                                className="rounded-full border-2 border-border"
                            />
                            <p className="text-base font-semibold">
                                Vee's Nail Studio
                            </p>
                        </Link>
                        <Hamburger
                            toggled={open}
                            toggle={setOpen}
                            size={22}
                            rounded
                            label="Close menu"
                        />
                    </div>

                    <nav className="flex flex-col gap-5 py-6">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                onClick={close}
                            />
                        ))}

                        <div className="pt-3">
                            <Link
                                href="/booking"
                                onClick={close}
                                className="btn-primary w-full"
                            >
                                Book Now
                            </Link>
                        </div>
                    </nav>
                </div>
            </aside>
        </header>
    );
}
