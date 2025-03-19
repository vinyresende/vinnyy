interface props {
    children?: React.ReactNode
}

export default function GenericButton({ children }: props) {
    return (
        <button
            className="bg-transparent transition-all duration-500 cursor-pointer
            border border-highlight rounded-full shadow-highlight
            hover:bg-highlight hover:text-white hover:shadow-[0_0_8px_3px]
            text-[16px] px-10 py-3"
        >
            {children}
        </button>
    )
}