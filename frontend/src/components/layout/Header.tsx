import { navigationItems } from "@/data/navigation";

import { MobileNavigation } from "../navigation/MobileNavigation";
import { SiteContainer } from "./SiteContainer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card bg-[color:var(--color-card-fill)] backdrop-blur-md">
      <SiteContainer className="flex h-20 items-center justify-between gap-8">
        <a
          className="font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          href="#home"
        >
          NEXUS<span className="text-cyan">.</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavigation />
      </SiteContainer>
    </header>
  );
}
