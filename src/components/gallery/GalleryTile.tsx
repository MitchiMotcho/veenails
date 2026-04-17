"use client";

import Image from "next/image";
import { useState } from "react";

import { GalleryImage } from "@/content/gallery/gallery";

function getTileClass(index: number) {
    const patterns = [
        "md:col-span-1 md:row-span-3", // portrait / phone-like
        "md:col-span-1 md:row-span-2", // standard
        "md:col-span-1 md:row-span-2", // standard
        "md:col-span-2 md:row-span-2", // landscape
        "md:col-span-1 md:row-span-2", // standard
        "md:col-span-1 md:row-span-3", // portrait
    ];

    return patterns[index % patterns.length];
}

function getHeightClass(index: number) {
    const patterns = [
        "h-[28rem] md:h-full", // portrait
        "h-[18rem] md:h-full", // standard
        "h-[18rem] md:h-full", // standard
        "h-[18rem] md:h-full", // landscape on mobile still neat
        "h-[18rem] md:h-full", // standard
        "h-[28rem] md:h-full", // portrait
    ];

    return patterns[index % patterns.length];
}

export default function GalleryTile({
    image,
    index,
}: {
    image: GalleryImage;
    index: number;
}) {
    const [src, setSrc] = useState(image.src || "/placeholder.png");

    return (
        <div
            className={`group overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm transition-shadow hover:shadow-md ${getTileClass(
                index,
            )}`}
        >
            <div className={`relative w-full ${getHeightClass(index)}`}>
                <Image
                    src={src || "/placeholder.png"}
                    alt={image.alt}
                    loading="eager"
                    fill
                    onError={() => setSrc("/placeholder.png")}
                    className={`object-cover transition-transform duration-300 ${
                        image.caption
                            ? "group-hover:scale-[1.04]"
                            : "group-hover:scale-[1.02]"
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {image.caption && (
                    <div className="flex justify-center items-baseline pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-light-pink via-surface to-transparent px-4 pb-3 pt-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-xs leading-relaxed text-dark-pink font-bold font-header sm:text-sm">
                            {image.caption}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
