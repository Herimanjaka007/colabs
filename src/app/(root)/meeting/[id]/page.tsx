interface ParamsContext {
    params: Promise<{ id: string }>
}
const Meeting = async ({ params }: ParamsContext) => {
    const { id: meetingId } = await params;
    return (
        <div>Meeting : #{meetingId}</div>
    )
}

export default Meeting