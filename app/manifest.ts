import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QuichCash',
    short_name: 'QuichCash',
    description: 'The Easiest Way to Track Your Expenses, Loans and Subscriptions',
    start_url: '/signin',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
        {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
        },
        {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
        }
    ],
  }
}