const STORAGE_KEYS = {
  cart: "restaurant-cart",
  theme: "restaurant-theme",
  reviews: "restaurant-reviews",
  orders: "restaurant-orders",
  customerOrder: "customer-order",
  incomingOrders: "incoming_orders",
  menu: "restaurant-menu",
  language: "restaurant-language",
};

const ADMIN_PASSWORD = "AdminPass2026";
const telegramUser = "miki7589";

const TRANSLATIONS = {
  am: {
    appTitle: "ሀበሻ ሬስቶራንት እና ባር",
    appSubtitle: "የተመረጡ የባህል ምግቦች እና መጠጦች",
    promoBanner: "🎓 ተማሪ ቅናሽ! STUDENT10 በመጠቀም 10% ቅናሽ ያገኛሉ",
    callUs: "📞 ይደውሉ",
    locationMap: "📍 የአድራሻ ካርታ",
    adminBtn: "🔒 Admin",
    langToggleLabel: "🌐 English",
    themeDark: "🌙 Dark",
    themeLight: "☀️ Light",
    searchPlaceholder: "ምግብ ፈልግ...",
    catAll: "ሁሉም",
    catFasting: "የፆም",
    catNonFasting: "የፍስክ",
    catBeverage: "መጠጦች",
    reviewsTitle: "የህዝብ ግምገማዎች",
    yourOrder: "የእርስዎ ትዕዛዝ",
    noActiveOrder: "ምንም ንቁ ትዕዛዝ የለም። ከመን ላይ ያሉ ምግቦችን ይጨምሩ።",
    cartEmpty: "የእርስዎ ትዕዛዝ ባዶ ነው።",
    total: "ጠቅላላ",
    discountedTotal: "የተቀነሰ ጠቅላላ",
    checkoutBtn: "በትዕዛዝ ይቀጥሉ",
    inStock: "ቀሪ",
    outOfStock: "አልቋል",
    fastPrep: "በፍጥነት የሚደርስ",
    addBtn: "አክል",
    outOfStockBtn: "የተሸጠ",
    currency: "ብር",
    promoCodeLabel: "ፕሮሞ ኮድ",
    promoHint: "10% ቅናሽ ለማግኘት STUDENT10 ያስገቡ",
    invalidPromo: "የተሳሳተ ፕሮሞ ኮድ",
    promoSuccess: "10% ቅናሽ ተተግብሯል",
    delete: "ሰርዝ",
    itemAdded: "እቃ ወደ ቅርጫት ተጨምሯል!",
    cartAdjusted: "የእቃዎች ብዛት ለተገኘው መጠን ተ አስተካክሏል",
    closeAdmin: "✕ Close Admin",
    adminDashboardTitle: "Admin Analytics Dashboard",
    adminDashboardDesc: "የዕቃዎች ቁጥጥር፣ ትዕዛዞች፣ ግምገማዎች እና አጠቃላይ ገቢ በአንድ ቦታ።",
    activeVisitors: "ንቁ ጎብኚዎች",
    totalRevenue: "አጠቃላይ ገቢ",
    totalCost: "አጠቃላይ ወጪ",
    netProfit: "የተጣራ ትርፍ",
    profitMargin: "የትርፍ ህዳግ",
    inventoryMgmt: "የዕቃዎች ቁጥጥር",
    orderMgmt: "የትዕዛዝ ቁጥጥር",
    incomingOrders: "አዲስ ትዕዛዞች",
    topSelling: "በብዛት የተሸጡ",
    leastSelling: "በአነስተኛ የተሸጡ",
    reviewModeration: "የግምገማዎች ቁጥጥር",
    adminLoginTitle: "የአድሚን መግቢያ",
    adminLoginDesc: "ዳሽቦርዱን ለመክፈት የምስጢር ቁጥር ያስገቡ።",
    passcodeLabel: "የምስጢር ቁጥር",
    unlockDashboard: "ዳሽቦርዱን ክፈት",
    checkoutTitle: "ትዕዛዝ ማጠናቀቂያ",
    fullName: "ስም",
    phoneNumber: "ስልክ",
    tableOrAddress: "ሰሌዳ / የማድረሻ አድራሻ",
    sendTelegramBtn: "በትሌግራም እዘዝ",
    cancel: "ሰርዝ",
    addReviewTitle: "ግምገማ ይጻፉ",
    yourName: "ስም",
    yourComment: "አስተያየትዎት",
    saveReview: "አስተያየት ላክ",
    noReviewsYet: "ምንም ግምገማዎች የሉም",
    noSalesYet: "ምንም ሽያጭ የለም",
    noIncomingOrders: "ምንም አዲስ ትዕዛዝ የለም",
    noReviews: "ግምገማ የለም",
    statusPending: "በመጠባበቅ ላይ",
    statusPreparing: "በዝግጅት ላይ",
    statusReady: "ዝግጁ ነው",
    statusCompleted: "ተጠናቋል",
  },
  en: {
    appTitle: "Habesha Restaurant & Bar",
    appSubtitle: "Selected Traditional Foods and Beverages",
    promoBanner: "🎓 Student Discount! Use STUDENT10 for 10% off",
    callUs: "📞 Call Us",
    locationMap: "📍 Location Map",
    adminBtn: "🔒 Admin",
    langToggleLabel: "🌐 አማርኛ",
    themeDark: "🌙 Dark",
    themeLight: "☀️ Light",
    searchPlaceholder: "Search food...",
    catAll: "All",
    catFasting: "Fasting",
    catNonFasting: "Non-Fasting",
    catBeverage: "Drinks",
    reviewsTitle: "Customer Reviews",
    yourOrder: "Your Order",
    noActiveOrder: "No active order. Add food items from the menu.",
    cartEmpty: "Your cart is empty.",
    total: "Total",
    discountedTotal: "Discounted Total",
    checkoutBtn: "Proceed to Checkout",
    inStock: "left",
    outOfStock: "Out of stock",
    fastPrep: "Fast prep",
    addBtn: "Add",
    outOfStockBtn: "Sold Out",
    currency: "ETB",
    promoCodeLabel: "Promo Code",
    promoHint: "Enter STUDENT10 for 10% off",
    invalidPromo: "Invalid promo code",
    promoSuccess: "10% discount applied",
    delete: "Delete",
    itemAdded: "Item added to cart!",
    cartAdjusted: "Cart quantities adjusted for current stock.",
    closeAdmin: "✕ Close Admin",
    adminDashboardTitle: "Admin Analytics Dashboard",
    adminDashboardDesc: "Inventory, orders, reviews, and profitability in one secure control panel.",
    activeVisitors: "Active Visitors",
    totalRevenue: "Total Revenue",
    totalCost: "Total Cost",
    netProfit: "Net Profit",
    profitMargin: "Profit Margin",
    inventoryMgmt: "Inventory Management",
    orderMgmt: "Order Management",
    incomingOrders: "Incoming Orders",
    topSelling: "Top Selling Items",
    leastSelling: "Least Selling Items",
    reviewModeration: "Review Moderation",
    adminLoginTitle: "Admin Login",
    adminLoginDesc: "Enter the secure admin passcode to access analytics and order controls.",
    passcodeLabel: "Passcode",
    unlockDashboard: "Unlock Dashboard",
    checkoutTitle: "Checkout Order",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    tableOrAddress: "Table No / Delivery Address",
    sendTelegramBtn: "Order via Telegram",
    cancel: "Cancel",
    addReviewTitle: "Write a Review",
    yourName: "Name",
    yourComment: "Your Comment",
    saveReview: "Save Review",
    noReviewsYet: "No approved reviews yet.",
    noSalesYet: "No sales yet.",
    noIncomingOrders: "No incoming orders.",
    noReviews: "No reviews",
    statusPending: "Pending",
    statusPreparing: "Preparing",
    statusReady: "Ready",
    statusCompleted: "Completed",
  },
};

