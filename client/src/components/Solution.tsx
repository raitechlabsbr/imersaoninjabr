import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cloud, Database, Layers, MessageSquare, Target } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 bg-background relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 text-sm font-mono uppercase tracking-widest">
            Protocolo Iniciado
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            O Treino: <span className="text-primary">Imersão Ninja RaiTech</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            3 horas de prática intensa. Você entra faixa branca e sai com um arsenal completo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Part 1: Infrastructure */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-mono font-bold text-primary text-xl">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">A Forja do Ninja</h3>
                <p className="text-muted-foreground">Dominando a Infraestrutura</p>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Cloud className="h-5 w-5 text-primary" />
                    VPS (Virtual Private Server)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Sua base secreta na nuvem. Aprenda a contratar e configurar seu próprio servidor, livre de limitações.
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Layers className="h-5 w-5 text-primary" />
                    Docker + Portainer
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Os "shurikens" da gestão. Gerencie aplicações isoladas de forma profissional e visual.
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Database className="h-5 w-5 text-primary" />
                    n8n Self-Hosted
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Sua katana principal. Instalação completa na sua estrutura para automações ilimitadas.
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Part 2: Flows */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="font-mono font-bold text-secondary text-xl">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">Técnicas Secretas</h3>
                <p className="text-muted-foreground">3 Fluxos de Batalha Prontos</p>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="bg-card/50 border-secondary/10 hover:border-secondary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Bot className="h-5 w-5 text-secondary" />
                    Agente SDR de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Qualifica leads, responde dúvidas e agenda reuniões automaticamente no WhatsApp.
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-secondary/10 hover:border-secondary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <MessageSquare className="h-5 w-5 text-secondary" />
                    A Armadilha de Leads (Google)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Captura leads do Ads e inicia conversa imediata para garantir conversão máxima.
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-secondary/10 hover:border-secondary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Target className="h-5 w-5 text-secondary" />
                    A Caçada Silenciosa (Outbound)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Prospecção ativa que busca, enriquece dados e aborda potenciais clientes no piloto automático.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
