"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { TextFade } from "../animations/TextFade";

export default function SectionTopTwo(props) {

    let sectNumber = props.sectNumber;
    let sectTitle = props.sectTitle;
    let heading = props.heading;
    let description = props.description;
    let linkText = props.linkText;


    return (
        <div className="relative mb-12 md:mb-18 lg:mb-20">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
                {/* Left */}
                <TextFade direction="up" staggerChildren={0.2}>
                    <div className="flex flex-col items-start text-left text-summit-charcoal">
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
                          className="text-sm font-semibold text-summit-charcoal md:text-base link-h-effect"
                          title="Our work"
                          variant="link"
                          size="link"
                          iconRight={<RxChevronRight className="text-summit-green-lightest"/>}
                        >
                          <a href="/projects">{linkText}</a>
                        </Button>
                    </div>
                </TextFade>
            </div>

            <div
                aria-hidden="true"
                className="mt-10 border-t-2 border-summit-green-lightest md:mt-14"
            />
        </div>
    )
}