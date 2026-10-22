"use client";

import { Button, CarouselNext, CarouselPrevious } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Testimonial from "./TestimonialCard";

export default function CustomerReviewsSect({
    sectNumber="05",
    sectTitle="Customer Reviews",
    heading="Trusted When",
    colorText="It Matters.",
    description="Trust is built one roof at a time through dependable workmanship, clear communication, and results our customers can rely on.",
}) {
    return (
        <section
            id="relume"  
            className="px-[5%] py-16 bg-summit-off-white md:py-24 lg:py-28"
        >
            <div className="container">
                {/* SectionTop102 */}
                <div className="relative mb-12 md:mb-18 lg:mb-20">

                    {/* 2-col grid, items-start keeps both columns top-aligned (not
                        centered/stretched) — the "flex-start" behavior you asked for.
                        Each column gets its own TextFade so the grid split isn't collapsed
                        by TextFade's own wrapper element (that was the bug before: one
                        TextFade around both columns made them one grid item instead of two). */}
                    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
                        <TextFade direction="up" staggerChildren={0.2}>
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest">
                                {sectNumber} / {sectTitle}
                            </p>
                        </TextFade>

                        <TextFade direction="up" staggerChildren={0.2}>
                            <div className="flex flex-col items-start text-left text-summit-charcoal">
                                <h2 className="mb-5 text-5xl font-bold uppercase md:mb-6 md:text-7xl lg:text-8xl">
                                {heading} <span className="text-summit-green-lighter">{colorText}</span>
                                </h2>
                                <p className="md:text-md">
                                {description}
                                </p>
                            </div>
                        </TextFade>
                    </div>

                    {/* Horizontal line rule separating the header from the cards grid below */}
                    <div
                        aria-hidden="true"
                        className="mt-10 border-t-2 border-summit-green-lightest md:mt-14"
                    />
                </div>
                {/* Reviews Carousel SwiperJS */}
                {/* Preview */}
                <div className="px-2 py-2 border-2 border-red-500">
                    <ul className="flex flex-row gap-4 px-4 py-4 justify-start items-start">
                        <Testimonial 
                            rating={4}
                            message="They found the leak in twenty minutes. Fixed it the same day."
                            profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705418/pexels-paiva-31704065_p9mtmy.jpg"
                            name="Pieter Venter"
                            property="Homeowner"
                            location="Centurion"
                        />
                    </ul>
                </div>            
            </div>
        </section>
    )
}