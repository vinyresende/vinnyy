import Link from "next/link"
import ContactForm from "../forms/contact"

import {
    SiGithub,
    SiDiscord,
    SiLinkedin
} from "react-icons/si"

import { MdEmail } from "react-icons/md"

export default function Contact() {
    return (
        <section id="contact" className="bg-[url(/noise.svg)] w-full flex justify-center py-20 max-md:max-w-screen">
            <div className="w-full max-w-7xl flex flex-col items-center animate-fade-in-right px-10 max-lg:px-0">

                <div
                    className="w-full max-w-7xl px-5
                    max-lg:flex max-lg:justify-center max-lg:px-0"
                >
                    <h2
                        className="font-bold text-2xl text-highlight ml-20 mb-10
                        max-lg:mx-0"
                    >
                        Contato
                    </h2>
                </div>

                <div
                    className="grid grid-cols-3 gap-3 px-10
                    max-lg:grid-cols-1 max-md:gap-10 max-lg:px-0"
                >

                    <div className="max-md:flex max-md:justify-center">
                        <ul
                            className="[&>li>svg]:text-4xl [&>li]:flex
                            [&>li]:items-center [&>li]:gap-2 [&>li]:mb-3
                            max-md:flex max-md:flex-col max-md:justify-center"
                        >
                            <li>
                                <MdEmail />
                                <Link href="mailto:viniciusvresendeo@gmail.com" target="_blank">
                                    <span>viniciusvresendeo<wbr />@gmail.com</span>
                                </Link>
                            </li>

                            <li>
                                <SiLinkedin />
                                <Link href="https://www.linkedin.com/in/viny-resende" target="_blank">
                                    <span>Vinícius Resende</span>
                                </Link>
                            </li>

                            <li>
                                <SiGithub />
                                <Link href="https://github.com/vinyresende" target="_blank">
                                    <span>Vinnyy Resende</span>
                                </Link>
                            </li>

                            <li>
                                <SiDiscord />
                                <span>vinnyyz</span>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="flex flex-col items-center col-span-2
                        max-md:grid-cols-1"
                    >
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    )
}
