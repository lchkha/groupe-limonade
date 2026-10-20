// Données officielles et structurées - Groupe Limonade (Québec, Canada)
// 16 adresses, 8 bannières de référence, offres corporatives, franchises et carrières

const LIMONADE_DATA = {
  info: {
    name: "Groupe Limonade",
    taglineFr: "16 restaurants à Québec. Un seul groupe d'exception.",
    taglineEn: "16 restaurants in Québec City. One exceptional hospitality group.",
    subtaglineFr: "Microbrasserie, cuisine italienne, sushi contemporain, steakhouse urbain, mexicain festif et déjeuners gourmands.",
    subtaglineEn: "Craft brewery, authentic Italian, contemporary sushi, urban steakhouse, festive Mexican, and gourmet breakfasts.",
    phone: "(418) 658-5366",
    tollFree: "1 (800) 568-LEMON",
    emailInfo: "info@groupelimonade.com",
    emailCorpo: "evenements@groupelimonade.com",
    emailFranchise: "franchise@groupelimonade.com",
    emailRh: "carrieres@groupelimonade.com",
    headquarters: "2875 Boulevard Laurier, Suite 450, Québec (QC) G1V 2M2",
    officeHours: "Lundi au vendredi : 8h30 - 17h00 | Service corporatif 7j/7",
    socials: {
      facebook: "https://facebook.com/groupelimonadeqc",
      instagram: "https://instagram.com/groupelimonade",
      linkedin: "https://linkedin.com/company/groupe-limonade",
      tiktok: "https://tiktok.com/@groupelimonade"
    },
    metrics: {
      restaurantsCount: 16,
      employeesCount: "750+",
      yearsExperience: "15+",
      guestsServedAnnual: "1.2M+",
      satisfactionRate: "98.4%",
      googleRatingAverage: "4.7 / 5"
    }
  },

  // 16 Restaurants réels et harmonisés du Groupe Limonade
  restaurants: [
    {
      id: "archibald-sainte-foy",
      brandId: "archibald",
      name: "Archibald Microbrasserie — Sainte-Foy",
      brandName: "Archibald Microbrasserie",
      neighborhood: "Sainte-Foy",
      address: "1020 Route de l'Église, Québec (QC) G1V 3V9",
      phone: "(418) 653-4333",
      cuisine: "Microbrasserie & Terroir québécois",
      cuisineType: "pub",
      capacity: 320,
      privateRoom: true,
      privateRoomCapacity: "Salle Le Refuge (jusqu'à 90 personnes)",
      priceRange: "$$",
      rating: 4.8,
      reviewsCount: 1420,
      features: ["Stationnement gratuit", "Salle privée équipée", "Écrans & Micros", "Terrasse estivale", "Bières artisanales québécoises", "Partys des Fêtes"],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "L'ambiance incomparable d'un chalet de bois rond chic au cœur de Sainte-Foy. Idéal pour les grands rassemblements d'équipe, partys de bureau de Noël et soupers festifs avec bières médaillées.",
      descriptionEn: "The unmatched cozy atmosphere of an upscale log lodge in the heart of Sainte-Foy. Ideal for large team gatherings, holiday parties, and craft beer celebrations.",
      popularDishes: ["Bavette de boeuf vieillie sauce stout", "Burger du Chasseur", "Tartare de saumon à la bière blanche", "Palette de dégustation 6 bières"],
      hours: "Dimanche au jeudi: 11h00 - 23h00 | Vendredi & samedi: 11h00 - 01h00"
    },
    {
      id: "archibald-lac-beauport",
      brandId: "archibald",
      name: "Archibald Microbrasserie — Lac-Beauport",
      brandName: "Archibald Microbrasserie",
      neighborhood: "Lac-Beauport",
      address: "1025 Boulevard du Lac, Lac-Beauport (QC) G3B 0X5",
      phone: "(418) 841-2226",
      cuisine: "Microbrasserie & Rôtisserie de montagne",
      cuisineType: "pub",
      capacity: 280,
      privateRoom: true,
      privateRoomCapacity: "Mezzanine Boréale (jusqu'à 75 personnes)",
      priceRange: "$$",
      rating: 4.9,
      reviewsCount: 2150,
      features: ["Vue panoramique", "Stationnement gratuit", "Terrasse au bord de l'eau", "Salle corporative", "Foyer au bois", "Partys des Fêtes"],
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Le berceau historique de la marque Archibald. Cadre grandiose entre lac et montagnes, feux de foyer, cuisine réconfortante et ambiance festive inoubliable pour vos événements d'affaires.",
      descriptionEn: "The legendary home of Archibald. Breathtaking scenery between lake and mountains, roaring fireplaces, comforting cuisine, and memorable festive atmosphere.",
      popularDishes: ["Joue de boeuf braisée 12h à la Joufflue", "Fish & Chips à la Valkyrie", "Fondue au fromage et bière", "Planche boréale"],
      hours: "7 jours sur 7 : 11h00 - 23h00 (Vendredi/Samedi jusqu'à 00h30)"
    },
    {
      id: "archibald-lebourgneuf",
      brandId: "archibald",
      name: "Archibald Microbrasserie — Lebourgneuf",
      brandName: "Archibald Microbrasserie",
      neighborhood: "Lebourgneuf",
      address: "5450 Boulevard des Galeries, Québec (QC) G2K 2B8",
      phone: "(418) 628-8880",
      cuisine: "Microbrasserie moderne & Grillades",
      cuisineType: "pub",
      capacity: 340,
      privateRoom: true,
      privateRoomCapacity: "Salon des Maîtres Brasseurs (jusqu'à 110 personnes)",
      priceRange: "$$",
      rating: 4.7,
      reviewsCount: 1680,
      features: ["Pôle d'affaires Lebourgneuf", "Stationnement gratuit 200+ places", "Équipement audio-vidéo HD", "Salles modulables", "Bar central circulaire"],
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Situé stratégiquement dans le parc d'affaires de Lebourgneuf, le lieu de prédilection des entreprises pour leurs 5 à 7, lancements de projets et banquets corporatifs de fin d'année.",
      descriptionEn: "Centrally located in Lebourgneuf business district, the top destination for business after-works, corporate launches, and holiday banquets.",
      popularDishes: ["Côtes levées caramélisées à l'ambrée", "Poutine pulled pork au canard", "Tartare de boeuf érable et chipotle"],
      hours: "Lundi au mercredi: 11h00 - 23h00 | Jeudi au samedi: 11h00 - 01h00 | Dimanche: 11h00 - 22h00"
    },
    {
      id: "tuscanos-sainte-foy",
      brandId: "tuscanos",
      name: "Tuscanos Restaurant Italien",
      brandName: "Tuscanos",
      neighborhood: "Sainte-Foy",
      address: "1445 Avenue Maguire, Québec (QC) G1T 1Z2",
      phone: "(418) 688-5555",
      cuisine: "Cuisine Italienne raffinée & Pâtes fraîches",
      cuisineType: "italien",
      capacity: 190,
      privateRoom: true,
      privateRoomCapacity: "Salon Toscane (jusqu'à 60 personnes en formule assise)",
      priceRange: "$$$",
      rating: 4.8,
      reviewsCount: 980,
      features: ["Four à pizza traditionnel", "Carte des vins d'importation privée", "Salon privé d'affaires", "Stationnement réservé", "Service traiteur"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "L'authenticité toscane réinventée. Pâtes fraîches confectionnées chaque jour, sauces mijotées, carpaccios et viandes nobles dans un cadre intimiste et chaleureux, plébiscité par les gens d'affaires.",
      descriptionEn: "Authentic Tuscan dining reinvented. Fresh handmade pasta daily, slow-simmered sauces, prime cuts, and an exquisite private dining salon for corporate dinners.",
      popularDishes: ["Linguine aux fruits de mer fraîches", "Veau alla Parmigiana classique", "Osso buco braisé gremolata", "Tiramisu traditionnel maison"],
      hours: "Mardi au vendredi: 11h30 - 22h00 | Samedi & dimanche: 16h30 - 22h30"
    },
    {
      id: "azur-lebourgneuf",
      brandId: "azur",
      name: "Azur Restaurant & Bar Lounge",
      brandName: "Azur",
      neighborhood: "Lebourgneuf",
      address: "5600 Boulevard des Gradins, Québec (QC) G2J 1C8",
      phone: "(418) 627-7711",
      cuisine: "Méditerranéen contemporain & Bar Lounge",
      cuisineType: "lounge",
      capacity: 220,
      privateRoom: true,
      privateRoomCapacity: "Lounge VIP Azur (jusqu'à 70 personnes en cocktail dînatoire)",
      priceRange: "$$$",
      rating: 4.7,
      reviewsCount: 840,
      features: ["Terrasse chauffée 4 saisons", "Mixologie d'avant-garde", "DJ sets le week-end", "Formules cocktail dînatoire", "Stationnement gratuit"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Une parenthèse lumineuse aux accents de la Côte d'Azur et des îles grecques. Poissons nobles, grillades marinées et cocktails créatifs dans une ambiance lounge chic et vibrante.",
      descriptionEn: "A bright escape inspired by the French Riviera and Aegean islands. Fresh seafood, Mediterranean skewers, and signature mixology in a chic lounge vibe.",
      popularDishes: ["Poulpe grillé à la braise et huile de thym", "Filet de loup de mer aux agrumes", "Plateau mezzé méditerranéen", "Cocktail Signature Limonade Azur"],
      hours: "Mercredi au vendredi: 11h30 - 23h30 | Samedi: 17h00 - 01h00 | Fermé lun/mar"
    },
    {
      id: "sushix-vieux-quebec",
      brandId: "sushix",
      name: "Sushix — Vieux-Québec",
      brandName: "Sushix",
      neighborhood: "Vieux-Québec",
      address: "48 Rue Saint-Louis, Québec (QC) G1R 3Z1",
      phone: "(418) 692-7874",
      cuisine: "Fusion Japonaise & Sushi Bar haut de gamme",
      cuisineType: "asiatique",
      capacity: 130,
      privateRoom: true,
      privateRoomCapacity: "Salon Omakase (jusqu'à 35 personnes)",
      priceRange: "$$$",
      rating: 4.8,
      reviewsCount: 1290,
      features: ["Emplacement patrimonial", "Comptoir Omakase", "Importations privées de sakés", "Menu dégustation 5 services", "Ambiance feutrée"],
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "L'art du sushi élevé au rang d'expérience gastronomique. Poissons de pêche éco-responsable, makis signatures flambés à table et sélection exclusive de sakés japonais dans le Vieux-Québec.",
      descriptionEn: "The art of sushi elevated to culinary performance. Sustainable fresh catches, torched signature rolls, and curated Japanese sakes in Old Québec.",
      popularDishes: ["Plateau Signature Sushix 36 morceaux du Chef", "Tartare de thon rouge épicé croustillant", "Tataki de boeuf Wagyu québécois", "Black Cod mariné au miso doux"],
      hours: "7 soirs sur 7 : 17h00 - 22h30 | Vendredi & samedi jusqu'à 23h00"
    },
    {
      id: "sushix-sainte-foy",
      brandId: "sushix",
      name: "Sushix — Sainte-Foy Laurier",
      brandName: "Sushix",
      neighborhood: "Sainte-Foy",
      address: "2700 Boulevard Laurier, Québec (QC) G1V 2L8",
      phone: "(418) 650-7874",
      cuisine: "Fusion Japonaise & Poke Bowls créatifs",
      cuisineType: "asiatique",
      capacity: 160,
      privateRoom: true,
      privateRoomCapacity: "Espace Tokyô (jusqu'à 50 personnes)",
      priceRange: "$$",
      rating: 4.7,
      reviewsCount: 910,
      features: ["Face au CHUL et universités", "Stationnement intérieur gratuit", "Menu midi d'affaires rapide", "Terrasse", "Commandes à emporter & traiteur"],
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Le rendez-vous moderne des dîners d'affaires et soupers branchés à Sainte-Foy. Des créations visuelles éblouissantes, des pokés débordants de fraîcheur et un service irréprochable.",
      descriptionEn: "The contemporary hub for business lunches and dinner gatherings in Sainte-Foy. Stunning visual presentations, vibrant poke bowls, and flawless service.",
      popularDishes: ["Rouleau Dragon Impérial", "Poke Bowl Saumon Flambé Avocat", "Gyoza artisanaux au porc et gingembre", "Plateau corporatif d'affaires"],
      hours: "Lundi au vendredi: 11h30 - 22h00 | Samedi & dimanche: 16h30 - 22h00"
    },
    {
      id: "nacho-pub-saint-roch",
      brandId: "nacho-pub",
      name: "Nacho Pub & Cantina — Saint-Roch",
      brandName: "Nacho Pub",
      neighborhood: "Saint-Roch",
      address: "780 Rue Saint-Joseph Est, Québec (QC) G1K 3C3",
      phone: "(418) 522-6224",
      cuisine: "Mexicain festif & Bar à Margaritas",
      cuisineType: "mexicain",
      capacity: 180,
      privateRoom: true,
      privateRoomCapacity: "La Cantina Privada (jusqu'à 55 personnes)",
      priceRange: "$$",
      rating: 4.7,
      reviewsCount: 1540,
      features: ["Ambiance festive & DJ", "Bar de 60+ tequilas et mezcals", "Formules à volonté corporatives", "Terrasse sur rue Saint-Joseph", "Idéal partys festifs"],
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "L'énergie festive mexicaine en plein quartier Saint-Roch ! Tacos gourmets maison, nacho géant gratiné 3 étages, fajitas flambées et margaritas shaker à la main pour des partys survoltés.",
      descriptionEn: "Vibrant Mexican fiesta right in Saint-Roch! Gourmet artisanal tacos, giant 3-tier loaded nachos, sizzling fajitas, and handcrafted margaritas for high-energy celebrations.",
      popularDishes: ["Le Méga Nacho Limonade au boeuf braisé", "Tacos Al Pastor ananas rôti", "Fajitas mixtes flambées à la tequila", "Margarita Picante mangue habanero"],
      hours: "Mardi au jeudi: 16h00 - 23h00 | Vendredi & samedi: 16h00 - 02h00 | Dimanche: 16h00 - 22h00"
    },
    {
      id: "nacho-pub-beauport",
      brandId: "nacho-pub",
      name: "Nacho Pub & Cantina — Beauport",
      brandName: "Nacho Pub",
      neighborhood: "Beauport",
      address: "2485 Boulevard Sainte-Anne, Québec (QC) G1J 1Y4",
      phone: "(418) 660-6224",
      cuisine: "Mexicain authentique & Grillades latines",
      cuisineType: "mexicain",
      capacity: 210,
      privateRoom: true,
      privateRoomCapacity: "Hacienda Room (jusqu'à 80 personnes)",
      priceRange: "$$",
      rating: 4.6,
      reviewsCount: 890,
      features: ["Stationnement gratuit 150 places", "Salle corporative avec projecteur", "Menu enfants & familles", "Partys d'entreprise de 20 à 100 personnes"],
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "La version spacieuse et chaleureuse du Nacho Pub à Beauport. Parfait pour les fêtes d'équipe, anniversaires et rassemblements d'entreprises de la rive-nord avec stationnement aisé.",
      descriptionEn: "The spacious and welcoming Beauport location. Perfect for company milestones, birthdays, and large groups seeking generous Mexican feasts.",
      popularDishes: ["Quesadillas au poulet chipotle fumé", "Burrito Gigante carnitas", "Churros dorés sauce dulce de leche"],
      hours: "Mercredi au dimanche: 16h30 - 22h30 (Vendredi/Samedi jusqu'à minuit)"
    },
    {
      id: "steak-avenue-lebourgneuf",
      brandId: "steak-avenue",
      name: "Steak Avenue — Grand Steakhouse Lebourgneuf",
      brandName: "Steak Avenue",
      neighborhood: "Lebourgneuf",
      address: "825 Boulevard Lebourgneuf, Québec (QC) G2J 0B9",
      phone: "(418) 626-7832",
      cuisine: "Steakhouse haut de gamme & Poissons frais",
      cuisineType: "steakhouse",
      capacity: 250,
      privateRoom: true,
      privateRoomCapacity: "Salons Privés Wall Street & Manhattan (20 à 120 convives)",
      priceRange: "$$$$",
      rating: 4.9,
      reviewsCount: 1720,
      features: ["Chambre de vieillissement à sec vitrée", "Cellier de 1200 bouteilles", "Salons privés VIP climatisés", "Stationnement avec voiturier le week-end", "Partys des Fêtes corporatifs"],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Le grand steakhouse de réputation à Québec. Bœufs canadiens certifiés AAA et Wagyu vieillis 45 jours à sec sur place, queue de homard atlantique et service gants blancs pour réceptions d'envergure.",
      descriptionEn: "Québec City's premier classic steakhouse. Certified AAA Canadian beef & Wagyu dry-aged 45 days in-house, Atlantic lobster tails, and white-glove executive hospitality.",
      popularDishes: ["Tomahawk 40 oz pour deux", "Filet Mignon 8 oz Rossini au foie gras", "Queue de homard du Québec rôtie au beurre d'ail", "Pommes purée truffée maison"],
      hours: "Mardi au vendredi: 11h30 - 14h00 & 17h00 - 22h30 | Samedi & dimanche: 17h00 - 23h00"
    },
    {
      id: "steak-avenue-laurier",
      brandId: "steak-avenue",
      name: "Steak Avenue — Place Laurier",
      brandName: "Steak Avenue",
      neighborhood: "Sainte-Foy",
      address: "2740 Boulevard Laurier, Québec (QC) G1V 4P7",
      phone: "(418) 658-7832",
      cuisine: "Steakhouse urbain & Bar à huîtres",
      cuisineType: "steakhouse",
      capacity: 180,
      privateRoom: true,
      privateRoomCapacity: "Salon Club Laurier (jusqu'à 45 personnes)",
      priceRange: "$$$$",
      rating: 4.8,
      reviewsCount: 940,
      features: ["Bar central élégant", "Bar à huîtres fraîches de l'Atlantique", "Salles privées pour dîners d'affaires", "Stationnement étagé sécurisé"],
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Un sanctuaire de goût pour les amateurs de grillades d'exception. Idéal pour conclure un contrat d'affaires, fêter les réussites annuelles ou célébrer un moment mémorable en toute discrétion.",
      descriptionEn: "An upscale sanctuary for fine grill connoisseurs. Ideal for sealing business deals, celebrating annual company wins, or intimate luxury dinners.",
      popularDishes: ["Faux-filet Ribeye cowboy cut 18 oz", "Tourte de fruits de mer royale", "Plateau d'huîtres fraîches Rockefeller", "Crème brûlée vanille de Madagascar"],
      hours: "Mardi au samedi : 17h00 - 22h30"
    },
    {
      id: "matin-gourmand-sainte-foy",
      brandId: "matin-gourmand",
      name: "Le Matin Gourmand — Sainte-Foy",
      brandName: "Le Matin Gourmand",
      neighborhood: "Sainte-Foy",
      address: "990 Avenue de Bourgogne, Québec (QC) G1W 2L5",
      phone: "(418) 651-6284",
      cuisine: "Déjeuners d'affaires & Brunchs gourmands québécois",
      cuisineType: "dejeuner",
      capacity: 170,
      privateRoom: true,
      privateRoomCapacity: "Verrière Matinale (jusqu'à 40 personnes pour petits-déjeuners corporatifs)",
      priceRange: "$$",
      rating: 4.7,
      reviewsCount: 1110,
      features: ["Ouvert dès 6h30 en semaine", "Petits-déjeuners d'affaires et conférences", "Café barista de micro-torréfacteur de Québec", "Stationnement gratuit"],
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Le rendez-vous préféré des lève-tôt et des réunions matinales inspirantes à Sainte-Foy. Oeufs bénédictine nappés de hollandaise minute, crêpes bretonnes, gaufres et jus pressés à froid.",
      descriptionEn: "The favorite morning spot for early birds and inspiring business breakfast meetings in Sainte-Foy. Artisanal eggs benedict, sweet and savory crêpes, and cold-pressed juices.",
      popularDishes: ["Bénédictine au canard confit et fromage d'ici", "La Gaufre Suprême petits fruits et érable pur", "Skillet campagnard aux deux saucisses"],
      hours: "Lundi au vendredi: 6h30 - 14h30 | Samedi & dimanche: 7h00 - 15h00"
    },
    {
      id: "matin-gourmand-beauport",
      brandId: "matin-gourmand",
      name: "Le Matin Gourmand — Beauport",
      brandName: "Le Matin Gourmand",
      neighborhood: "Beauport",
      address: "3200 Rue Clemenceau, Québec (QC) G1C 7B6",
      phone: "(418) 666-6284",
      cuisine: "Brunch du terroir & Déjeuners conviviaux",
      cuisineType: "dejeuner",
      capacity: 160,
      privateRoom: false,
      privateRoomCapacity: "Section privatisable jusqu'à 35 personnes",
      priceRange: "$$",
      rating: 4.8,
      reviewsCount: 780,
      features: ["Stationnement gratuit", "Terrasse ensoleillée", "Menu santé & options véganes", "Service ultra-rapide pour gens pressés"],
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Des matinées douces et généreuses aux portes de l'Île d'Orléans. Ingrédients frais des fermes environnantes, sirops d'érable d'érablières locales et accueil chaleureux typiquement québécois.",
      descriptionEn: "Generous and heartwarming breakfasts near Île d'Orléans. Fresh farm eggs, local maple syrups, and genuinely warm Québécois hospitality.",
      popularDishes: ["Cassolette du Bûcheron québécois", "Pain doré brioché mascarpone & framboises", "Smoothie boréal bleuets sauvages"],
      hours: "7 jours sur 7 : 7h00 - 14h30"
    },
    {
      id: "coq-rotisserie-charlesbourg",
      brandId: "coq-rotisserie",
      name: "Coq & Rôtisserie Rustique — Charlesbourg",
      brandName: "Coq & Rôtisserie Rustique",
      neighborhood: "Charlesbourg",
      address: "8500 Boulevard Henri-Bourassa, Québec (QC) G1G 4E2",
      phone: "(418) 623-2678",
      cuisine: "Rôtisserie traditionnelle québécoise & Poulet de grain",
      cuisineType: "rotisserie",
      capacity: 190,
      privateRoom: true,
      privateRoomCapacity: "Salle Familiale & Corporative (jusqu'à 60 personnes)",
      priceRange: "$$",
      rating: 4.7,
      reviewsCount: 1330,
      features: ["Stationnement 100 places", "Service au volant express", "Comptoir traiteur pour événements d'entreprise", "Salle privée équipée"],
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Le véritable poulet de grain rôti sur broche lentement, doré à souhait et assaisonné d'herbes boréales. Sauces maison savoureuses, frites coupées sur place et service traiteur clé en main pour entreprises.",
      descriptionEn: "Authentic grain-fed rotisserie chicken slow-roasted on spits, seasoned with boreal spices. Crisp house fries, rich gravy, and full corporate catering services.",
      popularDishes: ["Le Repas Cuissot de grain fumé érable", "Poutine au poulet effiloché et fromage en grains frais", "Sandwich Hot Chicken réinventé au pain brioché"],
      hours: "7 jours sur 7 : 11h00 - 21h30"
    },
    {
      id: "coq-rotisserie-lebourgneuf",
      brandId: "coq-rotisserie",
      name: "Coq & Rôtisserie Rustique — Lebourgneuf",
      brandName: "Coq & Rôtisserie Rustique",
      neighborhood: "Lebourgneuf",
      address: "1200 Boulevard Lebourgneuf, Québec (QC) G2K 2M6",
      phone: "(418) 624-2678",
      cuisine: "Rôtisserie moderne & Plats à emporter pour bureaux",
      cuisineType: "rotisserie",
      capacity: 175,
      privateRoom: true,
      privateRoomCapacity: "Salon corporatif (jusqu'à 45 personnes)",
      priceRange: "$$",
      rating: 4.6,
      reviewsCount: 820,
      features: ["Boîtes à lunch corporatives pour réunions", "Livraison express en entreprise", "Stationnement gratuit", "Terrasse d'été"],
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "La référence de Lebourgneuf pour les déjeuners et dîners d'équipe sans attente. Boîtes à lunch gourmandes, buffets de poulet rôti pour vos réunions et accueil courtois.",
      descriptionEn: "Lebourgneuf's go-to for quick team lunches and corporate hot lunch boxes. Delicious, wholesome, and dependable.",
      popularDishes: ["Boîte à lunch Affaires Poulet Rôti", "Salade César au poulet grillé croustillant", "Quart poitrine et sauce barbecue maison"],
      hours: "Lundi au dimanche : 11h00 - 21h00"
    },
    {
      id: "speakeasy-vieux-quebec",
      brandId: "cocktails",
      name: "Le Petit Champlain — Bar à Cocktails & Speakeasy",
      brandName: "Le Petit Champlain Speakeasy",
      neighborhood: "Vieux-Québec",
      address: "32 Rue du Petit-Champlain, Québec (QC) G1K 4H4",
      phone: "(418) 694-5366",
      cuisine: "Haute Mixologie, Spiritueux québécois & Bouchées gastronomiques",
      cuisineType: "lounge",
      capacity: 95,
      privateRoom: true,
      privateRoomCapacity: "Privatisation complète possible (jusqu'à 95 personnes en 5 à 7 VIP)",
      priceRange: "$$$",
      rating: 4.9,
      reviewsCount: 870,
      features: ["Cadre voûté en pierre du 18e siècle", "Mixologues primés internationalement", "Ateliers dégustation et cocktails", "Idéal pour réceptions privées prestigieuses"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
      descriptionFr: "Niché sous les voûtes de pierre séculaires du quartier Petit-Champlain. Un repaire secret d'exception dédié aux spiritueux artisanaux du Québec et à l'art du cocktail haute voltige.",
      descriptionEn: "Tucked beneath historic 18th-century stone vaults in the Petit-Champlain district. An intimate speakeasy celebrating Québec craft spirits and world-class mixology.",
      popularDishes: ["Cocktail 'Limonade Noire' fumé au cèdre", "Old Fashioned au gin québécois & sirop de bouleau", "Plateau de charcuteries fines et fromages d'ici", "Huitres Rockefeller chaudes"],
      hours: "Mardi au dimanche : 17h00 - 02h00"
    }
  ],

  // 8 Bannières / Enseignes du Groupe pour le volet Franchise & Investisseurs
  franchiseBrands: [
    {
      id: "archibald",
      name: "Archibald Microbrasserie",
      tagline: "La microbrasserie québécoise par excellence — Rentabilité et notoriété éprouvées",
      category: "Microbrasserie, Resto-Pub & Spectacles",
      surfaceMinMax: "5 000 à 7 500 pi²",
      totalInvestment: "1 400 000 $ à 2 200 000 $",
      downPayment: "350 000 $ à 550 000 $",
      royaltyRate: "4.5 %",
      adFundRate: "2.0 %",
      currentUnits: "3 bannières en exploitation directe + réseau de distribution",
      targetTerritories: "Lévis, Trois-Rivières, Sherbrooke, Chicoutimi, Rive-Nord de Montréal",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Marque emblématique québécoise avec une notoriété spontanée de plus de 82%",
        "Synergies majeures sur les approvisionnements en bières et boissons",
        "Modèle économique à fort volume : capacité de 250 à 350 places assises",
        "Rentabilité opérationnelle (EBITDA) moyenne supérieure aux standards du secteur"
      ]
    },
    {
      id: "tuscanos",
      name: "Tuscanos Restaurant Italien",
      tagline: "L'art de vivre italien contemporain — Forte fidélité et marges brutes élevées",
      category: "Cuisine Italienne & Pâtes Fraîches",
      surfaceMinMax: "3 200 à 4 800 pi²",
      totalInvestment: "750 000 $ à 1 200 000 $",
      downPayment: "200 000 $ à 300 000 $",
      royaltyRate: "5.0 %",
      adFundRate: "1.5 %",
      currentUnits: "Enseigne établie avec salon corporatif d'affaires",
      targetTerritories: "Québec Ouest, Lévis, Gatineau, Saint-Hyacinthe",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Excellente marge brute grâce à la fabrication de pâtes fraîches et pizzas artisanales",
        "Ticket moyen élevé le midi comme le soir",
        "Clientèle corporative et d'affaires récurrente en semaine",
        "Amortissement rapide et processus de cuisine standardisé hautement efficace"
      ]
    },
    {
      id: "azur",
      name: "Azur Restaurant & Lounge",
      tagline: "L'ambiance méditerranéenne raffinée — Destination 5 à 7 et soirées tendance",
      category: "Lounge contemporain & Méditerranéen",
      surfaceMinMax: "3 500 à 5 000 pi²",
      totalInvestment: "850 000 $ à 1 350 000 $",
      downPayment: "220 000 $ à 350 000 $",
      royaltyRate: "5.0 %",
      adFundRate: "2.0 %",
      currentUnits: "1 unité phare avec terrasse 4 saisons",
      targetTerritories: "Capitale-Nationale, Rive-Sud de Montréal, Laval",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Part de ventes bar/boissons supérieure à 45%, génératrice de profits nets substantiels",
        "Terrasse estivale et salon dînatoire très recherchés pour les 5 à 7 de bureaux",
        "Image de marque glamour et forte attractivité sur les réseaux sociaux (Instagram & TikTok)"
      ]
    },
    {
      id: "sushix",
      name: "Sushix Fusion",
      tagline: "Le sushi moderne réinventé — Modèle agile, emporter et salle",
      category: "Fusion Japonaise & Poke Bar",
      surfaceMinMax: "2 200 à 3 500 pi²",
      totalInvestment: "500 000 $ à 850 000 $",
      downPayment: "130 000 $ à 220 000 $",
      royaltyRate: "5.0 %",
      adFundRate: "2.0 %",
      currentUnits: "2 adresses à fort achalandage (Vieux-Québec et Sainte-Foy)",
      targetTerritories: "Lebourgneuf Nord, Beauport, Lévis, Rimouski, Brossard",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Ratio chiffre d'affaires / superficie parmi les plus performants du marché",
        "Double moteur de revenus : salle élégante + service de commandes à emporter / traiteur corporatif",
        "Filière d'approvisionnement centralisée en poissons nobles et ingrédients certifiés",
        "Opération de cuisine sans friteuse lourde, coûts d'aménagement optimisés"
      ]
    },
    {
      id: "nacho-pub",
      name: "Nacho Pub & Cantina",
      tagline: "L'énergie festive latine — Le concept groupe et anniversaire numéro 1",
      category: "Mexicain festif & Bar à cocktails",
      surfaceMinMax: "3 000 à 4 500 pi²",
      totalInvestment: "650 000 $ à 1 050 000 $",
      downPayment: "160 000 $ à 260 000 $",
      royaltyRate: "4.5 %",
      adFundRate: "2.0 %",
      currentUnits: "2 adresses iconiques à Québec (Saint-Roch et Beauport)",
      targetTerritories: "Sainte-Foy, Lévis, Drummondville, Saint-Jérôme",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Concept très fédérateur attirant les groupes de 10 à 60 personnes (partys, anniversaires)",
        "Coût des matières premières (food cost) très compétitif grâce aux recettes signature",
        "Ambiance festive avec DJ le week-end garantissant un débit boissons spectaculaire",
        "Formation rapide des équipes de salle et cuisine grâce à des fiches recettes ultra-visuelles"
      ]
    },
    {
      id: "steak-avenue",
      name: "Steak Avenue",
      tagline: "L'expérience steakhouse prestigieuse — Clientèle haut de gamme et réceptions privées",
      category: "Grand Steakhouse & Bar d'affaires",
      surfaceMinMax: "4 000 à 6 000 pi²",
      totalInvestment: "1 200 000 $ à 1 950 000 $",
      downPayment: "300 000 $ à 480 000 $",
      royaltyRate: "4.5 %",
      adFundRate: "1.5 %",
      currentUnits: "2 emplacements stratégiques à Lebourgneuf et Sainte-Foy",
      targetTerritories: "Lévis Centre-Ville, Trois-Rivières, Sherbrooke, Laval Ouest",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Positionnement prestige avec un panier moyen par convive supérieur à 85 $",
        "Ententes exclusives avec des producteurs bovins canadiens pour les découpes premium",
        "Salons privés VIP ultra-rentables, réservés des mois à l'avance par les grandes firmes",
        "Accompagnement VIP du franchiseur pour l'agencement et l'équipement du cellier"
      ]
    },
    {
      id: "matin-gourmand",
      name: "Le Matin Gourmand",
      tagline: "La formule déjeuner par excellence — Qualité de vie incomparable pour le franchisé",
      category: "Déjeuners d'affaires & Brunchs",
      surfaceMinMax: "2 500 à 3 600 pi²",
      totalInvestment: "450 000 $ à 750 000 $",
      downPayment: "120 000 $ à 190 000 $",
      royaltyRate: "4.5 %",
      adFundRate: "1.5 %",
      currentUnits: "2 adresses à Sainte-Foy et Beauport",
      targetTerritories: "Lebourgneuf, Val-Bélair, Lévis, Saint-Georges de Beauce",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Horaires de rêve pour l'exploitant : fermeture à 15h, soirées libres en famille",
        "Rotation rapide des tables les samedis et dimanches matins",
        "Marché florissant des petits-déjeuners corporatifs en semaine",
        "Investissement initial très accessible et retour sur capital investi dès la 2e année"
      ]
    },
    {
      id: "coq-rotisserie",
      name: "Coq & Rôtisserie Rustique",
      tagline: "Le réconfort du vrai poulet de grain rôti — Flux constant en salle, comptoir et traiteur",
      category: "Rôtisserie traditionnelle & Service traiteur",
      surfaceMinMax: "2 800 à 4 200 pi²",
      totalInvestment: "550 000 $ à 900 000 $",
      downPayment: "140 000 $ à 230 000 $",
      royaltyRate: "4.5 %",
      adFundRate: "2.0 %",
      currentUnits: "2 succursales à Charlesbourg et Lebourgneuf",
      targetTerritories: "Sainte-Foy Sud, Portneuf, Côte-de-Beaupré, Thetford Mines",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
      whyInvest: [
        "Recettes éprouvées très appréciées des familles québécoises et des entreprises",
        "Part élevée des commandes à emporter et boîtes corporatives pour les lunchs d'équipes",
        "Processus de rôtisserie automatisé assurant une cuisson parfaite sans perte de matière",
        "Centrale d'achats assurant des prix garantis toute l'année sur la volaille locale"
      ]
    }
  ],

  // Avantages du Franchiseur "Pourquoi Groupe Limonade ?"
  franchisePillars: [
    {
      icon: "shopping-bag",
      title: "Centrale d'Achats & Volume Massif",
      desc: "Bénéficiez de remises négociées pouvant atteindre jusqu'à 18% sur l'alimentaire, les boissons, l'énergie et les équipements grâce au volume combiné de nos 16 adresses."
    },
    {
      icon: "award",
      title: "Formation Immersive de 6 Semaines",
      desc: "Programme complet pour vous et vos adjoints : gestion financière, ratios de coûts, hygiène MAPAQ, leadership bienveillant et maîtrise des fiches opérationnelles standardisées."
    },
    {
      icon: "map-pin",
      title: "Sélection d'Emplacements AAA & Baux Clé en Main",
      desc: "Notre équipe immobilière dédiée étudie le trafic piétonnier et véhiculaire, négocie les meilleures conditions de bail commercial et pilote l'aménagement architectural de A à Z."
    },
    {
      icon: "trending-up",
      title: "Marketing 360° & Visibilité Québécoise",
      desc: "Campagnes numériques ciblées, référencement local Google, relations publiques, gestion des réseaux sociaux et intégration immédiate dans notre réseau corporatif de plus de 450 entreprises."
    },
    {
      icon: "users",
      title: "Accompagnement Terrain Continu",
      desc: "Un directeur des opérations dédié visite régulièrement votre établissement pour auditer la rentabilité, optimiser les plannings et coacher vos équipes."
    },
    {
      icon: "dollar-sign",
      title: "Partenariats Bancaires & Financement CSBFP",
      desc: "Dossiers de crédit pré-structurés auprès des grandes institutions financières canadiennes (BDC, Desjardins, Banque Nationale) facilitant l'obtention de votre prêt garanti."
    }
  ],

  // Les 5 Étapes du processus franchisé
  franchiseSteps: [
    {
      step: 1,
      title: "Demande & Présélection",
      duration: "Semaine 1",
      desc: "Remplissez le formulaire de qualification en ligne. Notre direction du développement analyse votre profil et vos liquidités sous 48h ouvrées."
    },
    {
      step: 2,
      title: "Rencontre Exploratoire & NDA",
      duration: "Semaines 2-3",
      desc: "Échange en personne au siège social de Québec avec les fondateurs. Signature de l'entente de confidentialité et remise du Document d'Information Précontractuel (DIP)."
    },
    {
      step: 3,
      title: "Choix de l'Enseigne & Territoire",
      duration: "Semaines 4-6",
      desc: "Sélection du concept adapté à votre ville cible, étude géomarketing approfondie et validation de l'emplacement commercial avec notre équipe d'aménagement."
    },
    {
      step: 4,
      title: "Financement & Aménagement",
      duration: "Mois 2 à 4",
      desc: "Finalisation du plan d'affaires avec nos conseillers financiers, signature du contrat de franchise, début des travaux clés en main et commandes d'équipements."
    },
    {
      step: 5,
      title: "Formation & Grand Opening !",
      duration: "Mois 5",
      desc: "6 semaines d'immersion pratique dans nos restaurants écoles, rodage en pré-ouverture avec notre brigade d'experts et lancement médiatique de votre restaurant."
    }
  ],

  // Forfaits Corporatifs & Partys des Fêtes 2026
  corporatePackages: [
    {
      id: "fetes-cocktail",
      name: "Cocktail Dînatoire Festif des Fêtes 2026",
      tag: "Idéal pour 25 à 200 personnes",
      price: "À partir de 48 $ / personne",
      summary: "La formule la plus dynamique pour favoriser les échanges entre collègues, rire et trinquer.",
      includes: [
        "Verre de bienvenue aux bulles québécoises ou cocktail signature Limonade",
        "12 bouchées gastronomiques par convive (chaudes et froides créatives)",
        "Station gourmande au choix (Bar à huîtres fraîches, Poutine braisée de minuit ou Tacos bar)",
        "Accès exclusif à la salle privée ou salon lounge avec système de son et micro sans fil",
        "Service vestiaire dédié et prise en charge intégrale"
      ]
    },
    {
      id: "fetes-banquet",
      name: "Grand Souper 3 ou 4 Services des Fêtes",
      tag: "Le grand classique convivial & chaleureux",
      price: "À partir de 62 $ / personne",
      summary: "Une expérience de table mémorable mettant en vedette les spécialités de nos enseignes.",
      includes: [
        "Mise en bouche du Chef selon la bannière choisie (Archibald, Tuscanos, Steak Avenue, etc.)",
        "Entrée raffinée au choix (Carpaccio, potage boréal, tartare de saumon)",
        "Plat principal copieux au choix (Bavette vieillie, joue braisée, saumon laqué ou option végétarienne)",
        "Dessert des Fêtes artisanal et café équitable",
        "Menus personnalisés imprimés aux couleurs et logo de votre entreprise",
        "Projecteur HD et écran grand format pour vos discours et vidéos d'équipe"
      ]
    },
    {
      id: "fetes-vip",
      name: "Expérience Privative Prestige & Soirée Clé en Main",
      tag: "Privatisation complète de 50 à 350 personnes",
      price: "Sur mesure avec devis garanti en 24h",
      summary: "L'exclusivité absolue d'un de nos restaurants avec DJ, animations, bar ouvert et accords mets-vins.",
      includes: [
        "Privatisation totale de l'établissement sélectionné pour votre entreprise",
        "Menu dégustation gastronomique créé sur mesure par nos Chefs exécutifs",
        "Accords mets et vins sommelier ou bar ouvert complet",
        "Coordination avec nos partenaires DJ, photobooth et éclairage festif",
        "Gestionnaire de compte corporatif dédié présent le soir de l'événement"
      ]
    }
  ],

  // Marque employeur & Carrières
  careers: {
    heroTitle: "Rejoignez une équipe où votre talent est véritablement récompensé",
    heroSubtitle: "Plus de 750 passionnés de restauration grandissent avec nous à Québec. Découvrez ce qui fait de Groupe Limonade l'un des meilleurs employeurs en restauration.",
    perks: [
      {
        icon: "utensils",
        title: "Repas offert à chaque quart",
        desc: "Un repas complet, chaud et délicieux cuisiné pour vous à chaque quart de travail, sans exception."
      },
      {
        icon: "car",
        title: "Stationnement 100% gratuit",
        desc: "Fini le stress du parcomètre ou de la neige : tous nos restaurants disposent d'un stationnement gratuit pour le personnel."
      },
      {
        icon: "activity",
        title: "Abonnement au gym payé",
        desc: "Pour nos employés à temps plein, nous payons l'intégralité de votre abonnement dans le centre de conditionnement physique de votre choix."
      },
      {
        icon: "trending-up",
        title: "Passerelles inter-bannières",
        desc: "Envie d'explorer la mixologie, le sushi de luxe ou le steakhouse ? Vous pouvez évoluer entre nos 8 enseignes sans jamais repartir de zéro."
      },
      {
        icon: "dollar-sign",
        title: "Pourboires généreux & Bourses",
        desc: "Rémunération hautement compétitive, pourboires réguliers et bourses d'études internes pour soutenir vos projets personnels."
      },
      {
        icon: "clock",
        title: "Horaires flexibles & conciliation",
        desc: "Plannings adaptés à vos études, à votre vie de famille ou à vos passions. Nous valorisons l'équilibre vie pro / vie perso."
      }
    ],
    openPositions: [
      {
        id: "job-1",
        title: "Chef cuisinier / Chef de cuisine",
        brand: "Archibald Microbrasserie",
        neighborhood: "Sainte-Foy",
        type: "Temps plein (40h/sem)",
        category: "Cuisine",
        salary: "65 000 $ - 80 000 $ / an + bonis",
        desc: "Leader dynamique capable d'orchestrer une brigade de 18 personnes dans une ambiance stimulante et festive."
      },
      {
        id: "job-2",
        title: "Sous-chef exécutif",
        brand: "Steak Avenue",
        neighborhood: "Lebourgneuf",
        type: "Temps plein (40h/sem)",
        category: "Cuisine",
        salary: "52 000 $ - 62 000 $ / an",
        desc: "Passionné des cuissons de viandes nobles, rigueur irréprochable et passion du produit québécois."
      },
      {
        id: "job-3",
        title: "Gérant / Gérante de restaurant",
        brand: "Tuscanos",
        neighborhood: "Sainte-Foy",
        type: "Temps plein (40h/sem)",
        category: "Gestion",
        salary: "55 000 $ - 68 000 $ / an + bonis de performance",
        desc: "Gestion opérationnelle, encadrement du service en salle, accueil des clients d'affaires et optimisation des ventes."
      },
      {
        id: "job-4",
        title: "Chef de rang / Serveur / Serveuse",
        brand: "Azur Lounge",
        neighborhood: "Lebourgneuf",
        type: "Temps plein / partiel",
        category: "Service",
        salary: "Salaire au pourboire (Moyenne 32 $ - 48 $ / h avec pourboires)",
        desc: "Sens de l'accueil chaleureux, rapidité d'exécution et sourire communicatif pour animer notre salle et terrasse."
      },
      {
        id: "job-5",
        title: "Mixologue / Barman / Barmaid d'expérience",
        brand: "Le Petit Champlain Speakeasy",
        neighborhood: "Vieux-Québec",
        type: "Temps plein",
        category: "Service",
        salary: "Salaire de base bonifié + pourboires majeurs",
        desc: "Création de cocktails signature, maîtrise des spiritueux québécois et service personnalisé au bar."
      },
      {
        id: "job-6",
        title: "Sushi Chef / Maître Sushiman",
        brand: "Sushix",
        neighborhood: "Vieux-Québec",
        type: "Temps plein",
        category: "Cuisine",
        salary: "24 $ - 30 $ / h selon expérience",
        desc: "Découpe de poissons nobles, confection des makis signatures et tenue irréprochable du comptoir Omakase."
      },
      {
        id: "job-7",
        title: "Coordonnateur / Coordonnatrice Événements Corporatifs",
        brand: "Groupe Limonade (Siège social)",
        neighborhood: "Québec (Boulevard Laurier)",
        type: "Temps plein (Hybride)",
        category: "Siège social",
        salary: "48 000 $ - 58 000 $ / an",
        desc: "Prise en charge des demandes de partys d'entreprises, visites de salles avec les clients et coordination des équipes."
      },
      {
        id: "job-8",
        title: "Cuisinier / Cuisinière à la ligne",
        brand: "Nacho Pub",
        neighborhood: "Saint-Roch",
        type: "Temps plein ou partiel",
        category: "Cuisine",
        salary: "19 $ - 23 $ / h",
        desc: "Esprit d'équipe, bonne cadence lors des services achalandés et amour de la bonne cuisine mexicaine."
      }
    ]
  },

  // Cartes-Cadeaux & Zone VIP
  giftCards: {
    heroTitle: "Offrez 16 restaurants de prestige avec une seule carte-cadeau",
    heroSubtitle: "La carte Groupe Limonade est acceptée dans toutes nos adresses à Québec : Archibald, Tuscanos, Sushix, Steak Avenue, Azur, Nacho Pub, Le Matin Gourmand et Coq & Rôtisserie.",
    corporatePromo: "🎄 Offre Corporative des Fêtes : Obtenez 10% de remise en cartes-cadeaux additionnelles gratuites pour toute commande corporative de 1 000 $ et plus !",
    denominations: [25, 50, 75, 100, 150, 200, 500]
  },

  // Histoire et À Propos
  about: {
    title: "15 ans d'audace, de passion et d'hospitalité à Québec",
    storyParagraph1: "Fondé en 2011 au cœur de la Capitale-Nationale par des restaurateurs passionnés, Groupe Limonade est né d'une vision simple mais ambitieuse : offrir aux Québécois des lieux de rassemblement chaleureux où la générosité de la table se marie à une hospitalité sincère.",
    storyParagraph2: "D'une première microbrasserie à Lac-Beauport jusqu'à un écosystème florissant de 16 adresses et 8 enseignes uniques, notre groupe s'est développé pas à pas, guidé par le respect des producteurs locaux, la passion du service client et le bien-être de nos 750 collaborateurs.",
    values: [
      {
        title: "Le Plaisir de se Rassembler",
        desc: "Nous concevons des lieux vivants et mémorables où collègues, amis et familles célèbrent les petits et grands moments de la vie."
      },
      {
        title: "Le Terroir Québécois d'Abord",
        desc: "Plus de 72% de nos approvisionnements proviennent de producteurs, éleveurs, brasseurs et maraîchers de la province."
      },
      {
        title: "Grandir Ensemble",
        desc: "Près de la moitié de nos gérants et directeurs ont débuté comme commis, plongeurs ou serveurs au sein de notre famille."
      },
      {
        title: "Excellence Opérationnelle",
        desc: "Un modèle de gestion rigoureux et innovant qui garantit à chaque investisseur franchisé une sécurité et une rentabilité à long terme."
      }
    ],
    timeline: [
      { year: "2011", title: "Genèse à Lac-Beauport", desc: "Ouverture du premier resto-pub de montagne, plaçant l'artisanat québécois au premier plan." },
      { year: "2015", title: "Expansion dans Sainte-Foy et Lebourgneuf", desc: "Implantation stratégique d'Archibald et lancement de la bannière italienne Tuscanos." },
      { year: "2018", title: "Diversification des bannières", desc: "Arrivée de Sushix et du concept festif Nacho Pub pour élargir la palette culinaire offerte aux entreprises." },
      { year: "2021", title: "Création de la Centrale Limonade", desc: "Consolidation des achats de groupe, de la logistique et de l'académie de formation continue." },
      { year: "2024", title: "Intégration d'Azur et expansion Steak Avenue", desc: "Montée en gamme avec le bar lounge contemporain Azur et le steakhouse urbain." },
      { year: "2026", title: "16 adresses & Cap sur l'avenir", desc: "750+ collaborateurs et ouverture du réseau de franchise aux nouveaux territoires du Québec." }
    ]
  },

  // FAQ complète
  faq: [
    {
      question: "La carte-cadeau est-elle utilisable dans l'ensemble des 16 restaurants ?",
      answer: "Absolument ! Qu'elle soit achetée en format électronique ou physique, la carte-cadeau Groupe Limonade est valide sans date d'expiration dans nos 16 adresses (Archibald, Tuscanos, Sushix, Steak Avenue, Azur, Nacho Pub, Le Matin Gourmand et Coq & Rôtisserie)."
    },
    {
      question: "Quel est le délai recommandé pour réserver un party des Fêtes ou événement corporatif ?",
      answer: "Nous vous conseillons de réserver au moins 3 à 4 semaines à l'avance pour les groupes de 15 à 50 personnes, et 2 à 3 mois à l'avance pour les privatisations complètes en novembre et décembre. Notre service corporatif vous répond avec une soumission détaillée sous 24h ouvrées."
    },
    {
      question: "Quel montant de liquidité personnelle est nécessaire pour devenir franchisé ?",
      answer: "La mise de fonds minimale varie selon la bannière choisie : à partir de 120 000 $ pour Le Matin Gourmand ou Sushix, et jusqu'à 350 000 $ pour une microbrasserie d'envergure Archibald. Le reste du financement est structuré avec nos banques partenaires canadiennes (CSBFP / BDC)."
    },
    {
      question: "Fournissez-vous une assistance pour trouver l'emplacement de la franchise ?",
      answer: "Oui, notre équipe de développement immobilier s'occupe de la prospection géomarketing, de l'analyse des flux, de la négociation des baux commerciaux et de la coordination des plans d'aménagement avec nos architectes attitrés."
    },
    {
      question: "Puis-je privatiser un salon avec équipement audiovisuel pour une réunion de travail ?",
      answer: "Oui, la majorité de nos 16 restaurants disposent de salons d'affaires équipés d'écrans HD, câblage HDMI/AirPlay, micros sans fil et connexion Wi-Fi haut débit dédiée, avec formules déjeuners, dîners ou soupers adaptés."
    }
  ]
};

// Exporter pour utilisation globale dans le navigateur
if (typeof window !== "undefined") {
  window.LIMONADE_DATA = LIMONADE_DATA;
}
