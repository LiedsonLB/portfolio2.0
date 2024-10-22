import { Language } from "../Aside";

interface LanguageModalProps {
    languages: Language[];
    isOpen: boolean;
    onClose: () => void;
    onSelectLanguage: (language: Language) => void;
}

export default function LanguageModal({
    languages,
    isOpen,
    onSelectLanguage,
}: LanguageModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-6 rounded-lg h-screen md-lg:h-auto shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Escolha o Idioma</h2>
                <p className="text-red-700">(Traduções ainda sendo implementadas)</p>
                <div className="grid grid-cols-1 py-6 md-lg:grid-cols-2 gap-4">
                    {languages.map((language) => (
                        <div
                            key={language.code}
                            onClick={() => onSelectLanguage(language)}
                            className="flex items-center p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                        >
                            <img src={language.url} alt={language.name} className="w-12 h-12 mr-2" />
                            <span className="text-lg font-medium">{language.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}