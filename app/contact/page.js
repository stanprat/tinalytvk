import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contactez-moi</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envoyez un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Sujet du message"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button className="w-full bg-gold text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Envoyer
              </button>
            </form>
          </div>

          {/* Infos */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:contact@tinalytvk.com" className="text-gold hover:underline">
                  contact@tinalytvk.com
                </a>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                <a href="tel:+33612345678" className="text-gold hover:underline">
                  +33 6 12 34 56 78
                </a>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Réseaux sociaux</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gold hover:underline">Instagram</a>
                  <a href="#" className="text-gold hover:underline">Facebook</a>
                  <a href="#" className="text-gold hover:underline">LinkedIn</a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Horaires</h3>
                <p className="text-gray-600">
                  Lundi - Vendredi: 9h - 17h<br />
                  Samedi: 10h - 16h<br />
                  Dimanche: Fermé
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Acceptez-vous les commandes personnalisées ?</h3>
              <p className="text-gray-600">Oui, je serais ravi de discuter de projets personnalisés. Contactez-moi pour détailler votre vision.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Quelle est la politique de livraison ?</h3>
              <p className="text-gray-600">La livraison dépend de la taille et de la localisation. Nous discuterons des modalités lors de la commande.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Puis-je négocier les prix ?</h3>
              <p className="text-gray-600">Les prix sont fixes, mais nous pouvons discuter de tarifs spéciaux pour les achats multiples.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
