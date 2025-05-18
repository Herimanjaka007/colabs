import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

interface HomeCardPropType {
    title: string
    description: string
    className?: string
    onClick?: () => void
}

const HomeCard = ({ title, description, className, onClick, children }: PropsWithChildren<HomeCardPropType>) => {
    return (
        <div
            className={cn("px-4 py-6 flex flex-col justify-between w-full lg:max-w-[270px] min-h-[200px] rounded-md cursor-pointer", className)}
            onClick={onClick}
        >
            <div className="p-2 glassmorphism">
                {children}
            </div>
            <div className="mt-auto gap-2">
                <h1 className="font-bold text-2xl text-gray-200">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HomeCard