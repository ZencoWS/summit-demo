import { useState } from "react";
import { navbarMotion } from "../../utils/navbarMotion";
import { useScrollAwareNavbar } from "../../utils/useScrollAwareNavbar";

const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Behaviour-only integration example. Supply your own layout and visual classes
 * to the header, nav, links, and menu panel.
 */
export function ScrollAwareNavbarExample() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDesktop, scrollState } = useScrollAwareNavbar({
    menuOpen,
    onRequestCloseMenu: () => setMenuOpen(false),
  });

  const motionClasses = isDesktop
    ? navbarMotion.desktop[scrollState]
    : navbarMotion.mobile[scrollState];

  return (
    <header className={joinClasses(navbarMotion.base, motionClasses)}>
      <nav aria-label="Primary navigation">
        <a href="/">Brand</a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <ul id="primary-navigation" hidden={!isDesktop && !menuOpen}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
