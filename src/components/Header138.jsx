"use client";

import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import { StaggeredFade } from "../animations/StaggeredFade";
import { TextFade } from "../animations/TextFade";
import falconLogoWhite from "../assets/Falcon-roofing-logo-white.png";

export function Header138() {
  return (
    <section id="relume" className="flex min-h-svh flex-col md:h-svh">
      <div className="relative flex flex-1 flex-col">
        <div className="relative flex-1">
          <img
            className="absolute inset-0 aspect-[3/2] size-full object-cover"
            src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689052/builder-onsite-clean_npxkfv.avif"
            alt="Worker climbing ladder to build roof"
          />
        </div>
        <div className="absolute bottom-[-15%] right-[5%] w-[30%] md:w-1/5">
          <img
            className="aspect-square size-full object-cover rounded-t-3xl"
            src={falconLogoWhite}
            alt="Falcon Roofing Logo"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="px-[5%] bg-summit-white">
        <div className="container">
          <div className="py-12 md:py-18 lg:py-20">
            <div className="auto-cols-1fr mt-[5%] grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
              <div>
                <StaggeredFade
                  text="Coming soon..." 
                  className="text-6xl font-bold text-text-primary md:text-9xl lg:text-10xl">
                </StaggeredFade>
              </div>
              <div>
                <TextFade direction="up" staggerChildren={0.2}>
                  <p className="text-base text-text-primary md:text-md">
                    Site under construction, we're currently working on something new. Please check back soon.
                  </p>
                  <div className="mt-6 flex gap-x-4 md:mt-8">
                    <Button asChild className="button-summit-primary" title="Back to Home">
                      <Link to="/">Back to Home</Link>
                    </Button>
                    <Button asChild className="button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="Contact Us" variant="secondary">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </TextFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
