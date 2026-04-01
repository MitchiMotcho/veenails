import { GalleryImage } from "@/content/gallery/gallery";
import GalleryTile from "./GalleryTile";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
    return (
        <div className="mt-10 grid grid-cols-1 gap-2 md:auto-rows-[8rem] md:grid-cols-3">
            {images.map((image, index) => (
                <GalleryTile
                    key={`${image.alt}-${index}`}
                    image={image}
                    index={index}
                />
            ))}
        </div>
    );
}
