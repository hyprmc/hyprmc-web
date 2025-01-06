import '../globals.css'
import '../styles/fonts.css'
import { Quicksand } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: 'HyprMC - Blog',
  description: 'Latest news and updates from our Minecraft server',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

