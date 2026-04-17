import ButtonLink from "./ButtonLink";

export default function PageHeader({
    intro,
    title,
    description,
    redirectURL,
    redirectPage,
}: {
    intro: string;
    title: string;
    description: string;
    redirectURL?: string;
    redirectPage?: string;
}) {
    const bookingURL =
        process.env.NEXT_PUBLIC_BOOKING_URL ||
        "https://booking.veenailstudio.ca";

    return (
        <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium tracking-wide text-dark-green">
                {intro}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                {title}
            </h1>
            <p className="mt-4 text-muted md:text-lg">{description}</p>

            {redirectURL && redirectPage && (
                <div className="mt-8 flex flex-col items-center justify-center gap-4 w-full sm:flex-row">
                    <ButtonLink
                        className="w-full sm:w-auto"
                        href={bookingURL}
                        external
                    >
                        Book Now
                    </ButtonLink>
                    <ButtonLink
                        className="w-full sm:w-auto"
                        href={redirectURL || "#"}
                        variant="secondary"
                    >
                        {redirectPage}
                    </ButtonLink>
                </div>
            )}
        </div>
    );
}
