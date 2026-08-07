/* ============================================
   LUXE MARCHÉ — Premium Luxury Supermarket
   Main JavaScript
   ============================================ */

'use strict';

/* ===== DATA ===== */

// Categories
const categories = [
  {
    id: 'fruits',
    name: 'Fruits',
    count: 48,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-apple-whole'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    count: 56,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-carrot'
  },
  {
    id: 'meat',
    name: 'Meat',
    count: 32,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-drumstick-bite'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    count: 28,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-fish'
  },
  {
    id: 'bakery',
    name: 'Bakery',
    count: 24,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-bread-slice'
  },
  {
    id: 'dairy',
    name: 'Dairy',
    count: 36,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-cheese'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    count: 42,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-wine-bottle'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    count: 38,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop',
    icon: 'fa-cookie-bite'
  }
];

// Products
const products = [
  {
    id: 1,
    name: 'Japanese A5 Wagyu Ribeye',
    category: 'meat',
    brand: 'Kagoshima Reserve',
    price: 49.99,
    oldPrice: 59.99,
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800&auto=format&fit=crop',
    badge: 'bestseller',
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Black Winter Truffle',
    category: 'vegetables',
    brand: 'Périgord',
    price: 45.00,
    oldPrice: null,
    rating: 5.0,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800&auto=format&fit=crop',
    badge: 'new',
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Wild Alaskan King Salmon',
    category: 'seafood',
    brand: 'North Pacific',
    price: 32.50,
    oldPrice: 39.99,
    rating: 4.8,
    reviews: 96,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'Artisan Sourdough Boule',
    category: 'bakery',
    brand: 'Maison Levain',
    price: 8.75,
    oldPrice: null,
    rating: 4.7,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: 'Aged Parmigiano Reggiano',
    category: 'dairy',
    brand: 'Emilia-Romagna',
    price: 24.99,
    oldPrice: 29.99,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Dom Pérignon Vintage 2015',
    category: 'drinks',
    brand: 'Moët & Chandon',
    price: 49.99,
    oldPrice: 59.99,
    rating: 4.8,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop',
    badge: 'bestseller',
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: 'Kobe Beef Striploin',
    category: 'meat',
    brand: 'Hyogo Prefecture',
    price: 55.00,
    oldPrice: null,
    rating: 5.0,
    reviews: 72,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
    badge: 'new',
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: 'Sicilian Blood Oranges',
    category: 'fruits',
    brand: 'Etna Orchards',
    price: 6.99,
    oldPrice: 8.99,
    rating: 4.6,
    reviews: 184,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: 'Iberico Bellota Ham',
    category: 'meat',
    brand: 'Dehesa de Extremadura',
    price: 38.50,
    oldPrice: 45.00,
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
    badge: 'bestseller',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Fresh Maine Lobster',
    category: 'seafood',
    brand: 'Atlantic Coast',
    price: 28.99,
    oldPrice: null,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=800&auto=format&fit=crop',
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: 11,
    name: 'Valrhona Grand Cru Chocolate',
    category: 'snacks',
    brand: 'Valrhona',
    price: 12.50,
    oldPrice: 15.00,
    rating: 4.8,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: true
  },
  {
    id: 12,
    name: 'Heirloom Rainbow Tomatoes',
    category: 'vegetables',
    brand: 'Green Valley Farm',
    price: 5.99,
    oldPrice: null,
    rating: 4.5,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: 13,
    name: 'Scottish Smoked Salmon',
    category: 'seafood',
    brand: 'Highland Smokehouse',
    price: 22.99,
    oldPrice: 27.99,
    rating: 4.8,
    reviews: 118,
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: false
  },
  {
    id: 14,
    name: 'French Brie de Meaux',
    category: 'dairy',
    brand: 'Île-de-France',
    price: 14.99,
    oldPrice: null,
    rating: 4.6,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop',
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: 'Organic Avocado Duo',
    category: 'fruits',
    brand: 'Mexican Highlands',
    price: 4.50,
    oldPrice: 5.99,
    rating: 4.4,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: false
  },
  {
    id: 16,
    name: 'Croissant au Beurre',
    category: 'bakery',
    brand: 'Maison Levain',
    price: 3.25,
    oldPrice: null,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    badge: 'bestseller',
    inStock: true,
    featured: false
  },
  {
    id: 17,
    name: 'Château Margaux 2010',
    category: 'drinks',
    brand: 'Bordeaux Premier Cru',
    price: 49.99,
    oldPrice: 65.00,
    rating: 5.0,
    reviews: 54,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
    badge: 'bestseller',
    inStock: true,
    featured: false
  },
  {
    id: 18,
    name: 'Pistachio Macarons (Box of 12)',
    category: 'snacks',
    brand: 'Ladurée',
    price: 18.00,
    oldPrice: 22.00,
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: false
  },
  {
    id: 19,
    name: 'Wild Mushroom Medley',
    category: 'vegetables',
    brand: 'Forest Foragers',
    price: 9.99,
    oldPrice: null,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1504545102780-9e29d1e2e0a0?q=80&w=800&auto=format&fit=crop',
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: 20,
    name: 'Greek Feta in Olive Oil',
    category: 'dairy',
    brand: 'Crete Dairy',
    price: 7.50,
    oldPrice: 9.00,
    rating: 4.5,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: false
  },
  {
    id: 21,
    name: 'Tasmanian Black Mussels',
    category: 'seafood',
    brand: 'Southern Ocean',
    price: 11.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=800&auto=format&fit=crop',
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: 22,
    name: 'Sourdough Baguette',
    category: 'bakery',
    brand: 'Maison Levain',
    price: 4.25,
    oldPrice: 5.00,
    rating: 4.8,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop',
    badge: 'discount',
    inStock: true,
    featured: false
  },
  {
    id: 23,
    name: 'White Peach Selection',
    category: 'fruits',
    brand: 'Georgia Orchards',
    price: 7.99,
    oldPrice: null,
    rating: 4.7,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5a91a9f?q=80&w=800&auto=format&fit=crop',
    badge: 'new',
    inStock: true,
    featured: false
  },
  {
    id: 24,
    name: 'Single Origin Espresso Beans',
    category: 'drinks',
    brand: 'Blue Mountain',
    price: 16.99,
    oldPrice: 19.99,
    rating: 4.9,
    reviews: 276,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop',
    badge: 'bestseller',
    inStock: true,
    featured: false
  }
];

