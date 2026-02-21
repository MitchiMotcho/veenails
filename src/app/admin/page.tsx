"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import CalendarDemo from "@/components/CalendarDemo";

type BookingStatus = "on-hold" | "confirmed" | "cancelled";

type AdminBooking = {
    id: string;
    clientName: string;
    email: string;
    dateLabel: string;
    timeLabel: string;
    services: string[];
    total: number;
    deposit: number;
    status: BookingStatus;
    note?: string;
};

function formatMoney(n: number) {
    return `$${n.toFixed(2)}`;
}

const INITIAL: AdminBooking[] = [
    {
        id: "b1",
        clientName: "Sarah M.",
        email: "sarah@email.com",
        dateLabel: "Sat, Feb 21",
        timeLabel: "2:00 PM",
        services: ["Gel-X Set", "Design (Difficult)"],
        total: 95,
        deposit: 15,
        status: "on-hold",
        note: "Waiting for deposit confirmation",
    },
    {
        id: "b2",
        clientName: "Jenna K.",
        email: "jenna@email.com",
        dateLabel: "Sun, Feb 22",
        timeLabel: "11:00 AM",
        services: ["Fill", "Removal"],
        total: 70,
        deposit: 15,
        status: "confirmed",
    },
];

const ADMIN_EVENTS = [
    {
        id: "a1",
        dateLabel: "Sat, Feb 21",
        timeLabel: "12:00 PM",
        status: "confirmed" as const,
        clientName: "Jenna K.",
        services: ["Fill", "Removal"],
        total: 70,
    },
    {
        id: "a2",
        dateLabel: "Sat, Feb 21",
        timeLabel: "2:00 PM",
        status: "on-hold" as const,
        clientName: "Sarah M.",
        services: ["Gel-X Set", "Design (Difficult)"],
        total: 95,
    },
    {
        id: "a3",
        dateLabel: "Sun, Feb 22",
        timeLabel: "4:00 PM",
        status: "available" as const,
    },
];

