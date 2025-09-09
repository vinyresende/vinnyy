import SkillCard from "../all/skillcard"
import InfiniteSlider from "../all/infiniteslider"

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

                <InfiniteSlider>
                    <SkillCard
                        icon={(<IoLogoWordpress />)}
                        text="WordPress"
                    />
                    <SkillCard
                        icon={(<DiJavascript />)}
                        text="JavaScript"
                    />
                    <SkillCard
                        icon={(<DiHtml5 />)}
                        text="HTML5"
                    />
                    <SkillCard
                        icon={(<DiCss3 />)}
                        text="CSS3"
                    />
                    <SkillCard
                        icon={(<DiNodejsSmall />)}
                        text="Node.js"
                    />
                    <SkillCard
                        icon={(<DiReact />)}
                        text="React"
                    />
                    <SkillCard
                        icon={(<SiNextdotjs />)}
                        text="Next.js"
                    />
                    <SkillCard
                        icon={(<SiElectron />)}
                        text="Electron"
                    />
                    <SkillCard
                        icon={(<SiExpress />)}
                        text="Express"
                    />
                    <SkillCard
                        icon={(<BiLogoTypescript />)}
                        text="TypeScript"
                    />
                    <SkillCard
                        icon={(<DiPython />)}
                        text="Python3"
                    />
                    <SkillCard
                        icon={(<SiQt />)}
                        text="PyQt5"
                    />
                    <SkillCard
                        icon={(<SiSelenium />)}
                        text="Selenium"
                    />
                    <SkillCard
                        icon={(<DiMysql />)}
                        text="MySQL"
                    />
                    <SkillCard
                        icon={(<SiSequelize />)}
                        text="Sequelize"
                    />
                </InfiniteSlider>

            </div>
        </section>
    )
}