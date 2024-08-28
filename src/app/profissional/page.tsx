import Certificados from "@/components/Certificados";
import Curriculos from "@/components/curriculos";
import Servicos from "@/components/servicos";
import Link from "next/link";

export default function Profissional() {
    return (
        <div>
            <header className="bg-white text-gray font-[700] flex justify-between items-center flex-wrap px-6 md-lg:px-12 py-4 sticky top-0 z-10 w-screen h-auto">
                <Link href='/' className="flex items-center justify-center py-3 rounded-full w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#404040" width="2rem" height="2rem" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </Link>
                <h2 className="text-center m-auto w-fit">Carreira</h2>
            </header>
            <div id="#curriculos" className="py-20">
                <h1 className="big-text font-doppio font-[800] text-center mb-4 text-black" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>
                    Meus <span className="text-blue">Currículos</span>
                </h1>
                <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-black mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                    Explore os meus currículos e conheça mais sobre minhas experiências e habilidades.
                </p>
                <br />
                <Curriculos />
            </div>

            <div id="#servicos" className="py-20">
                <h1 className="big-text font-doppio font-[800] text-center mb-4 text-black" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>
                    Meus <span className="text-blue">Serviços</span>
                </h1>
                <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-black mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                    Descubra os serviços que ofereço e como posso ajudar a transformar suas ideias em realidade.
                </p>
                <br />
                <Servicos />
            </div>
            <div id="#certificados" className="py-20">
                <h1 className="big-text font-doppio font-[800] text-center mb-4 text-black" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Meus <span className="text-blue">Certificados</span></h1>
                <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-black  mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                    Confira algumas das minhas certificações.
                </p>
                <br />
                <Certificados />
            </div>
        </div>
    );
};