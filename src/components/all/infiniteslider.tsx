'use client'

interface Props {
    children: React.ReactNode[]
}

export default function InfiniteSlider({ children }: Props) {
    return (
        <div
            className="relative w-full mx-auto overflow-x-hidden
            before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[150px]
            before:bg-gradient-to-r before:from-background-2 before:to-transparent before:content-['']
            after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[150px] after:-scale-x-100
            after:bg-gradient-to-l after:from-transparent after:to-background-2 after:content-['']"
        >
            <div
                className="flex animate-infinite-slider py-5"
            >
                {children.map((item, index) => {
                    return (
                        <div key={index} className="min-w-[200px] max-w-[200px] px-10">
                            {item}
                        </div>
                    )
                })}
                {children.map((item, index) => {
                    return (
                        <div key={index} className="min-w-[200px] max-w-[200px] px-10">
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}