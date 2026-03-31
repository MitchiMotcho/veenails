"use client";

import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function ScrollLink({ href, children, className }: Props) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const id = href.startsWith("#") ? href.slice(1) : href;
        const el = document.getElementById(id);
        if (el) {
            // Offset by the navbar height if present (tailwind `h-16` ≈ 64px)
            const nav = document.querySelector("nav");
            const navHeight = nav?.clientHeight ?? 64;
            const extraSpacing = 100; // small gap in px
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight - extraSpacing;
            window.scrollTo({ top, behavior: "smooth" });
            // update the hash without adding a history entry
            window.history.replaceState(null, "", `#${id}`);
        } else {
            // fallback: navigate to hash (will update the URL)
            window.location.hash = `#${id}`;
        }
    };

    return (
        // use a semantic anchor so right-click / assistive tech still works
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}
