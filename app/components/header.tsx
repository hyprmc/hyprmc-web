import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-emerald-600">MCServer</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link></li>
            <li><Link href="/" className="hover:text-emerald-600 transition-colors">Community</Link></li>
            <li><Link href="/" className="hover:text-emerald-600 transition-colors">Shop</Link></li>
            <li><Link href="/" className="hover:text-emerald-600 transition-colors">Support</Link></li>
          </ul>
        </nav>
        <Link href="/" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition-colors">
          Play Now
        </Link>
      </div>
    </header>
  )
}

