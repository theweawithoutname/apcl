"use client"
import { useState } from 'react';

export default function ToDo() {
    const [value, setValue] = useState<string>("");
    const [lista, setLista] = useState<string[]>([]);

    const agregar = () => {
        if (value.trim() !== "") {
            setLista((prevLista) => [...prevLista, value]);
            setValue("");
        }
    };

    const eliminar = (index: number) => {
        setLista((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        // Fondo gris claro para que resalte la tarjeta
        <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
            
            {/* Tarjeta Principal */}
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Mi Lista de Tareas
                </h1>

                {/* Contenedor del Input */}
                <div className="flex gap-2 mb-6">
                    <input 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)}
                        className="grow border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-black"
                        placeholder="¿Qué planeas hacer?"
                    />
                    <button 
                        onClick={agregar} 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-md active:scale-95"
                    >
                        Añadir
                    </button>
                </div>

                {/* Lista de Tareas */}
                <ul className="space-y-3">
                    {lista.length > 0 ? (
                        lista.map((tarea, index) => (
                            <li 
                                key={index} 
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-100 group hover:shadow-sm transition-all"
                            >
                                <span className="text-gray-700 font-medium">{tarea}</span>
                                <button 
                                    onClick={() => eliminar(index)} 
                                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors"
                                    title="Eliminar tarea"
                                >
                                    {/* Icono de basurero simple (SVG) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-4 italic">No hay tareas pendientes</p>
                    )}
                </ul>
            </div>
        </div>
    );
}