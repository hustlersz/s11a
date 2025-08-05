import { Home, Compass, Bell, User, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: TrendingUp, label: "Viral Sounds" },
    { icon: Compass, label: "Explore" },
    { icon: Bell, label: "Notifications" },
    { icon: User, label: "Profile" },
  ]

  return (
    <nav className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <h1 className="mt-2 text-xl font-bold text-gray-900">SayaCreator</h1>
      </div>

      {/* Navigation Items */}
      <div className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start h-12 text-base ${
              item.active
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  )
}
