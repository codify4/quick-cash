import { 
    ShoppingBag, 
    Utensils, 
    Car, 
    Lightbulb, 
    Gamepad, 
    Plane,
    Home,
    Gift,
    Heart,
    LucideIcon
} from "lucide-react"

export const icons: { icon: LucideIcon, label: string }[] = [
    { icon: ShoppingBag, label: "shopping" },
    { icon: Utensils, label: "food" },
    { icon: Car, label: "transportation" },
    { icon: Lightbulb, label: "utilities" },
    { icon: Gamepad, label: "entertainment" },
    { icon: Plane, label: "travel" },
    { icon: Home, label: "home" },
    { icon: Gift, label: "gifts" },
    { icon: Heart, label: "health" },
]

export const getIconByCategory = (category: string): LucideIcon => {
    const icon = icons.find(i => i.label.toLowerCase() === category.toLowerCase())?.icon
    return icon || ShoppingBag
}