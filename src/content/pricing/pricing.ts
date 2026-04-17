export type PriceVariant = {
    id: string;
    label: string;
    price: number;
    note?: string;
};

export type PricingItem = {
    id: string;
    name: string;
    description?: string;
    standaloneBookingAllowed: boolean;
    active: boolean;
    variants: PriceVariant[];
};

export type PricingGroup = {
    id: string;
    title: string;
    description?: string;
    items: PricingItem[];
};

export type DesignTier = {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    active: boolean;
};

export const pricingGroups: PricingGroup[] = [
    {
        id: "apres-gel-x",
        title: "Apres Gel-X",
        description: "Includes one solid color.",
        items: [
            {
                id: "apres-gel-x",
                name: "Length Base Price",
                standaloneBookingAllowed: true,
                active: true,
                variants: [
                    { id: "short", label: "Short", price: 70 },
                    { id: "medium", label: "Medium", price: 75 },
                    { id: "long", label: "Long", price: 80 },
                    { id: "extra-long", label: "Extra Long", price: 85 },
                ],
            },
        ],
    },
    {
        id: "structured-gel-manicure",
        title: "Structured Gel Manicure",
        description: "Includes one solid color.",
        items: [
            {
                id: "structured-short",
                name: "Short",
                standaloneBookingAllowed: true,
                active: true,
                variants: [
                    { id: "base", label: "Base", price: 65 },
                    { id: "infill", label: "Infill", price: 60 },
                    {
                        id: "rebalance",
                        label: "Rebalance",
                        price: 70,
                        note: "After 4 weeks",
                    },
                ],
            },
            {
                id: "structured-medium-long",
                name: "Medium / Long",
                standaloneBookingAllowed: true,
                active: true,
                variants: [
                    { id: "base", label: "Base", price: 70 },
                    { id: "infill", label: "Infill", price: 65 },
                    { id: "rebalance", label: "Rebalance", price: 75 },
                ],
            },
        ],
    },
    {
        id: "freestyle",
        title: "Freestyle",
        items: [
            {
                id: "freestyle",
                name: "",
                standaloneBookingAllowed: true,
                active: true,
                variants: [{ id: "base", label: "Freestyle", price: 85 }],
            },
        ],
    },
    {
        id: "removals",
        title: "Removals",
        items: [
            {
                id: "removals",
                name: "",
                standaloneBookingAllowed: true,
                active: true,
                variants: [
                    {
                        id: "with-new-set",
                        label: "Removal with New Set",
                        price: 10,
                    },
                    { id: "only", label: "Removal Only", price: 20 },
                ],
            },
        ],
    },
];

export const designTiers: DesignTier[] = [
    {
        id: "tier-1",
        name: "Tier 1",
        description: "Minimal designs, accent nails, minimal charms.",
        price: 10,
        images: [
            "/pricing/tier1-1.png",
            "/pricing/tier1-2.png",
            "/pricing/tier1-3.png",
            "/pricing/tier1-4.png",
        ],
        active: true,
    },
    {
        id: "tier-2",
        name: "Tier 2",
        description:
            "French tips, simple 3D design, marble nails, airbrush effect, max of 5 charms.",
        price: 20,
        images: [
            "/pricing/tier2-1.png",
            "/pricing/tier2-2.png",
            "/pricing/tier2-3.png",
            "/pricing/tier2-4.png",
        ],
        active: true,
    },
    {
        id: "tier-3",
        name: "Tier 3",
        description:
            "Intricate designs, detailed nail art, multiple sculpted 3D elements, unlimited charms.",
        price: 35,
        images: [
            "/pricing/tier3-1.png",
            "/pricing/tier3-2.png",
            "/pricing/tier3-3.png",
            "/pricing/tier3-4.png",
        ],
        active: true,
    },
    {
        id: "tier-4",
        name: "Tier 4",
        description:
            "Advanced nail art, multiple hand-sculpted 3D elements, hand-painted detailed art, embellishments.",
        price: 45,
        images: [
            "/pricing/tier4-1.png",
            "/pricing/tier4-2.png",
            "/pricing/tier4-3.png",
            "/pricing/tier4-4.png",
        ],
        active: true,
    },
];
