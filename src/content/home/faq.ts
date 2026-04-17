export type FAQItem = {
    question: string;
    answer: string;
};

export const faqItems: FAQItem[] = [
    {
        question: "How do deposits work?",
        answer:
            "Deposits are non-refundable and required to secure your appointment. They are paid at the time of the booking and will go toward your final total.",
    },
    {
        question: "Can I reschedule my appointment?",
        answer:
            "Yes, rescheduling is available within the policy window. Please contact us as early as possible.",
    },
    {
        question: "What happens if I am late?",
        answer:
            "If you are within 15 minutes of your appointment time, please reach out to us as soon as possible and we will try to accomodate. Please note that later arrivals may result in shortened services or cancellation depending on timing and availability.",
    },
    {
        question: "Do you offer removals?",
        answer:
            "We only offer removals for our own nail sets. Removals can be added when selecting your services while booking. Please make sure to select that option so enough time is reserved.",
    },
];