"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";

export function Layout375() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <TextFade direction="up" staggerChildren={0.2}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4">Services</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                What we do
              </h2>
              <p className="md:text-md">
                Roofing, ceilings and partitions. Done properly, the first time.
              </p>
            </TextFade>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {/* Card 1 */}
            <AnimatedCardSection className="flex flex-col"> 
              <AnimatedCard direction="left" delay={0.2}>
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689043/roof-repair-clean_viyxzl.avif"
                    alt="Experst inspecting roof"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 rounded-b-3xl bg-summit-off-white shadow-large">
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
                      className="font-semibold text-summit-green-lightest"
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
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689045/still-3-clean_hwsymw.avif"
                    alt="New roof installation"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 rounded-b-3xl bg-summit-off-white shadow-large">
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
                      className="font-semibold text-summit-green-lightest"
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
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787778293/roof-repair_shxdeo.avif"
                    alt="Repaired zinc roof"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 rounded-b-3xl bg-summit-off-white shadow-large">
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
                      className="font-semibold text-summit-green-lightest"
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
                <div className="flex items-center justify-center aspect-[300/170] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689050/roof-damage-repair-clean_vk2shm.avif"
                    alt="Roof being restored after damage"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 rounded-b-3xl bg-summit-off-white shadow-large">
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
                      className="font-semibold text-summit-green-lightest"
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
                <div className="flex items-center justify-center aspect-[610/360] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787776381/ceiling-2_fgs3ud.avif"
                    alt="Ceiling"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12 rounded-b-3xl bg-summit-off-white shadow-large">
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
                    <Button asChild className="button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="All services" variant="secondary">
                      <a href="/services">All services</a>
                    </Button>
                    <Button
                      asChild
                      className="font-semibold text-summit-green-lightest"
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
