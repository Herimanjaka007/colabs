"use client";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient, User, } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

const StreamClientProvider = ({ children }: { children: React.ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) throw new Error("Missing Stream API key");
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user.id,
                name: user.firstName,
                image: user.imageUrl,
            } as User,
            tokenProvider
        });

        setVideoClient(client);
        return () => {
        }
    }, [isLoaded, user]);

    if (!videoClient) return <Loader />;

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};

export default StreamClientProvider;