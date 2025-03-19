import TextArea from "../all/textarea"
import TextInput from "../all/textinput"
import EmailInput from "../all/emailinput"
import SubmitButton from "../all/submitbutton"

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex gap-5 max-lg:flex-col">
                <div className="flex flex-col">
                    <label className="text-[14px] ml-2 mb-1">Nome</label>
                    <TextInput
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[14px] ml-2 mb-1">Sobrenome</label>
                    <TextInput
                        placeholder="Digite seu sobrenome"
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-[14px] ml-2 mb-1">Email</label>
                <EmailInput
                    placeholder="Digite seu email"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-[14px] ml-2 mb-1">Mensagem</label>
                <TextArea
                    placeholder="Digite sua mensagem"
                />
            </div>

            <div className="mt-2">
                <SubmitButton>
                    Enviar
                </SubmitButton>
            </div>
        </form>
    )
}