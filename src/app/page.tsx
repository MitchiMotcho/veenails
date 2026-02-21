import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Beautiful Nails, Thoughtfully Done
                </h1>

                <p className="mt-6 max-w-xl text-muted text-base md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec eu euismod sapien, nec gravida elit. Curabitur porta
                    at neque ac porta. Duis sed viverra libero. Mauris risus mi,
                    facilisis in dui a, porttitor molestie odio.
                </p>

                <p className="italic">
                    Mention Doupi for people for allergies...
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="btn-primary">Book Now</button>
                    <button className="btn-secondary">View Services</button>
                </div>

                <Image
                    src="/logo.png"
                    alt="Vee's Nail Studio Logo"
                    width={200}
                    height={200}
                    className="mt-12 opacity-50"
                />
            </section>

            {/* Testimonials Section */}
            <section className="bg-surface px-6 py-20 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Testimonials
                    </h2>
                    <p className="mt-4 text-muted">
                        Hear from our clients about their experiences at
                        Vee&apos;s Nail Studio.
                    </p>

                    <p className="italic">
                        Testimonials will go here... (quotes from clients, etc.)
                    </p>
                </div>
            </section>

            {/* Policies Section */}
            <section className="px-6 py-20 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Policies
                    </h2>
                    <p className="mt-4 text-muted">
                        Before booking please review our policies and pricing to
                        ensure you have all the information you need to make the
                        best choice for your nail care.
                    </p>
                    <p className="italic">
                        Policies dropdown will go here... (cancellation, late
                        arrivals, etc.)
                    </p>
                </div>
            </section>

            {/* Aftercare Section */}
            <section className="bg-surface px-6 py-20 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Aftercare Instructions
                    </h2>
                    <p className="mt-4 text-muted">
                        Proper aftercare is essential for maintaining the health
                        and beauty of your nails.
                    </p>
                    <p className="italic">
                        Aftercare instructions will go here... (tips for nail
                        care, avoiding damage, etc.)
                    </p>
                </div>
            </section>

            {/* Services Preview */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Popular Services
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-border bg-surface py-6 px-4">
                            <h3 className="font-semibold">Classic Manicure</h3>
                            <p className="mt-2 text-sm text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc pretium.
                            </p>
                        </div>

                        <div className="rounded-xl border border-border bg-surface py-6 px-4">
                            <h3 className="font-semibold">Gel Set</h3>
                            <p className="mt-2 text-sm text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc pretium.
                            </p>
                        </div>

                        <div className="rounded-xl border border-border bg-surface py-6 px-4">
                            <h3 className="font-semibold">Custom Nail Art</h3>
                            <p className="mt-2 text-sm text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc pretium.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button className="btn-primary">
                            See Full Pricing
                        </button>
                    </div>
                </div>
            </section>

            {/* Booking Call To Action */}
            <section className="bg-surface-2 px-6 py-20 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Ready to Book Your Appointment?
                </h2>
                <p className="italic">
                    Dropdown for policies section will go here...
                </p>
                <p className="mt-4 text-muted">
                    Choose your service, select your time, and secure your spot
                    in just a few clicks.
                </p>

                <div className="mt-8">
                    <button className="btn-primary">Book Appointment</button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-surface px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <p className="mt-4 text-muted">
                        Here are some common questions and answers to help you
                        understand our services, policies, and what to expect
                        when you visit Vee&apos;s Nail Studio.
                    </p>

                    <p className="italic">
                        FAQ section will go here... (booking process, service
                        details, etc.)
                    </p>
                </div>
            </section>
        </main>
    );
}
