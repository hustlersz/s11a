"use client"

import { useState, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Track {
  id: string
  title: string
  artist: string
  cover_url: string
  duration: number
  currentTime: number
  isPlaying: boolean
  mint_count: number
  opensea_url: string
}

interface PersistentMusicPlayerProps {
  track: Track
  onTrackUpdate: (track: Track) => void
}

export function PersistentMusicPlayer({ track, onTrackUpdate }: PersistentMusicPlayerProps) {
  const [progress, setProgress] = useState([0])
  const [volume, setVolume] = useState([75])
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (track.isPlaying) {
      interval = setInterval(() => {
        const newTime = Math.min(track.currentTime + 1, track.duration)
        const newProgress = (newTime / track.duration) * 100
        setProgress([newProgress])
        onTrackUpdate({ ...track, currentTime: newTime })

        if (newTime >= track.duration) {
          if (isRepeating) {
            onTrackUpdate({ ...track, currentTime: 0 })
            setProgress([0])
          } else {
            onTrackUpdate({ ...track, isPlaying: false, currentTime: 0 })
            setProgress([0])
          }
        }
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [track.isPlaying, track.duration, isRepeating, onTrackUpdate])

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

  const handleCollect = () => {
    alert(`Collecting "${track.title}" - Mint #${track.mint_count + 1}`)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-4 z-50">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Current Track Info */}
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <img
            src={track.cover_url || "/placeholder.svg"}
            alt={track.title}
            className="w-16 h-16 rounded-xl object-cover shadow-lg"
          />
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-gray-900 truncate text-lg">{track.title}</h4>
            <p className="text-gray-600 truncate font-medium">{track.artist}</p>
            <div className="flex items-center space-x-3 mt-1">
              <span className="text-xs text-gray-500">{track.mint_count.toLocaleString()} minted</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-blue-600 p-0 h-auto text-xs"
                onClick={() => window.open(track.opensea_url, "_blank")}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                View NFT
              </Button>
            </div>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-3 flex-1 max-w-lg mx-8">
          <div className="flex items-center space-x-6">
            <Button
              size="sm"
              variant="ghost"
              className={`text-gray-500 hover:text-purple-500 ${isShuffled ? "text-purple-500" : ""}`}
              onClick={() => setIsShuffled(!isShuffled)}
            >
              <Shuffle className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-700 hover:text-gray-900">
              <SkipBack className="w-6 h-6" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full w-14 h-14 p-0 shadow-lg"
              onClick={togglePlay}
            >
              {track.isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-700 hover:text-gray-900">
              <SkipForward className="w-6 h-6" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className={`text-gray-500 hover:text-purple-500 ${isRepeating ? "text-purple-500" : ""}`}
              onClick={() => setIsRepeating(!isRepeating)}
            >
              <Repeat className="w-5 h-5" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-4 w-full">
            <span className="text-xs text-gray-500 w-12 text-right font-mono">{formatTime(track.currentTime)}</span>
            <Slider value={progress} onValueChange={handleProgressChange} max={100} step={0.1} className="flex-1" />
            <span className="text-xs text-gray-500 w-12 font-mono">{formatTime(track.duration)}</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="flex items-center space-x-3">
            <Volume2 className="w-5 h-5 text-gray-500" />
            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-24" />
          </div>
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-6 py-2 font-semibold shadow-lg"
            onClick={handleCollect}
          >
            Collect
          </Button>
        </div>
      </div>
    </div>
  )
}
