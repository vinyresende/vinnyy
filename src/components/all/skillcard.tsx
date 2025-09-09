interface Props {
    icon: React.ReactNode
    text: string
}

export default function SkillCard({ icon, text }: Props) {
    return (
        <div
            className="flex flex-col items-center justify-center [&>svg]:text-7xl gap-3"
        >
            {icon}

            <span>{text}</span>
        </div>
    )
}