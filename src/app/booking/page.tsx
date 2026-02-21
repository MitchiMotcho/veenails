"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CalendarDemo from "@/components/CalendarDemo";

type Service = {
    id: string;
    name: string;
    price: number;
    note?: string;
};

const SERVICES: Service[] = [
    { id: "gelx", name: "Gel-X Set", price: 70 },
    { id: "fill", name: "Fill", price: 55 },
    { id: "removal", name: "Removal", price: 15 },
    {
        id: "design-basic",
        name: "Design (Basic)",
        price: 10,
        note: "Simple details",
    },
    {
        id: "design-difficult",
        name: "Design (Difficult)",
        price: 25,
        note: "Detailed / complex",
    },
];

type Slot = {
    id: string;
    dateLabel: string; // display only
    timeLabel: string;
    status: "available" | "booked";
};

const SLOTS: Slot[] = [
    {
        id: "sat-10",
        dateLabel: "Sat, Feb 21",
        timeLabel: "10:00 AM",
        status: "available",
    },
    {
        id: "sat-12",
        dateLabel: "Sat, Feb 21",
        timeLabel: "12:00 PM",
        status: "booked",
    },
    {
        id: "sat-2",
        dateLabel: "Sat, Feb 21",
        timeLabel: "2:00 PM",
        status: "available",
    },
    {
        id: "sun-11",
        dateLabel: "Sun, Feb 22",
        timeLabel: "11:00 AM",
        status: "available",
    },
    {
        id: "sun-1",
        dateLabel: "Sun, Feb 22",
        timeLabel: "1:00 PM",
        status: "booked",
    },
    {
        id: "sun-4",
        dateLabel: "Sun, Feb 22",
        timeLabel: "4:00 PM",
        status: "available",
    },
];

const CAL_EVENTS = [
    {
        id: "c1",
        dateLabel: "Sat, Feb 21",
        timeLabel: "12:00 PM",
        status: "confirmed" as const,
    },
    {
        id: "c2",
        dateLabel: "Sat, Feb 21",
        timeLabel: "2:00 PM",
        status: "on-hold" as const,
    },
    {
        id: "c3",
        dateLabel: "Sun, Feb 22",
        timeLabel: "1:00 PM",
        status: "confirmed" as const,
    },
    {
        id: "c4",
        dateLabel: "Sun, Feb 22",
        timeLabel: "4:00 PM",
        status: "available" as const,
    },
];

function formatMoney(n: number) {
    return `$${n.toFixed(2)}`;
}

export default function Booking() {
    const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

    const [isGuest, setIsGuest] = useState(true);
    const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
    const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [depositSent, setDepositSent] = useState(false);

    const selectedServices = useMemo(
        () => SERVICES.filter((s) => selectedServiceIds.includes(s.id)),
        [selectedServiceIds],
    );

    const subtotal = useMemo(
        () => selectedServices.reduce((sum, s) => sum + s.price, 0),
        [selectedServices],
    );

    const selectedSlot = useMemo(
        () => SLOTS.find((s) => s.id === selectedSlotId) ?? null,
        [selectedSlotId],
    );

    const canGoStep2 = selectedServiceIds.length > 0;
    const canGoStep3 = !!selectedSlotId;
    const canGoStep4 = isGuest ? fullName.trim() && email.trim() : true;

    function toggleService(id: string) {
        setSelectedServiceIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        );
    }

    function goNext() {
        setStep((prev) => (prev < 5 ? ((prev + 1) as any) : prev));
    }

    function goBack() {
        setStep((prev) => (prev > 1 ? ((prev - 1) as any) : prev));
    }

    function reset() {
        setStep(1);
        setIsGuest(true);
        setSelectedServiceIds([]);
        setSelectedSlotId(null);
        setFullName("");
        setEmail("");
        setPhone("");
        setDepositSent(false);
    }

    return (
        <main className="min-h-dvh bg-background text-foreground">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                            Demo preview — no real bookings are created
                        </p>
                        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                            Booking
                        </h1>
                        <p className="mt-2 text-sm text-muted">
                            This page shows the client booking experience
                            (E-transfer deposit + booking on hold).
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link className="btn-secondary" href="/admin">
                            View Admin Demo
                        </Link>
                        <Link className="btn-link" href="/flow">
                            See Flow Chart
                        </Link>
                    </div>
                </div>

                <CalendarDemo mode='client' events={CAL_EVENTS} />

                {/* Stepper */}
                <div className="mt-8 rounded-xl border border-border bg-surface p-5">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted">
                        <span className={step === 1 ? "text-foreground" : ""}>
                            1&#41; Services
                        </span>
                        <span>→</span>
                        <span className={step === 2 ? "text-foreground" : ""}>
                            2&#41; Time
                        </span>
                        <span>→</span>
                        <span className={step === 3 ? "text-foreground" : ""}>
                            3&#41; Details
                        </span>
                        <span>→</span>
                        <span className={step === 4 ? "text-foreground" : ""}>
                            4&#41; Deposit
                        </span>
                        <span>→</span>
                        <span className={step === 5 ? "text-foreground" : ""}>
                            5&#41; On Hold
                        </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        {/* Main panel */}
                        <div className="rounded-xl border border-border bg-background p-5">
                            {step === 1 && (
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Select your services
                                    </h2>
                                    <p className="mt-1 text-sm text-muted">
                                        Choose one or more services. Pricing
                                        updates automatically.
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {SERVICES.map((s) => {
                                            const checked =
                                                selectedServiceIds.includes(
                                                    s.id,
                                                );
                                            return (
                                                <button
                                                    key={s.id}
                                                    type="button"
                                                    onClick={() =>
                                                        toggleService(s.id)
                                                    }
                                                    className={[
                                                        "rounded-xl border p-4 text-left transition-colors",
                                                        checked
                                                            ? "border-pink-500 bg-surface-2"
                                                            : "border-border bg-surface hover:bg-surface-2",
                                                    ].join(" ")}
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <p className="font-semibold">
                                                                {s.name}
                                                            </p>
                                                            {s.note ? (
                                                                <p className="mt-1 text-xs text-muted">
                                                                    {s.note}
                                                                </p>
                                                            ) : null}
                                                        </div>
                                                        <p className="text-sm font-semibold">
                                                            {formatMoney(
                                                                s.price,
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="mt-3 text-xs text-muted">
                                                        {checked
                                                            ? "Selected"
                                                            : "Tap to select"}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <button
                                            className="btn-secondary"
                                            onClick={reset}
                                            type="button"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            className="btn-primary"
                                            onClick={() => setStep(2)}
                                            type="button"
                                            disabled={!canGoStep2}
                                            title={
                                                !canGoStep2
                                                    ? "Select at least one service to continue"
                                                    : ""
                                            }
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Pick a date and time
                                    </h2>
                                    <p className="mt-1 text-sm text-muted">
                                        “Booked” times are hidden or blocked for
                                        clients.
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {SLOTS.map((slot) => {
                                            const disabled =
                                                slot.status === "booked";
                                            const selected =
                                                selectedSlotId === slot.id;

                                            return (
                                                <button
                                                    key={slot.id}
                                                    type="button"
                                                    disabled={disabled}
                                                    onClick={() =>
                                                        setSelectedSlotId(
                                                            slot.id,
                                                        )
                                                    }
                                                    className={[
                                                        "rounded-xl border p-4 text-left transition-colors",
                                                        disabled
                                                            ? "border-border bg-surface opacity-50 cursor-not-allowed"
                                                            : selected
                                                              ? "border-pink-500 bg-surface-2"
                                                              : "border-border bg-surface hover:bg-surface-2",
                                                    ].join(" ")}
                                                >
                                                    <p className="text-xs text-muted">
                                                        {slot.dateLabel}
                                                    </p>
                                                    <p className="mt-1 font-semibold">
                                                        {slot.timeLabel}
                                                    </p>
                                                    <p className="mt-2 text-xs text-muted">
                                                        {disabled
                                                            ? "Booked"
                                                            : selected
                                                              ? "Selected"
                                                              : "Available"}
                                                    </p>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <button
                                            className="btn-secondary"
                                            onClick={goBack}
                                            type="button"
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="btn-primary"
                                            onClick={() => setStep(3)}
                                            type="button"
                                            disabled={!canGoStep3}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Your details
                                    </h2>
                                    <p className="mt-1 text-sm text-muted">
                                        Guests can book quickly. Login can be
                                        added later if you want.
                                    </p>

                                    <div className="mt-5 flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsGuest(true)}
                                            className={
                                                isGuest
                                                    ? "btn-primary"
                                                    : "btn-secondary"
                                            }
                                        >
                                            Guest
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsGuest(false)}
                                            className={
                                                !isGuest
                                                    ? "btn-primary"
                                                    : "btn-secondary"
                                            }
                                        >
                                            Login (optional)
                                        </button>
                                    </div>

                                    {isGuest ? (
                                        <div className="mt-6 grid gap-4">
                                            <div>
                                                <label className="text-xs font-semibold text-muted">
                                                    Full name
                                                </label>
                                                <input
                                                    value={fullName}
                                                    onChange={(e) =>
                                                        setFullName(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-pink-500"
                                                    placeholder="e.g., Sarah M."
                                                />
                                            </div>

                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="text-xs font-semibold text-muted">
                                                        Email
                                                    </label>
                                                    <input
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-pink-500"
                                                        placeholder="sarah@email.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-semibold text-muted">
                                                        Phone (optional)
                                                    </label>
                                                    <input
                                                        value={phone}
                                                        onChange={(e) =>
                                                            setPhone(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-pink-500"
                                                        placeholder="(416) 555-0000"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mt-6 rounded-xl border border-border bg-surface p-4 text-sm text-muted">
                                            Demo: a login form could appear here
                                            later (email + password).
                                        </div>
                                    )}

                                    <div className="mt-6 flex items-center justify-between">
                                        <button
                                            className="btn-secondary"
                                            onClick={goBack}
                                            type="button"
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="btn-primary"
                                            onClick={() => setStep(4)}
                                            type="button"
                                            disabled={!canGoStep4}
                                            title={
                                                !canGoStep4
                                                    ? "Please enter your name and email to continue"
                                                    : ""
                                            }
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Deposit by E-transfer
                                    </h2>
                                    <p className="mt-1 text-sm text-muted">
                                        Your booking is placed on hold until the
                                        deposit is confirmed.
                                    </p>

                                    <div className="mt-5 rounded-xl border border-border bg-surface p-5">
                                        <p className="text-sm font-semibold">
                                            Deposit amount
                                        </p>
                                        <p className="mt-1 text-2xl font-semibold">
                                            $15.00
                                        </p>

                                        <div className="mt-5 grid gap-2 text-sm">
                                            <p>
                                                <span className="font-semibold">
                                                    Send to:
                                                </span>{" "}
                                                veesnails@etransfer.ca (example)
                                            </p>
                                            <p>
                                                <span className="font-semibold">
                                                    Message:
                                                </span>{" "}
                                                Your name (so Vee can match your
                                                deposit)
                                            </p>
                                            <p className="text-xs text-muted">
                                                Demo note: the actual
                                                email/handle will be confirmed
                                                with you.
                                            </p>
                                        </div>

                                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                            <button
                                                type="button"
                                                className="btn-primary"
                                                onClick={() => {
                                                    setDepositSent(true);
                                                    setStep(5);
                                                }}
                                            >
                                                I sent the deposit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-secondary"
                                                onClick={goBack}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-xl border border-border bg-background p-4 text-sm text-muted">
                                        You can choose how strict the hold
                                        window is (example: 2–4 hours). If the
                                        deposit isn’t received in time, the time
                                        slot can automatically reopen.
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Booking on hold
                                    </h2>
                                    <p className="mt-1 text-sm text-muted">
                                        You’ll receive an email confirmation
                                        once the deposit is verified.
                                    </p>

                                    <div className="mt-5 rounded-xl border border-border bg-surface p-5">
                                        <p className="text-sm font-semibold">
                                            Status
                                        </p>
                                        <p className="mt-1 text-base font-semibold text-link-hover">
                                            On hold (waiting for deposit
                                            confirmation)
                                        </p>

                                        <div className="mt-4 grid gap-2 text-sm text-muted">
                                            <p>
                                                <span className="font-semibold text-foreground">
                                                    Appointment:
                                                </span>{" "}
                                                {selectedSlot
                                                    ? `${selectedSlot.dateLabel} • ${selectedSlot.timeLabel}`
                                                    : "—"}
                                            </p>
                                            <p>
                                                <span className="font-semibold text-foreground">
                                                    Services:
                                                </span>{" "}
                                                {selectedServices.length
                                                    ? selectedServices
                                                          .map((s) => s.name)
                                                          .join(", ")
                                                    : "—"}
                                            </p>
                                            <p>
                                                <span className="font-semibold text-foreground">
                                                    Total (preview):
                                                </span>{" "}
                                                {formatMoney(subtotal)}
                                            </p>
                                            <p>
                                                <span className="font-semibold text-foreground">
                                                    Deposit:
                                                </span>{" "}
                                                $15.00{" "}
                                                {depositSent
                                                    ? "(marked as sent)"
                                                    : ""}
                                            </p>
                                        </div>

                                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                            <Link
                                                className="btn-secondary"
                                                href="/admin"
                                            >
                                                Go to Admin Demo
                                            </Link>
                                            <button
                                                className="btn-primary"
                                                type="button"
                                                onClick={reset}
                                            >
                                                Start over
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-xl border border-border bg-background p-4 text-sm text-muted">
                                        Optional: If another booking is
                                        confirmed first, the system can email
                                        the client to reschedule or select
                                        another available time.
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Summary panel */}
                        <aside className="rounded-xl border border-border bg-surface p-5">
                            <p className="text-sm font-semibold">Summary</p>

                            <div className="mt-4 space-y-3 text-sm">
                                <div>
                                    <p className="text-xs font-semibold text-muted">
                                        Selected services
                                    </p>
                                    {selectedServices.length ? (
                                        <ul className="mt-2 space-y-1">
                                            {selectedServices.map((s) => (
                                                <li
                                                    key={s.id}
                                                    className="flex items-center justify-between"
                                                >
                                                    <span>{s.name}</span>
                                                    <span className="font-semibold">
                                                        {formatMoney(s.price)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-2 text-muted">
                                            None selected yet
                                        </p>
                                    )}
                                </div>

                                <div className="border-t border-border pt-3">
                                    <p className="text-xs font-semibold text-muted">
                                        Time
                                    </p>
                                    <p className="mt-2">
                                        {selectedSlot ? (
                                            <>
                                                <span className="font-semibold">
                                                    {selectedSlot.dateLabel}
                                                </span>{" "}
                                                <span className="text-muted">
                                                    •
                                                </span>{" "}
                                                <span className="font-semibold">
                                                    {selectedSlot.timeLabel}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-muted">
                                                Not selected yet
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className="border-t border-border pt-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-semibold text-muted">
                                            Total (preview)
                                        </p>
                                        <p className="text-base font-semibold">
                                            {formatMoney(subtotal)}
                                        </p>
                                    </div>
                                    <p className="mt-1 text-xs text-muted">
                                        Deposit is separate (example: $15).
                                    </p>
                                </div>

                                <div className="border-t border-border pt-3">
                                    <p className="text-xs font-semibold text-muted">
                                        What happens next
                                    </p>
                                    <p className="mt-2 text-muted">
                                        Booking is placed on hold until the
                                        deposit is confirmed by the technician.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3">
                                {step > 1 ? (
                                    <button
                                        className="btn-secondary"
                                        type="button"
                                        onClick={goBack}
                                    >
                                        Back
                                    </button>
                                ) : null}

                                {step === 1 ? (
                                    <button
                                        className="btn-primary"
                                        type="button"
                                        disabled={!canGoStep2}
                                        onClick={() => setStep(2)}
                                    >
                                        Continue
                                    </button>
                                ) : null}

                                {step === 2 ? (
                                    <button
                                        className="btn-primary"
                                        type="button"
                                        disabled={!canGoStep3}
                                        onClick={() => setStep(3)}
                                    >
                                        Continue
                                    </button>
                                ) : null}

                                {step === 3 ? (
                                    <button
                                        className="btn-primary"
                                        type="button"
                                        disabled={!canGoStep4}
                                        onClick={() => setStep(4)}
                                    >
                                        Continue
                                    </button>
                                ) : null}

                                {step === 4 ? (
                                    <button
                                        className="btn-primary"
                                        type="button"
                                        onClick={() => {
                                            setDepositSent(true);
                                            setStep(5);
                                        }}
                                    >
                                        Mark deposit as sent
                                    </button>
                                ) : null}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
