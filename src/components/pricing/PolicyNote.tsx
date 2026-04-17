"use client";

import { useState } from "react";
import { PolicyItem } from "@/content/policies/policies";
import DropdownItem from "@/components/ui/DropdownItem";

export default function PolicyNote({ policy }: { policy: PolicyItem }) {
    const [open, setOpen] = useState(false);

    return (
        <DropdownItem
            open={open}
            onToggle={() => setOpen((prev) => !prev)}
            title={policy.title}
            className="rounded-2xl border border-border/50 bg-background shadow-sm"
            buttonClassName="grid w-full grid-cols-[1fr_auto] items-start gap-3 px-5 py-4 text-left transition-opacity active:opacity-80"
            titleClassName="text-sm font-semibold text-foreground sm:text-base"
            iconClassName="h-4 w-4 shrink-0 text-muted transition-transform duration-200"
            contentClassName="px-5 pb-4 text-sm leading-relaxed text-muted text-left"
        >
            {policy.description}
        </DropdownItem>
    );
}
