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
}