/**
 * KopiKita POS - Mobile-First Cafe Cashier Application
 * Built specifically for smartphones & touch devices
 */

const DATA_VERSION = "2.0"; // Bump to refresh default menu with real product photos

const DEFAULT_SETTINGS = {
  cafeName: "Kopi Kita Cafe",
  cafeTagline: "Artisan Coffee & Good Vibes",
  address: "Jl. Sudirman No. 45, Jakarta",
  phone: "081234567890",
  cashierName: "Barista",
  taxPercent: 0,
  servicePercent: 0,
  receiptFooter: "Terima kasih atas kunjungannya!\nFollow IG kami @kopikita.cafe",
  currency: "Rp"
};

const DEFAULT_MENU = [
  // Kategori: Kopi
  { 
    id: "m1", 
    name: "Es Kopi Susu Aren", 
    category: "Kopi", 
    price: 18000, 
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m2", 
    name: "Americano / Long Black", 
    category: "Kopi", 
    price: 15000, 
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m3", 
    name: "Caffe Latte", 
    category: "Kopi", 
    price: 22000, 
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m4", 
    name: "Caramel Macchiato", 
    category: "Kopi", 
    price: 25000, 
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m5", 
    name: "Espresso Single", 
    category: "Kopi", 
    price: 12000, 
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m6", 
    name: "Vanilla Cold Brew", 
    category: "Kopi", 
    price: 24000, 
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  
  // Kategori: Non-Kopi
  { 
    id: "m7", 
    name: "Matcha Latte", 
    category: "Non-Kopi", 
    price: 23000, 
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m8", 
    name: "Signature Dark Choco", 
    category: "Non-Kopi", 
    price: 22000, 
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m9", 
    name: "Red Velvet Latte", 
    category: "Non-Kopi", 
    price: 22000, 
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m10", 
    name: "Earl Grey Milk Tea", 
    category: "Non-Kopi", 
    price: 19000, 
    image: "https://images.unsplash.com/photo-1558857563-b37cf2f74116?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m11", 
    name: "Lemon Mint Ice Tea", 
    category: "Non-Kopi", 
    price: 14000, 
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80",
    available: true 
  },

  // Kategori: Makanan
  { 
    id: "m12", 
    name: "Nasi Goreng Spesial Cafe", 
    category: "Makanan", 
    price: 28000, 
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m13", 
    name: "Mie Goreng Nyemek", 
    category: "Makanan", 
    price: 24000, 
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m14", 
    name: "Rice Bowl Chicken Teriyaki", 
    category: "Makanan", 
    price: 30000, 
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m15", 
    name: "Spaghetti Aglio Olio", 
    category: "Makanan", 
    price: 29000, 
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    available: true 
  },

  // Kategori: Cemilan / Snack
  { 
    id: "m16", 
    name: "French Fries Crispy", 
    category: "Snack", 
    price: 17000, 
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m17", 
    name: "Cireng Bumbu Rujak", 
    category: "Snack", 
    price: 15000, 
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m18", 
    name: "Croissant Butter", 
    category: "Snack", 
    price: 20000, 
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m19", 
    name: "Roti Bakar Coklat Keju", 
    category: "Snack", 
    price: 18000, 
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80",
    available: true 
  },
  { 
    id: "m20", 
    name: "Pisang Goreng Karamel", 
    category: "Snack", 
    price: 16000, 
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80",
    available: true 
  }
];

class CafePOS {
  constructor() {
    this.checkVersionMigration();
    this.menu = this.loadStorage("cafepos_menu", DEFAULT_MENU);
    this.settings = this.loadStorage("cafepos_settings", DEFAULT_SETTINGS);
    this.cart = this.loadStorage("cafepos_cart", []);
    this.transactions = this.loadStorage("cafepos_transactions", []);
    
    this.currentCategory = "Semua";
    this.searchQuery = "";
    this.currentTab = "pos";
    
    // Order info
    this.orderType = "Dine In";
    this.customerName = "";
    this.tableNumber = "";
    this.paymentMethod = "Tunai";
    this.cashAmount = 0;
    this.discountAmount = 0;
    this.lastTransaction = null;
    
    this.init();
  }

  checkVersionMigration() {
    const savedVer = localStorage.getItem("cafepos_version");
    if (savedVer !== DATA_VERSION) {
      // Migrate to new default menu with real photos
      localStorage.setItem("cafepos_menu", JSON.stringify(DEFAULT_MENU));
      localStorage.setItem("cafepos_version", DATA_VERSION);
    }
  }

  loadStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.error(`Error loading ${key}`, e);
      return fallback;
    }
  }

  saveStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error saving ${key}`, e);
    }
  }

  init() {
    this.renderHeader();
    this.renderCategories();
    this.renderMenu();
    this.updateCartFloatingBar();
    this.renderHistory();
    this.renderManage();
    this.bindEvents();
    this.updateClock();
    setInterval(() => this.updateClock(), 30000);
  }

  formatRupiah(number) {
    return "Rp " + Number(number || 0).toLocaleString("id-ID");
  }

  updateClock() {
    const el = document.getElementById("live-clock");
    if (el) {
      const now = new Date();
      el.textContent = now.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' });
    }
  }

  renderHeader() {
    const cafeNameEl = document.getElementById("header-cafe-name");
    if (cafeNameEl) cafeNameEl.textContent = this.settings.cafeName;
  }

  renderCategories() {
    const container = document.getElementById("category-list");
    if (!container) return;

    const categories = ["Semua", ...new Set(this.menu.map(item => item.category))];

    container.innerHTML = categories.map(cat => {
      const isActive = this.currentCategory === cat;
      return `
        <button 
          data-category="${cat}"
          class="cat-chip whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all tap-bounce ${
            isActive 
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold" 
              : "bg-slate-800 text-slate-300 border border-slate-700/60 hover:bg-slate-700"
          }">
          ${cat}
        </button>
      `;
    }).join("");

    container.querySelectorAll(".cat-chip").forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.currentCategory = e.currentTarget.dataset.category;
        this.renderCategories();
        this.renderMenu();
      });
    });
  }

  // --- Menu Grid Render with Real Product Images ---
  renderMenu() {
    const container = document.getElementById("menu-grid");
    if (!container) return;

    let filtered = this.menu.filter(item => {
      const matchCat = this.currentCategory === "Semua" || item.category === this.currentCategory;
      const matchQuery = !this.searchQuery || 
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-2 py-16 text-center text-slate-400">
          <div class="text-4xl mb-2">🔍</div>
          <p class="text-sm font-medium">Menu tidak ditemukan</p>
          <p class="text-xs text-slate-500 mt-1">Coba cari dengan kata kunci lain</p>
        </div>
      `;
      return;
    }

    const fallbackImg = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80";

    container.innerHTML = filtered.map(item => {
      const inCart = this.cart.find(c => c.id === item.id);
      const qtyInCart = inCart ? inCart.qty : 0;
      const isAvailable = item.available !== false;
      const imgSrc = item.image || fallbackImg;

      return `
        <div 
          data-id="${item.id}"
          class="menu-card relative bg-slate-800/90 border border-slate-700/70 rounded-2xl p-2.5 flex flex-col justify-between transition-all tap-bounce shadow-sm overflow-hidden ${
            !isAvailable ? "opacity-50 grayscale pointer-events-none" : "active:border-amber-500/50"
          }">
          
          <!-- Product Image Banner -->
          <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-700/50 mb-2">
            <img 
              src="${imgSrc}" 
              alt="${item.name}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='${fallbackImg}'"
              class="w-full h-full object-cover">
            
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
            <span class="absolute bottom-1.5 left-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-300 backdrop-blur-sm">
              ${item.category}
            </span>

            ${qtyInCart > 0 ? `
              <div class="absolute top-1.5 right-1.5 bg-amber-500 text-slate-950 font-black text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-scaleIn border-2 border-slate-900">
                ${qtyInCart}
              </div>
            ` : ""}
          </div>

          <div>
            <h3 class="text-xs font-bold text-slate-100 line-clamp-2 leading-snug">${item.name}</h3>
          </div>

          <div class="mt-2 pt-2 border-t border-slate-700/40 flex items-center justify-between">
            <span class="text-xs font-black text-amber-400 font-mono">${this.formatRupiah(item.price)}</span>
            <button 
              data-add-id="${item.id}"
              class="add-item-btn w-7 h-7 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-md tap-bounce">
              +
            </button>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".add-item-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.addId;
        this.addToCart(id);
      });
    });

    container.querySelectorAll(".menu-card").forEach(card => {
      card.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        this.addToCart(id);
      });
    });
  }

  // --- Cart / Basket Logic ---
  addToCart(id) {
    const item = this.menu.find(m => m.id === id);
    if (!item || item.available === false) return;

    const existing = this.cart.find(c => c.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        qty: 1,
        note: ""
      });
    }

    this.saveStorage("cafepos_cart", this.cart);
    this.updateCartFloatingBar();
    this.renderMenu();
    this.vibrate(40);
  }

  updateItemQty(id, delta) {
    const itemIndex = this.cart.findIndex(c => c.id === id);
    if (itemIndex === -1) return;

    this.cart[itemIndex].qty += delta;
    if (this.cart[itemIndex].qty <= 0) {
      this.cart.splice(itemIndex, 1);
    }

    this.saveStorage("cafepos_cart", this.cart);
    this.updateCartFloatingBar();
    this.renderMenu();
    this.renderCartSheet();
    this.vibrate(30);
  }

  setItemNote(id, note) {
    const item = this.cart.find(c => c.id === id);
    if (item) {
      item.note = note;
      this.saveStorage("cafepos_cart", this.cart);
    }
  }

  clearCart() {
    this.cart = [];
    this.customerName = "";
    this.tableNumber = "";
    this.discountAmount = 0;
    this.cashAmount = 0;
    this.saveStorage("cafepos_cart", this.cart);
    this.updateCartFloatingBar();
    this.renderMenu();
    this.closeCartSheet();
  }

  vibrate(ms) {
    if (navigator.vibrate) {
      navigator.vibrate(ms);
    }
  }

  calculateTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    
    const discount = Math.min(this.discountAmount, subtotal);
    const subtotalAfterDiscount = Math.max(0, subtotal - discount);

    const tax = Math.round((subtotalAfterDiscount * (this.settings.taxPercent || 0)) / 100);
    const service = Math.round((subtotalAfterDiscount * (this.settings.servicePercent || 0)) / 100);
    const grandTotal = subtotalAfterDiscount + tax + service;

    const change = Math.max(0, this.cashAmount - grandTotal);

    return {
      totalItems,
      subtotal,
      discount,
      tax,
      service,
      grandTotal,
      change
    };
  }

  updateCartFloatingBar() {
    const bar = document.getElementById("floating-cart-bar");
    const countEl = document.getElementById("floating-cart-count");
    const totalEl = document.getElementById("floating-cart-total");

    const totals = this.calculateTotals();

    if (totals.totalItems > 0 && this.currentTab === "pos") {
      bar.classList.remove("translate-y-32", "opacity-0", "pointer-events-none");
      bar.classList.add("translate-y-0", "opacity-100");
      countEl.textContent = `${totals.totalItems} Item`;
      totalEl.textContent = this.formatRupiah(totals.subtotal);
    } else {
      bar.classList.add("translate-y-32", "opacity-0", "pointer-events-none");
      bar.classList.remove("translate-y-0", "opacity-100");
    }
  }

  // --- Checkout Bottom Sheet Modal ---
  openCartSheet() {
    const sheet = document.getElementById("cart-sheet-modal");
    if (!sheet) return;

    this.renderCartSheet();
    sheet.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  closeCartSheet() {
    const sheet = document.getElementById("cart-sheet-modal");
    if (!sheet) return;
    sheet.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  renderCartSheet() {
    const itemsListEl = document.getElementById("cart-items-list");
    const emptyStateEl = document.getElementById("cart-empty-state");
    const footerActionsEl = document.getElementById("cart-footer-actions");
    
    const totals = this.calculateTotals();
    const fallbackImg = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80";

    if (this.cart.length === 0) {
      if (itemsListEl) itemsListEl.innerHTML = "";
      if (emptyStateEl) emptyStateEl.classList.remove("hidden");
      if (footerActionsEl) footerActionsEl.classList.add("hidden");
      return;
    }

    if (emptyStateEl) emptyStateEl.classList.add("hidden");
    if (footerActionsEl) footerActionsEl.classList.remove("hidden");

    itemsListEl.innerHTML = this.cart.map(item => `
      <div class="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <img 
              src="${item.image || fallbackImg}" 
              alt="${item.name}"
              onerror="this.onerror=null; this.src='${fallbackImg}'"
              class="w-11 h-11 rounded-lg object-cover bg-slate-700/50">
            <div>
              <h4 class="text-xs font-bold text-slate-100 leading-tight">${item.name}</h4>
              <p class="text-xs font-semibold text-amber-400 font-mono mt-0.5">${this.formatRupiah(item.price)}</p>
            </div>
          </div>
          
          <div class="flex items-center gap-1.5 bg-slate-900/90 rounded-lg p-1 border border-slate-700/50">
            <button 
              data-minus="${item.id}"
              class="w-6 h-6 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xs tap-bounce">
              -
            </button>
            <span class="text-xs font-extrabold w-5 text-center text-slate-100">${item.qty}</span>
            <button 
              data-plus="${item.id}"
              class="w-6 h-6 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs tap-bounce">
              +
            </button>
          </div>
        </div>

        <!-- Note input -->
        <div class="flex items-center gap-2">
          <input 
            type="text" 
            data-note-id="${item.id}"
            value="${item.note || ""}" 
            placeholder="Catatan (cth: Less Ice, Panas, Gula Pisah...)" 
            class="w-full text-xs bg-slate-900/60 border border-slate-700/50 rounded-lg px-2.5 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/70">
        </div>
      </div>
    `).join("");

    itemsListEl.querySelectorAll("[data-minus]").forEach(btn => {
      btn.addEventListener("click", () => this.updateItemQty(btn.dataset.minus, -1));
    });
    itemsListEl.querySelectorAll("[data-plus]").forEach(btn => {
      btn.addEventListener("click", () => this.updateItemQty(btn.dataset.plus, 1));
    });
    itemsListEl.querySelectorAll("[data-note-id]").forEach(input => {
      input.addEventListener("input", (e) => this.setItemNote(input.dataset.noteId, e.target.value));
    });

    document.getElementById("sheet-subtotal").textContent = this.formatRupiah(totals.subtotal);
    
    const taxRow = document.getElementById("sheet-tax-row");
    if (this.settings.taxPercent > 0) {
      taxRow.classList.remove("hidden");
      document.getElementById("sheet-tax-label").textContent = `Pajak (${this.settings.taxPercent}%)`;
      document.getElementById("sheet-tax").textContent = this.formatRupiah(totals.tax);
    } else {
      taxRow.classList.add("hidden");
    }

    const serviceRow = document.getElementById("sheet-service-row");
    if (this.settings.servicePercent > 0) {
      serviceRow.classList.remove("hidden");
      document.getElementById("sheet-service-label").textContent = `Service (${this.settings.servicePercent}%)`;
      document.getElementById("sheet-service").textContent = this.formatRupiah(totals.service);
    } else {
      serviceRow.classList.add("hidden");
    }

    document.getElementById("sheet-grandtotal").textContent = this.formatRupiah(totals.grandTotal);
    this.renderCashShortcuts(totals.grandTotal);
    this.updatePaymentFields(totals);
  }

  renderCashShortcuts(grandTotal) {
    const shortcutsContainer = document.getElementById("cash-quick-chips");
    if (!shortcutsContainer) return;

    const shortcuts = [
      { label: "Uang Pas", amount: grandTotal },
      { label: "Rp 20rb", amount: 20000 },
      { label: "Rp 50rb", amount: 50000 },
      { label: "Rp 100rb", amount: 100000 },
      { label: "Rp 200rb", amount: 200000 }
    ].filter(s => s.amount >= grandTotal || s.label === "Uang Pas");

    const uniqueShortcuts = [];
    const seenAmounts = new Set();
    for (const s of shortcuts) {
      if (!seenAmounts.has(s.amount)) {
        seenAmounts.add(s.amount);
        uniqueShortcuts.push(s);
      }
    }

    shortcutsContainer.innerHTML = uniqueShortcuts.map(s => `
      <button 
        type="button"
        data-amount="${s.amount}"
        class="quick-cash-chip text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-amber-500 hover:bg-slate-700 text-slate-200 tap-bounce">
        ${s.label}
      </button>
    `).join("");

    shortcutsContainer.querySelectorAll(".quick-cash-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const amt = Number(btn.dataset.amount);
        this.cashAmount = amt;
        const cashInput = document.getElementById("cash-input");
        if (cashInput) cashInput.value = amt;
        this.updatePaymentFields(this.calculateTotals());
      });
    });
  }

  updatePaymentFields(totals) {
    const cashInput = document.getElementById("cash-input");
    const changeDisplay = document.getElementById("sheet-change-display");
    const changeRow = document.getElementById("sheet-change-row");
    const payBtn = document.getElementById("process-payment-btn");

    if (this.paymentMethod === "Tunai") {
      document.getElementById("cash-section").classList.remove("hidden");
      document.getElementById("qris-section").classList.add("hidden");
      
      const change = this.cashAmount - totals.grandTotal;
      if (this.cashAmount >= totals.grandTotal) {
        changeRow.classList.remove("hidden");
        changeDisplay.textContent = this.formatRupiah(change);
        changeDisplay.className = "text-sm font-extrabold text-emerald-400 font-mono";
        payBtn.disabled = false;
        payBtn.classList.remove("opacity-50", "pointer-events-none");
      } else {
        if (this.cashAmount > 0) {
          changeRow.classList.remove("hidden");
          changeDisplay.textContent = "Kurang " + this.formatRupiah(Math.abs(change));
          changeDisplay.className = "text-sm font-extrabold text-rose-400 font-mono";
          payBtn.disabled = true;
          payBtn.classList.add("opacity-50", "pointer-events-none");
        } else {
          changeRow.classList.add("hidden");
          payBtn.disabled = false;
          payBtn.classList.remove("opacity-50", "pointer-events-none");
        }
      }
    } else {
      document.getElementById("cash-section").classList.add("hidden");
      document.getElementById("qris-section").classList.remove("hidden");
      changeRow.classList.add("hidden");
      payBtn.disabled = false;
      payBtn.classList.remove("opacity-50", "pointer-events-none");
    }
  }

  processTransaction() {
    const totals = this.calculateTotals();
    if (totals.totalItems === 0) return;

    if (this.paymentMethod === "Tunai" && (this.cashAmount < totals.grandTotal)) {
      this.cashAmount = totals.grandTotal;
    }

    const transactionId = "TRX-" + Date.now().toString().slice(-6);
    const now = new Date();

    const transaction = {
      id: transactionId,
      date: now.toISOString(),
      dateFormatted: now.toLocaleDateString("id-ID", { day: '2-digit', month: 'short', year: 'numeric' }),
      timeFormatted: now.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' }),
      orderType: this.orderType,
      tableNumber: this.tableNumber || (this.orderType === "Dine In" ? "-" : "Take Away"),
      customerName: this.customerName || "Pelanggan",
      cashier: this.settings.cashierName || "Barista",
      items: JSON.parse(JSON.stringify(this.cart)),
      subtotal: totals.subtotal,
      discount: totals.discount,
      tax: totals.tax,
      service: totals.service,
      grandTotal: totals.grandTotal,
      paymentMethod: this.paymentMethod,
      cashAmount: this.paymentMethod === "Tunai" ? this.cashAmount : totals.grandTotal,
      change: this.paymentMethod === "Tunai" ? Math.max(0, this.cashAmount - totals.grandTotal) : 0
    };

    this.transactions.unshift(transaction);
    this.saveStorage("cafepos_transactions", this.transactions);

    this.lastTransaction = transaction;
    this.clearCart();
    this.closeCartSheet();
    this.showReceiptModal(transaction);
    this.renderHistory();
    this.vibrate([80, 50, 80]);
  }

  showReceiptModal(trx) {
    const modal = document.getElementById("receipt-modal");
    if (!modal) return;

    this.renderReceiptContent(trx);
    modal.classList.remove("hidden");
  }

  closeReceiptModal() {
    const modal = document.getElementById("receipt-modal");
    if (modal) modal.classList.add("hidden");
  }

  renderReceiptContent(trx) {
    const receiptEl = document.getElementById("receipt-printable-area");
    if (!receiptEl) return;

    const itemsRows = trx.items.map(item => `
      <div class="mb-1.5">
        <div class="flex justify-between font-bold text-xs">
          <span>${item.name}</span>
          <span>${this.formatRupiah(item.price * item.qty)}</span>
        </div>
        <div class="flex justify-between text-[11px] text-gray-600">
          <span>${item.qty}x @${this.formatRupiah(item.price)}</span>
          ${item.note ? `<span class="italic text-[10px] text-gray-500">(${item.note})</span>` : ""}
        </div>
      </div>
    `).join("");

    receiptEl.innerHTML = `
      <div class="text-center pb-3 border-b border-dashed border-gray-400">
        <h2 class="text-lg font-black tracking-tight uppercase">${this.settings.cafeName}</h2>
        <p class="text-[11px] text-gray-600">${this.settings.cafeTagline || ""}</p>
        <p class="text-[10px] text-gray-500 mt-0.5">${this.settings.address}</p>
        <p class="text-[10px] text-gray-500">WA/Telp: ${this.settings.phone}</p>
      </div>

      <div class="py-2.5 border-b border-dashed border-gray-400 text-[11px] space-y-0.5 text-gray-700">
        <div class="flex justify-between">
          <span>No: #${trx.id}</span>
          <span>${trx.dateFormatted} ${trx.timeFormatted}</span>
        </div>
        <div class="flex justify-between">
          <span>Kasir: ${trx.cashier}</span>
          <span>Jenis: ${trx.orderType}</span>
        </div>
        <div class="flex justify-between font-bold">
          <span>Pelanggan: ${trx.customerName}</span>
          <span>Meja: ${trx.tableNumber}</span>
        </div>
      </div>

      <div class="py-3 border-b border-dashed border-gray-400">
        ${itemsRows}
      </div>

      <div class="py-2.5 border-b border-dashed border-gray-400 text-xs space-y-1">
        <div class="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${this.formatRupiah(trx.subtotal)}</span>
        </div>
        ${trx.discount > 0 ? `
          <div class="flex justify-between text-emerald-600">
            <span>Diskon</span>
            <span>-${this.formatRupiah(trx.discount)}</span>
          </div>
        ` : ""}
        ${trx.tax > 0 ? `
          <div class="flex justify-between text-gray-600">
            <span>Pajak</span>
            <span>${this.formatRupiah(trx.tax)}</span>
          </div>
        ` : ""}
        ${trx.service > 0 ? `
          <div class="flex justify-between text-gray-600">
            <span>Service</span>
            <span>${this.formatRupiah(trx.service)}</span>
          </div>
        ` : ""}
        <div class="flex justify-between font-extrabold text-sm pt-1 border-t border-gray-300">
          <span>TOTAL</span>
          <span>${this.formatRupiah(trx.grandTotal)}</span>
        </div>
        <div class="flex justify-between text-gray-700 pt-1 text-[11px]">
          <span>Bayar (${trx.paymentMethod})</span>
          <span>${this.formatRupiah(trx.cashAmount)}</span>
        </div>
        ${trx.paymentMethod === "Tunai" ? `
          <div class="flex justify-between font-bold text-gray-900 text-xs">
            <span>Kembalian</span>
            <span>${this.formatRupiah(trx.change)}</span>
          </div>
        ` : ""}
      </div>

      <div class="pt-3 text-center text-[10px] text-gray-500 whitespace-pre-line leading-relaxed">
        ${this.settings.receiptFooter || "Terima Kasih!"}
      </div>
    `;

    const shareWaBtn = document.getElementById("share-whatsapp-btn");
    if (shareWaBtn) {
      shareWaBtn.onclick = () => this.shareReceiptWhatsApp(trx);
    }

    const printBtn = document.getElementById("print-receipt-btn");
    if (printBtn) {
      printBtn.onclick = () => window.print();
    }
  }

  shareReceiptWhatsApp(trx) {
    let msg = `*STRUK PEMBAYARAN - ${this.settings.cafeName.toUpperCase()}*\n`;
    msg += `--------------------------------\n`;
    msg += `No. Transaksi: #${trx.id}\n`;
    msg += `Tanggal: ${trx.dateFormatted} ${trx.timeFormatted}\n`;
    msg += `Pelanggan: ${trx.customerName} (Meja ${trx.tableNumber})\n`;
    msg += `Jenis: ${trx.orderType}\n`;
    msg += `Kasir: ${trx.cashier}\n`;
    msg += `--------------------------------\n`;
    trx.items.forEach(item => {
      msg += `${item.name}\n  ${item.qty}x @${this.formatRupiah(item.price)} = ${this.formatRupiah(item.price * item.qty)}\n`;
      if (item.note) msg += `  _(Catatan: ${item.note})_\n`;
    });
    msg += `--------------------------------\n`;
    msg += `Subtotal: ${this.formatRupiah(trx.subtotal)}\n`;
    if (trx.discount > 0) msg += `Diskon: -${this.formatRupiah(trx.discount)}\n`;
    if (trx.tax > 0) msg += `Pajak: ${this.formatRupiah(trx.tax)}\n`;
    msg += `*TOTAL: ${this.formatRupiah(trx.grandTotal)}*\n`;
    msg += `Metode: ${trx.paymentMethod}\n`;
    if (trx.paymentMethod === "Tunai") {
      msg += `Tunai: ${this.formatRupiah(trx.cashAmount)}\n`;
      msg += `Kembalian: ${this.formatRupiah(trx.change)}\n`;
    }
    msg += `--------------------------------\n`;
    msg += `${this.settings.receiptFooter || "Terima kasih atas kunjungannya!"}`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  // --- History & Rekap Harian Tab ---
  renderHistory() {
    const listEl = document.getElementById("history-list");
    const todayRevenueEl = document.getElementById("stat-today-revenue");
    const todayOrdersEl = document.getElementById("stat-today-orders");
    const todayItemsEl = document.getElementById("stat-today-items");

    if (!listEl) return;

    const todayStr = new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'short', year: 'numeric' });
    const todayTrx = this.transactions.filter(t => t.dateFormatted === todayStr);
    
    const todayRevenue = todayTrx.reduce((sum, t) => sum + t.grandTotal, 0);
    const todayItemsCount = todayTrx.reduce((sum, t) => sum + t.items.reduce((s, i) => s + i.qty, 0), 0);

    if (todayRevenueEl) todayRevenueEl.textContent = this.formatRupiah(todayRevenue);
    if (todayOrdersEl) todayOrdersEl.textContent = todayTrx.length.toString();
    if (todayItemsEl) todayItemsEl.textContent = todayItemsCount.toString();

    if (this.transactions.length === 0) {
      listEl.innerHTML = `
        <div class="py-12 text-center text-slate-400">
          <div class="text-4xl mb-2">📋</div>
          <p class="text-sm font-medium">Belum ada transaksi</p>
          <p class="text-xs text-slate-500 mt-1">Transaksi yang selesai akan tercatat di sini</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = this.transactions.map(trx => {
      const itemsSummary = trx.items.map(i => `${i.qty}x ${i.name}`).join(", ");
      return `
        <div class="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 space-y-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-700 text-amber-400 font-mono">#${trx.id}</span>
              <span class="text-xs text-slate-400">${trx.timeFormatted}</span>
            </div>
            <span class="text-xs font-bold px-2 py-0.5 rounded ${
              trx.paymentMethod === "Tunai" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-sky-500/20 text-sky-400 border border-sky-500/30"
            }">
              ${trx.paymentMethod}
            </span>
          </div>

          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-bold text-slate-100">${trx.customerName} <span class="text-xs font-normal text-slate-400">(${trx.orderType} • ${trx.tableNumber})</span></p>
              <p class="text-xs text-slate-400 line-clamp-1 mt-0.5">${itemsSummary}</p>
            </div>
            <p class="text-sm font-black text-amber-400 font-mono whitespace-nowrap">${this.formatRupiah(trx.grandTotal)}</p>
          </div>

          <div class="pt-2 border-t border-slate-700/50 flex justify-end gap-2">
            <button 
              data-reprint-id="${trx.id}"
              class="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-slate-200 flex items-center gap-1.5 tap-bounce">
              <span>🧾</span> Cetak Struk
            </button>
          </div>
        </div>
      `;
    }).join("");

    listEl.querySelectorAll("[data-reprint-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const trx = this.transactions.find(t => t.id === btn.dataset.reprintId);
        if (trx) this.showReceiptModal(trx);
      });
    });
  }

  // --- Manage (Menu & Settings) Tab ---
  renderManage() {
    const menuListEl = document.getElementById("manage-menu-list");
    if (!menuListEl) return;

    const fallbackImg = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80";

    menuListEl.innerHTML = this.menu.map(item => `
      <div class="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img 
            src="${item.image || fallbackImg}" 
            alt="${item.name}"
            onerror="this.onerror=null; this.src='${fallbackImg}'"
            class="w-12 h-12 rounded-xl object-cover bg-slate-700/50">
          <div>
            <h4 class="text-xs font-bold text-slate-100 leading-tight">${item.name}</h4>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-xs font-black text-amber-400 font-mono">${this.formatRupiah(item.price)}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 font-semibold">${item.category}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button 
            data-toggle-avail="${item.id}"
            class="text-xs px-2.5 py-1.5 rounded-lg font-bold tap-bounce ${
              item.available !== false 
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" 
                : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
            }">
            ${item.available !== false ? "Tersedia" : "Habis"}
          </button>
          <button 
            data-delete-menu="${item.id}"
            class="w-8 h-8 rounded-lg bg-slate-700/80 hover:bg-rose-500/30 text-rose-400 flex items-center justify-center text-sm tap-bounce">
            🗑️
          </button>
        </div>
      </div>
    `).join("");

    menuListEl.querySelectorAll("[data-toggle-avail]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.toggleAvail;
        const item = this.menu.find(m => m.id === id);
        if (item) {
          item.available = item.available === false ? true : false;
          this.saveStorage("cafepos_menu", this.menu);
          this.renderManage();
          this.renderMenu();
        }
      });
    });

    menuListEl.querySelectorAll("[data-delete-menu]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.deleteMenu;
        if (confirm("Hapus menu ini?")) {
          this.menu = this.menu.filter(m => m.id !== id);
          this.saveStorage("cafepos_menu", this.menu);
          this.renderManage();
          this.renderCategories();
          this.renderMenu();
        }
      });
    });

    const sName = document.getElementById("setting-cafe-name");
    const sTag = document.getElementById("setting-cafe-tagline");
    const sAddr = document.getElementById("setting-address");
    const sPhone = document.getElementById("setting-phone");
    const sCashier = document.getElementById("setting-cashier");
    const sTax = document.getElementById("setting-tax");
    const sFooter = document.getElementById("setting-footer");

    if (sName) sName.value = this.settings.cafeName || "";
    if (sTag) sTag.value = this.settings.cafeTagline || "";
    if (sAddr) sAddr.value = this.settings.address || "";
    if (sPhone) sPhone.value = this.settings.phone || "";
    if (sCashier) sCashier.value = this.settings.cashierName || "";
    if (sTax) sTax.value = this.settings.taxPercent || 0;
    if (sFooter) sFooter.value = this.settings.receiptFooter || "";
  }

  bindEvents() {
    const searchInput = document.getElementById("search-menu-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.renderMenu();
      });
    }

    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    const openCartBtn = document.getElementById("floating-cart-bar");
    if (openCartBtn) {
      openCartBtn.addEventListener("click", () => this.openCartSheet());
    }

    const closeCartBtn = document.getElementById("close-cart-btn");
    if (closeCartBtn) {
      closeCartBtn.addEventListener("click", () => this.closeCartSheet());
    }
    const cartBackdrop = document.getElementById("cart-sheet-backdrop");
    if (cartBackdrop) {
      cartBackdrop.addEventListener("click", () => this.closeCartSheet());
    }

    const clearCartBtn = document.getElementById("clear-cart-btn");
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        if (confirm("Kosongkan keranjang pesanan?")) {
          this.clearCart();
        }
      });
    }

    document.querySelectorAll(".order-type-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        document.querySelectorAll(".order-type-chip").forEach(c => {
          c.classList.remove("bg-amber-500", "text-slate-950", "font-bold");
          c.classList.add("bg-slate-800", "text-slate-300");
        });
        e.currentTarget.classList.remove("bg-slate-800", "text-slate-300");
        e.currentTarget.classList.add("bg-amber-500", "text-slate-950", "font-bold");
        this.orderType = e.currentTarget.dataset.type;
      });
    });

    const custInput = document.getElementById("customer-name-input");
    if (custInput) {
      custInput.addEventListener("input", (e) => this.customerName = e.target.value);
    }
    const tableInput = document.getElementById("table-number-input");
    if (tableInput) {
      tableInput.addEventListener("input", (e) => this.tableNumber = e.target.value);
    }

    document.querySelectorAll(".table-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        const val = e.currentTarget.dataset.table;
        this.tableNumber = val;
        if (tableInput) tableInput.value = val;
      });
    });

    document.querySelectorAll(".payment-method-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".payment-method-btn").forEach(b => {
          b.classList.remove("border-amber-500", "bg-amber-500/10", "text-amber-400");
          b.classList.add("border-slate-700", "text-slate-300");
        });
        e.currentTarget.classList.remove("border-slate-700", "text-slate-300");
        e.currentTarget.classList.add("border-amber-500", "bg-amber-500/10", "text-amber-400");
        this.paymentMethod = e.currentTarget.dataset.method;
        this.updatePaymentFields(this.calculateTotals());
      });
    });

    const cashInput = document.getElementById("cash-input");
    if (cashInput) {
      cashInput.addEventListener("input", (e) => {
        this.cashAmount = Number(e.target.value) || 0;
        this.updatePaymentFields(this.calculateTotals());
      });
    }

    const payBtn = document.getElementById("process-payment-btn");
    if (payBtn) {
      payBtn.addEventListener("click", () => this.processTransaction());
    }

    const closeReceiptBtn = document.getElementById("close-receipt-btn");
    if (closeReceiptBtn) {
      closeReceiptBtn.addEventListener("click", () => this.closeReceiptModal());
    }
    const receiptBackdrop = document.getElementById("receipt-backdrop");
    if (receiptBackdrop) {
      receiptBackdrop.addEventListener("click", () => this.closeReceiptModal());
    }

    const openAddMenuBtn = document.getElementById("open-add-menu-modal");
    if (openAddMenuBtn) {
      openAddMenuBtn.addEventListener("click", () => {
        document.getElementById("add-menu-modal").classList.remove("hidden");
      });
    }
    const closeAddMenuBtn = document.getElementById("close-add-menu-modal");
    if (closeAddMenuBtn) {
      closeAddMenuBtn.addEventListener("click", () => {
        document.getElementById("add-menu-modal").classList.add("hidden");
      });
    }

    const addMenuForm = document.getElementById("add-menu-form");
    if (addMenuForm) {
      addMenuForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("new-menu-name").value.trim();
        const category = document.getElementById("new-menu-category").value.trim();
        const price = Number(document.getElementById("new-menu-price").value) || 0;
        const image = document.getElementById("new-menu-image").value.trim() || "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80";

        if (!name || price <= 0) return alert("Mohon isi nama dan harga menu dengan benar");

        const newItem = {
          id: "m" + Date.now(),
          name,
          category,
          price,
          image,
          available: true
        };

        this.menu.push(newItem);
        this.saveStorage("cafepos_menu", this.menu);
        this.renderCategories();
        this.renderMenu();
        this.renderManage();

        addMenuForm.reset();
        document.getElementById("add-menu-modal").classList.add("hidden");
      });
    }

    const saveSettingsBtn = document.getElementById("save-settings-btn");
    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener("click", () => {
        this.settings.cafeName = document.getElementById("setting-cafe-name").value.trim() || "Kopi Kita Cafe";
        this.settings.cafeTagline = document.getElementById("setting-cafe-tagline").value.trim();
        this.settings.address = document.getElementById("setting-address").value.trim();
        this.settings.phone = document.getElementById("setting-phone").value.trim();
        this.settings.cashierName = document.getElementById("setting-cashier").value.trim() || "Barista";
        this.settings.taxPercent = Number(document.getElementById("setting-tax").value) || 0;
        this.settings.receiptFooter = document.getElementById("setting-footer").value.trim();

        this.saveStorage("cafepos_settings", this.settings);
        this.renderHeader();
        alert("Pengaturan cafe berhasil disimpan!");
      });
    }

    const exportBtn = document.getElementById("export-data-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const backupData = {
          menu: this.menu,
          settings: this.settings,
          transactions: this.transactions,
          exportDate: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `backup_kopikita_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    const importInput = document.getElementById("import-file-input");
    if (importInput) {
      importInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (data.menu) this.menu = data.menu;
            if (data.settings) this.settings = data.settings;
            if (data.transactions) this.transactions = data.transactions;

            this.saveStorage("cafepos_menu", this.menu);
            this.saveStorage("cafepos_settings", this.settings);
            this.saveStorage("cafepos_transactions", this.transactions);

            this.init();
            alert("Data berhasil dipulihkan dari file backup!");
          } catch (err) {
            alert("Gagal membaca file JSON backup.");
          }
        };
        reader.readAsText(file);
      });
    }

    const resetDefaultBtn = document.getElementById("reset-default-btn");
    if (resetDefaultBtn) {
      resetDefaultBtn.addEventListener("click", () => {
        if (confirm("Kembalikan menu ke contoh bawaan awal?")) {
          this.menu = DEFAULT_MENU;
          this.saveStorage("cafepos_menu", this.menu);
          this.renderCategories();
          this.renderMenu();
          this.renderManage();
          alert("Menu telah dikembalikan ke bawaan.");
        }
      });
    }
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.add("hidden"));
    const activePane = document.getElementById(`tab-${tabId}`);
    if (activePane) activePane.classList.remove("hidden");

    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      const isTarget = btn.dataset.tab === tabId;
      const label = btn.querySelector(".nav-label");

      if (isTarget) {
        btn.classList.add("text-amber-400");
        btn.classList.remove("text-slate-400");
        if (label) label.classList.add("font-bold");
      } else {
        btn.classList.remove("text-amber-400");
        btn.classList.add("text-slate-400");
        if (label) label.classList.remove("font-bold");
      }
    });

    this.updateCartFloatingBar();
    if (tabId === "history") this.renderHistory();
    if (tabId === "manage") this.renderManage();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.posApp = new CafePOS();
});
