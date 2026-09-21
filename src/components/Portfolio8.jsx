"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";
import { RecentWorkHeader } from "./RecentWorkHeader";

export function Portfolio8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-summit-green">
      <div className="container">
          <RecentWorkHeader />
          {/* Animate Sect */}
          <div className="relative grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            {/* Animate here */}
            <AnimatedCardSection>
              <AnimatedCard direction="left" delay={0.2}>
                <article className="border-none">
                  <div className="aspect-[615/345] w-full overflow-hidden rounded-t-md">
                    <a href="/projects/centurion-roof-replacement" className="block size-full">
                      <img
                        src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999551/water-proofed_b6n2ij_9d8ca4.avif"
                        className="size-full object-cover"
                        alt="Centurion Roof Replacement"
                      />
                    </a>
                  </div>
                  <div className="px-5 py-6 sm:px-6 rounded-b-md bg-summit-green-dark shadow-large">
                    <h3 className="mb-2 text-xl font-bold text-summit-off-white md:text-2xl">
                      <a href="/projects/centurion-roof-replacement">Residential roof replacement</a>
                    </h3>
                    <p className="text-summit-off-white">
                      Replaced worn and damaged roof sections, restoring reliable protection against rain, wind, and harsh weather conditions.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                      <li className="flex">
                        <a
                          href="/services/roofing"
                          className="bg-summit-charcoal px-2 py-1 text-sm font-semibold text-summit-off-white border-2 border-summit-off-white rounded-md"
                        >
                          Roofing
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/service-areas/centurion"
                          className="bg-summit-charcoal px-2 py-1 text-sm font-semibold text-summit-off-white border-2 border-summit-off-white rounded-md"
                        >
                          Centurion
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/projects/residential"
                          className="bg-summit-charcoal px-2 py-1 text-sm font-semibold text-summit-off-white border-2 border-summit-off-white rounded-md"
                        >
                          Residential
                        </a>
                      </li>
                    </ul>
                    <Button
                      asChild
                      title="Discuss your roof"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-5 font-semibold text-summit-off-white md:mt-6 link-h-effect"
                    >
                      <a href="/projects/centurion-roof-replacement">Discuss your roof</a>
                    </Button>
                  </div>
                </article>
              </AnimatedCard>
            </AnimatedCardSection>
            {/* Animate here */}
            <AnimatedCardSection>
              <AnimatedCard direction="right" delay={0.2}>
                <article className="border-none">
                  <div className="aspect-[615/345] w-full overflow-hidden rounded-t-md"> 
                    <a href="/projects/midstream-roof-repair" className="block size-full">
                      <img
                        src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999578/stop-a-tiled-roof-from-leaking_azaveu_9d8ca4.avif"
                        className="size-full object-cover"
                        alt="Worker fixing zinc panels"
                      />
                    </a>
                  </div>
                  <div className="px-5 py-6 sm:px-6 rounded-b-md bg-summit-green-dark shadow-large">
                    <h3 className="mb-2 text-xl font-bold text-summit-off-white md:text-2xl">
                      <a href="/projects/midstream-roof-repair">Roof repair services</a>
                    </h3>
                    <p className="text-summit-off-white">
                      Completed targeted repairs to broken and displaced roof tiles, helping prevent further leaks and water damage.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                      <li className="flex">
                        <a
                          href="/services/roof-repair"
                          className="bg-summit-charcoal px-2 py-1 text-sm font-semibold text-summit-off-white border-2 border-summit-off-white rounded-md"
                        >
                          Repair
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/service-areas/midstream"
                          className="bg-summit-charcoal px-2 py-1 text-sm font-semibold text-summit-off-white border-2 border-summit-off-white rounded-md"
                        >
                          Midstream
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/projects/recent-work"
                          className="bg-summit-charcoal px-2 py-1 text-sm font-semibold text-summit-off-white border-2 border-summit-off-white rounded-md"
                        >
                          Recent work
                        </a>
                      </li>
                    </ul>
                    <Button
                      asChild
                      title="Discuss your roof"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-5 font-semibold text-summit-off-white md:mt-6 link-h-effect"
                    >
                      <a href="/projects/midstream-roof-repair">Discuss your roof</a>
                    </Button>
                  </div>
                </article>
              </AnimatedCard>
            </AnimatedCardSection>

            {/* Divider — horizontal line on mobile (stacked cards), vertical
                line on desktop (side-by-side cards). Positioned absolutely
                and placed after both cards in the DOM, so it can't affect
                grid track sizing, card height, or either card's nth-child
                styling — it's purely a visual overlay drawn in the gap. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-summit-green-lightest md:inset-x-auto md:inset-y-0 md:left-1/2 md:h-auto md:w-0.5 md:-translate-x-1/2 md:translate-y-0"
            />
          </div>
        {/*<div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <TextFade direction="up" staggerChildren={0.2}>
            <Button asChild className="button-summit-secondary text-summit-white bg-summit-charcoal border-border-ink-5" title="View all" variant="secondary" size="primary">
              <a href="/projects">View all</a>
            </Button>
          </TextFade>
        </div> */}
      </div>
    </section>
  );
}