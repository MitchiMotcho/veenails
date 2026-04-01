"use client";

import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import SectionBlock from "@/components/home/SectionBlock";
import ScrollLink from "@/components/ui/ScrollLink";

export default function BookingCTA({ id = "booking" }: { id?: string }) {
    const [reviewedPolicies, setReviewedPolicies] = useState(false);

    return (
        <SectionBlock
            title="Ready to Book Your Appointment?"
            description="Choose your service, select your time, and secure your spot in just a few clicks."
            background="bg-surface-2"
            id={id}
        >
            <p className="mt-4 text-sm italic text-muted">
                Please review our{" "}
                <ScrollLink
                    className="text-link font-bold underline hover:text-link-hover"
                    href="#policies"
                >
                    policies
                </ScrollLink>{" "}
                section before booking.
            </p>

            <div className="mt-4 flex justify-center">
                <label
                    htmlFor="reviewed-policies"
                    className="inline-flex items-center gap-3 cursor-pointer"
                >
                    <input
                        type="checkbox"
                        id="reviewed-policies"
                        checked={reviewedPolicies}
                        onChange={() => setReviewedPolicies(!reviewedPolicies)}
                        className="sr-only peer"
                    />

                        <span className="h-5 w-5 flex items-center justify-center rounded-md border border-border bg-background transition-colors peer-checked:bg-button peer-checked:border-button peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-button/50">
                            <IoCheckmark
                                className={
                                    reviewedPolicies
                                        ? "w-4 h-4 text-white transform scale-100 opacity-100 transition-all duration-200 stroke-2"
                                        : "w-4 h-4 text-white transform scale-75 opacity-0 transition-all duration-150"
                                }
                            />
                        </span>

                    <span className="text-sm text-muted">
                        I have reviewed and agree to the booking policies.
                    </span>
                </label>
            </div>

            <div className="mt-8">
                <button className="btn-primary" disabled={!reviewedPolicies}>
                    Book Appointment
                </button>
            </div>
        </SectionBlock>
    );
}
