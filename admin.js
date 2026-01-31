(function () {
  const API_BASE = 'http://localhost:4000';
  const STORAGE_KEY = 'admin_products_v1';
  const TOKEN_KEY = 'auth_token';
  const ALLOWED_CATEGORIES = /** @type {const} */ (['fashion', 'electronics', 'home', 'sports']);
  const ORDER_STATUSES = /** @type {const} */ (['pending', 'paid', 'shipped', 'delivered', 'cancelled']);

  const headerTitleEl = document.querySelector('.admin-header__title');
  const navItems = Array.from(document.querySelectorAll('.admin-nav__item'));
  const views = Array.from(document.querySelectorAll('[data-view]'));

  const formEl = document.getElementById('product-form');
  const formTitleEl = document.getElementById('product-form-title');
  const formHintEl = document.getElementById('product-form-hint');

  const productEditIdEl = document.getElementById('product-edit-id');
  const productIdEl = document.getElementById('product-id');
  const productNameEl = document.getElementById('product-name');
  const productPriceEl = document.getElementById('product-price');
  const productOfferPriceEl = document.getElementById('product-offer-price');
  const productImageEl = document.getElementById('product-image');
  const productImagePathEl = document.getElementById('product-image-path');
  const productImageFileEl = document.getElementById('product-image-file');
  const productUploadEl = document.getElementById('product-upload');
  const productUploadInnerEl = document.getElementById('product-upload-inner');
  const productImagePreviewEl = document.getElementById('product-image-preview');
  const productCategoryEl = document.getElementById('product-category');
  const productRatingEl = document.getElementById('product-rating');
  const productDiscountEl = document.getElementById('product-discount');

  const productSubmitEl = document.getElementById('product-submit');
  const productCancelEl = document.getElementById('product-cancel');

  const productsTbodyEl = document.getElementById('products-tbody');
  const ordersTbodyEl = document.getElementById('orders-tbody');
  const customersTbodyEl = document.getElementById('customers-tbody');
  const placeholderTextEl = document.getElementById('placeholder-text');
  const metricTotalProductsEl = document.getElementById('metric-total-products');
  const metricTotalCustomersEl = document.getElementById('metric-total-customers');
  const productFormCardEl = document.getElementById('product-form-card');
  const productListCardEl = document.getElementById('product-list-card');

  /** @type {{id: number, name: string, price: number, image: string, category: string, rating: number, discount: number, updatedAt: number}[]} */
  let products = [];

  /** @type {{id: number, status: string, total: number, createdAt: any, customerEmail: string, firstItemImage?: string, itemsCount?: number}[]} */
  let orders = [];

  /** @type {{id: number, name: string, email: string, createdAt: any}[]} */
  let customers = [];

  /** @type {File | null} */
  let pendingImageFile = null;
  /** @type {string | null} */
  let pendingObjectUrl = null;


  function getAuthToken() {
    const t = localStorage.getItem(TOKEN_KEY);
    return t ? String(t) : '';
  }

  async function apiJson(path, method, body) {
    const token = getAuthToken();
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data && data.error ? String(data.error) : `Request failed (${res.status})`;
      throw new Error(msg);
    }
    return data;
  }

  async function apiGetProducts() {
    const res = await fetch(`${API_BASE}/api/products`);
    const data = await res.json().catch(() => []);
    if (!res.ok) throw new Error((data && data.error) ? String(data.error) : `Failed to load products (${res.status})`);
    if (!Array.isArray(data)) return [];
    return data
      .filter((p) => p && typeof p === 'object')
      .map((p) => ({
        id: Number(p.id ?? 0),
        name: String(p.name ?? ''),
        price: Number(p.price ?? 0),
        image: normalizeStoredImagePath(p.image),
        category: String(p.category ?? ''),
        rating: Number(p.rating ?? 0),
        discount: Number(p.discount ?? 0),
        updatedAt: Number(p.updatedAt ?? Date.now()),
      }))
      .filter((p) => Number.isFinite(p.id) && p.id > 0 && p.name);
  }

  function formatCurrency(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return '$0.00';
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
  }

  function formatDate(ts) {
    const d = ts instanceof Date ? ts : new Date(ts);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  }

  async function apiGetAdminOrders() {
    return apiJson('/api/orders/admin/all', 'GET');
  }

  async function apiUpdateOrderStatus(id, status) {
    return apiJson(`/api/orders/admin/${id}/status`, 'PUT', { status });
  }

  async function apiGetCustomers() {
    return apiJson('/api/admin/customers', 'GET');
  }

  function renderCustomersTable(message) {
    if (!customersTbodyEl) return;
    customersTbodyEl.innerHTML = '';

    if (message) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 4;
      td.textContent = message;
      td.style.color = 'var(--admin-muted)';
      tr.appendChild(td);
      customersTbodyEl.appendChild(tr);
      return;
    }

    const rows = customers
      .slice()
      .sort((a, b) => Number(b.id ?? 0) - Number(a.id ?? 0))
      .map((c) => {
        const tr = document.createElement('tr');

        const idTd = document.createElement('td');
        idTd.textContent = `#${c.id}`;

        const nameTd = document.createElement('td');
        nameTd.textContent = String(c.name || '');

        const emailTd = document.createElement('td');
        emailTd.textContent = String(c.email || '');

        const joinedTd = document.createElement('td');
        joinedTd.textContent = formatDate(c.createdAt);

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(joinedTd);
        return tr;
      });

    if (rows.length === 0) {
      renderCustomersTable('No customers yet.');
      return;
    }

    rows.forEach((tr) => customersTbodyEl.appendChild(tr));
  }

  async function loadCustomers() {
    try {
      const data = await apiGetCustomers();
      if (!Array.isArray(data)) {
        customers = [];
        renderCustomersTable('Could not load customers.');
        return;
      }

      customers = data
        .filter((c) => c && typeof c === 'object')
        .map((c) => ({
          id: Number(c.id ?? 0),
          name: String(c.name ?? ''),
          email: String(c.email ?? ''),
          createdAt: c.createdAt,
        }))
        .filter((c) => Number.isFinite(c.id) && c.id > 0);

      if (metricTotalCustomersEl) metricTotalCustomersEl.textContent = String(customers.length);
      renderCustomersTable('');
    } catch (err) {
      const msg = err && err.message ? String(err.message) : 'Failed to load customers.';
      renderCustomersTable(msg);
    }
  }

  function renderOrdersTable(message) {
    if (!ordersTbodyEl) return;
    ordersTbodyEl.innerHTML = '';

    if (message) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 7;
      td.textContent = message;
      td.style.color = 'var(--admin-muted)';
      tr.appendChild(td);
      ordersTbodyEl.appendChild(tr);
      return;
    }

    const rows = orders
      .slice()
      .sort((a, b) => Number(b.id ?? 0) - Number(a.id ?? 0))
      .map((o) => {
        const tr = document.createElement('tr');

        const idTd = document.createElement('td');
        idTd.textContent = `#${o.id}`;

        const imageTd = document.createElement('td');
        const img = document.createElement('img');
        img.className = 'admin-thumb';
        img.loading = 'lazy';
        const imgPath = normalizeStoredImagePath(o.firstItemImage);
        img.src = imgPath ? `${API_BASE}${imgPath}` : 'assets/placeholder.svg';
        img.alt = 'Order item image';
        imageTd.appendChild(img);

        const customerTd = document.createElement('td');
        customerTd.textContent = String(o.customerEmail || '');

        const createdTd = document.createElement('td');
        createdTd.textContent = formatDate(o.createdAt);

        const totalTd = document.createElement('td');
        totalTd.className = 'is-right';
        totalTd.textContent = formatCurrency(o.total);

        const statusTd = document.createElement('td');
        const select = document.createElement('select');
        select.className = 'admin-input admin-input--compact';
        select.dataset.role = 'order-status';
        select.dataset.id = String(o.id);
        ORDER_STATUSES.forEach((s) => {
          const opt = document.createElement('option');
          opt.value = s;
          opt.textContent = s;
          select.appendChild(opt);
        });
        select.value = ORDER_STATUSES.includes(/** @type {any} */ (o.status)) ? String(o.status) : 'pending';
        statusTd.appendChild(select);

        const actionTd = document.createElement('td');
        actionTd.className = 'is-right';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'admin-btn admin-btn--link';
        btn.textContent = 'Save';
        btn.dataset.action = 'save-order-status';
        btn.dataset.id = String(o.id);
        actionTd.appendChild(btn);

        tr.appendChild(idTd);
        tr.appendChild(imageTd);
        tr.appendChild(customerTd);
        tr.appendChild(createdTd);
        tr.appendChild(totalTd);
        tr.appendChild(statusTd);
        tr.appendChild(actionTd);
        return tr;
      });

    if (rows.length === 0) {
      renderOrdersTable('No orders yet.');
      return;
    }

    rows.forEach((tr) => ordersTbodyEl.appendChild(tr));
  }

  async function loadOrders() {
    try {
      const data = await apiGetAdminOrders();
      if (!Array.isArray(data)) {
        orders = [];
        renderOrdersTable('Could not load orders.');
        return;
      }
      orders = data
        .filter((o) => o && typeof o === 'object')
        .map((o) => ({
          id: Number(o.id ?? 0),
          status: String(o.status ?? ''),
          total: Number(o.total ?? 0),
          createdAt: o.createdAt,
          customerEmail: String(o.customerEmail ?? ''),
          firstItemImage: normalizeStoredImagePath(o.firstItemImage),
          itemsCount: Number(o.itemsCount ?? 0),
        }))
        .filter((o) => Number.isFinite(o.id) && o.id > 0);

      renderOrdersTable('');
    } catch (err) {
      const msg = err && err.message ? String(err.message) : 'Failed to load orders.';
      renderOrdersTable(msg);
    }
  }

  function normalizeStoredImagePath(value) {
    const v = String(value || '').trim();
    if (v.startsWith('/uploads/')) return v;
    if (v.startsWith(`${API_BASE}/uploads/`)) return v.slice(API_BASE.length);
    if (v.startsWith('http://') || v.startsWith('https://')) return '';
    return v;
  }

  function loadProducts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((p) => p && typeof p === 'object')
        .map((p) => ({
          id: Number(p.id ?? 0),
          name: String(p.name ?? ''),
          price: Number(p.price ?? 0),
          image: normalizeStoredImagePath(p.image),
          category: String(p.category ?? ''),
          rating: Number(p.rating ?? 0),
          discount: Number(p.discount ?? 0),
          updatedAt: Number(p.updatedAt ?? Date.now()),
        }))
        .filter((p) => Number.isFinite(p.id) && p.id > 0 && p.name);
    } catch {
      return [];
    }
  }

  function saveProducts() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  function seedProductsIfEmpty() {
    // No default seed data: product images must be uploaded locally.
  }

  function setHint(message) {
    if (!formHintEl) return;
    formHintEl.textContent = message;
  }

  function setEditMode(product) {
    productEditIdEl.value = String(product.id);
    if (productIdEl) {
      productIdEl.value = String(product.id);
      productIdEl.disabled = true;
    }

    productNameEl.value = product.name;
    productPriceEl.value = String(product.price);
    if (productOfferPriceEl) {
      const offer = Number(product.price) * (1 - Number(product.discount || 0) / 100);
      productOfferPriceEl.value = Number.isFinite(offer) ? offer.toFixed(2) : '';
    }
    productImageEl.value = normalizeStoredImagePath(product.image);
    if (productImagePathEl) productImagePathEl.value = productImageEl.value;
    productCategoryEl.value = product.category;
    productRatingEl.value = String(product.rating);
    productDiscountEl.value = String(product.discount);

    updateImagePreview(productImageEl.value);

    pendingImageFile = null;
    if (pendingObjectUrl) {
      URL.revokeObjectURL(pendingObjectUrl);
      pendingObjectUrl = null;
    }

    formTitleEl.textContent = 'Edit Product';
    productSubmitEl.textContent = 'SAVE CHANGES';
    productCancelEl.hidden = false;
    setHint('Editing product — make changes and save.');
    productNameEl.focus();
  }

  function resetForm() {
    productEditIdEl.value = '';
    if (productIdEl) {
      productIdEl.disabled = false;
      productIdEl.value = '';
    }
    if (formEl) formEl.reset();
    if (productRatingEl) productRatingEl.value = '0';
    if (productDiscountEl) productDiscountEl.value = '0';
    if (productOfferPriceEl) productOfferPriceEl.value = '';
    if (productImageEl) productImageEl.value = '';
    if (productImagePathEl) productImagePathEl.value = '';

    pendingImageFile = null;
    if (pendingObjectUrl) {
      URL.revokeObjectURL(pendingObjectUrl);
      pendingObjectUrl = null;
    }
    if (productImagePreviewEl) {
      productImagePreviewEl.hidden = true;
      productImagePreviewEl.removeAttribute('src');
    }
    if (productUploadInnerEl) productUploadInnerEl.hidden = false;
    formTitleEl.textContent = 'Add Product';
    productSubmitEl.textContent = 'ADD PRODUCT';
    productCancelEl.hidden = true;
    setHint('');
  }

  function renderProductsTable() {
    if (!productsTbodyEl) return;
    productsTbodyEl.innerHTML = '';

    const rows = products
      .slice()
      .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0))
      .map((p) => {
        const tr = document.createElement('tr');

        const idTd = document.createElement('td');
        idTd.textContent = String(p.id);

        const imageTd = document.createElement('td');
        const img = document.createElement('img');
        img.className = 'admin-thumb';
        img.alt = p.name ? `${p.name} image` : 'Product image';
        const imgPath = normalizeStoredImagePath(p.image);
        img.src = imgPath && imgPath.startsWith('/uploads/') ? `${API_BASE}${imgPath}` : 'assets/placeholder.svg';
        img.loading = 'lazy';
        imageTd.appendChild(img);

        const nameTd = document.createElement('td');
        nameTd.textContent = p.name;

        const categoryTd = document.createElement('td');
        categoryTd.textContent = p.category;

        const priceTd = document.createElement('td');
        priceTd.className = 'is-right';
        priceTd.textContent = formatCurrency(p.price);

        const ratingTd = document.createElement('td');
        ratingTd.className = 'is-right';
        ratingTd.textContent = String(p.rating);

        const discountTd = document.createElement('td');
        discountTd.className = 'is-right';
        discountTd.textContent = `${p.discount}%`;

        const updatedTd = document.createElement('td');
        updatedTd.textContent = formatDate(p.updatedAt);

        const actionTd = document.createElement('td');
        actionTd.className = 'is-right';
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'admin-btn admin-btn--link';
        editBtn.textContent = 'Edit';
        editBtn.dataset.action = 'edit';
        editBtn.dataset.id = String(p.id);
        actionTd.appendChild(editBtn);

        tr.appendChild(idTd);
        tr.appendChild(imageTd);
        tr.appendChild(nameTd);
        tr.appendChild(categoryTd);
        tr.appendChild(priceTd);
        tr.appendChild(ratingTd);
        tr.appendChild(discountTd);
        tr.appendChild(updatedTd);
        tr.appendChild(actionTd);
        return tr;
      });

    if (rows.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 9;
      td.textContent = 'No products yet.';
      td.style.color = 'var(--admin-muted)';
      tr.appendChild(td);
      productsTbodyEl.appendChild(tr);
      return;
    }

    rows.forEach((tr) => productsTbodyEl.appendChild(tr));
  }


  function updateMetrics() {
    if (metricTotalProductsEl) {
      metricTotalProductsEl.textContent = String(products.length);
    }
    if (metricTotalCustomersEl) {
      metricTotalCustomersEl.textContent = customers.length ? String(customers.length) : '-';
    }
  }

  function showView(viewKey) {
    const viewMap = {
      products: 'view-products',
      productlist: 'view-products',
      orders: 'view-orders',
      customers: 'view-customers',
    };

    const viewId = viewMap[viewKey] ?? 'view-placeholder';

    views.forEach((v) => {
      v.hidden = v.id !== viewId;
    });

    navItems.forEach((n) => n.classList.remove('is-active'));
    const activeNav = navItems.find((n) => n.dataset.nav === viewKey);
    if (activeNav) activeNav.classList.add('is-active');

    if (headerTitleEl) {
      headerTitleEl.textContent = viewKey === 'products'
        ? 'Products'
        : viewKey === 'productlist'
          ? 'Product List'
        : viewKey === 'orders'
          ? 'Orders'
          : viewKey === 'customers'
            ? 'Customers'
            : 'Admin';
    }

    if (viewId === 'view-placeholder' && placeholderTextEl) {
      const safeCap = (s) => {
        const t = typeof s === 'string' ? s : '';
        return t ? t.charAt(0).toUpperCase() + t.slice(1) : 'This';
      };
      placeholderTextEl.textContent = `${safeCap(viewKey)} section is not available yet.`;
    }

    if (viewKey === 'products' || viewKey === 'productlist') {
      renderProductsTable();
    }

    if (viewKey === 'productlist') {
      if (productFormCardEl) productFormCardEl.hidden = true;
      if (productListCardEl) productListCardEl.hidden = false;
    } else if (viewKey === 'products') {
      if (productFormCardEl) productFormCardEl.hidden = false;
      if (productListCardEl) productListCardEl.hidden = false;
    }

    if (viewKey === 'orders') {
      loadOrders();
    }

    if (viewKey === 'customers') {
      loadCustomers();
    }
  }

  function isValidUploadsUrl(value) {
    return typeof value === 'string' && value.startsWith('/uploads/');
  }

  function updateImagePreview(src) {
    if (!productImagePreviewEl) return;
    if (!src) {
      productImagePreviewEl.hidden = true;
      productImagePreviewEl.removeAttribute('src');
      if (productUploadInnerEl) productUploadInnerEl.hidden = false;
      return;
    }
    if (productUploadInnerEl) productUploadInnerEl.hidden = true;
    productImagePreviewEl.hidden = false;
    productImagePreviewEl.src = src.startsWith('/uploads/') ? `${API_BASE}${src}` : src;
  }

  function generateProductId() {
    // Keep within signed 32-bit int range for MySQL INT.
    let id = Math.floor(Date.now() % 2000000000);
    if (id < 1) id = 1;
    while (products.some((p) => p.id === id)) id += 1;
    return id;
  }

  function computeDiscountPercent(price, offerPrice) {
    const p = Number(price);
    const o = Number(offerPrice);
    if (!Number.isFinite(p) || p <= 0) return 0;
    if (!Number.isFinite(o) || o < 0) return 0;
    const raw = (1 - o / p) * 100;
    const clamped = Math.max(0, Math.min(100, raw));
    return Math.round(clamped);
  }

  function computeOfferPriceFromDiscount(price, discount) {
    const p = Number(price);
    const d = Number(discount);
    if (!Number.isFinite(p) || p <= 0) return NaN;
    if (!Number.isFinite(d)) return NaN;
    const clamped = Math.max(0, Math.min(100, d));
    const offer = p * (1 - clamped / 100);
    return offer;
  }

  function getFormProductInput() {
    let id = NaN;
    if (productIdEl) {
      const idRaw = String(productIdEl.value || '').trim();
      id = idRaw ? Number(idRaw) : NaN;
    }
    const name = productNameEl.value.trim();
    const price = Number(productPriceEl.value);
    const offerPrice = productOfferPriceEl ? Number(productOfferPriceEl.value) : NaN;
    const image = normalizeStoredImagePath(productImageEl.value);
    const category = String(productCategoryEl.value || '').trim();
    const rating = Number(productRatingEl.value);
    const discountInput = Number(productDiscountEl.value);
    const hasOffer = productOfferPriceEl && String(productOfferPriceEl.value).trim() !== '';
    const discount = hasOffer ? computeDiscountPercent(price, offerPrice) : discountInput;
    return { id, name, price, offerPrice, image, category, rating, discount };
  }

  async function uploadImageToBackend(file) {
    if (!file) throw new Error('Choose an image file first.');
    if (!file.type || !file.type.startsWith('image/')) throw new Error('Please choose a valid image file.');

    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`${API_BASE}/api/uploads/image`, { method: 'POST', body: formData });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data && data.error ? String(data.error) : 'Upload failed.';
      throw new Error(msg);
    }

    const path = String(data.path || '').trim();
    const url = String(data.url || '').trim();
    const finalPath = path && path.startsWith('/uploads/') ? path : (url.startsWith(`${API_BASE}/uploads/`) ? url.slice(API_BASE.length) : '');
    if (!finalPath) throw new Error('Upload succeeded but no upload path returned.');
    return finalPath;
  }

  async function onSubmitProduct(e) {
    e.preventDefault();
    const { id, name, price, offerPrice, image, category, rating, discount } = getFormProductInput();
    if (!name) {
      setHint('Product name is required.');
      productNameEl.focus();
      return;
    }
    if (Number.isFinite(id) && (!Number.isInteger(id) || id <= 0)) {
      setHint('Product ID must be a whole number (1 or more), or leave it empty to auto-generate.');
      if (productIdEl) productIdEl.focus();
      return;
    }
    if (!Number.isFinite(price) || price < 0) {
      setHint('Price must be a valid number (0 or more).');
      productPriceEl.focus();
      return;
    }
    const offerStr = productOfferPriceEl ? String(productOfferPriceEl.value).trim() : '';
    const hasOffer = offerStr !== '';
    if (hasOffer) {
      if (!Number.isFinite(offerPrice) || offerPrice < 0) {
        setHint('Offer price must be a valid number (0 or more).');
        if (productOfferPriceEl) productOfferPriceEl.focus();
        return;
      }
      if (price > 0 && offerPrice > price) {
        setHint('Offer price must be less than or equal to Price.');
        if (productOfferPriceEl) productOfferPriceEl.focus();
        return;
      }
    }
    // Ensure image_url exists (upload only when submitting)
    let finalImagePath = image;
    if ((!finalImagePath || !isValidUploadsUrl(finalImagePath)) && pendingImageFile) {
      try {
        finalImagePath = await uploadImageToBackend(pendingImageFile);
        productImageEl.value = finalImagePath;
        if (productImagePathEl) productImagePathEl.value = finalImagePath;
        updateImagePreview(finalImagePath);
        pendingImageFile = null;
        if (pendingObjectUrl) {
          URL.revokeObjectURL(pendingObjectUrl);
          pendingObjectUrl = null;
        }
      } catch (err) {
        setHint(err.message || 'Image upload failed.');
        return;
      }
    }

    if (!finalImagePath || !isValidUploadsUrl(finalImagePath)) {
      setHint('Please select a product image. It will upload when you click ADD PRODUCT.');
      return;
    }

    updateImagePreview(image);
    if (!ALLOWED_CATEGORIES.includes(/** @type {any} */ (category))) {
      setHint('Please select a valid category.');
      productCategoryEl.focus();
      return;
    }
    if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
      setHint('Rating must be between 0 and 5.');
      productRatingEl.focus();
      return;
    }
    if (!Number.isFinite(discount) || discount < 0 || discount > 100 || !Number.isInteger(discount)) {
      setHint('Discount must be a whole number between 0 and 100.');
      productDiscountEl.focus();
      return;
    }

    productDiscountEl.value = String(discount);
    if (productOfferPriceEl && !hasOffer && price > 0) {
      const computedOffer = computeOfferPriceFromDiscount(price, discount);
      if (Number.isFinite(computedOffer)) productOfferPriceEl.value = computedOffer.toFixed(2);
    }

    const now = Date.now();

    const editingIdRaw = (productEditIdEl && productEditIdEl.value) ? Number(productEditIdEl.value) : 0;
    const isEditing = Number.isFinite(editingIdRaw) && editingIdRaw > 0;

    if (isEditing) {
      const idx = products.findIndex((p) => p.id === editingIdRaw);
      if (idx === -1) {
        setHint('Could not find that product to edit.');
        resetForm();
        renderProductsTable();
        updateMetrics();
        return;
      }

      const payload = { name, price, image: finalImagePath, category, rating, discount };
      try {
        const updated = await apiJson(`/api/products/${editingIdRaw}`, 'PUT', payload);
        const merged = { ...products[idx], ...updated, image: normalizeStoredImagePath(updated.image), updatedAt: now };
        products[idx] = merged;
        saveProducts();
        setHint('Product updated in database.');
      } catch (err) {
        setHint(err.message || 'Update failed.');
        return;
      }
    } else {
      const newId = Number.isFinite(id) && id > 0 ? id : generateProductId();
      if (productIdEl) productIdEl.value = String(newId);
      const payload = { id: newId, name, price, image: finalImagePath, category, rating, discount };

      try {
        const created = await apiJson('/api/products', 'POST', payload);
        products.push({
          id: Number(created.id ?? newId),
          name: String(created.name ?? name),
          price: Number(created.price ?? price),
          image: normalizeStoredImagePath(created.image ?? finalImagePath),
          category: String(created.category ?? category),
          rating: Number(created.rating ?? rating),
          discount: Number(created.discount ?? discount),
          updatedAt: now,
        });
        saveProducts();
        setHint('Product added to database.');
      } catch (err) {
        setHint(err.message || 'Create failed.');
        return;
      }
    }

    updateMetrics();
    renderProductsTable();
    resetForm();
  }

  function onTableClick(e) {
    const target = /** @type {HTMLElement} */ (e.target);
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.action !== 'edit') return;
    const id = target.dataset.id;
    const productId = Number(id);
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    setEditMode(product);
  }

  async function onOrdersTableClick(e) {
    const target = /** @type {HTMLElement} */ (e.target);
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.action !== 'save-order-status') return;

    const orderId = Number(target.dataset.id);
    if (!Number.isFinite(orderId) || orderId <= 0) return;

    const select = ordersTbodyEl
      ? /** @type {HTMLSelectElement | null} */ (ordersTbodyEl.querySelector(`select[data-role="order-status"][data-id="${orderId}"]`))
      : null;
    const nextStatus = select ? String(select.value) : '';
    if (!ORDER_STATUSES.includes(/** @type {any} */ (nextStatus))) {
      renderOrdersTable('Please choose a valid status.');
      return;
    }

    try {
      target.setAttribute('disabled', 'disabled');
      await apiUpdateOrderStatus(orderId, nextStatus);
      const idx = orders.findIndex((o) => o.id === orderId);
      if (idx !== -1) orders[idx] = { ...orders[idx], status: nextStatus };
      renderOrdersTable('');
    } catch (err) {
      const msg = err && err.message ? String(err.message) : 'Failed to update status.';
      renderOrdersTable(msg);
    } finally {
      target.removeAttribute('disabled');
    }
  }

  function init() {
    // Prefer DB products; fallback to localStorage if backend is not available.
    apiGetProducts()
      .then((rows) => {
        products = rows;
        updateMetrics();
        renderProductsTable();
      })
      .catch(() => {
        products = loadProducts();
        updateMetrics();
        renderProductsTable();
      });
    seedProductsIfEmpty();
    updateMetrics();

    navItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const viewKey = item.dataset.nav || 'dashboard';
        showView(viewKey);
      });
    });

    if (formEl) {
      formEl.addEventListener('submit', onSubmitProduct);
    }

    if (productCancelEl) {
      productCancelEl.addEventListener('click', () => {
        resetForm();
      });
    }

    if (productUploadEl && productImageFileEl) {
      const openFilePicker = () => productImageFileEl.click();
      productUploadEl.addEventListener('click', openFilePicker);
      productUploadEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openFilePicker();
        }
      });

      productImageFileEl.addEventListener('change', () => {
        const file = productImageFileEl.files && productImageFileEl.files[0];
        if (!file) return;
        if (!file.type || !file.type.startsWith('image/')) {
          setHint('Please choose a valid image file.');
          return;
        }

        pendingImageFile = file;
        // Show local preview immediately (no upload yet)
        if (pendingObjectUrl) URL.revokeObjectURL(pendingObjectUrl);
        pendingObjectUrl = URL.createObjectURL(file);
        updateImagePreview(pendingObjectUrl);

        // Clear previous uploaded path until submit uploads it
        productImageEl.value = '';
        if (productImagePathEl) productImagePathEl.value = '';

        setHint('Image selected. Click ADD PRODUCT to upload and save.');
      });
    }

    if (productImageEl && productImagePathEl) {
      productImagePathEl.value = normalizeStoredImagePath(productImageEl.value);
    }

    if (productOfferPriceEl && productPriceEl && productDiscountEl) {
      const recalc = () => {
        const price = Number(productPriceEl.value);
        const offerStr = String(productOfferPriceEl.value).trim();
        if (!offerStr) return;
        const offer = Number(offerStr);
        const discount = computeDiscountPercent(price, offer);
        if (Number.isFinite(discount)) productDiscountEl.value = String(discount);
      };
      productOfferPriceEl.addEventListener('input', recalc);
      productPriceEl.addEventListener('input', recalc);
    }

    if (productsTbodyEl) {
      productsTbodyEl.addEventListener('click', onTableClick);
    }

    if (ordersTbodyEl) {
      ordersTbodyEl.addEventListener('click', onOrdersTableClick);
    }

    showView('products');
  }

  init();
})();
