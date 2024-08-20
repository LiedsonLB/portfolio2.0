import CardsTecnologies from "@/components/CardsTecnologies";

export default function MyStacks() {
    return (
        <div className="py-20" id="myTecnologies">
            <h1 className="big-text font-[800] text-center mb-4" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Minhas <span className="text-blue">tecnologias</span></h1>
            <p className="max-w-[400px] text-center md-lg:max-w-[75%] m-auto text-text-light  mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                Confira todas as tecnologias que domino e utilizo nos meus projetos
            </p>
            <CardsTecnologies />
        </div>
    )
}