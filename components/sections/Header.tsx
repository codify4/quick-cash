"use client";

import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/quick-cash.svg" alt="QuickCash" width={40} height={40} />
          <span className="text-xl font-bold">QuickCash</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Button variant="ghost" className="text-white/80 hover:text-white">
            Sign In
          </Button>
          <Button className="bg-[#FF4C4C] hover:bg-[#FF4C4C]/90 text-white">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}