// Reviews
const reviews = [
  {
    id: 1,
    name: 'Isabelle Laurent',
    role: 'Executive Chef, Le Cinq',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'The quality of produce at LUXE MARCHÉ is simply unmatched. The wagyu arrives perfectly marbled, the truffles are fragrant and fresh. It has become an essential partner for my kitchen.'
  },
  {
    id: 2,
    name: 'James Whitmore',
    role: 'Private Wine Collector',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Their wine selection rivals any cellar in Paris. The concierge service is impeccable — they sourced a rare vintage for me within 48 hours. Truly a five-star experience.'
  },
  {
    id: 3,
    name: 'Sophie Chen',
    role: 'Food Blogger & Critic',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'From the packaging to the delivery, everything feels luxurious. The seasonal fruit selection is extraordinary — I have never tasted peaches this perfect outside of Provence.'
  },
  {
    id: 4,
    name: 'Alexander Petrov',
    role: 'Michelin Star Restaurateur',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 4,
    text: 'Consistent quality week after week. The seafood is always pristine, and their bakery items rival the best patisseries in the city. A reliable partner for any serious kitchen.'
  },
  {
    id: 5,
    name: 'Emma Richardson',
    role: 'Lifestyle Editor, Vogue',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    text: 'LUXE MARCHÉ has elevated my dinner parties to a new level. The presentation, the freshness, the attention to detail — it is shopping as it should be: an experience.'
  }
];

