/* =========================================================
   BAISA KA SINGAR - JEWELLERY SHOP
   12 Categories × 100 Designs
   50 Silver + 50 Gold in every category
   ========================================================= */

const categories = [
  ["हार / Necklace", "Royal Necklace Designs", "💎"],
  ["Rani Haar", "Royal Bridal Collection", "👑"],
  ["झुमके", "Beautiful Earrings", "💎"],
  ["चूड़ियाँ", "Designer Bangles", "⭕"],
  ["कंगन", "Elegant Kada & Bangles", "✨"],
  ["अंगूठियाँ", "Beautiful Rings", "💍"],
  ["मांग टीका", "Bridal Maang Tikka", "👸"],
  ["नथ", "Traditional Nose Rings", "🌸"],
  ["पायल", "Traditional Payal", "✨"],
  ["बाजूबंद", "Royal Bajuband", "〰️"],
  ["माथा पट्टी", "Bridal Matha Patti", "👑"],
  ["Choker", "Premium Choker Designs", "💎"]
];

/* =========================================================
   PRICE
   Silver: ₹199 / ₹299 / ₹399
   Gold:   ₹499 / ₹599 / ₹699
   ========================================================= */

const silverPrices = [199, 299, 399];
const goldPrices = [499, 599, 699];

/* =========================================================
   JEWELLERY IMAGE GENERATOR
   हर product की अलग SVG image बनेगी।
   इसलिए एक ही photo बार-बार नहीं आएगी।
   ========================================================= */

function makeJewelleryImage(category, metal, number) {

  const gold = metal === "Gold";

  const main = gold ? "#D4AF37" : "#C8CCD2";
  const light = gold ? "#FFE9A6" : "#F7F9FC";
  const dark = gold ? "#8B6508" : "#6D737C";
  const stoneColors = [
    "#E91E63",
    "#7C4DFF",
    "#00BCD4",
    "#2196F3",
    "#4CAF50",
    "#FF5722",
    "#F44336",
    "#673AB7"
  ];

  const stone = stoneColors[(number - 1) % stoneColors.length];

  const bgColors = [
    "#FFF8F2",
    "#F8F1EA",
    "#F3F0EC",
    "#FFFDF8",
    "#F7F4EF",
    "#F2ECE6"
  ];

  const bg = bgColors[(number - 1) % bgColors.length];

  const variation = number % 10;
  let jewellery = "";

  /* ================= NECKLACE ================= */

  if (category === "हार / Necklace") {

    const beads = Array.from({length: 9}, (_, i) =>
      `<circle cx="${180 + i * 40}" cy="${145 + Math.abs(4-i)*10}"
      r="${7 + variation % 4}" fill="${main}" stroke="${dark}" stroke-width="2"/>`
    ).join("");

    jewellery = `
      <path d="M120 100 Q300 330 480 100"
      fill="none" stroke="${dark}" stroke-width="10"/>

      <path d="M120 100 Q300 300 480 100"
      fill="none" stroke="${main}" stroke-width="16"/>

      ${beads}

      <path d="M250 245 Q300 ${300 + variation*3} 350 245
      Q300 210 250 245Z"
      fill="${main}" stroke="${dark}" stroke-width="4"/>

      <circle cx="300" cy="${255 + variation}" r="24"
      fill="${stone}" stroke="${light}" stroke-width="7"/>
    `;
  }

  /* ================= RANI HAAR ================= */

  else if (category === "Rani Haar") {

    jewellery = `
      <path d="M100 85 Q300 260 500 85"
      fill="none" stroke="${main}" stroke-width="14"/>

      <path d="M125 130 Q300 320 475 130"
      fill="none" stroke="${dark}" stroke-width="8"/>

      <path d="M155 175 Q300 365 445 175"
      fill="none" stroke="${main}" stroke-width="12"/>

      <circle cx="300" cy="275" r="${45 + variation}"
      fill="${stone}" stroke="${main}" stroke-width="14"/>

      <path d="M270 315 Q300 360 330 315"
      fill="${main}" stroke="${dark}" stroke-width="5"/>
    `;
  }

  /* ================= EARRINGS ================= */

  else if (category === "झुमके") {

    jewellery = `
      <g transform="translate(160 70)">
        <circle cx="0" cy="0" r="18"
        fill="${main}" stroke="${dark}" stroke-width="4"/>
        <path d="M-45 40 Q0 100 45 40 Q0 15 -45 40Z"
        fill="${main}" stroke="${dark}" stroke-width="5"/>
        <circle cx="0" cy="75" r="${20 + variation}"
        fill="${stone}" stroke="${light}" stroke-width="7"/>
        <path d="M-35 95 Q0 145 35 95"
        fill="${main}" stroke="${dark}" stroke-width="5"/>
      </g>

      <g transform="translate(440 70)">
        <circle cx="0" cy="0" r="18"
        fill="${main}" stroke="${dark}" stroke-width="4"/>
        <path d="M-45 40 Q0 100 45 40 Q0 15 -45 40Z"
        fill="${main}" stroke="${dark}" stroke-width="5"/>
        <circle cx="0" cy="75" r="${20 + variation}"
        fill="${stone}" stroke="${light}" stroke-width="7"/>
        <path d="M-35 95 Q0 145 35 95"
        fill="${main}" stroke="${dark}" stroke-width="5"/>
      </g>
    `;
  }

  /* ================= BANGLES ================= */

  else if (category === "चूड़ियाँ") {

    jewellery = Array.from({length: 6}, (_, i) => `
      <circle cx="300" cy="220" r="${75 + i*22}"
      fill="none"
      stroke="${i % 2 === 0 ? main : dark}"
      stroke-width="${10 + (variation % 5)}"/>
    `).join("");

    jewellery += `
      <circle cx="300" cy="220" r="38"
      fill="${stone}" stroke="${light}" stroke-width="8"/>
    `;
  }

  /* ================= KADA ================= */

  else if (category === "कंगन") {

    jewellery = `
      <ellipse cx="300" cy="220" rx="185" ry="105"
      fill="none" stroke="${dark}" stroke-width="28"/>

      <ellipse cx="300" cy="220" rx="185" ry="105"
      fill="none" stroke="${main}" stroke-width="18"/>

      <circle cx="300" cy="115" r="${35 + variation}"
      fill="${stone}" stroke="${main}" stroke-width="12"/>

      <path d="M240 120 L210 70 M360 120 L390 70"
      stroke="${main}" stroke-width="12"/>
    `;
  }

  /* ================= RING ================= */

  else if (category === "अंगूठियाँ") {

    jewellery = `
      <ellipse cx="300" cy="270" rx="115" ry="75"
      fill="none" stroke="${dark}" stroke-width="28"/>

      <ellipse cx="300" cy="270" rx="115" ry="75"
      fill="none" stroke="${main}" stroke-width="17"/>

      <polygon points="
        300,80
        ${350 + variation},150
        325,225
        275,225
        ${250 - variation},150"
        fill="${stone}"
        stroke="${main}"
        stroke-width="13"/>

      <circle cx="300" cy="145" r="12"
      fill="${light}"/>
    `;
  }

  /* ================= MAANG TIKKA ================= */

  else if (category === "मांग टीका") {

    jewellery = `
      <path d="M300 50 L300 250"
      stroke="${main}" stroke-width="13"/>

      <circle cx="300" cy="75" r="25"
      fill="${stone}" stroke="${main}" stroke-width="9"/>

      <path d="M235 235 Q300 150 365 235"
      fill="none" stroke="${main}" stroke-width="13"/>

      <circle cx="300" cy="${280 + variation}"
      r="${35 + variation}"
      fill="${stone}" stroke="${light}" stroke-width="9"/>

      <path d="M265 300 Q300 345 335 300"
      fill="${main}" stroke="${dark}" stroke-width="6"/>
    `;
  }

  /* ================= NATH ================= */

  else if (category === "नथ") {

    jewellery = `
      <circle cx="300" cy="220" r="${120 + variation*3}"
      fill="none" stroke="${dark}" stroke-width="12"/>

      <circle cx="300" cy="220" r="${110 + variation*3}"
      fill="none" stroke="${main}" stroke-width="9"/>

      ${Array.from({length: 8}, (_, i) => {
        const a = (Math.PI * 2 / 8) * i;
        const x = 300 + Math.cos(a) * 115;
        const y = 220 + Math.sin(a) * 115;
        return `<circle cx="${x}" cy="${y}" r="10"
        fill="${stone}" stroke="${light}" stroke-width="4"/>`;
      }).join("")}

      <path d="M410 220 Q470 210 475 160"
      fill="none" stroke="${main}" stroke-width="8"/>
    `;
  }

  /* ================= PAYAL ================= */

  else if (category === "पायल") {

    jewellery = `
      <path d="M100 220 Q300 110 500 220 Q300 330 100 220Z"
      fill="none" stroke="${dark}" stroke-width="12"/>

      <path d="M105 220 Q300 135 495 220"
      fill="none" stroke="${main}" stroke-width="13"/>

      ${Array.from({length: 12}, (_, i) => `
        <circle cx="${120 + i*33}" cy="${205 + Math.sin(i)*20}"
        r="${8 + variation%3}"
        fill="${stone}" stroke="${main}" stroke-width="4"/>
      `).join("")}
    `;
  }

  /* ================= BAJUBAND ================= */

  else if (category === "बाजूबंद") {

    jewellery = `
      <path d="M145 105 Q300 215 455 105"
      fill="none" stroke="${dark}" stroke-width="25"/>

      <path d="M145 105 Q300 215 455 105"
      fill="none" stroke="${main}" stroke-width="16"/>

      <polygon points="
        300,165
        ${350 + variation},215
        325,285
        275,285
        ${250 - variation},215"
        fill="${stone}"
        stroke="${main}"
        stroke-width="12"/>

      <circle cx="300" cy="225" r="15"
      fill="${light}"/>
    `;
  }

  /* ================= MATHA PATTI ================= */

  else if (category === "माथा पट्टी") {

    jewellery = `
      <path d="M80 100 Q300 250 520 100"
      fill="none" stroke="${main}" stroke-width="13"/>

      <path d="M120 125 Q300 285 480 125"
      fill="none" stroke="${dark}" stroke-width="9"/>

      <circle cx="300" cy="250"
      r="${35 + variation}"
      fill="${stone}" stroke="${main}" stroke-width="11"/>

      <path d="M300 60 L300 215"
      stroke="${main}" stroke-width="10"/>

      ${[180,230,370,420].map(x => `
        <circle cx="${x}" cy="${155 + Math.abs(x-300)/3}"
        r="15" fill="${stone}" stroke="${light}" stroke-width="5"/>
      `).join("")}
    `;
  }

  /* ================= CHOKER ================= */

  else if (category === "Choker") {

    jewellery = `
      <path d="M125 125 Q300 265 475 125"
      fill="none" stroke="${dark}" stroke-width="35"/>

      <path d="M125 125 Q300 265 475 125"
      fill="none" stroke="${main}" stroke-width="22"/>

      ${Array.from({length: 7}, (_, i) => `
        <circle cx="${175 + i*42}"
        cy="${155 + Math.abs(3-i)*13}"
        r="${12 + variation%4}"
        fill="${stone}"
        stroke="${light}"
        stroke-width="5"/>
      `).join("")}

      <polygon points="
        300,220
        ${350 + variation},270
        325,335
        275,335
        ${250 - variation},270"
        fill="${stone}"
        stroke="${main}"
        stroke-width="12"/>
    `;
  }

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600"
       height="600"
       viewBox="0 0 600 600">

    <defs>
      <radialGradient id="bg">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="${bg}"/>
      </radialGradient>

      <filter id="shadow">
        <feDropShadow dx="0" dy="8"
        stdDeviation="8"
        flood-opacity=".25"/>
      </filter>
    </defs>

    <rect width="600" height="600"
    rx="35" fill="url(#bg)"/>

    <g filter="url(#shadow)">
      ${jewellery}
    </g>

    <text x="300" y="525"
      text-anchor="middle"
      font-family="Arial"
      font-size="22"
      font-weight="bold"
      fill="#4b1020">
      ${category}
    </text>

    <text x="300" y="555"
      text-anchor="middle"
      font-family="Arial"
      font-size="18"
      fill="${dark}">
      ${metal} • Design ${String(number).padStart(2,"0")}
    </text>

  </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}


/* =========================================================
   CREATE ALL PRODUCTS
   ========================================================= */

let products = [];

categories.forEach((category, catIndex) => {

  /* ---------- 50 SILVER ---------- */

  for (let i = 1; i <= 50; i++) {

    const id = catIndex * 100 + i;

    products.push({
      id: id,
      cat: category[0],
      catIndex: catIndex,
      metal: "Silver",
      number: i,
      name: `${category[0]} Silver Design ${String(i).padStart(2,"0")}`,
      desc: `Beautiful ${category[0]} Silver jewellery design — शादी, पार्टी और daily wear के लिए.`,
      price: silverPrices[(i - 1) % silverPrices.length],
      img: makeJewelleryImage(category[0], "Silver", i)
    });
  }

  /* ---------- 50 GOLD ---------- */

  for (let i = 1; i <= 50; i++) {

    const id = catIndex * 100 + 50 + i;

    products.push({
      id: id,
      cat: category[0],
      catIndex: catIndex,
      metal: "Gold",
      number: i,
      name: `${category[0]} Gold Design ${String(i).padStart(2,"0")}`,
      desc: `Beautiful ${category[0]} Gold jewellery design — शादी, पार्टी और bridal look के लिए.`,
      price: goldPrices[(i - 1) % goldPrices.length],
      img: makeJewelleryImage(category[0], "Gold", i)
    });
  }

});


