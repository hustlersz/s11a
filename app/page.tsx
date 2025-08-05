"use client"

import { useState } from "react"
import { LeftNavigation } from "@/components/left-navigation"
import { MusicSocialFeed } from "@/components/music-social-feed"
import { TrendingUsersSidebar } from "@/components/trending-users-sidebar"
import { PersistentMusicPlayer } from "@/components/persistent-music-player"

export default function SayaDApp() {
  const [currentTrack, setCurrentTrack] = useState({
    id: "track_001",
    title: "Ethereal Waves",
    artist: "CryptoBeats",
    cover_url: "/placeholder.svg?height=60&width=60",
    duration: 187,
    currentTime: 45,
    isPlaying: true,
    mint_count: 1247,
    opensea_url: "https://opensea.io/assets/ethereum/0x123.../1247",
  })

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="flex">
        {/* Left Navigation */}
        <LeftNavigation />

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Main Feed */}
          <main className="flex-1 max-w-2xl mx-auto px-4">
            <MusicSocialFeed onTrackSelect={setCurrentTrack} />
          </main>

          {/* Right Sidebar */}
          <TrendingUsersSidebar />
        </div>
      </div>

      {/* Persistent Bottom Music Player */}
      <PersistentMusicPlayer track={currentTrack} onTrackUpdate={setCurrentTrack} />
    </div>
  )
}
