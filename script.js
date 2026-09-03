// ===============================
// BAISA KA SINGAR - PRODUCT DATA
// ===============================

const categories = [
  {
    name: "हार / Necklace",
    desc: "Royal Necklace Designs",
    icon: "📿",
    keyword: "necklace"
  },
  {
    name: "रानी हार",
    desc: "Royal Rani Haar Collection",
    icon: "👑",
    keyword: "rani haar"
  },
  {
    name: "झुमके",
    desc: "Beautiful Earrings",
    icon: "✨",
    keyword: "earrings"
  },
  {
    name: "अंगूठियाँ",
    desc: "Beautiful Ring Collection",
    icon: "💍",
    keyword: "rings"
  },
  {
    name: "मांग टीका",
    desc: "Bridal Maang Tikka",
    icon: "👸",
    keyword: "maang tikka"
  },
  {
    name: "नथ",
    desc: "Traditional Nose Rings",
    icon: "🌸",
    keyword: "nath nose ring"
  },
  {
    name: "पायल",
    desc: "Traditional Payal",
    icon: "✨",
    keyword: "payal"
  },
  {
    name: "बाजूबंद",
    desc: "Royal Bajuband",
    icon: "〰️",
    keyword: "bajuband"
  },
  {
    name: "माथा पट्टी",
    desc: "Bridal Matha Patti",
    icon: "👑",
    keyword: "matha patti"
  },
  {
    name: "Choker",
    desc: "Premium Choker Designs",
    icon: "💎",
    keyword: "choker"
  }
];


// ==========================================
// IMAGE SYSTEM
// ==========================================

// अलग-अलग jewellery images के लिए अलग seeds
// हर product का seed अलग होगा इसलिए image repeat नहीं होगी।

function jewelleryImage(category, metal, number) {

  const seed =
    category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") +
    "-" +
    metal.toLowerCase() +
    "-" +
    number;

  return `https://loremflickr.com/900/900/jewelry,${encodeURIComponent(category)},${metal}?lock=${number + category.length * 100}`;
}


// ==========================================
// PRICE SYSTEM
// ==========================================

function getPrice(metal, number) {

  if (metal === "Silver") {

    const prices = [199, 299, 399];

    return prices[(number - 1) % prices.length];

  }

  const prices = [499, 599, 699];

  return prices[(number - 1) % prices.length];
}


// ==========================================
// PRODUCT NAME
// ==========================================

function getProductName(category, metal, number) {

  const silverNames = [
    "Classic",
    "Royal",
    "Designer",
    "Kundan",
    "Elegant",
    "Bridal",
    "Traditional",
    "Premium",
    "Beautiful",
    "Rajwadi"
  ];

  const goldNames = [
    "Royal Gold",
    "Bridal Gold",
    "Designer Gold",
    "Kundan Gold",
    "Premium Gold",
    "Rajwadi Gold",
    "Elegant Gold",
    "Traditional Gold",
    "Beautiful Gold",
    "Luxury Gold"
  ];

  const names = metal === "Silver"
    ? silverNames
    : goldNames;

  const style = names[(number - 1) % names.length];

  return `${style} ${category} ${metal} Design ${String(number).padStart(2, "0")}`;
}


// ==========================================
// CREATE 100 PRODUCTS PER CATEGORY
// 50 SILVER + 50 GOLD
// ==========================================

let products = [];

let productId = 1;

categories.forEach((category) => {

  // -------------------------
  // SILVER 01 - 50
  // -------------------------

  for (let i = 1; i <= 50; i++) {

    products.push({

      id: productId++,

      category: category.name,

      metal: "Silver",

      number: i,

      name: getProductName(
        category.name,
        "Silver",
        i
      ),

      price: getPrice("Silver", i),

      image: jewelleryImage(
        category.keyword,
        "Silver",
        i
      ),

      description:
        `Premium ${category.name} Silver Design ${i}. ` +
        `Beautiful artificial jewellery for wedding, party and special occasions.`

    });

  }


  // -------------------------
  // GOLD 01 - 50
  // -------------------------

  for (let i = 1; i <= 50; i++) {

    products.push({

      id: productId++,

      category: category.name,

      metal: "Gold",

      number: i,

      name: getProductName(
        category.name,
        "Gold",
        i
      ),

      price: getPrice("Gold", i),

      image: jewelleryImage(
        category.keyword,
        "Gold",
        i + 100
      ),

      description:
        `Premium ${category.name} Gold Design ${i}. ` +
        `Beautiful artificial jewellery for wedding, party and special occasions.`

    });

  }

});


// ==========================================
// CART
// ==========================================

let cart = JSON.parse(
  localStorage.getItem("baisaCart") || "[]"
);


// ==========================================
// ELEMENTS
// ==========================================

const categoryGrid =
  document.getElementById("categoryGrid");

const productGrid =
  document.getElementById("productGrid");

const collectionTitle =
  document.getElementById("collectionTitle");

const productInfo =
  document.getElementById("productInfo");

const search =
  document.getElementById("search");


// ==========================================
// CATEGORY CARDS
// ==========================================

