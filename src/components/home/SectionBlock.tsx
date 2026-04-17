import SectionHeader from "@/components/ui/SectionHeader";

export default function SectionBlock({
    title,
    description,
    background = "bg-surface-2",
    className = "",
    id = "",
    children,
}: {
    title: string;
    description?: string;
    background?: string;
    className?: string;
    id?: string;
    children?: React.ReactNode;
}) {
    const isPlain = background === "bg-background";

    return (
        <section id={id} className={`bg-background ${className}`}>
            <div className="mx-auto max-w-310 px-6">
                {isPlain ? (
                    <div className="text-center">
                        <SectionHeader
                            title={title}
                            description={description}
                        />
                        {children}
                    </div>
                ) : (
                    <div
                        className={`rounded-2xl ${background} p-10 text-center shadow-sm border border-border/50`}
                    >
                        <SectionHeader
                            title={title}
                            description={description}
                        />
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}
