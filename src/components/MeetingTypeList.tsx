"use client"

import { Calendar, PlusIcon, UserPlusIcon, Video } from "lucide-react"
import HomeCard from "./HomeCard"
import MeetingModal from "./MeetingModal"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type MEETING_STATE = "MEETING" | "SCHEDULE" | "RECORDINGS" | "JOIN"

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<MEETING_STATE | undefined>(undefined);
    const { user } = useUser();
    const streamClient = useStreamVideoClient();
    const [meetingProperties, setMeetingProperties] = useState({
        dateTime: new Date(),
        description: "",
        link: ""
    });
    const [callDetails, setCallDetails] = useState<Call>();
    const router = useRouter();

    const createMeeting = async () => {
        if (!user || !streamClient) return;
        try {
            if (!meetingProperties.dateTime) {
                toast.info("Please select a date and time");
                return;
            }
            const callId = crypto.randomUUID();
            const callType = "default";
            const call = streamClient.call(callType, callId);

            if (!call) throw new Error("Failed to create call");
            const startsAt = meetingProperties
                .dateTime.
                toISOString() || new Date(Date.now()).toISOString();
            const description = meetingProperties.description || "Instant meeting";
            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        description,
                    }
                }
            })
            setCallDetails(call);
            if (!meetingProperties.description) {
                router.push(`/meeting/${call.id}`);
            }
            toast.success("Meeting created successfully");
        } catch (error) {
            console.log(error);
            toast.error("Failed to create meeting");
        }
    }

    return (
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <HomeCard
                title="New meeting"
                description="Start an instant meeting."
                className="bg-cyan-600"
                onClick={() => setMeetingState("MEETING")}
            >
                <PlusIcon />
            </HomeCard>
            <HomeCard
                title="Schedule meeting"
                description="Check out your recordings."
                className="bg-yellow-500"
                onClick={() => setMeetingState("SCHEDULE")}
            >
                <Calendar />
            </HomeCard>
            <HomeCard
                title="View recordings"
                description="Create a new meeting"
                className="bg-emerald-500"
                onClick={() => setMeetingState("RECORDINGS")}
            >
                <Video />
            </HomeCard >
            <HomeCard
                title="Join meeting"
                description="Viea invitation link."
                className="bg-purple-500"
                onClick={() => setMeetingState("JOIN")}
            >
                <UserPlusIcon />
            </HomeCard >
            <MeetingModal
                isOpen={meetingState === "MEETING"}
                onClose={() => setMeetingState(undefined)}
                title="New meeting"
                buttonText="Start meeting"
                buttonIcon={<PlusIcon />}
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingTypeList