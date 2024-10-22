'use client'
import { useState } from 'react';
import useSWR from 'swr';
import { FaLaptopCode, FaComments, FaTachometerAlt, FaCog, FaCloud, FaProjectDiagram, FaRobot } from 'react-icons/fa';
import Loading from './Loading';

interface Service {
    title: string;
    description: string;
    icon: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const iconMap: { [key: string]: JSX.Element } = {
    FaLaptopCode: <FaLaptopCode className="text-blue text-3xl mb-2" />,
    FaComments: <FaComments className="text-blue text-3xl mb-2" />,
    FaTachometerAlt: <FaTachometerAlt className="text-blue text-3xl mb-2" />,
    FaCog: <FaCog className="text-blue text-3xl mb-2" />,
    FaCloud: <FaCloud className="text-blue text-3xl mb-2" />,
    FaProjectDiagram: <FaProjectDiagram className="text-blue text-3xl mb-2" />,
    FaRobot: <FaRobot className="text-blue text-3xl mb-2" />,
};

export default function Servicos() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [isAllVisible, setIsAllVisible] = useState(false);

    const { data: services, error: servicesError } = useSWR<Service[]>('/api/servicos', fetcher);

    if (servicesError) return <div>Failed to load data</div>;
    if (!services) return <Loading />;

    const handleToggleVisibility = () => {
        setVisibleCount(isAllVisible ? 3 : services.length);
        setIsAllVisible(!isAllVisible);
    };

    return (
        <div className="bg-ice py-10 px-4">
            <div className="max-w-[85%] m-auto text-center grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.slice(0, visibleCount).map((service, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6 min-h-full">
                        <div className="flex justify-center items-center mb-4">
                            {iconMap[service.icon]}
                        </div>
                        <h2 className="font-doppio font-bold text-2xl text-black mb-2">{service.title}</h2>
                        <p className="text-text-light mb-4">{service.description}</p>
                    </div>
                ))}
            </div>
            {services.length > 4 && (
                <div className="mt-4 text-center">
                    <a
                        href="#servicos"
                        onClick={handleToggleVisibility}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full w-fit bg-blue text-white scaleIn mt-8 m-auto"
                    >
                        {isAllVisible ? 'Mostrar Menos' : 'Ver Todas'}
                    </a>
                </div>
            )}
        </div>
    );
}