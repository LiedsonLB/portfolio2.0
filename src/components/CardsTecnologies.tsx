'use client'
import { useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Loading from './Loading';

interface Technology {
    src: string;
    name: string;
    color: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CardsTecnologies() {
    const { data: technologies, error } = useSWR<Technology[]>('/api/technologies', fetcher);
    const [visibleCount, setVisibleCount] = useState(10);
    const [isAllVisible, setIsAllVisible] = useState(false);

    if (error) return <div>Failed to load data</div>;
    if (!technologies) return <Loading />;

    const handleToggleVisibility = () => {
        if (isAllVisible) {
            setVisibleCount(10);
        } else {
            setVisibleCount(technologies.length);
        }
        setIsAllVisible(!isAllVisible);
    };

    return (
        <section className="p-4 max-w-screen-lg mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {technologies.slice(0, visibleCount).map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white"
                    >
                        <div className="relative w-16 h-16 mb-2">
                            <Image
                                src={tech.src}
                                layout="fill"
                                objectFit="contain"
                                alt={tech.name}
                                className="text-white"
                            />
                        </div>
                        <span className="text-black font-semibold">{tech.name}</span>
                    </div>
                ))}
            </div>
            {technologies.length > 10 && (
                <div className="mt-4 text-center">
                    <a href='#myTecnologies'
                        onClick={handleToggleVisibility}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full w-fit bg-blue text-white scaleIn m-auto"
                    >
                        {isAllVisible ? 'Mostrar Menos' : 'Ver Todas'}
                    </a>
                </div>
            )}
        </section>
    );
}