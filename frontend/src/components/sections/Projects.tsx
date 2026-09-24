import { SiteContainer } from "@/components/layout/SiteContainer";

type Project = {
  id: string;
  title: string;
  description: string;
  repositoryUrl: string;
  tags: readonly string[];
  meta: string;
  featured: boolean;
};

const projects: readonly Project[] = [
  {
    id: "MISSÃO 01",
    title: "Payment System",
    description:
      "Projeto de estudo de processamento de pagamentos em Java, aplicando design orientado a objetos, Strategy Pattern, DTOs, validação e testes unitários.",
    repositoryUrl: "https://github.com/luispellis/Payment-system",
    tags: ["Java", "Maven", "POO", "Strategy Pattern", "JUnit 5"],
    meta: "Java / Projeto de estudo",
    featured: true,
  },
  {
    id: "MISSÃO 02",
    title: "Service Order System",
    description:
      "Backend de ordens de serviço desenvolvido com Java e Spring Boot, usando JPA, validação, PostgreSQL e ferramentas de API orientadas a OpenAPI.",
    repositoryUrl: "https://github.com/luispellis/service-order-system",
    tags: ["Java 21", "Spring Boot", "JPA", "PostgreSQL", "OpenAPI"],
    meta: "Backend / Spring Boot",
    featured: true,
  },
  {
    id: "MISSÃO 03",
    title: "Task Board",
    description:
      "Projeto de quadro de tarefas em Java desenvolvido como parte de um desafio da DIO, com suporte a migrações de banco de dados por Liquibase e integração com MySQL.",
    repositoryUrl: "https://github.com/luispellis/board",
    tags: ["Java", "Gradle", "Liquibase", "MySQL", "Lombok"],
    meta: "Projeto de aprendizagem / desafio DIO",
    featured: false,
  },
  {
    id: "MISSÃO 04",
    title: "Sudoku",
    description: "Projeto em Java focado na implementação da lógica do jogo Sudoku e na prática de conceitos fundamentais de programação.",
    repositoryUrl: "https://github.com/luispellis/sudoku",
    tags: ["Java"],
    meta: "Projeto em Java",
    featured: false,
  },
];

function ProjectTags({ tags }: Pick<Project, "tags">) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologias e conceitos">
      {tags.map((tag) => (
        <li className="border border-cyan/20 bg-base/70 px-3 py-2 font-mono text-xs leading-5 text-foreground" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardClasses = project.featured
    ? "border-cyan/30 bg-[color:var(--color-card-fill)] p-6 sm:p-8"
    : "border-card bg-[color:var(--color-card-fill)] p-6 sm:p-8";

  return (
    <article className={`project-card relative flex h-full min-w-0 flex-col overflow-hidden border ${cardClasses}`} aria-labelledby={`${project.id}-title`}>
      {project.featured && <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-cyan" />}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <p className="min-w-0 font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">{project.id}</p>
        <p className="min-w-0 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">{project.meta}</p>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl" id={`${project.id}-title`}>
        {project.title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{project.description}</p>

      <div className="mt-8">
        <ProjectTags tags={project.tags} />
      </div>

      <a
        className="project-card-link mt-8 inline-flex w-fit max-w-full items-center gap-3 border border-cyan/45 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cyan transition-colors hover:bg-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        href={project.repositoryUrl}
        rel="noreferrer"
        target="_blank"
      >
        Ver repositório no GitHub
        <span className="sr-only"> (abre em uma nova aba)</span>
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export function Projects() {
  const [paymentSystem, serviceOrderSystem, taskBoard, sudoku] = projects;

  return (
    <section className="relative scroll-mt-20 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20" id="projects" aria-labelledby="projects-title">
      <div aria-hidden="true" className="absolute left-0 top-32 h-80 w-80 rounded-full bg-purple/10 blur-3xl" />
      <SiteContainer className="relative">
        <header className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">MISSÕES</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl" id="projects-title">
            Projetos
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Repositórios selecionados de Java e backend, organizados como um arquivo técnico de missões.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="min-w-0">
            <ProjectCard project={paymentSystem} />
          </div>
          <div className="min-w-0">
            <ProjectCard project={serviceOrderSystem} />
          </div>
          <div className="min-w-0">
            <ProjectCard project={taskBoard} />
          </div>
          <div className="min-w-0">
            <ProjectCard project={sudoku} />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
