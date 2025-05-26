import { LoaderCircle } from "lucide-react"

const Loader = () => {
    return (
        <div className="flex-center w-full h-screen text-white">
            <LoaderCircle className="animate-spin" size={50} />
        </div>
    );
}

export default Loader;