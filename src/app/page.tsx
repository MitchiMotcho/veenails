import SectionBlock from "@/components/home/SectionBlock";

import HeroSection from "@/components/home/hero/HeroSection";
import TestimonialCarousel from "@/components/home/testimonials/TestimonialCarousel";
import ServiceCard from "@/components/home/services/ServiceCard";
import FAQSection from "@/components/home/faq/FAQSection";

import { serviceItems } from "@/content/home/services";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col space-y-12 md:space-y-24">
            {/* Hero */}
            <HeroSection />

            {/* Policies */}
            <SectionBlock
                title="Policies"
                description="Before booking, please review our policies and pricing so you have everything you need before your appointment."
                background="bg-surface"
            ></SectionBlock>

            {/* Aftercare */}
            <SectionBlock
                title="Aftercare Instructions"
                description="Simple aftercare steps help maintain the health, look, and longevity of your nails."
                background="bg-surface-2"
            ></SectionBlock>

            {/* Testimonials */}
            <SectionBlock
                title="Testimonials"
                description="Hear from our clients about their experiences at Vee's Nail Studio."
                background="bg-surface"
            >
                <TestimonialCarousel />
            </SectionBlock>

            {/* Services */}
            <SectionBlock
                title="Popular Services"
                description="Explore our most requested nail care services."
                background="bg-background"
            >
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {serviceItems.map((item) => (
                        <ServiceCard
                            key={item.name}
                            title={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </SectionBlock>

            {/* Booking CTA */}
            <SectionBlock
                title="Ready to Book Your Appointment?"
                description="Choose your service, select your time, and secure your spot in just a few clicks."
                background="bg-surface-2"
            >
                <p className="mt-4 text-sm italic text-muted">
                    Please review policies before booking.
                </p>

                <div className="mt-8">
                    <button className="btn-primary">Book Appointment</button>
                </div>
            </SectionBlock>

            {/* FAQ */}
            <FAQSection />
        </main>
    );
}
