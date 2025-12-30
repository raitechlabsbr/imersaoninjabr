import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Pricing from "@/components/Pricing";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Solution />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
