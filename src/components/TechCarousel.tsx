"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from './Loading';

type Technology = {
    src: string;
};

const TechCarousel: React.FC = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTechnologies() {
            try {
                const response = await fetch('/api/technologies');
                const data = await response.json();
                setTechnologies(data);
            } catch (error) {
                console.error('Error fetching technologies', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTechnologies();
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="overflow-hidden relative flex justify-center bg-white p-4">
            <div className="flex carousel-track animate-scroll">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex-shrink-0 mx-4">
                        <Image src={tech.src} alt={`Technology ${index}`} width={50} height={50} />
                    </div>
                ))}
                {technologies.map((tech, index) => (
                    <div key={`clone-${index}`} className="flex-shrink-0 mx-4">
                        <Image src={tech.src} alt={`Technology clone ${index}`} width={50} height={50} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCarousel;