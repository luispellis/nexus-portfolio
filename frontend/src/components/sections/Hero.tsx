import { SiteContainer } from "@/components/layout/SiteContainer";

export function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden scroll-mt-20" id="home">
      <div aria-hidden="true" className="hero-grid" />
      <div aria-hidden="true" className="hero-ambient hero-ambient-cyan" />
      <div aria-hidden="true" className="hero-ambient hero-ambient-purple" />

      <SiteContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16 sm:py-24 lg:py-32">
        <div className="grid w-full items-center gap-16 lg:grid-cols-12">
          <div className="max-w-3xl lg:col-span-8">
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mb-10">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">PLAYER 01</p>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span aria-hidden="true" className="hero-status-dot" />
                <span>Available for opportunities</span>
              </div>
            </div>

            <h1 className="max-w-3xl font-display text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-[clamp(4.75rem,8vw,6rem)]">
              Luis Felipe
            </h1>
            <p className="mt-8 font-display text-2xl font-semibold tracking-[-0.025em] text-cyan sm:text-3xl">
              Software Developer
            </p>
            <p className="mt-4 max-w-xl font-mono text-sm font-medium leading-6 tracking-[0.03em] text-foreground opacity-80 sm:text-lg">
              Backend • Java • APIs • Databases
            </p>

            <div className="mt-10 sm:mt-12">
              <a
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-control bg-gradient-to-br from-cyan to-purple px-6 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-base transition duration-200 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgb(34_211_238_/_24%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan active:translate-y-0 sm:px-8"
                href="#about"
              >
                Start Journey
                <span aria-hidden="true" className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                  ↘
                </span>
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="hero-signal hidden lg:col-span-3 lg:col-start-10 lg:block">
            <span className="hero-signal-label">NEXUS / 01</span>
            <span className="hero-signal-line" />
            <span className="hero-signal-node hero-signal-node-primary" />
            <span className="hero-signal-node hero-signal-node-secondary" />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
