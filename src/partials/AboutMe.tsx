export default function AboutMe() {
    return (
        <div className="my-20" id="aboutMe">
            <h1 className="big-text font-[800] text-center mb-4" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Sobre <span className="text-blue">mim</span></h1>
            <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-text-light  mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                Leia um pouco sobre mim, e confira meus currículos, meus serviços, certificados, etc... em “Ler Tudo”
            </p>
        </div>
    )
}