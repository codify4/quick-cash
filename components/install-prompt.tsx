'use client'

import { Share, SquarePlus } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
   
    useEffect(() => {
      setIsIOS(
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
      )
      
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

      // Handle PWA install prompt
      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault()
        setDeferredPrompt(e)
      }

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      }
    }, [])

    const handleInstallClick = async () => {
      if (!deferredPrompt) return

      // Show the install prompt
      deferredPrompt.prompt()

      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
      }
    }
   
    if (isStandalone || !isMobile) {
      return null 
    }
   
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#121212]/80 backdrop-blur-sm border-t border-white/10 text-white">
        <div className="container mx-auto px-4 py-2.5 flex flex-col items-start gap-3">
          <div className="flex-1">
            <h3 className="text-base font-bold">
              Install QuickCash App
            </h3>
            {isIOS ? (
              <p className="flex flex-wrap items-center gap-1.5 text-sm text-gray-300">
                <span>Tap the Share button</span>
                <Share className="w-4 h-4" />
                <span>Then "Add to Home Screen"</span>
                <SquarePlus className="w-4 h-4" />
              </p>
            ) : (
              <p className="text-sm text-gray-300">
                Install our app for a better experience
              </p>
            )}
          </div>
          {!isIOS && deferredPrompt && (
            <Button variant="outline" className="w-full text-white" onClick={handleInstallClick}>
              Install App
            </Button>
          )}
        </div>
      </div>
    )
  }