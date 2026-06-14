# 📚 Guide Complet - Tinalytvk

Bienvenue! Ce guide vous accompagne étape par étape pour utiliser et gérer votre site vitrine.

## 🚀 Démarrage rapide (5 minutes)

### 1. Installer localement
```bash
git clone https://github.com/stanprat/tinalytvk.git
cd tinalytvk
npm install
npm run dev
```
Ouvrez http://localhost:3000 dans votre navigateur.

### 2. Déployer en ligne
- **Option simple**: Voir [DEPLOIEMENT.md](./DEPLOIEMENT.md)
- **Temps**: 10 minutes max
- **Coût**: Gratuit (Vercel ou Netlify)

### 3. Ajouter vos premières œuvres
- Voir [GESTION_OEUVRES.md](./GESTION_OEUVRES.md)
- Modifier `data/artworks.js`
- Uploader images dans `public/artworks/`

---

## 📖 Documentation complète

### Pour démarrer
| Document | Description | Temps |
|----------|-------------|-------|
| [README.md](./README.md) | Vue d'ensemble du projet | 5 min |
| [DEPLOIEMENT.md](./DEPLOIEMENT.md) | Comment mettre en ligne | 10 min |

### Pour utiliser
| Document | Description | Temps |
|----------|-------------|-------|
| [GESTION_OEUVRES.md](./GESTION_OEUVRES.md) | Ajouter/modifier œuvres | 10 min |
| [data/artworks.js](./data/artworks.js) | Fichier des données | - |
| [data/config.js](./data/config.js) | Configuration du site | - |

---

## 🎯 Tâches communes

### "Je veux ajouter une nouvelle œuvre"
1. Lire la section **Ajouter une nouvelle œuvre** dans [GESTION_OEUVRES.md](./GESTION_OEUVRES.md)
2. Uploader l'image sur GitHub
3. Ajouter les données dans `data/artworks.js`
4. C'est tout! 🎉

### "Je veux changer le prix d'une œuvre"
1. Aller sur GitHub: https://github.com/stanprat/tinalytvk
2. Ouvrir `data/artworks.js`
3. Cliquer le crayon (edit)
4. Modifier le prix
5. "Commit changes"

### "Je veux mettre mon site en ligne"
1. Lire [DEPLOIEMENT.md](./DEPLOIEMENT.md)
2. Créer compte sur Vercel
3. Connecter GitHub
4. Cliquer "Deploy"
5. Attendez 2 minutes ⏳

### "Je veux un domaine personnalisé"
1. Enregistrer sur Namecheap/OVH (~10€/an)
2. Voir section **Domaine personnalisé** dans [DEPLOIEMENT.md](./DEPLOIEMENT.md)

### "Je veux intégrer des paiements en ligne"
1. Nous configurerons Stripe/PayPal
2. Contactez: stanprat@github.com
3. Processus: 30 minutes de configuration

---

## 📁 Structure du projet

```
tinalytvk/
├── 📄 README.md                 # Vue d'ensemble
├── 📄 DEPLOIEMENT.md            # Comment déployer
├── 📄 GESTION_OEUVRES.md        # Gestion des œuvres
├── 📄 DEMARRAGE.md              # Ce fichier
│
├── app/                         # Code du site
│   ├── layout.js                # Layout global
│   ├── page.js                  # Page d'accueil
│   ├── globals.css              # Styles
│   ├── galerie/
│   │   ├── page.js              # Liste de toutes les œuvres
│   │   └── [id]/page.js         # Détail d'une œuvre
│   └── contact/page.js          # Page contact
│
├── components/                  # Composants réutilisables
│   ├── Header.js                # Barre de navigation
│   └── Footer.js                # Pied de page
│
├── data/                        # Données
│   ├── artworks.js              # 📍 VOS ŒUVRES ICI
│   └── config.js                # Configuration du site
│
├── public/
│   └── artworks/                # 📍 VOS IMAGES ICI
│
├── scripts/
│   └── add-artwork.js           # Script helper
│
├── package.json                 # Dépendances
└── tailwind.config.js           # Configuration Tailwind CSS
```

---

## ⚙️ Fichiers clés à modifier

### Pour votre contenu
- **`data/artworks.js`** ← Ajouter/modifier vos œuvres
- **`data/config.js`** ← Vos infos (nom, email, réseaux)
- **`public/artworks/`** ← Vos images
- **`app/page.js`** ← Personnaliser l'accueil

### Pour le design
- **`tailwind.config.js`** ← Couleurs, polices
- **`app/globals.css`** ← Styles globaux
- **`components/Header.js`** ← Navigation
- **`components/Footer.js`** ← Pied de page

---

## 🔧 Commandes utiles

```bash
# Développement local
npm run dev                 # Lancer le serveur (http://localhost:3000)

# Production
npm run build              # Compiler pour la production
npm start                  # Lancer version production

# Maintenance
npm run lint              # Vérifier les erreurs de code

# Helper script
node scripts/add-artwork.js    # Ajouter une œuvre interactivement
```

