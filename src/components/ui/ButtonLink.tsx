import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

export default function ButtonLink({
    href,
    children,
    variant = "primary",
    className = "",
    external = false,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
    external?: boolean;
    onClick?: () => void;
}) {
    const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

    return (
        <Link
            href={href}
            onClick={onClick}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={`${baseClass} ${className}`}
        >
            {children}
        </Link>
    );
}
