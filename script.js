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
const FALLBACK_IMAGE = "foodimage/images.jpg";
const translations = {
  am: {
    siteTitle: "ሀበሻ ሬስቶራንት እና ባር | ሙሉ ሜኑ",
    searchPlaceholder: "ምግብ ፈልግ...",
    all: "ሁሉም",
    mainDishes: "የፆም",
    fastFoods: "የፍስክ",
    drinks: "መጠጦች",
    menuTitle: "የተመረጡ የባህል ምግቦች እና መጠጦች",
    reviewsTitle: "የህዝብ ግምገማዎች",
    cartTitle: "የእርስዎ ትዕዛዝ",
    cartEmpty: "የእርስዎ ትዕዛዝ ባዶ ነው።",
    checkout: "ቼክ አውት",
    promoLabel: "Promo Code",
    promoHint: "Enter STUDENT10 for 10% off",
    invalidPromo: "Invalid promo code",
    discountApplied: "10% discount applied",
    total: "ጠቅላላ",
    discountedTotal: "የተቀነሰ ጠቅላላ",
    proceed: "Proceed to Checkout",
    orderStatus: "ሁኔታ",
    ready: "ዝግጁ ነው",
    prep: "በዝግጅት ላይ",
    itemAdded: "Item added to cart!",
    add: "አክል",
    outOfStock: "የተሽለ",
    admin: "Admin",
    dark: "Dark",
    light: "Light",
    language: "አማ / EN",
    qr: "📱 QR",
    activeVisitors: "Active Visitors",
    totalRevenue: "Total Revenue",
    totalCost: "Total Cost",
    netProfit: "Net Profit",
    profitMargin: "Profit Margin",
    inventory: "Inventory Management",
    orderManagement: "Order Management",
    incomingOrders: "Incoming Orders",
    topSelling: "Top Selling Items",
    leastSelling: "Least Selling Items",
    reviewModeration: "Review Moderation",
    noReviews: "No reviews",
    btnAdd: "አክል",
    statusPreparing: "በዝግጅት ላይ",
    statusReady: "ዝግጁ ነው",
    statusCompleted: "ተጠናቋል",
    statusPending: "በመጠባበቅ ላይ",
    saveReview: "Save Review",
    writeReview: "Write a Review",
    orderPlaced: "ትዕዛዝዎ ተቀብለናል",
    customerName: "ስም",
    phone: "ስልክ",
    address: "ሰሌዳ / የማድረሻ አድራሻ",
    sendOrder: "Send Order via Admin",
    menuQr: "Menu QR Code",
  },
  en: {
    siteTitle: "Habesha Gourmet Bistro | Full Menu",
    searchPlaceholder: "Search menu...",
    all: "All",
    mainDishes: "Main Dishes",
    fastFoods: "Fast Food",
    drinks: "Drinks",
    menuTitle: "Authentic Ethiopian dishes and drinks",
    reviewsTitle: "Customer Reviews",
    cartTitle: "Your Order",
    cartEmpty: "Your order is empty.",
    checkout: "Checkout",
    promoLabel: "Promo Code",
    promoHint: "Enter STUDENT10 for 10% off",
    invalidPromo: "Invalid promo code",
    discountApplied: "10% discount applied",
    total: "Total",
    discountedTotal: "Discounted Total",
    proceed: "Proceed to Checkout",
    orderStatus: "Status",
    ready: "Ready",
    prep: "Preparing",
    itemAdded: "Item added to cart!",
    add: "Add",
    outOfStock: "Sold out",
    admin: "Admin",
    dark: "Dark",
    light: "Light",
    language: "አማ / EN",
    qr: "QR",
    activeVisitors: "Active Visitors",
    totalRevenue: "Total Revenue",
    totalCost: "Total Cost",
    netProfit: "Net Profit",
    profitMargin: "Profit Margin",
    inventory: "Inventory Management",
    orderManagement: "Order Management",
    incomingOrders: "Incoming Orders",
    topSelling: "Top Selling Items",
    leastSelling: "Least Selling Items",
    reviewModeration: "Review Moderation",
    noReviews: "No reviews",
    btnAdd: "Add",
    statusPreparing: "Preparing",
    statusReady: "Ready",
    statusCompleted: "Completed",
    statusPending: "Pending",
    saveReview: "Save Review",
    writeReview: "Write a Review",
    orderPlaced: "Your order has been placed",
    customerName: "Name",
    phone: "Phone",
    address: "Table / Delivery Address",
    sendOrder: "Send Order via Admin",
    menuQr: "Menu QR Code",
  },
};

