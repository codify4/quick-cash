import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">About</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Features</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} QuickCash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}