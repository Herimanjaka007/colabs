"use client"

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger, } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px] md:hidden">
            <Sheet>
                <SheetTrigger className="cursor-pointer" asChild>
                    <Menu />
                </SheetTrigger>
                <SheetContent
                    aria-describedby={undefined}
                    side="left"
                    className="bg-gray-900/60 backdrop-blur text-white border-b-2 border-gray-800 shadow-lg">
                    <SheetHeader>
                        <Link
                            href="/"
                        >
                            <h1 className="text-2xl">Colabs_</h1>
                        </Link>
                        <nav className="flex flex-col gap-6 mt-6">
                            {sidebarLinks.map((link) => {
                                const isActive = pathname === link.route || pathname.startsWith(link.route + "/");
                                const { Icon } = link;
                                return (
                                    <SheetClose key={link.label} asChild>
                                        <Link
                                            href={link.route}
                                            className={cn("flex items-center gap-4 rounded-lg p-3 transitions-color duration-200 justify-start", {
                                                "bg-cyan-600": isActive,
                                            })}
                                        >
                                            <Icon />
                                            <p className="font-semibold text-md">{link.label}</p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                        </nav>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav