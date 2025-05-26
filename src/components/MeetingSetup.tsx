"use client"

import { DeviceSettings, useCall, VideoPreview } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Loader from "./Loader";

interface MeetingSetupPropTypes {
    setIsSetupComplete: (isSetupComplete: boolean) => void;
}

const MeetingSetup = ({ setIsSetupComplete }: MeetingSetupPropTypes) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
    const call = useCall();

    const onJoinMeeting = () => {
        call?.join();
        setIsSetupComplete(true);
    }

    useEffect(() => {
        if (isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }
        return () => {

        };
    }, [isMicCamToggledOn, call?.camera, call?.microphone]);


    return (
        <section className="flex-center h-screen w-full flex-col gap-3 text-white">
            <h1 className="text-2xl font-bold">Setup</h1>
            <VideoPreview StartingCameraPreview={Loader} />
            <div className="flex-center gap-3 h-16 ">
                <label htmlFor="seetings" className="cursor-pointer flex-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        name="seetings"
                        id="seetings"
                        onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                    /> &nbsp;
                    Join With Microphone and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                onClick={onJoinMeeting}
                className="rounded-mg bg-cyan-500 hover:bg-cyan-600 text-white font-bold cursor-pointer">
                Join meeting
            </Button>
        </section>
    )
}

export default MeetingSetup