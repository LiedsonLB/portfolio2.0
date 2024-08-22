import Image from "next/image";
import { useState } from "react";

interface AsideProps {
    onClose: () => void;
}

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
];

export default function Aside({ onClose }: AsideProps) {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>('pt'); // Idioma padrão

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language.code);
        setIsLanguageMenuOpen(false);
        console.log(`Idioma selecionado: ${language.name}`);
    };

    const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

    return (
        <div className="w-[100vw] flex fixed z-50 md-lg:hidden bottom-0">
            <div className="w-[100%] aside-background" onClick={onClose}></div>
            <div className="flex flex-col justify-between w-[50rem] bg-ice p-4 h-screen min-h-screen max-h-screen overflow-auto">
                <div className='flex flex-col h-full'>
                    <nav className="text-text-light list-none gap-8 font-[600] h-full px-2 flex flex-col">
                        <ul className="w-full flex flex-col flex-grow">
                            <li className="py-1 w-full">
                                <a className="block bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="#aboutMe" onClick={onClose}>Sobre mim</a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="block bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="#myTecnologies" onClick={onClose}>Tecnologias</a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="block bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="#mySoftSkills" onClick={onClose}>Habilidades</a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="block bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="#myProjects" onClick={onClose}>Projetos</a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="block bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="#contateMe" onClick={onClose}>Contatos</a>
                            </li>
                            <hr className="my-4" />
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="" onClick={onClose}>
                                    Biografia
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" width="15px" height="15px" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>
                                </a>
                            </li>
                            <li className="py-1 w-full">
                                <a className="flex items-center gap-4 bg-white hover:text-blue shadow-md py-4 rounded-full text-start pl-6 w-full" href="" onClick={onClose}>
                                    Currículos
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" width="15px" height="15px" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>
                                </a>
                            </li>
                        </ul>
                        <div className="mt-auto">
                            <li className="relative py-1 w-full">
                                <button
                                    onClick={toggleLanguageMenu}
                                    className="flex items-center gap-2 bg-white pl-6 hover:text-blue shadow-md py-4 rounded-full text-center w-full"
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
                                            <div className="grid grid-cols-1 md-lg:grid-cols-2 gap-4">
                                                {languages.map((language) => (
                                                    <div
                                                        key={language.code}
                                                        onClick={() => handleLanguageSelect(language)}
                                                        className="flex items-center p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
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
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