const ITEM_TRANSLATIONS = {
  "በያይነቱ": { name: "Beyaynetu", category: "Fasting" },
  "ሽሮ ላላ": { name: "Shiro Lala", category: "Fasting" },
  "ሽሮ ፈሰስ": { name: "Shiro Feses", category: "Fasting" },
  "ፓስታ በአትክልት": { name: "Veggie Pasta", category: "Fasting" },
  "ክክ አልጫ": { name: "Kik Alicha", category: "Fasting" },
  "ዶሮ ወጥ": { name: "Doro Wat", category: "Non-Fasting" },
  "ክትፎ": { name: "Kitfo", category: "Non-Fasting" },
  "ልዩ ጥብስ": { name: "Special Tibs", category: "Non-Fasting" },
  "ዳሽን ቢራ": { name: "Dashen Beer", category: "Drinks" },
  "ጠጅ (በብርሌ)": { name: "Tej", category: "Drinks" },
  "የቤት አረቄ (ሾት)": { name: "Home Areke", category: "Drinks" },
};

const defaultMenuItems = [
  {
    id: 1,
    name: "በያይነቱ",
    category: "የፆም",
    price: 150,
    costPrice: 90,
    stock: 10,
    prepEstimate: 8,
    img: "image/ባአይነት.jpeg",
  },
  {
    id: 2,
    name: "ሽሮ ላላ",
    category: "የፆም",
    price: 120,
    costPrice: 70,
    stock: 12,
    prepEstimate: 9,
    img: "image/shiro.jpeg",
  },
  {
    id: 3,
    name: "ሽሮ ፈሰስ",
    category: "የፆም",
    price: 100,
    costPrice: 55,
    stock: 6,
    prepEstimate: 9,
    img: "image/fesest.jpg",
  },
  {
    id: 4,
    name: "ፓስታ በአትክልት",
    category: "የፆም",
    price: 130,
    costPrice: 75,
    stock: 8,
    prepEstimate: 11,
    img: "image/pastaat.jpg",
  },
  {
    id: 5,
    name: "ክክ አልጫ",
    category: "የፆም",
    price: 80,
    costPrice: 40,
    stock: 3,
    prepEstimate: 7,
    img: "image/kikalcha.jpeg",
  },
  {
    id: 6,
    name: "ዶሮ ወጥ",
    category: "የፍስክ",
    price: 600,
    costPrice: 310,
    stock: 5,
    prepEstimate: 15,
    img: "image/dero.jpeg",
  },
  {
    id: 7,
    name: "ክትፎ",
    category: "የፍስክ",
    price: 500,
    costPrice: 260,
    stock: 4,
    prepEstimate: 14,
    img: "image/ki.jpeg",
  },
  {
    id: 8,
    name: "ልዩ ጥብስ",
    category: "የፍስክ",
    price: 450,
    costPrice: 230,
    stock: 2,
    prepEstimate: 18,
    img: "image/tibs.jpg",
  },
  {
    id: 10,
    name: "ዳሽን ቢራ",
    category: "መጠጥ",
    price: 120,
    costPrice: 60,
    stock: 14,
    prepEstimate: 4,
    img: "image/bira.jpeg",
  },
  {
    id: 12,
    name: "ጠጅ (በብርሌ)",
    category: "መጠጥ",
    price: 100,
    costPrice: 50,
    stock: 18,
    prepEstimate: 3,
    img: "image/teg.jpg",
  },
  {
    id: 13,
    name: "የቤት አረቄ (ሾት)",
    category: "መጠጥ",
    price: 50,
    costPrice: 25,
    stock: 20,
    prepEstimate: 2,
    img: "image/ar.jpeg",
  },
];

let menuItems = loadMenuItems();
let cart = loadCart();
let orders = loadOrders();
let incomingOrders = loadIncomingOrders();
let activeCategory = "All";
let searchQuery = "";
let reviews = loadReviews();
let reviewTargetId = null;
let reviewRating = 0;
let countdownTimer = null;
let currentCountdownSeconds = 0;
let countdownStartedAt = null;
let activeOrderId = null;
let activeUsers = getRandomInt(12, 40);

function getCurrentLang() {
  return localStorage.getItem(STORAGE_KEYS.language) || "am";
}

function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEYS.language, lang);
  document.documentElement.lang = lang;
  applyLanguageUI();
}

function toggleLanguage() {
  const current = getCurrentLang();
  const next = current === "am" ? "en" : "am";
  setLanguage(next);
}

function getTranslatedItemName(originalName) {
  const lang = getCurrentLang();
  if (lang === "en" && ITEM_TRANSLATIONS[originalName]) {
    return ITEM_TRANSLATIONS[originalName].name;
  }
  return originalName;
}

function getTranslatedCategory(originalCategory) {
  const lang = getCurrentLang();
  if (lang === "en") {
    const map = {
      "የፆም": "Fasting",
      "የፍስክ": "Non-Fasting",
      "መጠጥ": "Drinks",
      "All": "All",
    };
    return map[originalCategory] || originalCategory;
  }
  return originalCategory;
}

function applyLanguageUI() {
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.textContent = t.langToggleLabel;
  }

  const currentTheme = document.body.getAttribute("data-theme") || "light";
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.textContent = currentTheme === "dark" ? t.themeLight : t.themeDark;
  }

  renderMenu(getFilteredItems());
  renderCart();
  renderPublicReviews();
  renderOrdersSidebar();
  const adminPanel = document.getElementById("admin-panel");
  if (adminPanel && !adminPanel.classList.contains("hidden")) {
    updateAdminPanel();
  }
}

