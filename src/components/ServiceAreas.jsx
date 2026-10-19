"use client";

import { useRef, useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";
import { optimize } from "../utils/cloudinary";

/**
 * ServiceAreasSection
 * ---------------------------------------------------------------------------
 * Reusable "where we work" tabs section. Clicking a tab on the left swaps
 * the image on the right with a crossfade. Built with plain React state +
 * Tailwind transitions, so it has zero runtime dependencies beyond React.
 *
 * Colors are read from CSS custom properties (with sensible fallbacks) so
 * you can wire this straight into your color.css tokens instead of hunting
 * down hex values in the component itself. Add these to your palette file,
 * or just override the fallbacks below:
 *
 *   --sas-surface        section background (deep teal)
 *   --sas-accent         active tab background (mint)
 *   --sas-accent-ink     text color on the mint tab
 *   --sas-accent-soft    "Get a quote" link color on inactive tabs
 *
 * Usage:
 *   <ServiceAreasSection areas={myAreas} />
 * If you skip the `areas` prop it renders with the three example areas
 * below so you can see it working immediately.
 */

const defaultAreas = [
  {
    id: "centurion",
    title: "Centurion",
    description: "Roofing, ceiling and partition services",
    image: "https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689384/centurion-skyline_la7scn.avif",
    ctaHref: "#quote",
  },
  {
    id: "midrand",
    title: "Midrand",
    description: "Serving residential and commercial properties",
    image: "https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689381/Midrand_gqefw3.avif",
    ctaHref: "#quote",
  },
  {
    id: "surrounding",
    title: "Surrounding areas",
    description: "Tell us your suburb to confirm availability",
    image: "https://res.cloudinary.com/fjyy6lhd/image/upload/v1787689386/Rustenburg_zt8xra.avif",
    ctaHref: "#quote",
  },
];

export default function ServiceAreasSection({
  sectNumber="06",
  sectTitle="Where We Work",
  heading="Proudlt Local",
  description="Based in Centurion and serving homes and businesses in Midrand, Pretoria and surrounding areas.",
  link="/areas",
  linkText="Check your area",
  ctaLabel = "Get a quote",
  areas = defaultAreas,
}) {
  const [activeId, setActiveId] = useState(areas[0]?.id);
  const tabRefs = useRef([]);
  const activeArea = areas.find((area) => area.id === activeId) ?? areas[0];

  const focusTab = (index) => {
    const nextIndex = (index + areas.length) % areas.length;
    setActiveId(areas[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(areas.length - 1);
    }
  };

  return (
    <section
      id="relume"  
      className="px-[5%] py-16 text-white md:py-24 lg:py-28"
      style={{ backgroundColor: "var(--sas-surface, #1c4a43)" }}
    >
        <div className="container">
            {/* SectionTop101 */}
            <div className="relative mb-12 md:mb-18 lg:mb-20">
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
                    {/* Left */}
                    <TextFade direction="up" staggerChildren={0.2}>
                        <div className="flex flex-col items-start text-left text-summit-off-white">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest">
                                {sectNumber} / {sectTitle}
                            </p>
                            <h2 className="mb-5 text-5xl font-bold uppercase md:mb-6 md:text-7xl lg:text-8xl">
                                {heading}
                            </h2>
                            <p className="md:text-md">
                                {description}
                            </p>
                        </div>
                    </TextFade>

                    {/* Right */}
                    <TextFade direction="up" staggerChildren={0.2}>
                        <div className="flex flex-col items-end text-left text-summit-charcoal">
                            <Button
                            asChild
                            className="text-sm font-semibold text-summit-off-white md:text-base link-h-effect"
                            title={linkText}
                            variant="link"
                            size="link"
                            iconRight={<RxChevronRight className="text-summit-green-lightest"/>}
                            >
                            <a href={link}>{linkText}</a>
                            </Button>
                        </div>
                    </TextFade>
                </div>

                <div
                    aria-hidden="true"
                    className="mt-10 border-t-2 border-summit-green-lightest md:mt-14"
                />
            </div>

            <div className="grid gap-4 lg:grid-cols-[360px_1fr] lg:gap-10">
            {/* Tab list */}
            <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Service areas"
                className="flex flex-col gap-4 lg:h-full"
            >
                {areas.map((area, index) => {
                const isActive = area.id === activeId;
                return (
                    <button
                        key={area.id}
                        ref={(el) => (tabRefs.current[index] = el)}
                        type="button"
                        role="tab"
                        id={`tab-${area.id}`}
                        aria-selected={isActive}
                        aria-controls={`panel-${activeArea.id}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveId(area.id)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        className="group relative w-full overflow-hidden rounded-md py-6 pl-8 pr-6 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sas-surface,#1c4a43)] lg:flex-1"
                        style={{
                            backgroundColor: isActive
                            ? "var(--sas-accent, #7fd6c4)"
                            : "rgba(255,255,255,0.06)",
                            color: isActive ? "var(--sas-accent-ink, #0f3630)" : "#ffffff",
                        }}
                        >
                        {/* Active-state accent rail */}
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-0 h-full w-2 bg-white transition-opacity duration-300"
                            style={{ opacity: isActive ? 1 : 0 }}
                        />
                        <span className="block font-heading text-xl font-bold">{area.title}</span>
                        <span
                            className="mt-1 block font-sans text-sm"
                            style={{
                            color: isActive
                                ? "var(--sas-accent-ink, #0f3630)"
                                : "rgba(255,255,255,0.7)",
                            opacity: isActive ? 0.85 : 1,
                            }}
                        >
                            {area.description}
                        </span>
                        <a
                            href="/#quote"
                            className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-medium transition-colors"
                            style={{
                            color: isActive
                                ? "var(--sas-accent-ink, #0f3630)"
                                : "var(--sas-accent-soft, #7fd6c4)",
                            }}
                        >
                            <span className="hover:underline hover:underline-offset-2">{ctaLabel}</span>
                            <RxChevronRight aria-hidden="true" />
                        </a>
                    </button>
                );
                })}
            </div>

            {/* Image panel — all images stay mounted and crossfade via opacity */}
            <div
                role="tabpanel"
                id={`panel-${activeArea.id}`}
                aria-labelledby={`tab-${activeArea.id}`}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md sm:aspect-[16/10]"
            >
                {areas.map((area) => (
                <img
                    key={area.id}
                    src={optimize(area.image)}
                    alt={area.title}
                    aria-hidden={area.id !== activeId}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
                    style={{ opacity: area.id === activeId ? 1 : 0 }}
                />
                ))}
            </div>
            </div>
        </div>
    </section>
  );
}
