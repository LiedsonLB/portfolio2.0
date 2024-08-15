// -/api/technologies
import type { NextApiRequest, NextApiResponse } from 'next';

type Technology = {
    src: string;
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Technology[]>
) {
    const technologies: Technology[] = [
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', name: 'C++' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', name: 'C#' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue.js' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', name: 'Sass' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', name: 'Webpack' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg', name: 'Babel' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', name: 'Redis' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', name: 'GitLab' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', name: 'Trello' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', name: 'Jira' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg', name: 'Heroku' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VSCode' },
    ];

    res.status(200).json(technologies);
}
