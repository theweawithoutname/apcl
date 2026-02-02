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
  },
  {
    id: "3",
    slug: "3-CambiarColor",
    titulo: "Cambiar el color del fondo",
    nivel: "Principiante",
    descripcion: ".",
    codigoIntuitivo: `
    "use client";
    import { useState } from "react";
    
    export default function CambiarColor () {
        const [index, setIndex] = useState<number>(0);
    
        const colores: string[] = [
    
            "#FF5733", // Naranja vibrante
            "#33FF57", // Verde lima
            "#3357FF", // Azul real
            "#F333FF", // Rosa fucsia
            "#FFFF33", // Amarillo puro
            "#33FFF5"  // Turquesa
        ];
    
        function changeIndex () {
        if (index > colores.length - 1 ) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
        }
    
        return (
            <div>
                <button onClick={changeIndex} className="bg-blue-600 p-4 rounded text-white"> Cambiar Color </button>
                <div style = {{ backgroundColor: colores[index]}} className="mt-4 p-4 rounded bg-amber-500">hello</div>
            </div>
        )
    }
    `,
    codigoOptimizado: `
    "use client";
    import { useState } from "react";
    
    export default function CambiarColor() {
      const [index, setIndex] = useState<number>(0);
    
      const colores = [
        "#FF5733", "#33FF57", "#3357FF", 
        "#F333FF", "#FFFF33", "#33FFF5"
      ];
    
      // Optimización 1: 

      // la funcion se puede optimizar mucho usando simplemente setIndex (() => ()) 
      // traducido significa 'el index se seteara del valor actual a lo siguiente'

      // para trabajar con limites se usa el modulo (%) ¿que significa esto?
      // lo que este a la derecha del % dividira al de la izquierda, si no cabe, el resultado sera la derecha,
      // si cabe, el resultado sera el sobrante de esa division

      const changeIndex = () => {
        setIndex((prevIndex) => (prevIndex + 1) % colores.length);
      };

        // const changeIndex = () => {
        // setIndex((prevIndex) => (prevIndex - 1 + colores.length) % colores.length);
        // };
        
        // si quisiera hacerlo a la inversa
    
      return (
        <div className="p-8">
          <button 
            onClick={changeIndex} 
            className="bg-blue-600 p-4 rounded text-white active:scale-95 transition-transform"
          >
            Cambiar Color
          </button>
    
          {/* Optimización 2: Estilos dinámicos limpios */}
          <div 
            style={{ backgroundColor: colores[index] }} 
            className="mt-4 p-10 rounded shadow-lg text-white font-bold transition-colors duration-500"
          >
            Color actual: {colores[index]} (Índice: {index})
          </div>
        </div>
      );
    }`,
    concepto: "."
  },
  {
    id: "4",
    slug: "4-Contador",
    titulo: "Contador",
    nivel: "Principiante",
    descripcion: "Contador con disminuir, reiniciar y aumentar",
    codigoIntuitivo: `
    "use client"
    import { useState } from 'react';
    
    export default function Contador () {
        const [index, setIndex] = useState<number>(0);
    
        const increment = () => {
            setIndex((prevIndex) => (prevIndex + 1));
        };
    
        const decrement = () => {
            if (index === 0) {
                setIndex(0)
            } else {
                setIndex((prevIndex) => (prevIndex - 1))
            }
        };
    
        const reset = () => {
            setIndex(0)
        }
    
        return (
            <div>
                <div>{index}</div>
                <button onClick = {increment}> Aumentar </button>
                <button onClick = {decrement}> Disminuir </button>
                <button onClick = {reset}> Reiniciar </button>
            </div>
        )
    }`,
    codigoOptimizado: `
    "use client"
    import { useState } from 'react';
    
    export default function Contador () {
        const [count, setCount] = useState<number>(0);

        //si es muy simple la funcion ni siquiera son necesarias las llaves {}
        const increment = () => setCount(prev => prev + 1);
    
        const decrement = () => {
            // Usamos Math.max para decir: "Elige el número más grande entre 0 y la resta"
            // Esto garantiza que nunca baje de 0 en una sola línea.
            setCount(prev => Math.max(0, prev - 1));
        };

        //si es muy simple la funcion ni siquiera son necesarias las llaves {}
        const reset = () => setCount(0);
    
        return (
            <div className="p-10 text-center">
                <div className="text-4xl font-bold mb-4">{count}</div>
                <div className="flex gap-2 justify-center">
                    <button onClick={increment} className="bg-green-500 p-2 rounded text-white"> Aumentar </button>
                    <button onClick={decrement} className="bg-red-500 p-2 rounded text-white"> Disminuir </button>
                    <button onClick={reset} className="bg-gray-500 p-2 rounded text-white"> Reiniciar </button>
                </div>
            </div>
        )
    }`,
    concepto: "."
  },
  {
    id: "5",
    slug: "5-LiveInput",
    titulo: "Live Input",
    nivel: "Principiante",
    descripcion: "Visualizar texto mientras lo escribes en un input",
    codigoIntuitivo: `
    // no tenia idea de como hacerlo
    // aprendi como traer el valor de un elemento HTML
    // aprendi como hacer algo cuando el valor de un elemento HTML cambia`,
    codigoOptimizado: `
    
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
    }`,
    concepto: "."
  },
  {
    id: "6",
    slug: "6-ToDo",
    titulo: "To Do",
    nivel: "Principiante",
    descripcion: "Lista de tareas",
    codigoIntuitivo: `
    // 1- aca juego con dos valores, el valor que quiero agregar y el valor del array
    // si el valor del input es distinto de "" (o sea nada) el valor de la lista pasara a ser el valor de la lista con el valor del input al final
    // al final de la funcion limpia el input 
    // 2- del lado del HTML, value controla lo que vemos, onChange controla que cuando escribas algo cambie el estado y por lo tanto value
    // (aunque para este caso concreto es util porque la funcion limpia el input al hacer onClick)
    // 3- mapeo de cosas, la key sirve para que cada objeto del array sea unico y no se renderice todo cada vez que algo cambia
    // y el otro parentesis corresponde al contenido del array en funcion del formato que se le dio al array`,
    codigoOptimizado: `
    "use client"
    import { useState } from 'react';
    
    export default function ToDo () {
        const [value, setValue] = useState<string>("");
        const [lista, setLista] = useState<string[]>([]);
    
        const agregar = () => {
            if (value.trim() !== ""){
                setLista((prevLista) => [...prevLista, value]);
                setValue("");
            }
        };
    
        return (
            <div className="p-10">
                <input 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    className="border p-2 mr-2 text-black"
                    placeholder="Nueva tarea..."
                />
                <button onClick={agregar} className="bg-blue-500 p-2 text-white">
                    Agregar
                </button>
    
                <ul className="mt-4 list-disc pl-5">
                    {lista.map((tarea, index) => (
                        <li key={index} className="text-gray-700">
                            {tarea}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }`,
    concepto: "."
  },
  {
    id: "7",
    slug: "7-FetchDeDatos",
    titulo: "Fetching de Datos Básico",
    nivel: "Intermedio",
    descripcion: "Cómo cargar datos de una API al montar el componente.",
    codigoIntuitivo: ``,
    codigoOptimizado: ``,
    concepto: "Manejar estados de 'loading', 'error' y 'data' es fundamental para una buena UX."
  },
  {
    id: "8",
    slug: "8-MultipleInputs",
    titulo: "Objeto de Estado para Formularios",
    nivel: "Intermedio",
    descripcion: "Evitar tener 10 useStates para un formulario largo.",
    codigoIntuitivo: `const [name, setName] = useState(''); const [email, setEmail] = useState('');`,
    codigoOptimizado: `const [form, setForm] = useState({ name: '', email: '' });`,
    concepto: "Agrupar estados relacionados reduce re-renders innecesarios y simplifica el código."
  },
  {
    id: "9",
    slug: "9-DerivedState",
    titulo: "Estado Derivado",
    nivel: "Intermedio",
    descripcion: "No guardes en el estado algo que puedes calcular.",
    codigoIntuitivo: `const [fullName, setFullName] = useState(firstName + lastName);`,
    codigoOptimizado: `const fullName = firstName + ' ' + lastName;`,
    concepto: "Si un valor se puede calcular desde las props o el estado existente, no lo metas en un useState."
  },
  {
    id: "10",
    slug: "10-CondicionalesComplejos",
    titulo: "Early Return en Componentes",
    nivel: "Intermedio",
    descripcion: "Limpiar el JSX de condicionales anidados.",
    codigoIntuitivo: `return ( <div> {isLoading ? <Spinner /> : <Data />} </div> )`,
    codigoOptimizado: `if (isLoading) return <Spinner />; return <Data />;`,
    concepto: "Los 'Early returns' hacen que el código principal sea más legible y plano."
  },
  {
    id: "11",
    slug: "11-CustomHook",
    titulo: "Creación de un Custom Hook",
    nivel: "Avanzado",
    descripcion: "Extraer lógica reutilizable (ej: useWindowSize).",
    codigoIntuitivo: ``,
    codigoOptimizado: ``,
    concepto: "Los hooks personalizados permiten compartir lógica de estado entre componentes sin repetir código."
  },
  {
    id: "12",
    slug: "12-UseMemo",
    titulo: "Optimización con useMemo",
    nivel: "Avanzado",
    descripcion: "Memorizar cálculos pesados para evitar ejecuciones constantes.",
    codigoIntuitivo: `const resultado = calculoPesado(data);`,
    codigoOptimizado: `const resultado = useMemo(() => calculoPesado(data), [data]);`,
    concepto: "Solo re-calcula cuando las dependencias cambian, ahorrando CPU."
  },
  {
    id: "13",
    slug: "13-UseCallback",
    titulo: "Evitar re-renders con useCallback",
    nivel: "Avanzado",
    descripcion: "Pasar funciones a componentes hijos optimizados (React.memo).",
    codigoIntuitivo: ``,
    codigoOptimizado: ``,
    concepto: "Evita que las funciones se re-creen en cada render, manteniendo la referencia estable."
  },
  {
    id: "14",
    slug: "14-UseRefDOM",
    titulo: "Acceso al DOM con useRef",
    nivel: "Intermedio",
    descripcion: "Hacer focus en un input de manera programática.",
    codigoIntuitivo: `document.getElementById('myInput').focus();`,
    codigoOptimizado: `inputRef.current.focus();`,
    concepto: "Usa refs para interactuar con el DOM de forma segura dentro del ciclo de vida de React."
  },
  {
    id: "15",
    slug: "15-UseReducer",
    titulo: "Gestión de estado con useReducer",
    nivel: "Avanzado",
    descripcion: "Alternativa a useState para estados complejos.",
    codigoIntuitivo: ``,
    codigoOptimizado: ``,
    concepto: "Ideal cuando la lógica del siguiente estado depende de múltiples factores o acciones."
  },
  {
    id: "16",
    slug: "16-ContextAPI",
    titulo: "Pasar datos con Context API",
    nivel: "Avanzado",
    descripcion: "Evitar el 'Prop Drilling' (pasar props por 5 niveles).",
    codigoIntuitivo: ``,
    codigoOptimizado: ``,
    concepto: "Provee una forma de compartir valores globalmente sin pasarlos manualmente por cada nivel."
  },
  {
    id: "17",
    slug: "17-DebounceSearch",
    titulo: "Input con Debounce",
    nivel: "Avanzado",
    descripcion: "No disparar una búsqueda en cada tecla presionada.",
    codigoIntuitivo: `onChange={(e) => fetch(e.target.value)}`,
    codigoOptimizado: `// Uso de setTimeout o custom hook useDebounce`,
    concepto: "Mejora el rendimiento y reduce costos de API esperando a que el usuario deje de escribir."
  },
  {
    id: "18",
    slug: "18-Portal",
    titulo: "Modales con React Portals",
    nivel: "Intermedio",
    descripcion: "Renderizar componentes fuera de la jerarquía actual del DOM.",
    codigoIntuitivo: ``,
    codigoOptimizado: `createPortal(children, document.body)`,
    concepto: "Útil para modales y tooltips para evitar problemas de 'z-index' y 'overflow: hidden'."
  },
  {
    id: "19",
    slug: "19-KeyUsage",
    titulo: "El peligro de las Keys con Index",
    nivel: "Intermedio",
    descripcion: "Por qué no usar el índice del array como key.",
    codigoIntuitivo: `items.map((it, index) => <li key={index}>...</li>)`,
    codigoOptimizado: `items.map((it) => <li key={it.id}>...</li>)`,
    concepto: "Las keys ayudan a React a identificar qué items cambiaron. El índice puede causar bugs visuales al reordenar."
  },
  {
    id: "20",
    slug: "20-Fragmentos",
    titulo: "React Fragments",
    nivel: "Principiante",
    descripcion: "Agrupar elementos sin añadir nodos extra al DOM.",
    codigoIntuitivo: `<div> <Comp1 /> <Comp2 /> </div>`,
    codigoOptimizado: `<> <Comp1 /> <Comp2 /> </>`,
    concepto: "Mantiene el HTML limpio y evita problemas de maquetación CSS (como en flexbox o grid)."
  },
  {
    id: "21",
    slug: "21-DinamismoClases",
    titulo: "Clases Dinámicas (Template Literals)",
    nivel: "Principiante",
    descripcion: "Cambiar estilos CSS basados en el estado.",
    codigoIntuitivo: ``,
    codigoOptimizado: `className={\`p-4 \${active ? 'bg-blue' : 'bg-gray'}\`}`,
    concepto: "Permite una UI reactiva que responde visualmente a las acciones del usuario."
  },
  {
    id: "22",
    slug: "22-ChildrenProp",
    titulo: "Uso de la prop Children",
    nivel: "Intermedio",
    descripcion: "Crear componentes 'Wrapper' o contenedores.",
    codigoIntuitivo: ``,
    codigoOptimizado: `const Layout = ({ children }) => <div>{children}</div>`,
    concepto: "Fomenta la composición de componentes, uno de los pilares de React."
  }

];