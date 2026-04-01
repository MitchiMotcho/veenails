"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function ScrollLink({ href, children, className }: Props) {
    const router = useRouter();

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const nav = document.querySelector("nav");
        const navHeight = nav?.clientHeight ?? 64;
        const extraSpacing = 100; // small gap in px
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - extraSpacing;
        window.scrollTo({ top, behavior: "smooth" });
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // allow modifier keys to open in new tab
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        try {
            const url = new URL(href, window.location.href);

            // external link (different origin) -> allow normal navigation
            if (url.origin !== window.location.origin) return;

            e.preventDefault();

            const targetId = url.hash ? url.hash.replace(/^#/, "") : null;

            // same page (only hash)
            if ((url.pathname === window.location.pathname || href.startsWith("#")) && targetId) {
                // update hash without adding history entry
                window.history.replaceState(null, "", `#${targetId}`);
                scrollToId(targetId);
                return;
            }

            // same-origin but different page
            if (targetId) {
                // navigate then attempt to scroll after a short delay
                router.push(url.pathname + url.search + url.hash);
                // small delay to allow new page to render; on slow devices adjust if needed
                setTimeout(() => scrollToId(targetId), 250);
                return;
            }

            // no hash: navigate normally within the app
            router.push(url.pathname + url.search);
        } catch (err) {
            // If URL parsing fails, fallback to default behavior
            return;
        }
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}
