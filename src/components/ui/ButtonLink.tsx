"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

type ButtonVariant = "primary" | "secondary";

export default function ButtonLink({
    href,
    children,
    variant = "primary",
    className = "",
    external = false,
    disabled = false,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
    external?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}) {
    const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        onClick?.();
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
            className={`${baseClass} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`}
        >
            {children}
        </Link>
    );
}
