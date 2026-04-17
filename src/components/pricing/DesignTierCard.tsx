import Image from "next/image";
import { DesignTier } from "@/content/pricing/pricing";

export default function DesignTierCard({ tier }: { tier: DesignTier }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm">
            <div className="grid grid-cols-2 gap-1 bg-surface p-1">
                {tier.images?.slice(0, 4).map((img, i) => (
                    <div
                        key={i}
                        className="relative aspect-square overflow-hidden rounded-md"
                    >
                        <Image
                            src={img || "/placeholder.png"}
                            alt={`${tier.name} example ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 200px"
                        />
                    </div>
                ))}
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-foreground">
                        {tier.name}
                    </h3>
                    <p className="shrink-0 text-sm font-semibold text-foreground">
                        +${tier.price}
                    </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-left text-muted">
                    {tier.description}
                </p>
            </div>
        </div>
    );
}
