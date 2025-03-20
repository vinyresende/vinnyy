'use client'

import TextArea from "../all/textarea"
import TextInput from "../all/textinput"
import EmailInput from "../all/emailinput"
import SubmitButton from "../all/submitbutton"

import { sendEmail } from "@/actions/email/send"
import { InputHandler } from "../all/emailinput"
import { EmailData } from "@/actions/email/type"
import { useRef, useActionState, startTransition } from "react"

export default function ContactForm() {
    const [state, action, isPending] = useActionState(sendEmail, { ok: false })

    const nameInput = useRef<InputHandler>(null)
    const surnameInput = useRef<InputHandler>(null)
    const emailInput = useRef<InputHandler>(null)
    const messageInput = useRef<InputHandler>(null)

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (isPending) return

        const name: string = nameInput.current?.getValue().trim() || ""
        const surname: string = surnameInput.current?.getValue().trim() || ""
        const email: string = emailInput.current?.getValue().trim() || ""
        const message: string = messageInput.current?.getValue().trim() || ""

        const data: EmailData = { name, surname, email, message }

        const valid: boolean = (() => {
            return Object.values(data).every(v => v.length > 0)
        })()

        if (valid) {
            startTransition(() => action(data))
        }
    }

    return (
        <>
            {!state.error && !state.ok && (
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex gap-5 max-lg:flex-col">
                        <div className="flex flex-col">
                            <label className="text-[14px] ml-2 mb-1">Nome</label>
                            <TextInput
                                ref={nameInput}
                                placeholder="Digite seu nome"
                                disabled={isPending}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[14px] ml-2 mb-1">Sobrenome</label>
                            <TextInput
                                ref={surnameInput}
                                placeholder="Digite seu sobrenome"
                                disabled={isPending}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] ml-2 mb-1">Email</label>
                        <EmailInput
                            ref={emailInput}
                            placeholder="Digite seu email"
                            disabled={isPending}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] ml-2 mb-1">Mensagem</label>
                        <TextArea
                            ref={messageInput}
                            placeholder="Digite sua mensagem"
                            disabled={isPending}
                            required
                        />
                    </div>

                    <div className="mt-2">
                        <SubmitButton
                            disabled={isPending}
                        >
                            Enviar
                        </SubmitButton>
                    </div>
                </form>
            )}

            {state.error && (
                <div className="border-red-500 border rounded-lg px-10 py-4">
                    <span>
                        Houve um erro ao enviar sua mensagem :(<br />
                    </span>
                </div>
            )}

            {!isPending && state.ok && (
                <div className="border-highlight border rounded-lg px-10 py-4">
                    <span>
                        Sua mensagem foi enviada!<br />Obrigado por entrar em contato {"<3"}
                    </span>
                </div>
            )}
        </>
    )
}