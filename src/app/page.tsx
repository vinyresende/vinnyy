import Intro from "@/components/sections/intro"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Portfolio from "@/components/sections/portfolio"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center max-md:max-w-screen">
			<Intro />
			<div className="w-full flex flex-col shadow-background-2 shadow-[0_0_20px_15px]">
				<Skills />
				<Portfolio />
			</div>
			<Contact />
		</main>
	)
}