function loadMenuItems() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.menu);
    return saved ? JSON.parse(saved) : defaultMenuItems;
  } catch (error) {
    return defaultMenuItems;
  }
}

function saveMenuItems() {
  localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(menuItems));
}

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.cart);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function loadReviews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.reviews);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveReviews() {
  localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(reviews));
}

function loadOrders() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.orders);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
}

function loadIncomingOrders() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.incomingOrders);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveIncomingOrders() {
  localStorage.setItem(
    STORAGE_KEYS.incomingOrders,
    JSON.stringify(incomingOrders),
  );
}

function syncIncomingOrders() {
  incomingOrders = orders.filter((order) => order.status !== "Completed");
  saveIncomingOrders();
}

function getPendingOrders() {
  return orders
    .filter((order) => order.status !== "Completed")
    .sort((a, b) => a.createdAt - b.createdAt);
}

function refreshOrderQueuePositions() {
  const pending = getPendingOrders();
  pending.forEach((order, index) => {
    order.queuePosition = index + 1;
  });
  saveOrders();
}

function getFilteredItems() {
  return menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      getTranslatedItemName(item.name).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function renderMenu(items) {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  items.forEach((item) => {
    const approvedReviews = reviews.filter(
      (review) => review.itemId === item.id && review.status === "approved",
    );
    const average = approvedReviews.length
      ? (
          approvedReviews.reduce((sum, review) => sum + review.rating, 0) /
          approvedReviews.length
        ).toFixed(1)
      : t.noReviews;
    const reviewCount = approvedReviews.length;
    const isOutOfStock = item.stock <= 0;

    const displayName = getTranslatedItemName(item.name);
    const displayCategory = getTranslatedCategory(item.category);

    const card = document.createElement("article");
    card.className = "menu-card p-4";
    card.innerHTML = `
      <div class="menu-card-badges">
        <span class="badge ${isOutOfStock ? "out-of-stock" : "in-stock"}">
          ${isOutOfStock ? t.outOfStock : `${item.stock} ${t.inStock}`}
        </span>
        ${item.prepEstimate <= 10 ? `<span class="badge fast">${t.fastPrep}</span>` : ""}
      </div>
      <div class="image-shell loaded">
        <img src="${item.img}" alt="${displayName}" class="menu-image" loading="lazy" />
      </div>
      <h3 class="text-lg font-bold">${displayName}</h3>
      <p class="text-sm text-slate-500 mb-2">${displayCategory}</p>
      <div class="rating-row mb-3 flex items-center gap-2 text-sm">
        <button type="button" class="star-btn text-amber-500 text-base" data-action="rate" data-id="${item.id}">★</button>
        <span class="font-semibold">${average}</span>
        <span class="text-slate-400">(${reviewCount})</span>
      </div>
      <p class="mb-4 font-bold text-emerald-600 text-lg">${item.price} ${t.currency}</p>
      <button type="button" class="add-to-cart w-full rounded-xl px-4 py-2.5 font-semibold transition ${
        isOutOfStock
          ? "disabled-button"
          : "btn-active"
      }" data-id="${item.id}" ${isOutOfStock ? "disabled" : ""}>
        ${isOutOfStock ? t.outOfStockBtn : t.addBtn}
      </button>
    `;

    grid.appendChild(card);
  });
}

function updateFilterButtons() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.category === activeCategory,
    );
  });
}

function filterMenu(category) {
  activeCategory = category;
  updateFilterButtons();
  renderMenu(getFilteredItems());
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = count;
}

function openCart() {
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-drawer").classList.add("open");
}

function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-drawer").classList.remove("open");
}

function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const promoInput = document.getElementById("promo-code");
  const promoCode = promoInput ? promoInput.value.trim().toUpperCase() : "";
  let adjusted = false;

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  cart = cart.map((item) => {
    const menuItem = menuItems.find((menuItem) => menuItem.id === item.id);
    if (menuItem && item.quantity > menuItem.stock) {
      item.quantity = menuItem.stock;
      adjusted = true;
    }
    return item;
  });

  cart = cart.filter((item) => item.quantity > 0);
  if (adjusted) {
    saveCart();
    showToast(t.cartAdjusted);
  }

  if (!cart.length) {
    container.innerHTML = `<p class="text-center text-slate-500">${t.cartEmpty}</p>`;
    document.getElementById("cart-total").textContent = `0 ${t.currency}`;
    document.getElementById("discounted-total").textContent = `0 ${t.currency}`;
    document.getElementById("promo-message").textContent = t.promoHint;
    document.getElementById("promo-message").className = "promo-message";
    updateCartBadge();
    return;
  }

  container.innerHTML = cart
    .map((item) => {
      const outOfStockLabel =
        item.quantity >
        (menuItems.find((menuItem) => menuItem.id === item.id)?.stock || 0)
          ? " (limited stock)"
          : "";
      const displayName = getTranslatedItemName(item.name);
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${displayName}" />
          <div class="flex-1">
            <div class="flex items-start justify-between gap-2">
              <div>
                <h4 class="font-semibold">${displayName}</h4>
                <p class="text-sm text-emerald-600">${item.price} ${t.currency}${outOfStockLabel}</p>
              </div>
              <button type="button" class="text-sm text-rose-500" data-action="delete" data-id="${item.id}">${t.delete}</button>
            </div>
            <div class="mt-3 flex items-center justify-between gap-2">
              <div class="quantity-controls">
                <button type="button" data-action="decrease" data-id="${item.id}">−</button>
                <span class="min-w-6 text-center">${item.quantity}</span>
                <button type="button" data-action="increase" data-id="${item.id}">+</button>
              </div>
              <span class="font-semibold">${item.price * item.quantity} ${t.currency}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const validPromo = promoCode === "STUDENT10";
  const discount = validPromo ? 0.1 : 0;
  const discountedTotal = Math.round(total * (1 - discount));

  document.getElementById("cart-total").textContent = `${total} ${t.currency}`;
  document.getElementById("discounted-total").textContent = `${discountedTotal} ${t.currency}`;
  document.getElementById("promo-message").textContent = promoCode
    ? validPromo
      ? t.promoSuccess
      : t.invalidPromo
    : t.promoHint;
  document.getElementById("promo-message").className =
    `promo-message ${validPromo ? "success" : promoCode ? "error" : ""}`;
  updateCartBadge();
}

function addToCart(id) {
  const item = menuItems.find((menuItem) => menuItem.id === id);
  if (!item) return;

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  if (item.stock <= 0) {
    showToast(lang === "en" ? "Sorry, item is out of stock" : "ይቅር ይገባል፣ እቃው አልቋል");
    return;
  }

  const existingItem = cart.find((cartItem) => cartItem.id === id);
  if (existingItem) {
    if (existingItem.quantity >= item.stock) {
      showToast(lang === "en" ? "Maximum stock limit reached" : "የቀሪ እቃ አልባ");
      return;
    }
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart();
  renderCart();
  renderOrdersSidebar();
  showToast(t.itemAdded);
  bumpCartButton();
}

function estimateBasePrepTime() {
  const totalMinutes = cart.reduce(
    (sum, item) => sum + item.quantity * item.prepEstimate,
    0,
  );
  return Math.max(12, totalMinutes);
}

function getQueueAdjustedPrepTime(baseMinutes, queuePosition) {
  return Math.max(baseMinutes, baseMinutes + (queuePosition - 1) * 3);
}

function getPrepComplexityLabel(minutes) {
  if (minutes <= 12) return "Fast prep";
  if (minutes <= 20) return "Standard prep";
  return "Complex order";
}

async function generateCookTimeExplanation(order, queuePosition) {
  const lang = getCurrentLang();
  const fallback = lang === "en" 
    ? `You are #${queuePosition} in queue. Estimated prep time is ${order.estimatedMinutes} mins.`
    : `እርስዎ ${queuePosition}ኛ ትዕዛዝ ላይ ነዎት፣ የተጠቃሚ ዝግጅት ${order.estimatedMinutes} ደቂቃ ነው።`;
  return fallback;
}

function getStatusLabel(status) {
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;
  const map = {
    Pending: t.statusPending,
    Preparing: t.statusPreparing,
    Ready: t.statusReady,
    Completed: t.statusCompleted,
  };
  return map[status] || status;
}

function updateOrderStatusCard(order) {
  const badge = document.getElementById("success-status-badge");
  if (badge) {
    badge.textContent = getStatusLabel(order.status);
    badge.className = `status-badge ${order.status.toLowerCase()}`;
  }
  const countdownBadge = document.getElementById("success-countdown-badge");
  if (countdownBadge) {
    countdownBadge.textContent = getStatusLabel(order.status);
    countdownBadge.className = `status-badge ${order.status.toLowerCase()}`;
  }
  const prep = document.getElementById("success-prep-text");
  if (prep) {
    const lang = getCurrentLang();
    prep.textContent = lang === "en"
      ? `Queue position #${order.queuePosition} · ${order.estimatedMinutes} mins prep time`
      : `እርስዎ ${order.queuePosition}ኛ ትዕዛዝ ላይ ነዎት · ${order.estimatedMinutes} ደቂቃ ተጠቃሚ ጊዜ`;
  }

  const sidebarBadge = document.getElementById("sidebar-status-badge");
  if (sidebarBadge) {
    sidebarBadge.textContent = getStatusLabel(order.status);
    sidebarBadge.className = `status-badge ${order.status.toLowerCase()}`;
  }
}

function loadCustomerOrder() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.customerOrder);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    return null;
  }
}

function saveCustomerOrder(order) {
  localStorage.setItem(STORAGE_KEYS.customerOrder, JSON.stringify(order));
}

function showOrderSuccess(order) {
  const modal = document.getElementById("order-success-modal");
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  document.getElementById("success-order-number").textContent = `#${order.number}`;
  document.getElementById("success-order-items").innerHTML = order.items
    .map(
      (it) =>
        `<li class="flex items-center justify-between gap-2"><span>${getTranslatedItemName(it.name)} × ${it.quantity}</span><span>${it.price * it.quantity} ${t.currency}</span></li>`,
    )
    .join("");
  document.getElementById("success-order-total").textContent = `${order.payable} ${t.currency}`;
  document.getElementById("success-delivery-time").textContent = `${order.estimatedMinutes}`;
  modal.classList.add("open");
  renderOrdersSidebar(order);
  startOrderCountdown(order);
}

function renderOrdersSidebar(order) {
  const body = document.getElementById("orders-sidebar-body");
  if (!body) return;

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  if (!order) order = loadCustomerOrder();
  if (order && order.status !== "Completed") {
    body.innerHTML = `
      <div class="sidebar-row">
        <span class="font-semibold">${lang === "en" ? "Order" : "እርከን"}</span>
        <span>#${order.number}</span>
      </div>
      <div class="sidebar-row">
        <span class="font-semibold">${lang === "en" ? "Status" : "ሁኔታ"}</span>
        <span id="sidebar-status-badge" class="status-badge ${order.status.toLowerCase()}">${getStatusLabel(order.status)}</span>
      </div>
      <ul class="sidebar-items">
        ${order.items
          .map(
            (it) =>
              `<li>${getTranslatedItemName(it.name)} × ${it.quantity} — ${it.price * it.quantity} ${t.currency}</li>`,
          )
          .join("")}
      </ul>
      <div class="sidebar-row">
        <span class="font-semibold">${t.total}</span>
        <span>${order.payable} ${t.currency}</span>
      </div>
      <div class="sidebar-row">
        <span class="font-semibold">${lang === "en" ? "Delivery Time" : "የማድረሻ ጊዜ"}</span>
        <span id="sidebar-countdown-text" class="text-xl font-bold">${order.estimatedMinutes}:00</span>
      </div>
      <div class="sidebar-actions">
        <button type="button" id="sidebar-track-btn" class="rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white w-full">${lang === "en" ? "Track Order" : "ትዕዛዙን አሳይ"}</button>
      </div>
    `;

    const trackBtn = document.getElementById("sidebar-track-btn");
    if (trackBtn) {
      trackBtn.addEventListener("click", () => {
        const modal = document.getElementById("order-success-modal");
        modal.classList.add("open");
        startOrderCountdown(order);
      });
    }
    return;
  }

  if (cart.length > 0) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    body.innerHTML = `
      <ul class="sidebar-items mb-3">
        ${cart
          .map(
            (item) => `
          <li class="flex items-center justify-between py-1.5 border-b border-slate-100 text-sm">
            <span>${getTranslatedItemName(item.name)} × ${item.quantity}</span>
            <span class="font-semibold">${item.price * item.quantity} ${t.currency}</span>
          </li>
        `,
          )
          .join("")}
      </ul>
      <div class="sidebar-row font-bold text-base mb-3">
        <span>${t.total}</span>
        <span>${total} ${t.currency}</span>
      </div>
      <div class="sidebar-actions">
        <button type="button" id="sidebar-checkout-btn" class="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 font-semibold text-white shadow-sm transition">
          ${t.checkoutBtn}
        </button>
      </div>
    `;

    const checkoutBtn = document.getElementById("sidebar-checkout-btn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", openCheckoutModal);
    }
    return;
  }

  body.innerHTML = `<p class="text-slate-500 text-sm">${t.noActiveOrder}</p>`;
}

