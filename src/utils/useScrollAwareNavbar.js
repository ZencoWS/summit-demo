import { useEffect, useRef, useState } from "react";

/**
 * Scroll states deliberately describe behaviour, not appearance.
 *
 * - top:     within the top threshold; use the header's normal treatment.
 * - visible: scrolled upward; show the header (and optionally give it a pinned treatment).
 * - hidden:  scrolled downward; move the header out of view.
 */
export const NAV_SCROLL_STATE = Object.freeze({
  TOP: "top",
  VISIBLE: "visible",
  HIDDEN: "hidden",
});

/**
 * Reusable version of the source site's direction-aware navbar logic.
 *
 * It is safe in Vite SSR-like test environments because all browser access
 * happens inside useEffect. The hook owns no visual styles; pair its state
 * with the motion classes exported by navbarMotion.js.
 */
export function useScrollAwareNavbar({
  desktopTopThreshold = 80,
  mobileTopThreshold = 60,
  delta = 5,
  mobileBreakpoint = 768,
  menuOpen = false,
  onRequestCloseMenu,
} = {}) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollState, setScrollState] = useState(NAV_SCROLL_STATE.TOP);
  const menuOpenRef = useRef(menuOpen);
  const closeMenuRef = useRef(onRequestCloseMenu);

  // Refs keep the scroll listener stable while its parent component rerenders.
  menuOpenRef.current = menuOpen;
  closeMenuRef.current = onRequestCloseMenu;

  useEffect(() => {
    const desktopQuery = window.matchMedia(
      `(min-width: ${mobileBreakpoint + 1}px)`,
    );
    let lastScrollY = window.scrollY;
    let frameId = null;

    const threshold = () =>
      desktopQuery.matches ? desktopTopThreshold : mobileTopThreshold;

    // The original desktop navbar loads hidden when a page opens mid-scroll.
    // Applying the same state on breakpoint changes prevents stale classes.
    const syncForViewport = () => {
      const desktop = desktopQuery.matches;
      const atTop = window.scrollY <= threshold();

      setIsDesktop(desktop);
      setScrollState(atTop ? NAV_SCROLL_STATE.TOP : NAV_SCROLL_STATE.HIDDEN);
      lastScrollY = window.scrollY;
    };

    const updateForScroll = () => {
      frameId = null;

      const currentScrollY = window.scrollY;
      const direction = currentScrollY - lastScrollY;

      // Ignore trackpad/mouse jitter, but still advance the baseline.
      if (Math.abs(direction) < delta) {
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= threshold()) {
        setScrollState(NAV_SCROLL_STATE.TOP);
      } else if (direction > 0) {
        // Preserve an open mobile menu. In the source this avoids hiding the
        // dropdown while it is being used.
        if (!desktopQuery.matches && menuOpenRef.current) {
          setScrollState(NAV_SCROLL_STATE.VISIBLE);
        } else {
          closeMenuRef.current?.();
          setScrollState(NAV_SCROLL_STATE.HIDDEN);
        }
      } else {
        // Scrolling upward reveals the navbar and closes a mobile dropdown.
        closeMenuRef.current?.();
        setScrollState(NAV_SCROLL_STATE.VISIBLE);
      }

      lastScrollY = currentScrollY;
    };

    const onScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateForScroll);
    };

    syncForViewport();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktopQuery.addEventListener("change", syncForViewport);

    return () => {
      window.removeEventListener("scroll", onScroll);
      desktopQuery.removeEventListener("change", syncForViewport);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [desktopTopThreshold, mobileTopThreshold, delta, mobileBreakpoint]);

  return { isDesktop, scrollState };
}
