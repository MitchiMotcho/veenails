import Link from "next/link";

function FlowCard({ title, steps }: { title: string; steps: string[] }) {
    return (
        <div className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm font-semibold">{title}</p>
            <div className="mt-4 space-y-3">
                {steps.map((s, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl border border-border bg-background p-4"
                    >
                        <p className="text-sm">{s}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function FlowPage() {
    return (
        <main className="min-h-dvh bg-background text-foreground">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                            Simple flow overview
                        </p>
                        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                            Booking Workflow
                        </h1>
                        <p className="mt-2 text-sm text-muted">
                            Clear visuals for the main booking flow + common
                            situations.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href="/booking" className="btn-secondary">
                            Booking Demo
                        </Link>
                        <Link href="/admin" className="btn-secondary">
                            Admin Demo
                        </Link>
                    </div>
                </div>

                {/* Main flows */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <FlowCard
                        title="Client Flow (Booking)"
                        steps={[
                            "Open Booking page (guest or optional login)",
                            "Select services (pricing updates automatically)",
                            "Pick an available time",
                            "Enter details (if guest)",
                            "Send E-transfer deposit and mark as sent",
                            "Booking is placed on hold until deposit is confirmed",
                            "Client receives confirmation email once approved",
                        ]}
                    />
                    <FlowCard
                        title="Admin Flow (Confirm)"
                        steps={[
                            "Technician gets an email: booking is on hold",
                            "Technician checks deposit received",
                            "Technician confirms booking in Admin page",
                            "Calendar updates (public shows “Booked”, admin shows details)",
                            "Client receives confirmation email",
                        ]}
                    />
                </div>

                {/* Extra flows */}
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <FlowCard
                        title="Cancellation Flow"
                        steps={[
                            "Client cancels through a link in email OR messages the studio",
                            "Booking is marked as cancelled in admin",
                            "Calendar slot becomes available again",
                            "Client receives a cancellation confirmation email",
                            "Optional: deposit policy message can be included automatically",
                        ]}
                    />

                    <FlowCard
                        title="Rescheduling Flow"
                        steps={[
                            "Client requests reschedule (email / form / message)",
                            "Admin selects a new time slot and proposes it",
                            "Client confirms the new time",
                            "Calendar updates and old slot reopens",
                            "Client receives updated appointment confirmation email",
                        ]}
                    />

                    <FlowCard
                        title="Price Adjustment Flow (Service Changes)"
                        steps={[
                            "Client adds/removes services while booking OR requests changes later",
                            "System updates the total price",
                            "If deposit is already paid, remaining balance updates automatically",
                            "Admin can edit final services after the appointment if needed",
                            "Final receipt total is saved for monthly reporting",
                        ]}
                    />
                </div>

                <div className="mt-8 rounded-xl border border-border bg-surface p-5">
                    <p className="text-sm font-semibold">
                        Notes (adjustable rules)
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted">
                        <li>Hold window can be set (example: 2–4 hours).</li>
                        <li>
                            If deposit is not received in time, the slot reopens
                            automatically.
                        </li>
                        <li>
                            If a slot is taken before confirmation, client gets
                            a reschedule email.
                        </li>
                        <li>
                            Client calendar view can hide personal details and
                            only show “Booked”.
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
