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

            {/* About Section */}
            <section className="bg-surface-2 px-6 py-20 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        A Calm, Clean Space
                    </h2>
                    <p className="mt-4 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet eros urna. Sed ac est nisi. Nullam mollis,
                        orci vel tempor congue, neque mi.
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

                <p className="mt-4 text-muted">
                    Choose your service, select your time, and secure your spot
                    in just a few clicks.
                </p>

                <div className="mt-8">
                    <button className="btn-primary">Book Appointment</button>
                </div>
            </section>
        </main>
    );
}
