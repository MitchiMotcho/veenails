export type PolicyItem = {
    title: string;
    description: string;
};


export const policyItems: PolicyItem[] = [
    {
        title: "Booking & Deposits",
        description:
            "To secure appointments for premium services, a small deposit may be required. Deposits are deducted from your final payment.",
    },
    {
        title: "Cancellations",
        description:
            "Please give at least 24 hours notice for cancellations. Late cancellations may result in a lost deposit or a fee.",
    },
    {
        title: "Arrivals & Timing",
        description:
            "Please arrive on time. If you are more than 15 minutes late, we may need to shorten or reschedule your service.",
    },
    {
        title: "Health & Safety",
        description:
            "Please let us know about relevant allergies or medical conditions when booking. We follow strict hygiene and sterilization procedures.",
    },
    {
        title: "Pricing & Add-ons",
        description:
            "Final pricing may vary depending on add-ons, design complexity, or nail condition. We will always confirm pricing before starting.",
    },
];