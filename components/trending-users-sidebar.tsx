import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TrendingUsersSidebar() {
  const trendingUsers = [
    {
      username: "etherealbeats.eth",
      avatar_url: "/placeholder.svg?height=40&width=40",
      followers: "12.3K",
      verified: true,
      trending_reason: "Hot track",
    },
    {
      username: "synthmaster",
      avatar_url: "/placeholder.svg?height=40&width=40",
      followers: "8.7K",
      verified: false,
      trending_reason: "Rising artist",
    },
    {
      username: "basslineking",
      avatar_url: "/placeholder.svg?height=40&width=40",
      followers: "15.2K",
      verified: true,
      trending_reason: "New drop",
    },
    {
      username: "melodicmint",
      avatar_url: "/placeholder.svg?height=40&width=40",
      followers: "6.1K",
      verified: false,
      trending_reason: "Viral sound",
    },
    {
      username: "cryptocomposer",
      avatar_url: "/placeholder.svg?height=40&width=40",
      followers: "9.8K",
      verified: true,
      trending_reason: "Collaboration",
    },
  ]

  return (
    <aside className="w-80 bg-white border-l border-gray-100 p-6 h-screen sticky top-0 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Trending Creators</h2>
        <p className="text-gray-600 text-sm">Discover rising artists in Web3 music</p>
      </div>

      <div className="space-y-6">
        {trendingUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between group">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <Avatar className="w-12 h-12 ring-2 ring-gray-100">
                <AvatarImage src={user.avatar_url || "/placeholder.svg"} />
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-400 text-white">
                  {user.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-gray-900 truncate">{user.username}</span>
                  {user.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 text-sm">{user.followers} followers</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700">
                    {user.trending_reason}
                  </Badge>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 py-2 font-medium ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Follow
            </Button>
          </div>
        ))}
      </div>

      {/* Trending Hashtags */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Sounds</h3>
        <div className="space-y-3">
          {["#synthwave", "#lofi", "#ambient", "#techno", "#experimental"].map((tag, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-700 font-medium">{tag}</span>
              <span className="text-gray-500">{Math.floor(Math.random() * 50 + 10)}K posts</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Help
            </a>
          </div>
          <p>© 2025 Saya DApp</p>
        </div>
      </div>
    </aside>
  )
}
