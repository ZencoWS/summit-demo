"use client";

import { TextFade } from "../animations/TextFade";

export function RecentWorkHeader() {
  return (
    <div className="relative mb-12 md:mb-18 lg:mb-20">

      {/* 2-col grid, items-start keeps both columns top-aligned (not
          centered/stretched) — the "flex-start" behavior you asked for.
          Each column gets its own TextFade so the grid split isn't collapsed
          by TextFade's own wrapper element (that was the bug before: one
          TextFade around both columns made them one grid item instead of two). */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
        <TextFade direction="up" staggerChildren={0.2}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-summit-green-lightest">
            01 / Our recent work
          </p>
        </TextFade>

        <TextFade direction="up" staggerChildren={0.2}>
          <div className="flex flex-col items-start text-left text-summit-off-white">
            <h2 className="mb-5 text-5xl font-bold uppercase md:mb-6 md:text-7xl lg:text-8xl">
              Roofing built to last
            </h2>
            <p className="md:text-md">
              Explore our roofing services. Images shown are stock references.
            </p>
          </div>
        </TextFade>
      </div>

      {/* Hairline rule separating the header from the cards grid below */}
      <div
        aria-hidden="true"
        className="mt-10 border-t-2 border-summit-green-lightest md:mt-14"
      />
    </div>
  );
}
