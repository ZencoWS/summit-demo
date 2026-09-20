"use client";

import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import { useEffect, useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";
import { cn } from "../lib/cn";

const INITIAL_FORM_VALUES = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  contactMethod: "",
  message: "",
};

const BUTTON_LABELS = {
  idle: "Get Quote",
  sending: "Sending Request",
  sent: "Request Sent",
};

export function Contact6() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const isSubmitting = submitStatus !== "idle";
  const buttonLabel = BUTTON_LABELS[submitStatus];

  useEffect(() => {
    if (submitStatus === "idle") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (submitStatus === "sending") {
        setSubmitStatus("sent");
        return;
      }

      setFormValues(INITIAL_FORM_VALUES);
      setSubmitStatus("idle");
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [submitStatus]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
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

  return (
    <section id="quote" className="scroll-mt-6 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <TextFade direction="up" staggerChildren={0.2}>
            <div className="mb-8 md:mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest md:mb-4">Quote</p>
              <h2 className="mb-5 text-5xl font-bold leading-[0.98] tracking-[-0.02em] md:mb-6 md:text-7xl lg:text-8xl">
                Request a quote
              </h2>
              <p className="max-w-md text-summit-charcoal/70 md:text-md">
                Provide details about the service you require, and we’ll get back to you shortly.
              </p>
            </div>
            <div className="grid grid-cols-1 border-t border-summit-charcoal/15">
              <div className="flex items-start gap-4 border-b border-summit-charcoal/15 py-4">
                <BiEnvelope className="mt-0.5 size-5 flex-none text-summit-green-lightest" />
                <a href="mailto:enquiry@falconroofing.co.za" className="text-sm font-medium text-summit-charcoal md:text-base">enquiry@falconroofing.co.za</a>
              </div>
              <div className="flex items-start gap-4 border-b border-summit-charcoal/15 py-4">
                <BiPhone className="mt-0.5 size-5 flex-none text-summit-green-lightest" />
                <a href="tel:+27731244478" className="text-sm font-medium text-summit-charcoal md:text-base">073 124 4478</a>
              </div>
              <div className="flex items-start gap-4 py-4">
                <BiMap className="mt-0.5 size-5 flex-none text-summit-green-lightest" />
                <a href="https://www.google.com/maps/search/?api=1&query=8244%2F1+Sebini+St%2C+Rua+Vista%2C+Pretoria%2C+0175" className="text-sm font-medium text-summit-charcoal md:text-base">8244/1 Sebini St, Rua Vista, Pretoria, 0175</a>
              </div>
            </div>
          </TextFade>
        </div>
        <AnimatedCardSection>
          <AnimatedCard direction="up" delay={0.15}>
            <form
              className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2 text-sm font-semibold text-summit-charcoal">
                    Name
                  </Label>
                  <Input
                    className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-white px-4 shadow-none transition-colors placeholder:text-summit-charcoal/45 focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="phone" className="mb-2 text-sm font-semibold text-summit-charcoal">
                    Phone number
                  </Label>
                  <Input
                    className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-white px-4 shadow-none transition-colors placeholder:text-summit-charcoal/45 focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2 text-sm font-semibold text-summit-charcoal">
                    Email
                  </Label>
                  <Input
                    className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-white px-4 shadow-none transition-colors placeholder:text-summit-charcoal/45 focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="city" className="mb-2 text-sm font-semibold text-summit-charcoal">
                    City/Suburb
                  </Label>
                  <Input
                    className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-white px-4 shadow-none transition-colors placeholder:text-summit-charcoal/45 focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="text"
                    id="city"
                    name="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="service" className="mb-2 text-sm font-semibold text-summit-charcoal">Required service</Label>
                <Select
                  name="service"
                  value={formValues.service}
                  onValueChange={(value) =>
                    setFormValues((currentValues) => ({
                      ...currentValues,
                      service: value,
                    }))
                  }
                  required
                  disabled={isSubmitting}
                >
                  <SelectTrigger id="service" className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-white px-4 shadow-none transition-colors focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent className="rounded-summit-control border-summit-charcoal/15 bg-summit-white shadow-none">
                    <SelectItem value="first-choice">Roof inspection</SelectItem>
                    <SelectItem value="second-choice">Roof installation</SelectItem>
                    <SelectItem value="third-choice">Roof repair</SelectItem>
                    <SelectItem value="fourth-choice">Damage repair</SelectItem>
                    <SelectItem value="fifth-choice">Ceilings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full items-center py-3 md:py-4">
                <Label className="mb-3 text-sm font-semibold text-summit-charcoal md:mb-4">Preferred contact method</Label>
                <RadioGroup
                  className="grid grid-cols-2 gap-x-6 gap-y-3.5"
                  name="contactMethod"
                  value={formValues.contactMethod}
                  onValueChange={(value) =>
                    setFormValues((currentValues) => ({
                      ...currentValues,
                      contactMethod: value,
                    }))
                  }
                  required
                  disabled={isSubmitting}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-charcoal/30 text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="whatsapp" id="contact-whatsapp" />
                    <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-charcoal/30 text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="phone-call" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-charcoal/30 text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-charcoal/30 text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="sms" id="contact-sms" />
                    <Label htmlFor="contact-sms">SMS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-charcoal/30 text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="in-person" id="contact-in-person" />
                    <Label htmlFor="contact-in-person">In person</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-charcoal/30 text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="other" id="contact-other" />
                    <Label htmlFor="contact-other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2 text-sm font-semibold text-summit-charcoal">
                  Project description
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the job"
                  className="min-h-[11.25rem] overflow-auto rounded-summit-control border-summit-charcoal/20 bg-summit-white p-4 shadow-none transition-colors placeholder:text-summit-charcoal/45 focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                  value={formValues.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className={cn(
                    "button-summit-primary w-full justify-center border border-summit-charcoal-5",
                    submitStatus === "sent" &&
                      "border-summit-green bg-none bg-summit-green text-summit-white disabled:opacity-100",
                  )}
                  title={buttonLabel}
                  disabled={isSubmitting}
                  aria-busy={submitStatus === "sending"}
                >
                  <span aria-live="polite" aria-atomic="true">
                    {buttonLabel}
                  </span>
                </Button>
              </div>
            </form>
          </AnimatedCard>
        </AnimatedCardSection>
      </div>
    </section>
  );
}
