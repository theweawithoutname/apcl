import { LISTA_EJERCICIOS } from "@/data/ejercicios";
import { notFound } from "next/navigation";
import DynamicDemo from "@/components/DynamicDemo";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// 1. Definimos la interfaz de la promesa de params
interface PageProps {
  params: Promise<{ slug: string }>;
}



// 2. Convertimos la función en async
export default async function DetalleEjercicio({ params }: PageProps) {
  
  // 3. Esperamos a que los parámetros estén listos
  const { slug } = await params;

  // 4. Buscamos el ejercicio (ahora usando la variable 'slug' resuelta)
  const ejercicio = LISTA_EJERCICIOS.find(
    (e) => e.slug === slug || e.id === slug
  );

  if (!ejercicio) notFound();


  return (
    <div className="max-w-5xl mx-auto p-8 animate-in fade-in duration-500">
      {/* Header Dinámico */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            EJERCICIO #{ejercicio.id}
          </span>
          <span className="text-secondary text-sm">•</span>
          <span className="text-secondary text-sm italic font-medium">
            Nivel {ejercicio.nivel}
          </span>
        </div>
        
        {/* Título Real */}
        <h1 className="text-4xl font-extrabold mb-4 text-foreground">
          {ejercicio.titulo}
        </h1>
        
        {/* Descripción Real */}
        <p className="text-lg text-secondary leading-relaxed max-w-3xl">
          {ejercicio.descripcion}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {/* Visualizador de la Solución (Preview) */}
        <section className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-16 flex justify-center items-center">
                {/* 3. Lo renderizamos como cualquier otro componente */}
                <DynamicDemo slug={ejercicio.slug} />
            </div>
        </section>

        {/* Sección de Código Dinámica */}
        <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">La Solución</h2>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <SyntaxHighlighter 
                language="tsx" 
                style={vscDarkPlus}
                showLineNumbers={true}         
                lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#4b5563' }}
                wrapLines={true}           
                customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.9rem',
                    borderRadius: '0.75rem',      // Bordes redondeados modernos
                    backgroundColor: '#0f172a',   // Fondo personalizado si quieres ignorar el del tema
                }}
                >
                {ejercicio.codigo}
                </SyntaxHighlighter>
            </div>
        </section>
      </div>
    </div>
  );
}