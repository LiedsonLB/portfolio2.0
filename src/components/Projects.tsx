import Image from "next/image";
import useSWR from 'swr';
import Loading from "./Loading";

interface Technology {
    src: string;
    name: string;
    color: string;
}

interface Project {
    picture: string;
    title: string;
    description: string;
    technologies: string[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Projects() {
    const { data: projects, error: projectsError } = useSWR<Project[]>('/api/projects', fetcher);
    const { data: technologies, error: technologiesError } = useSWR<Technology[]>('/api/technologies', fetcher);

    if (projectsError || technologiesError) return <div>Failed to load data</div>;
    if (!projects || !technologies) return <Loading />;

    return (
        <section className="flex flex-col-reverse p-4 items-center justify-center md-lg:flex-row max-w-[95%] ml-auto md-lg:max-w-[85%] md-lg:ml-auto">
            <div className="flex flex-row gap-6 w-full h-auto overflow-x-auto pb-6">
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col card relative w-[330px] min-w-[330px] h-[330px]" style={{ overflow: 'hidden' }}>
                        <div className="container-img" style={{ height: '90%', position: 'relative' }}>
                            <Image
                                src={project.picture}
                                style={{ minHeight: '100%', maxWidth: '100%' }}
                                layout="fill"
                                objectFit="cover"
                                alt={project.title}
                            />
                        </div>
                        <div className="font-montserrat overlay bg-white p-4 z-[2]">
                            <h2 className="text-xl text-blue font-bold">{project.title}</h2>
                            <p className="text-sm text-text-light h-[4.6ch] overflow-hidden" style={{ fontSize: 'clamp(14px, 3vw + 0.1rem, 16px)' }}>{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((techName) => {
                                    const tech = technologies.find(t => t.name === techName);
                                    return (
                                        tech && (
                                            <span
                                                key={tech.name}
                                                style={{ backgroundColor: tech.color }}
                                                className="px-2 py-1 rounded-full text-white font-[500] opacity-90"
                                            >
                                                <p className="font-poppins">{tech.name}</p>
                                            </span>
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