export default function AdminPage() {
    const [bookings, setBookings] = useState<AdminBooking[]>(INITIAL);
    const [filter, setFilter] = useState<"all" | BookingStatus>("all");

    const filtered = useMemo(() => {
        if (filter === "all") return bookings;
        return bookings.filter((b) => b.status === filter);
    }, [bookings, filter]);

    function updateStatus(id: string, status: BookingStatus) {
        setBookings((prev) =>
            prev.map((b) =>
                b.id === id ? { ...b, status, note: undefined } : b,
            ),
        );
    }

    return (
        <main className="min-h-dvh bg-background text-foreground">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
                            Demo preview — no real bookings are being managed
                        </p>
                        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                            Admin
                        </h1>
                        <p className="mt-2 text-sm text-muted">
                            This page shows how Vee can confirm bookings after
                            deposits are received.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link className="btn-secondary" href="/booking">
                            View Booking Demo
                        </Link>
                        <Link className="btn-link" href="/flow">
                            See Flow Chart
                        </Link>
                    </div>
                </div>

                <CalendarDemo mode='admin' events={ADMIN_EVENTS} />

                <div className="mt-8 rounded-xl border border-border bg-surface p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-semibold">
                            Booking requests
                        </p>

                        <div className="flex gap-2">
                            <button
                                className={
                                    filter === "all"
                                        ? "btn-primary"
                                        : "btn-secondary"
                                }
                                onClick={() => setFilter("all")}
                                type="button"
                            >
                                All
                            </button>
                            <button
                                className={
                                    filter === "on-hold"
                                        ? "btn-primary"
                                        : "btn-secondary"
                                }
                                onClick={() => setFilter("on-hold")}
                                type="button"
                            >
                                On hold
                            </button>
                            <button
                                className={
                                    filter === "confirmed"
                                        ? "btn-primary"
                                        : "btn-secondary"
                                }
                                onClick={() => setFilter("confirmed")}
                                type="button"
                            >
                                Confirmed
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background">
                        {/* Desktop Table Header */}
                        <div className="hidden lg:grid grid-cols-[1.2fr_1fr_0.9fr_0.9fr_1fr] gap-0 border-b border-border bg-surface px-4 py-3 text-xs font-semibold text-muted">
                            <div>Client</div>
                            <div>Appointment</div>
                            <div>Total</div>
                            <div>Status</div>
                            <div className="text-right">Actions</div>
                        </div>

                        {filtered.map((b) => (
                            <div
                                key={b.id}
                                className="hidden lg:grid grid-cols-[1.2fr_1fr_0.9fr_0.9fr_1fr] items-start gap-0 border-b border-border px-4 py-4 text-sm"
                            >
                                <div>
                                    <p className="font-semibold">
                                        {b.clientName}
                                    </p>
                                    <p className="text-xs text-muted">
                                        {b.email}
                                    </p>
                                    <p className="mt-2 text-xs text-muted">
                                        {b.services.join(", ")}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        {b.dateLabel}
                                    </p>
                                    <p className="text-xs text-muted">
                                        {b.timeLabel}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        {formatMoney(b.total)}
                                    </p>
                                    <p className="text-xs text-muted">
                                        Deposit: {formatMoney(b.deposit)}
                                    </p>
                                </div>

                                <div>
                                    <span
                                        className={[
                                            "inline-flex rounded-full border px-3 py-1 text-xs font-semibold",
                                            b.status === "on-hold"
                                                ? "border-border bg-surface-2 text-link-hover"
                                                : b.status === "confirmed"
                                                  ? "border-border bg-surface text-foreground"
                                                  : "border-border bg-surface text-muted",
                                        ].join(" ")}
                                    >
                                        {b.status === "on-hold"
                                            ? "On hold"
                                            : b.status === "confirmed"
                                              ? "Confirmed"
                                              : "Cancelled"}
                                    </span>
                                    {b.note ? (
                                        <p className="mt-2 text-xs text-muted">
                                            {b.note}
                                        </p>
                                    ) : null}
                                </div>

                                <div className="flex justify-end gap-2">
                                    {b.status !== "confirmed" ? (
                                        <button
                                            className="btn-primary"
                                            onClick={() =>
                                                updateStatus(b.id, "confirmed")
                                            }
                                            type="button"
                                        >
                                            Confirm
                                        </button>
                                    ) : null}

                                    {b.status !== "cancelled" ? (
                                        <button
                                            className="btn-secondary"
                                            onClick={() =>
                                                updateStatus(b.id, "cancelled")
                                            }
                                            type="button"
                                        >
                                            Cancel
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                        ))}

                        {/* Mobile Card View */}
                        <div className="lg:hidden space-y-3 p-4">
                            {filtered.map((b) => (
                                <div
                                    key={b.id}
                                    className="rounded-lg border border-border bg-surface p-4 space-y-3"
                                >
                                    <div>
                                        <p className="font-semibold">
                                            {b.clientName}
                                        </p>
                                        <p className="text-xs text-muted">
                                            {b.email}
                                        </p>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <p className="text-xs text-muted">
                                                Services
                                            </p>
                                            <p className="text-xs">
                                                {b.services.join(", ")}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <p className="text-xs text-muted">
                                                    Appointment
                                                </p>
                                                <p className="font-semibold">
                                                    {b.dateLabel}
                                                </p>
                                                <p className="text-xs text-muted">
                                                    {b.timeLabel}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted">
                                                    Cost
                                                </p>
                                                <p className="font-semibold">
                                                    {formatMoney(b.total)}
                                                </p>
                                                <p className="text-xs text-muted">
                                                    Dep:{" "}
                                                    {formatMoney(b.deposit)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <span
                                            className={[
                                                "inline-flex rounded-full border px-3 py-1 text-xs font-semibold",
                                                b.status === "on-hold"
                                                    ? "border-border bg-surface-2 text-link-hover"
                                                    : b.status === "confirmed"
                                                      ? "border-border bg-surface text-foreground"
                                                      : "border-border bg-surface text-muted",
                                            ].join(" ")}
                                        >
                                            {b.status === "on-hold"
                                                ? "On hold"
                                                : b.status === "confirmed"
                                                  ? "Confirmed"
                                                  : "Cancelled"}
                                        </span>
                                        {b.note ? (
                                            <p className="mt-2 text-xs text-muted">
                                                {b.note}
                                            </p>
                                        ) : null}
                                    </div>

                                    <div className="flex gap-2">
                                        {b.status !== "confirmed" ? (
                                            <button
                                                className="btn-primary flex-1"
                                                onClick={() =>
                                                    updateStatus(
                                                        b.id,
                                                        "confirmed",
                                                    )
                                                }
                                                type="button"
                                            >
                                                Confirm
                                            </button>
                                        ) : null}

                                        {b.status !== "cancelled" ? (
                                            <button
                                                className="btn-secondary flex-1"
                                                onClick={() =>
                                                    updateStatus(
                                                        b.id,
                                                        "cancelled",
                                                    )
                                                }
                                                type="button"
                                            >
                                                Cancel
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-border bg-background p-4 text-sm text-muted">
                        Demo note: In the real system, confirming a booking
                        updates the calendar and triggers an email confirmation
                        automatically.
                    </div>
                </div>
            </section>
        </main>
    );
}
