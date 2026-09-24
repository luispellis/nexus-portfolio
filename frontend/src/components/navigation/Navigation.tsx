"use client";

import { useEffect, useRef, useState } from "react";

import { navigationItems } from "@/data/navigation";

const sectionIds = navigationItems.map((item) => item.href.slice(1));
const headerHeight = 80;
const activationOffset = headerHeight + 16;

type NavigationProps = {
  onActiveSectionChange: (section: string) => void;
  onMobileMenuChange: (isOpen: boolean) => void;
};

export function Navigation({ onActiveSectionChange, onMobileMenuChange }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    onActiveSectionChange(activeSection);
  }, [activeSection, onActiveSectionChange]);

  useEffect(() => {
    onMobileMenuChange(isOpen);
  }, [isOpen, onMobileMenuChange]);

  useEffect(() => {
    function updateFromHash() {
      const sectionId = window.location.hash.slice(1);
      if (sectionIds.includes(sectionId)) {
        setActiveSection(sectionId);
      }
    }

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    const sections = sectionIds.flatMap((sectionId) => {
      const section = document.getElementById(sectionId);
      return section ? [section] : [];
    });
    let observer: IntersectionObserver;

    function updateActiveSection() {
      const activeSectionElement = sections.find((section) => {
        const { bottom, top } = section.getBoundingClientRect();
        return top <= activationOffset && bottom > activationOffset;
      });

      if (activeSectionElement) {
        setActiveSection(activeSectionElement.id);
      }
    }

    function observeActivationLine() {
      observer?.disconnect();
      const bottomMargin = Math.max(0, window.innerHeight - activationOffset - 1);
      observer = new IntersectionObserver(updateActiveSection, {
        rootMargin: `-${activationOffset}px 0px -${bottomMargin}px 0px`,
        threshold: 0,
      });
      sections.forEach((section) => observer.observe(section));
      updateActiveSection();
    }

    observeActivationLine();
    window.addEventListener("resize", observeActivationLine);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("resize", observeActivationLine);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function selectSection(href: string) {
    setActiveSection(href.slice(1));
    setIsOpen(false);
  }

  return (
    <>
      <nav aria-label="Navegação principal" className="hidden md:block">
        <ul className="flex items-center gap-6">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <li key={item.href}>
                <a
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b-2 pb-1 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${isActive ? "border-cyan font-semibold text-foreground" : "border-transparent font-medium text-muted"}`}
                  href={item.href}
                  onClick={() => selectSection(item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="flex h-10 w-10 items-center justify-center rounded-control border border-card bg-card text-foreground transition-colors hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          ref={menuButtonRef}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>

        {isOpen ? (
          <nav
            aria-label="Navegação principal móvel"
            className="absolute inset-x-4 top-20 rounded-card border border-card bg-elevated p-2 backdrop-blur-md sm:inset-x-6"
            id="mobile-navigation"
          >
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <li key={item.href}>
                    <a
                      aria-current={isActive ? "page" : undefined}
                      className={`flex border-l-2 px-4 py-3 font-body text-sm transition-colors hover:bg-card hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${isActive ? "border-cyan bg-cyan/10 font-semibold text-foreground" : "border-transparent text-foreground"}`}
                      href={item.href}
                      onClick={() => selectSection(item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
}
