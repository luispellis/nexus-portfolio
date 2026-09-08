import { SiteContainer } from "@/components/layout/SiteContainer";

const coreTechnologies = ["Java", "Spring Boot", "REST APIs", "SQL", "Git", "Object-Oriented Programming"];
const expandingTechnologies = ["Python", "AWS", "Automation"];

function TechnologyList({ technologies }: { technologies: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((technology) => (
        <li
          className="border border-cyan/20 bg-elevated/70 px-3 py-2 font-mono text-xs leading-5 text-foreground"
          key={technology}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

export function About() {
  return (
    <section className="relative scroll-mt-20 py-20 sm:py-24 lg:py-32" id="about" aria-labelledby="about-title">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent"
      />
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5 lg:pt-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">PLAYER PROFILE</p>
            <h2
              className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl"
              id="about-title"
            >
              About
            </h2>
            <div className="mt-6 h-px w-20 bg-cyan/60" aria-hidden="true" />

            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Desenvolvedor de Software com foco em Backend e Java, construindo minha carreira em desenvolvimento a
                partir de uma experiência prática em Tecnologia da Informação.
              </p>
              <p>
                Minha atuação com suporte técnico me colocou em contato diário com sistemas, ambientes de produção,
                investigação de erros e resolução de problemas — experiência que hoje aplico no desenvolvimento de
                software e na construção de soluções mais confiáveis.
              </p>
              <p>
                Atualmente aprofundo meus conhecimentos em Java, Spring Boot, APIs REST, SQL, Git e Programação
                Orientada a Objetos, além de ampliar minha experiência com Python, AWS e automação.
              </p>
              <p className="text-foreground">
                Busco oportunidades como Desenvolvedor Backend / Java Júnior, onde possa contribuir com minha
                experiência em tecnologia enquanto continuo evoluindo como desenvolvedor.
              </p>
            </div>
          </header>

          <aside className="relative border border-card bg-card p-6 backdrop-blur-md sm:p-8 lg:col-span-7 lg:self-start lg:p-10" aria-label="Profile details">
            <div aria-hidden="true" className="absolute left-0 top-0 h-16 w-16 border-l border-t border-purple/70" />
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-cyan/60" />

            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-cyan">Career state</p>
            <dl className="mt-6 grid gap-6 border-y border-card py-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">Background</dt>
                <dd className="mt-2 text-lg font-semibold text-foreground">IT / Technical Support</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">Current Focus</dt>
                <dd className="mt-2 text-lg font-semibold text-foreground">Backend Development</dd>
              </div>
            </dl>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-cyan">Core</h3>
                <div className="mt-3">
                  <TechnologyList technologies={coreTechnologies} />
                </div>
              </div>
              <div>
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-gold">Expanding</h3>
                <div className="mt-3">
                  <TechnologyList technologies={expandingTechnologies} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </SiteContainer>
    </section>
  );
}
