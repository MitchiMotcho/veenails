import GallerySection from "@/components/gallery/GallerySection";
import PageHeader from "@/components/ui/PageHeader";
import { gallerySections } from "@/content/gallery/gallery";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground py-16 space-y-16">
            <PageHeader
                intro="Photos of our work and Doupi!"
                title="Vee's Nail Studio Gallery"
                description="Explore our gallery to see the stunning nail art and designs created by Vee, from classic manicures to intricate nail art. Don't forget to see Doupi at the bottom as well!"
            />

            {gallerySections.map((section) => (
                <GallerySection key={section.title} id={section.id} {...section} />
            ))}
        </main>
    );
}
