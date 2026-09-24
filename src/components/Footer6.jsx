"use client";

import { Button, Input } from "@relume_io/relume-ui";
import { useEffect, useState } from "react";
import { BiBell, BiCheck } from "react-icons/bi";
import { FaFacebookSquare, FaTiktok, FaWhatsappSquare } from "react-icons/fa";
import { cn } from "../lib/cn";
import summitLogo from "../assets/summit-roofing-logo(no-bg).png";

const BUTTON_LABELS = {
  idle: "Subscribe",
  sending: "Subscribing",
  sent: "Subscribed",
};

const useNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle");
  const isSubmitting = submitStatus !== "idle";

  useEffect(() => {
    if (submitStatus === "idle") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (submitStatus === "sending") {
        setSubmitStatus("sent");
        return;
      }

      setEmail("");
      setSubmitStatus("idle");
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [submitStatus]);

  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    setSubmitStatus("sending");
  };

  return {
    email,
    handleSetEmail,
    handleSubmit,
    isSubmitting,
    submitStatus,
    buttonLabel: BUTTON_LABELS[submitStatus],
  };
};

export function Footer6() {
  const formState = useNewsletterForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-background-secondary">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="rb-6 mb-6 lg:mb-0">
            <h1 className="font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em] md:text-md">Join our newsletter</h1>
            <p>Get project updates and practical roofing advice from Summit.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-white px-4 shadow-none transition-colors placeholder:text-summit-charcoal/45 focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={formState.handleSetEmail}
                autoComplete="email"
                required
                disabled={formState.isSubmitting}
              />
              <Button
                type="submit"
                className={cn(
                  "group button-summit-subscribe",
                  formState.submitStatus === "sent" &&
                    "!border-summit-green !bg-summit-green !text-summit-white disabled:opacity-100",
                )}
                title={formState.buttonLabel}
                variant="secondary"
                size="sm"
                disabled={formState.isSubmitting}
                aria-busy={formState.submitStatus === "sending"}
                iconLeft={
                  formState.submitStatus === "sent" ? (
                    <BiCheck className="size-5" aria-hidden="true" />
                  ) : (
                    <BiBell
                      className="size-5 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg] group-hover:scale-110"
                      aria-hidden="true"
                    />
                  )
                }
              >
                <span aria-live="polite" aria-atomic="true">
                  {formState.buttonLabel}
                </span>
              </Button>
            </form>
            <p className="text-xs">
              By subscribing you agree to our <a href="/legal/privacy-policy" className="underline">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-[2px] w-full bg-summit-charcoal" />
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em]">Services</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="/services/roof-inspection" className="flex items-center gap-3">
                  Roof inspection
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/services/roof-installation" className="flex items-center gap-3">
                  Roof installation
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/services/roof-repair" className="flex items-center gap-3">
                  Roof repair
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/services/roof-damage-repair" className="flex items-center gap-3">
                  Roof damage
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/services/ceilings" className="flex items-center gap-3">
                  Ceilings
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em]">Summit</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="/" className="flex items-center gap-3">
                  Home
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/projects" className="flex items-center gap-3">
                  Projects
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/how-it-works" className="flex items-center gap-3">
                  How it works
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/why-falcon" className="flex items-center gap-3">
                  Why Summit
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em]">Areas</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="/service-areas/centurion" className="flex items-center gap-3">
                  Centurion
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/service-areas/midrand" className="flex items-center gap-3">
                  Midrand
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/service-areas" className="flex items-center gap-3">
                  Other
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em]">Legal</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="/legal/privacy-policy" className="flex items-center gap-3">
                  Privacy policy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/legal/terms-of-service" className="flex items-center gap-3">
                  Terms of service
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/legal/cookie-policy" className="flex items-center gap-3">
                  Cookie policy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/legal/accessibility" className="flex items-center gap-3">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em]">Contact</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="/#quote" className="flex items-center gap-3">
                  Get a quote
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="tel:+27731244478" className="flex items-center gap-3">
                  Talk to Our Team
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="https://maps.app.goo.gl/YnFLbqtePbjHS15B6" className="flex items-center gap-3">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold text-summit-green-lightest footer-heading uppercase tracking-[0.2em]">Follow us</h2>
            <nav className="flex justify-center pt-5" aria-label="Social media links">
              <ul className="flex items-center gap-4">
                <li>
                  <a href="/social/facebook" aria-label="Follow Summit Roofing on Facebook" className="text-summit-charcoal transition-colors hover:text-summit-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-summit-green-lightest">
                    <FaFacebookSquare className="size-7" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/social/tiktok" aria-label="Follow Summit Roofing on TikTok" className="text-summit-charcoal transition-colors hover:text-summit-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-summit-green-lightest">
                    <FaTiktok className="size-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/27731244478" aria-label="Chat with Summit Roofing on WhatsApp" className="text-summit-charcoal transition-colors hover:text-summit-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-summit-green-lightest">
                    <FaWhatsappSquare className="size-7" aria-hidden="true" />
                  </a>
                </li>
              </ul>
          </nav>
          </div>
        </div>
        <div className="h-[2px] w-full bg-summit-charcoal" />
        <div className="flex flex-col items-start pb-4 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:pb-0 md:pt-8">
          <a href="/" className="mb-6 sm:mb-0" aria-label="Falcon Roofing home">
            <img
              src={summitLogo}
              width="65px"
              alt="Logo image"
            />
          </a>
          <p className="text-sm">© 2026 Summit Roofing Co. All rights reserved. Website by Zenco Web Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
