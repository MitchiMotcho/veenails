type CalendarEvent = {
    id: string;
    dateLabel: string; // e.g. "Sat, Feb 21"
    timeLabel: string; // e.g. "2:00 PM"
    status: "available" | "on-hold" | "confirmed" | "cancelled";
    clientName?: string;
    services?: string[];
    total?: number;
};

function money(n?: number) {
    if (typeof n !== "number") return "";
    return `$${n.toFixed(2)}`;
}

export default function CalendarDemo({
    mode,
    events,
}: {
    mode: "client" | "admin";
    events: CalendarEvent[];
}) {
    return (
        <div className="rounded-xl border border-border bg-surface p-5 my-4">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold">
                        Calendar Preview{" "}
                        <span className="text-muted font-semibold">
                            ({mode === "admin" ? "Admin view" : "Client view"})
                        </span>
                    </p>
                    <p className="mt-1 text-xs text-muted">
                        Demo calendar only. Real availability rules can be added
                        later.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-2 text-xs font-semibold">
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-muted">
                        Available
                    </span>
                    <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-link-hover">
                        On hold
                    </span>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-foreground">
                        Confirmed
                    </span>
                </div>
            </div>

            {/* Responsive grid */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((e) => {
                    const isBooked =
                        e.status === "confirmed" || e.status === "on-hold";
                    const isCancelled = e.status === "cancelled";

                    const cardBase =
                        "rounded-xl border p-4 text-left transition-colors";

                    const cardStyle =
                        e.status === "available"
                            ? "border-border bg-background hover:bg-surface-2"
                            : e.status === "on-hold"
                              ? "border-border bg-surface-2"
                              : e.status === "confirmed"
                                ? "border-border bg-background"
                                : "border-border bg-background opacity-60";

                    return (
                        <div key={e.id} className={`${cardBase} ${cardStyle}`}>
                            <p className="text-xs text-muted">{e.dateLabel}</p>
                            <p className="mt-1 font-semibold">{e.timeLabel}</p>

                            {/* Client vs Admin display */}
                            {mode === "client" ? (
                                <div className="mt-2 text-sm">
                                    {e.status === "available" ? (
                                        <span className="text-muted">
                                            Available
                                        </span>
                                    ) : isCancelled ? (
                                        <span className="text-muted">
                                            Unavailable
                                        </span>
                                    ) : (
                                        <span className="text-muted">
                                            Booked
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center gap-2">
                                        {isBooked && e.clientName ? (
                                            <span className="text-xs font-semibold text-foreground">
                                                {e.clientName}
                                            </span>
                                        ) : null}
                                        <span
                                            className={[
                                                "inline-flex rounded-full px-3 py-1 text-xs font-semibold border-2",
                                                e.status === "available"
                                                    ? "border-border bg-background text-muted"
                                                    : e.status === "on-hold"
                                                      ? "border-border bg-surface-2 text-link-hover"
                                                      : e.status === "confirmed"
                                                        ? "border-border bg-background text-foreground"
                                                        : "border-border bg-background text-muted",
                                            ].join(" ")}
                                        >
                                            {e.status === "available"
                                                ? "Available"
                                                : e.status === "on-hold"
                                                  ? "On hold"
                                                  : e.status === "confirmed"
                                                    ? "Confirmed"
                                                    : "Cancelled"}
                                        </span>
                                    </div>

                                    {isBooked && e.services?.length ? (
                                        <p className="text-xs text-muted">
                                            {e.services.join(", ")}
                                        </p>
                                    ) : null}

                                    {isBooked && typeof e.total === "number" ? (
                                        <p className="text-xs text-muted">
                                            Total:{" "}
                                            <span className="font-semibold">
                                                {money(e.total)}
                                            </span>
                                        </p>
                                    ) : null}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-5 rounded-xl border border-border bg-background p-4 text-xs text-muted">
                Client view hides details and only shows “Booked”. Admin view
                shows names, services, and status.
            </div>
        </div>
    );
}
