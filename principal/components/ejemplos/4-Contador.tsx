"use client"
import { useState } from 'react';

export default function Contador () {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    const decrement = () => {
        // Usamos Math.max para decir: "Elige el número más grande entre 0 y la resta"
        // Esto garantiza que nunca baje de 0 en una sola línea.
        setCount(prev => Math.max(0, prev - 1));
    };

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
}