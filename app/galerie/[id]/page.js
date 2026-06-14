'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { artworks } from '@/data/artworks'

export default function ArtworkDetailPage({ params }) {
  const artwork = artworks.find((a) => a.id === parseInt(params.id))
  const [quantity, setQuantity] = useState(1)

  if (!artwork) {
    return (
      <>
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Œuvre non trouvée</h1>
            <Link href="/galerie" className="text-gold font-semibold hover:underline">
              ← Retour à la galerie
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const relatedArtworks = artworks
    .filter((a) => a.category === artwork.category && a.id !== artwork.id)
    .slice(0, 3)

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/galerie" className="text-gold font-semibold hover:underline mb-8 inline-block">
          ← Retour à la galerie
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 text-lg">{artwork.category}</span>
          </div>

          {/* Détails */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
            <p className="text-gold text-lg font-semibold mb-4">{artwork.category}</p>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-4xl font-bold text-gold mb-4">{artwork.price}€</p>
              <p className="text-gray-600 mb-4">{artwork.description}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <span className="font-semibold">Dimensions:</span> {artwork.dimensions}
              </div>
              <div>
                <span className="font-semibold">Technique:</span> {artwork.medium}
              </div>
              <div>
                <span className="font-semibold">Année:</span> {artwork.year}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 px-4 py-2 rounded font-semibold hover:bg-gray-300"
                >
                  −
                </button>
                <span className="text-xl font-semibold px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 px-4 py-2 rounded font-semibold hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-gold text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                🛒 Ajouter au panier
              </button>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                💬 Pour des questions sur cette œuvre ou pour une livraison personnalisée, 
                contactez-nous via la page de contact.
              </p>
            </div>
          </div>
        </div>

        {/* Œuvres recommandées */}
        {relatedArtworks.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Œuvres similaires</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArtworks.map((related) => (
                <Link key={related.id} href={`/galerie/${related.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                      <span className="text-gray-500">{related.category}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{related.title}</h3>
                      <p className="text-gold text-lg font-bold">{related.price}€</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
