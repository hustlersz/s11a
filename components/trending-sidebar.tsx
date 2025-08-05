import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TrendingSidebar() {
  const trendingUsers = [
    {
      name: "Hinny",
      followers: "8 followers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Million Records",
      followers: "6.7K followers",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    {
      name: "MikeWazowski",
      followers: "402 followers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "cryptoseaman.eth",
      followers: "1.3K followers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "King doley",
      followers: "3 followers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "TTTedm",
      followers: "2.6K followers",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
  ]

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Trending Creators</h2>
      <div className="space-y-4">
        {trendingUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-medium text-gray-900">{user.name}</span>
                  {user.verified && (
                    <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className="text-gray-500 text-sm">{user.followers}</span>
              </div>
            </div>
            <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4">
              Follow
            </Button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-1">
          <p>Terms of Service • Privacy Policy</p>
          <p>© 2025 SayaCreator</p>
        </div>
      </div>
    </div>
  )
}
