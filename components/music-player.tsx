"use client"

import { useState, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, List, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Track {
  id: string
  title: string
  artist: string
  artwork: string
  duration: number
  currentTime: number
  isPlaying: boolean
}

interface MusicPlayerProps {
  track: Track
  onTrackUpdate: (track: Track) => void
}

export function MusicPlayer({ track, onTrackUpdate }: MusicPlayerProps) {
  const [progress, setProgress] = useState([0])
  const [volume, setVolume] = useState([75])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (track.isPlaying) {
      interval = setInterval(() => {
        const newTime = Math.min(track.currentTime + 1, track.duration)
        const newProgress = (newTime / track.duration) * 100
        setProgress([newProgress])
        onTrackUpdate({ ...track, currentTime: newTime })

        if (newTime >= track.duration) {
          onTrackUpdate({ ...track, isPlaying: false, currentTime: 0 })
          setProgress([0])
        }
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [track.isPlaying, track.duration, onTrackUpdate])

  const togglePlay = () => {
    onTrackUpdate({ ...track, isPlaying: !track.isPlaying })
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleProgressChange = (value: number[]) => {
    const newTime = Math.floor((value[0] / 100) * track.duration)
    setProgress(value)
    onTrackUpdate({ ...track, currentTime: newTime })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Current Track Info */}
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <img
            src={track.artwork || "/placeholder.svg"}
            alt={track.title}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 truncate">{track.title}</h4>
            <p className="text-gray-600 text-sm truncate">{track.artist}</p>
          </div>
          <Button size="sm" variant="ghost" className="text-gray-500 hover:text-red-500">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost" className="text-gray-500 hover:text-purple-500">
              <Shuffle className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-700 hover:text-gray-900">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full w-10 h-10 p-0"
              onClick={togglePlay}
            >
              {track.isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-700 hover:text-gray-900">
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-500 hover:text-purple-500">
              <Repeat className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-3 w-full">
            <span className="text-xs text-gray-500 w-10 text-right">{formatTime(track.currentTime)}</span>
            <Slider value={progress} onValueChange={handleProgressChange} max={100} step={1} className="flex-1" />
            <span className="text-xs text-gray-500 w-10">{formatTime(track.duration)}</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <Button size="sm" variant="ghost" className="text-gray-500 hover:text-gray-700">
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-gray-500 hover:text-gray-700">
            <List className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <Volume2 className="w-4 h-4 text-gray-500" />
            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-20" />
          </div>
          <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4">
            Collect
          </Button>
        </div>
      </div>
    </div>
  )
}
