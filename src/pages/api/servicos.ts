// pages/api/servicos.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { FaLaptopCode, FaComments, FaTachometerAlt, FaCog, FaCloud, FaProjectDiagram, FaRobot } from 'react-icons/fa';

interface Service {
    title: string;
    description: string;
    icon: string;
}

const services: Service[] = [
    {
        title: 'Desenvolvimento Web',
        description: 'Criação de sites e aplicativos web modernos e responsivos.',
        icon: 'FaLaptopCode',
    },
    {
        title: 'Consultoria de TI',
        description: 'Orientação estratégica para melhorar sua infraestrutura de TI.',
        icon: 'FaComments',
    },
    {
        title: 'Otimização de Desempenho',
        description: 'Aprimoramento da performance de aplicações web.',
        icon: 'FaTachometerAlt',
    },
    {
        title: 'Automatização de Processos',
        description: 'Automação de tarefas e processos para aumentar a eficiência.',
        icon: 'FaCog',
    },
    {
        title: 'Integração com Nuvem',
        description: 'Soluções para integração e gerenciamento de serviços na nuvem.',
        icon: 'FaCloud',
    },
    {
        title: 'Gerenciamento de Projetos',
        description: 'Planejamento e execução de projetos para garantir resultados bem-sucedidos.',
        icon: 'FaProjectDiagram',
    },
    {
        title: 'Automação Inteligente',
        description: 'Soluções baseadas em IA para otimização e automação de processos.',
        icon: 'FaRobot',
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Service[]>) {
    res.status(200).json(services);
}