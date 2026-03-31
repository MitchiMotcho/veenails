type ServiceCardProps = {
    title: string;
    description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="rounded-xl border border-border bg-surface px-4 py-6 shadow-sm">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted">{description}</p>
        </div>
    );
}
