import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

// Nota: Certifica-te de que a imagem está na pasta 'public' ou importada corretamente
// Exemplo se estiver na pasta public: src="/logo_ninja_raitech_full.jpg"
// Se estiveres a importar: import logoImage from '../assets/logo_ninja_raitech_full.jpg'

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* --- Background Elements (Mantidos para consistência visual) --- */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      {/* Blur roxo no fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* --- LADO ESQUERDO: Imagem de Referência --- */}
          <div className="relative order-1 lg:order-1 animate-fade-in-up">
            {/* Elemento decorativo atrás da imagem (Glow) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-400 opacity-30 blur-2xl rounded-full transform scale-90"></div>
            
            <div className="relative bg-black/40 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_40px_rgba(122,66,217,0.15)]">
              {/* Substitui '/logo_ninja_raitech_full.jpg' pelo caminho correto da tua imagem */}
              <img 
                src="/images/logo_ninja_raitech_full.png" 
                alt="Ninja RaiTech Logo" 
                className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
              />
            </div>
            
            {/* Etiqueta flutuante (opcional, para dar estilo) */}
            <div className="absolute -bottom-4 -right-4 bg-background border border-primary/30 py-2 px-4 rounded-lg shadow-lg flex items-center gap-2">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-mono font-bold text-foreground">Acesso Liberado</span>
            </div>
          </div>

          {/* --- LADO DIREITO: Informações e CTA --- */}
          <div className="flex flex-col text-left space-y-8 order-2 lg:order-2">
            
            {/* Badge de Sucesso */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono w-fit animate-fade-in-up">
              <CheckCircle className="w-4 h-4" />
              Compra Confirmada com Sucesso
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-fade-in-up delay-100">
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
                Bem-vindo à Elite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-glow">Ninja da Automação</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Agradecemos a confiança! Você acaba de dar o passo mais importante para dominar VPS, Docker e n8n. Prepare-se para transformar a sua infraestrutura.
              </p>
            </div>

            {/* Caixa de Próximos Passos */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 animate-fade-in-up delay-200">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Próximo Passo Importante:
              </h3>
              <p className="text-muted-foreground text-sm">
                Para receber os avisos da Masterclass, materiais de apoio e networking com outros Ninjas, é obrigatório entrar no nosso grupo VIP.
              </p>
            </div>

            {/* CTA Button WhatsApp */}
            <div className="animate-fade-in-up delay-300 pt-2">
              <a 
                href="https://chat.whatsapp.com/LBoP1DvuF7FIjoKnEqon1S" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block"
              >
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-14 px-8 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 group rounded-xl">
                  <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                  Entrar no Grupo VIP
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <p className="mt-4 text-xs text-muted-foreground font-mono">
                *O link abrirá diretamente no seu WhatsApp.
              </p>
            </div>

          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}