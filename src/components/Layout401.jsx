"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

// Process Icons 
import requestIcon from "../assets/icons/quiz.svg"
import propertyIcon from "../assets/icons/roof.svg"
import receiveIcon from "../assets/icons/rate-review.svg"
import constructionIcon from "../assets/icons/wrench-hammer.svg"
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";
import { SectionTopOne } from "./SectionTopOne";

export function Layout401() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-summit-green">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <SectionTopOne 
            sectNumber="03"
            sectTitle="How We Work"
            heading="PROPER WORK."
            colorText=" CLEAR COMMUNICATION."
            description="Starting with the initial discussion, your project proceeds through four distinct phases; planning, preparation, installation, and final completion."
          />
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {/* Animate here */}
          <AnimatedCardSection>
            <AnimatedCard direction="left" delay={0.2}>    
              <div className="flex flex-col justify-center text-summit-white bg-summit-green-dark rounded-md p-6 shadow-large">
                <div className="mb-3 md:mb-4">
                  <img
                    src={requestIcon}
                    className="size-12"
                    alt="Request Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Request a quotation
                </h3>
                <p>Send us a message or call. Tell us what you need.</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    asChild
                    className="font-semibold text-summit-white link-h-effect"
                    title="Start"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    <a href="/contact">Get in touch</a>
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </AnimatedCardSection>
          {/* Animate here */}
          <AnimatedCardSection>
            <AnimatedCard direction="left" delay={0.2}>
              <div className="flex flex-col justify-center text-summit-white bg-summit-green-dark rounded-md p-6 shadow-large">
                <div className="mb-3 md:mb-4">
                  <img
                    src={propertyIcon}
                    className="size-12"
                    alt="Roof Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Conduct an inspection
                </h3>
                <p>We come out, look at the job and take measurements.</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    asChild
                    className="font-semibold text-summit-white link-h-effect"
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    <a href="/services/roof-inspection">Begin inspection</a>
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </AnimatedCardSection>
          {/* Animate here */}
          <AnimatedCardSection> 
            <AnimatedCard direction="left" delay={0.2}>
              <div className="flex flex-col justify-center text-summit-white bg-summit-green-dark rounded-md roun p-6 shadow-large">
                <div className="mb-3 md:mb-4">
                  <img
                    src={receiveIcon}
                    className="size-12"
                    alt="Review Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Receive your quote
                </h3>
                <p>You get a clear recommendation and an honest price metrics.</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    asChild
                    className="font-semibold text-summit-white link-h-effect"
                    title="Next"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    <a href="/#quote">Approve quote</a>
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </AnimatedCardSection>
          {/* Animate here */}
          <AnimatedCardSection>
            <AnimatedCard direction="left" delay={0.2}>
              <div className="flex flex-col justify-center text-summit-white bg-summit-green-dark rounded-md p-6 shadow-large">
                <div className="mb-3 md:mb-4">
                  <img
                    src={constructionIcon}
                    className="size-12"
                    alt="Wrench and Hammer Icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Work is underway
                </h3>
                <p>We arrive, do the job and leave the site clean.</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    asChild
                    className="font-semibold text-summit-white link-h-effect"
                    title="Finish"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    <a href="/#quote">Start the work</a>
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </AnimatedCardSection>
        </div>
      </div>
    </section>
  );
}
