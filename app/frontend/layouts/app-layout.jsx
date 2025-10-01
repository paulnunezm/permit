import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/ui/app-sidebar"
import { Button } from "../components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { usePage, Head } from "@inertiajs/react"

export default function AppLayout({ children, title, hideBackButton }) {

    let flash = usePage().props.flash

    function goBack() {
        window.history.back()
    }

    return (

        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <Head title={title} />
            <main className="w-full p-8">
                {flash.notice && (
                    <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
                        {flash.notice}
                    </p>
                )}
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
