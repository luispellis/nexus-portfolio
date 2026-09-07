"use client";

import { useState } from "react";

import { navigationItems } from "@/data/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-10 w-10 items-center justify-center rounded-control border border-card bg-card text-foreground transition-colors hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
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
          aria-label="Mobile primary navigation"
          className="absolute inset-x-4 top-20 rounded-card border border-card bg-elevated p-2 backdrop-blur-md sm:inset-x-6"
          id="mobile-navigation"
        >
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="flex rounded-control px-4 py-3 font-body text-sm text-foreground transition-colors hover:bg-card hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
