'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { artworks, categories } from '@/data/artworks'

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredArtworks = artworks.filter((artwork) => {
    const categoryMatch = selectedCategory === 'Tous' || artwork.category === selectedCategory
    const searchMatch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Galerie</h1>

        {/* Filtres */}
        <div className="mb-12">
          {/* Recherche */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Rechercher une œuvre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          {/* Catégories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-gold text-gray-900'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille d'œuvres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map((artwork) => (
              <Link key={artwork.id} href={`/galerie/${artwork.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer transform hover:scale-105">
                  <div className="bg-gray-300 h-64 flex items-center justify-center">
                    <span className="text-gray-500">{artwork.category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{artwork.category}</p>
                    <p className="text-gray-700 mb-4 line-clamp-2">{artwork.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gold">{artwork.price}€</span>
                      <button className="bg-gold text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition">
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Aucune œuvre trouvée</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
