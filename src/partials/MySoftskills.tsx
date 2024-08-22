import SocialSkillsSection from "@/components/SocialSkillsSection";

export default function MySoftSkills() {
    return (
        <div className="py-20" id="mySoftSkills">
            <h1 className="big-text font-[800] text-center mb-4" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Habilidades <span className="text-blue">sociais</span></h1>
            <p className="max-w-[85%] text-center md-lg:max-w-[75%] m-auto text-text-light  mb-4" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                Confira algumas das habilidades interpessoais que mais utilizo e considero importantes em um ambiente de trabalho
            </p>
            <SocialSkillsSection />
        </div>
    )
}