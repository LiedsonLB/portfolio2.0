import type { NextApiRequest, NextApiResponse } from 'next';

type Technology = {
    src: string;
    name: string;
    color: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Technology[]>
) {
    const technologies: Technology[] = [
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5', color: '#E44D26' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3', color: '#1572B6' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', color: '#F7DF1E' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', color: '#007ACC' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', color: '#61DAFB' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue.js', color: '#4FC08D' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js', color: '#000000' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', color: '#339933' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python', color: '#3776AB' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', color: '#007396' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', name: 'Django', color: '#092E20' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', name: 'Spring', color: '#6DB33F' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', name: 'C++', color: '#00599C' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', name: 'C#', color: '#239120' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular', color: '#DD0031' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', name: 'Sass', color: '#CC6699' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', name: 'Webpack', color: '#8DD6F9' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg', name: 'Babel', color: '#F9DC3E' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express', color: '#000000' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', name: 'FastAPI', color: '#009688' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB', color: '#47A248' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase', color: '#FFCA28' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap', color: '#563D7C' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS', color: '#38B2AC' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL', color: '#4479A1' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL', color: '#336791' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', name: 'Redis', color: '#DC382D' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker', color: '#2496ED' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', color: '#F05032' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub', color: '#181717' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', name: 'GitLab', color: '#FC6D26' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', name: 'Jest', color: '#C21325' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma', color: '#F24E1E' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', name: 'Trello', color: '#0079BF' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', name: 'Vercel', color: '#430098' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VSCode', color: '#007ACC' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain-wordmark.svg', name: 'Axios', color: '#5A29E3' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', name: 'Prisma', color: '#2D3748' },
    ];

    res.status(200).json(technologies);
}