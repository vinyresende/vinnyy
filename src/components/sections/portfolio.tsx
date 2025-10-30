'use client'

import { motion } from "framer-motion"

import { FaWordpress } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"

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
            icons: [<FaWordpress size={30} />]
        },
        {
            img: "/TransportLink.png",
            title: "TransportLink",
            description: "WebApp pessoal criado para facilitar meu trabalho na Secretaria Municipal de Educação, ajudando no cadastro e gerenciamento de rotas e usuários do transporte escolar.",
            href: "https://github.com/vinyresende/TransportLink",
            icons: [<SiNextdotjs size={30} />]
        }
    ]

    return (
        <section
            id="portfolio"
            className="bg-background-2 w-full flex justify-center py-20"
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut" }}
                className="w-full max-w-7xl flex flex-col items-center gap-5 px-10"
            >

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

                <div
                    className="grid grid-cols-3 max-lg:grid-cols-1 gap-3"
                >

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
            </motion.div>
        </section>
    )
}