function resumeCustomerOrder() {
  const saved = loadCustomerOrder();
  if (!saved || saved.status === "Completed") return;
  showOrderSuccess(saved);
}

function sendReadyNotification(order) {
  const lang = getCurrentLang();
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(lang === "en" ? "Your order is ready!" : "ትዕዛዝዎ ደርሷል! መረከብ ይችላሉ");
  }

  const audio = new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg",
  );
  audio.play().catch(() => {});

  showToast(lang === "en" ? `Order #${order.number} is ready!` : `ትዕዛዝ #${order.number} ዝግጁ ነው!`);
}

function startOrderCountdown(order) {
  if (!order) return;
  activeOrderId = order.id;

  const totalSeconds = Math.max(60, order.estimatedMinutes * 60);
  const alreadyElapsed = order.createdAt
    ? Math.floor((Date.now() - order.createdAt) / 1000)
    : 0;
  currentCountdownSeconds = Math.max(0, totalSeconds - alreadyElapsed);
  countdownStartedAt = Date.now();

  updateOrderStatusCard(order);

  if (countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(() => updateCountdown(order.id), 1000);

  generateCookTimeExplanation(order, order.queuePosition).then((text) => {
    if (activeOrderId === order.id) {
      const prep = document.getElementById("success-prep-text");
      if (prep) prep.textContent = text;
    }
  });
}

function updateCountdown(orderId) {
  const order = orders.find((item) => item.id === orderId);
  if (!order || !countdownStartedAt) return;

  const elapsed = Math.floor((Date.now() - countdownStartedAt) / 1000);
  const remaining = Math.max(0, currentCountdownSeconds - elapsed);
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const countdownText = document.getElementById("success-countdown-text");
  if (countdownText) countdownText.textContent = formatted;

  const sidebarCountdown = document.getElementById("sidebar-countdown-text");
  if (sidebarCountdown) sidebarCountdown.textContent = formatted;

  if (remaining === 0) {
    clearInterval(countdownTimer);
    if (order.status !== "Ready") {
      order.status = "Ready";
      saveOrders();
      saveCustomerOrder(order);
      updateAdminPanel();
      updateOrderStatusCard(order);
      sendReadyNotification(order);
    }
  }
}

function openReviewModal(itemId) {
  reviewTargetId = itemId;
  reviewRating = 0;
  const item = menuItems.find((item) => item.id === itemId);
  const reviewItemName = item ? getTranslatedItemName(item.name) : "Item";
  document.getElementById("review-item-name").textContent = reviewItemName;
  document.getElementById("review-comment").value = "";
  document.getElementById("review-name").value = "";
  const starsContainer = document.getElementById("review-stars");
  starsContainer.innerHTML = "";
  for (let i = 1; i <= 5; i += 1) {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "review-star";
    star.textContent = "★";
    star.dataset.value = i;
    star.addEventListener("click", () => {
      reviewRating = i;
      renderReviewStars();
    });
    starsContainer.appendChild(star);
  }
  renderReviewStars();
  document.getElementById("review-modal").classList.add("open");
}

function renderReviewStars() {
  const stars = document.querySelectorAll(".review-star");
  stars.forEach((star) => {
    star.classList.toggle("active", Number(star.dataset.value) <= reviewRating);
  });
}

function closeReviewModal() {
  document.getElementById("review-modal").classList.remove("open");
}

function saveReview(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById("review-name");
  const commentInput = document.getElementById("review-comment");
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  if (!reviewTargetId) {
    showToast(lang === "en" ? "No item selected for review." : "ምንም የተመረጠ እቃ የለም።");
    return;
  }
  if (reviewRating === 0) {
    showToast(lang === "en" ? "Please select a star rating." : "እባክዎን ኮከብ ይምረጡ።");
    return;
  }
  if (!name) {
    showToast(lang === "en" ? "Please enter your name." : "እባክዎን ስምዎን ያስገቡ።");
    return;
  }
  if (!comment) {
    showToast(lang === "en" ? "Please write a comment." : "እባክዎን አስተያየት ይጻፉ።");
    return;
  }

  reviews.push({
    id: Date.now(),
    itemId: reviewTargetId,
    name,
    rating: reviewRating,
    comment,
    status: "pending",
  });
  saveReviews();
  closeReviewModal();
  refreshReviewsUI();

  nameInput.value = "";
  commentInput.value = "";
  reviewRating = 0;

  showToast(t.reviewSubmitted || "Thank you for your review!");
}

function updateCartItem(id, action) {
  const target = cart.find((item) => item.id === id);
  if (!target) return;
  const menuItem = menuItems.find((item) => item.id === id);
  const lang = getCurrentLang();

  if (action === "increase") {
    if (menuItem && target.quantity >= menuItem.stock) {
      showToast(lang === "en" ? "Cannot add more than available stock." : "ከተገኘው መጠን በላይ መጨመር አይቻልም።");
      return;
    }
    target.quantity += 1;
  } else if (action === "decrease") {
    target.quantity -= 1;
  } else if (action === "delete") {
    cart = cart.filter((item) => item.id !== id);
  }

  if (target && target.quantity <= 0) {
    cart = cart.filter((item) => item.id !== id);
  }

  saveCart();
  renderCart();
  renderOrdersSidebar();
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

function bumpCartButton() {
  const button = document.getElementById("cart-toggle");
  if (!button) return;
  button.classList.remove("bump");
  void button.offsetWidth;
  button.classList.add("bump");
}

function openCheckoutModal() {
  const lang = getCurrentLang();
  if (!cart.length) {
    showToast(lang === "en" ? "Your cart is empty." : "የእርስዎ ቅርጫት ባዶ ነው።");
    return;
  }
  document.getElementById("checkout-modal").classList.add("open");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("open");
}

function sendOrderToTelegram() {
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  if (!cart.length) {
    showToast(t.cartEmpty);
    return;
  }

  const name = document.getElementById("checkout-name")?.value.trim();
  const phone = document.getElementById("checkout-phone")?.value.trim();
  const address = document.getElementById("checkout-address")?.value.trim();
  const promoCode =
    document.getElementById("promo-code")?.value.trim().toUpperCase() || "";

  if (!name || !phone || !address) {
    showToast(lang === "en" ? "Please fill in name, phone, and address." : "እባክዎን ስም፣ ስልክ እና አድራሻ ይሙሉ።");
    return;
  }

  const itemsSummary = cart
    .map(
      (item) =>
        `- ${getTranslatedItemName(item.name)} × ${item.quantity} = ${item.price * item.quantity} ${t.currency}`,
    )
    .join("\n");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoCode === "STUDENT10" ? 0.1 : 0;
  const discountedTotal = Math.round(total * (1 - discount));

  const queuePosition = getPendingOrders().length + 1;
  const estimatedMinutes = getQueueAdjustedPrepTime(
    estimateBasePrepTime(),
    queuePosition,
  );

  const order = {
    id: Date.now(),
    number: orders.length + 1,
    customer: { name, phone, address },
    items: cart.map((item) => ({ ...item })),
    status: "Preparing",
    queuePosition,
    total,
    discount: discount * 100,
    payable: discountedTotal,
    estimatedMinutes,
    deliveryTime: `${estimatedMinutes} ${lang === "en" ? "mins" : "ደቂቃ"}`,
    createdAt: Date.now(),
    readyAt: null,
  };

  orders.push(order);
  saveOrders();
  syncIncomingOrders();

  cart.forEach((cartItem) => {
    const menuItem = menuItems.find((item) => item.id === cartItem.id);
    if (menuItem) {
      menuItem.stock = Math.max(0, menuItem.stock - cartItem.quantity);
    }
  });
  saveMenuItems();

  cart = [];
  saveCart();
  renderMenu(getFilteredItems());
  renderCart();
  refreshOrderQueuePositions();
  updateAdminPanel();
  saveCustomerOrder(order);
  closeCheckoutModal();
  showToast(lang === "en" ? "Order placed successfully!" : "ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል!");
  showOrderSuccess(order);

  const message = [
    "New Order",
    `Customer: ${name}`,
    `Phone: ${phone}`,
    `Table / Address: ${address}`,
    "",
    "Items:",
    itemsSummary,
    "",
    `Total: ${total} ${t.currency}`,
    `Discount: ${discount ? "10%" : "None"}`,
    `Payable: ${discountedTotal} ${t.currency}`,
  ].join("\n");

  const telegramUrl = `https://t.me/${telegramUser}?text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, "_blank", "noopener,noreferrer");
}

function loadTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const preferredTheme =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.body.setAttribute("data-theme", preferredTheme);
  const button = document.getElementById("theme-toggle");
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;
  if (button) {
    button.textContent = preferredTheme === "dark" ? t.themeLight : t.themeDark;
  }
}

function toggleTheme() {
  const currentTheme =
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", currentTheme);
  localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
  const button = document.getElementById("theme-toggle");
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;
  if (button) {
    button.textContent = currentTheme === "dark" ? t.themeLight : t.themeDark;
  }
}

function getSalesSummary() {
  const salesMap = {};
  orders.forEach((order) => {
    order.items.forEach((item) => {
      if (!salesMap[item.id]) {
        salesMap[item.id] = {
          id: item.id,
          name: item.name,
          quantity: 0,
          revenue: 0,
          cost: 0,
        };
      }
      salesMap[item.id].quantity += item.quantity;
      salesMap[item.id].revenue += item.price * item.quantity;
      salesMap[item.id].cost += item.costPrice * item.quantity;
    });
  });
  return Object.values(salesMap);
}

function renderAdminStats() {
  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  const totalRevenue = orders.reduce((sum, order) => sum + order.payable, 0);
  const totalCost = orders.reduce(
    (sum, order) =>
      sum +
      order.items.reduce(
        (itemSum, item) => itemSum + item.costPrice * item.quantity,
        0,
      ),
    0,
  );
  const netProfit = totalRevenue - totalCost;
  const profitMargin = totalRevenue
    ? Math.round((netProfit / totalRevenue) * 100)
    : 0;

  const activeUsersNode = document.getElementById("active-users");
  if (activeUsersNode) activeUsersNode.textContent = activeUsers;
  document.getElementById("total-revenue").textContent = `${totalRevenue} ${t.currency}`;
  document.getElementById("total-cost").textContent = `${totalCost} ${t.currency}`;
  document.getElementById("net-profit").textContent = `${netProfit} ${t.currency}`;
  document.getElementById("profit-margin").textContent = `${profitMargin}%`;
}

function renderInventoryTable() {
  const body = document.getElementById("inventory-table-body");
  if (!body) return;
  body.innerHTML = "";

  const lang = getCurrentLang();

  menuItems.forEach((item) => {
    const displayName = getTranslatedItemName(item.name);
    const availability = item.stock > 0 
      ? (lang === "en" ? "Available" : "አለ") 
      : (lang === "en" ? "Unavailable" : "የለም");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${displayName}</td>
      <td><input type="number" min="0" value="${item.stock}" data-id="${item.id}" data-field="stock" class="admin-input" /></td>
      <td>${availability}</td>
      <td>
        <div class="admin-price-row">
          <input type="number" min="0" value="${item.price}" data-id="${item.id}" data-field="price" class="admin-input" />
          <span>/</span>
          <input type="number" min="0" value="${item.costPrice}" data-id="${item.id}" data-field="costPrice" class="admin-input" />
        </div>
      </td>
      <td>
        <div class="admin-button-group">
          <button type="button" data-action="save-inventory" data-id="${item.id}" class="admin-button">${lang === "en" ? "Save" : "አስቀምጥ"}</button>
          <button type="button" data-action="toggle-availability" data-id="${item.id}" class="admin-button secondary">${
            item.stock > 0 ? (lang === "en" ? "Out of stock" : "ያለቀው") : (lang === "en" ? "Restock" : "መልስ")
          }</button>
        </div>
      </td>
    `;
    body.appendChild(row);
  });
}

function renderIncomingOrders() {
  const body = document.getElementById("incoming-orders-table-body");
  if (!body) return;
  body.innerHTML = "";

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  const sortedIncoming = [...incomingOrders].sort(
    (a, b) => a.createdAt - b.createdAt,
  );

  if (!sortedIncoming.length) {
    body.innerHTML = `
      <tr>
        <td colspan="6" class="text-slate-500 text-center py-4">${t.noIncomingOrders}</td>
      </tr>
    `;
    return;
  }

  sortedIncoming.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.customer.name}</td>
      <td>${order.items
        .map((item) => `${getTranslatedItemName(item.name)} x ${item.quantity}`)
        .join("<br />")}</td>
      <td>${order.payable} ${t.currency}</td>
      <td>${new Date(order.createdAt).toLocaleTimeString()}</td>
      <td>${getStatusLabel(order.status)}</td>
      <td>${order.status === "Completed" ? "-" : `<button type="button" class="admin-button" data-action="mark-ready" data-id="${order.id}">${lang === "en" ? "Mark Ready" : "ዝግጁ በል"}</button>`}</td>
    `;
    body.appendChild(row);
  });
}

function renderAdminOrders() {
  const body = document.getElementById("orders-table-body");
  if (!body) return;
  body.innerHTML = "";

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;
  const sortedOrders = [...orders].sort((a, b) => a.createdAt - b.createdAt);

  sortedOrders.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>#${order.number}</td>
      <td>
        <select data-action="set-status" data-id="${order.id}" class="admin-select">
          <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
          <option value="Preparing" ${order.status === "Preparing" ? "selected" : ""}>Preparing</option>
          <option value="Ready" ${order.status === "Ready" ? "selected" : ""}>Ready</option>
          <option value="Completed" ${order.status === "Completed" ? "selected" : ""}>Completed</option>
        </select>
      </td>
      <td>${order.queuePosition}</td>
      <td>${order.customer.name}</td>
      <td>${order.payable} ${t.currency}</td>
    `;
    body.appendChild(row);
  });
}

