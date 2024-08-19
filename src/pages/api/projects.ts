import type { NextApiRequest, NextApiResponse } from "next";

interface Project {
  picture: string;
  title: string;
  description: string;
  technologies: string[]; // Array of technology names
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  const projects: Project[] = [
    {
      picture: "/img/projects/kimipet.png",
      title: "Kimipet",
      description: "Cuidando com amor, celebrando a felicidade dos pets.",
      technologies: [
        'HTML5', 'CSS3', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma', 'Jest', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/luxuriousBreeze.png",
      title: "LuxuriousBreeze",
      description: "Um site de hospedagem para divulgação e compra de imóveis em Vue.js com diversos recursos.",
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js', 'MongoDB', 'Express', 'FastAPI', 'Figma', 'Firebase', 'Bootstrap', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/dreamOfSchool.png",
      title: "Dream Of School",
      description: "repositório da interface de site para o jogo Dream of School, um emocionante jogo Otome. Esta interface foi desenvolvida utilizando HTML e CSS, e foi prototipada no Figma ",
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js', 'MongoDB', 'Express', 'FastAPI', 'Figma', 'Firebase', 'Bootstrap', 'GitHub', 'VSCode', 'Git'
      ],
    },
  ];

  res.status(200).json(projects);
}
