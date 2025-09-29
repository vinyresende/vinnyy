import { FaWordpress } from "react-icons/fa"

import ProjectCard from "../all/projectcard"

interface Project {
    img: string,
    title: string
    description: string
    href: string
    icons: React.ReactElement[]
}

export default function Portfolio() {
    const projects: Project[] = [
        {
            img: "/gomesxavier.png",
            title: "GomesXavier - Advocacia",
            description: "LandingPage para site de assistência jurídica para pessoas autistas, de autoria do Escritório de Advocacia Gomes Xavier.",
            href: "https://www.gomesxavier.com/",
            icons: [<FaWordpress size={30}/>]
        }
    ]

    return (
        <section
            id="portfolio"
            className="bg-background-2 w-full flex justify-center
            shadow-background-2 shadow-[0_0_20px_15px] py-20"
        >
            <div className="w-full max-w-7xl flex flex-col items-center animate-fade-in-left gap-5 px-10">

                <div
                    className="w-full max-w-7xl px-5
                    max-lg:flex max-lg:justify-center max-lg:px-0"
                >
                    <h2
                        className="font-bold text-2xl text-highlight ml-20 mb-10
                        max-lg:mx-0"
                    >
                        Projetos
                    </h2>
                </div>

                <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-3">

                    {projects.length > 0 && projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                img={project.img}
                                title={project.title}
                                description={project.description}
                                href={project.href}
                                icons={project.icons}
                            />
                        )
                    })}

                </div>
            </div>
        </section>
    )
}