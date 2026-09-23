"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";
import SectionTopTwo from "./SectionTopTwo";

export function Layout375() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <SectionTopTwo 
            sectNumber="04"
            sectTitle="Our Services"
            heading="Details Make The Difference"
            description="We take on the essential parts of your project; from the first inspection to the final, cleaned-up site."
            linkUrl="/projects"
            linkText="Previous Work"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {/* Card 1 */}
            <AnimatedCardSection className="flex flex-col"> 
              <AnimatedCard direction="left" delay={0.2}>
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-md">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999568/man-on-roof_uc27lg_9d8ca4.avif"
                    alt="Experst inspecting roof"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-summit-white p-6 rounded-b-md bg-summit-green-dark shadow-large">
                  <div>
                    <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-summit-green-lightest">Inspect</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      Roof inspection
                    </h3>
                    <p>We find the small problems before they become big ones.</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      asChild
                      className="font-semibold text-summit-white link-h-effect"
                      title="More"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      <a href="/services/roof-inspection">More</a>
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            </AnimatedCardSection>
            {/* Card 2 */}
            <AnimatedCardSection className="flex flex-col">
              <AnimatedCard direction="left" delay={0.2}>
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-md">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999573/jametlene-reskp-tiles_u9gsng_9d8ca4.avif"
                    alt="New roof installation"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-summit-white  p-6 rounded-b-md bg-summit-green-dark shadow-large">
                  <div>
                    <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-summit-green-lightest">Install</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      Roof installation
                    </h3>
                    <p>New roofs built to handle Gauteng weather.</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      asChild
                      className="font-semibold text-summit-white link-h-effect"
                      title="More"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      <a href="/services/roof-installation">More</a>
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            </AnimatedCardSection>
            {/* Card 3 */}
            <AnimatedCardSection className="flex flex-col">
              <AnimatedCard direction="left" delay={0.2}>
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-md">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999542/damaged-roof_fguymy_9d8ca4.avif"
                    alt="Repaired zinc roof"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-summit-white  p-6 rounded-b-md bg-summit-green-dark shadow-large">
                  <div>
                    <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-summit-green-lightest">Repair</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      Roof repair
                    </h3>
                    <p>Leaks fixed, sheets replaced, structure made sound again.</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      asChild
                      className="font-semibold text-summit-white link-h-effect"
                      title="More"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      <a href="/services/roof-repair">More</a>
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            </AnimatedCardSection>
            {/* Card 4 */}
            <AnimatedCardSection className="flex flex-col">
              <AnimatedCard direction="left" delay={0.2}>
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-md">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999555/insulated_tr4xv2_9d8ca4.avif"
                    alt="Roof being restored after damage"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-summit-white p-6 rounded-b-md bg-summit-green-dark shadow-large">
                  <div>
                    <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-summit-green-lightest">Restore</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      Roof damage repair
                    </h3>
                    <p>Storm damage and hail damage repaired fast.</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      asChild
                      className="font-semibold text-summit-white link-h-effect"
                      title="More"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      <a href="/services/roof-damage-repair">More</a>
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            </AnimatedCardSection>
            {/* Card 5 */}
            <AnimatedCardSection className="flex h-full flex-col sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <AnimatedCard
                direction="right"
                delay={0.2}
                className="flex h-full min-h-0 flex-col"
              >
                <div className="flex items-center justify-center aspect-[610/360] w-full overflow-hidden rounded-t-md">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999564/brett-jordan-ceiling_rvypi5_9d8ca4.avif"
                    alt="Ceiling"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 text-summit-white md:p-8 lg:p-12 rounded-b-md bg-summit-green-dark shadow-large">
                  <div>
                    <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-summit-green-lightest">Finish</p>
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Ceilings and partitions
                    </h3>
                    <p>
                      We also install and repair ceilings and partitions for homes
                      and commercial spaces across Centurion, Midrand and
                      Rustenburg.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild className="button-summit-primary text-summit-white bg-summit-green" title="All services" variant="secondary">
                      <a href="/services">All services</a>
                    </Button>
                    <Button
                      asChild
                      className="font-semibold text-summit-white link-h-effect"
                      title="Get a quote"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      <a href="/#quote">Get a quote</a>
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            </AnimatedCardSection>
          </div>
        </div>
      </div>
    </section>
  );
}
