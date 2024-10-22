import Image from "next/image";
import profile from '/public/img/lb1.jpeg';
import Link from "next/link";

export default function BioPage() {
    return (
        <>
            <header className="bg-white text-gray font-[700] flex justify-between items-center flex-wrap px-6 md-lg:px-12 py-4 sticky top-0 z-10 w-screen h-auto">
                <Link href="/" className="flex items-center justify-center py-3 rounded-full w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#404040" width="2rem" height="2rem" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </Link>
                <h2 className="text-center m-auto w-fit">Biografia</h2>
            </header>
            <div>
                <section className="flex flex-col p-4 items-center justify-center md-lg:flex-row md-lg:max-w-[90%] h-auto md-lg:mx-auto md-lg:h-[calc(80vh)]">
                    <div className="w-[12rem] h-[16rem] md-lg:h-full md-lg:w-auto flex items-center justify-center mb-8 md-lg:mb-0 scaleIn">
                        <div className="relative w-full h-full md-lg:w-96">
                            <Image
                                className="rounded-md"
                                src={profile}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="h-full w-auto px-2 md-lg:px-8 gap-6 md-lg:gap-0 md-lg:text-start flex flex-col text-black justify-around items-center md-lg:items-start text-start max-w-[95%] md-lg:max-w-[60%] overflow-y-auto">
                        <h1 className="font-doppio font-[800] fadeInLeft" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 36px)' }}>
                            <p className="text-black border-l-8 border-blue pl-4">Conheça Sobre mim</p>
                        </h1>
                        <p className="max-w-[500px] md-lg:max-w-[650px] text-text-light mb-2 fadeInAndUp max-h-full" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 17px)' }}>
                            Olá! Meu nome é Francisco Liédson Bonfim Barros. Atualmente estou cursando o
                            <span className="text-blue font-semibold"> 5º período de Ciência da Computação</span> na Universidade Estadual do Piauí (UESPI).
                            Sou apaixonado por tecnologia e aprender algo diferente todos os dias, explicando assim o motivo de conhecer tantas stacks. Nos meus momentos livres, gosto de jogar,
                            ouvir música, e assistir a filmes, animes, e séries.
                            <br />
                            <br />
                            Acredito que a vida é sobre ter um propósito e dar significado à nossa presença, e é por isso que escolhi a área da tecnologia.
                            Gosto de usar minha criatividade e conhecimento para solucionar problemas e fazer a diferença. Sou alguém que sempre busca ser
                            uma referência positiva, compartilhando o que sei e aprendendo com os outros, e acredito que um reconhecimento muda o dia de
                            qualquer pessoa.
                            <br />
                            <br />
                            Se você quiser bater um papo sobre vida, filmes, viagens, ou qualquer coisa que desperte curiosidade, estarei por aqui!
                        </p>

                    </div>
                </section>
            </div>
        </>
    );
}
