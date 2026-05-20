import type { Metadata, Viewport } from 'next'
import { Urbanist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/context/cart-context'
import { AuthProvider } from '@/context/auth-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: "--font-urbanist"
});

export const metadata: Metadata = {
  title: {
    default: 'Volt | Premium Electronics & Accessories',
    template: '%s | Volt'
  },
  description: 'Discover premium electronics and accessories for the modern lifestyle. Shop headphones, smart watches, speakers, and more with free shipping on orders over $100.',
  keywords: ['electronics', 'headphones', 'smart watch', 'accessories', 'audio', 'tech'],
  openGraph: {
    title: 'Volt | Premium Electronics & Accessories',
    description: 'Discover premium electronics and accessories for the modern lifestyle.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
