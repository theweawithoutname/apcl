"use client";
import { useState } from "react";

export default function CambiarColor() {
  const [index, setIndex] = useState<number>(0);

  const colores = [
    "#FF5733", "#33FF57", "#3357FF", 
    "#F333FF", "#FFFF33", "#33FFF5"
  ];

  // Optimización 1: El operador módulo elimina la necesidad de un IF
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

      <div 
        style={{ backgroundColor: colores[index] }} 
        className="mt-4 p-10 rounded shadow-lg text-white font-bold transition-colors duration-500"
      >
        Color actual: {colores[index]} (Índice: {index})
      </div>
    </div>
  );
}



