import Link from 'next/link';

export default function Curriculos() {
    const curriculos = [
        {
            title: 'Currículo Fullstack Developer',
            description: 'Um resumo detalhado de minha experiência como desenvolvedor Fullstack.',
            src: '/curriculos/fullstack-developer.pdf',
        },
        {
            title: 'Currículo Frontend Developer',
            description: 'Focado em minhas habilidades e experiências como desenvolvedor Frontend.',
            src: '/curriculos/frontend-developer.pdf',
        },
        {
            title: 'Currículo Frontend Developer',
            description: 'Focado em minhas habilidades e experiências como desenvolvedor Frontend.',
            src: '/curriculos/frontend-developer.pdf',
        },
        // Adicione mais currículos conforme necessário
    ];

    return (
        <div className="max-w-[85%] m-auto text-center grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {curriculos.map((curriculo, index) => (
                <div key={index} className="mb-8 bg-white shadow-lg rounded-lg p-6 min-h-full">
                    <h2 className="font-doppio font-bold text-2xl text-black mb-3">{curriculo.title}</h2>
                    <p className="text-text-light mb-4">{curriculo.description}</p>
                    <a href={curriculo.src}
                        download
                        className="inline-block cursor-pointer text-blue font-semibold hover:underline transition duration-300"
                    >
                        Ver Currículo
                    </a>
                </div>
            ))}
        </div>
    );
}
