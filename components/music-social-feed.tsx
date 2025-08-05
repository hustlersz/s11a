"use client"

import { useState } from "react"
import { Play, Heart, MessageCircle, ExternalLink, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

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

interface Post {
  user: {
    username: string
    avatar_url: string
    wallet_address: string
    verified: boolean
  }
  timestamp: string
  track: {
    id: string
    title: string
    artist: string
    cover_url: string
    mint_count: number
    opensea_url: string
    waveform: number[]
  }
  caption: string
  ai_feel_tag: string
  likes: number
  comments: number
}

interface MusicSocialFeedProps {
  onTrackSelect: (track: Track) => void
}

export function MusicSocialFeed({ onTrackSelect }: MusicSocialFeedProps) {
  const [posts] = useState<Post[]>([
    {
      user: {
        username: "cryptomusician.eth",
        avatar_url: "/placeholder.svg?height=48&width=48",
        wallet_address: "0x1234567890abcdef1234567890abcdef12345678",
        verified: true,
      },
      timestamp: "2h",
      track: {
        id: "track_001",
        title: "Digital Dreams",
        artist: "CryptoBeats",
        cover_url: "/placeholder.svg?height=120&width=120",
        mint_count: 1247,
        opensea_url: "https://opensea.io/assets/ethereum/0x123.../1247",
        waveform: Array.from({ length: 60 }, () => Math.random() * 100),
      },
      caption:
        "Just dropped this ethereal piece inspired by late night coding sessions 🌙✨ The future of music is on-chain!",
      ai_feel_tag: "nostalgic",
      likes: 342,
      comments: 28,
    },
    {
      user: {
        username: "basslinebeats",
        avatar_url: "/placeholder.svg?height=48&width=48",
        wallet_address: "0xabcdef1234567890abcdef1234567890abcdef12",
        verified: false,
      },
      timestamp: "4h",
      track: {
        id: "track_002",
        title: "Neon Nights",
        artist: "SynthWave Collective",
        cover_url: "/placeholder.svg?height=120&width=120",
        mint_count: 89,
        opensea_url: "https://opensea.io/assets/ethereum/0x456.../89",
        waveform: Array.from({ length: 60 }, () => Math.random() * 100),
      },
      caption: "Cyberpunk vibes for the metaverse generation 🤖",
      ai_feel_tag: "energetic",
      likes: 156,
      comments: 12,
    },
    {
      user: {
        username: "melodicminter",
        avatar_url: "/placeholder.svg?height=48&width=48",
        wallet_address: "0x9876543210fedcba9876543210fedcba98765432",
        verified: true,
      },
      timestamp: "6h",
      track: {
        id: "track_003",
        title: "Ambient Spaces",
        artist: "Digital Zen",
        cover_url: "/placeholder.svg?height=120&width=120",
        mint_count: 523,
        opensea_url: "https://opensea.io/assets/ethereum/0x789.../523",
        waveform: Array.from({ length: 60 }, () => Math.random() * 100),
      },
      caption: "Perfect for meditation and deep work. This track has been popular in your circle 🧘‍♀️",
      ai_feel_tag: "chill",
      likes: 89,
      comments: 7,
    },
  ])

  const handleCollect = async (post: Post) => {
    // Smart contract call would go here
    console.log("Collecting NFT:", post.track.id)
    // Simulate blockchain transaction
    alert(`Initiating collection of "${post.track.title}" - ${post.track.mint_count + 1} mints`)
  }

  const handlePlay = (post: Post) => {
    onTrackSelect({
      id: post.track.id,
      title: post.track.title,
      artist: post.track.artist,
      cover_url: post.track.cover_url,
      duration: 187,
      currentTime: 0,
      isPlaying: true,
      mint_count: post.track.mint_count,
      opensea_url: post.track.opensea_url,
    })
  }

  const getAIBadgeColor = (tag: string) => {
    switch (tag) {
      case "energetic":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "chill":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "nostalgic":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="py-8 space-y-8">
      {/* Feed Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Music Feed</h1>
        <p className="text-gray-600">Discover and collect the latest Web3 music</p>
      </div>

      {/* Posts */}
      {posts.map((post, index) => (
        <article
          key={index}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
        >
          {/* User Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12 ring-2 ring-gray-100">
                <AvatarImage src={post.user.avatar_url || "/placeholder.svg"} />
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-400 text-white">
                  {post.user.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{post.user.username}</span>
                  {post.user.verified && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className="text-gray-500 text-sm">{post.timestamp} ago</span>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-gray-800 mb-6 leading-relaxed">{post.caption}</p>

          {/* Music Player Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border border-gray-200">
            <div className="flex items-start space-x-6">
              <div className="relative">
                <img
                  src={post.track.cover_url || "/placeholder.svg"}
                  alt={post.track.title}
                  className="w-24 h-24 rounded-xl object-cover shadow-lg"
                />
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg hover:bg-gray-50 text-gray-900 p-0"
                  onClick={() => handlePlay(post)}
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{post.track.title}</h3>
                    <p className="text-gray-600 font-medium">{post.track.artist}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">
                        <Zap className="w-4 h-4 inline mr-1" />
                        {post.track.mint_count.toLocaleString()} minted
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:text-blue-600 p-0 h-auto"
                        onClick={() => window.open(post.track.opensea_url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        OpenSea
                      </Button>
                    </div>
                  </div>

                  <Button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-6 py-2 font-semibold shadow-lg"
                    onClick={() => handleCollect(post)}
                  >
                    Collect
                  </Button>
                </div>

                {/* Waveform */}
                <div className="flex items-center space-x-1 h-12 mb-4">
                  {post.track.waveform.map((height, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-t from-purple-400 to-blue-400 rounded-full transition-all duration-300 hover:from-purple-500 hover:to-blue-500"
                      style={{
                        width: "3px",
                        height: `${Math.max(height * 0.4, 6)}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Metadata Badge */}
          <div className="flex items-center justify-between mb-6">
            <Badge variant="outline" className={`${getAIBadgeColor(post.ai_feel_tag)} border rounded-full px-3 py-1`}>
              <Sparkles className="w-3 h-3 mr-2" />
              AI feels: {post.ai_feel_tag}
            </Badge>

            {post.caption.includes("popular in your circle") && (
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 rounded-full px-3 py-1">
                Popular in your circle
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-8 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{post.comments}</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}
