import SectionBlock from "@/components/home/SectionBlock";
import { aftercareItems } from "@/content/home/aftercare";

export default function AftercareSection() {
    return (
        <SectionBlock
            title="Aftercare Instructions"
            description="Simple aftercare steps to help your nails stay beautiful, comfortable, and long-lasting."
            background="bg-surface-2"
        >
            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
                {aftercareItems.map((item, index) => (
                    <div
                        key={item.title}
                        className="flex flex-col md:flex-row items-center gap-4 rounded-2xl border border-border/40 bg-background p-5 shadow-sm"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-button text-sm font-semibold text-button-text shadow-sm">
                            {index + 1}
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-foreground">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionBlock>
    );
}
