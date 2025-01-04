'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { currencies } from "@/constants/currencies";



export type CurrencyCode = typeof currencies[number]['code'];

export default function AccountPage() {
    const { user } = useUser();
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");

    useEffect(() => {
        // Load saved currency from localStorage on component mount
        const savedCurrency = localStorage.getItem('preferredCurrency') as CurrencyCode;
        if (savedCurrency && currencies.some(c => c.code === savedCurrency)) {
            setSelectedCurrency(savedCurrency);
        }
    }, []);

    const handleCurrencyChange = (value: CurrencyCode) => {
        setSelectedCurrency(value);
        localStorage.setItem('preferredCurrency', value);
    };

    const userData = user ? {
        name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
        email: user.email || '',
        avatar: user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`,
    } : null

    return (
        <div className="container mx-auto py-6 space-y-8 flex flex-col items-center">
            <div className="flex items-center justify-between w-full lg:w-10/12">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
                    <p className="text-muted-foreground">Manage your account settings and preferences</p>
                </div>
                <Button variant="outline">Save Changes</Button>
            </div>

            <div className="grid gap-6 w-full lg:w-10/12">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src={userData?.avatar} />
                                <AvatarFallback>{userData?.name?.split(' ')[0]}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" defaultValue={userData?.name} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" defaultValue={userData?.email} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>Set your default preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="currency">Default Currency</Label>
                            <Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
                                <SelectTrigger className="w-full md:w-[280px]">
                                    <SelectValue placeholder="Select a currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map((currency) => (
                                        <SelectItem key={currency.code} value={currency.code}>
                                            {currency.symbol} - {currency.name} ({currency.code})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <p className="text-sm text-muted-foreground">
                                This will be your default currency for all transactions and displays
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Security</CardTitle>
                        <CardDescription>Manage your password and security settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}