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



