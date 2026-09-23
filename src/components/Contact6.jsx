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
import { BiEnvelope, BiMap, BiPhone, BiMailSend } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { TextFade } from "../animations/TextFade";
import {
  AnimatedCard,
  AnimatedCardSection,
} from "../animations/AnimatedCardSection";
import { cn } from "../lib/cn";
import { iframe } from "framer-motion/client";

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
  idle: "Request Quote",
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
    <section id="quote" className="relative overflow-hidden scroll-mt-6 px-[5%] py-16 md:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[url(https://res.cloudinary.com/fjyy6lhd/image/upload/v1789999547/beams_frhpgr_9d8ca4.avif)] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-br from-summit-green-darker/90 via-summit-green-dark/70 to-summit-green-darker/90"
      />
      <div className="container relative grid z-10 grid-cols-1 items-start p-4 border-4 border-summit-green-lightest rounded-md gap-y-12 bg-summit-green-darker md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <TextFade direction="up" staggerChildren={0.2}>
            <div className="mb-8 text-summit-white md:mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-summit-green-lightest md:mb-4">07 / Request a Quote</p>
              <h2 className="mb-5 text-5xl font-bold uppercase leading-[0.98] tracking-[-0.02em] md:mb-6 md:text-7xl lg:text-8xl">
                TELL US WHAT NEEDS DOING.
              </h2>
              <p className="max-w-md md:text-md">
                A clear brief helps us prepare a useful estimate. We will get back to you within one business day.
              </p>
            </div>
            <div className="grid grid-cols-1 border-t border-summit-charcoal/15">
              <div className="flex items-start gap-4 border-b border-summit-charcoal/15 py-4">
                <BiEnvelope className="mt-0.5 size-5 flex-none text-summit-green-lightest" />
                <a href="mailto:enquiry@falconroofing.co.za" className="text-sm font-medium text-summit-white md:text-base">admin@summitroofing.co.za</a>
              </div>
              <div className="flex items-start gap-4 border-b border-summit-charcoal/15 py-4">
                <BiPhone className="mt-0.5 size-5 flex-none text-summit-green-lightest" />
                <a href="tel:+27731244478" className="text-sm font-medium text-summit-white md:text-base">073 124 4478</a>
              </div>
              <div className="flex items-start gap-4 py-4">
                <BiMap className="mt-0.5 size-5 flex-none text-summit-green-lightest" />
                <a href="https://maps.app.goo.gl/YnFLbqtePbjHS15B6" className="text-sm font-medium text-summit-white md:text-base">Unit 4, Lenchen Park, Jakaranda St, Centurion, Pretoria, 0157</a>
              </div>
              <div className="collapse md:visible md:py-4 lg:visible lg:py-4">
                <iframe
                  title="Summit Roofing location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.4736535659093!2d28.16364435381621!3d-25.87294570371375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9565ab9bc1ff97%3A0xf79953c0bcfe1acf!2sLenchen%20Park!5e0!3m2!1sen!2sza!4v1790166161787!5m2!1sen!2sza"
                  className="h-0 md:h-[450px] md:w-full md:rounded-md md:border-0 lg:h-[450px] lg:rounded-md lg:border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </TextFade>
        </div>
        <AnimatedCardSection>
          <AnimatedCard direction="right" delay={0.15}>
            <form
              className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2 text-sm font-semibold text-summit-white">
                    Name
                  </Label>
                  <Input
                    className="h-12 text-summit-white caret-summit-green-lightest rounded-summit-control border-summit-charcoal/20 bg-summit-green-dark px-4 shadow-none transition-colors placeholder:text-summit-green-light focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="phone" className="mb-2 text-sm font-semibold text-summit-white">
                    Phone number
                  </Label>
                  <Input
                    className="h-12 text-summit-white caret-summit-green-lightest rounded-summit-control border-summit-charcoal/20 bg-summit-green-dark px-4 shadow-none transition-colors placeholder:text-summit-green-light focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 012 345 6789"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2 text-sm font-semibold text-summit-white">
                    Email
                  </Label>
                  <Input
                    className="h-12 text-summit-white caret-summit-green-lightest rounded-summit-control border-summit-charcoal/20 bg-summit-green-dark px-4 shadow-none transition-colors placeholder:text-summit-green-light focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. john@email.com"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="city" className="mb-2 text-sm font-semibold text-summit-white">
                    City/Suburb
                  </Label>
                  <Input
                    className="h-12 text-summit-white caret-summit-green-lightest rounded-summit-control border-summit-charcoal/20 bg-summit-green-dark px-4 shadow-none transition-colors placeholder:text-summit-green-light focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="e.g. Rua Vista, Centurion"
                    value={formValues.city}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="service" className="mb-2 text-sm font-semibold text-summit-white">Required service</Label>
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
                  <SelectTrigger id="service" className="h-12 rounded-summit-control border-summit-charcoal/20 bg-summit-green-dark px-4 text-summit-white data-[placeholder]:text-summit-green-light shadow-none transition-colors focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15">
                    <SelectValue placeholder="Select one"/>
                  </SelectTrigger>
                  <SelectContent className="rounded-summit-control text-summit-green-light border-summit-charcoal/15 bg-summit-green-dark shadow-none">
                    <SelectItem value="first-choice">Roof inspection</SelectItem>
                    <SelectItem value="second-choice">Roof installation</SelectItem>
                    <SelectItem value="third-choice">Roof repair</SelectItem>
                    <SelectItem value="fourth-choice">Damage repair</SelectItem>
                    <SelectItem value="fifth-choice">Ceilings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full items-center text-summit-white py-3 md:py-4">
                <Label className="mb-3 text-sm font-semibold text-summit-white md:mb-4">Preferred contact method</Label>
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
                    <RadioGroupItem className="border-summit-green-light text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="whatsapp" id="contact-whatsapp" />
                    <Label className="font-thin" htmlFor="contact-whatsapp">WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-green-light text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="phone-call" id="contact-phone" />
                    <Label className="font-thin" htmlFor="contact-phone">Phone call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-green-light text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="email" id="contact-email" />
                    <Label className="font-thin" htmlFor="contact-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-green-light text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="sms" id="contact-sms" />
                    <Label className="font-thin" htmlFor="contact-sms">SMS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-green-light text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="in-person" id="contact-in-person" />
                    <Label className="font-thin" htmlFor="contact-in-person">In person</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="border-summit-green-light text-summit-green-lightest focus-visible:ring-summit-green-lightest/20" value="other" id="contact-other" />
                    <Label className="font-thin" htmlFor="contact-other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2 text-sm font-semibold text-summit-white">
                  Project description
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the job"
                  className="min-h-[11.25rem] text-summit-white caret-summit-green-lightest overflow-auto rounded-summit-control border-summit-charcoal/20 bg-summit-green-dark p-4 shadow-none transition-colors placeholder:text-summit-green-light focus-visible:border-summit-green-lightest focus-visible:ring-2 focus-visible:ring-summit-green-lightest/15"
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
                  iconLeft={<FiSend className="size-5"/>}
                >
                  <span aria-live="polite" aria-atomic="true">
                    {buttonLabel}
                  </span>
                </Button>
              </div>
            </form>
          </AnimatedCard>
        </AnimatedCardSection>
        <div
              aria-hidden="true"
              className="pointer-events-none absolute hidden inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-summit-green-lightest md:block md:inset-x-auto md:inset-y-4 md:left-1/2 md:h-auto md:w-0.5 md:-translate-x-1/2 md:translate-y-0"
            />
      </div>
    </section>
  );
}
