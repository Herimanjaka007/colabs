import { cn } from "@/lib/utils";
import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";


type CallLayoutType = "GRID" | "SPEAKER-RIGHT" | "SPEAKER-LEFT";

const MeetingRoom = () => {
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get("personal");
    const [layout, setLayout] = useState<CallLayoutType>("SPEAKER-LEFT");
    const [showParticipants, setShowParticipants] = useState(false);
    const { useCallCallingState } = useCallStateHooks();
    const callCallingState = useCallCallingState();

    if (callCallingState !== CallingState.JOINED) return <Loader />;

    const CallLayout = () => {
        switch (layout) {
            case "GRID":
                return <PaginatedGridLayout />
            case "SPEAKER-LEFT":
                return <SpeakerLayout participantsBarPosition="left" />;
            default:
                return <SpeakerLayout participantsBarPosition="right" />;
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
            <div className="relative flex-center size-full">
                <div className="flex size-full max-w-[1000px] items-center">
                    <CallLayout />
                </div>
                <div className={cn('h-[calc(100vh-86px)] ml-2', {
                    'hidden': !showParticipants,
                })}>
                    <CallParticipantsList onClose={() => { }} />
                </div>
                <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
                    <CallControls />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer">
                            <LayoutList />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="border-slate-900 text-white bg-gray-900">
                            {["GRID", "SPEAKER-LEFT", "SPEAKER-RIGHT"].map((type) => (
                                <div
                                    key={type}
                                    className="cursor-pointer p-2 hover:bg-gray-800 bg-gray-900 rounded-lg"
                                    onClick={() => setLayout(type as CallLayoutType)}
                                >
                                    <DropdownMenuItem>
                                        {type.replace("-", " ")}
                                    </DropdownMenuItem>

                                </div>
                            ))}
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <CallStatsButton />
                    <Button
                        onClick={() => setShowParticipants(prev => !prev)}
                        className="cursor-pointer p-3 hover:bg-gray-700 bg-gray-800 rounded-lg">
                        <Users className="text-white" size={20} />
                    </Button>
                    {!isPersonalRoom && <EndCallButton />}
                </div>
            </div>
        </section>
    )
}

export default MeetingRoom