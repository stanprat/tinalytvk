'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold">
          ✨ Tinalytvk
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <Link href="/galerie" className="hover:text-gold transition">Galerie</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

        <button 
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
            <Link href="/" className="block py-2 hover:text-gold">Accueil</Link>
            <Link href="/galerie" className="block py-2 hover:text-gold">Galerie</Link>
            <Link href="/contact" className="block py-2 hover:text-gold">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
