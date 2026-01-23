"use client"; // Necesario para detectar la ruta actual

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LISTA_EJERCICIOS } from '@/data/ejercicios';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="px-3 text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
          Progreso de Ejercicios
        </h3>
        
        <div className="space-y-1">
          {LISTA_EJERCICIOS.map((ej) => {
            const isActive = pathname === `/ejercicios/${ej.slug}`;
            
            return (
              <Link
                key={ej.id}
                href={`/ejercicios/${ej.slug}`}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                  ${isActive 
                    ? "bg-primary text-primary-foreground shadow-sm font-medium" 
                    : "text-secondary hover:bg-accent hover:text-foreground"}
                `}
              >
                <span className={`
                  w-6 h-6 flex items-center justify-center rounded-md text-[10px] border
                  ${isActive ? "border-primary-foreground/30" : "border-border bg-background"}
                `}>
                  {ej.id}
                </span>
                {ej.titulo}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}