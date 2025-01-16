"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Plus } from "lucide-react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function AddSubscription() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-white w-full md:w-auto rounded-lg">
                    <Plus className="mr-2 h-4 w-4" />
                    New Subscription
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-2xl">
                <DialogHeader>
                    <DialogTitle>Add Subscription</DialogTitle>
                    <DialogDescription>
                        Add a new subscription to track your recurring payments.
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-sm font-medium">
                                Subscription Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Netflix, Spotify, etc."
                                autoComplete="off"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="provider" className="text-sm font-medium">
                                Service Provider
                            </Label>
                            <Input
                                id="provider"
                                placeholder="Netflix Inc., Spotify AB, etc."
                                autoComplete="off"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="amount" className="text-sm font-medium">
                                Amount
                            </Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="19.99"
                                autoComplete="off"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cycle" className="text-sm font-medium">
                                Billing Cycle
                            </Label>
                            <Select>
                                <SelectTrigger className="rounded-lg">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                    <SelectItem value="yearly">Yearly</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="payment" className="text-sm font-medium">
                                Payment Method
                            </Label>
                            <Select>
                                <SelectTrigger className="rounded-lg">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="visa">Visa</SelectItem>
                                    <SelectItem value="mastercard">Mastercard</SelectItem>
                                    <SelectItem value="paypal">PayPal</SelectItem>
                                    <SelectItem value="applepay">Apple Pay</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Next Billing Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-start text-left font-normal rounded-lg",
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        <span>Pick a date</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 rounded-lg" align="start">
                                    <Calendar
                                        mode="single"
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" className="rounded-lg">
                            Cancel
                        </Button>
                        <Button type="submit" className="rounded-lg text-white">
                            Add Subscription
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}