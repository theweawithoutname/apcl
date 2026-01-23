"use client";

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

interface Props {
  slug: string;
}

export default function DynamicDemo({ slug }: Props) {
  // Usamos useMemo para que no intente recargar el componente en cada pequeño cambio
  const Demo = useMemo(() => {
    return dynamic(
      () => import(`@/components/ejemplos/${slug}`).then((mod) => mod.default || mod), 
      {
        loading: () => <p className="text-secondary animate-pulse text-sm">Cargando...</p>,
        ssr: false,
      }
    );
  }, [slug]);

  return <Demo />;
}