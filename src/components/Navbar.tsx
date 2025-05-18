import Link from "next/link"
import MobileNav from "./MobileNav"
import { SignedIn, UserButton } from "@clerk/nextjs"

const Navbar = () => {
    return (
        <nav className="fixed flex justify-between z-50 w-full px-6 py-4 lg:px-10 bg-gray-900/50 backdrop-blur text-white border-b-2 border-gray-800 shadow-lg">
            <Link
                href="/"
            >
                <h1 className="text-2xl">Colabs_</h1>
            </Link>
            <div className="flex items-center justify-between gap-5">
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar