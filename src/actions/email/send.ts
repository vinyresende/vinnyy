'use server'

import EmailTemplate from "@/components/email/emailtemplate"

import { Resend } from "resend"
import { EmailResponse, EmailData } from "./type"

const resend = new Resend(process.env.RESEND_KEY)

export async function sendEmail(prevState: EmailResponse, emailData: EmailData): Promise<EmailResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: `${emailData.name} ${emailData.surname} <${process.env.RESEND_EMAIL}>`,
            to: [`${process.env.CONTACT_EMAIL}`],
            subject: `Mensagem de ${emailData.email}`,
            react: EmailTemplate({
                name: emailData.name,
                surname: emailData.surname,
                email: emailData.email,
                message: emailData.message
            })
        })

        if (error) {
            return { ok: false, error }
        }

        return { ok: true, data }
    } catch (err) {
        console.log(err)
        return { ok: false, error: new Error("Houve um erro no servidor!") }
    }
}
