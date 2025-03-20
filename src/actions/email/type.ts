import { CreateEmailResponseSuccess } from "resend"

export interface EmailResponse {
    ok: boolean,
    data?: CreateEmailResponseSuccess | null,
    error?: Error | null
}

export interface EmailData {
    name: string,
    surname: string,
    email: string,
    message: string
}
