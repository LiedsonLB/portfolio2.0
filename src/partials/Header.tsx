'use client'
import React, { useState, useEffect } from 'react';
import Aside from '@/components/Aside';
import LanguageModal from '@/components/modals/LanguageModal';
import { BsGlobeAmericas } from 'react-icons/bs';

interface Language {
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

export default function Header() {
    const [isAsideModalOpen, setIsAsideModalOpen] = useState(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            setSelectedLanguage(savedLanguage);
        } else {
            setSelectedLanguage('pt');
        }
    }, []);

    const handleAsideButtonClick = () => {
        setIsAsideModalOpen(!isAsideModalOpen);
    };

    const toggleLanguageModal = () => {
        setIsLanguageModalOpen(!isLanguageModalOpen);
    };

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language.code);
        setIsLanguageModalOpen(false);
        localStorage.setItem('selectedLanguage', language.code);

        console.log(`Idioma selecionado: ${language.name}`);
    };

    const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

    return (
        <>
            {isAsideModalOpen && <Aside onClose={handleAsideButtonClick} />}
            {isLanguageModalOpen && (
                <LanguageModal
                    languages={languages}
                    isOpen={isLanguageModalOpen}
                    onClose={toggleLanguageModal}
                    onSelectLanguage={handleLanguageSelect}
                />
            )}
            <header className="bg-white text-text-light font-[600] flex justify-between items-center px-6 md-lg:px-12 py-4 sticky top-0 z-10">
                <h1 className='fadeInLeft'>
                    Liedson Barros
                </h1>

                <nav className="text-base list-none gap-8 hidden md-lg:flex">
                    <li className="py-1">
                        <a className="hover:text-blue" href="#aboutMe">Carreira</a>
                    </li>
                    <li className="py-1">
                        <a className="hover:text-blue" href="#myTecnologies">Tecnologias</a>
                    </li>
                    <li className="py-1">
                        <a className="hover:text-blue" href="#mySoftSkills">Habilidades</a>
                    </li>
                    <li className="py-1">
                        <a className="hover:text-blue" href="#myProjects">Projetos</a>
                    </li>
                    <li className="py-1">
                        <a className="hover:text-blue" href="#contateMe">Contatos</a>
                    </li>
                    <li className="relative py-1">
                        <button
                            onClick={toggleLanguageModal}
                            className="flex items-center gap-2 hover:text-blue"
                        >
                            {currentLanguage ? (
                                <img src={currentLanguage.url} alt="Idioma" className="w-6 h-6" />
                            ) : (
                                <BsGlobeAmericas />
                            )}
                            {currentLanguage ? currentLanguage.name : 'Idioma'}
                        </button>
                    </li>
                </nav>

                {/* Button menu mobile */}
                <button
                    onClick={handleAsideButtonClick}
                    className="block md-lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </button>
            </header>
        </>
    );
}
