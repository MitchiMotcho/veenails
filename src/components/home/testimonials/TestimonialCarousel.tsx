"use client";

import Image from "next/image";

import { testimonials } from "@/content/home/testimonials";
import "./testimonials.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Navigation, Pagination, Autoplay, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';

export default function TestimonialCarousel() {
    return (
        <div className="mt-10">
            <div className="relative mx-auto max-w-4xl px-0 md:px-16">
                <button
                    type="button"
                    aria-label="Previous testimonial"
                    className="testimonial-prev absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2 md:inline-flex"
                >
                    <IoChevronBack className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    aria-label="Next testimonial"
                    className="testimonial-next absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2 md:inline-flex"
                >
                    <IoChevronForward className="h-4 w-4" />
                </button>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y, EffectCoverflow]}
                    effect="coverflow"
                    slidesPerView={1}
                    loop
                    speed={600}
                    spaceBetween={42}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 80,
                        modifier: 0.9,
                        slideShadows: false,
                    }}
                    navigation={{
                        prevEl: ".testimonial-prev",
                        nextEl: ".testimonial-next",
                    }}
                    pagination={{
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                        clickable: true,
                    }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide className="min-h-full" key={index}>
                            <div className="mx-auto flex min-h-104 max-w-full sm:max-w-2xl items-center rounded-2xl border border-border/50 bg-background p-4 sm:p-6 md:p-10 shadow-sm sm:min-h-96 md:min-h-88">
                                <div className="flex w-full h-full flex-col items-center justify-evenly mb-8 md:mb-0 text-center md:flex-row md:items-center md:gap-8 md:text-left">
                                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-surface sm:h-32 sm:w-32 md:h-44 md:w-44">
                                        <Image
                                            src={item.image || "/logo.png"}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 768px) 128px, 176px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center justify-center md:items-start">
                                        <p className="text-sm leading-relaxed text-muted sm:text-base md:text-lg">
                                            &ldquo;{item.review}&rdquo;
                                        </p>

                                        <p className="mt-4 text-sm font-semibold text-foreground md:text-base">
                                            &ndash; {item.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <p className="mt-3 text-center text-xs text-muted md:hidden">
                    &larr; Swipe to see more &rarr;
                </p>
            </div>
        </div>
    );
}
