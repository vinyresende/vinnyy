'use client'

import { useEffect } from "react"
import TagCloud, { TagCloudOptions } from "TagCloud"

export default function TextSphere() {
    const container: string = ".text-sphere"
    const texts: string[] = [
        "html",
        "CSS",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Express",
        "Electron",
        "React",
        "Next.js",
        "Python",
        "Selenium",
        "Git",
        "Github",
        "MySQL",
        "Sequelize",
        "WordPress"
    ]

    const options: TagCloudOptions = {
        radius: 200,
        initSpeed: "normal",
        maxSpeed: "normal",
        keep: true
    }

    useEffect(() => {
        TagCloud(container, texts, options)
    }, [])

    return (
        <>
            <div className="text-sphere text-[12px] text-highlight">
            </div>
        </>
    )
}