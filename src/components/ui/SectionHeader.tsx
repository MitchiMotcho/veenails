type SectionHeaderProps = {
    title: string;
    description?: string;
    eyebrow?: string;
    centered?: boolean;
};

export default function SectionHeader({
    title,
    description,
    eyebrow,
    centered = true,
}: SectionHeaderProps) {
    return (
        <div
            className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
        >
            {eyebrow ? (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dark-green">
                    {eyebrow}
                </p>
            ) : null}
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
            {description ? (
                <p className="mt-4 text-muted">{description}</p>
            ) : null}
        </div>
    );
}
