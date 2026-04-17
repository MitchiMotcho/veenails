import SectionBlock from "@/components/home/SectionBlock";

export default function PricingSection({
    title,
    description,
    background = "bg-surface",
    children,
    id,
}: {
    title: string;
    description?: string;
    background?: string;
    children: React.ReactNode;
    id?: string;
}) {
    return (
        <SectionBlock
            title={title}
            description={description}
            background={background}
            id={id}
        >
            <div className="mt-8">{children}</div>
        </SectionBlock>
    );
}
