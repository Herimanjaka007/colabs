import { cn } from "@/lib/utils";
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { useState } from "react";

type CallLayoutType = "GRID" | "SPEAKER-RIGHT" | "SPEAKER-LEFT";

const MeetingRoom = () => {
    const [layout, setLayout] = useState<CallLayoutType>("SPEAKER-LEFT");

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
                    {/* <CallParticipantsList onClose={() => { }} /> */}
                </div>
                <div className={cn('h-[calc(100vh-86px)] hidden ml-2', {
                    'show-block': true
                })}>
                    <CallParticipantsList onClose={() => { }} />
                </div>
                <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
                    <CallControls />
                </div>
            </div>
        </section>
    )
}

export default MeetingRoom