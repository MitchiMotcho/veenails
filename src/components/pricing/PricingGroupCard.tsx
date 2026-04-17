import { PricingGroup } from "@/content/pricing/pricing";
import type { DesignTier } from "@/content/pricing/pricing";
import Link from "next/link";

export default function PricingGroupCard({
    group,
    id,
    tierSummary,
}: {
    group: PricingGroup;
    id?: string;
    tierSummary?: Pick<DesignTier, "id" | "name" | "price">[];
}) {
    return (
        <div
            id={id}
            className="rounded-2xl border border-border/50 bg-background p-5 shadow-sm"
        >
            <h3 className="text-lg font-semibold text-foreground">
                {group.title}
            </h3>

            {group.description ? (
                <p className="mt-2 text-sm text-muted">{group.description}</p>
            ) : null}

            <div className="mt-5 space-y-5">
                {group.items.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-xl border border-border/80 bg-surface py-2 px-4"
                    >
                        {item.name && (
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                                {item.name}
                            </p>
                        )}

                        <div className="space-y-2">
                            {item.variants.map((variant) => (
                                <div
                                    key={variant.id}
                                    className="flex items-start justify-between gap-4 text-sm"
                                >
                                    <div className="flex flex-col items-start">
                                        <p className="font-medium text-foreground">
                                            {variant.label}
                                        </p>
                                        {variant.note ? (
                                            <p className="text-xs text-muted">
                                                {variant.note}
                                            </p>
                                        ) : null}
                                    </div>

                                    <p className="shrink-0 font-semibold text-foreground">
                                        ${variant.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {tierSummary?.length ? (
                <div className="mt-4 rounded-xl border-2 border-dashed border-border bg-surface px-4 py-3 text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                        Design tiers
                    </p>
                    <div className="mt-2 space-y-1.5 text-sm text-foreground">
                        {tierSummary.map((tier) => (
                            <p
                                key={tier.id}
                                className="flex items-center justify-between gap-3"
                            >
                                <span className="font-medium">{tier.name}</span>
                                <span className="shrink-0 font-semibold text-muted">
                                    +${tier.price}
                                </span>
                            </p>
                        ))}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                        (Tier descriptions and sample images{" "}
                        <Link
                            href="/pricing#design-tiers"
                            className="underline hover:no-underline transition text-pink-main duration-300"
                        >
                            below
                        </Link>
                        )
                    </p>
                </div>
            ) : null}
        </div>
    );
}
