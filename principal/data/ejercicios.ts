export type Nivel = 'Principiante' | 'Intermedio' | 'Avanzado';

export interface Ejercicio {
  id: string;
  slug: string;
  titulo: string;
  nivel: Nivel;
  descripcion: string;
  codigo: string;
}

export const LISTA_EJERCICIOS: Ejercicio[] = [
  {
    id: "1",
    slug: "CambiarTexto",
    titulo: "Cambiar texto con botón",
    nivel: "Principiante",
    descripcion: "Aprende a usar useState para modificar el contenido de un elemento dinámicamente.",
    // USAMOS BACKTICKS PARA MULTILÍNEA
    codigo: `const [text, setText] = useState("Hola");

    const handleClick = () => {
        setText("¡Mundo!");
    };

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );`
  },
  {
    id: "2",
    slug: "mostrar-ocultar",
    titulo: "Mostrar y Ocultar elemento",
    nivel: "Principiante",
    descripcion: "Uso de renderizado condicional para alternar la visibilidad de un componente.",
    codigo: `const [show, setShow] = useState(true);\n\nreturn (\n  <>\n    <button onClick={() => setShow(!show)}>Toggle</button>\n    {show && <p>¡Ahora me ves!</p>}\n  </>\n);`
  }

];