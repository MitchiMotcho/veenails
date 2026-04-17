import SectionBlock from "@/components/home/SectionBlock";
import FAQItem from "@/components/home/faq/FAQItem";
import { faqItems } from "@/content/home/faq";

export default function FAQSection({ id = "" }: { id?: string }) {
    return (
        <SectionBlock
            id={id}
            title="Frequently Asked Questions"
            description="Common questions about bookings, services, and what to expect."
            background="bg-surface"
            className="mb-12 md:mb-24"
        >
            <div className="mt-8 space-y-4 text-left">
                {faqItems.map((item) => (
                    <FAQItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </SectionBlock>
    );
}
