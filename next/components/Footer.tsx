"use client"; 
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

{/* Footer / Player */}
export default function Footer() {
  return(
      <footer className="bg-black border-t border-white/10 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=60&width=60" alt="Now playing" className="w-14 h-14 rounded-md" />
            <div>
              <h4 className="font-semibold">Song Title</h4>
              <p className="text-sm text-gray-400">Artist Name</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 w-full sm:w-auto">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                <Play className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 w-full max-w-md">
              <span className="text-xs text-gray-400">0:00</span>
              <Slider className="w-full" />
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Mic2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <LayoutList className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Laptop2 className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Volume className="h-4 w-4" />
              <Slider className="w-[100px]" />
            </div>
            <Button variant="ghost" size="icon">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
   
  )
}