// Offers
const offers = [
  {
    id: 1,
    title: 'Wagyu Weekend',
    desc: 'Premium Japanese wagyu at 20% off',
    price: 39.99,
    oldPrice: 49.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800&auto=format&fit=crop',
    productId: 1
  },
  {
    id: 2,
    title: 'Champagne Celebration',
    desc: 'Vintage champagnes for special moments',
    price: 44.99,
    oldPrice: 59.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop',
    productId: 6
  },
  {
    id: 3,
    title: 'Truffle Treasure',
    desc: 'Rare black truffles, limited stock',
    price: 36.00,
    oldPrice: 45.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800&auto=format&fit=crop',
    productId: 2
  },
  {
    id: 4,
    title: 'Seafood Symphony',
    desc: 'Fresh catch from around the world',
    price: 25.99,
    oldPrice: 32.99,
    discount: 21,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&w=800&auto=format&fit=crop',
    productId: 3
  },
  {
    id: 5,
    title: 'Cheese Cellar',
    desc: 'Aged artisanal cheeses, curated selection',
    price: 19.99,
    oldPrice: 24.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?q=80&w=800&auto=format&fit=crop',
    productId: 5
  },
  {
    id: 6,
    title: 'Chocolate Indulgence',
    desc: 'Grand cru chocolates for connoisseurs',
    price: 9.99,
    oldPrice: 12.50,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop',
    productId: 11
  }
];

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem('luxe_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('luxe_wishlist')) || [];
let currentCategory = 'all';
let currentSort = 'featured';
let currentPriceMin = 0;
let currentPriceMax = 50;
let currentBrand = 'all';
let currentRating = 0;
let inStockOnly = false;

/* ===== DOM ELEMENTS ===== */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ===== UTILITIES ===== */

// Format currency
const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

// Generate star rating HTML
const generateStars = (rating) => {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (rating >= i - 0.5) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
};

// Get product by ID
const getProductById = (id) => products.find(p => p.id === id);

// Get category by ID
const getCategoryById = (id) => categories.find(c => c.id === id);

// Get unique brands
const getBrands = () => {
  const brands = [...new Set(products.map(p => p.brand))];
  return brands.sort();
};

// Toast notification
const showToast = (message, type = 'success') => {
  const container = $('#toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-xmark' : 'fa-circle-info';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Save state to localStorage
const saveCart = () => {
  localStorage.setItem('luxe_cart', JSON.stringify(cart));
};

const saveWishlist = () => {
  localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
};

/* ===== PRELOADER ===== */
const initPreloader = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      $('#preloader').classList.add('hidden');
      document.body.style.overflow = '';
    }, 800);
  });
  // Fallback
  setTimeout(() => {
    $('#preloader').classList.add('hidden');
  }, 3000);
};

/* ===== THEME TOGGLE ===== */
const initThemeToggle = () => {
  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('luxe_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('luxe_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode activated`, 'info');
  });
};

const updateThemeIcon = (theme) => {
  const icon = $('#themeToggle i');
  icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
};

/* ===== HEADER SCROLL ===== */
const initHeaderScroll = () => {
  const header = $('#header');
  const backToTop = $('#backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

/* ===== MOBILE NAVIGATION ===== */
const initMobileNav = () => {
  const hamburger = $('#hamburger');
  const nav = $('#nav');
  const navClose = $('#navClose');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  navClose.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close nav when clicking a link
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
};

/* ===== ACTIVE NAV LINK ===== */
const initActiveNav = () => {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
};

/* ===== HERO SLIDER ===== */
const initHeroSlider = () => {
  const slides = $$('.hero-slide');
  const dotsContainer = $('#heroDots');
  let currentSlide = 0;
  let autoSlideInterval;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `hero-dot${index === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = $$('.hero-dot');

  const goToSlide = (index) => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    resetAutoSlide();
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 6000);
  };

  $('#heroNext').addEventListener('click', nextSlide);
  $('#heroPrev').addEventListener('click', prevSlide);

  // Touch support
  let touchStartX = 0;
  const hero = $('.hero');
  hero.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  hero.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  });

  resetAutoSlide();
};

/* ===== REVEAL ANIMATIONS ===== */
const initReveal = () => {
  const revealElements = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
};

/* ===== CATEGORIES ===== */
const renderCategories = () => {
  const grid = $('#categoriesGrid');
  grid.innerHTML = categories.map(category => `
    <div class="category-card" data-category="${category.id}">
      <img src="${category.image}" alt="${category.name}" loading="lazy">
      <div class="category-overlay">
        <h3 class="category-name">${category.name}</h3>
        <span class="category-count">${category.count} products</span>
      </div>
      <div class="category-arrow"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  `).join('');

  // Click to filter products
  $$('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      setCategoryFilter(category);
      $('#products').scrollIntoView({ behavior: 'smooth' });
    });
  });
};

/* ===== PRODUCTS ===== */
const renderFilterCategories = () => {
  const container = $('#filterCategories');
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.dataset.category = 'all';
  allBtn.textContent = 'All';
  container.appendChild(allBtn);

  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.category = category.id;
    btn.textContent = category.name;
    container.appendChild(btn);
  });

  $$('#filterCategories .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setCategoryFilter(btn.dataset.category);
    });
  });
};

const setCategoryFilter = (category) => {
  currentCategory = category;
  $$('#filterCategories .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderProducts();
};

const renderBrandFilter = () => {
  const container = $('#brandFilter');
  const brands = getBrands();
  container.innerHTML = `
    <label class="filter-option">
      <input type="radio" name="brand" value="all" checked>
      <span>All Brands</span>
    </label>
    ${brands.map(brand => `
      <label class="filter-option">
        <input type="radio" name="brand" value="${brand}">
        <span>${brand}</span>
      </label>
    `).join('')}
  `;

  $$('#brandFilter input[name="brand"]').forEach(input => {
    input.addEventListener('change', () => {
      currentBrand = input.value;
      renderProducts();
    });
  });
};

const getFilteredProducts = () => {
  let filtered = [...products];

  // Category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Price filter
  filtered = filtered.filter(p => p.price >= currentPriceMin && p.price <= currentPriceMax);

  // Brand filter
  if (currentBrand !== 'all') {
    filtered = filtered.filter(p => p.brand === currentBrand);
  }

  // Rating filter
  if (currentRating > 0) {
    filtered = filtered.filter(p => p.rating >= currentRating);
  }

  // Stock filter
  if (inStockOnly) {
    filtered = filtered.filter(p => p.inStock);
  }

  // Sort
  switch (currentSort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount':
      filtered.sort((a, b) => {
        const discountA = a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0;
        const discountB = b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0;
        return discountB - discountA;
      });
      break;
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return filtered;
};

const renderProducts = () => {
  const grid = $('#productsGrid');
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="cart-empty" style="grid-column: 1/-1;">
        <i class="fa-solid fa-box-open"></i>
        <p>No products match your filters.</p>
        <button class="btn btn-outline" onclick="document.getElementById('clearFilters').click()">Clear Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const isInWishlist = wishlist.includes(product.id);
    const badge = product.badge === 'discount' && discount > 0
      ? `<span class="product-badge badge-discount">-${discount}%</span>`
      : product.badge === 'new'
        ? '<span class="product-badge badge-new">New</span>'
        : product.badge === 'bestseller'
          ? '<span class="product-badge badge-bestseller">Best Seller</span>'
          : '';

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          ${badge}
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          <div class="product-actions">
            <button class="product-action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Add to wishlist">
              <i class="fa-${isInWishlist ? 'solid' : 'regular'} fa-heart"></i>
            </button>
            <button class="product-action-btn quick-view-btn" data-id="${product.id}" aria-label="Quick view">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${getCategoryById(product.category)?.name || product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            <div class="product-stars">${generateStars(product.rating)}</div>
            <span class="product-rating-count">(${product.reviews})</span>
          </div>
          <div class="product-price-row">
            <div class="product-prices">
              <span class="product-price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Add to cart">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners
  $$('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
      // Animation
      btn.classList.add('added');
      btn.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
      }, 1500);
    });
  });

  $$('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  $$('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = getProductById(parseInt(btn.dataset.id));
      if (product) showQuickView(product);
    });
  });
};

/* ===== QUICK VIEW MODAL ===== */
const showQuickView = (product) => {
  const modal = document.createElement('div');
  modal.className = 'quick-view-modal';
  modal.innerHTML = `
    <div class="quick-view-content">
      <button class="quick-view-close"><i class="fa-solid fa-xmark"></i></button>
      <div class="quick-view-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quick-view-info">
        <span class="product-category">${getCategoryById(product.category)?.name || product.category}</span>
        <h2>${product.name}</h2>
        <div class="product-rating">
          <div class="product-stars">${generateStars(product.rating)}</div>
          <span class="product-rating-count">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="quick-view-price">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <p class="quick-view-desc">${product.brand} — Premium quality, hand-selected and delivered fresh to your door.</p>
        <div class="quick-view-actions">
          <button class="btn btn-gold" id="quickViewAdd"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
          <button class="btn btn-outline" id="quickViewWishlist"><i class="fa-${wishlist.includes(product.id) ? 'solid' : 'regular'} fa-heart"></i> Wishlist</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  modal.querySelector('.quick-view-close').addEventListener('click', () => {
    modal.remove();
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  });

  modal.querySelector('#quickViewAdd').addEventListener('click', () => {
    addToCart(product.id);
    modal.remove();
    document.body.style.overflow = '';
  });

  modal.querySelector('#quickViewWishlist').addEventListener('click', () => {
    toggleWishlist(product.id);
    const btn = modal.querySelector('#quickViewWishlist');
    btn.innerHTML = `<i class="fa-${wishlist.includes(product.id) ? 'solid' : 'regular'} fa-heart"></i> ${wishlist.includes(product.id) ? 'In Wishlist' : 'Wishlist'}`;
  });
};

/* ===== FILTERS ===== */
const initFilters = () => {
  // Sort
  $('#sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Price range
  const priceMin = $('#priceMin');
  const priceMax = $('#priceMax');

  const updatePrice = () => {
    const min = parseInt(priceMin.value);
    const max = parseInt(priceMax.value);
    if (min > max) {
      priceMin.value = max;
      currentPriceMin = max;
    } else {
      currentPriceMin = min;
    }
    currentPriceMax = max;
    $('#priceMinLabel').textContent = `$${currentPriceMin}`;
    $('#priceMaxLabel').textContent = `$${currentPriceMax}`;
    renderProducts();
  };

  priceMin.addEventListener('input', updatePrice);
  priceMax.addEventListener('input', updatePrice);

  // Rating
  $$('#ratingFilter input[name="rating"]').forEach(input => {
    input.addEventListener('change', () => {
      currentRating = parseFloat(input.value);
      renderProducts();
    });
  });

  // Stock
  $('#inStockOnly').addEventListener('change', (e) => {
    inStockOnly = e.target.checked;
    renderProducts();
  });

  // Clear filters
  $('#clearFilters').addEventListener('click', () => {
    currentCategory = 'all';
    currentSort = 'featured';
    currentPriceMin = 0;
    currentPriceMax = 50;
    currentBrand = 'all';
    currentRating = 0;
    inStockOnly = false;

    // Reset UI
    $$('#filterCategories .filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    $('#sortSelect').value = 'featured';
    priceMin.value = 0;
    priceMax.value = 50;
    $('#priceMinLabel').textContent = '$0';
    $('#priceMaxLabel').textContent = '$50';
    $$('#brandFilter input[name="brand"]').forEach(input => {
      input.checked = input.value === 'all';
    });
    $$('#ratingFilter input[name="rating"]').forEach(input => {
      input.checked = input.value === '0';
    });
    $('#inStockOnly').checked = false;

    renderProducts();
    showToast('All filters cleared', 'info');
  });

  // Filter toggle (mobile)
  $('#filterToggle').addEventListener('click', () => {
    $('#filterSidebar').classList.toggle('active');
  });
};

/* ===== OFFERS CAROUSEL ===== */
const initOffersCarousel = () => {
  const track = $('#offersTrack');
  let currentIndex = 0;
  let itemsPerView = 3;

  const updateItemsPerView = () => {
    if (window.innerWidth <= 480) itemsPerView = 1;
    else if (window.innerWidth <= 768) itemsPerView = 1;
    else if (window.innerWidth <= 992) itemsPerView = 2;
    else itemsPerView = 3;
  };

  const renderOffers = () => {
    track.innerHTML = offers.map(offer => `
      <div class="offer-card">
        <div class="offer-image">
          <span class="offer-discount">-${offer.discount}%</span>
          <img src="${offer.image}" alt="${offer.title}" loading="lazy">
        </div>
        <div class="offer-content">
          <h3 class="offer-title">${offer.title}</h3>
          <p class="offer-desc">${offer.desc}</p>
          <div class="offer-price-row">
            <div>
              <span class="offer-price">${formatPrice(offer.price)}</span>
              <span class="offer-price-old">${formatPrice(offer.oldPrice)}</span>
            </div>
            <button class="offer-btn" data-id="${offer.productId}">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');

    $$('.offer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        addToCart(parseInt(btn.dataset.id));
      });
    });
  };

  const updateCarousel = () => {
    const maxIndex = Math.max(0, offers.length - itemsPerView);
    currentIndex = Math.min(currentIndex, maxIndex);
    const offset = currentIndex * (100 / itemsPerView);
    track.style.transform = `translateX(-${offset}%)`;
  };

  const next = () => {
    const maxIndex = Math.max(0, offers.length - itemsPerView);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  };

  $('#offersNext').addEventListener('click', next);
  $('#offersPrev').addEventListener('click', prev);

  window.addEventListener('resize', () => {
    updateItemsPerView();
    updateCarousel();
  });

  renderOffers();
  updateItemsPerView();
  updateCarousel();
};

