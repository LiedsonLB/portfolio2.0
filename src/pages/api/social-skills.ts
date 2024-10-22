import { NextApiRequest, NextApiResponse } from 'next';

interface SocialSkill {
    icon: string;
    name: string;
    color: string;
}

const socialSkills: SocialSkill[] = [
    { icon: 'FaPeopleArrows', name: 'Colaboração', color: '#4CAF50' },
    { icon: 'FaComments', name: 'Comunicação', color: '#2196F3' },
    { icon: 'FaHandsHelping', name: 'Empatia', color: '#FF5722' },
    { icon: 'FaShieldAlt', name: 'Resiliência', color: '#FFC107' },
    { icon: 'FaFlagCheckered', name: 'Liderança', color: '#9C27B0' },
    { icon: 'FaHandshake', name: 'Negociação', color: '#FF9800' },
    { icon: 'FaBrain', name: 'Pensamento Crítico', color: '#009688' },
    { icon: 'FaLightbulb', name: 'Criatividade', color: '#E91E63' },
    { icon: 'FaUserFriends', name: 'Trabalho em Equipe', color: '#3F51B5' },
    { icon: 'FaSmile', name: 'Inteligência Emocional', color: '#FFEB3B' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(socialSkills);
}
