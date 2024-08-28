import { useState, useEffect } from "react";
import LanguageModal from "./modals/LanguageModal";
import Loading from "./Loading";
import Link from "next/link";
import { FaEnvelope, FaLaptopCode, FaProjectDiagram, FaTools, FaUser } from "react-icons/fa";

interface AsideProps {
    onClose: () => void;
}

export interface Language {
    code: string;
    name: string;
    url: string;
}

const languages: Language[] = [
    { code: 'pt', name: 'Português', url: '/languages/brasil.png' },
    { code: 'en', name: 'Inglês', url: '/languages/estados-unidos.png' },
    { code: 'es', name: 'Espanhol', url: '/languages/espanha.png' },
    { code: 'jp', name: 'Japonês', url: '/languages/japao.png' },
];

export default function Aside({ onClose }: AsideProps) {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    useEffect(() => {
        const storedLanguageCode = localStorage.getItem('selectedLanguage');
        if (storedLanguageCode) {
            setSelectedLanguage(storedLanguageCode);
        } else {
            setSelectedLanguage('pt');
        }
    }, []);

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language.code);
        setIsLanguageMenuOpen(false);

        localStorage.setItem('selectedLanguage', language.code);

        console.log(`Idioma selecionado: ${language.name}`);
    };

    const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

    return (
        <div className="w-screen max-h-screen flex fixed z-50 md-lg:hidden bottom-0">
            <div className="w-[100%] aside-background" onClick={onClose}></div>
            <div className="flex flex-col justify-between w-[50rem] pt-12 h-sm:py-0 bg-ice p-4 h-screen min-h-screen max-h-screen overflow-auto">
                <div className='flex flex-col h-full'>
                    <nav className="text-text-light list-none gap-8 font-[600] h-full px-2 flex flex-col">
                        <h2 className="text-blue">Menu de Navegação</h2>
                        <ul className="w-full flex flex-col flex-grow">
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue fill-text-light hover:fill-blue shadow-md py-4 rounded-md text-start pl-6 w-full"
                                    href="#aboutMe"
                                    onClick={onClose}>
                                    <FaUser />
                                    Carreira
                                </a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue fill-text-light hover:fill-blue shadow-md py-4 rounded-md text-start pl-6 w-full"
                                    href="#myTecnologies"
                                    onClick={onClose}>
                                    <FaTools />
                                    Tecnologias
                                </a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue fill-text-light hover:fill-blue shadow-md py-4 rounded-md text-start pl-6 w-full"
                                    href="#mySoftSkills"
                                    onClick={onClose}>
                                    <FaLaptopCode />
                                    Habilidades
                                </a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue fill-text-light hover:fill-blue shadow-md py-4 rounded-md text-start pl-6 w-full"
                                    href="#myProjects"
                                    onClick={onClose}>
                                    <FaProjectDiagram />
                                    Projetos
                                </a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue fill-text-light hover:fill-blue shadow-md py-4 rounded-md text-start pl-6 w-full"
                                    href="#contateMe"
                                    onClick={onClose}>
                                    <FaEnvelope />
                                    Contatos
                                </a>
                            </li>
                            <hr className="my-4 bg-text-light" />
                        </ul>
                        <div className="mt-auto">
                            <li className="relative py-1 w-full">
                                <button
                                    className="flex items-center gap-2 bg-white pl-6 hover:text-blue shadow-md py-4 rounded-md text-center w-full"
                                    onClick={toggleLanguageMenu}
                                >
                                    {currentLanguage ? (
                                        <img src={currentLanguage.url} alt={currentLanguage.name} className="w-6 h-6" />
                                    ) : (
                                        <Loading />
                                    )}
                                    {currentLanguage ? currentLanguage.name : "Carregando..."}
                                </button>
                            </li>
                        </div>
                    </nav>
                </div>
            </div>
            <LanguageModal
                languages={languages}
                isOpen={isLanguageMenuOpen}
                onClose={() => setIsLanguageMenuOpen(false)}
                onSelectLanguage={handleLanguageSelect}
            />
        </div>
    );
}
