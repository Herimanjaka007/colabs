interface ParamsContext {
    params: { id: string }
}
const Meeting = ({ params }: ParamsContext) => {
    const { id: meetingId } = params;
    return (
        <div>Meeting : #{meetingId}</div>
    )
}

export default Meeting