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

export type Expense = {
    id?: number;
    created_at?: string;
    name: string;
    amount: number;
    description: string;
    category: string;
    user_id: string;
}

export const icons: Record<string, LucideIcon> = {
    shopping: ShoppingBag,
    food: Utensils,
    transportation: Car,
    utilities: Lightbulb,
    entertainment: Gamepad,
    travel: Plane,
    home: Home,
    gifts: Gift,
    health: Heart
}