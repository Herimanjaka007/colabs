import Link from "next/link"
import MobileNav from "./MobileNav"

const Navbar = () => {
    return (
        <nav className="fixed flex justify-between z-50 w-full px-6 py-4 lg:px-10 bg-gray-900/50 backdrop-blur text-white border-b-2 border-gray-800 shadow-lg">
            <Link
                href="/"
            >
                <h1 className="text-2xl">Colabs_</h1>
            </Link>
            <div className="flex justify-between gap-5">
                {/* Clerck user management */}

                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar