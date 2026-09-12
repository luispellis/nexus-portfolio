import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { navigationItems } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />

        {navigationItems.slice(2).map((item) => (
          <span
            className="block scroll-mt-20"
            id={item.href.slice(1)}
            key={item.href}
          />
        ))}
      </main>
    </>
  );
}
