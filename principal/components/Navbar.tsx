import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter text-primary">
          JS<span className="text-foreground">Mastery</span><span className="text-primary">100</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/ejercicios" className="hover:text-primary transition-colors">
            Ejercicios
          </Link>
          {/* Badge profesional */}
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            Next.js + TS
          </span>
        </div>
      </div>
    </nav>
  );
}