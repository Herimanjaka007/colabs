import { LoaderCircle } from "lucide-react"

const Loader = () => {
    return (
        <div className="flex-center w-full h-screen">
            <LoaderCircle className="animate-spin" />
        </div>
    );
}

export default Loader;