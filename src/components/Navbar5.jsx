"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiNotepad, BiPhoneCall } from "react-icons/bi";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import falconLogo from "../assets/Falcon-roofing-logo.png";

// Service Drop down Icons:
import roofIcon from "../assets/icons/roof.svg"
import bellIcon from "../assets/icons/bell.svg"
import contactsIcon from "../assets/icons/contacts.svg"
import stairsIcon from "../assets/icons/stairs.svg"
import workIcon from "../assets/icons/work-hours.svg"
import bagIcon from "../assets/icons/shopping-bag.svg"


const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar5() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="relative z-50 flex w-full items-center justify-between bg-background-secondary shadow-xl lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="/" aria-label="Falcon Roofing home">
              <img
                src={falconLogo}
                width="65px"
                alt="Falcon Roofing"
              />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-summit-charcoal"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-summit-charcoal"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-summit-charcoal"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a
              href="/"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Home
            </a>
            <a
              href="/about"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              About
            </a>
            <a
              href="/projects"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6"
            >
              Projects
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Services</span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <motion.div
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: 1,
                    height: "var(--height-open, auto)",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "0",
                    height: "var(--height-close, 0)",
                  },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateDropdownMenu}
                transition={{ duration: 0.3 }}
                className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-secondary lg:absolute lg:w-[100vw] lg:px-[5%] lg:shadow-[0_16px_36px_rgba(13,32,29,0.18)] lg:[--height-close:auto]"
              >
                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                  <div className="w-full lg:flex">
                    <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest leading-[1.3]">
                          Roofing services
                        </h4>
                        <a
                          href="/services/roof-inspection"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={roofIcon}
                              alt="Icon 1"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Roof inspection</h5>
                            <p className="hidden text-sm md:block">
                              Assess the condition of your roof
                            </p>
                          </div>
                        </a>
                        <a
                          href="/services/roof-installation"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={roofIcon}
                              alt="Icon 2"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Roof installation</h5>
                            <p className="hidden text-sm md:block">
                              New roofs built to last
                            </p>
                          </div>
                        </a>
                        <a
                          href="/services/roof-repair"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={roofIcon}
                              alt="Icon 3"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Roof repair</h5>
                            <p className="hidden text-sm md:block">
                              Fix leaks and structural damage
                            </p>
                          </div>
                        </a>
                        <a
                          href="/services/ceilings"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={stairsIcon}
                              alt="Icon 4"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Ceilings</h5>
                            <p className="hidden text-sm md:block">
                              Ceiling installations and repairs
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest leading-[1.3]">
                          Company
                        </h4>
                        <a
                          href="/about"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={bagIcon}
                              alt="Icon 5"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Who Are We</h5>
                            <p className="hidden text-sm md:block">
                              Our story and workmanship
                            </p>
                          </div>
                        </a>
                        <a
                          href="/contact"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={contactsIcon}
                              alt="Icon 6"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Contact Us</h5>
                            <p className="hidden text-sm md:block">
                              Get in touch with our team
                            </p>
                          </div>
                        </a>
                        <a
                          href="/service-areas"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={bellIcon}
                              alt="Icon 7"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Service areas</h5>
                            <p className="hidden text-sm md:block">
                              Centurion, Midrand and Rustenburg
                            </p>
                          </div>
                        </a>
                        <a
                          href="/projects"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src={workIcon}
                              alt="Icon 8"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">Recent work</h5>
                            <p className="hidden text-sm md:block">
                              See our latest completed projects
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="max-w-none relative flex flex-1 p-6 md:py-8 md:pl-8 md:pr-0 lg:max-w-md">
                      <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest leading-[1.3]">
                          Previous work
                        </h4>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                          <a
                            href="/resources/roof-care"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689050/roof-damage-repair-clean_vk2shm.avif"
                                alt="Worker repairing roof"
                                className="absolute inset-0 size-full object-cover rounded-2xl"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold">Roof care</h5>
                              <p className="text-sm">
                                Simple maintenance tips for Gauteng homeowners
                              </p>
                              <span className="mt-1.5 text-sm font-semibold text-summit-green-lightest underline">
                                Read more
                              </span>
                            </div>
                          </a>
                          <a
                            href="/projects/recent-roof-installation"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689054/roof-1-clean_n5euhk.avif"
                                alt="Picture of workers on roof in latest intallation"
                                className="absolute inset-0 size-full object-cover rounded-2xl"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold">
                                Project update
                              </h5>
                              <p className="text-sm">
                                Behind the scenes of a recent roof installation
                              </p>
                              <span className="mt-1.5 text-sm font-semibold text-summit-green-lightest underline">
                                Read more
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Button
                            asChild
                            className="font-semibold text-summit-green-lightest"
                            title="See all projects"
                            variant="link"
                            size="link"
                            iconRight={<RxChevronRight />}
                          >
                            <a href="/projects">See all projects</a>
                          </Button>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              <Button
                asChild
                className="w-full button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5"
                title="Button"
                variant="secondary"
                size="sm"
              >
                <a href="tel:+27731244478">Let's Talk</a>
              </Button>
              <Button asChild className="w-full button-summit-primary" title="Get a quote" size="sm">
                <a href="/#quote">Get a Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          <Button asChild className="button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5" title="Call" variant="secondary" size="sm" iconLeft={<BiPhoneCall className="size-4" />}>
            <a href="tel:+27731244478">Let's Talk</a>
          </Button>
          <Button asChild className="button-summit-primary" title="Quote" size="sm" iconLeft={<BiNotepad className="size-4" />}>
            <a href="/#quote">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
