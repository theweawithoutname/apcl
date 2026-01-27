    "use client";
    import { useState } from "react";

    export default function MostrarOcultar() {
      const [visible, setVisible] = useState<boolean>(true);

      const handleToggle = () => setVisible(!visible);

      return (
        <div className="p-6">
          <button 
            onClick={handleToggle} 
            className="bg-blue-600 p-4 rounded text-white"
          >
            {visible ? "Ocultar" : "Mostrar"} contenido
          </button>

          {/* Optimizando con el operador && */}
          {visible && (
            <div className="mt-4 p-4 rounded bg-blue-950">
              ¡Hola! Este contenido es condicional.
            </div>
          )}
        </div>
      );
    }