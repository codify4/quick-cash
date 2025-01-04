'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Mail, MessageSquare } from "lucide-react"
import { useUser } from "@/hooks/use-user"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NotificationItem {
    id: string
    title: string
    message: string
    date: string
    read: boolean
}

// Mock notifications - in real app, this would come from an API
const mockNotifications: NotificationItem[] = [
    {
        id: '1',
        title: 'New Payment Received',
        message: 'You received a payment of $50.00 from John Doe',
        date: '2024-01-04',
        read: false
    },
    {
        id: '2',
        title: 'Account Security',
        message: 'Your password was changed successfully',
        date: '2024-01-03',
        read: true
    },
    {
        id: '3',
        title: 'Transaction Alert',
        message: 'A new transaction was initiated on your account',
        date: '2024-01-02',
        read: true
    }
]

export default function NotificationsPage() {
    const { user } = useUser()

    return (
        <div className="container mx-auto py-6 space-y-8 flex flex-col items-center">
            <div className="flex items-center justify-between w-full lg:w-10/12">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                    <p className="text-muted-foreground">Manage your notification preferences and view history</p>
                </div>
                <Button variant="outline" size="sm">
                    Mark all as read
                </Button>
            </div>

            <div className="grid gap-6 w-full lg:w-10/12">
                <Card>
                    <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                        <CardDescription>Choose how you want to be notified</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Bell className="w-5 h-5 text-muted-foreground" />
                                <div className="space-y-0.5">
                                    <Label>Push Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Receive notifications in the app</p>
                                </div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Notifications</CardTitle>
                        <CardDescription>Your notification history</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[400px] pr-4">
                            <div className="space-y-4">
                                {mockNotifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`p-4 rounded-lg border ${
                                            notification.read ? 'bg-background' : 'bg-primary/5 border-primary/20'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-medium">{notification.title}</h3>
                                            <span className="text-xs text-muted-foreground">
                                                {notification.date}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {notification.message}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}