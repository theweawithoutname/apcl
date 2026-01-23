import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground">
      {/* Hero Section con gradiente suave basado en tu azul primario */}
      <section className="w-full py-24 bg-linear-to-b from-primary/5 to-background flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          100 Retos de <span className="text-primary">Frontend Moderno</span>
        </h1>
        <p className="max-w-2xl text-lg text-secondary mb-10">
          Aprende el stack más demandado del mercado construyendo 100 funcionalidades reales. 
          Desde lo más básico hasta patrones de arquitectura avanzada.
        </p>
        <Link 
          href="/ejercicios/1" 
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-primary/20"
        >
          Empezar Ejercicio #1
        </Link>
      </section>

      {/* Info de Niveles */}
      <section className="max-w-7xl w-full py-20 px-4 grid md:grid-cols-3 gap-8">
        {[
          { range: "01 - 20", title: "Fundamentos", desc: "Eventos, props, estados simples y manipulación del DOM estilo React." },
          { range: "21 - 60", title: "Dominio de Datos", desc: "Fetch asíncrono, Custom Hooks, validación y persistencia local." },
          { range: "61 - 100", title: "Nivel Experto", desc: "Server Components, optimización de renderizado y patrones de diseño." }
        ].map((item, index) => (
          <div key={index} className="p-8 border border-border bg-accent/30 rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="text-primary font-bold mb-3 text-sm tracking-widest">{item.range}</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-secondary leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}