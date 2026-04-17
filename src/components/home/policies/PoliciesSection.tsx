import Link from "next/link";
import SectionBlock from "@/components/home/SectionBlock";
import ScrollLink from "@/components/ui/ScrollLink";

import { policyItems } from "@/content/policies/policies";
import ButtonLink from "@/components/ui/ButtonLink";

export default function PoliciesSection({ id = "policies" }: { id?: string }) {
    const redirectURL =
        process.env.NEXT_PUBLIC_BOOKING_URL ||
        "https://booking.veenailstudio.ca";
    return (
        <SectionBlock
            title="Booking Policies"
            description="By booking an appointment, you agree to our policies. Please review them before scheduling to ensure a smooth and enjoyable experience."
            background="bg-surface"
            id={id}
        >
            <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 text-left">
                {policyItems.map((item) => (
                    <div
                        key={item.title}
                        className="h-full rounded-2xl border border-border/50 bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <h3 className="text-sm sm:text-base font-semibold text-foreground">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                <ButtonLink href={redirectURL} external variant="primary">
                    Book Now
                </ButtonLink>
                <ScrollLink href="#faq" className="btn-secondary">
                    FAQs
                </ScrollLink>
            </div>
        </SectionBlock>
    );
}