let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || "am";
let menuSort = "featured";
let favoriteIds = new Set(
  JSON.parse(localStorage.getItem("restaurant-favorites") || "[]"),
);

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
  {
    id: 14,
    name: "juce",
    category: "መጠጥ",
    price: 80,
    costPrice: 45,
    stock: 10,
    prepEstimate: 5,
    img: "image/juce.jpg",
  },
  {
    id: 15,
    name: "coca",
    category: "መጠጥ",
    price: 60,
    costPrice: 35,
    stock: 12,
    prepEstimate: 4,
    img: "image/coca.jpeg",
  },
  {
    id: 16,
    name: "avocado",
    category: "መጠጥ",
    price: 70,
    costPrice: 40,
    stock: 8,
    prepEstimate: 6,
    img: "image/avocado.jpeg",
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

function resolveMenuImage(imagePath) {
  const normalized = typeof imagePath === "string" ? imagePath.trim() : "";
  if (!normalized) return FALLBACK_IMAGE;

  const normalizedPath = normalized.replace(/\\/g, "/");
  const basename = normalizedPath.split("/").pop()?.split("?")[0] || "";
  const knownImagePaths = {
    "juce.jpg": "image/juce.jpg",
    "coca.jpeg": "image/coca.jpeg",
    "avocado.jpeg": "image/avocado.jpeg",
    "bira.jpeg": "image/bira.jpeg",
    "shiro.jpeg": "image/shiro.jpeg",
    "fesest.jpg": "image/fesest.jpg",
    "tibs.jpg": "image/tibs.jpg",
    "teg.jpg": "image/teg.jpg",
    "ar.jpeg": "image/ar.jpeg",
    "ki.jpeg": "image/ki.jpeg",
    "kikalcha.jpeg": "image/kikalcha.jpeg",
    "pastaat.jpg": "image/pastaat.jpg",
    "ባአይነት.jpeg": "image/ባአይነት.jpeg",
    "dero.jpeg": "image/dero.jpeg",
  };

  if (
    normalizedPath.startsWith("http://") ||
    normalizedPath.startsWith("https://")
  ) {
    return normalizedPath;
  }

  if (knownImagePaths[basename]) {
    return knownImagePaths[basename];
  }

  return normalizedPath.includes("/") || normalizedPath.includes("\\")
    ? normalizedPath
    : FALLBACK_IMAGE;
}

function normalizeMenuItems(items) {
  if (!Array.isArray(items)) {
    return defaultMenuItems.map((item) => ({
      ...item,
      img: resolveMenuImage(item.img),
    }));
  }

  const merged = defaultMenuItems.map((defaultItem) => {
    const savedItem = items.find((item) => item.id === defaultItem.id) || {};
    return {
      ...defaultItem,
      ...savedItem,
      id: defaultItem.id,
      img: resolveMenuImage(savedItem.img || defaultItem.img),
    };
  });

  const extraItems = items
    .filter(
      (item) =>
        !defaultMenuItems.some((defaultItem) => defaultItem.id === item.id),
    )
    .map((item) => ({
      ...item,
      img: resolveMenuImage(item.img),
    }));

  return [...merged, ...extraItems];
}

function loadMenuItems() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.menu);
    const parsed = saved ? JSON.parse(saved) : null;
    return normalizeMenuItems(parsed);
  } catch (error) {
    return defaultMenuItems.map((item) => ({
      ...item,
      img: resolveMenuImage(item.img),
    }));
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
  let filtered = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (menuSort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (menuSort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return filtered;
}

function getLanguageText(key) {
  return translations[currentLanguage]?.[key] || translations.am[key] || key;
}

function getTranslatedCategory(category) {
  if (currentLanguage === "en") {
    const map = {
      የፆም: "Main Dishes",
      የፍስክ: "Fast Food",
      መጠጥ: "Drinks",
      All: "All",
    };
    return map[category] || category;
  }
  return category;
}

function renderMenu(items) {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";

  items.forEach((item, index) => {
    const approvedReviews = reviews.filter(
      (review) => review.itemId === item.id && review.status === "approved",
    );
    const average = approvedReviews.length
      ? (
          approvedReviews.reduce((sum, review) => sum + review.rating, 0) /
          approvedReviews.length
        ).toFixed(1)
      : getLanguageText("noReviews");
    const reviewCount = approvedReviews.length;
    const isOutOfStock = item.stock <= 0;
    const isFavorite = favoriteIds.has(item.id);

    const card = document.createElement("article");
    card.className = "menu-card p-4";
    card.style.animationDelay = `${index * 80}ms`;
    card.innerHTML = `
      <div class="menu-card-badges">
        <span class="badge ${isOutOfStock ? "out-of-stock" : "in-stock"}">
          ${isOutOfStock ? getLanguageText("outOfStock") : `${item.stock} ${currentLanguage === "am" ? "ቀሪ" : "left"}`}
        </span>
        ${item.prepEstimate <= 10 ? '<span class="badge fast">' + (currentLanguage === "am" ? "በፍጥነት የሚደርስ" : "Fast delivery") + "</span>" : ""}
      </div>
      <div class="menu-image-wrap">
        <img src="${item.img}" alt="${item.name}" class="h-48 w-full object-cover rounded-t-lg mb-4" loading="lazy" onerror="this.onerror=null;this.src='foodimage/images.jpg';" />
        <button type="button" class="favorite-btn ${isFavorite ? "active" : ""}" data-action="toggle-favorite" data-id="${item.id}" aria-label="toggle favorite">${isFavorite ? "❤️" : "🤍"}</button>
      </div>
      <h3 class="text-lg font-bold">${item.name}</h3>
      <p class="text-sm text-slate-500">${getTranslatedCategory(item.category)}</p>
      <div class="rating-row">
        <button type="button" class="star-btn" data-action="rate" data-id="${item.id}">★</button>
        <span class="font-semibold">${average}</span>
        <span class="review-count">(${reviewCount})</span>
      </div>
      <p class="mb-4 font-bold text-emerald-600">${item.price} ${currentLanguage === "am" ? "ብር" : "Birr"}</p>
      <button type="button" class="add-to-cart w-full rounded-lg px-4 py-2 font-semibold transition ${
        isOutOfStock
          ? "disabled-button"
          : "bg-slate-900 text-white hover:bg-emerald-600"
      }" data-id="${item.id}" ${isOutOfStock ? "disabled" : ""}>
        ${isOutOfStock ? getLanguageText("outOfStock") : getLanguageText("btnAdd")}
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

function applyLanguageTranslations() {
  const languageButton = document.getElementById("language-toggle");
  if (languageButton) {
    languageButton.textContent =
      currentLanguage === "am" ? "አማ / EN" : "EN / አማ";
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = getLanguageText("searchPlaceholder");
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    const category = button.dataset.category;
    if (category === "All") button.textContent = getLanguageText("all");
    if (category === "የፆም") button.textContent = getLanguageText("mainDishes");
    if (category === "የፍስክ") button.textContent = getLanguageText("fastFoods");
    if (category === "መጠጥ") button.textContent = getLanguageText("drinks");
  });

  const title = document.querySelector("header h1");
  const subtitle = document.querySelector("header p");
  if (title)
    title.textContent =
      currentLanguage === "am"
        ? "ሀበሻ ሬስቶራንት እና ባር"
        : "Habesha Restaurant and Bar";
  if (subtitle) subtitle.textContent = getLanguageText("menuTitle");

  const reviewsTitle = document
    .getElementById("public-reviews-section")
    ?.querySelector("h2");
  if (reviewsTitle) reviewsTitle.textContent = getLanguageText("reviewsTitle");

  const cartTitle = document.getElementById("cart-drawer")?.querySelector("h2");
  if (cartTitle) cartTitle.textContent = getLanguageText("cartTitle");

  const promoLabel =
    document.querySelector("#promo-code")?.previousElementSibling;
  if (promoLabel) promoLabel.textContent = getLanguageText("promoLabel");

  const promoMessage = document.getElementById("promo-message");
  if (promoMessage) {
    const currentPromo =
      document.getElementById("promo-code")?.value.trim().toUpperCase() || "";
    if (currentPromo === "STUDENT10") {
      promoMessage.textContent = getLanguageText("discountApplied");
      promoMessage.className = "promo-message success";
    } else if (currentPromo) {
      promoMessage.textContent = getLanguageText("invalidPromo");
      promoMessage.className = "promo-message error";
    } else {
      promoMessage.textContent = getLanguageText("promoHint");
      promoMessage.className = "promo-message";
    }
  }

  const adminLabels = {
    activeVisitors: document.getElementById("active-users-label"),
    totalRevenue: document.getElementById("total-revenue-label"),
    totalCost: document.getElementById("total-cost-label"),
    netProfit: document.getElementById("net-profit-label"),
    profitMargin: document.getElementById("profit-margin-label"),
  };
  if (adminLabels.activeVisitors)
    adminLabels.activeVisitors.textContent = getLanguageText("activeVisitors");
  if (adminLabels.totalRevenue)
    adminLabels.totalRevenue.textContent = getLanguageText("totalRevenue");
  if (adminLabels.totalCost)
    adminLabels.totalCost.textContent = getLanguageText("totalCost");
  if (adminLabels.netProfit)
    adminLabels.netProfit.textContent = getLanguageText("netProfit");
  if (adminLabels.profitMargin)
    adminLabels.profitMargin.textContent = getLanguageText("profitMargin");

  renderMenu(getFilteredItems());
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "am" ? "en" : "am";
  localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
  applyLanguageTranslations();
  renderCart();
  renderPublicReviews();
  updateAdminPanel();
}

function filterMenu(category) {
  activeCategory = category;
  updateFilterButtons();
  renderMenu(getFilteredItems());
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
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
  const promoInput = document.getElementById("promo-code");
  const promoCode = promoInput ? promoInput.value.trim().toUpperCase() : "";
  let adjusted = false;

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
    showToast("Cart quantities adjusted for current stock.");
  }

  if (!cart.length) {
    container.innerHTML = `<p class="text-center text-slate-500">${getLanguageText("cartEmpty")}</p>`;
    document.getElementById("cart-total").textContent =
      `0 ${currentLanguage === "am" ? "ብር" : "Birr"}`;
    document.getElementById("discounted-total").textContent =
      `0 ${currentLanguage === "am" ? "ብር" : "Birr"}`;
    document.getElementById("promo-message").textContent =
      getLanguageText("promoHint");
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
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='foodimage/images.jpg';" />
          <div class="flex-1">
            <div class="flex items-start justify-between gap-2">
              <div>
                <h4 class="font-semibold">${item.name}</h4>
                <p class="text-sm text-emerald-600">${item.price} ብር${outOfStockLabel}</p>
              </div>
              <button type="button" class="text-sm text-rose-500" data-action="delete" data-id="${item.id}">Delete</button>
            </div>
            <div class="mt-3 flex items-center justify-between gap-2">
              <div class="quantity-controls">
                <button type="button" data-action="decrease" data-id="${item.id}">−</button>
                <span class="min-w-6 text-center">${item.quantity}</span>
                <button type="button" data-action="increase" data-id="${item.id}">+</button>
              </div>
              <span class="font-semibold">${item.price * item.quantity} ብር</span>
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

  document.getElementById("cart-total").textContent =
    `${total} ${currentLanguage === "am" ? "ብር" : "Birr"}`;
  document.getElementById("discounted-total").textContent =
    `${discountedTotal} ${currentLanguage === "am" ? "ብር" : "Birr"}`;
  document.getElementById("promo-message").textContent = promoCode
    ? validPromo
      ? getLanguageText("discountApplied")
      : getLanguageText("invalidPromo")
    : getLanguageText("promoHint");
  document.getElementById("promo-message").className =
    `promo-message ${validPromo ? "success" : promoCode ? "error" : ""}`;
  updateCartBadge();
}

function addToCart(id) {
  const item = menuItems.find((menuItem) => menuItem.id === id);
  if (!item) return;
  if (item.stock <= 0) {
    showToast("ይቅር ይገባል፣ እቃው አልቋል");
    return;
  }

  const existingItem = cart.find((cartItem) => cartItem.id === id);
  if (existingItem) {
    if (existingItem.quantity >= item.stock) {
      showToast("የቀሪ እቃ አልባ");
      return;
    }
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart();
  renderCart();
  updateCartBadge();
  showToast(getLanguageText("itemAdded"));
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
  const fallback = `እርስዎ ${queuePosition}ኛ ትዕዛዝ ላይ ነዎት፣ የተጠቃሚ ዝግጅት ${order.estimatedMinutes} ደቂቃ ነው።`;
  const apiKey = ""; // Replace with your Gemini/OpenAI API key to activate AI explanation.
  if (!apiKey) {
    return fallback;
  }

  const prompt = `Create a short Amharic explanation for an order with ${order.items.length} items in queue position ${queuePosition}. Mention kitchen load, complexity, and estimated prep time: ${order.estimatedMinutes} minutes.`;

  try {
    const response = await fetch("https://api.example.com/v1/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gemini-pro",
        prompt,
        max_output_tokens: 80,
      }),
    });
    const data = await response.json();
    return data?.candidates?.[0]?.content?.[0]?.text || fallback;
  } catch (error) {
    return fallback;
  }
}

function getStatusLabel(status) {
  const map = {
    Pending: "በመጠባበቅ ላይ",
    Preparing: "በዝግጅት ላይ",
    Ready: "ዝግጁ ነው",
    Completed: "ተጠናቋል",
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
  if (prep)
    prep.textContent = `እርስዎ ${order.queuePosition}ኛ ትዕዛዝ ላይ ነዎት · ${order.estimatedMinutes} ደቂቃ ተጠቃሚ ጊዜ`;

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
  document.getElementById("success-order-number").textContent =
    `#${order.number}`;
  document.getElementById("success-order-items").innerHTML = order.items
    .map(
      (it) =>
        `<li class="flex items-center justify-between gap-2"><span>${it.name} × ${it.quantity}</span><span>${it.price * it.quantity} ብር</span></li>`,
    )
    .join("");
  document.getElementById("success-order-total").textContent =
    `${order.payable} ብር`;
  document.getElementById("success-delivery-time").textContent =
    `${order.estimatedMinutes} ደቂቃ`;
  modal.classList.add("open");
  renderOrdersSidebar(order);
  startOrderCountdown(order);
}

function renderOrdersSidebar(order) {
  const body = document.getElementById("orders-sidebar-body");
  if (!body) return;

  if (!order) order = loadCustomerOrder();
  if (!order || order.status === "Completed") {
    body.innerHTML =
      '<p class="text-slate-500">ምንም ንቁ ትዕዛዝ የለም። ከመን ላይ ያሉ ምግቦችን ይጨምሩ።</p>';
    return;
  }

  body.innerHTML = `
    <div class="sidebar-row">
      <span class="font-semibold">እርከን</span>
      <span>#${order.number}</span>
    </div>
    <div class="sidebar-row">
      <span class="font-semibold">ሁኔታ</span>
      <span id="sidebar-status-badge" class="status-badge ${order.status.toLowerCase()}">${getStatusLabel(order.status)}</span>
    </div>
    <ul class="sidebar-items">
      ${order.items
        .map(
          (it) =>
            `<li>${it.name} × ${it.quantity} — ${it.price * it.quantity} ብር</li>`,
        )
        .join("")}
    </ul>
    <div class="sidebar-row">
      <span class="font-semibold">ጠቅላላ</span>
      <span>${order.payable} ብር</span>
    </div>
    <div class="sidebar-row">
      <span class="font-semibold">የማድረሻ ጊዜ</span>
      <span id="sidebar-countdown-text" class="text-xl font-bold">${order.estimatedMinutes}:00</span>
    </div>
    <div class="sidebar-actions">
      <button type="button" id="sidebar-track-btn" class="rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">ትዕዛዙን አሳይ</button>
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
}

function resumeCustomerOrder() {
  const saved = loadCustomerOrder();
  if (!saved || saved.status === "Completed") return;
  showOrderSuccess(saved);
}

function sendReadyNotification(order) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("ትዕዛዝዎ ደርሷል! መረከብ ይችላሉ");
  }

  const audio = new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg",
  );
  audio.play().catch(() => {});
  showToast(`Order ${order.number} is ready!`);
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

  const countdownText = document.getElementById("success-countdown-text");
  if (countdownText)
    countdownText.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;

  const sidebarCountdown = document.getElementById("sidebar-countdown-text");
  if (sidebarCountdown)
    sidebarCountdown.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;

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
  const reviewItemName =
    menuItems.find((item) => item.id === itemId)?.name || "Item";
  document.getElementById("review-item-name").textContent = reviewItemName;
  document.getElementById("review-comment").value = "";
  document.getElementById("review-name").value = "";
  document.getElementById("review-stars").innerHTML = "";
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
    document.getElementById("review-stars").appendChild(star);
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

  if (!reviewTargetId) {
    showToast("No item selected for review.");
    return;
  }
  if (reviewRating === 0) {
    showToast("Please select a star rating.");
    return;
  }
  if (!name) {
    showToast("Please enter your name.");
    return;
  }
  if (!comment) {
    showToast("Please write a comment.");
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

  showToast("አስተያየትዎ ስለተላከ እናመሰግናለን! በግምገማ ላይ ይገኛል።");
}

function updateCartItem(id, action) {
  const target = cart.find((item) => item.id === id);
  if (!target) return;
  const menuItem = menuItems.find((item) => item.id === id);

  if (action === "increase") {
    if (menuItem && target.quantity >= menuItem.stock) {
      showToast("Cannot add more than available stock.");
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
}

function generateMenuQrCode() {
  const qrImage = document.getElementById("qr-code-image");
  if (!qrImage) return;

  const menuUrl = window.location.href;
  const qrTarget = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(menuUrl)}&size=300x300`;
  qrImage.src = qrTarget;
  document.getElementById("qr-modal").classList.add("open");
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast success-toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

function showLoadingState(buttonLabel, isLoading) {
  const checkoutButton = document.getElementById("checkout-btn");
  const sendOrderButton = document.getElementById("send-telegram-btn");
  if (!checkoutButton || !sendOrderButton) return;

  const target = isLoading ? checkoutButton : sendOrderButton;
  const button = target === checkoutButton ? checkoutButton : sendOrderButton;
  if (isLoading) {
    button.disabled = true;
    button.innerHTML = '<span class="loading-spinner"></span> Processing...';
  } else {
    button.disabled = false;
    button.innerHTML = buttonLabel;
  }
}

function bumpCartButton() {
  const button = document.getElementById("cart-toggle");
  button.classList.remove("bump");
  void button.offsetWidth;
  button.classList.add("bump");
}

function openCheckoutModal() {
  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }
  document.getElementById("checkout-modal").classList.add("open");
  const selectedPayment = document.querySelector(
    'input[name="payment-method"]:checked',
  );
  if (selectedPayment) {
    showToast(`Payment via ${selectedPayment.value} selected.`);
  }
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("open");
}

function sendOrderToTelegram() {
  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }

  const button = document.getElementById("send-telegram-btn");
  const originalText = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<span class="loading-spinner"></span> Processing...';

  const name = document.getElementById("checkout-name")?.value.trim();
  const phone = document.getElementById("checkout-phone")?.value.trim();
  const address = document.getElementById("checkout-address")?.value.trim();
  const promoCode =
    document.getElementById("promo-code")?.value.trim().toUpperCase() || "";
  const paymentSelection =
    document.querySelector('input[name="payment-method"]:checked')?.value ||
    "Cash on Delivery";

  if (!name || !phone || !address) {
    button.disabled = false;
    button.innerHTML = originalText;
    showToast("Please fill in name, phone, and address.");
    return;
  }

  const itemsSummary = cart
    .map(
      (item) =>
        `- ${item.name} × ${item.quantity} = ${item.price * item.quantity} ብር`,
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
    customer: { name, phone, address, paymentMethod: paymentSelection },
    items: cart.map((item) => ({ ...item })),
    status: "Preparing",
    queuePosition,
    total,
    discount: discount * 100,
    payable: discountedTotal,
    estimatedMinutes,
    deliveryTime: `${estimatedMinutes} ደቂቃ`,
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
  showToast("Order placed and kitchen notified!");
  showOrderSuccess(order);

  const message = [
    "New Order",
    `Customer: ${name}`,
    `Phone: ${phone}`,
    `Payment: ${paymentSelection}`,
    `Table / Address: ${address}`,
    "",
    "Items:",
    itemsSummary,
    "",
    `Total: ${total} ብር`,
    `Discount: ${discount ? "10%" : "None"}`,
    `Payable: ${discountedTotal} ብር`,
  ].join("\n");

  const telegramUrl = `https://t.me/${telegramUser}?text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, "_blank", "noopener,noreferrer");

  setTimeout(() => {
    button.disabled = false;
    button.innerHTML = originalText;
  }, 700);
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
  button.textContent = preferredTheme === "dark" ? "☀️ Light" : "🌙 Dark";
}

function toggleTheme() {
  const currentTheme =
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", currentTheme);
  localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
  document.getElementById("theme-toggle").textContent =
    currentTheme === "dark" ? "☀️ Light" : "🌙 Dark";
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

  document.getElementById("active-users").textContent = activeUsers;
  document.getElementById("total-revenue").textContent = `${totalRevenue} ብር`;
  document.getElementById("total-cost").textContent = `${totalCost} ብር`;
  document.getElementById("net-profit").textContent = `${netProfit} ብር`;
  document.getElementById("profit-margin").textContent = `${profitMargin}%`;
}

function renderInventoryTable() {
  const body = document.getElementById("inventory-table-body");
  body.innerHTML = "";

  menuItems.forEach((item) => {
    const availability = item.stock > 0 ? "Available" : "Unavailable";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
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
          <button type="button" data-action="save-inventory" data-id="${item.id}" class="admin-button">Save</button>
          <button type="button" data-action="toggle-availability" data-id="${item.id}" class="admin-button secondary">${
            item.stock > 0 ? "Out of stock" : "Restock"
          }</button>
        </div>
      </td>
    `;
    body.appendChild(row);
  });
}

function renderIncomingOrders() {
  const body = document.getElementById("incoming-orders-table-body");
  body.innerHTML = "";
  const sortedIncoming = [...incomingOrders].sort(
    (a, b) => a.createdAt - b.createdAt,
  );

  if (!sortedIncoming.length) {
    body.innerHTML = `
      <tr>
        <td colspan="6" class="text-slate-500 text-center py-4">No incoming orders.</td>
      </tr>
    `;
    return;
  }

  sortedIncoming.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.customer.name}</td>
      <td>${order.items
        .map((item) => `${item.name} x ${item.quantity}`)
        .join("<br />")}</td>
      <td>${order.payable} ብር</td>
      <td>${new Date(order.createdAt).toLocaleString()}</td>
      <td>${order.status}</td>
      <td>${order.status === "Completed" ? "-" : `<button type="button" class="admin-button" data-action="mark-ready" data-id="${order.id}">Mark Ready</button>`}</td>
    `;
    body.appendChild(row);
  });
}

function renderAdminOrders() {
  const body = document.getElementById("orders-table-body");
  body.innerHTML = "";
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
      <td>${order.payable} ብር</td>
    `;
    body.appendChild(row);
  });
}

function renderTopSellingList() {
  const list = document.getElementById("top-selling-list");
  list.innerHTML = "";
  const sales = getSalesSummary();
  if (!sales.length) {
    list.innerHTML = "<p class='text-slate-500'>No sales yet.</p>";
    return;
  }

  const top = sales.sort((a, b) => b.quantity - a.quantity).slice(0, 4);

  top.forEach((item) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-card-header">
        <strong>${item.name}</strong>
        <span>${item.quantity} sold</span>
      </div>
      <p class="review-card-meta">Revenue ${item.revenue} ብር</p>
    `;
    list.appendChild(card);
  });
}

function renderLeastSellingList() {
  const list = document.getElementById("least-selling-list");
  list.innerHTML = "";
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
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-card-header">
        <strong>${item.name}</strong>
        <span>${item.quantity} sold</span>
      </div>
      <p class="review-card-meta">Low sales alert</p>
    `;
    list.appendChild(card);
  });
}

function renderReviewModeration() {
  const list = document.getElementById("review-moderation-list");
  list.innerHTML = "";

  if (!reviews.length) {
    list.innerHTML = "<p class='text-slate-500'>No reviews yet.</p>";
    return;
  }

  reviews.forEach((review) => {
    const item = menuItems.find((item) => item.id === review.itemId);
    const itemName = item ? item.name : "Unknown item";
    const isApproved = review.status === "approved";

    const card = document.createElement("div");
    card.className = "review-card";
    card.dataset.reviewId = review.id;
    card.innerHTML = `
      <div class="review-card-header">
        <strong>${itemName}</strong>
        <span class="badge-status ${
          isApproved
            ? "bg-emerald-100 text-emerald-800"
            : "bg-amber-100 text-amber-800"
        }">${isApproved ? "Approved" : "Pending"}</span>
      </div>
      <p class="review-card-meta">${review.name} · ${review.rating} ★</p>
      <p>${review.comment || ""}</p>
      <div class="review-card-actions">
        ${
          isApproved
            ? ""
            : `<button type="button" class="admin-button" data-action="approve-review" data-review-id="${review.id}" data-item-id="${review.itemId}">Approve</button>`
        }
        <button type="button" class="admin-button secondary" data-action="delete-review" data-review-id="${review.id}" data-item-id="${review.itemId}">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderPublicReviews() {
  const container = document.getElementById("public-reviews");
  if (!container) return;

  const approved = reviews.filter((review) => review.status === "approved");
  if (!approved.length) {
    container.innerHTML =
      '<p class="text-slate-500">No approved reviews yet.</p>';
    return;
  }

  container.innerHTML = approved
    .map((review) => {
      const item = menuItems.find((item) => item.id === review.itemId);
      const itemName = item ? item.name : "Unknown item";
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

function getSalesChartData(range = "day") {
  const today = new Date();
  const labels = [];
  const values = [];

  if (range === "day") {
    for (let hour = 9; hour <= 21; hour += 3) {
      labels.push(`${hour}:00`);
      values.push(
        orders
          .filter((order) => {
            const orderDate = new Date(order.createdAt);
            return (
              orderDate.getDate() === today.getDate() &&
              orderDate.getHours() >= hour &&
              orderDate.getHours() < hour + 3
            );
          })
          .reduce((sum, order) => sum + order.payable, 0),
      );
    }
  } else if (range === "week") {
    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    dayNames.forEach((day, index) => {
      labels.push(day);
      values.push(
        orders
          .filter((order) => {
            const orderDate = new Date(order.createdAt);
            return orderDate.getDay() === (index + 1) % 7;
          })
          .reduce((sum, order) => sum + order.payable, 0),
      );
    });
  } else {
    for (let i = 1; i <= 6; i += 1) {
      labels.push(`W${i}`);
      values.push(
        orders
          .filter((order) => {
            const orderDate = new Date(order.createdAt);
            const monthStart = new Date(
              today.getFullYear(),
              today.getMonth() - 5 + i,
              1,
            );
            return (
              orderDate >= monthStart &&
              orderDate <
                new Date(today.getFullYear(), today.getMonth() - 4 + i, 1)
            );
          })
          .reduce((sum, order) => sum + order.payable, 0),
      );
    }
  }

  const maxValue = Math.max(...values, 1);
  return { labels, values, maxValue };
}

function renderSalesChart(range = "day") {
  const container = document.getElementById("sales-chart-bars");
  if (!container) return;
  const { labels, values, maxValue } = getSalesChartData(range);

  container.innerHTML = labels
    .map((label, index) => {
      const height = Math.max(18, (values[index] / maxValue) * 100);
      return `
        <div class="chart-column">
          <div class="chart-bar-wrap">
            <div class="chart-bar" style="height:${height}%"></div>
          </div>
          <span class="chart-label">${label}</span>
        </div>
      `;
    })
    .join("");
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
  renderSalesChart(
    document.querySelector(".chart-range-btn.active")?.dataset.range || "day",
  );
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
  if (password === ADMIN_PASSWORD) {
    closeAdminLoginModal();
    openAdminPanel();
    showToast("Admin access granted.");
  } else {
    showToast("Invalid admin passcode.");
  }
}

function toggleFavorite(id) {
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return;

  if (favoriteIds.has(numericId)) {
    favoriteIds.delete(numericId);
    showToast("Removed from favorites.");
  } else {
    favoriteIds.add(numericId);
    showToast("Saved to favorites.");
  }

  try {
    localStorage.setItem(
      "restaurant-favorites",
      JSON.stringify([...favoriteIds]),
    );
  } catch (error) {
    console.error("Unable to save favorites:", error);
  }

  renderMenu(getFilteredItems());
}

function handleAdminEvents(event) {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  const id = Number(button.dataset.id);
  const itemId = Number(button.dataset.itemId);
  const reviewId = Number(button.dataset.reviewId);

  if (action === "toggle-favorite") {
    toggleFavorite(Number(button.dataset.id));
    return;
  }

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
    showToast("Inventory updated.");
  }

  if (action === "toggle-availability") {
    const menuItem = menuItems.find((item) => item.id === id);
    if (!menuItem) return;
    menuItem.stock = menuItem.stock > 0 ? 0 : 8;
    saveMenuItems();
    renderMenu(getFilteredItems());
    updateAdminPanel();
    showToast(
      menuItem.stock > 0 ? "Item restocked." : "Item marked out of stock.",
    );
  }

  if (action === "approve-review") {
    const review = reviews.find((item) => item.id === reviewId);
    if (review) {
      review.status = "approved";
      saveReviews();
      refreshReviewsUI();
      showToast("Review approved.");
    }
  }

  if (action === "delete-review") {
    reviews = reviews.filter((item) => item.id !== reviewId);
    saveReviews();
    refreshReviewsUI();
    showToast("Review deleted.");
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
      showToast(`Order #${order.number} marked ready.`);
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
  applyLanguageTranslations();
  renderMenu(getFilteredItems());
  updateFilterButtons();
  renderCart();
  renderPublicReviews();
  updateAdminPanel();
  renderOrdersSidebar();
  resumeCustomerOrder();

  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().catch(() => {});
  }

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => filterMenu(button.dataset.category));
  });

  const sortSelect = document.getElementById("sort-menu-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      menuSort = event.target.value;
      renderMenu(getFilteredItems());
    });
  }

  document.getElementById("search-input").addEventListener("input", (event) => {
    searchQuery = event.target.value.trim();
    renderMenu(getFilteredItems());
  });

  document.getElementById("promo-code").addEventListener("input", () => {
    const promoInput = document.getElementById("promo-code");
    if (promoInput.value.trim().toUpperCase() === "STUDENT10") {
      showToast("Promo code applied successfully.");
    }
    renderCart();
  });

  document.querySelectorAll(".chart-range-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".chart-range-btn")
        .forEach((btn) => btn.classList.toggle("active", btn === button));
      renderSalesChart(button.dataset.range || "day");
    });
  });

  document
    .getElementById("language-toggle")
    .addEventListener("click", toggleLanguage);
  document
    .getElementById("qr-menu-btn")
    .addEventListener("click", generateMenuQrCode);
  document.getElementById("close-qr-modal").addEventListener("click", () => {
    document.getElementById("qr-modal").classList.remove("open");
  });
  document.getElementById("qr-modal").addEventListener("click", (event) => {
    if (event.target.id === "qr-modal") {
      document.getElementById("qr-modal").classList.remove("open");
    }
  });

  document.getElementById("menu-grid").addEventListener("click", (event) => {
    const favoriteButton = event.target.closest(
      "[data-action='toggle-favorite']",
    );
    if (favoriteButton) {
      toggleFavorite(Number(favoriteButton.dataset.id));
      return;
    }

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

  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("close-cart").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document
    .getElementById("checkout-btn")
    .addEventListener("click", openCheckoutModal);
  document
    .getElementById("close-modal")
    .addEventListener("click", closeCheckoutModal);
  document
    .getElementById("cancel-checkout-btn")
    .addEventListener("click", closeCheckoutModal);
  document
    .getElementById("send-telegram-btn")
    .addEventListener("click", sendOrderToTelegram);
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  document
    .getElementById("admin-btn")
    .addEventListener("click", openAdminLoginModal);
  document
    .getElementById("admin-login-submit")
    .addEventListener("click", attemptAdminLogin);
  document
    .getElementById("close-admin-login")
    .addEventListener("click", closeAdminLoginModal);
  document
    .getElementById("close-admin")
    .addEventListener("click", closeAdminPanel);
  document
    .getElementById("admin-login-modal")
    .addEventListener("click", (event) => {
      if (event.target.id === "admin-login-modal") closeAdminLoginModal();
    });

  document.getElementById("cart-items").addEventListener("click", (event) => {
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
    .addEventListener("click", handleAdminEvents);
  document
    .getElementById("review-moderation-list")
    .addEventListener("click", handleAdminEvents);
  document
    .getElementById("orders-table-body")
    .addEventListener("change", handleOrderStatusChange);

  document
    .getElementById("submit-review-btn")
    .addEventListener("click", saveReview);
  document
    .getElementById("cancel-review-btn")
    .addEventListener("click", closeReviewModal);
  document
    .getElementById("close-review-modal")
    .addEventListener("click", closeReviewModal);

  document
    .getElementById("close-order-success")
    .addEventListener("click", () => {
      document.getElementById("order-success-modal").classList.remove("open");
    });
  document
    .getElementById("order-success-modal")
    .addEventListener("click", (event) => {
      if (event.target.id === "order-success-modal") {
        document.getElementById("order-success-modal").classList.remove("open");
      }
    });

  document.getElementById("review-modal").addEventListener("click", (event) => {
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
