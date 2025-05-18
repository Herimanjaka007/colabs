"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();
    if (!user) throw new Error("User is not authenticated");
    if (!apiKey) throw new Error("Missing Stream API key");
    if (!apiSecret) throw new Error("Missing Stream API secret");

    const client = new StreamClient(apiKey, apiSecret);
    const payload = {
        user_id: user.id,
    }
    const token = client.generateUserToken(payload);
    return token;
}