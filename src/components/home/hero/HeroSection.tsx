import ButtonLink from "@/components/ui/ButtonLink";
import PageHeader from "@/components/ui/PageHeader";
import ScrollLink from "@/components/ui/ScrollLink";
import Image from "next/image";

export default function HeroSection({ id = "" }: { id?: string }) {
    return (
        <section
            id={id}
            className="bg-background px-6 pt-12 text-center md:pt-24"
        >
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    intro="Soft sets, detailed designs, and a cozy experience"
                    title="Vee's Nail Studio"
                    description="Thoughtfully done nail sets in a warm, welcoming space, with a focus on detail, comfort, and designs that feel like you."
                    redirectURL="/pricing"
                    redirectPage="Services & Pricing"
                />

                <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border/60 bg-surface p-4 text-left shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 xl:gap-6">
                        <div className="my-auto relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-surface-2 md:h-28 md:w-28 border border-border">
                            <Image
                                src="/home/hero/doupi.png"
                                alt="Doupi, artist's dog"
                                fill
                                sizes="460px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-base lg:text-lg font-header font-semibold text-foreground text-center">
                                Meet Doupi!
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                Doupi is my new little pet assistant (but she's
                                mostly there for the cuddles). She's super
                                friendly! If you have allergies, a fear of dogs,
                                or would simply prefer a dog-free visit, please
                                let us know before booking and we&apos;ll do our
                                best to accommodate you.
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                View a Doupi gallery on{" "}
                                <ScrollLink
                                    href="/gallery#doupi"
                                    className="text-link font-bold underline hover:text-link-hover"
                                >
                                    our gallery page
                                </ScrollLink>
                                !
                            </p>
                        </div>
                    </div>
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
