import { SiteContainer } from "@/components/layout/SiteContainer";

type SkillModule = {
  id: string;
  label: string;
  technologies: readonly string[];
};

const supportingModules: readonly SkillModule[] = [
  {
    id: "data",
    label: "Data",
    technologies: ["SQL"],
  },
  {
    id: "tooling",
    label: "Tooling",
    technologies: ["Git"],
  },
];

const backendTechnologies = ["Java", "Spring Boot", "REST APIs", "Object-Oriented Programming", "Backend Development"] as const;
const expandingTechnologies = ["AWS", "Python", "Automation"] as const;

function TechnologyList({ technologies }: Pick<SkillModule, "technologies">) {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Technologies">
      {technologies.map((technology) => (
        <li
          className="border border-cyan/20 bg-base/70 px-3 py-2 font-mono text-sm leading-5 text-foreground sm:px-4"
          key={technology}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <section className="relative scroll-mt-20 py-20 sm:py-24 lg:py-28" id="skills" aria-labelledby="skills-title">
      <div aria-hidden="true" className="absolute right-0 top-24 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
      <SiteContainer className="relative">
        <header className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">TECH ARSENAL</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl" id="skills-title">
            Skills
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            A focused backend foundation, with complementary data, tooling, and expanding cloud automation knowledge.
          </p>
        </header>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:gap-6">
          <article className="relative overflow-hidden border border-cyan/30 bg-[color:var(--color-card-fill)] p-6 sm:p-8 lg:col-span-7" aria-labelledby="backend-core-title">
            <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-1 bg-cyan" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-cyan">Primary direction / module 01</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl" id="backend-core-title">
              Backend / Core
            </h3>
            <p className="mt-3 max-w-xl leading-7 text-muted">
              Building the foundation for reliable application behavior and API-driven systems.
            </p>
            <div className="mt-8">
              <TechnologyList technologies={backendTechnologies} />
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {supportingModules.map((module) => (
              <article className="border border-card bg-[color:var(--color-card-fill)] p-6" key={module.id} aria-labelledby={`${module.id}-title`}>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">System module</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground" id={`${module.id}-title`}>
                  {module.label}
                </h3>
                <div className="mt-5">
                  <TechnologyList technologies={module.technologies} />
                </div>
              </article>
            ))}
          </div>

          <article className="border border-purple/30 bg-[color:var(--color-card-fill)] p-6 sm:p-8 lg:col-span-12" aria-labelledby="cloud-automation-title">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-gold">Expanding knowledge / module 04</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground" id="cloud-automation-title">
                  Cloud &amp; Automation
                </h3>
                <p className="mt-3 leading-7 text-muted">Areas currently being expanded alongside the core backend focus.</p>
              </div>
              <TechnologyList technologies={expandingTechnologies} />
            </div>
          </article>
        </div>
      </SiteContainer>
    </section>
  );
}
