"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TextFade } from "../animations/TextFade";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return undefined;
    }

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  const options = {
    loop: true,
  };

  const plugins = [
    Autoplay({
      delay: 5000,
    }),
  ];

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-summit-green" : "bg-summit-charcoal/20"
    }`;
  };

  return {
    options,
    plugins,
    api,
    setApi,
    handleDotClick,
    dotClassName,
  };
};

export function Header102() {
  const carousel = useCarousel();
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0"
    >
      <div className="mx-[5%] max-w-md justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <TextFade direction="up" staggerChildren={0.2}>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Roofing, partition and ceiling specialists in Centurion
          </h1>
          <p className="md:text-md">
            Falcon Roofing provides reliable workmanship across
            Centurion, Midrand, and surrounding areas. We inspect, install, and
            repair with a single objective: a roof that endures.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button asChild className="button-summit-primary" title="Request a quote">
              <a href="/#quote">Request a quote</a>
            </Button>
            <Button
              asChild
              className="group button-summit-whatsapp"
              title="WhatsApp us"
              variant="secondary"
              size="sm"
              iconLeft={<FaWhatsapp className="size-5 transition-transform duration-300 ease-in-out group-hover:scale-110" />}
            >
              <a href="https://wa.me/27731244478">Chat on WhatsApp</a>
            </Button>
          </div>
        </TextFade>
      </div>
      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-summit-off-white text-center">
        <Carousel
          opts={carousel.options}
          plugins={carousel.plugins}
          setApi={carousel.setApi}
          className="relative left-0 right-0 z-10 block h-full overflow-hidden whitespace-nowrap pl-4"
        >
          <CarouselContent>
            {/* Slide 1 */}
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full whitespace-normal text-left align-top">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787688806/still-2-clean_tmpntd.avif"
                      alt="Complete roof"
                    />
                  </div>
                  <div className="relative bg-summit-off-white px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <TextFade direction="up" staggerChildren={0.15}>
                        <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                          Professional Installations
                        </h6>
                        <p>
                          We maintain professionalism throughout every stage of the project
                        </p>
                      </TextFade>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            {/* Slide 2 */}
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full whitespace-normal text-left align-top">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689043/roof-repair-clean_viyxzl.avif"
                      alt="Construction workers inspecting roof"
                    />
                  </div>
                  <div className="relative bg-summit-off-white px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <TextFade direction="up" staggerChildren={0.15}>
                        <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                          Thorough Inspections
                        </h6>
                        <p>
                          We evaluate your roof's condition to ensure safety during inclement weather
                        </p>
                      </TextFade>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            {/* Slide 3 */}
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full whitespace-normal text-left align-top">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689050/roof-damage-repair-clean_vk2shm.avif"
                      alt="Construction worker repairing roof"
                    />
                  </div>
                  <div className="relative bg-summit-off-white px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <TextFade direction="up" staggerChildren={0.15}>
                        <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                          Efficient Repairs
                        </h6>
                        <p>
                          We quickly fix roof damage to restore safety and prevent further issues
                        </p>
                      </TextFade>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute bottom-[52px] left-8 right-auto top-auto flex w-full items-start justify-start">
              <button
                onClick={carousel.handleDotClick(0)}
                className={carousel.dotClassName(0)}
              />
              <button
                onClick={carousel.handleDotClick(1)}
                className={carousel.dotClassName(1)}
              />
              <button
                onClick={carousel.handleDotClick(2)}
                className={carousel.dotClassName(2)}
              />
            </div>
            <CarouselPrevious className="bottom-2 left-auto right-[5.5rem] top-auto size-12 bg-summit-charcoal-5 border-none md:right-24" />
            <CarouselNext className="bottom-2 left-auto right-8 top-auto size-12 bg-summit-charcoal-5 border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
