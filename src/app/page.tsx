import Intro from "@/components/sections/intro"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Portfolio from "@/components/sections/portfolio"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center max-md:max-w-screen">
			<Intro />
			<Skills />
			<Portfolio />
			<Contact />
		</main>
	)
}
