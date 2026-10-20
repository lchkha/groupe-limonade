// Application Principale & Interactivité - Groupe Limonade (Québec, Canada)
// Gestion du routage SPA, filtres des 16 adresses, simulateur franchise, aide au choix corpo, bilinguisme

(function () {
  'use strict';

  // État de l'application
  const state = {
    currentLang: 'fr',
    currentView: 'accueil',
    filters: {
      search: '',
      cuisine: 'all',
      neighborhood: 'all',
      privateRoomOnly: false,
      freeParkingOnly: false
    },
    venueMatcher: {
      guests: '50',
      vibe: 'all',
      neighborhood: 'all'
    },
    franchiseLiquidity: 250000,
    jobFilter: 'all'
  };

  // Dictionnaire Bilingue
  const i18n = {
    fr: {
      tagline: "16 restaurants à Québec. Un seul groupe d'exception.",
      navHome: "Accueil",
      navRestaurants: "Nos 16 Restaurants",
      navCorporate: "Corporatif & Événements",
      navFranchise: "Franchises & Investisseurs",
      navCareers: "Carrières",
      navGiftCards: "Cartes-Cadeaux",
      navAbout: "Notre Histoire",
      navContact: "Contact",
      btnReserve: "Réserver",
      btnQuote: "Devis corporatif",
      doorRestoTitle: "Trouver un restaurant",
      doorRestoDesc: "Découvrez nos 16 adresses à Québec : microbrasserie, cuisine italienne, sushis, steakhouse, saveurs mexicaines et déjeuners gourmands.",
      doorCorpoTitle: "Événements & Partys d'entreprise",
      doorCorpoDesc: "16 lieux prestigieux avec salons privés et équipement HD. Partys des Fêtes 2026, banquets, 5 à 7 d'affaires avec un coordonnateur dédié.",
      doorFranchiseTitle: "Devenir Franchisé",
      doorFranchiseDesc: "Investissez dans des concepts de restauration éprouvés à Québec. Centrale d'achats, formation de 6 semaines et modèles clé en main rentables."
    },
    en: {
      tagline: "16 restaurants in Québec City. One exceptional hospitality group.",
      navHome: "Home",
      navRestaurants: "Our 16 Restaurants",
      navCorporate: "Corporate & Events",
      navFranchise: "Franchise & Investors",
      navCareers: "Careers",
      navGiftCards: "Gift Cards",
      navAbout: "Our Story",
      navContact: "Contact",
      btnReserve: "Book a Table",
      btnQuote: "Event Quote",
      doorRestoTitle: "Find a Restaurant",
      doorRestoDesc: "Explore our 16 premier dining destinations across Québec City: craft breweries, authentic Italian, contemporary sushi, steakhouses and breakfasts.",
      doorCorpoTitle: "Corporate & Holiday Gatherings",
      doorCorpoDesc: "16 distinguished venues with private salons and HD equipment. 2026 Holiday parties, executive dinners and corporate afterworks.",
      doorFranchiseTitle: "Franchise Opportunities",
      doorFranchiseDesc: "Partner with Québec's premier multi-brand restaurant group. Group purchasing, 6-week immersion training, and turnkey profitability."
    }
  };

  // Initialisation au chargement du DOM
  document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    initLanguageSwitcher();
    renderRestaurantsGrid();
    renderFranchiseInvestorCards();
    renderJobsList();
    initVenueMatcher();
    initFranchiseSimulator();
    initGiftCardsCalculator();
    initModals();
    initForms();
    renderTrustMetrics();
  });

  /* ==========================================================================
     ROUTER & NAVIGATION
     ========================================================================== */
  function initRouter() {
    // Écoute du hash
    window.addEventListener('hashchange', handleHashChange);
    // Navigation initiale
    if (window.location.hash) {
      const targetView = window.location.hash.replace('#', '');
      switchView(targetView);
    } else {
      switchView('accueil');
    }

    // Liens de navigation
    document.querySelectorAll('[data-view-target]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-view-target');
        window.location.hash = target;
        switchView(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Menu burger mobile
    const mobileBtn = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('active');
      });
    }
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'accueil';
    switchView(hash);
  }

  function switchView(viewName) {
    const validViews = ['accueil', 'restaurants', 'corporatif', 'franchises', 'carrieres', 'cartes-cadeaux', 'a-propos', 'contact'];
    const activeView = validViews.includes(viewName) ? viewName : 'accueil';
    state.currentView = activeView;

    // Cacher toutes les sections de vues
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.style.display = 'none';
    });

    // Afficher la vue demandée
    const currentSec = document.getElementById(`view-${activeView}`);
    if (currentSec) {
      currentSec.style.display = 'block';
    }

    // Mettre à jour l'état actif dans la barre de navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view-target') === activeView) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Fermer le menu mobile si ouvert
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileDrawer) mobileDrawer.classList.remove('active');
  }

  /* ==========================================================================
     INTERNATIONALIZATION (FR / EN)
     ========================================================================== */
  function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-switch-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentLang = state.currentLang === 'fr' ? 'en' : 'fr';
        updateLanguageDisplay();
        showToast(state.currentLang === 'fr' ? "Langue changée en Français (Québec)" : "Language switched to English (Canada)");
      });
    });
  }

  function updateLanguageDisplay() {
    const isEn = state.currentLang === 'en';
    document.querySelectorAll('.lang-label-text').forEach(el => {
      el.textContent = isEn ? 'EN' : 'FR';
    });

    // Mettre à jour les attributs textuels traduisibles
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[state.currentLang] && i18n[state.currentLang][key]) {
        el.textContent = i18n[state.currentLang][key];
      }
    });

    // Ré-afficher les restaurants et offres avec la langue choisie
    renderRestaurantsGrid();
  }

  /* ==========================================================================
     RESTAURANTS DIRECTORY (16 ADRESSES)
     ========================================================================== */
  function renderRestaurantsGrid() {
    const grid = document.getElementById('restaurantsGridContainer');
    if (!grid) return;

    const data = window.LIMONADE_DATA.restaurants;
    const isEn = state.currentLang === 'en';

    // Application des filtres
    const filtered = data.filter(resto => {
      const matchesSearch = state.filters.search === '' || 
        resto.name.toLowerCase().includes(state.filters.search.toLowerCase()) ||
        resto.neighborhood.toLowerCase().includes(state.filters.search.toLowerCase()) ||
        resto.cuisine.toLowerCase().includes(state.filters.search.toLowerCase());

      const matchesCuisine = state.filters.cuisine === 'all' || resto.cuisineType === state.filters.cuisine;
      const matchesNeighborhood = state.filters.neighborhood === 'all' || resto.neighborhood === state.filters.neighborhood;
      const matchesPrivate = !state.filters.privateRoomOnly || resto.privateRoom;
      const matchesParking = !state.filters.freeParkingOnly || resto.features.some(f => f.toLowerCase().includes('stationnement'));

      return matchesSearch && matchesCuisine && matchesNeighborhood && matchesPrivate && matchesParking;
    });

    // Compteur de résultats
    const countDisplay = document.getElementById('resultsCountDisplay');
    if (countDisplay) {
      countDisplay.textContent = `${filtered.length} restaurant${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 16px; border: 1px dashed #CBD5E1;">
          <h3 style="font-size: 1.3rem; margin-bottom: 8px;">Aucun restaurant ne correspond à ces critères</h3>
          <p style="color: #64748B; margin-bottom: 16px;">Essayez de réinitialiser vos filtres ou de modifier votre recherche.</p>
          <button class="btn btn-secondary" id="resetFiltersBtn">Réinitialiser les filtres</button>
        </div>
      `;
      document.getElementById('resetFiltersBtn')?.addEventListener('click', resetAllFilters);
      return;
    }

    grid.innerHTML = filtered.map(resto => `
      <div class="restaurant-card" data-resto-id="${resto.id}">
        <div class="restaurant-thumb-wrapper">
          <img src="${resto.image}" alt="${resto.name}" class="restaurant-thumb" loading="lazy">
          <div class="card-top-badges">
            <span class="card-rating-badge">★ ${resto.rating} (${resto.reviewsCount})</span>
            <span class="card-cuisine-badge">${resto.cuisine.split('&')[0]}</span>
          </div>
        </div>
        <div class="restaurant-body">
          <span class="restaurant-neighborhood"><i class="fas fa-map-marker-alt"></i> ${resto.neighborhood}</span>
          <h3 class="restaurant-name">${resto.name}</h3>
          <p class="restaurant-desc">${isEn ? resto.descriptionEn : resto.descriptionFr}</p>
          
          <div class="restaurant-meta-list">
            <div class="meta-item">
              <i class="fas fa-location-dot"></i>
              <span>${resto.address}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-users"></i>
              <span>Capacité : ${resto.capacity} places ${resto.privateRoom ? `• ${resto.privateRoomCapacity}` : ''}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-clock"></i>
              <span>${resto.hours.split('|')[0]}</span>
            </div>
          </div>

          <div class="restaurant-features-pills">
            ${resto.features.slice(0, 3).map(feat => `<span class="feat-pill">${feat}</span>`).join('')}
          </div>

          <div class="restaurant-actions">
            <button class="btn-card-reserve" onclick="window.LimonadeApp.openReservationModal('${resto.id}')">
              <i class="fas fa-calendar-check"></i> ${isEn ? 'Book Table' : 'Réserver'}
            </button>
            <button class="btn-card-details" onclick="window.LimonadeApp.openRestoDetailsModal('${resto.id}')">
              ${isEn ? 'View Menu' : 'Menu & Infos'}
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Rendre les filtres interactifs
    setupFilterEvents();
  }

  function setupFilterEvents() {
    const searchInput = document.getElementById('restoSearchInput');
    if (searchInput && !searchInput.dataset.initialized) {
      searchInput.dataset.initialized = "true";
      searchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value.trim();
        renderRestaurantsGrid();
      });
    }

    const neighborhoodSelect = document.getElementById('neighborhoodFilterSelect');
    if (neighborhoodSelect && !neighborhoodSelect.dataset.initialized) {
      neighborhoodSelect.dataset.initialized = "true";
      neighborhoodSelect.addEventListener('change', (e) => {
        state.filters.neighborhood = e.target.value;
        renderRestaurantsGrid();
      });
    }

    // Pills de style de cuisine
    document.querySelectorAll('.filter-pill[data-cuisine-filter]').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill[data-cuisine-filter]').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.filters.cuisine = pill.getAttribute('data-cuisine-filter');
        renderRestaurantsGrid();
      });
    });

    // Checkboxes filtres supplémentaires
    const privCheck = document.getElementById('filterPrivateRoom');
    if (privCheck && !privCheck.dataset.initialized) {
      privCheck.dataset.initialized = "true";
      privCheck.addEventListener('change', (e) => {
        state.filters.privateRoomOnly = e.target.checked;
        renderRestaurantsGrid();
      });
    }

    const parkCheck = document.getElementById('filterFreeParking');
    if (parkCheck && !parkCheck.dataset.initialized) {
      parkCheck.dataset.initialized = "true";
      parkCheck.addEventListener('change', (e) => {
        state.filters.freeParkingOnly = e.target.checked;
        renderRestaurantsGrid();
      });
    }
  }

  function resetAllFilters() {
    state.filters.search = '';
    state.filters.cuisine = 'all';
    state.filters.neighborhood = 'all';
    state.filters.privateRoomOnly = false;
    state.filters.freeParkingOnly = false;

    const s = document.getElementById('restoSearchInput');
    if (s) s.value = '';
    const n = document.getElementById('neighborhoodFilterSelect');
    if (n) n.value = 'all';
    const p = document.getElementById('filterPrivateRoom');
    if (p) p.checked = false;
    const park = document.getElementById('filterFreeParking');
    if (park) park.checked = false;

    document.querySelectorAll('.filter-pill[data-cuisine-filter]').forEach(pill => {
      if (pill.getAttribute('data-cuisine-filter') === 'all') pill.classList.add('active');
      else pill.classList.remove('active');
    });

    renderRestaurantsGrid();
  }

  /* ==========================================================================
     VENUE MATCHER ("AIDEZ-MOI À CHOISIR" CORPORATIF)
     ========================================================================== */
  function initVenueMatcher() {
    const btn = document.getElementById('btnExecuteVenueMatch');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const guestsInput = document.getElementById('matcherGuestsSelect');
      const vibeSelect = document.getElementById('matcherVibeSelect');
      const hoodSelect = document.getElementById('matcherHoodSelect');

      const guestsVal = parseInt(guestsInput ? guestsInput.value : "40", 10);
      const vibeVal = vibeSelect ? vibeSelect.value : "all";
      const hoodVal = hoodSelect ? hoodSelect.value : "all";

      const matched = window.LIMONADE_DATA.restaurants.filter(r => {
        const canHost = r.capacity >= guestsVal;
        const matchHood = hoodVal === 'all' || r.neighborhood === hoodVal;
        let matchVibe = true;
        if (vibeVal === 'pub') matchVibe = r.cuisineType === 'pub';
        else if (vibeVal === 'italien') matchVibe = r.cuisineType === 'italien';
        else if (vibeVal === 'prestige') matchVibe = r.cuisineType === 'steakhouse' || r.cuisineType === 'asiatique';
        else if (vibeVal === 'lounge') matchVibe = r.cuisineType === 'lounge' || r.cuisineType === 'mexicain';

        return canHost && matchHood && matchVibe;
      });

      const resultsArea = document.getElementById('matcherResultsArea');
      const resultsGrid = document.getElementById('matcherResultsGrid');

      if (resultsArea && resultsGrid) {
        resultsArea.style.display = 'block';

        if (matched.length === 0) {
          resultsGrid.innerHTML = `
            <div style="grid-column: 1/-1; padding: 20px; background: #FEF3C7; border-radius: 12px; color: #92400E; text-align: center;">
              <strong>Aucun établissement ne correspond exactement à ce filtre strict.</strong>
              <p>Contactez notre service corporatif au (418) 658-5366 pour une formule sur mesure combinant plusieurs salons.</p>
            </div>
          `;
        } else {
          resultsGrid.innerHTML = matched.slice(0, 3).map(r => `
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
              <img src="${r.image}" style="height: 140px; width: 100%; object-fit: cover;">
              <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #D97706; text-transform: uppercase;">${r.neighborhood}</span>
                <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">${r.name}</h4>
                <p style="font-size: 0.85rem; color: #64748B; margin-bottom: 12px; flex-grow: 1;">${r.privateRoomCapacity || 'Accueil groupe jusqu\'à ' + r.capacity + ' personnes'}</p>
                <button class="btn btn-primary" style="padding: 8px 12px; font-size: 0.85rem;" onclick="window.LimonadeApp.openQuoteModal('${r.id}')">
                  Choisir pour soumission
                </button>
              </div>
            </div>
          `).join('');
        }

        resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /* ==========================================================================
     FRANCHISE HUB & SIMULATOR
     ========================================================================== */
  function renderFranchiseInvestorCards() {
    const container = document.getElementById('franchiseCardsGrid');
    if (!container) return;

    const brands = window.LIMONADE_DATA.franchiseBrands;
    container.innerHTML = brands.map(b => `
      <div class="investor-card" id="franchise-brand-${b.id}">
        <div class="investor-card-header">
          <img src="${b.image}" alt="${b.name}">
          <div class="investor-card-overlay">
            <span class="investor-card-cat">${b.category}</span>
            <h3 class="investor-card-title">${b.name}</h3>
          </div>
        </div>
        <div class="investor-card-body">
          <p style="font-size: 0.92rem; color: #334155; font-weight: 600; margin-bottom: 16px;">${b.tagline}</p>
          
          <div class="investor-metrics-table">
            <div class="metric-cell">
              <span class="metric-cell-label">Mise de fonds min.</span>
              <span class="metric-cell-value" style="color: #047857;">${b.downPayment}</span>
            </div>
            <div class="metric-cell">
              <span class="metric-cell-label">Investissement Total</span>
              <span class="metric-cell-value">${b.totalInvestment}</span>
            </div>
            <div class="metric-cell">
              <span class="metric-cell-label">Redevances d'exploitation</span>
              <span class="metric-cell-value">${b.royaltyRate} (+ ${b.adFundRate} pub)</span>
            </div>
            <div class="metric-cell">
              <span class="metric-cell-label">Superficie visée</span>
              <span class="metric-cell-value">${b.surfaceMinMax}</span>
            </div>
          </div>

          <h5 style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: #475569; margin-bottom: 8px;">Pourquoi investir dans cette bannière :</h5>
          <ul class="investor-points-list">
            ${b.whyInvest.map(pt => `<li><i class="fas fa-check-circle"></i> <span>${pt}</span></li>`).join('')}
          </ul>

          <div style="font-size: 0.8rem; background: #F1F5F9; padding: 10px 14px; border-radius: 8px; margin-bottom: 16px;">
            <strong>Territoires prioritaires :</strong> ${b.targetTerritories}
          </div>

          <div class="investor-card-footer">
            <button class="btn btn-primary" style="flex: 1;" onclick="window.LimonadeApp.openFranchiseModal('${b.name}')">
              <i class="fas fa-file-signature"></i> Postuler pour cette enseigne
            </button>
            <button class="btn btn-secondary" style="padding: 10px 16px;" onclick="window.LimonadeApp.downloadFranchiseGuide('${b.name}')">
              <i class="fas fa-download"></i> Dossier
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function initFranchiseSimulator() {
    const slider = document.getElementById('franchiseLiquiditySlider');
    const display = document.getElementById('currentLiquidityText');
    const matchesBox = document.getElementById('simulatorMatchesContainer');

    if (!slider || !display) return;

    function updateSimulation(val) {
      const amount = parseInt(val, 10);
      state.franchiseLiquidity = amount;
      display.textContent = `${amount.toLocaleString('fr-CA')} $`;

      // Déterminer bannières accessibles
      const brands = window.LIMONADE_DATA.franchiseBrands;
      if (matchesBox) {
        matchesBox.innerHTML = brands.map(b => {
          // Extraire le chiffre minimum de downPayment
          const minRequired = parseInt(b.downPayment.replace(/[^0-9]/g, '').slice(0, 6), 10);
          const isEligible = amount >= (minRequired || 150000);

          return `
            <div class="match-brand-mini ${isEligible ? 'eligible' : ''}">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <strong style="color: ${isEligible ? '#34D399' : '#94A3B8'}; font-size: 0.95rem;">${b.name}</strong>
                <span class="badge ${isEligible ? 'badge-green' : 'badge-dark'}">${isEligible ? 'Accessible' : 'Capital insuffisant'}</span>
              </div>
              <div style="font-size: 0.8rem; color: #CBD5E1;">
                Mise de fonds requise : <strong>${b.downPayment}</strong>
              </div>
              <div style="font-size: 0.78rem; color: #94A3B8;">
                Investissement total : ${b.totalInvestment}
              </div>
            </div>
          `;
        }).join('');
      }
    }

    slider.addEventListener('input', (e) => {
      updateSimulation(e.target.value);
    });

    updateSimulation(slider.value);
  }

  /* ==========================================================================
     CAREERS & JOB BOARD
     ========================================================================== */
  function renderJobsList() {
    const container = document.getElementById('jobsListingContainer');
    if (!container) return;

    const jobs = window.LIMONADE_DATA.careers.openPositions;
    const filtered = jobs.filter(j => state.jobFilter === 'all' || j.category === state.jobFilter);

    container.innerHTML = filtered.map(job => `
      <div class="job-card">
        <div class="job-info">
          <div class="job-badges-row">
            <span class="badge badge-lemon">${job.brand}</span>
            <span class="badge badge-dark" style="color: #334155; background: #F1F5F9;">${job.neighborhood}</span>
            <span class="badge badge-green">${job.type}</span>
          </div>
          <h3 class="job-title">${job.title}</h3>
          <p class="job-desc">${job.desc}</p>
          <div class="job-meta-row">
            <span><i class="fas fa-money-bill-wave" style="color: #10B981;"></i> ${job.salary}</span>
            <span><i class="fas fa-utensils" style="color: #F59E0B;"></i> Repas offert à chaque quart</span>
            <span><i class="fas fa-parking" style="color: #64748B;"></i> Stationnement inclus</span>
          </div>
        </div>
        <div>
          <button class="btn btn-primary" onclick="window.LimonadeApp.openJobApplyModal('${job.title}', '${job.brand}')">
            Postuler en 90s <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Filtres carrières
    document.querySelectorAll('.job-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.job-filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.jobFilter = pill.getAttribute('data-job-category');
        renderJobsList();
      });
    });
  }

  /* ==========================================================================
     GIFT CARDS CALCULATOR & VIP
     ========================================================================== */
  function initGiftCardsCalculator() {
    const cardPills = document.querySelectorAll('.giftcard-amount-pill');
    const customInput = document.getElementById('customGiftAmountInput');
    const totalDisplay = document.getElementById('giftCardSummaryTotal');
    const bonusAlert = document.getElementById('corporateBonusNotice');

    let currentAmount = 100;

    function updateGiftTotal(amt) {
      currentAmount = amt;
      if (totalDisplay) totalDisplay.textContent = `${amt.toLocaleString('fr-CA')} $`;
      if (bonusAlert) {
        if (amt >= 1000) {
          const bonus = amt * 0.10;
          bonusAlert.style.display = 'block';
          bonusAlert.innerHTML = `<strong>🎉 Félicitations ! Offre Corporative active :</strong> Vous recevrez <strong>${bonus.toLocaleString('fr-CA')} $</strong> supplémentaires en cartes-cadeaux gratuites pour votre commande d'entreprise.`;
        } else {
          bonusAlert.style.display = 'none';
        }
      }
    }

    cardPills.forEach(pill => {
      pill.addEventListener('click', () => {
        cardPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const amt = parseInt(pill.getAttribute('data-amount'), 10);
        if (customInput) customInput.value = '';
        updateGiftTotal(amt);
      });
    });

    if (customInput) {
      customInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val) && val > 0) {
          cardPills.forEach(p => p.classList.remove('active'));
          updateGiftTotal(val);
        }
      });
    }

    // Bouton de vérification de solde
    const checkBtn = document.getElementById('btnCheckCardBalance');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const numInput = document.getElementById('giftCardNumberInput');
        if (!numInput || !numInput.value.trim()) {
          showToast("Veuillez entrer les 16 chiffres de votre carte-cadeau.");
          return;
        }
        showToast("Solde disponible : 75,00 $ • Valide dans nos 16 adresses sans expiration.");
      });
    }
  }

  /* ==========================================================================
     MODALS SYSTEM & INTERACTION
     ========================================================================== */
  function initModals() {
    // Fermeture par bouton X ou clic en dehors
    document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop') || e.target.closest('.modal-close-btn')) {
          closeAllModals();
        }
      });
    });

    // Touche Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => {
      m.classList.remove('active');
      m.style.display = 'none';
    });
  }

  function openModal(modalId) {
    closeAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('active'), 10);
    }
  }

  /* ==========================================================================
     FORMULAIRES & QUALIFICATION DES LEADS
     ========================================================================== */
  function initForms() {
    // Formulaire de réservation
    const reserveForm = document.getElementById('reservationFormModal');
    if (reserveForm) {
      reserveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeAllModals();
        showToast("✅ Réservation envoyée ! Vous recevrez une confirmation instantanée par courriel et SMS.");
        reserveForm.reset();
      });
    }

    // Formulaire de soumission corporative
    const quoteForm = document.getElementById('corporateQuoteFormModal');
    if (quoteForm) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeAllModals();
        showToast("📋 Demande reçue avec succès ! Notre coordonnateur aux événements corporatifs vous contactera sous 24h ouvrées.");
        quoteForm.reset();
      });
    }

    // Formulaire franchise
    const franchiseForm = document.getElementById('franchiseCandidateForm');
    if (franchiseForm) {
      franchiseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeAllModals();
        showToast("💼 Candidature franchise enregistrée ! Notre direction du développement communiquera avec vous.");
        franchiseForm.reset();
      });
    }

    // Formulaire contact général
    const contactForm = document.getElementById('generalContactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("✉️ Message transmis à la direction du Groupe Limonade. Merci de votre confiance !");
        contactForm.reset();
      });
    }

    // Formulaire Carrière express
    const jobForm = document.getElementById('jobApplyFormModal');
    if (jobForm) {
      jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeAllModals();
        showToast("🚀 Candidature reçue ! Notre équipe RH vous contactera sous 48h.");
        jobForm.reset();
      });
    }

    // Inscription Club VIP
    const vipForm = document.getElementById('clubVipNewsletterForm');
    if (vipForm) {
      vipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("🎉 Bienvenue au Club Limonade ! Votre code rabais de 15% vous attend dans votre boîte de réception.");
        vipForm.reset();
      });
    }
  }

  /* ==========================================================================
     TOAST NOTIFICATIONS
     ========================================================================== */
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-bell" style="color: #F59E0B;"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  /* ==========================================================================
     METRICS & SOCIAL PROOF
     ========================================================================== */
  function renderTrustMetrics() {
    const metrics = window.LIMONADE_DATA.info.metrics;
    const el = document.getElementById('trustMetricRestaurants');
    if (el) el.textContent = metrics.restaurantsCount;
    const elEmp = document.getElementById('trustMetricEmployees');
    if (elEmp) elEmp.textContent = metrics.employeesCount;
    const elYears = document.getElementById('trustMetricYears');
    if (elYears) elYears.textContent = metrics.yearsExperience;
    const elGuests = document.getElementById('trustMetricGuests');
    if (elGuests) elGuests.textContent = metrics.guestsServedAnnual;
    const elSat = document.getElementById('trustMetricSat');
    if (elSat) elSat.textContent = metrics.googleRatingAverage;
  }

  /* ==========================================================================
     GLOBAL PUBLIC API (ACCESSIBLE DEPUIS LE HTML)
     ========================================================================== */
  window.LimonadeApp = {
    openReservationModal: function (restoId) {
      const select = document.getElementById('modalResvRestoSelect');
      if (select && restoId) {
        select.value = restoId;
      }
      openModal('reservationModalBackdrop');
    },

    openQuoteModal: function (restoId) {
      const select = document.getElementById('modalQuoteRestoSelect');
      if (select && restoId) {
        select.value = restoId;
      }
      openModal('corporateQuoteModalBackdrop');
    },

    openFranchiseModal: function (brandName) {
      const input = document.getElementById('franchiseModalBrandInput');
      if (input && brandName) {
        input.value = brandName;
      }
      openModal('franchiseCandidateModalBackdrop');
    },

    openJobApplyModal: function (jobTitle, brandName) {
      const titleEl = document.getElementById('jobModalTargetTitle');
      if (titleEl) {
        titleEl.textContent = `${jobTitle} (${brandName})`;
      }
      openModal('jobApplyModalBackdrop');
    },

    openRestoDetailsModal: function (restoId) {
      const resto = window.LIMONADE_DATA.restaurants.find(r => r.id === restoId);
      if (!resto) return;

      const body = document.getElementById('restoDetailsModalBody');
      const title = document.getElementById('restoDetailsModalTitle');
      if (title) title.textContent = resto.name;

      if (body) {
        body.innerHTML = `
          <img src="${resto.image}" style="width: 100%; height: 240px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
          <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
            <span class="badge badge-lemon">${resto.cuisine}</span>
            <span class="badge badge-dark" style="color: #0F172A; background: #F1F5F9;"><i class="fas fa-map-marker-alt"></i> ${resto.neighborhood}</span>
            <span class="badge badge-green">★ ${resto.rating} (${resto.reviewsCount} avis)</span>
          </div>
          <p style="font-size: 0.95rem; color: #334155; line-height: 1.6; margin-bottom: 20px;">${resto.descriptionFr}</p>
          
          <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 10px;">Plats vedettes du Chef :</h4>
          <ul style="list-style: none; margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px;">
            ${resto.popularDishes.map(d => `<li style="font-size: 0.9rem; color: #475569; display: flex; align-items: center; gap: 8px;"><i class="fas fa-star" style="color: #F59E0B; font-size: 0.8rem;"></i> ${d}</li>`).join('')}
          </ul>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 16px; border-radius: 10px; margin-bottom: 24px;">
            <div style="margin-bottom: 8px;"><strong>Adresse :</strong> ${resto.address}</div>
            <div style="margin-bottom: 8px;"><strong>Téléphone :</strong> <a href="tel:${resto.phone}" style="color: #D97706; font-weight: 700;">${resto.phone}</a></div>
            <div><strong>Horaires :</strong> ${resto.hours}</div>
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="btn btn-primary" style="flex: 1;" onclick="window.LimonadeApp.openReservationModal('${resto.id}')">
              Réserver une table maintenant
            </button>
            <a href="https://maps.google.com/?q=${encodeURIComponent(resto.name + ' ' + resto.address)}" target="_blank" class="btn btn-secondary" style="padding: 12px 18px;">
              <i class="fas fa-directions"></i> Itinéraire
            </a>
          </div>
        `;
      }

      openModal('restoDetailsModalBackdrop');
    },

    downloadFranchiseGuide: function (brandName) {
      showToast(`📥 Téléchargement en cours : Dossier d'Investissement 2026 - ${brandName}`);
      setTimeout(() => {
        showToast("Le document PDF a été généré avec succès !");
      }, 1500);
    },

    switchLanguage: function () {
      state.currentLang = state.currentLang === 'fr' ? 'en' : 'fr';
      updateLanguageDisplay();
    }
  };

})();
