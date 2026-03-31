import SectionBlock from "@/components/home/SectionBlock";
import ScrollLink from "@/components/ui/ScrollLink";

export default function BookingCTA({id = "booking"}: {id?: string}) {
    return (
        <SectionBlock
            title="Ready to Book Your Appointment?"
            description="Choose your service, select your time, and secure your spot in just a few clicks."
            background="bg-surface-2"
            id={id}
        >
            <p className="mt-4 text-sm italic text-muted">
                Please review{" "}
                <ScrollLink
                    className="text-link font-bold underline hover:text-link-hover"
                    href="#policies"
                >
                    policies
                </ScrollLink>{" "}
                before booking.
            </p>

            <div className="mt-8">
                <button className="btn-primary">Book Appointment</button>
            </div>
        </SectionBlock>
    );
}
