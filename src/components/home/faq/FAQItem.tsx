"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl border border-border/50 bg-background">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:px-5"
                aria-expanded={open}
            >
                {/* Text */}
                <span className="text-sm sm:text-base xl:text-lg font-medium leading-snug">
                    {question}
                </span>

                {/* Icon */}
                <IoIosArrowDown
                    className={`mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-muted transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Content */}
            <div
                className={`grid transition-all duration-200 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="px-4 pb-4 text-sm lg:text-base leading-relaxed sm:px-5">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
