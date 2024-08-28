import Image from "next/image";
import profile from '/public/img/perfil.jpg'
import Link from "next/link";

export default function Apresentation() {
    return (
        <section className="flex flex-col-reverse p-4 items-center justify-center md-lg:flex-row md-lg:max-w-[85%] md-lg:mx-auto h-[calc(92vh-140px)] sm-lg:h-[calc(100vh-140px)]">
            <div className="h-auto w-[100%] px-2 md-lg:px-8 gap-2 text-center md-lg:text-start flex flex-col text-black justify-center items-center md-lg:items-start">
                <h1 className="font-doppio font-[800] fadeInLeft" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>
                    Olá, Sou <span className="text-blue">Liedson</span>
                </h1>
                <h2 className="italic fadeInLeft" style={{ fontSize: 'clamp(12px, 4vw + 0.2rem, 35px)' }}>Desenvolvedor Fullstack</h2>
                <p className="max-w-[500px] md-lg:max-w-[600px] text-text-light mb-2 fadeInAndUp" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>Há 5 anos, Desenvolvendo
                    aplicações incríveis, sempre
                    focado em oferecer soluções de alta qualidade para meus
                    clientes...
                </p>
                <Link href="/biografia" className="flex items-center justify-center gap-2 px-5 py-3 rounded-full w-fit bg-blue text-white scaleIn">
                    Biografia
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="15px" height="15px" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>
                </Link>
            </div>
            <div className="h-auto w-[10rem] md-lg:w-[40%] flex items-center justify-center mb-8 md-lg:mb-0 scaleIn">
                <div className="w-60 md-lg:w-80 h-auto">
                    <Image
                        className="rounded-full"
                        style={{ filter: 'brightness(1.2)' }}
                        src={profile}
                        alt=""
                    />
                </div>
            </div>

            <div>

            </div>
        </section>
    )
}