"use client"
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

export default function MyProjects() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/projects');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="py-20" id="myProjects">
            <h1 className="big-text font-[800] text-center mb-4" style={{ fontSize: 'clamp(30px, 5vw + 0.2rem, 50px)' }}>Meus <span className="text-blue">projetos</span></h1>
            <p className="max-w-[85%] text-center md-lg:max-w-[75%] m-auto text-text-light" style={{ fontSize: 'clamp(16px, 3vw + 0.1rem, 20px)' }}>
                Veja algus repositórios de meus projetos. Para mais informações leia os README.md.
            </p>
            <Projects />
        </div>
    )
}