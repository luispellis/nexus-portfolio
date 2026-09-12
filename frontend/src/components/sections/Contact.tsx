import { SiteContainer } from "@/components/layout/SiteContainer";

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  external: boolean;
  primary: boolean;
};

const contactChannels: readonly ContactChannel[] = [
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-pellis/",
    external: true,
    primary: true,
  },
  {
    label: "Email",
    value: "luisfelipe_pellis@hotmail.com",
    href: "mailto:luisfelipe_pellis@hotmail.com",
    external: false,
    primary: true,
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/luispellis",
    external: true,
    primary: false,
  },
  {
    label: "WhatsApp",
    value: "(19) 99230-0837",
    href: "https://wa.me/5519992300837",
    external: true,
    primary: false,
  },
];

function ContactChannelLink({ channel }: { channel: ContactChannel }) {
  const emphasisClass = channel.primary ? "border-cyan/35 bg-cyan/5" : "border-card bg-base/40";

  return (
    <a
      className={`group flex min-w-0 items-center justify-between gap-4 border p-5 transition-colors hover:bg-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${emphasisClass}`}
      href={channel.href}
      {...(channel.external ? { rel: "noreferrer", target: "_blank" } : {})}
    >
      <span className="min-w-0">
        <span className="block font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">{channel.label}</span>
        <span className="mt-2 block break-words font-mono text-sm font-medium leading-6 text-foreground">{channel.value}</span>
      </span>
      <span aria-hidden="true" className="shrink-0 font-mono text-lg text-cyan transition-transform group-hover:translate-x-1">
        ↗
      </span>
    </a>
  );
}

export function Contact() {
  const primaryChannels = contactChannels.filter((channel) => channel.primary);
  const secondaryChannels = contactChannels.filter((channel) => !channel.primary);

  return (
    <section className="relative min-h-[calc(100svh-5rem)] scroll-mt-20 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20" id="contact" aria-labelledby="contact-title">
      <div aria-hidden="true" className="absolute bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple/10 blur-3xl" />
      <SiteContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="max-w-xl lg:col-span-4 lg:pt-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">PORTAL</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl" id="contact-title">
              Contact
            </h2>
            <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
              Open to conversations about junior software development, backend, and Java opportunities.
            </p>
            <div className="mt-8 border-l border-purple/60 pl-4">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">Location</p>
              <p className="mt-2 text-base font-medium text-foreground">Campinas - São Paulo</p>
            </div>
          </header>

          <div className="relative min-w-0 border border-card bg-[color:var(--color-card-fill)] p-5 sm:p-8 lg:col-span-7 lg:col-start-6">
            <div aria-hidden="true" className="absolute left-0 top-0 h-14 w-14 border-l border-t border-cyan/70" />
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-14 w-14 border-b border-r border-purple/70" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-cyan">Direct channels</p>

            <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
              {primaryChannels.map((channel) => (
                <ContactChannelLink channel={channel} key={channel.label} />
              ))}
            </div>
            <div className="mt-3 grid min-w-0 gap-3 border-t border-card pt-3 sm:grid-cols-2">
              {secondaryChannels.map((channel) => (
                <ContactChannelLink channel={channel} key={channel.label} />
              ))}
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
