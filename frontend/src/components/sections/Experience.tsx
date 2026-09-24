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
    label: "Base atual",
    title: "Tecnologia e suporte técnico",
    description:
      "A experiência prática atual em Tecnologia e suporte de TI inclui o trabalho com sistemas, investigação de erros, resolução de problemas técnicos e compreensão de ambientes de produção.",
    items: ["Diagnóstico de sistemas", "Investigação de erros", "Conhecimento de ambientes de produção", "Resolução de problemas técnicos"],
  },
  {
    id: "LOG 02",
    label: "Direção atual",
    title: "Desenvolvimento Backend / Java",
    description:
      "Aplicando a mentalidade de resolução de problemas desenvolvida no suporte de TI enquanto aprofundo habilidades de backend com Java, Spring Boot, REST APIs, SQL, Git e Programação Orientada a Objetos.",
    items: ["Java", "Spring Boot", "REST APIs", "SQL", "Git", "Programação Orientada a Objetos"],
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
        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Áreas de foco: ${entry.title}`}>
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
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">JORNADA</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl" id="experience-title">
              Experiência
            </h2>
            <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
              A experiência próxima a sistemas reais e problemas de produção orienta como abordo desenvolvimento
              backend, depuração e confiabilidade.
            </p>
          </header>

          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <ol className="relative space-y-8 border-l border-card pl-8 sm:pl-10" aria-label="Jornada profissional">
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
