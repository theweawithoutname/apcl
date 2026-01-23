export default function Footer() {
  return (
    <footer className="border-t border-border bg-accent/50">
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm font-semibold text-foreground">
            JS Mastery 100
          </p>
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} Mi Guía de Aprendizaje Front-End.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-secondary">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Listo para producción
          </div>
          <span className="text-xs text-secondary border-l border-border pl-6 italic">
            Construido con propósitos educativos
          </span>
        </div>
      </div>
    </footer>
  );
}