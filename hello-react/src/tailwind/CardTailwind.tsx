import React from 'react';

export const CardTailwind: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black">
      <img className="w-full" src="https://media.istockphoto.com/id/610259354/es/foto/mujer-joven-usando-c%C3%A1mara-r%C3%A9flex-digital.jpg?s=612x612&w=0&k=20&c=M8sk5Mem6PVAEOBONakRf351Bot4N6t013Ehda3Zfd8=" alt="Imagen" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Título de la tarjeta</div>
        <p className="text-gray-700 text-base">
          Esta es una descripción breve dentro de una tarjeta estilizada con Tailwind.
        </p>
      </div>
    </div>
  );
};