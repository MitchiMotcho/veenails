"use client";

import { useState } from "react";
import DropdownItem from "@/components/ui/DropdownItem";

export default function FAQItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <DropdownItem
            open={open}
            onToggle={() => setOpen((prev) => !prev)}
            title={question}
            className="rounded-xl border border-border/50 bg-background"
            buttonClassName="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:px-5"
            titleClassName="text-sm sm:text-base xl:text-lg font-medium leading-snug"
            iconClassName="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-muted transition-transform duration-200"
            contentClassName="px-4 pb-4 text-sm lg:text-base leading-relaxed sm:px-5"
        >
            {answer}
        </DropdownItem>
    );
}
