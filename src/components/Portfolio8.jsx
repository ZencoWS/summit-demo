"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";

export function Portfolio8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <TextFade direction="up" staggerChildren={0.2}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4">Projects</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Work that holds
            </h2>
            <p className="md:text-md">
              Real projects. Real roofs. Real proof of the trade.
            </p>
          </TextFade>  
          </div>
          {/* Animate Sect */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            {/* Animate here */}
            <AnimatedCardSection>
              <AnimatedCard direction="left" delay={0.2}>
                <article className="border-none">
                  <div className="aspect-[615/345] w-full overflow-hidden rounded-t-3xl">
                    <a href="/projects/centurion-roof-replacement" className="block size-full">
                      <img
                        src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689058/roof-replace-clean_yxyxks.avif"
                        className="size-full object-cover"
                        alt="Centurion Roof Replacement"
                      />
                    </a>
                  </div>
                  <div className="px-5 py-6 sm:px-6 rounded-b-3xl bg-summit-off-white shadow-large">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      <a href="/projects/centurion-roof-replacement">Centurion roof replacement</a>
                    </h3>
                    <p>
                      Full strip and replacement of a storm-damaged residential roof
                      in Centurion.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                      <li className="flex">
                        <a
                          href="/services/roofing"
                          className="bg-background-secondary px-2 py-1 text-sm font-semibold text-summit-green-lightest rounded-md"
                        >
                          Roofing
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/service-areas/centurion"
                          className="bg-background-secondary px-2 py-1 text-sm font-semibold text-summit-green-lightest rounded-md"
                        >
                          Centurion
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/projects/residential"
                          className="bg-background-secondary px-2 py-1 text-sm font-semibold text-summit-green-lightest rounded-md"
                        >
                          Residential
                        </a>
                      </li>
                    </ul>
                    <Button
                      asChild
                      title="View project"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-5 font-semibold text-summit-charcoal md:mt-6"
                    >
                      <a href="/projects/centurion-roof-replacement">View project</a>
                    </Button>
                  </div>
                </article>
              </AnimatedCard>
            </AnimatedCardSection>
            {/* Animate here */}
            <AnimatedCardSection>
              <AnimatedCard direction="right" delay={0.2}>
                <article className="border-none">
                  <div className="aspect-[615/345] w-full overflow-hidden rounded-t-3xl"> 
                    <a href="/projects/midstream-roof-repair" className="block size-full">
                      <img
                        src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787698663/midstream-cleam_txjcqo.avif"
                        className="size-full object-cover"
                        alt="Worker fixing zinc panels"
                      />
                    </a>
                  </div>
                  <div className="px-5 py-6 sm:px-6 rounded-b-3xl bg-summit-off-white shadow-large">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      <a href="/projects/midstream-roof-repair">Roof repair services</a>
                    </h3>
                    <p>Team member access roof to inspect and identify areas requiring repair.</p>
                    <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                      <li className="flex">
                        <a
                          href="/services/roof-repair"
                          className="bg-background-secondary px-2 py-1 text-sm font-semibold text-summit-green-lightest rounded-md"
                        >
                          Repair
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/service-areas/midstream"
                          className="bg-background-secondary px-2 py-1 text-sm font-semibold text-summit-green-lightest rounded-md"
                        >
                          Midstream
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="/projects/recent-work"
                          className="bg-background-secondary px-2 py-1 text-sm font-semibold text-summit-green-lightest rounded-md"
                        >
                          Recent work
                        </a>
                      </li>
                    </ul>
                    <Button
                      asChild
                      title="View project"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-5 font-semibold text-summit-charcoal md:mt-6"
                    >
                      <a href="/projects/midstream-roof-repair">View project</a>
                    </Button>
                  </div>
                </article>
              </AnimatedCard>
            </AnimatedCardSection>
          </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <TextFade direction="up" staggerChildren={0.2}>
            <Button asChild className="button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="View all" variant="secondary" size="primary">
              <a href="/projects">View all</a>
            </Button>
          </TextFade>
        </div>
      </div>
    </section>
  );
}
