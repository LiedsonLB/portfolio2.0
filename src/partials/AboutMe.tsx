import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="my-20 py-20 " id="aboutMe">
            <h1 className="big-text font-doppio font-[800] text-center mb-4 text-black" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Minha <span className="text-blue">carreira</span></h1>
            <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-black  mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                Leia um pouco sobre mim, e confira meus currículos, meus serviços, certificados, etc... em “Ler Tudo”
            </p>
            <div className="max-w-[95%] md-lg:max-w-[85%] m-auto py-8 px-6 md-lg:px-12 rounded-lg shadow-md bg-white text-text-light tracking-wide leading-relaxed">
                <div className="flex flex-col md-lg:flex-row gap-8">
                    <div className="md-lg:max-w-[60%]">
                        <Image
                            src='/img/profile1.png'
                            className="mx-auto my-4 rounded-full"
                            style={{ filter: 'saturate(1.4)' }}
                            height={90}
                            width={90}
                            alt='Liedson Barros Perfil'
                        />
                        <p className="text-blue text-xl text-center"><strong>Desenvolvedor Fullstack, Web e Frontend – Profissional e Freelancer</strong></p>
                        <br />
                        <p>
                            Sou especialista em desenvolvimento de aplicações confiáveis e funcionais há 5 anos.
                            Tenho experiência em diversas linguagens de programação e ferramentas, como React, Vue.js, Next.js,
                            Node.js, TypeScript, Python, Java, Django, Spring, PostgreSQL, MySQL, Redis, Firebase, entre outras.
                        </p>
                        <br />
                        <p>
                            Além disso, atuo como freelancer, oferecendo soluções personalizadas para sites, automações, dashboards de vendas, design, e muito mais.
                            <span className="text-black font-bold"> Estou comprometido em construir sua marca e empresa com o que há de melhor em tecnologia</span>.
                            Se você precisa de um desenvolvedor qualificado, estou à disposição para <a href="#contateMe" className="text-cyan-600 underline">conversar</a>.
                        </p>
                    </div>

                    <div className="text-text-light">
                        <p className="text-blue text-xl"><strong>Informações Pessoais</strong></p>
                        <br />
                        <p className="py-2 border-b-2 border-text-light">Idade: <span className="text-blue"> 21 anos</span></p>
                        <p className="py-2 border-b-2 border-text-light">Cidade: <span className="text-blue"> Piripiri</span></p>
                        <p className="py-2 border-b-2 border-text-light">Estado: <span className="text-blue"> Piauí</span></p>
                        <p className="py-2 border-b-2 border-text-light">Freelancer: <span className="text-blue"> Disponível</span></p>
                        <p className="py-2 border-b-2 border-text-light">Email: <span className="text-blue"> liedson.b9@gmail.com</span></p>
                        <p className="py-2 border-b-2 border-text-light">Telefone: <span className="text-blue"> (86) 998635571</span></p>
                        <p className="py-2 border-b-2 border-text-light">Valores: <span className="text-blue"> Colaboração, Aprendizado Contínuo, Excelência Profissional</span></p>
                        <p className="py-2 border-b-2 border-text-light">Idiomas: <span className="text-blue"> Português (Nativo), Inglês (Intermediário)</span></p>
                    </div>
                </div>
                <Link href="/profissional" className="flex items-center justify-center gap-2 px-5 py-3 rounded-full w-fit bg-blue text-white scaleIn mt-4 m-auto">
                    Ler Tudo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="15px" height="15px" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>
                </Link>
            </div>
        </div>
    )
}