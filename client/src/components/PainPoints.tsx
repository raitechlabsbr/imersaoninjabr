import { AlertTriangle, Lock, Search, Server } from "lucide-react";

export default function PainPoints() {
  const pains = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "O Pesadelo da VPS",
      description: "Você tenta configurar um servidor e acaba com erros de permissão, portas bloqueadas e uma tela preta de terminal."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Travado no Básico",
      description: "Enquanto você luta para instalar o Docker, seus concorrentes já estão vendendo automações complexas."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Tutoriais Desatualizados",
      description: "Você segue o vídeo do 'guru' passo a passo, mas a versão mudou e nada funciona como deveria."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4" />
              A Realidade do Faixa Branca
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Você tem a estratégia, mas a <span className="text-primary">técnica te paralisa.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              VPS? Portainer? Docker? Evolution API? Esses nomes parecem um dialeto secreto criado para impedir você de ganhar dinheiro.
              <br /><br />
              A verdade é dura: sem dominar o seu <strong>dojo</strong> (a infraestrutura), você continuará sendo um eterno iniciante, dependendo de ferramentas caras ou de terceiros para executar suas ideias.
            </p>
            
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg backdrop-blur-sm">
              <p className="font-mono text-primary text-sm">
                &gt; SYSTEM_ERROR: Infrastructure knowledge not found.<br />
                &gt; ACCESS_DENIED: Cannot deploy AI Agent.<br />
                &gt; _
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6">
            {pains.map((pain, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(122,66,217,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {pain.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{pain.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
