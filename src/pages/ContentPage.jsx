import { Button } from "@relume_io/relume-ui";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer6 } from "../components/Footer6";
import { Navbar5 } from "../components/Navbar5";

const sectionCopy = {
  about: "Learn more about Summit Roofing, our workmanship, and the team behind every project.",
  region: "Contact our team to determine whether we provide services in your region.",
  contact: "Speak to the Summit Roofing team about your roof, ceiling, or partition project.",
  projects: "Explore roofing, ceiling, and partition work completed by Summit Roofing.",
  quote: "Tell us about your project and we'll help you plan the right next step.",
  resources: "Practical roofing guidance and updates from recent Summit Roofing projects.",
  services: "Explore Summit Roofing's inspection, installation, repair, ceiling, and partition services.",
  "service-areas": "Reliable roofing services across Centurion, Midrand and surrounding areas. Contact our team to determine whether we provide services in your region.",
  legal: "Important information about using the Summit Roofing website and services.",
};

const humanize = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default function ContentPage() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const section = segments[0] || "home";
  const title = humanize(segments.at(-1) || "Falcon Roofing");
  const description =
    sectionCopy[section] ||
    "This page is currently under construction. Please check back soon.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar5 />
      <section className="px-[5%] py-20 md:py-28 lg:py-36">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest">
            Summit Roofing Co.
          </p>
          <h1 className="mb-6 text-6xl font-bold md:text-8xl lg:text-9xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-summit-charcoal/70">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="button-summit-primary" title="Request a quote">
              <a href="/#quote">Request a quote</a>
            </Button>
            <Button
              asChild
              className="button-summit-secondary text-summit-charcoal bg-summit-charcoal-5 border-border-ink-5"
              title="Back to home"
              variant="secondary"
            >
              <a href="/">Back to home</a>
            </Button>
          </div>
        </div>
      </section>
      <Footer6 />
    </>
  );
}
