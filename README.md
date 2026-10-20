# 🍋 Groupe Limonade — Refonte Intégrale & Site Web d'Excellence

> **Projet de refonte complète pour le Groupe Limonade (Québec, Canada)**  
> Conçu et codé en réponse directe à l'audit stratégique, technique et commercial du site `groupelimonade.com`.

---

## 🎯 Synthèse des Problèmes de l'Audit & Solutions Apportées

| Problème identifié dans l'audit | Solution concrète codée dans ce projet |
| :--- | :--- |
| **Positionnement flou (« Maître Franchiseur »)** qui ne parle ni aux clients ni aux entreprises | Remplacé par une promesse forte et engageante : **« 16 restaurants à Québec. Un seul groupe d'exception. »** |
| **3 publics mélangés sans aiguillage clair** | **Trois grandes portes d'accès immersives dès l'accueil** : 🍽️ Trouver un restaurant & Réserver • 🏢 Événements Corporatifs & Partys des Fêtes • 🤝 Devenir Franchisé & Investir. |
| **Incohérences de chiffres et de marques** (9 vs 11 vs 16, Tuscanos/Archibald oubliés ou doublés) | **Harmonisation rigoureuse des 16 adresses réelles** regroupées sous 8 enseignes emblématiques : *Archibald*, *Tuscanos*, *Sushix*, *Steak Avenue*, *Azur*, *Nacho Pub*, *Le Matin Gourmand*, *Coq & Rôtisserie*. Orthographe impeccable partout (*Petit-Champlain*, *viande braisée*, etc.). |
| **Urgence saisonnière ignorée (Fin d'année / Fêtes)** | **Bandeau d'alerte supérieur persistant & section dédiée « Partys des Fêtes 2026 »** avec formulaire qualifiant de soumission sous 24h ouvrées. |
| **Page Franchises qui ne vend pas la franchise** (sec, manque d'informations financières) | **Véritable portail B2B pour investisseurs** : fiches complètes par enseigne avec investissement total, mise de fonds requise, redevances d'exploitation (4,5% - 5%), fonds pub (1,5% - 2%), surfaces (pi²), centrale d'achats (-18%), **simulateur interactif de liquidités**, et **parcours d'intégration en 5 étapes**. |
| **Marque employeur invisible** (renvoyant à une bête recherche Indeed) | **Page Carrières dédiée** mettant en avant tous les avantages réels : **repas gratuit à chaque quart**, **stationnement gratuit**, **gym 100% payé**, passerelles de mobilité, pourboires, et module de candidature en 90 secondes avec 8 postes ouverts. |
| **Absence d'historique (« À propos »)** (effectif de 501 à 1 000 salariés non valorisé) | **Page Notre Histoire & Valeurs** retraçant les 15 ans d'existence (2011-2026), les 750+ collaborateurs, 1,2M+ clients servis/an et les engagements pour le terroir québécois. |
| **Cartes-cadeaux sous-exploitées** (lien tiers non valorisé) | **Page Cartes-Cadeaux Multi-adresses** avec simulateur de commande, **bonification corporative des Fêtes (+10% offert dès 1 000 $)** et vérificateur de solde instantané. |
| **Coordonnées manquantes & réseaux sociaux bruts** | Affichage du numéro direct **(418) 658-5366**, adresses courriels par service, formulaire avec motifs précis, et réseaux sociaux nettoyés (*Facebook, Instagram, LinkedIn, TikTok*). |
| **Pied de page cassé** (doublon de copyright et attribution bizarre) | **Pied de page institutionnel luxueux et propre** : `© 2026 Groupe Limonade Inc. Tous droits réservés.` |
| **Bilinguisme partiel** | **Sélecteur de langue instantané (FR / EN)** avec dictionnaire intégré et adaptation des labels. |

---

## 🚀 Fonctionnalités Clés du Site

1. **Architecture Modulaire SPA (Single Page Application)** :
   - Navigation instantanée sans rechargement lourd avec deep-linking (`#restaurants`, `#corporatif`, `#franchises`, `#carrieres`, `#cartes-cadeaux`, `#a-propos`, `#contact`).
   - Compatible avec tous les navigateurs modernes (Chrome, Safari, Edge, Firefox).

2. **Répertoire des 16 Adresses avec Recherche en Direct** :
   - Recherche textuelle instantanée par mot-clé (nom, plat, quartier).
   - Filtres par bannières culinaires (Microbrasserie, Italien, Sushi, Steakhouse, Mexicain, Déjeuner, Lounge).
   - Filtre par quartier (Sainte-Foy, Lebourgneuf, Vieux-Québec, Lac-Beauport, Saint-Roch, Beauport, Charlesbourg).
   - Filtres secondaires (Salons privés, Stationnement gratuit).
   - Modale détaillée avec photos, menu preview du Chef, horaires et lien direct Google Maps.

3. **Outil Interactif « Aidez-moi à choisir » (Corporatif)** :
   - Permet aux organisateurs de partys d'entreprise de sélectionner le nombre de convives (10 à 350+), l'ambiance désirée et le secteur, avec affichage instantané des salles compatibles.

4. **Simulateur d'Investissement Franchise** :
   - Curseur dynamique de liquidité personnelle disponible (100 000 $ à 600 000 $+).
   - Calcul en temps réel des enseignes accessibles et montage en prêt garanti BDC / CSBFP.

5. **Marque Employeur & Job Board** :
   - 8 offres d'emploi détaillées avec salaires et avantages.
   - Formulaire express de candidature spontanée.

6. **SEO & Données Structurées Schema.org** :
   - Balisage JSON-LD `Organization` complet.
   - Balises OpenGraph et Twitter Cards haute définition.
   - Balises hreflang déclarées (`fr-CA` / `en-CA`).

---

## 💻 Structure des Fichiers

```text
groupe-limonade-web/
├── index.html          # Page principale sémantique et responsive
├── css/
│   └── styles.css      # Design system moderne (Palette agrumes & ardoise chic)
├── js/
│   ├── data.js         # Données officielles structurées (16 restaurants, franchises, emplois)
│   └── app.js          # Moteur applicatif (Routage, filtres, simulateurs, modales, toasts)
├── serve.py            # Serveur local Python avec ouverture automatique du navigateur
├── start.bat           # Lanceur Windows en un double-clic
├── vercel.json         # Configuration prête pour déploiement cloud
└── README.md           # Documentation complète du projet
```

---

## 🖥️ Lancement en Local

### Option A — Le script en un clic (Recommandé sur Windows) :
Double-cliquez simplement sur le fichier **`start.bat`**. Le serveur se lancera et votre navigateur s'ouvrira automatiquement à l'adresse :  
👉 **`http://localhost:8080`**

### Option B — Via le terminal PowerShell / Invite de commandes :
```powershell
cd C:\Users\utilisateur\.gemini\antigravity\scratch\groupe-limonade-web
& "C:\Users\utilisateur\AppData\Local\Programs\Python\Python312\python.exe" serve.py
```

### Option C — Sans serveur :
Vous pouvez aussi double-cliquer directement sur **`index.html`** pour ouvrir le site localement dans votre navigateur !

---

## 🌐 Déploiement en Ligne (Vercel / Netlify / GitHub Pages)

Le projet contient un fichier `vercel.json` prêt à l'emploi. Pour le publier en ligne en 1 minute :
1. Créez un dépôt GitHub ou GitLab contenant ce dossier.
2. Liez-le à votre tableau de bord [Vercel](https://vercel.com) ou [Netlify](https://netlify.com).
3. Le site se déploie instantanément sans aucune étape complexe de compilation !
