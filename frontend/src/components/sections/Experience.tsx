import { SiteContainer } from "@/components/layout/SiteContainer";

type JourneyEntry = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: readonly string[];
};

const journeyEntries: readonly JourneyEntry[] = [
  {
    id: "LOG 01",
    label: "Current foundation",
    title: "Technology & Technical Support",
    description:
      "Current practical experience in Technology / IT support includes working with systems, investigating errors, resolving technical issues, and understanding production environments.",
    items: ["System troubleshooting", "Error investigation", "Production environment awareness", "Technical problem solving"],
  },
  {
    id: "LOG 02",
    label: "Current direction",
    title: "Backend / Java Development",
    description:
      "Applying the problem-solving mindset developed in IT support while deepening backend development skills with Java, Spring Boot, REST APIs, SQL, Git, and object-oriented programming.",
    items: ["Java", "Spring Boot", "REST APIs", "SQL", "Git", "Object-Oriented Programming"],
  },
];

function JourneyEntryCard({ entry, isCurrentDirection }: { entry: JourneyEntry; isCurrentDirection: boolean }) {
  const markerClass = isCurrentDirection ? "border-cyan bg-base" : "border-purple bg-base";

  return (
    <li className="relative min-w-0">
      <span aria-hidden="true" className={`absolute -left-[2.55rem] top-8 h-4 w-4 border-2 sm:-left-[3.05rem] ${markerClass}`} />
      <article className="min-w-0 border border-card bg-[color:var(--color-card-fill)] p-6 sm:p-8" aria-labelledby={`${entry.id}-title`}>
        <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">{entry.id}</p>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">{entry.label}</p>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl" id={`${entry.id}-title`}>
          {entry.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{entry.description}</p>
        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${entry.title} focus areas`}>
          {entry.items.map((item) => (
            <li className="border border-cyan/20 bg-base/70 px-3 py-2 font-mono text-xs leading-5 text-foreground" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export function Experience() {
  return (
    <section className="relative scroll-mt-20 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20" id="experience" aria-labelledby="experience-title">
      <div aria-hidden="true" className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <SiteContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="max-w-xl lg:col-span-4 lg:pt-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">JOURNEY LOG</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl" id="experience-title">
              Experience
            </h2>
            <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
              Experience close to real systems and production issues now informs how I approach backend development,
              debugging, and reliability.
            </p>
          </header>

          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <ol className="relative space-y-8 border-l border-card pl-8 sm:pl-10" aria-label="Professional journey log">
              {journeyEntries.map((entry, index) => (
                <JourneyEntryCard entry={entry} isCurrentDirection={index === 1} key={entry.id} />
              ))}
            </ol>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
