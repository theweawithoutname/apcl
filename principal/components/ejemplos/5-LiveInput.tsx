

"use client";
import { useState } from "react";

export default function InputRealTime() {
  // 1. El estado inicial es un string vacío
  const [texto, setTexto] = useState<string>("");

  // 2. La función que "escucha" el cambio
  // 'e' es el evento, 'target' es el input, 'value' es lo que se escribió
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  return (
    <div className="p-10">
      <input 
        type="text" 
        value={texto}           // El input "mira" al estado
        onChange={manejarCambio} // El input "le habla" al estado
        placeholder="Escribe algo..."
        className="border p-2 rounded"
      />
      
      {/* El párrafo solo refleja lo que hay en el estado */}
      <p className="mt-4 font-bold text-blue-600">
        Lo que escribes es: {texto}
      </p>
    </div>
  );
}