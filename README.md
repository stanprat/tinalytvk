# Tinalytvk - Site Vitrine Galerie d'Art

Site vitrine moderne pour une galerie d'art présentant et vendant des œuvres uniques.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ installé

### Installation

```bash
# 1. Cloner le repository
git clone https://github.com/stanprat/tinalytvk.git
cd tinalytvk

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir http://localhost:3000 dans le navigateur
```

### Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
tinalytvk/
├── app/
│   ├── layout.js           # Layout global
│   ├── page.js             # Page d'accueil
│   ├── globals.css         # Styles globaux
│   ├── galerie/
│   │   ├── page.js         # Galerie complète
│   │   └── [id]/
│   │       └── page.js     # Détail d'une œuvre
│   └── contact/
│       └── page.js         # Page contact
├── components/
│   ├── Header.js           # Navigation
│   └── Footer.js           # Pied de page
├── data/
│   └── artworks.js         # Données des œuvres
├── public/
│   └── artworks/           # Images des œuvres
└── tailwind.config.js      # Configuration Tailwind
```

## ✏️ Gestion des œuvres

### Ajouter une œuvre

Modifier le fichier `data/artworks.js` :

```javascript
{
  id: 7,
  title: "Titre de l'œuvre",
  category: "Peinture",
  price: 300,
  image: "/artworks/7.jpg",
  description: "Description de l'œuvre",
  dimensions: "50cm x 70cm",
  medium: "Acrylique sur toile",
  year: 2024,
}
```

### Ajouter des images

1. Placer les images dans `public/artworks/`
2. Référencer dans `data/artworks.js` avec le chemin `/artworks/nomfichier.jpg`

## 🎨 Personnalisation

### Modifier les couleurs principales

Fichier `tailwind.config.js` :

```javascript
colors: {
  gold: '#d4af37', // Changez cette valeur
}
```

### Modifier le nom/titre

- Page d'accueil: `app/page.js`
- Métadonnées: `app/layout.js`

## 📊 Fonctionnalités

- ✅ Page d'accueil avec présentation
- ✅ Galerie complète avec filtres
- ✅ Recherche d'œuvres
- ✅ Pages détail pour chaque œuvre
- ✅ Design responsive (mobile/tablet/desktop)
- ✅ Contact formulaire
- ✅ SEO optimisé
- ⏳ Paiement en ligne (à intégrer)
- ⏳ Dashboard admin (optionnel)

## 🔒 Déploiement

### Sur Vercel (recommandé)

```bash
npm i -g vercel
vercel
```

### Sur Netlify

```bash
npm run build
# Uploader le dossier `.next`
```

## 📝 Notes pour l'artiste

- Vous pouvez modifier les œuvres directement dans `data/artworks.js`
- Les images doivent être en format JPG ou PNG
- La limite est d'environ 50 œuvres (optimisé pour votre besoin)
- Pour les achats, contactez manuellement les clients via le formulaire

## 🤝 Support

Pour des modifications ou questions: stanprat@github.com

## 📄 Licence

© 2024 Tinalytvk. Tous droits réservés.
