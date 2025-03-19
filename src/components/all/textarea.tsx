interface props {
    placeholder?: string
}

export default function TextArea({ placeholder }: props) {
    return (
        <textarea
            className="min-h-32 bg-transparent border rounded-md text-[14px] shadow-highlight
            hover:shadow-neon focus:shadow-neon hover:border-highlight focus:border-highlight
            hover:bg-highlight focus:bg-highlight transition-all duration-[150ms] px-4 py-5"
            placeholder={placeholder ?? ""}
        />
    )
}