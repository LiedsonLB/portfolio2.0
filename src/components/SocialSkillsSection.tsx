'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { FaPeopleArrows, FaComments, FaHandsHelping, FaShieldAlt, FaFlagCheckered, FaHandshake, FaBrain, FaLightbulb, FaUserFriends, FaSmile } from 'react-icons/fa'; // Ícones representativos
import Loading from './Loading';

interface SocialSkill {
    icon: string;
    name: string;
    color: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function SocialSkills() {
    const { data: skills, error } = useSWR<SocialSkill[]>('/api/social-skills', fetcher);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isAllVisible, setIsAllVisible] = useState(false);

    if (error) return <div>Falha ao carregar os dados</div>;
    if (!skills) return <Loading />;

    const handleToggleVisibility = () => {
        setVisibleCount(isAllVisible ? 4 : skills.length);
        setIsAllVisible(!isAllVisible);
    };

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'FaPeopleArrows':
                return <FaPeopleArrows style={{ fontSize: '2rem' }} />;
            case 'FaComments':
                return <FaComments style={{ fontSize: '2rem' }} />;
            case 'FaHandsHelping':
                return <FaHandsHelping style={{ fontSize: '2rem' }} />;
            case 'FaShieldAlt':
                return <FaShieldAlt style={{ fontSize: '2rem' }} />;
            case 'FaFlagCheckered':
                return <FaFlagCheckered style={{ fontSize: '2rem' }} />;
            case 'FaHandshake':
                return <FaHandshake style={{ fontSize: '2rem' }} />;
            case 'FaBrain':
                return <FaBrain style={{ fontSize: '2rem' }} />;
            case 'FaLightbulb':
                return <FaLightbulb style={{ fontSize: '2rem' }} />;
            case 'FaUserFriends':
                return <FaUserFriends style={{ fontSize: '2rem' }} />;
            case 'FaSmile':
                return <FaSmile style={{ fontSize: '2rem' }} />;
            default:
                return null;
        }
    };

    return (
        <section className="p-4 max-w-screen-lg mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
                {skills.slice(0, visibleCount).map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white min-h-[150px]"
                    >
                        <div className="w-16 h-16 mb-2 flex items-center justify-center" style={{ color: skill.color }}>
                            {renderIcon(skill.icon)}
                        </div>
                        <span className="text-black font-semibold text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
            {skills.length > 4 && (
                <div className="mt-4 text-center">
                    <a href='#mySoftSkills'
                        onClick={handleToggleVisibility}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full w-fit bg-blue text-white scaleIn mt-8 m-auto"
                    >
                        {isAllVisible ? 'Mostrar Menos' : 'Ver Todas'}
                    </a>
                </div>
            )}
        </section>
    );
}