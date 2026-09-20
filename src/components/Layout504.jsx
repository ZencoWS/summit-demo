"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";

export function Layout504() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-summit-white">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          
          <div className="mx-auto max-w-lg text-center">
            <TextFade direction="up" staggerChildren={0.2}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4">Why Falcon</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Built on workmanship
              </h1>
              <p className="md:text-md">
                We do not hide behind slogans. We show up, assess the job honestly
                and do the work properly. That is our promise.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button asChild className="button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="Get a quote" variant="secondary">
                  <a href="/#quote">Get a quote</a>
                </Button>
                <Button
                  asChild
                  className="font-semibold text-summit-green-lightest"
                  title="Our work"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  <a href="/projects">Our work</a>
                </Button>
              </div>
            </TextFade>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TextFade direction="up" staggerChildren={0.3} className="items-center">
              <TabsTrigger
                value="tab-one"
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                Workmanship
              </TabsTrigger>
            </TextFade>
            <TextFade direction="up" staggerChildren={0.3}>
              <TabsTrigger
                value="tab-two"
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                Reliability
              </TabsTrigger>
            </TextFade>
            <TextFade direction="up" staggerChildren={0.3}>
              <TabsTrigger
                value="tab-three"
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
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
                  <div className="aspect-square w-full overflow-hidden rounded-t-3xl sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-3xl md:rounded-r-none shadow-large">
                    <img
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689054/roof-1-clean_n5euhk.avif"
                      className="size-full object-cover"
                      alt="Tiles being add to roof structure"
                    />
                  </div>
                  <div className="aspect-square place-content-center rounded-b-3xl bg-summit-off-white sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-3xl md:rounded-l-none shadow-large">
                    <div className="p-6 md:p-8 lg:p-12">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4 md:text-base">Workmanship</p>
                      <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        Every seam is sealed and every sheet is fixed right
                      </h2>
                      <p className="text-sm leading-relaxed md:text-base">
                        We treat each roof as if it were our own. No shortcuts, no
                        patch jobs that fail in the next storm.
                      </p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <Button asChild className="text-sm md:text-base button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="Get a quote" variant="secondary">
                          <a href="/#quote">Get a quote</a>
                        </Button>
                        <Button
                          asChild
                          className="text-sm font-semibold text-summit-green-lightest md:text-base"
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
                  <div className="aspect-square w-full overflow-hidden rounded-t-3xl sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-3xl md:rounded-r-none shadow-large">
                    <img
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689061/solar-pannels-clean_oalxnk.avif"
                      className="size-full object-cover"
                      alt="Roof with solar pannels"
                    />
                  </div>
                  <div className="aspect-square place-content-center rounded-b-3xl bg-summit-off-white sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-3xl md:rounded-l-none shadow-large">
                    <div className="p-6 md:p-8 lg:p-12">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4 md:text-base">Reliability</p>
                      <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        We show up when promised and finish the job properly
                      </h2>
                      <p className="text-sm leading-relaxed md:text-base">
                        From the first inspection to the final check, we communicate clearly, work responsibly and follow through on every commitment.
                      </p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <Button asChild className="text-sm md:text-base button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="Get a quote" variant="secondary">
                          <a href="/#quote">Get a quote</a>
                        </Button>
                        <Button
                          asChild
                          className="text-sm font-semibold text-summit-green-lightest md:text-base"
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
                  <div className="aspect-square w-full overflow-hidden rounded-t-3xl sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-l-3xl md:rounded-r-none shadow-large">
                    <img
                      src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787690790/support-beams_hvkywj.avif"
                      className="size-full object-cover"
                      alt="Roof underconstruction"
                    />
                  </div>
                  <div className="aspect-square place-content-center rounded-b-3xl bg-summit-off-white sm:max-md:aspect-[615/345] md:h-full md:aspect-auto md:rounded-r-3xl md:rounded-l-none shadow-large">
                    <div className="p-6 md:p-8 lg:p-12">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4 md:text-base">Experience</p>
                      <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        Knowing what to look for makes all the difference
                      </h2>
                      <p className="text-sm leading-relaxed md:text-base">
                        We understand how each part of a roofing system works together, helping us identify problems and choose the right solution.
                      </p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <Button asChild className="text-sm md:text-base button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="Get a quote" variant="secondary">
                          <a href="/#quote">Get a quote</a>
                        </Button>
                        <Button
                          asChild
                          className="text-sm font-semibold text-summit-green-lightest md:text-base"
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
