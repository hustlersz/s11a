"use client"
import { Play, Heart, MessageCircle, Share, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Track {
  id: string
  title: string
  artist: string
  artwork: string
  duration: number
  currentTime: number
  isPlaying: boolean
}

interface MusicFeedProps {
  onTrackSelect: (track: Track) => void
}

export function MusicFeed({ onTrackSelect }: MusicFeedProps) {
  const posts = [
    {
      id: "1",
      user: {
        name: "Sapah",
        username: "@sapah",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      track: {
        title: "La La Land",
        artist: "Erin Hyvin",
        artwork: "/placeholder.svg?height=120&width=120",
        minted: 10,
        waveform: Array.from({ length: 50 }, () => Math.random() * 100),
      },
      caption: "gm music",
      aiTag: "AI feels: dreamy",
      timestamp: "3d",
      likes: 24,
      comments: 8,
    },
    {
      id: "2",
      user: {
        name: "Rapper Abunai",
        username: "@rapperabunai",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      track: {
        title: "Pra Dizer Quem Sou",
        artist: "Rapper Abunai",
        artwork: "/placeholder.svg?height=120&width=120",
        minted: 288,
        waveform: Array.from({ length: 50 }, () => Math.random() * 100),
      },
      caption: "Pra Dizer Quem Sou!!",
      aiTag: "AI feels: intense",
      timestamp: "1d",
      likes: 156,
      comments: 32,
    },
    {
      id: "3",
      user: {
        name: "CyberSynth",
        username: "@cybersynth",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      track: {
        title: "Neon Nights",
        artist: "CyberSynth",
        artwork: "/placeholder.svg?height=120&width=120",
        minted: 45,
        waveform: Array.from({ length: 50 }, () => Math.random() * 100),
      },
      caption: "Late night coding sessions need this vibe 🌃",
      aiTag: "AI feels: futuristic",
      timestamp: "5h",
      likes: 89,
      comments: 15,
    },
  ]

  const handlePlay = (post: any) => {
    onTrackSelect({
      id: post.id,
      title: post.track.title,
      artist: post.track.artist,
      artwork: post.track.artwork,
      duration: 245,
      currentTime: 0,
      isPlaying: true,
    })
  }

  return (
    <div className="py-6 space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {/* User Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{post.user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-gray-900">{post.user.name}</span>
                  {post.user.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className="text-gray-500 text-sm">posted • {post.timestamp}</span>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-gray-900 mb-4">{post.caption}</p>

          {/* Music Player Card */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={post.track.artwork || "/placeholder.svg"}
                alt={post.track.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{post.track.title}</h3>
                <p className="text-gray-600 text-sm">{post.track.artist}</p>
                <p className="text-gray-500 text-xs">{post.track.minted} minted</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4">
                  Collect
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0 bg-transparent"
                  onClick={() => handlePlay(post)}
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Waveform */}
            <div className="mt-3 flex items-center space-x-1 h-8">
              {post.track.waveform.map((height, index) => (
                <div
                  key={index}
                  className="bg-gray-400 rounded-full"
                  style={{
                    width: "2px",
                    height: `${Math.max(height * 0.3, 4)}px`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* AI Tag */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              <Sparkles className="w-3 h-3 mr-1" />
              {post.aiTag}
            </Badge>
          </div>

          {/* Engagement */}
          <div className="flex items-center space-x-6 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
