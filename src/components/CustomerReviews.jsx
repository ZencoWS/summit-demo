"use client";

import { useRef } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard, Autoplay } from "swiper/modules";
import Testimonial from "./TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

export default function CustomerReviewsSect({
    sectNumber="05",
    sectTitle="Customer Reviews",
    heading="Trusted When",
    colorText="It Matters.",
    description="Trust is built one roof at a time through dependable workmanship, clear communication, and results our customers can rely on.",
}) {

    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const paginationRef = useRef(null);

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
                {/* Testimonial Preview 
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
                */}
                <div className="px-2 py-2">
                    <TextFade direction="up" staggerChildren={0.2}>
                        <Swiper
                            // Tailwind Styling
                            className="w-full rounded-md"
                            // Swiper modules
                            modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
                            spaceBetween={1}
                            slidesPerView={20}
                            breakpoints={{
                                // When the window width is >= 320px 
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 20,
                                },

                                // When the window width is >= 480px 
                                480: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 30,
                                },

                                // When the window width is >= 640px
                                640: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 35,
                                },

                                // When the window width is >= 769px 
                                769: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 50,
                                },
                                // When the window width is >= 965px
                                1080: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                    spaceBetween: 60,
                                }
                            }}
                            navigation={{
                                prevEl: previousButtonRef.current,
                                nextEl: nextButtonRef.current,
                            }}
                            pagination={{
                                el: paginationRef.current,
                                clickable: true,
                                bulletClass: "review-pagination-bullet",
                                bulletActiveClass: "review-pagination-bullet-active",
                            }}
                            autoplay={{ delay: 5000, enabled: true,  stopOnLastSlide: false, disableOnInteraction: true }}
                            keyboard={{ enabled: true }}
                            // Animating card content:
                            speed={600}
                            watchSlidesProgress
                            onBeforeInit={(swiper) => {
                                const navigation = {
                                    prevEl: previousButtonRef.current,
                                    nextEl: nextButtonRef.current,
                                };
                                const pagination = {
                                    el: paginationRef.current,
                                    clickable: true,
                                    bulletClass: "review-pagination-bullet",
                                    bulletActiveClass: "review-pagination-bullet-active",
                                };

                                Object.assign(swiper.params.navigation, navigation);
                                Object.assign(swiper.originalParams.navigation, navigation);
                                Object.assign(swiper.params.pagination, pagination);
                                Object.assign(swiper.originalParams.pagination, pagination);
                            }}
                            
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className="h-auto">
                                {/* Test: <article className="h-full rounded-lg bg-summit-green-lightest p-6 shadow-md">Slide 1</article> */}
                                {/* Add h-full to card component */}
                                <div className="review-slide-content">
                                    <Testimonial 
                                        rating={4}
                                        message="They found the leak in twenty minutes. Fixed it the same day."
                                        profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705418/pexels-paiva-31704065_p9mtmy.jpg"
                                        name="Pieter Venter"
                                        property="Homeowner"
                                        location="Centurion"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="h-auto">
                                <div className="review-slide-content">
                                    <Testimonial 
                                        rating={5}
                                        message="The new roof went up fast. No mess left behind."
                                        profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705418/pexels-boko-shots-812604874-20130727_b8mddf.jpg"
                                        name="Sarah Nkosi"
                                        property="Homeowner"
                                        location="Centurion"
                                    />
                                </div>
                            </SwiperSlide>    
                            <SwiperSlide className="h-auto">
                                <div className="review-slide-content">
                                    <Testimonial 
                                        rating={4}
                                        message="Honest quote. The price did not change. The work was solid."
                                        profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705418/pexels-kevin-birchfield-12896468-7400021_o5kixd.jpg"
                                        name="Johan Botha"
                                        property="Homeowner"
                                        location="Centurion"
                                    />      
                                </div>
                            </SwiperSlide>    
                            <SwiperSlide className="h-auto">
                                <div className="review-slide-content">
                                    <Testimonial 
                                        rating={4.4}
                                        message="They repaired the hail damage before the next storm hit."
                                        profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705419/pexels-ramyphotographer-36390233_zeknft.jpg"
                                        name="Lerato Mokoena"
                                        property="Homeowner"
                                        location="Rustenburg"
                                    />      
                                </div>
                            </SwiperSlide>    
                            <SwiperSlide className="h-auto">
                                <div className="review-slide-content">
                                    <Testimonial 
                                        rating={5}
                                        message="The ceiling install was clean. The team knew their trade."
                                        profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705418/pexels-d67-hunter-2154822929-36535613_dnnvsr.jpg"
                                        name="Ashwin Naidoo"
                                        property="Business owner"
                                        location="Midrand"
                                    />        
                                </div>
                            </SwiperSlide>    
                            <SwiperSlide className="h-auto">
                                <div className="review-slide-content">
                                    <Testimonial 
                                        rating={3.8}
                                        message="They showed up on time. They did what they said they would."
                                        profilePic="https://res.cloudinary.com/fjyy6lhd/image/upload/v1792705418/pexels-boko-shots-812604874-30386124_hlyyux.jpg"
                                        name="Samkelo Zwide"
                                        property="Homeowner"
                                        location="Centurion"
                                    />      
                                </div>
                            </SwiperSlide>        
                        </Swiper> 
                    </TextFade>
                </div>
                {/* Custom Bullets & buttons */}
                <TextFade direction={0.3} staggerChildren="up">
                    <div className="mt-8 px-4 flex items-center justify-between">
                        {/* Custom pagination dots */}
                        <div 
                            ref={paginationRef}
                            type="button"
                            className="flex items-center gap-2" 
                            aria-label="Testimonial pages"
                        />
                        {/* Custom navigation buttons */}
                        <div className="flex gap-4 justify-center">
                            <button
                                ref={previousButtonRef}
                                type="button"
                                aria-label="Previous testimonials"
                                className="review-control-button"
                            >
                                <RxChevronLeft className="size-6" />
                            </button>

                            <button
                                ref={nextButtonRef}
                                type="button"
                                aria-label="Next testimonials"
                                className="review-control-button"
                            >
                                <RxChevronRight className="size-6" />
                            </button>
                        </div>
                    </div>
                </TextFade>
            </div>
        </section>
    )
}
