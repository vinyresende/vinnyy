import {
    Tailwind,
    Html,
    Container,
    Section,
    Heading,
    Text
} from "@react-email/components"

interface Props {
    name: string,
    surname: string,
    email: string,
    message: string
}

export default function EmailTemplate({
    name, surname, email, message
}: Props) {
    return (
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: {
                            "highlight": "#6C3BAA"
                        }
                    }
                }
            }}
        >
            <Html>
                <Container className="mx-auto my-0">
                    <Section className="bg-highlight rounded-t-lg p-10">
                        <Heading 
                            as="h1"
                            className="text-3xl text-white"
                        >
                            Contato de {name} {surname}
                        </Heading>
                    </Section>

                    <Section
                        className="bg-gray-200 rounded-b-lg p-10"
                    >
                        <Text className="text-2xl mb-8">{email}</Text>
                        <Text className="text-[16px] text-black">{message}</Text>
                    </Section>
                </Container>
            </Html>
        </Tailwind>
    )
}