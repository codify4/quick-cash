import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 items-center">
            <Link href="https://x.com/Ijon_k4" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/k_ijon7/" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://github.com/codify4" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/ijon-kushta-320b6831b/" className="text-white/70 hover:text-[#FF4C4C] transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} QuickCash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}