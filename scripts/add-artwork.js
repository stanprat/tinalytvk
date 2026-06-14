#!/usr/bin/env node

/**
 * Script simple pour ajouter rapidement une œuvre
 * Usage: node add-artwork.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log('\n🎨 Ajouter une nouvelle œuvre\n');

  const title = await question('Titre de l\'œuvre: ');
  const category = await question('Catégorie (Peinture/Sculpture/Dessin/Photographie/Mixte): ');
  const price = await question('Prix (€): ');
  const image = await question('Nom du fichier image (/artworks/...): ');
  const description = await question('Description: ');
  const dimensions = await question('Dimensions: ');
  const medium = await question('Technique/Matériau: ');
  const year = await question('Année: ');

  const artworksPath = path.join(__dirname, 'data', 'artworks.js');
  let content = fs.readFileSync(artworksPath, 'utf-8');

  // Trouver le dernier ID
  const idMatches = content.match(/id: (\d+)/g);
  const lastId = Math.max(...idMatches.map((m) => parseInt(m.match(/\d+/)[0])));

  const newArtwork = `  {
    id: ${lastId + 1},
    title: "${title}",
    category: "${category}",
    price: ${parseInt(price)},
    image: "${image}",
    description: "${description}",
    dimensions: "${dimensions}",
    medium: "${medium}",
    year: ${parseInt(year)},
  },`;

  // Insérer avant le export
  content = content.replace(/export const categories/m, `${newArtwork}\n\nexport const categories`);

  fs.writeFileSync(artworksPath, content);

  console.log('\n✅ Œuvre ajoutée avec succès!');
  console.log(`📝 ID: ${lastId + 1}`);
  console.log(`📋 Titre: ${title}`);
  console.log(`💰 Prix: ${price}€\n`);

  rl.close();
}

main().catch(console.error);
