import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { navigationItems } from "@/data/navigation";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {navigationItems.slice(1).map((item) => (
          <span className="block scroll-mt-20" id={item.href.slice(1)} key={item.href} />
        ))}
      </main>
    </>
  );
}
