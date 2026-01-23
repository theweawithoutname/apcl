import Sidebar from "@/components/Sidebar";

export default function EjerciciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)]"> 
      {/* 64px es la altura del Navbar para que encaje perfecto */}
      
      {/* Barra Lateral - Oculta en móvil, fija en desktop */}
      <aside className="hidden md:block w-72 border-r border-border bg-accent/20 overflow-y-auto max-h-[calc(100vh-64px)] sticky top-16">
        <Sidebar />
      </aside>

      {/* Contenido Central */}
      <div className="flex-1 bg-background">
        {children}
      </div>
    </div>
  );
}