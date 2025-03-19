import Link from "next/link"

export default function Header() {
    return (
        <header className="w-screen absolute flex justify-center top-0 left-0 right-0">
            <div
                className="w-full max-w-7xl h-20 min-h-20
                flex items-center justify-between text-white px-8"
            >
                <div>
                    <span>vinnyy</span>
                </div>
                <div>
                    <nav>
                        <ul
                            className="flex gap-4 [&>li]:transition-all [&>*]:text-[14px]
                            [&>li:hover]:text-highlight [&>li]:cursor-pointer"
                        >
                            <li><Link href="#intro">Intro</Link></li>
                            <li><Link href="#skills">Minhas skills</Link></li>
                            <li><Link href="#contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}