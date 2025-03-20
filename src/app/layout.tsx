import type { Metadata } from "next"
import "./globals.css"

import Header from "@/components/header/header"

export const metadata: Metadata = {
	title: "Dev Full-Stack | Vinnyy",
	description: "Portifólio",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`bg-background bg-[url(/noise.svg)] bg-noise
				max-w-screen min-h-screenflex flex-col overflow-x-hidden
				text-white leading-6 font-inknut-antiqua antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
