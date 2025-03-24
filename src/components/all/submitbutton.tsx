interface Props {
    children?: React.ReactNode,
    [rest: string]: any
}

export default function SubmitButton({ children }: Props) {
    return (
        <button
            className="bg-transparent transition-all duration-[150ms] cursor-pointer
            border hover:border-highlight rounded-md shadow-highlight
            hover:bg-highlight hover:text-white hover:shadow-neon
            text-[14px] px-8 py-3"
        >
            {children}
        </button>
    )
}