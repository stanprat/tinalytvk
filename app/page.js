import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenue dans ma galerie</h1>
          <p className="text-xl text-gray-300 mb-8">Découvrez mes œuvres d'art uniques et passionnantes</p>
          <a href="/galerie" className="inline-block bg-gold text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Voir la galerie
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">À propos</h2>
            <p className="text-gray-600 mb-4">
              Passionnée par l'art depuis l'enfance, j'ai développé mon propre style unique 
              qui fusionne les techniques classiques avec une sensibilité contemporaine.
            </p>
            <p className="text-gray-600 mb-4">
              Chaque œuvre est créée avec soin et réflexion, reflétant mon amour pour la beauté 
              et l'expression créative.
            </p>
            <p className="text-gray-600">
              Je vous invite à explorer ma collection et à découvrir les histoires derrière chaque création.
            </p>
          </div>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Photo de profil de l'artiste</span>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Œuvres en vedette</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <img src="/profil/tina.jpg" alt="Photo de profil" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Titre de l'œuvre</h3>
                  <p className="text-gray-600 mb-4">Description courte de l'œuvre</p>
                  <a href="/galerie" className="text-gold font-semibold hover:underline">
                    Voir les détails →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
