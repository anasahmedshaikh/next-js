"use client"; 
import { Button } from "@/components/ui/button"
import { Home, Search, Library, ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
const [sidebarOpen, setSidebarOpen] = useState(false)

return (
        <aside className={`bg-black w-64 p-6 flex flex-col ${sidebarOpen ? 'fixed inset-y-0 left-0 z-50' : 'hidden'} md:relative md:flex`}>
          <Button variant="ghost" className="absolute top-4 right-4 md:hidden" onClick={() => setSidebarOpen(false)}>
            <ChevronLeft />
          </Button>
          <nav className="space-y-6 flex-1">
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Library className="mr-2 h-4 w-4" />
                Your Library
              </Button>
            </div>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Create Playlist
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Liked Songs
              </Button>
            </div>
          </nav>
        </aside>
    )
}