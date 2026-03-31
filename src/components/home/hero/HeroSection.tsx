import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ id = "" }: { id?: string }) {
    const redirectURL = process.env.NEXT_PUBLIC_BOOKING_URL || "https://booking.veenailstudio.ca";
    return (
        <section id={id} className="bg-background px-6 pt-12 md:pt-24 text-center">
            <div className="mx-auto max-w-3xl">

                <p className="text-sm font-medium text-muted">
                    Catchphrase goes here...
                </p>

                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    Vee's Nail Studio
                </h1>

                <p className="mt-6 text-base text-muted md:text-lg">
                    Clean, detailed nail work in a calm and welcoming space.
                    Designed to help you feel polished, confident, and cared
                    for.
                </p>

                <p className="mt-4 text-sm italic text-muted">
                    Mention Doupi for people with allergies...
                </p>

                <div className="mt-8 flex flex-col mx-auto max-w-80 justify-center gap-4 sm:flex-row">
                    <ButtonLink href={redirectURL} external>
                        Book Now
                    </ButtonLink>
                    <ButtonLink href="/pricing" variant="secondary">
                        Services & Pricing
                    </ButtonLink>
                </div>

                <div className="mt-10 flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="Vee's Nail Studio Logo"
                        width={120}
                        height={120}
                        className="opacity-80"
                    />
                </div>
            </div>
        </section>
    );
}