/* ===== BEST SELLERS ===== */
const renderBestSellers = () => {
  const grid = $('#bestsellersGrid');
  const bestSellers = products
    .filter(p => p.badge === 'bestseller' || p.reviews > 150)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 4);

  grid.innerHTML = bestSellers.map(product => {
    const isInWishlist = wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <span class="product-badge badge-bestseller">Best Seller</span>
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          <div class="product-actions">
            <button class="product-action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Add to wishlist">
              <i class="fa-${isInWishlist ? 'solid' : 'regular'} fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${getCategoryById(product.category)?.name || product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            <div class="product-stars">${generateStars(product.rating)}</div>
            <span class="product-rating-count">(${product.reviews})</span>
          </div>
          <div class="product-price-row">
            <div class="product-prices">
              <span class="product-price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Add to cart">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners
  $$('#bestsellersGrid .add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
      btn.classList.add('added');
      btn.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
      }, 1500);
    });
  });

  $$('#bestsellersGrid .wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });
};

/* ===== REVIEWS SLIDER ===== */
const initReviewsSlider = () => {
  const track = $('#reviewsTrack');
  const dotsContainer = $('#reviewsDots');
  let currentIndex = 0;

  // Render reviews
  track.innerHTML = reviews.map(review => `
    <div class="review-card">
      <div class="review-quote"><i class="fa-solid fa-quote-left"></i></div>
      <p class="review-text">"${review.text}"</p>
      <div class="review-stars">${generateStars(review.rating)}</div>
      <div class="review-author">
        <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
        <div>
          <div class="review-name">${review.name}</div>
          <div class="review-role">${review.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Create dots
  reviews.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `reviews-dot${index === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Review ${index + 1}`);
    dot.addEventListener('click', () => goToReview(index));
    dotsContainer.appendChild(dot);
  });

  const dots = $$('.reviews-dot');

  const goToReview = (index) => {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  $('#reviewsNext').addEventListener('click', () => {
    goToReview((currentIndex + 1) % reviews.length);
  });

  $('#reviewsPrev').addEventListener('click', () => {
    goToReview((currentIndex - 1 + reviews.length) % reviews.length);
  });

  // Auto-advance
  setInterval(() => {
    goToReview((currentIndex + 1) % reviews.length);
  }, 8000);
};

/* ===== SEARCH ===== */
const initSearch = () => {
  const searchOverlay = $('#searchOverlay');
  const searchInput = $('#searchInput');
  const suggestions = $('#searchSuggestions');

  const openSearch = () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 300);
  };

  const closeSearch = () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    suggestions.innerHTML = '';
  };

  $('#searchTrigger').addEventListener('click', openSearch);
  $('#searchClose').addEventListener('click', closeSearch);

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
    if (e.key === '/' && !searchOverlay.classList.contains('active')) {
      e.preventDefault();
      openSearch();
    }
  });

  // Live search suggestions
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 2) {
      suggestions.innerHTML = '';
      return;
    }

    const results = products
      .filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        getCategoryById(p.category)?.name.toLowerCase().includes(query)
      )
      .slice(0, 6);

    if (results.length === 0) {
      suggestions.innerHTML = `
        <div class="search-suggestion" style="justify-content: center; color: var(--color-gray-400);">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>No results found for "${query}"</span>
        </div>
      `;
      return;
    }

    suggestions.innerHTML = results.map(product => `
      <div class="search-suggestion" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <div class="search-suggestion-info">
          <div class="search-suggestion-name">${product.name}</div>
          <div class="search-suggestion-category">${getCategoryById(product.category)?.name || product.category} • ${product.brand}</div>
        </div>
        <span class="search-suggestion-price">${formatPrice(product.price)}</span>
      </div>
    `).join('');

    // Click suggestion
    $$('.search-suggestion[data-id]').forEach(suggestion => {
      suggestion.addEventListener('click', () => {
        const product = getProductById(parseInt(suggestion.dataset.id));
        if (product) {
          closeSearch();
          showQuickView(product);
        }
      });
    });
  });

  // Submit search
  $('#searchSubmit').addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      closeSearch();
      // Filter products by search
      currentCategory = 'all';
      $$('#filterCategories .filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
      });
      renderProducts();
      $('#products').scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing results for "${query}"`, 'info');
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      $('#searchSubmit').click();
    }
  });
};

