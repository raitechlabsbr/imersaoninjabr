import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Masterclass Ao Vivo • 3 Horas de Prática
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
           24 Janeiro - 16:00 Hrs
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight animate-fade-in-up delay-100">
            Torne-se um <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-glow">Ninja da Automação</span> e Pare de Travar na Infraestrutura
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-200">
            Crie e venda Agentes de IA em 3 horas, mesmo começando do zero. Domine VPS, Docker e n8n enquanto seus concorrentes ainda estão perdidos em grupos de WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            
            {/* Link direto abrindo em nova aba */}
            <a 
              href="https://pay.kiwify.com.br/127zS89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 shadow-[0_0_20px_rgba(122,66,217,0.3)] hover:shadow-[0_0_30px_rgba(122,66,217,0.5)] transition-all duration-300 group">
                <Zap className="mr-2 h-5 w-5 group-hover:text-white transition-colors" />
                Quero Me Tornar Um Ninja
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
          </div>

          {/* Tech Stack Strip */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 opacity-60 animate-fade-in-up delay-500">
            {["n8n", "Docker", "Portainer", "Evolution API", "VPS"].map((tech) => (
              <span key={tech} className="text-sm font-mono text-muted-foreground border-b border-transparent hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}