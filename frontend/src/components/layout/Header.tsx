"use client";

import { useEffect, useRef, useState } from "react";

import { Navigation } from "../navigation/Navigation";
import { SiteContainer } from "./SiteContainer";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const interactionState = useRef({ isFocused: false, isPointerOver: false });

  useEffect(() => {
    if (activeSection === "home" || isMobileMenuOpen) {
      setIsHeaderVisible(true);
    }
  }, [activeSection, isMobileMenuOpen]);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    function canHideHeader() {
      return activeSection !== "home" && !isMobileMenuOpen && !interactionState.current.isFocused && !interactionState.current.isPointerOver;
    }

    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      const scrollDifference = currentScrollPosition - lastScrollPosition;

      if (activeSection === "home" || scrollDifference < -8) {
        setIsHeaderVisible(true);
      } else if (scrollDifference > 8 && canHideHeader()) {
        setIsHeaderVisible(false);
      }

      lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isMobileMenuOpen]);

  function hideHeaderWhenAppropriate() {
    if (activeSection !== "home" && !isMobileMenuOpen && !interactionState.current.isFocused && !interactionState.current.isPointerOver) {
      setIsHeaderVisible(false);
    }
  }

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b border-card bg-[color:var(--color-card-fill)] backdrop-blur-md ${isHeaderVisible ? "site-header--visible" : "site-header--hidden"}`}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          interactionState.current.isFocused = false;
          hideHeaderWhenAppropriate();
        }
      }}
      onFocusCapture={() => {
        interactionState.current.isFocused = true;
        setIsHeaderVisible(true);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") {
          interactionState.current.isPointerOver = true;
          setIsHeaderVisible(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") {
          interactionState.current.isPointerOver = false;
          hideHeaderWhenAppropriate();
        }
      }}
    >
      <SiteContainer className="flex h-20 items-center justify-between gap-8">
        <a
          className="font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          href="#home"
        >
          Luis Pellis<span className="text-cyan">.</span>
        </a>

        <Navigation onActiveSectionChange={setActiveSection} onMobileMenuChange={setIsMobileMenuOpen} />
      </SiteContainer>
    </header>
  );
}
