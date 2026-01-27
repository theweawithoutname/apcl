"use client";
import { useState } from "react";

export default function CambiarTexto() {
  const [text, setText] = useState<boolean>(true);

  // Solución optimizada: Una sola línea de lógica
  const handleToggle = () => setText(!text);

  return (
    <button onClick={handleToggle} className="bg-primary p-4 rounded text-white">
      {text ? "Hola" : "Mundo"}
    </button>
  );
}