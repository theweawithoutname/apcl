"use client";
import { useState } from "react";

// DEBE SER EXPORT DEFAULT
export default function CambiarTexto() {
  const [text, setText] = useState("Hola");
  return (
    <button onClick={() => setText("¡Mundo!")} className="bg-primary p-4 rounded text-white">
      {text}
    </button>
  );
}