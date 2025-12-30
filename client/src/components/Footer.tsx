export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl tracking-tight mb-2">
              Imersão <span className="text-primary">Ninja RaiTech</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Do Zero ao Fluxo em 3 Horas.
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; 2025 Imersão Ninja RaiTech. Todos os direitos reservados.</p>
            <p className="mt-1 text-xs opacity-50">
              Design System: Cyberpunk Minimalista v1.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
