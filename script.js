/* =========================================================
   BAISA KA SINGAR
   PREMIUM JEWELLERY STORE
   ========================================================= */


/* =========================================================
   CATEGORIES
   ========================================================= */

const categories = [

  {
    name: "हार / Necklace",
    desc: "Royal Necklace Designs",
    icon: "💎",
    type: "necklace"
  },

  {
    name: "Rani Haar",
    desc: "Royal Bridal Collection",
    icon: "👑",
    type: "ranihaar"
  },

  {
    name: "झुमके",
    desc: "Beautiful Earrings",
    icon: "💎",
    type: "earrings"
  },

  {
    name: "चूड़ियाँ",
    desc: "Designer Bangles",
    icon: "⭕",
    type: "bangles"
  },

  {
    name: "कंगन",
    desc: "Elegant Kada & Bangles",
    icon: "✨",
    type: "kada"
  },

  {
    name: "अंगूठियाँ",
    desc: "Beautiful Rings",
    icon: "💍",
    type: "rings"
  },

  {
    name: "मांग टीका",
    desc: "Bridal Maang Tikka",
    icon: "👸",
    type: "maangtikka"
  },

  {
    name: "नथ",
    desc: "Traditional Nose Rings",
    icon: "🌸",
    type: "nath"
  },

  {
    name: "पायल",
    desc: "Traditional Payal",
    icon: "✨",
    type: "payal"
  },

  {
    name: "बाजूबंद",
    desc: "Royal Bajuband",
    icon: "〰️",
    type: "bajuband"
  },

  {
    name: "माथा पट्टी",
    desc: "Bridal Matha Patti",
    icon: "👑",
    type: "mathapatti"
  },

  {
    name: "Choker",
    desc: "Premium Choker Designs",
    icon: "💎",
    type: "choker"
  }

];


/* =========================================================
   PRICES
   ========================================================= */

const silverPrices = [
  199,
  299,
  399
];

const goldPrices = [
  499,
  599,
  699
];


/* =========================================================
   SVG JEWELLERY IMAGE GENERATOR
   ========================================================= */

