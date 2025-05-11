"use client"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="sticky top-0 left-0 flex h-screen w-fit flex-col justify-between bg-gray-800 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(link.route + "/");
                    const { Icon } = link;
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn("flex items-center gap-4 rounded-lg p-3 transitions-color duration-200 justify-start", {
                                "bg-cyan-600": isActive,
                            })}
                        >
                            <Icon />
                            <p className="font-semibold text-lg max-md:hidden">{link.label}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar