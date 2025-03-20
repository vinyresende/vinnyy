'use client'

import { useRef, useImperativeHandle } from "react"

export interface InputHandler {
    getValue: () => string
}

interface InputProps {
    placeholder?: string,
    ref?: React.Ref<InputHandler>,
    [rest: string]: any
}

export default function EmailInput({ ref, placeholder, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => {
        return {
            getValue() { return inputRef.current?.value ?? "" }
        }
    })

    return (
        <input
            type="email"
            ref={inputRef}
            className="bg-transparent border rounded-md text-[14px] shadow-highlight
            hover:shadow-neon focus:shadow-neon hover:border-highlight focus:border-highlight
            hover:bg-highlight focus:bg-highlight transition-all duration-[150ms] px-4 py-2"
            placeholder={placeholder ?? ""}
            {...rest}
        />
    )
}