function jewelleryImage(type, material, design) {

  const isGold = material === "Gold";

  const metal = isGold
    ? "#D4AF37"
    : "#C9CED6";

  const darkMetal = isGold
    ? "#8F6B16"
    : "#737B87";

  const stoneColors = [
    "#7DD3FC",
    "#A78BFA",
    "#F9A8D4",
    "#67E8F9",
    "#86EFAC",
    "#FDE68A",
    "#FCA5A5"
  ];

  const stone =
    stoneColors[
      (design + type.length) %
      stoneColors.length
    ];

  const variation =
    (design % 7) * 6;

  let art = "";


  /* =======================================================
     NECKLACE
     ======================================================= */

  if (type === "necklace") {

    art = `
      <path
        d="M170 180 Q450 ${300 + variation} 730 180"
        fill="none"
        stroke="${metal}"
        stroke-width="24"
      />

      <path
        d="M200 210 Q450 ${370 + variation} 700 210"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="10"
      />

      ${[0,1,2,3,4,5,6].map(i => `
        <circle
          cx="${240 + i * 70}"
          cy="${235 + Math.abs(3-i)*20 + variation}"
          r="${15 + (design+i)%8}"
          fill="${stone}"
          stroke="${metal}"
          stroke-width="8"
        />
      `).join("")}

      <path
        d="M390 ${310 + variation}
           L450 ${390 + variation}
           L510 ${310 + variation}
           L450 ${285 + variation}
           Z"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="12"
      />
    `;

  }


  /* =======================================================
     RANI HAAR
     ======================================================= */

  else if (type === "ranihaar") {

    art = `
      <path
        d="M140 150 Q450 300 760 150"
        fill="none"
        stroke="${metal}"
        stroke-width="18"
      />

      <path
        d="M130 210 Q450 390 770 210"
        fill="none"
        stroke="${metal}"
        stroke-width="16"
      />

      <path
        d="M120 270 Q450 470 780 270"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      ${[0,1,2,3,4,5,6,7].map(i => `
        <circle
          cx="${160+i*82}"
          cy="${220 + Math.sin(i)*25}"
          r="${16+(design+i)%7}"
          fill="${stone}"
          stroke="${metal}"
          stroke-width="7"
        />
      `).join("")}

      <path
        d="M370 360 L450 470 L530 360 L450 325 Z"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="13"
      />
    `;

  }


  /* =======================================================
     EARRINGS
     ======================================================= */

  else if (type === "earrings") {

    art = `
      <circle
        cx="300"
        cy="220"
        r="45"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="14"
      />

      <circle
        cx="600"
        cy="220"
        r="45"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="14"
      />

      <path
        d="M260 260 Q300 350 360 420 Q300 500 240 420"
        fill="none"
        stroke="${metal}"
        stroke-width="22"
      />

      <path
        d="M640 260 Q600 350 540 420 Q600 500 660 420"
        fill="none"
        stroke="${metal}"
        stroke-width="22"
      />

      <circle
        cx="300"
        cy="430"
        r="${55 + variation}"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="12"
      />

      <circle
        cx="600"
        cy="430"
        r="${55 + variation}"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="12"
      />
    `;

  }


  /* =======================================================
     BANGLES
     ======================================================= */

  else if (type === "bangles") {

    art = `
      <ellipse
        cx="450"
        cy="330"
        rx="${220 + variation}"
        ry="${100 + variation/2}"
        fill="none"
        stroke="${metal}"
        stroke-width="32"
      />

      <ellipse
        cx="450"
        cy="330"
        rx="${180 + variation}"
        ry="${75 + variation/3}"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      ${[0,1,2,3,4].map(i => `
        <circle
          cx="${270+i*90}"
          cy="${330 + Math.sin(i)*45}"
          r="${18+(design+i)%8}"
          fill="${stone}"
          stroke="${metal}"
          stroke-width="7"
        />
      `).join("")}
    `;

  }


  /* =======================================================
     KADA
     ======================================================= */

  else if (type === "kada") {

    art = `
      <ellipse
        cx="450"
        cy="330"
        rx="235"
        ry="115"
        fill="none"
        stroke="${metal}"
        stroke-width="${48 + variation}"
      />

      <ellipse
        cx="450"
        cy="330"
        rx="180"
        ry="72"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      <path
        d="M290 290 Q450 190 610 290"
        fill="none"
        stroke="${stone}"
        stroke-width="20"
      />

      <circle
        cx="450"
        cy="215"
        r="38"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="10"
      />
    `;

  }


  /* =======================================================
     RINGS
     ======================================================= */

  else if (type === "rings") {

    art = `
      <ellipse
        cx="450"
        cy="350"
        rx="180"
        ry="210"
        fill="none"
        stroke="${metal}"
        stroke-width="${38 + variation}"
      />

      <path
        d="M330 250
           Q450 130 570 250
           Q450 350 330 250"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="15"
      />

      <circle
        cx="450"
        cy="205"
        r="${55 + design%20}"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="12"
      />
    `;

  }


  /* =======================================================
     MAANG TIKKA
     ======================================================= */

  else if (type === "maangtikka") {

    art = `
      <path
        d="M450 100 L450 320"
        stroke="${metal}"
        stroke-width="18"
      />

      <circle
        cx="450"
        cy="160"
        r="38"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="10"
      />

      <path
        d="M340 300 Q450 220 560 300"
        fill="none"
        stroke="${metal}"
        stroke-width="20"
      />

      <circle
        cx="450"
        cy="370"
        r="${70 + variation}"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="15"
      />

      ${[0,1,2,3].map(i => `
        <circle
          cx="${365+i*57}"
          cy="${300 + Math.abs(1.5-i)*20}"
          r="14"
          fill="${stone}"
        />
      `).join("")}
    `;

  }


  /* =======================================================
     NATH
     ======================================================= */

  else if (type === "nath") {

    art = `
      <circle
        cx="450"
        cy="350"
        r="${180 + variation}"
        fill="none"
        stroke="${metal}"
        stroke-width="24"
      />

      <circle
        cx="450"
        cy="350"
        r="115"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="9"
      />

      ${[0,1,2,3,4,5].map(i => {

        const angle =
          (i * 60 - 30) *
          Math.PI / 180;

        const x =
          450 +
          Math.cos(angle) * 180;

        const y =
          350 +
          Math.sin(angle) * 180;

        return `
          <circle
            cx="${x}"
            cy="${y}"
            r="${18+(design+i)%8}"
            fill="${stone}"
            stroke="${metal}"
            stroke-width="7"
          />
        `;

      }).join("")}

      <path
        d="M610 480 Q680 540 720 470"
        fill="none"
        stroke="${metal}"
        stroke-width="16"
      />
    `;

  }


  /* =======================================================
     PAYAL
     ======================================================= */

  else if (type === "payal") {

    art = `
      <path
        d="M120 390 Q450 ${180 + variation} 780 390"
        fill="none"
        stroke="${metal}"
        stroke-width="28"
      />

      <path
        d="M140 430 Q450 ${230 + variation} 760 430"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      ${[0,1,2,3,4,5,6,7,8].map(i => `
        <circle
          cx="${160+i*72}"
          cy="${385 + Math.sin(i)*35}"
          r="${15+(design+i)%7}"
          fill="${stone}"
          stroke="${metal}"
          stroke-width="6"
        />
      `).join("")}

      ${[0,1,2,3,4,5].map(i => `
        <path
          d="M${260+i*75} 405
             L${260+i*75} 500"
          stroke="${metal}"
          stroke-width="9"
        />

        <circle
          cx="${260+i*75}"
          cy="515"
          r="13"
          fill="${stone}"
        />
      `).join("")}
    `;

  }


  /* =======================================================
     BAJUBAND
     ======================================================= */

  else if (type === "bajuband") {

    art = `
      <path
        d="M170 230 Q450 450 730 230"
        fill="none"
        stroke="${metal}"
        stroke-width="35"
      />

      <path
        d="M200 270 Q450 450 700 270"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      <path
        d="M360 330 L450 220 L540 330 L450 410 Z"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="15"
      />

      ${[0,1,2,3].map(i => `
        <circle
          cx="${300+i*100}"
          cy="${310 + Math.abs(1.5-i)*30}"
          r="18"
          fill="${stone}"
        />
      `).join("")}
    `;

  }


  /* =======================================================
     MATHA PATTI
     ======================================================= */

  else if (type === "mathapatti") {

    art = `
      <path
        d="M130 230 Q450 420 770 230"
        fill="none"
        stroke="${metal}"
        stroke-width="24"
      />

      <path
        d="M150 180 Q450 330 750 180"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      <path
        d="M450 130 L450 360"
        stroke="${metal}"
        stroke-width="18"
      />

      <circle
        cx="450"
        cy="390"
        r="${65 + variation}"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="14"
      />

      ${[0,1,2,3,4,5].map(i => `
        <circle
          cx="${190+i*104}"
          cy="${230 + Math.sin(i)*30}"
          r="16"
          fill="${stone}"
          stroke="${metal}"
          stroke-width="6"
        />
      `).join("")}
    `;

  }


  /* =======================================================
     CHOKER
     ======================================================= */

  else if (type === "choker") {

    art = `
      <path
        d="M150 220 Q450 390 750 220"
        fill="none"
        stroke="${metal}"
        stroke-width="45"
      />

      <path
        d="M170 245 Q450 410 730 245"
        fill="none"
        stroke="${darkMetal}"
        stroke-width="12"
      />

      ${[0,1,2,3,4,5,6].map(i => `
        <circle
          cx="${200+i*83}"
          cy="${260 + Math.abs(3-i)*22}"
          r="${20+(design+i)%8}"
          fill="${stone}"
          stroke="${metal}"
          stroke-width="8"
        />
      `).join("")}

      <path
        d="M390 340 L450 430 L510 340 L450 315 Z"
        fill="${stone}"
        stroke="${metal}"
        stroke-width="13"
      />
    `;

  }


  /* =======================================================
     SVG
     ======================================================= */

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900"
      height="1100"
      viewBox="0 0 900 700"
    >

      <defs>

        <linearGradient
          id="bg"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="#fffaf5"
          />

          <stop
            offset="100%"
            stop-color="#f4e8df"
          />
        </linearGradient>

        <radialGradient
          id="shine"
        >
          <stop
            offset="0%"
            stop-color="#ffffff"
            stop-opacity=".9"
          />

          <stop
            offset="100%"
            stop-color="#ffffff"
            stop-opacity="0"
          />
        </radialGradient>

      </defs>


      <rect
        width="900"
        height="700"
        rx="30"
        fill="url(#bg)"
      />

      <circle
        cx="150"
        cy="100"
        r="120"
        fill="url(#shine)"
      />

      <circle
        cx="760"
        cy="580"
        r="150"
        fill="url(#shine)"
      />


      ${art}


      <text
        x="450"
        y="620"
        text-anchor="middle"
        font-family="Arial"
        font-size="28"
        font-weight="bold"
        fill="${isGold ? "#80610f" : "#555c66"}"
      >
        ${material.toUpperCase()} • DESIGN ${String(design).padStart(2,"0")}
      </text>

    </svg>
  `;


  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);

}


/* =========================================================
   PRODUCTS
   ========================================================= */

let products = [];


categories.forEach((category, categoryIndex) => {


  /* -------------------------------------------------------
     SILVER — 50 DESIGNS
     ------------------------------------------------------- */

  for (let i = 1; i <= 50; i++) {

    products.push({

      id: `S-${categoryIndex}-${i}`,

      cat: category.name,

      catIndex: categoryIndex,

      material: "Silver",

      name:
        `${category.name} Silver Design ${String(i).padStart(2,"0")}`,

      desc:
        `Premium Silver ${category.name} — elegant design for शादी, पार्टी और special occasions.`,

      price:
        silverPrices[
          (i - 1 + categoryIndex) %
          silverPrices.length
        ],

      img:
        jewelleryImage(
          category.type,
          "Silver",
          i
        )

    });

  }


  /* -------------------------------------------------------
     GOLD — 50 DESIGNS
     ------------------------------------------------------- */

  for (let i = 1; i <= 50; i++) {

    products.push({

      id: `G-${categoryIndex}-${i}`,

      cat: category.name,

      catIndex: categoryIndex,

      material: "Gold",

      name:
        `${category.name} Gold Design ${String(i).padStart(2,"0")}`,

      desc:
        `Premium Gold ${category.name} — royal design for शादी, पार्टी और special occasions.`,

      price:
        goldPrices[
          (i - 1 + categoryIndex) %
          goldPrices.length
        ],

      img:
        jewelleryImage(
          category.type,
          "Gold",
          i
        )

    });

  }

});


/* =========================================================
   VARIABLES
   ========================================================= */

let activeCategory = null;

let cart =
  JSON.parse(
    localStorage.getItem("baisaCart") || "[]"
  );


const categoryGrid =
  document.getElementById("categoryGrid");

const productGrid =
  document.getElementById("productGrid");

const search =
  document.getElementById("search");


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

categoryGrid.innerHTML = categories
  .map((category, index) => {

    return `

      <div
        class="category"
        onclick="showCategory(${index})"
      >

        <div class="emoji">
          ${category.icon}
        </div>

        <h3>
          ${category.name}
        </h3>

        <p>
          ${category.desc}
        </p>

        <p>
          <b>100 Designs</b>
        </p>

        <small>
          50 Silver + 50 Gold
        </small>

      </div>

    `;

  })
  .join("");


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(list = products) {


  document.getElementById("productInfo")
    .textContent =
      `${list.length} Designs`;


  if (!list.length) {

    productGrid.innerHTML = `

      <div class="no-products">

        <h3>
          कोई Design नहीं मिला 😔
        </h3>

        <p>
          कृपया दूसरा नाम search करें।
        </p>

      </div>

    `;

    return;
  }


  productGrid.innerHTML = list
    .map(product => {

      return `

        <article
          class="product"
          onclick="openProduct('${product.id}')"
        >

          <img
            src="${product.img}"
            alt="${product.name}"
            loading="lazy"
          >


          <div class="product-body">

            <div class="product-cat">
              ${product.cat}
              •
              ${product.material}
            </div>


            <h3>
              ${product.name}
            </h3>


            <div class="product-bottom">

              <span class="price">
                ₹${product.price.toLocaleString("en-IN")}
              </span>


              <button
                class="add"
                onclick="
                  event.stopPropagation();
                  addToCart('${product.id}')
                "
              >
                Add
              </button>

            </div>

          </div>

        </article>

      `;

    })
    .join("");

}


/* =========================================================
   SHOW CATEGORY
   ========================================================= */

function showCategory(index) {


  activeCategory = index;


  const category =
    categories[index];


  document.getElementById(
    "collectionTitle"
  ).textContent =
    `${category.name} — ${category.desc}`;


  const list =
    products.filter(
      product =>
        product.catIndex === index
    );


  renderProducts(list);


  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   SHOW ALL
   ========================================================= */

function showAll() {


  activeCategory = null;


  document.getElementById(
    "collectionTitle"
  ).textContent =
    "खास Jewellery Collection";


  renderProducts(products);

}


/* =========================================================
   SEARCH
   ========================================================= */

search.addEventListener(
  "input",
  function() {


    const q =
      search.value
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


    let list =
      products.filter(product => {

        return (

          product.name
            .toLowerCase()
            .includes(q)

          ||

          product.cat
            .toLowerCase()
            .includes(q)

          ||

          product.material
            .toLowerCase()
            .includes(q)

          ||

          product.desc
            .toLowerCase()
            .includes(q)

        );

      });


    if (activeCategory !== null) {

      list =
        list.filter(
          product =>
            product.catIndex ===
            activeCategory
        );

    }


    document.getElementById(
      "collectionTitle"
    ).textContent =
      "Search Results";


    renderProducts(list);

  }
);


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

function openProduct(id) {


  const product =
    products.find(
      item => item.id === id
    );


  if (!product) return;


  document.getElementById(
    "modalImg"
  ).src =
    product.img;


  document.getElementById(
    "modalImg"
  ).alt =
    product.name;


  document.getElementById(
    "modalCat"
  ).textContent =
    `${product.cat} • ${product.material}`;


  document.getElementById(
    "modalName"
  ).textContent =
    product.name;


  document.getElementById(
    "modalDesc"
  ).textContent =
    product.desc;


  document.getElementById(
    "modalPrice"
  ).textContent =
    "₹" +
    product.price.toLocaleString("en-IN");


  document.getElementById(
    "modalAdd"
  ).onclick =
    function() {

      addToCart(product.id);

      closeModal(
        "productModal"
      );

    };


  document
    .getElementById("productModal")
    .classList.remove("hidden");

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(id) {


  const product =
    products.find(
      item => item.id === id
    );


  if (!product) return;


  const found =
    cart.find(
      item => item.id === id
    );


  if (found) {

    found.qty++;

  } else {

    cart.push({

      id: product.id,

      qty: 1

    });

  }


  saveCart();


  alert(
    `${product.name} Cart में Add हो गया 🛒`
  );

}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {


  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );


  const count =
    cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );


  document.getElementById(
    "cartCount"
  ).textContent =
    count;

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {


  const box =
    document.getElementById(
      "cartItems"
    );


  if (!cart.length) {

    box.innerHTML = `

      <p>
        Cart अभी खाली है।
        Jewellery select करके Add करें 💎
      </p>

    `;

  } else {


    box.innerHTML =
      cart.map(item => {


        const product =
          products.find(
            p => p.id === item.id
          );


        if (!product) return "";


        return `

          <div class="cart-row">

            <img
              src="${product.img}"
              alt="${product.name}"
            >


            <div>

              <h4>
                ${product.name}
              </h4>

              <p>
                ${product.material}
                •
                ₹${product.price.toLocaleString("en-IN")}
                × ${item.qty}
              </p>

            </div>


            <button
              class="remove"
              onclick="
                removeCart('${product.id}')
              "
            >
              Remove
            </button>

          </div>

        `;

      }).join("");

  }


  const total =
    cart.reduce(
      (sum, item) => {


        const product =
          products.find(
            p => p.id === item.id
          );


        return sum +
          (
            product
              ? product.price * item.qty
              : 0
          );

      },
      0
    );


  document.getElementById(
    "cartTotal"
  ).textContent =
    "₹" +
    total.toLocaleString("en-IN");


  document
    .getElementById("cartModal")
    .classList.remove("hidden");

}


/* =========================================================
   REMOVE CART
   ========================================================= */

function removeCart(id) {


  cart =
    cart.filter(
      item =>
        item.id !== id
    );


  saveCart();

  openCart();

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal(id) {


  document
    .getElementById(id)
    .classList.add("hidden");

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {


  if (!cart.length) {

    alert(
      "Cart खाली है।"
    );

    return;
  }


  alert(
    "Order / Payment system तैयार है। " +
    "UPI ID या Payment Gateway जोड़कर " +
    "real payment चालू किया जा सकता है।"
  );

}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

saveCart();

renderProducts(products);


/* =========================================================
   CLOSE MODAL OUTSIDE
   ========================================================= */

document
  .querySelectorAll(".modal")
  .forEach(modal => {


    modal.addEventListener(
      "click",
      function(event) {


        if (
          event.target === modal
        ) {

          modal.classList.add(
            "hidden"
          );

        }

      }
    );

  });
