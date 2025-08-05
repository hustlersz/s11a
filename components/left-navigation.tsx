import { Home, Compass, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeftNavigation() {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Compass, label: "Explore" },
    { icon: Bell, label: "Notifications" },
    { icon: User, label: "Profile" },
  ]

  return (
    <nav className="w-72 bg-white border-r border-gray-100 px-6 py-8 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="mb-12">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Saya</h1>
            <p className="text-xs text-gray-500 font-medium">DApp</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="space-y-3">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start h-14 text-base rounded-2xl transition-all duration-200 ${
              item.active
                ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-6 h-6 mr-4" />
            {item.label}
          </Button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Wallet Connection Status */}
      <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Wallet Connected</p>
            <p className="text-xs text-gray-500">0x1234...5678</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
