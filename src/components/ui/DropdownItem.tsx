"use client";

import { ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownItem({
    open,
    onToggle,
    title,
    children,
    className = "",
    buttonClassName = "",
    titleClassName = "",
    contentClassName = "",
    iconClassName = "",
}: {
    open: boolean;
    onToggle: () => void;
    title: ReactNode;
    children: ReactNode;
    className?: string;
    buttonClassName?: string;
    titleClassName?: string;
    contentClassName?: string;
    iconClassName?: string;
}) {
    return (
        <div className={className}>
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className={buttonClassName}
            >
                <span className={titleClassName}>{title}</span>

                <span className="pointer-events-none mt-1 flex items-center justify-center">
                    <IoIosArrowDown
                        className={`${iconClassName} ${open ? "rotate-180" : ""}`}
                        aria-hidden="true"
                    />
                </span>
            </button>

            <div
                className={`grid transition-all duration-200 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                    <div className={contentClassName}>{children}</div>
                </div>
            </div>
        </div>
    );
}
