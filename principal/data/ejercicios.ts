export type Nivel = 'Principiante' | 'Intermedio' | 'Avanzado';

export interface Ejercicio {
  id: string;
  slug: string;
  titulo: string;
  nivel: Nivel;
  descripcion: string;
  codigoIntuitivo: string;
  codigoOptimizado: string;
  concepto: string;
}

export const LISTA_EJERCICIOS: Ejercicio[] = [
  {
    id: "1",
    slug: "1-CambiarTexto",
    titulo: "Cambiar texto con botón",
    nivel: "Principiante",
    descripcion: "Aprende a usar useState para modificar el contenido de un elemento dinámicamente.",
    // USAMOS BACKTICKS PARA MULTILÍNEA
    codigoIntuitivo: `
    "use client";
    import { useState } from "react";
    
    
    export default function CambiarTexto() {
      // estado del texto 
      const [text, setText] = useState<string>("hola");
    
      function handleToggle () {
        if (text === "hola")  {
          setText("mundo")
        } else {
          setText("hola")
        }
      }
      
    
      return (
        <button onClick={handleToggle} className="bg-primary p-4 rounded text-white">
          {text}
        </button>
      );
    }`,
    codigoOptimizado:`
    "use client";
    import { useState } from "react";

    export default function CambiarTexto() {
      const [esHola, setEsHola] = useState<boolean>(true);

      // Solución optimizada: Una sola línea de lógica
      const handleToggle = () => setEsHola(!esHola);

      return (
        <button onClick={handleToggle} className="bg-primary p-4 rounded text-white">
          {esHola ? "Hola" : "Mundo"}
        </button>
      );
    }
    `,
    concepto:`si quiero intercalar entre opciones es mucho mejor usar operador ternario que condicionales`
  },
  {
    id: "2",
    slug: "2-MostrarOcultar",
    titulo: "Mostrar y Ocultar elemento",
    nivel: "Principiante",
    descripcion: "Uso de renderizado condicional para alternar la visibilidad de un componente.",
    codigoIntuitivo: `
    "use client";
    import { useState } from "react";
    
    export default function MostrarOcultar() {
      const [visible, setVisible] = useState<boolean>(true);
    
      const handleToggle = () => setVisible(!visible);
    
      return (
        <div>
          <button onClick={handleToggle} className="bg-primary p-4 rounded text-white">Mostrar/Ocultar</button>
          <div>{ visible ? (<div>hola</div>) : (<div></div>)}</div>
        </div>
      );
    }`,
    codigoOptimizado: `
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
            <div className="mt-4 p-4 border rounded bg-gray-100">
              ¡Hola! Este contenido es condicional.
            </div>
          )}
        </div>
      );
    }`,
    concepto:
    `si quiero mostrar algo o no mostrarlo, es mas eficiente usar AND (&&) que usar operador ternario`
  }

];