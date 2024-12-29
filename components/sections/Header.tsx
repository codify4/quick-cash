"use client";
import Link from "next/link";
import Image from "next/image";
import InteractiveHoverButton from "../ui/interactive-hover-button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="QuickCash" width={40} height={40} />
          <span className="text-xl font-bold">QuickCash</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 w-[190px]">
          <Link className="w-full" href="/signin">
            <InteractiveHoverButton text="Get Started" className="w-full rounded-xl bg-transparent"/>
          </Link>
        </nav>
      </div>
    </header>
  );
}