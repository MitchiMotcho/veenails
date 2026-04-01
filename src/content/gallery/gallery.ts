export type GalleryImage = {
    src: string;
    alt: string;
    size?: "square" | "tall" | "wide";
    caption?: string;
};

export type GalleryGroup = {
    title: string;
    id?: string;
    description: string;
    background?: "bg-background" | "bg-surface" | "bg-surface-2";
    images: GalleryImage[];
};

export const gallerySections: GalleryGroup[] = [
    {
        title: "Featured Work",
        id: "featured",
        description:
            "A curated look at some of our favourite recent sets, from clean everyday styles to detailed custom designs.",
        background: "bg-surface",
        images: [
            { src: "/gallery/featured-1.jpg", alt: "Pink gel nails", size: "tall" },
            { src: "/gallery/featured-2.jpg", alt: "Minimal nude manicure", size: "square" },
            { src: "/gallery/featured-3.jpg", alt: "Detailed nail art set", size: "wide" },
            { src: "/gallery/featured-4.jpg", alt: "Glossy almond nails", size: "square" },
            { src: "/gallery/featured-5.jpg", alt: "Soft chrome nails", size: "tall" },
        ],
    },
    {
        title: "Retention",
        id: "retention",
        description:
            "A closer look at how our sets wear over time, with proper prep, care, and maintenance.",
        background: "bg-surface-2",
        images: [
            { src: "/gallery/retention-1.jpg", alt: "Nail retention after two weeks", size: "square", caption: "2 weeks retention" },
            { src: "/gallery/retention-2.jpg", alt: "Long-lasting gel set", size: "tall" },
            { src: "/gallery/retention-3.jpg", alt: "Retention close-up", size: "wide" },
            { src: "/gallery/retention-4.jpg", alt: "Healthy regrowth example", size: "square" },
        ],
    },
    {
        title: "Doupi",
        id: "doupi",
        description:
            "My personal assistant. Doupi may be around during some appointments and is part of the cozy atmosphere here.",
        background: "bg-surface",
        images: [
            { src: "/gallery/doupi-1.jpg", alt: "Doupi relaxing in the studio", size: "square" },
            { src: "/gallery/doupi-2.jpg", alt: "Doupi by the window", size: "tall" },
            { src: "/gallery/doupi-3.jpg", alt: "Doupi in the studio space", size: "wide" },
        ],
    },
];