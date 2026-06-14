import './globals.css'

export const metadata = {
  title: 'Galerie Art - Œuvres Uniques',
  description: 'Découvrez et achetez les œuvres d\'art contemporain de nos artistes talentueux',
  keywords: 'art, galerie, peinture, sculpture, œuvres',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
