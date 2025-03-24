interface Props {
    icon: React.ReactNode
    text: string
}

export default function Card({ icon, text }: Props) {
    return (
        <div
            className="bg-background flex flex-col items-center transition-all duration-200
            hover:shadow-neon shadow-highlight border-highlight border 
            rounded-lg cursor-pointer [&>svg]:text-7xl p-10 gap-5"
        >
            {icon}

            <span>{text}</span>
        </div>
    )
}