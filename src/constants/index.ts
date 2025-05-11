import { CalendarArrowDownIcon, CalendarArrowUpIcon, HomeIcon, PlusIcon, VideoIcon } from "lucide-react";

export const sidebarLinks = [
    {
        label: "Home",
        route: "/",
        Icon: HomeIcon,

    },
    {
        label: "Upcoming",
        route: "/upcoming",
        Icon: CalendarArrowUpIcon,

    },
    {
        label: "Previous",
        route: "/previous",
        Icon: CalendarArrowDownIcon,

    },
    {
        label: "Recordings",
        route: "/recordings",
        Icon: VideoIcon,

    },
    {
        label: "Personal Room",
        route: "/personal-room",
        Icon: PlusIcon,

    },
]