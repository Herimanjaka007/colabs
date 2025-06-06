"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
    const router = useRouter();
    const call = useCall();
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();
    const isMeetingOwner = localParticipant && call?.state.createdBy &&
        localParticipant.userId === call.state.createdBy.id;

    const onEndCall = async () => {
        await call?.endCall();
        router.push('/');
    }

    if (!isMeetingOwner) return null;
    return (
        <Button
            className="bg-red-500 hover:bg-red-450 cursor-pointer"
            onClick={onEndCall}
        >
            End call for everyone
        </Button>
    )
}

export default EndCallButton