import Card from "../all/card"

import { IoLogoWordpress } from "react-icons/io"
import { BiLogoTypescript } from "react-icons/bi"
import {
    DiJavascript,
    DiNodejsSmall,
    DiReact,
    DiHtml5,
    DiCss3,
    DiPython,
    DiMysql
} from "react-icons/di"
import {
    SiNextdotjs,
    SiElectron,
    SiExpress,
    SiQt,
    SiSelenium,
    SiSequelize
} from "react-icons/si"

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-background-2 w-full flex justify-center
            shadow-background-2 shadow-[0_0_20px_15px] py-20"
        >
            <div className="w-full max-w-7xl flex flex-col items-center gap-5 px-10">

                <div 
                    className="w-full max-w-7xl px-5
                    max-lg:flex max-lg:justify-center max-lg:px-0"
                >
                    <h2
                        className="font-bold text-2xl text-highlight ml-20 mb-10
                        max-lg:mx-0"
                    >
                        Skills principais
                    </h2>
                </div>

                <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-3">

                    <Card
                        icon={(<IoLogoWordpress />)}
                        text="WordPress"
                    />
                    <Card
                        icon={(<DiJavascript />)}
                        text="JavaScript"
                    />
                    <Card
                        icon={(<DiHtml5 />)}
                        text="HTML5"
                    />
                    <Card
                        icon={(<DiCss3 />)}
                        text="CSS3"
                    />
                    <Card
                        icon={(<DiNodejsSmall />)}
                        text="Node.js"
                    />
                    <Card
                        icon={(<DiReact />)}
                        text="React"
                    />
                    <Card
                        icon={(<SiNextdotjs />)}
                        text="Next.js"
                    />
                    <Card
                        icon={(<SiElectron />)}
                        text="Electron"
                    />
                    <Card
                        icon={(<SiExpress />)}
                        text="Express"
                    />
                    <Card
                        icon={(<BiLogoTypescript />)}
                        text="TypeScript"
                    />
                    <Card
                        icon={(<DiPython />)}
                        text="Python3"
                    />
                    <Card
                        icon={(<SiQt />)}
                        text="PyQt5"
                    />
                    <Card
                        icon={(<SiSelenium />)}
                        text="Selenium"
                    />
                    <Card
                        icon={(<DiMysql />)}
                        text="MySQL"
                    />
                    <Card
                        icon={(<SiSequelize />)}
                        text="Sequelize"
                    />

                </div>

            </div>
        </section>
    )
}