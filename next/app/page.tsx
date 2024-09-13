"use client"; 
import { useState } from "react"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


export default function ResponsiveSpotifyClone() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">Upgrade</Button>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-6">Good afternoon</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition flex items-center space-x-4">
                <img src={`/placeholder.svg?height=80&width=80`} alt="Album cover" className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">Playlist {i + 1}</h3>
                  <p className="text-sm text-gray-400">Artist {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