---

## 🌐 Technologies utilisées

- **Next.js 14**: Framework React moderne, SSR, performance
- **React 18**: Bibliothèque UI
- **Tailwind CSS**: Design épuré et responsive
- **Node.js**: Runtime JavaScript
- **Vercel**: Plateforme de déploiement (recommandée)

Avantages:
- ✅ SEO optimisé (Google, Pinterest)
- ✅ Chargement ultra-rapide
- ✅ Design responsive (mobile, tablet, desktop)
- ✅ Facile à maintenir
- ✅ Gratuit à déployer

---

## ❓ FAQ - Questions fréquentes

### Comment ajouter une œuvre?
→ Voir [GESTION_OEUVRES.md](./GESTION_OEUVRES.md) section "Ajouter une nouvelle œuvre"

### Où mettre les images?
→ Dossier `public/artworks/` sur GitHub

### Comment mettre à jour le site?
→ Modifier `data/artworks.js` sur GitHub → Vercel redéploie automatiquement

### Ça coûte combien?
→ Gratuit! (Vercel/Netlify gratuit, domaine ~10€/an en option)

### Puis-je vendre directement?
→ Actuellement: formulaire de contact
→ Futur: intégration Stripe/PayPal (on peut faire)

### Combien d'œuvres max?
→ Aucune limite théorique! (optimisé pour 50+)

### Les données sont sauvegardes?
→ Oui! GitHub backup automatique

### Qui a créé ce site?
→ Créé avec ❤️ pour vous
→ Support: stanprat@github.com

---

## 📞 Support et contact

### Besoin d'aide?
- 📧 Email: stanprat@github.com
- 🐙 GitHub Issues: https://github.com/stanprat/tinalytvk/issues
- 📖 Consulter la documentation (ce fichier)

### Signaler un bug?
- Créer une issue sur GitHub
- Décrire le problème en détail
- Nous répondons rapidement!

### Suggestions?
- Ouvrir une GitHub Discussion
- Nous adorons les retours!

---

## 🎓 Tutoriels pas-à-pas

### Tutorial 1: Ajouter votre première œuvre (10 min)
1. Aller sur `data/artworks.js`
2. Copier le bloc d'une œuvre existante
3. Modifier: id, title, category, price, description, dimensions, medium, year
4. Upload image dans `public/artworks/`
5. Modifier le chemin `image: "/artworks/votre-image.jpg"`
6. Commit!
7. Attendre 2 minutes
8. Vérifier sur le site

### Tutorial 2: Déployer sur Vercel (5 min)
1. https://vercel.com → Sign Up → GitHub
2. "New Project" → Sélectionner `tinalytvk`
3. "Deploy"
4. Attendre la fin ✅
5. Vous recevez une URL!

### Tutorial 3: Ajouter un domaine personnalisé (5 min)
1. Enregistrer domaine (Namecheap, OVH, etc.)
2. Vercel → Settings → Domains → Add
3. Suivre instructions DNS
4. Attendre 24h de propagation
5. C'est fait! 🎉

---

## 📊 Roadmap - Prochaines fonctionnalités

- [ ] Paiement en ligne (Stripe)
- [ ] Newsletter/Email marketing
- [ ] Analytics détaillées
- [ ] Blog pour actualités
- [ ] Commentaires/Avis
- [ ] Wishlist clients
- [ ] Admin dashboard
- [ ] Multi-langue (FR/EN)

---

## 📋 Checklist avant le lancement

- [ ] Site fonctionne localement
- [ ] Images optimisées et uploadées
- [ ] Toutes les œuvres ajoutées
- [ ] Infos de contact correctes
- [ ] Réseaux sociaux liés
- [ ] Email de contact fonctionne
- [ ] Tous les liens testés
- [ ] Tous les textes relus (orthographe)
- [ ] Domaine enregistré (optionnel)
- [ ] DNS configuré (optionnel)
- [ ] Livré à l'artiste! 🎉

---

## 📈 Prochaines étapes après le lancement

1. **Marketing**
   - Partager sur réseaux sociaux
   - Pinterest (parfait pour l'art!)
   - Instagram
   - Facebook

2. **SEO**
   - Ajouter Google Analytics
   - Soumettre sitemap
   - Vérifier indexation Google

3. **Ventes**
   - Répondre aux demandes de contact
   - Envisager paiement en ligne

4. **Maintenance**
   - Ajouter régulièrement œuvres
   - Mettre à jour les prix
   - Archiver les vendues

---

## 🎨 Personnalisation avancée

### Changer les couleurs
→ `tailwind.config.js` → `colors.gold`

### Changer les polices
→ `app/globals.css`

### Ajouter des sections
→ `app/page.js` (accueil) ou créer nouveau fichier

### Modifier le header/footer
→ `components/Header.js` / `components/Footer.js`

---

**Dernière mise à jour**: 14 Juin 2024  
**Version**: 1.0.0  
**Status**: ✅ Production Ready

Happy creating! 🎨✨
