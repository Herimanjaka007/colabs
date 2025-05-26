import '@stream-io/video-react-sdk/dist/css/styles.css';
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import StreamClientProvider from "@/providers/StreamClientProvider"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative">
            <StreamClientProvider>
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <section className="flex min-h-screen flex-1 flex-col px-6 lg-px-12 pb-6 pt-28 max-md:pb-14 sm:px-14">
                        <div className="w-full">
                            {children}
                        </div>
                    </section>
                </div>
            </StreamClientProvider>
        </main>
    )
}

export default RootLayout