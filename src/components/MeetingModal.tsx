import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"

interface MeetingModalPropTypes {
    title: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
    handleClick?: () => void
    buttonText?: string
    image?: string
    buttonIcon?: React.ReactNode
}

const MeetingModal = ({
    title,
    isOpen,
    onClose,
    children,
    handleClick,
    buttonText,
    buttonIcon
}: MeetingModalPropTypes) => {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent
                className="bg-slate-900 text-white border-none"
            >
                <DialogHeader>
                    <DialogTitle className="text-2xl">{title}</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    {children}
                    <Button
                        className="cursor-pointer bg-cyan-600 hover:bg-cyan-700"
                        onClick={handleClick}
                    >
                        {buttonIcon}
                        {buttonText}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default MeetingModal