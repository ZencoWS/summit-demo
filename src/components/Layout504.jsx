"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";
import SectionTopTwo from "./SectionTopTwo";

export function Layout504() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-summit-white">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <SectionTopTwo 
            sectNumber="02"
            sectTitle="Why Summit"
            heading="Quality That Holds"
            description="Clear advice, careful workmanship and a practical plan for your roof. Know what needs doing and what to expect at every step."
            linkUrl="/services"
            linkText="Explore services"
          />
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center md:items-end lg:items-end">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TextFade direction="up" staggerChildren={0.3} className="items-center">
              <TabsTrigger
                value="tab-one"
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-summit-green-lightest data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                Workmanship
              </TabsTrigger>
            </TextFade>
            <TextFade direction="up" staggerChildren={0.3}>
              <TabsTrigger
                value="tab-two"
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-summit-green-lightest data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                Reliability
              </TabsTrigger>
            </TextFade>
            <TextFade direction="up" staggerChildren={0.3}>
              <TabsTrigger
                value="tab-three"
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-summit-green-lightest data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                Experience
              </TabsTrigger>
            </TextFade>
          </TabsList>
          <AnimatedCardSection>
            <AnimatedCard direction="up" delay={0.15}>
              <TabsContent
                value="tab-one"
                className="data-[state=active]:animate-tabs"
              >
                <div className="grid grid-cols-1 border-none md:grid-cols-2 md:items-stretch">
                  <div className="aspect-square w-full overflow-hidden rounded-t-md sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-md md:rounded-r-none shadow-large">
                    <img
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999537/green-roof-install_arsi7z_9d8ca4.avif"
                      className="size-full object-cover h-[480px]"
                      alt="Tiles being add to roof structure"
                    />
                  </div>
                  <div className="aspect-square place-content-center rounded-b-md bg-summit-green-dark sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-md md:rounded-l-none shadow-large">
                    <div className="p-6 md:p-8 lg:p-12">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-summit-white md:mb-4 md:text-base">Workmanship</p>
                      <h2 className="mb-5 text-3xl text-summit-white font-bold leading-tigh uppercase sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        <span className="text-summit-green-light">Every seam</span> is sealed and <span className="text-summit-green-lighter">every sheet</span> is <span className="text-summit-green-lightest">fixed right</span>
                      </h2>
                      <p className="text-sm leading-relaxed md:text-base text-summit-white">
                        We treat each roof as if it were our own. No shortcuts, no
                        patch jobs that fail in the next storm.
                      </p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <Button asChild className="button-summit-primary text-summit-white bg-summit-green" title="Get a quote" variant="secondary">
                          <a href="/#quote">Get a quote</a>
                        </Button>
                        <Button
                          asChild
                          className="text-sm font-semibold text-summit-white md:text-base link-h-effect"
                          title="Our work"
                          variant="link"
                          size="link"
                          iconRight={<RxChevronRight />}
                        >
                          <a href="/projects">Our work</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </AnimatedCard>
          </AnimatedCardSection>
          <AnimatedCardSection>
            <AnimatedCard direction="up" delay={0.15}>
              <TabsContent
                value="tab-two"
                className="data-[state=active]:animate-tabs"
              >
                <div className="grid grid-cols-1 border-none md:grid-cols-2 md:items-stretch">
                  <div className="aspect-square w-full overflow-hidden rounded-t-md sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-md md:rounded-r-none shadow-large">
                    <img
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1790119076/copy_of_pexels-clement-proust-363898785-31771166_zpdvpg.avif"
                      className="size-full object-cover h-[480px]"
                      alt="Roof with solar pannels"
                    />
                  </div>
                  <div className="aspect-square place-content-center rounded-b-md bg-summit-green-dark sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-md md:rounded-l-none shadow-large">
                    <div className="p-6 md:p-8 lg:p-12">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-summit-white md:mb-4 md:text-base">Reliability</p>
                      <h2 className="mb-5 text-3xl text-summit-white font-bold uppercase leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        We show up <span className="text-summit-green-lighter">when promised</span> and <span className="text-summit-green-lightest">finish the job</span> properly
                      </h2>
                      <p className="text-sm leading-relaxed md:text-base text-summit-white">
                        From the first inspection to the final check, we communicate clearly, work responsibly and follow through on every commitment.
                      </p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <Button asChild className="button-summit-primary text-summit-white bg-summit-green" title="Get a quote" variant="secondary">
                          <a href="/#quote">Get a quote</a>
                        </Button>
                        <Button
                          asChild
                          className="text-sm font-semibold text-summit-white md:text-base link-h-effect"
                          title="Our work"
                          variant="link"
                          size="link"
                          iconRight={<RxChevronRight />}
                        >
                          <a href="/projects">Our work</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </AnimatedCard>
          </AnimatedCardSection>
          <AnimatedCardSection>
            <AnimatedCard direction="up" delay={0.15}>
              <TabsContent
                value="tab-three"
                className="data-[state=active]:animate-tabs"
              >
                <div className="grid grid-cols-1 border-none md:grid-cols-2 md:items-stretch">
                  <div className="aspect-square w-full overflow-hidden rounded-t-md sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-md md:rounded-r-none shadow-large">
                    <img
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999547/beams_frhpgr_9d8ca4.avif"
                      className="size-full object-cover h-[480px]"
                      alt="Roof underconstruction"
                    />
                  </div>
                  <div className="aspect-square place-content-center rounded-b-md bg-summit-green-dark sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-md md:rounded-l-none shadow-large">
                    <div className="p-6 md:p-8 lg:p-12">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-summit-white md:mb-4 md:text-base">Experience</p>
                      <h2 className="mb-5 text-3xl text-summit-white font-bold uppercase leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        Knowing <span className="text-summit-green-lighter">what to look for</span> makes <span className="text-summit-green-lightest">all the difference</span>
                      </h2>
                      <p className="text-sm leading-relaxed md:text-base text-summit-white">
                        We understand how each part of a roofing system works together, helping us identify problems and choose the right solution.
                      </p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <Button asChild className="button-summit-primary text-summit-white bg-summit-green" title="Get a quote" variant="secondary">
                          <a href="/#quote">Get a quote</a>
                        </Button>
                        <Button
                          asChild
                          className="text-sm font-semibold text-summit-white md:text-base link-h-effect"
                          title="Our work"
                          variant="link"
                          size="link"
                          iconRight={<RxChevronRight />}
                        >
                          <a href="/projects">Our work</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </AnimatedCard>
          </AnimatedCardSection>
        </Tabs>
      </div>
    </section>
  );
}