categoryGrid.innerHTML = categories
  .map((category, index) => {

    return `
      <button
        class="category-card"
        onclick="showCategory(${index})"
      >

        <div class="category-icon">
          ${category.icon}
        </div>

        <h3>
          ${category.name}
        </h3>

        <p>
          ${category.desc}
        </p>

        <strong>
          100 Designs
        </strong>

        <small>
          50 Silver + 50 Gold
        </small>

      </button>
    `;

  })
  .join("");


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts(list) {

  productInfo.textContent =
    `${list.length} Designs`;

  productGrid.innerHTML =
    list.map(product => {

      return `

        <article
          class="product-card"
          onclick="openProduct(${product.id})"
        >

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='https://placehold.co/900x900/F8EFEA/5B071C?text=Jewellery+Design'"
          >

          <div class="product-body">

            <span class="product-category">
              ${product.category} • ${product.metal}
            </span>

            <h3>
              ${product.name}
            </h3>

            <div class="product-bottom">

              <strong>
                ₹${product.price.toLocaleString("en-IN")}
              </strong>

              <button
                onclick="event.stopPropagation(); addToCart(${product.id})"
              >
                Add
              </button>

            </div>

          </div>

        </article>

      `;

    }).join("");
}


// ==========================================
// SHOW CATEGORY
// ==========================================

let activeCategory = 0;

function showCategory(index) {

  activeCategory = index;

  const category =
    categories[index];

  collectionTitle.textContent =
    `${category.name} — ${category.desc}`;

  const list =
    products.filter(
      p => p.category === category.name
    );

  renderProducts(list);

  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });
}


// ==========================================
// SHOW ALL
// ==========================================

function showAll() {

  collectionTitle.textContent =
    "सभी Jewellery Designs";

  renderProducts(products);

}


// ==========================================
// SEARCH
// ==========================================

search.addEventListener(
  "input",
  function () {

    const text =
      this.value
        .trim()
        .toLowerCase();

    if (!text) {

      showCategory(activeCategory);

      return;

    }

    const result =
      products.filter(product =>

        product.name
          .toLowerCase()
          .includes(text)

        ||

        product.category
          .toLowerCase()
          .includes(text)

        ||

        product.metal
          .toLowerCase()
          .includes(text)

      );

    collectionTitle.textContent =
      "Search Results";

    renderProducts(result);

  }
);


// ==========================================
// OPEN PRODUCT
// ==========================================

function openProduct(id) {

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) return;


  document.getElementById("modalImg").src =
    product.image;

  document.getElementById("modalCat").textContent =
    `${product.category} • ${product.metal}`;

  document.getElementById("modalName").textContent =
    product.name;

  document.getElementById("modalDesc").textContent =
    product.description;

  document.getElementById("modalPrice").textContent =
    `₹${product.price.toLocaleString("en-IN")}`;


  document.getElementById("modalAdd").onclick =
    function () {

      addToCart(product.id);

      closeModal("productModal");

    };


  document
    .getElementById("productModal")
    .classList.remove("hidden");

}


// ==========================================
// CLOSE MODAL
// ==========================================

function closeModal(id) {

  document
    .getElementById(id)
    .classList.add("hidden");

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) return;


  const existing =
    cart.find(
      item => item.id === id
    );


  if (existing) {

    existing.qty++;

  } else {

    cart.push({

      id: product.id,

      name: product.name,

      price: product.price,

      image: product.image,

      qty: 1

    });

  }


  saveCart();

  alert(
    `${product.name} Cart में Add हो गया ❤️`
  );

}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );

  updateCartCount();

}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

  const count =
    cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );

  document.getElementById(
    "cartCount"
  ).textContent = count;

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

  const box =
    document.getElementById("cartItems");


  if (!cart.length) {

    box.innerHTML = `
      <div class="empty-cart">
        🛍️ Cart अभी खाली है
      </div>
    `;

    document.getElementById(
      "cartTotal"
    ).textContent = "₹0";

  } else {

    box.innerHTML =
      cart.map(item => {

        return `

          <div class="cart-item">

            <img
              src="${item.image}"
              alt=""
            >

            <div>

              <strong>
                ${item.name}
              </strong>

              <p>
                ₹${item.price.toLocaleString("en-IN")}
                × ${item.qty}
              </p>

            </div>

            <button
              onclick="removeFromCart(${item.id})"
            >
              ×
            </button>

          </div>

        `;

      }).join("");


    const total =
      cart.reduce(
        (sum, item) =>
          sum +
          item.price *
          item.qty,
        0
      );


    document.getElementById(
      "cartTotal"
    ).textContent =
      `₹${total.toLocaleString("en-IN")}`;

  }


  document
    .getElementById("cartModal")
    .classList.remove("hidden");

}


// ==========================================
// REMOVE CART ITEM
// ==========================================

function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  saveCart();

  openCart();

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

  if (!cart.length) {

    alert(
      "पहले Jewellery Cart में Add करें ❤️"
    );

    return;

  }


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.qty,
      0
    );


  alert(
    `Order Total: ₹${total.toLocaleString("en-IN")}\n\nCOD / Payment आगे जोड़ा जा सकता है।`
  );

}


// ==========================================
// INITIAL LOAD
// ==========================================

updateCartCount();

showCategory(0);
function checkout() {
  if (cart.length === 0) {
    alert("पहले कोई Jewellery Add करें ❤️");
    return;
  }

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.qty);
  }, 0);

  document.getElementById("paymentAmount").textContent =
    "₹" + total.toLocaleString("en-IN");

  closeModal("cartModal");

  document.getElementById("payment").scrollIntoView({
    behavior: "smooth"
  });
}

function paymentDone() {
  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.qty);
  }, 0);

  const message =
    "Hello Baisa Ka Singar,%0A%0A" +
    "I have completed my online payment.%0A" +
    "Order Amount: ₹" +
    total.toLocaleString("en-IN");

  window.open(
    "https://wa.me/917568496499?text=" + message,
    "_blank"
  );
}
