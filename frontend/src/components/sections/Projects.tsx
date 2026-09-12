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
    id: "MISSION 01",
    title: "Payment System",
    description:
      "Payment processing study project in Java applying object-oriented design, Strategy Pattern, DTOs, validation, and unit testing.",
    repositoryUrl: "https://github.com/luispellis/Payment-system",
    tags: ["Java", "Maven", "OOP", "Strategy Pattern", "JUnit 5"],
    meta: "Java / Study project",
    featured: true,
  },
  {
    id: "MISSION 02",
    title: "Service Order System",
    description:
      "Service-order backend built with Java and Spring Boot, using JPA, validation, PostgreSQL, and OpenAPI-oriented API tooling.",
    repositoryUrl: "https://github.com/luispellis/service-order-system",
    tags: ["Java 21", "Spring Boot", "JPA", "PostgreSQL", "OpenAPI"],
    meta: "Backend / Spring Boot",
    featured: true,
  },
  {
    id: "MISSION 03",
    title: "Task Board",
    description:
      "Java task-board project developed as part of a DIO challenge, with database migration support through Liquibase and MySQL integration.",
    repositoryUrl: "https://github.com/luispellis/board",
    tags: ["Java", "Gradle", "Liquibase", "MySQL", "Lombok"],
    meta: "Learning project / DIO challenge",
    featured: false,
  },
  {
    id: "MISSION 04",
    title: "Sudoku",
    description: "Java project focused on implementing Sudoku game logic and practicing core programming concepts.",
    repositoryUrl: "https://github.com/luispellis/sudoku",
    tags: ["Java"],
    meta: "Java project",
    featured: false,
  },
];

function ProjectTags({ tags }: Pick<Project, "tags">) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies and concepts">
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
    <article className={`relative flex h-full min-w-0 flex-col overflow-hidden border ${cardClasses}`} aria-labelledby={`${project.id}-title`}>
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
        className="mt-8 inline-flex w-fit max-w-full items-center gap-3 border border-cyan/45 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cyan transition-colors hover:bg-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        href={project.repositoryUrl}
        rel="noreferrer"
        target="_blank"
      >
        View repository on GitHub
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
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">MISSIONS</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl" id="projects-title">
            Projects
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Selected Java and backend repositories, organized as a concise technical mission archive.
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