/* =========================================================
   VARIABLES
   ========================================================= */

let activeCategory = null;

let cart = JSON.parse(
  localStorage.getItem("baisaCart") || "[]"
);

const categoryGrid = document.getElementById("categoryGrid");
const productGrid = document.getElementById("productGrid");
const search = document.getElementById("search");


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

categoryGrid.innerHTML = categories.map((c, i) => `
  <div class="category" onclick="showCategory(${i})">

    <div class="emoji">${c[2]}</div>

    <h3>${c[0]}</h3>

    <p>${c[1]}</p>

    <p><b>100 Designs</b></p>

    <small>
      50 Silver + 50 Gold
    </small>

  </div>
`).join("");


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(list = products) {

  document.getElementById("productInfo").textContent =
    `${list.length} Designs`;

  productGrid.innerHTML = list.map(p => `

    <article class="product"
      onclick="openProduct(${p.id})">

      <img
        src="${p.img}"
        alt="${p.name}"
        loading="lazy"
      >

      <div class="product-body">

        <div class="product-cat">
          ${p.cat} • ${p.metal}
        </div>

        <h3>${p.name}</h3>

        <div class="product-bottom">

          <span class="price">
            ₹${p.price.toLocaleString("en-IN")}
          </span>

          <button
            class="add"
            onclick="event.stopPropagation();
            addToCart(${p.id})">
            Add
          </button>

        </div>

      </div>

    </article>

  `).join("");
}


/* =========================================================
   SHOW CATEGORY
   ========================================================= */

