import Link from "next/link"

interface Props {
    img: string,
    title: string
    description: string
    href: string
    icons: React.ReactElement[]
}

export default function ProjectCard({ img, title, description, href, icons }: Props) {
    return (
        <div className="relative bg-background border border-gray-500 max-lg:max-w-xl rounded-lg">
            <img
                className="rounded-t-lg"
                alt={`${title}-img`}
                src={img}
            />

            <div className="flex flex-col gap-5 p-3">
                <div className="absolute top-0 right-0 flex items-center gap-3 p-3">
                    {icons.map((icon, index) => {
                        return (
                            <div key={index}>
                                {icon}
                            </div>
                        )
                    })}
                </div>

                <h3 className="font-bold text-lg">{title}</h3>

                <p className="text-gray-400 text-sm">{description}</p>

                <div className="flex">
                    <Link
                        href={href}
                        target="_blank"
                        className="transition-all duration-[150ms] cursor-pointer
                        border border-highlight rounded-md shadow-highlight
                        bg-highlight hover:text-white hover:shadow-neon
                        text-[14px] flex items-center justify-center px-8 py-3"
                    >
                        Ver Projeto
                    </Link>
                </div>
            </div>
        </div>
    )
}