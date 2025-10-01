import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/ui/app-sidebar"
import { Button } from "../components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { usePage } from "@inertiajs/react"

export default function AppLayout({ children, title, hideBackButton }) {

    function goBack() {
        window.history.back()
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="w-full h-full p-8">
                <div className="block">
                    {hideBackButton != false && (
                        <Button variant="secondary" className="hover:bg-gray-500 hover:text-white" onClick={goBack}>
                            <ChevronLeftIcon /> <span>Back</span>
                        </Button>
                    )}
                    <h1 className="w-full text-center font-bold text-4xl">{title}</h1>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}