function showCategory(index) {

  activeCategory = index;

  const category = categories[index];

  document.getElementById("collectionTitle").textContent =
    `${category[0]} — ${category[1]}`;

  const list = products.filter(
    p => p.catIndex === index
  );

  renderProducts(list);

  document.getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================================================
   SHOW ALL
   ========================================================= */

function showAll() {

  activeCategory = null;

  document.getElementById("collectionTitle").textContent =
    "खास Jewellery Collection";

  renderProducts(products);
}


/* =========================================================
   SEARCH
   ========================================================= */

search.addEventListener("input", () => {

  const q = search.value
    .trim()
    .toLowerCase();

  if (!q) {

    if (activeCategory === null) {
      showAll();
    } else {
      showCategory(activeCategory);
    }

    return;
  }

  const list = products.filter(p => {

    return (
      p.name +
      " " +
      p.cat +
      " " +
      p.metal +
      " " +
      p.desc
    )
    .toLowerCase()
    .includes(q);

  });

  document.getElementById("collectionTitle")
    .textContent = "Search Results";

  renderProducts(list);

});


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

function openProduct(id) {

  const p = products.find(
    x => x.id === id
  );

  if (!p) return;

  document.getElementById("modalImg").src =
    p.img;

  document.getElementById("modalImg").alt =
    p.name;

  document.getElementById("modalCat").textContent =
    `${p.cat} • ${p.metal}`;

  document.getElementById("modalName").textContent =
    p.name;

  document.getElementById("modalDesc").textContent =
    p.desc;

  document.getElementById("modalPrice").textContent =
    "₹" + p.price.toLocaleString("en-IN");

  document.getElementById("modalAdd").onclick =
    () => {

      addToCart(p.id);

      closeModal("productModal");

    };

  document.getElementById("productModal")
    .classList.remove("hidden");
}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(id) {

  const p = products.find(
    x => x.id === id
  );

  if (!p) return;

  const found = cart.find(
    x => x.id === id
  );

  if (found) {

    found.qty++;

  } else {

    cart.push({
      id: p.id,
      qty: 1
    });

  }

  saveCart();

  alert(`${p.name} Cart में Add हो गया ❤️`);
}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );

  const count = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  document.getElementById("cartCount")
    .textContent = count;
}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

  const box =
    document.getElementById("cartItems");

  if (!cart.length) {

    box.innerHTML = `
      <p>
        Cart अभी खाली है।
        Jewellery select करके Add करें 💎
      </p>
    `;

  } else {

    box.innerHTML = cart.map(item => {

      const p = products.find(
        x => x.id === item.id
      );

      if (!p) return "";

      return `

        <div class="cart-row">

          <img
            src="${p.img}"
            alt="${p.name}"
          >

          <div>

            <h4>${p.name}</h4>

            <p>
              ₹${p.price.toLocaleString("en-IN")}
              × ${item.qty}
            </p>

          </div>

          <button
            class="remove"
            onclick="removeCart(${p.id})">
            Remove
          </button>

        </div>

      `;

    }).join("");

  }


  const total = cart.reduce(
    (sum, item) => {

      const p = products.find(
        x => x.id === item.id
      );

      return sum +
        (p ? p.price * item.qty : 0);

    },
    0
  );


  document.getElementById("cartTotal")
    .textContent =
    "₹" + total.toLocaleString("en-IN");


  document.getElementById("cartModal")
    .classList.remove("hidden");
}


/* =========================================================
   REMOVE CART
   ========================================================= */

function removeCart(id) {

  cart = cart.filter(
    x => x.id !== id
  );

  saveCart();

  openCart();
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal(id) {

  document.getElementById(id)
    .classList.add("hidden");

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {

  if (!cart.length) {

    alert("Cart खाली है।");

    return;
  }

  const total = cart.reduce(
    (sum, item) => {

      const p = products.find(
        x => x.id === item.id
      );

      return sum +
        (p ? p.price * item.qty : 0);

    },
    0
  );


  alert(
    "Order तैयार है ❤️\n\n" +
    "Total: ₹" +
    total.toLocaleString("en-IN") +
    "\n\n" +
    "COD Available.\n" +
    "Payment Gateway / WhatsApp Order बाद में जोड़ सकते हैं।"
  );
}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

saveCart();

renderProducts(products);


/* =========================================================
   ESC KEY - MODAL CLOSE
   ========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      document
        .querySelectorAll(".modal")
        .forEach(modal => {

          modal.classList.add("hidden");

        });

    }

  }
);
