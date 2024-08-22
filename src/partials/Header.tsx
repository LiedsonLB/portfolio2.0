"use client";
import Aside from "@/components/Aside";
import { useState } from "react";

interface Language {
    code: string;
    name: string;
    url: string;
}

const languages: Language[] = [
    { code: 'pt', name: 'Português', url: '/img/languages/brasil.png' },
    { code: 'en', name: 'Inglês', url: '/img/languages/estados-unidos.png' },
    { code: 'es', name: 'Espanhol', url: '/img/languages/espanha.png' },
    { code: 'jp', name: 'Japonês', url: '/img/languages/japao.png' },
    // Adicione mais idiomas e bandeiras conforme necessário
];

export default function Header() {
    const [isAsideModalOpen, setIsAsideModalOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>('pt'); // Idioma padrão
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAsideButtonClick = () => {
        setIsAsideModalOpen(!isAsideModalOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language.code);
        setIsLanguageMenuOpen(false);
        // Aqui você pode adicionar a lógica para aplicar o idioma selecionado
        console.log(`Idioma selecionado: ${language.name}`);
    };

    const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

    const handleUserButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isAsideModalOpen && <Aside onClose={handleAsideButtonClick} />}
            <header className="bg-white text-gray font-[700] flex justify-between items-center px-6 md-lg:px-12 py-4 sticky top-0 z-10">
                <h1>
                    <span className="bg-blue text-white p-2">LB</span> Liedson
                </h1>

                <nav className="text-base list-none gap-8 hidden font-[600] md-lg:flex">
                    <li className="py-1">
                        <a className="hover:text-blue" href="#aboutMe">Sobre mim</a>
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
                            onClick={toggleLanguageMenu}
                            className="flex items-center gap-2 hover:text-blue"
                        >
                            {currentLanguage ? (
                                <img src={currentLanguage.url} alt="Idioma" className="w-6 h-6" />
                            ) : (
                                <img src="/img/languages/brasil.png" alt="Idioma" className="w-6 h-6" /> // Bandeira padrão
                            )}
                            {currentLanguage ? currentLanguage.name : 'Idioma'}
                        </button>
                        {isLanguageMenuOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                    <h2 className="text-xl font-bold mb-4">Escolha o Idioma</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {languages.map((language) => (
                                            <div
                                                key={language.code}
                                                onClick={() => handleLanguageSelect(language)}
                                                className="flex items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                                            >
                                                <img src={language.url} alt={language.name} className="w-12 h-12 mr-2" />
                                                <span className="text-lg font-medium">{language.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setIsLanguageMenuOpen(false)}
                                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        )}
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