function renderTopSellingList() {
  const list = document.getElementById("top-selling-list");
  if (!list) return;
  list.innerHTML = "";

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;
  const sales = getSalesSummary();

  if (!sales.length) {
    list.innerHTML = `<p class="text-slate-500">${t.noSalesYet}</p>`;
    return;
  }

  const top = sales.sort((a, b) => b.quantity - a.quantity).slice(0, 4);

  top.forEach((item) => {
    const displayName = getTranslatedItemName(item.name);
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-card-header">
        <strong>${displayName}</strong>
        <span>${item.quantity} ${lang === "en" ? "sold" : "ተሸጧል"}</span>
      </div>
      <p class="review-card-meta">${lang === "en" ? "Revenue" : "ገቢ"} ${item.revenue} ${t.currency}</p>
    `;
    list.appendChild(card);
  });
}

function renderLeastSellingList() {
  const list = document.getElementById("least-selling-list");
  if (!list) return;
  list.innerHTML = "";

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;
  const sales = getSalesSummary();

  const allItems = menuItems.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: 0,
  }));
  const merged = allItems.map((item) => {
    const sold = sales.find((sale) => sale.id === item.id);
    return { ...item, quantity: sold ? sold.quantity : 0 };
  });
  const least = merged.sort((a, b) => a.quantity - b.quantity).slice(0, 4);

  least.forEach((item) => {
    const displayName = getTranslatedItemName(item.name);
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-card-header">
        <strong>${displayName}</strong>
        <span>${item.quantity} ${lang === "en" ? "sold" : "ተሸጧል"}</span>
      </div>
      <p class="review-card-meta">${lang === "en" ? "Low sales alert" : "ዝቅተኛ ሽያጭ"}</p>
    `;
    list.appendChild(card);
  });
}

function renderReviewModeration() {
  const list = document.getElementById("review-moderation-list");
  if (!list) return;
  list.innerHTML = "";

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  if (!reviews.length) {
    list.innerHTML = `<p class="text-slate-500">${t.noReviewsYet}</p>`;
    return;
  }

  reviews.forEach((review) => {
    const item = menuItems.find((item) => item.id === review.itemId);
    const itemName = item ? getTranslatedItemName(item.name) : "Unknown item";
    const isApproved = review.status === "approved";

    const card = document.createElement("div");
    card.className = "review-card";
    card.dataset.reviewId = review.id;
    card.innerHTML = `
      <div class="review-card-header">
        <strong>${itemName}</strong>
        <span class="badge-status ${
          isApproved ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
        }">${isApproved ? (lang === "en" ? "Approved" : "ተጸድቋል") : (lang === "en" ? "Pending" : "በመጠባበቅ ላይ")}</span>
      </div>
      <p class="review-card-meta">${review.name} · ${review.rating} ★</p>
      <p>${review.comment || ""}</p>
      <div class="review-card-actions mt-3">
        ${
          isApproved
            ? ""
            : `<button type="button" class="admin-button" data-action="approve-review" data-review-id="${review.id}" data-item-id="${review.itemId}">${lang === "en" ? "Approve" : "አፅድቅ"}</button>`
        }
        <button type="button" class="admin-button secondary" data-action="delete-review" data-review-id="${review.id}" data-item-id="${review.itemId}">${lang === "en" ? "Delete" : "ሰርዝ"}</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderPublicReviews() {
  const container = document.getElementById("public-reviews");
  if (!container) return;

  const lang = getCurrentLang();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.am;

  const approved = reviews.filter((review) => review.status === "approved");
  if (!approved.length) {
    container.innerHTML = `<p class="text-slate-500">${t.noReviewsYet}</p>`;
    return;
  }

  container.innerHTML = approved
    .map((review) => {
      const item = menuItems.find((item) => item.id === review.itemId);
      const itemName = item ? getTranslatedItemName(item.name) : "Unknown item";
      return `
        <div class="review-card">
          <div class="review-card-header">
            <strong>${itemName}</strong>
            <span class="badge-status bg-emerald-100 text-emerald-800">${review.rating} ★</span>
          </div>
          <p class="review-card-meta">${review.name}</p>
          <p>${review.comment || ""}</p>
        </div>
      `;
    })
    .join("");
}

function refreshReviewsUI() {
  renderReviewModeration();
  renderPublicReviews();
  renderMenu(getFilteredItems());
}

function updateAdminPanel() {
  syncIncomingOrders();
  refreshOrderQueuePositions();
  renderAdminStats();
  renderInventoryTable();
  renderIncomingOrders();
  renderAdminOrders();
  renderTopSellingList();
  renderLeastSellingList();
  renderReviewModeration();
}

function openAdminLoginModal() {
  document.getElementById("admin-login-modal").classList.add("open");
}

function closeAdminLoginModal() {
  document.getElementById("admin-login-modal").classList.remove("open");
}

function openAdminPanel() {
  document.getElementById("admin-panel").classList.remove("hidden");
  updateAdminPanel();
}

function closeAdminPanel() {
  document.getElementById("admin-panel").classList.add("hidden");
}

function attemptAdminLogin() {
  const password = document.getElementById("admin-password").value.trim();
  const lang = getCurrentLang();
  if (password === ADMIN_PASSWORD) {
    closeAdminLoginModal();
    openAdminPanel();
    showToast(lang === "en" ? "Admin access granted." : "የአድሚን መግቢያ ተሳክቷል።");
  } else {
    showToast(lang === "en" ? "Invalid admin passcode." : "የተሳሳተ የምስጢር ቁጥር።");
  }
}

function handleAdminEvents(event) {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  const id = Number(button.dataset.id);
  const reviewId = Number(button.dataset.reviewId);
  const lang = getCurrentLang();

  if (action === "save-inventory") {
    const stockInput = document.querySelector(
      `input[data-id="${id}"][data-field="stock"]`,
    );
    const priceInput = document.querySelector(
      `input[data-id="${id}"][data-field="price"]`,
    );
    const costInput = document.querySelector(
      `input[data-id="${id}"][data-field="costPrice"]`,
    );
    const menuItem = menuItems.find((item) => item.id === id);
    if (!menuItem) return;
    menuItem.stock = Number(stockInput.value);
    menuItem.price = Number(priceInput.value);
    menuItem.costPrice = Number(costInput.value);
    saveMenuItems();
    renderMenu(getFilteredItems());
    renderCart();
    updateAdminPanel();
    showToast(lang === "en" ? "Inventory updated." : "የዕቃዎች ዝርዝር ተዘምኗል።");
  }

  if (action === "toggle-availability") {
    const menuItem = menuItems.find((item) => item.id === id);
    if (!menuItem) return;
    menuItem.stock = menuItem.stock > 0 ? 0 : 8;
    saveMenuItems();
    renderMenu(getFilteredItems());
    updateAdminPanel();
    showToast(
      menuItem.stock > 0
        ? (lang === "en" ? "Item restocked." : "እቃው ተመልሷል።")
        : (lang === "en" ? "Item marked out of stock." : "እቃው አልቋል ተብሏል።"),
    );
  }

  if (action === "approve-review") {
    const review = reviews.find((item) => item.id === reviewId);
    if (review) {
      review.status = "approved";
      saveReviews();
      refreshReviewsUI();
      showToast(lang === "en" ? "Review approved." : "አስተያየቱ ጸድቋል።");
    }
  }

  if (action === "delete-review") {
    reviews = reviews.filter((item) => item.id !== reviewId);
    saveReviews();
    refreshReviewsUI();
    showToast(lang === "en" ? "Review deleted." : "አስተያየቱ ተሰርዟል።");
  }

  if (action === "mark-ready") {
    const order = orders.find((orderItem) => orderItem.id === id);
    if (order && order.status !== "Ready") {
      order.status = "Ready";
      order.readyAt = Date.now();
      saveOrders();
      syncIncomingOrders();
      refreshOrderQueuePositions();
      updateAdminPanel();
      sendReadyNotification(order);
      showToast(lang === "en" ? `Order #${order.number} marked ready.` : `ትዕዛዝ #${order.number} ዝግጁ ተብሏል።`);
    }
  }
}

