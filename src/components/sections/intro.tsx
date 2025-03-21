import Link from "next/link"
import TextSphere from "@/components/all/textsphere"
import GenericButton from "@/components/all/genericbutton"

import { BiLogoDiscord } from "react-icons/bi"

import {
	TiSocialLinkedinCircular,
	TiSocialGithubCircular
} from "react-icons/ti"

export default function Intro() {
    return (
        <section
            className="max-w-7xl min-h-screen grid grid-cols-2
            items-center justify-center max-md:py-50 px-10
            max-md:grid-cols-1 max-md:gap-20"
        >

            <div
                className="flex flex-col gap-3 pl-5
                max-md:pl-0"
            >

                <h1 className="font-bold text-[28px] gap-2">
                    <span className="leading-10">Vinícius Resende</span><br />
                    <span className="text-highlight text-[24px]">Full-Stack Developer</span>
                </h1>

                <p className="text-justify">Com 3 anos de experiência em desenvolvimento, dedico-me a criar aplicações impactantes e reativas, atuando tanto no <span className="text-highlight">back-end</span> quanto no <span className="text-highlight">front-end</span>. Minha paixão está em transformar ideias em realidade, especialmente com o poder do <span className="text-highlight">Next.js</span>, garantindo experiências dinâmicas e de alto desempenho.</p>

                <div
                    className="h-10 flex items-center text-highlight
					text-4xl [&>svg]:cursor-pointer gap-2 mt-3"
                >
                    <Link href="#contato">
                        <GenericButton>
                            <span>Contato</span>
                        </GenericButton>
                    </Link>

                    <Link href="https://github.com/vinyresende" target="_blank">
                        <TiSocialGithubCircular />
                    </Link>

                    <Link href="https://www.linkedin.com/in/viny-resende" target="_blank">
                        <TiSocialLinkedinCircular />
                    </Link>

                    <Link href="#contact">
                        <BiLogoDiscord />
                    </Link>
                </div>

            </div>

            <div
                className="flex items-center justify-end pr-5
                max-md:justify-center max-md:pr-0"
            >
                <TextSphere />
            </div>

        </section>
    )
}