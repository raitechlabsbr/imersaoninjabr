import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            
            {/* Left Side: Value Proposition */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl font-display font-bold leading-tight">
                Um único projeto paga <span className="text-primary">dezenas de vezes</span> este investimento.
              </h2>
              <p className="text-lg text-muted-foreground">
                Meu objetivo não é lucrar com este ticket. É criar um exército de Ninjas qualificados. Por isso, o valor é simbólico para separar os curiosos dos comprometidos.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">Masterclass Ao Vivo (3 Horas)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">Gravação Vitalícia (Acesso Eterno)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">3 Fluxos Prontos para Vender</span>
                </div>
              </div>
            </div>

            {/* Right Side: Pricing Card */}
            <div className="lg:col-span-2">
              <Card className="relative bg-card border-primary/50 shadow-[0_0_40px_rgba(122,66,217,0.1)] overflow-hidden">
                {/* Glitch/Scanline Effect Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                
                <CardHeader className="text-center pb-2 pt-8">
                  <span className="text-muted-foreground line-through text-lg">R$ 297,00</span>
                  <div className="flex items-center justify-center gap-1 text-primary font-display font-bold">
                    <span className="text-2xl">R$</span>
                    <span className="text-6xl tracking-tighter">47,90</span>
                  </div>
                  <p className="text-sm text-muted-foreground">ou 12x de R$ 4,70</p>
                </CardHeader>

                <CardContent className="space-y-6 pt-6">
                  {/* Link adicionado envolvendo o botão */}
                  <a 
                    href="https://pay.kiwify.com.br/127zS89" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(122,66,217,0.4)] hover:shadow-[0_0_30px_rgba(122,66,217,0.6)] transition-all duration-300 group">
                      <Zap className="mr-2 h-5 w-5 group-hover:text-white" />
                      Quero Ser Ninja
                    </Button>
                  </a>
                </CardContent>

                <CardFooter className="bg-muted/30 py-4 justify-center">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <LockIcon className="h-3 w-3" /> Pagamento Seguro • Garantia de 7 Dias
                  </p>
                </CardFooter>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}