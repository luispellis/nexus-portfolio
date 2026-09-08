import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { navigationItems } from "@/data/navigation";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-5rem)]">
        <Hero />
        <About />
        {navigationItems.slice(2).map((item) => (
          <span className="block scroll-mt-20" id={item.href.slice(1)} key={item.href} />
        ))}
      </main>
    </>
  );
}
