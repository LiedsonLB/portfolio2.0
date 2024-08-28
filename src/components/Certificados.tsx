'use client'
import Image from 'next/image';
import useSWR from 'swr';
import Loading from './Loading';

interface Certificado {
    picture: string;
    title: string;
    instituicao: string;
    cargaHoraria: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Certificados() {
    const { data: certificados, error } = useSWR<Certificado[]>('/api/certificados', fetcher);

    if (error) return <div>Falha ao carregar os dados</div>;
    if (!certificados) return <Loading />;

    return (
        <div className="flex flex-wrap gap-4 mx-auto mb-12 w-[85%]">
            {certificados.map((certificado, index) => (
                <div
                    key={index}
                    className="shadow-md bg-white rounded-xl flex gap-4 min-w-[45%] p-4 relative w-full"
                >
                    <Image
                        src={certificado.picture}
                        alt={certificado.title}
                        width={100}
                        height={100}
                        className="rounded-lg max-h-[100px] m-auto"
                    />
                    <div className="flex flex-col justify-center gap-4 w-full">
                        <h4 className="text-lg font-semibold text-black">{certificado.title}</h4>
                        <p className="text-md text-text-light">{certificado.instituicao}</p>
                    </div>
                    <div className="bg-blue text-white p-1.5 absolute bottom-4 right-0">
                        {certificado.cargaHoraria}
                    </div>
                </div>
            ))}
        </div>
    );
}
