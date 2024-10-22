import type { NextApiRequest, NextApiResponse } from 'next';

interface Certificado {
    picture: string;
    title: string;
    instituicao: string;
    cargaHoraria: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Certificado[]>) {
    const certificados: Certificado[] = [
        {
            picture: '/img/logos/coursera_logo.jpg',
            title: 'Desenvolvimento Ágil com Java Avançado - ITA',
            instituicao: 'Coursera',
            cargaHoraria: '17H',
        },
        {
            picture: '/img/logos/ufpi_logo.jpg',
            title: 'CURSO DE EXTENSAO "PROGRAMAÇÃO COMPETITIVA"',
            instituicao: 'UFPI',
            cargaHoraria: '80H',
        },
        {
            picture: '/img/logos/pythonando_logo.jpg',
            title: 'PYSTACK WEEK 9.0: Python e Django',
            instituicao: 'Pythonando',
            cargaHoraria: '10H',
        },
        {
            picture: '/img/logos/fundacaoBradesco_logo.jpg',
            title: 'Modelagem de Dados',
            instituicao: 'Fundação Bradesco',
            cargaHoraria: '8H',
        },
        {
            picture: '/img/logos/onebitcode_logo.jpg',
            title: 'Projeto HTML, CSS, Javascript',
            instituicao: 'OneBitCode',
            cargaHoraria: 'Projeto',
        },
    ];
    res.status(200).json(certificados);
}