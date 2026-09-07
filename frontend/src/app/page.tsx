export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content items-center px-4 sm:px-6 lg:px-16">
      <div className="border-l-2 border-cyan pl-6">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-gold">
          System initialized
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Nexus Portfolio
        </h1>
        <p className="mt-4 max-w-xl font-body text-base leading-6 text-muted">
          Development environment ready.
        </p>
      </div>
    </main>
  );
}