function handleOrderStatusChange(event) {
  const select = event.target.closest("select[data-action='set-status']");
  if (!select) return;
  const id = Number(select.dataset.id);
  const order = orders.find((orderItem) => orderItem.id === id);
  if (!order) return;
  order.status = select.value;
  if (order.status === "Ready") {
    order.readyAt = Date.now();
    sendReadyNotification(order);
  }
  saveOrders();
  syncIncomingOrders();
  refreshOrderQueuePositions();
  updateAdminPanel();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulateActiveUsers() {
  activeUsers = getRandomInt(12, 40);
  const activeUsersNode = document.getElementById("active-users");
  if (activeUsersNode) activeUsersNode.textContent = activeUsers;
}

window.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  applyLanguageUI();
  resumeCustomerOrder();

  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().catch(() => {});
  }

  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", toggleLanguage);
  }

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => filterMenu(button.dataset.category));
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value.trim();
      renderMenu(getFilteredItems());
    });
  }

  const promoInput = document.getElementById("promo-code");
  if (promoInput) {
    promoInput.addEventListener("input", renderCart);
  }

  const menuGrid = document.getElementById("menu-grid");
  if (menuGrid) {
    menuGrid.addEventListener("click", (event) => {
      const rateButton = event.target.closest("[data-action='rate']");
      if (rateButton) {
        openReviewModal(Number(rateButton.dataset.id));
        return;
      }

      const button = event.target.closest(".add-to-cart");
      if (button) {
        addToCart(Number(button.dataset.id));
      }
    });
  }

  document.getElementById("cart-toggle")?.addEventListener("click", openCart);
  document.getElementById("close-cart")?.addEventListener("click", closeCart);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
  document
    .getElementById("checkout-btn")
    ?.addEventListener("click", openCheckoutModal);
  document
    .getElementById("close-modal")
    ?.addEventListener("click", closeCheckoutModal);
  document
    .getElementById("cancel-checkout-btn")
    ?.addEventListener("click", closeCheckoutModal);
  document
    .getElementById("send-telegram-btn")
    ?.addEventListener("click", sendOrderToTelegram);
  document
    .getElementById("theme-toggle")
    ?.addEventListener("click", toggleTheme);

  document
    .getElementById("admin-btn")
    ?.addEventListener("click", openAdminLoginModal);
  document
    .getElementById("admin-login-submit")
    ?.addEventListener("click", attemptAdminLogin);
  document
    .getElementById("close-admin-login")
    ?.addEventListener("click", closeAdminLoginModal);
  document
    .getElementById("close-admin")
    ?.addEventListener("click", closeAdminPanel);
  document
    .getElementById("admin-login-modal")
    ?.addEventListener("click", (event) => {
      if (event.target.id === "admin-login-modal") closeAdminLoginModal();
    });

  document.getElementById("cart-items")?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const id = Number(button.dataset.id);
    const action = button.dataset.action;
    if (action) {
      updateCartItem(id, action);
    }
  });

  document
    .getElementById("inventory-table-body")
    ?.addEventListener("click", handleAdminEvents);
  document
    .getElementById("review-moderation-list")
    ?.addEventListener("click", handleAdminEvents);
  document
    .getElementById("incoming-orders-table-body")
    ?.addEventListener("click", handleAdminEvents);
  document
    .getElementById("orders-table-body")
    ?.addEventListener("change", handleOrderStatusChange);

  document
    .getElementById("submit-review-btn")
    ?.addEventListener("click", saveReview);
  document
    .getElementById("cancel-review-btn")
    ?.addEventListener("click", closeReviewModal);
  document
    .getElementById("close-review-modal")
    ?.addEventListener("click", closeReviewModal);

  document
    .getElementById("close-order-success")
    ?.addEventListener("click", () => {
      document.getElementById("order-success-modal").classList.remove("open");
    });
  document
    .getElementById("order-success-modal")
    ?.addEventListener("click", (event) => {
      if (event.target.id === "order-success-modal") {
        document.getElementById("order-success-modal").classList.remove("open");
      }
    });

  document.getElementById("review-modal")?.addEventListener("click", (event) => {
    if (event.target.id === "review-modal") {
      closeReviewModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
      closeCheckoutModal();
      closeReviewModal();
      closeAdminLoginModal();
      closeAdminPanel();
    }
  });

  setInterval(simulateActiveUsers, 5000);
});
