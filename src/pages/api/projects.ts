import type { NextApiRequest, NextApiResponse } from "next";

interface Project {
  picture: string;
  title: string;
  description: string;
  github: string;
  technologies: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  const projects: Project[] = [
    {
      picture: "/img/projects/neoboard.png",
      title: "Neoboard",
      description: "Repositório do código-fonte e os artefatos do projeto que atuei como Scrum Master. Desenvolvemos um Dashboard Empresarial Multitecnologia, incorporando diversas tecnologias para oferecer uma visão consolidada e interativa de dados cruciais.",
      github: 'https://github.com/LiedsonLB/neoboard',
      technologies: [
        'HTML5', 'CSS3', 'TypeScript', 'React', 'Axios', 'Prisma', 'PostgreSQL', 'Express', 'FastAPI', 'Figma', 'Firebase', 'Bootstrap', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/zssn.png",
      title: "Zssn",
      description: "Um teste de codificação para uma vaga Fullstack usando Django e Vue para criar uma aplicação que atendesse o desafio de criar um site de sobrevivência para um apocalipse zumbi.",
      github: 'https://github.com/LiedsonLB/desafio-infoG2',
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Python', 'Django', 'PostgreSQL'
      ],
    },
    {
      picture: "/img/projects/kimipet.png",
      title: "Kimipet",
      description: "Um teste de codificação para uma vaga Frontend usando Next e Tailwind, Kimipet é uma plataforma revolucionária que busca empoderar os donos de pets, oferecendo um local seguro e conveniente para armazenar e acessar dados importantes de seus animais de estimação. Acreditamos que cada pet merece cuidados da mais alta qualidade, e cada proprietário de pet merece acesso transparente e fácil às informações essenciais sobre seus companheiros peludos.",
      github: 'https://github.com/LiedsonLB/kimipet',
      technologies: [
        'HTML5', 'CSS3', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma', 'Jest', 'Vercel', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/luxuriousBreeze.png",
      title: "LuxuriousBreeze",
      description: "Um site de hospedagem para divulgação e compra de imóveis em Vue.js com diversos recursos.",
      github: 'https://github.com/LiedsonLB/LuxuriousBreeze',
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Bootstrap', 'Figma', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/dreamOfSchool.png",
      title: "Dream Of School",
      description: "repositório da interface de site para o jogo Dream of School, um emocionante jogo Otome. Esta interface foi desenvolvida utilizando HTML e CSS, e foi prototipada no Figma ",
      github: 'https://github.com/LiedsonLB/Dream-of-School-interface',
      technologies: [
        'HTML5', 'CSS3', 'Figma', 'Bootstrap', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/neofranxx.png",
      title: "Neofranxx",
      description: "Um projeto React.js para gestão empresarial com funcionalidades de gerenciamento de funcionários, registro financeiro e notificações por email. Interface intuitiva, design limpo e ênfase em testes rigorosos e segurança. Atualizações regulares garantem melhorias contínuas.",
      github: 'https://github.com/LiedsonLB/neofranxx',
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Firebase', 'Node.js', 'Figma', 'Bootstrap', 'GitHub', 'VSCode', 'Git'
      ],
    },
    {
      picture: "/img/projects/blackjack.png",
      title: "Blackjack",
      description: "Jogo de Blackjack em Java, com interface gráfica JavaFX. Jogo interativa, com histórico em CSV, o código adota boas práticas de programação e inclui tratamento robusto de exceções.",
      github: 'https://github.com/LiedsonLB/BlackjackGUI',
      technologies: [
        'Java', 'GitHub', 'VSCode', 'Git'
      ],
    },
  ];

  res.status(200).json(projects);
}
