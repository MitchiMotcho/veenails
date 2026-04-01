export default function PageHeader({
    intro,
    title,
    description,
}: {
    intro: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium tracking-wide text-dark-green">
                {intro}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                {title}
            </h1>
            <p className="mt-4 text-muted md:text-lg">
                {description}
            </p>
        </div>
    );
}
