import React from "react";

const images = [
    { src: "https://via.placeholder.com/300x200?text=Imagem+1", gridSpan: "col-span-1 row-span-2" },
    { src: "https://via.placeholder.com/300x300?text=Imagem+2", gridSpan: "col-span-1 row-span-1" },
    { src: "https://via.placeholder.com/300x400?text=Imagem+3", gridSpan: "col-span-2 row-span-2" },
    { src: "https://via.placeholder.com/400x400?text=Imagem+4", gridSpan: "col-span-2 row-span-2" },
    { src: "https://via.placeholder.com/400x300?text=Imagem+5", gridSpan: "col-span-1 row-span-1" },
    { src: "https://via.placeholder.com/500x500?text=Imagem+6", gridSpan: "col-span-2 row-span-2" },
];

export default function Gallery() {
    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            galeria
        </div>
    );
}