/* ===== CART ===== */
const addToCart = (productId) => {
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart();
  updateCartUI();
  const product = getProductById(productId);
  showToast(`${product.name} added to cart`);
};

const removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart', 'info');
};

const updateCartQuantity = (productId, delta) => {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart();
    updateCartUI();
  }
};

const clearCart = () => {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared', 'info');
};

const getCartTotal = () => {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
};

const getCartCount = () => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};

const updateCartUI = () => {
  const count = getCartCount();
  const total = getCartTotal();

  $('#cartCount').textContent = count;
  $('#cartSidebarCount').textContent = `(${count})`;
  $('#cartSubtotal').textContent = formatPrice(total);
  $('#cartTotal').textContent = formatPrice(total);

  const cartItems = $('#cartItems');
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Your cart is empty</p>
        <button class="btn btn-outline" onclick="document.getElementById('cartClose').click()">Continue Shopping</button>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => {
      const product = getProductById(item.id);
      if (!product) return '';
      return `
        <div class="cart-item" data-id="${item.id}">
          <img src="${product.image}" alt="${product.name}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">${formatPrice(product.price)}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" data-id="${item.id}" data-delta="-1"><i class="fa-solid fa-minus"></i></button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="qty-btn" data-id="${item.id}" data-delta="1"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
          <button class="cart-item-remove" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    }).join('');

    // Attach event listeners
    $$('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        updateCartQuantity(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
      });
    });

    $$('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.id));
      });
    });
  }
};

/* ===== WISHLIST ===== */
const toggleWishlist = (productId) => {
  const index = wishlist.indexOf(productId);
  const product = getProductById(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`${product.name} removed from wishlist`, 'info');
  } else {
    wishlist.push(productId);
    showToast(`${product.name} added to wishlist`);
  }
  saveWishlist();
  updateWishlistUI();
  renderProducts();
  renderBestSellers();
};

const updateWishlistUI = () => {
  const count = wishlist.length;
  $('#wishlistCount').textContent = count;
  $('#wishlistSidebarCount').textContent = `(${count})`;

  const wishlistItems = $('#wishlistItems');
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="cart-empty">
        <i class="fa-regular fa-heart"></i>
        <p>Your wishlist is empty</p>
        <button class="btn btn-outline" onclick="document.getElementById('wishlistClose').click()">Continue Shopping</button>
      </div>
    `;
  } else {
    wishlistItems.innerHTML = wishlist.map(id => {
      const product = getProductById(id);
      if (!product) return '';
      return `
        <div class="cart-item" data-id="${id}">
          <img src="${product.image}" alt="${product.name}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">${formatPrice(product.price)}</div>
            <button class="btn btn-outline btn-block" style="padding: 0.5rem 1rem; font-size: 0.85rem;" data-add="${id}">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          </div>
          <button class="cart-item-remove" data-id="${id}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    }).join('');

    // Attach event listeners
    $$('#wishlistItems [data-add]').forEach(btn => {
      btn.addEventListener('click', () => {
        addToCart(parseInt(btn.dataset.add));
      });
    });

    $$('#wishlistItems .cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleWishlist(parseInt(btn.dataset.id));
      });
    });
  }
};

/* ===== SIDEBARS ===== */
const initSidebars = () => {
  const cartSidebar = $('#cartSidebar');
  const cartOverlay = $('#cartOverlay');
  const wishlistSidebar = $('#wishlistSidebar');
  const wishlistOverlay = $('#wishlistOverlay');

  const openCart = () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeCart = () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  const openWishlist = () => {
    wishlistSidebar.classList.add('active');
    wishlistOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeWishlist = () => {
    wishlistSidebar.classList.remove('active');
    wishlistOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  $('#cartTrigger').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  $('#wishlistTrigger').addEventListener('click', openWishlist);
  $('#wishlistClose').addEventListener('click', closeWishlist);
  wishlistOverlay.addEventListener('click', closeWishlist);

  // Checkout
  $('#checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is empty', 'error');
      return;
    }
    showToast('Order placed successfully! Thank you for shopping with LUXE MARCHÉ.');
    clearCart();
    closeCart();
  });

  // Clear cart
  $('#clearCartBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is already empty', 'info');
      return;
    }
    clearCart();
  });

  // Wishlist to cart
  $('#wishlistToCart').addEventListener('click', () => {
    if (wishlist.length === 0) {
      showToast('Your wishlist is empty', 'error');
      return;
    }
    wishlist.forEach(id => {
      const existingItem = cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ id, quantity: 1 });
      }
    });
    saveCart();
    updateCartUI();
    showToast(`${wishlist.length} items added to cart`);
    closeWishlist();
  });
};

/* ===== NEWSLETTER ===== */
const initNewsletter = () => {
  $('#newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#newsletterEmail').value;
    if (email) {
      showToast('Welcome to the Inner Circle! Check your inbox.');
      $('#newsletterEmail').value = '';
    }
  });
};

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initPreloader();
  initThemeToggle();
  initHeaderScroll();
  initMobileNav();
  initActiveNav();
  initHeroSlider();
  initReveal();
  initSearch();
  initSidebars();
  initNewsletter();
  initFilters();
  initOffersCarousel();
  initReviewsSlider();

  // Render data
  renderCategories();
  renderFilterCategories();
  renderBrandFilter();
  renderProducts();
  renderBestSellers();

  // Update UI
  updateCartUI();
  updateWishlistUI();
});
