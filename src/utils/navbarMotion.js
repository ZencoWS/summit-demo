/**
 * Tailwind classes for navbar movement only.
 *
 * These intentionally contain no colour, typography, spacing, shadow, border,
 * width, or menu-layout choices. Add those in the consuming application's
 * component classes.
 */
export const navbarMotion = Object.freeze({
  base: [
    "motion-safe:transition-[transform,opacity]",
    "motion-safe:duration-[350ms]",
    "motion-safe:ease-out",
    "motion-reduce:transition-none",
  ].join(" "),

  desktop: {
    // `fixed top-0 inset-x-0` is positioning required for the scroll behaviour.
    // Keep all pinned visual treatment (surface, border, shadow, etc.) separate.
    top: "fixed top-0 inset-x-0",
    visible: "fixed top-0 inset-x-0",
    hidden: "fixed top-0 inset-x-0 -translate-y-full opacity-0 pointer-events-none",
  },

  mobile: {
    // At the top the navbar remains in normal document flow, as in the source.
    top: "",
    // Once scrolled, it becomes sticky so it can reappear on upward scroll.
    visible: "sticky top-0",
    hidden: "sticky top-0 -translate-y-full opacity-0 pointer-events-none",
  },
});
