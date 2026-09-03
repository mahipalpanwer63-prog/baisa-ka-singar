/* =========================================================
   BAISA KA SINGAR
   12 CATEGORIES × 50 SILVER + 50 GOLD
   TOTAL = 1200 PRODUCTS
   ========================================================= */


/* =========================
   CATEGORIES
========================= */

const categories = [
  ["हार / Necklace", "Royal Necklace Designs", "💎", "necklace"],
  ["Rani Haar", "Royal Bridal Collection", "👑", "rani-haar"],
  ["झुमके", "Beautiful Earrings", "💎", "earrings"],
  ["चूड़ियाँ", "Designer Bangles", "⭕", "bangles"],
  ["कंगन", "Elegant Kada & Bangles", "✨", "kangan"],
  ["अंगूठियाँ", "Beautiful Rings", "💍", "rings"],
  ["मांग टीका", "Bridal Maang Tikka", "👸", "maang-tikka"],
  ["नथ", "Traditional Nose Rings", "🌸", "nath"],
  ["पायल", "Traditional Payal", "✨", "payal"],
  ["बाजूबंद", "Royal Bajuband", "〰️", "bajuband"],
  ["माथा पट्टी", "Bridal Matha Patti", "👑", "matha-patti"],
  ["Choker", "Premium Choker Designs", "💎", "choker"]
];


/* =========================
   SILVER / GOLD PRICES
========================= */

const silverPrices = [199, 299, 399];
const goldPrices = [499, 599, 699];


/* =========================
   PRODUCT NAMES
========================= */

const productNames = {

  "necklace": [
    "Classic Necklace",
    "Royal Necklace",
    "Designer Necklace",
    "Kundan Necklace",
    "Bridal Necklace",
    "Pearl Necklace",
    "Polki Necklace",
    "Meenakari Necklace",
    "Temple Necklace",
    "Party Necklace"
  ],

  "rani-haar": [
    "Classic Rani Haar",
    "Royal Rani Haar",
    "Designer Rani Haar",
    "Kundan Rani Haar",
    "Bridal Rani Haar",
    "Pearl Rani Haar",
    "Polki Rani Haar",
    "Meenakari Rani Haar",
    "Temple Rani Haar",
    "Party Rani Haar"
  ],

  "earrings": [
    "Classic Jhumka",
    "Royal Jhumka",
    "Designer Jhumka",
    "Kundan Jhumka",
    "Bridal Jhumka",
    "Pearl Jhumka",
    "Polki Jhumka",
    "Meenakari Jhumka",
    "Temple Jhumka",
    "Party Jhumka"
  ],

  "bangles": [
    "Classic Chudi",
    "Royal Chudi",
    "Designer Chudi",
    "Kundan Chudi",
    "Bridal Chudi",
    "Pearl Chudi",
    "Polki Chudi",
    "Meenakari Chudi",
    "Temple Chudi",
    "Party Chudi"
  ],

  "kangan": [
    "Classic Kangan",
    "Royal Kangan",
    "Designer Kangan",
    "Kundan Kangan",
    "Bridal Kangan",
    "Pearl Kangan",
    "Polki Kangan",
    "Meenakari Kangan",
    "Temple Kangan",
    "Party Kangan"
  ],

  "rings": [
    "Classic Ring",
    "Royal Ring",
    "Designer Ring",
    "Kundan Ring",
    "Bridal Ring",
    "Pearl Ring",
    "Polki Ring",
    "Meenakari Ring",
    "Statement Ring",
    "Party Ring"
  ],

  "maang-tikka": [
    "Classic Maang Tikka",
    "Royal Maang Tikka",
    "Designer Maang Tikka",
    "Kundan Maang Tikka",
    "Bridal Maang Tikka",
    "Pearl Maang Tikka",
    "Polki Maang Tikka",
    "Meenakari Maang Tikka",
    "Temple Maang Tikka",
    "Party Maang Tikka"
  ],

  "nath": [
    "Classic Nath",
    "Royal Nath",
    "Designer Nath",
    "Kundan Nath",
    "Bridal Nath",
    "Pearl Nath",
    "Polki Nath",
    "Meenakari Nath",
    "Traditional Nath",
    "Party Nath"
  ],

  "payal": [
    "Classic Payal",
    "Royal Payal",
    "Designer Payal",
    "Kundan Payal",
    "Bridal Payal",
    "Pearl Payal",
    "Polki Payal",
    "Meenakari Payal",
    "Traditional Payal",
    "Party Payal"
  ],

  "bajuband": [
    "Classic Bajuband",
    "Royal Bajuband",
    "Designer Bajuband",
    "Kundan Bajuband",
    "Bridal Bajuband",
    "Pearl Bajuband",
    "Polki Bajuband",
    "Meenakari Bajuband",
    "Traditional Bajuband",
    "Party Bajuband"
  ],

  "matha-patti": [
    "Classic Matha Patti",
    "Royal Matha Patti",
    "Designer Matha Patti",
    "Kundan Matha Patti",
    "Bridal Matha Patti",
    "Pearl Matha Patti",
    "Polki Matha Patti",
    "Meenakari Matha Patti",
    "Temple Matha Patti",
    "Party Matha Patti"
  ],

  "choker": [
    "Classic Choker",
    "Royal Choker",
    "Designer Choker",
    "Kundan Choker",
    "Bridal Choker",
    "Pearl Choker",
    "Polki Choker",
    "Meenakari Choker",
    "Temple Choker",
    "Party Choker"
  ]
};


/* =========================
   IMAGE KEYWORDS
========================= */

const imageKeywords = {

  "necklace": "indian,jewellery,necklace",
  "rani-haar": "indian,jewellery,bridal,necklace",
  "earrings": "indian,jewellery,earrings",
  "bangles": "indian,jewellery,bangles",
  "kangan": "indian,jewellery,bangles",
  "rings": "indian,jewellery,ring",
  "maang-tikka": "indian,jewellery,maang,tikka",
  "nath": "indian,jewellery,nose,ring",
  "payal": "indian,jewellery,anklet,payal",
  "bajuband": "indian,jewellery,bajuband",
  "matha-patti": "indian,jewellery,matha,patti",
  "choker": "indian,jewellery,choker"

};


/* =========================
   PRODUCTS
========================= */

let products = [];
let productId = 1;


categories.forEach((category, categoryIndex) => {

  const categoryName = category[0];
  const categoryDesc = category[1];
  const categoryEmoji = category[2];
  const categoryKey = category[3];

  const names = productNames[categoryKey];

  /* -------------------------
     50 SILVER
  ------------------------- */

  for (let i = 1; i <= 50; i++) {

    const baseName =
      names[(i - 1) % names.length];

    const imageLock =
      10000 +
      (categoryIndex * 100) +
      i;

    products.push({

      id: productId++,

      cat: categoryName,

      catIndex: categoryIndex,

      key: categoryKey,

      metal: "Silver",

      metalKey: "silver",

      name:
        baseName +
        " Silver " +
        String(i).padStart(2, "0"),

      desc:
        "Premium Silver " +
        categoryName +
        " — elegant design for शादी, पार्टी और daily wear.",

      price:
        silverPrices[
          (i - 1) % silverPrices.length
        ],

      img:
        "https://loremflickr.com/900/900/" +
        imageKeywords[categoryKey] +
        "?lock=" +
        imageLock

    });

  }


  /* -------------------------
     50 GOLD
  ------------------------- */

  for (let i = 1; i <= 50; i++) {

    const baseName =
      names[(i - 1) % names.length];

    const imageLock =
      20000 +
      (categoryIndex * 100) +
      i;

    products.push({

      id: productId++,

      cat: categoryName,

      catIndex: categoryIndex,

      key: categoryKey,

      metal: "Gold",

      metalKey: "gold",

      name:
        baseName +
        " Gold " +
        String(i).padStart(2, "0"),

      desc:
        "Premium Gold " +
        categoryName +
        " — royal design for शादी, पार्टी और special occasions.",

      price:
        goldPrices[
          (i - 1) % goldPrices.length
        ],

      img:
        "https://loremflickr.com/900/900/" +
        imageKeywords[categoryKey] +
        "?lock=" +
        imageLock

    });

  }

});


/* =========================
   VARIABLES
========================= */

let activeCategory = null;
let activeMetal = null;

let cart =
  JSON.parse(
    localStorage.getItem("baisaCart") || "[]"
  );


/* =========================
   ELEMENTS
========================= */

const categoryGrid =
  document.getElementById("categoryGrid");

const productGrid =
  document.getElementById("productGrid");

const search =
  document.getElementById("search");


/* =========================
   CATEGORY CARDS
========================= */

categoryGrid.innerHTML =
  categories.map((category, index) => {

    return `

      <div
        class="category"
        onclick="showCategory(${index})"
      >

        <div class="emoji">
          ${category[2]}
        </div>

        <h3>
          ${category[0]}
        </h3>

        <p>
          ${category[1]}
        </p>

        <p>
          <b>100 Designs</b>
        </p>

        <small>
          50 Silver + 50 Gold
        </small>

      </div>

    `;

  }).join("");


/* =========================
   PRODUCT FILTER
========================= */

function getFilteredProducts() {

  let list = products;


  /* CATEGORY */

  if (activeCategory !== null) {

    list =
      list.filter(
        p =>
          p.catIndex ===
          activeCategory
      );

  }


  /* SILVER / GOLD */

  if (activeMetal !== null) {

    list =
      list.filter(
        p =>
          p.metalKey ===
          activeMetal
      );

  }


  return list;

}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(list = products) {

  document.getElementById(
    "productInfo"
  ).textContent =
    `${list.length} Designs`;


  if (!list.length) {

    productGrid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:60px;
      ">

        <h2>
          कोई Design नहीं मिली 😔
        </h2>

      </div>

    `;

    return;

  }


  productGrid.innerHTML =
    list.map(product => {

      const metalClass =
        product.metalKey === "gold"
          ? "Gold"
          : "Silver";


      return `

        <article
          class="product"
          onclick="openProduct(${product.id})"
        >

          <img
            src="${product.img}"
            alt="${product.name}"
            loading="lazy"
          >

          <div class="product-body">

            <div class="product-cat">
              ${product.cat}
              • ${metalClass}
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
                  addToCart(${product.id});
                "
              >
                Add
              </button>

            </div>

          </div>

        </article>

      `;

    }).join("");

}


/* =========================
   SHOW CATEGORY
========================= */

function showCategory(index) {

  activeCategory = index;

  activeMetal = null;

  const category =
    categories[index];


  document.getElementById(
    "collectionTitle"
  ).textContent =
    `${category[0]} — 100 Designs`;


  renderProducts(
    getFilteredProducts()
  );


  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================
   SILVER ONLY
========================= */

function showSilver() {

  activeMetal = "silver";

  renderProducts(
    getFilteredProducts()
  );

}


/* =========================
   GOLD ONLY
========================= */

function showGold() {

  activeMetal = "gold";

  renderProducts(
    getFilteredProducts()
  );

}


/* =========================
   SHOW ALL
========================= */

function showAll() {

  activeCategory = null;
  activeMetal = null;

  document.getElementById(
    "collectionTitle"
  ).textContent =
    "खास Jewellery Collection";


  renderProducts(products);

}


/* =========================
   SEARCH
========================= */

search.addEventListener(
  "input",
  function () {

    const q =
      search.value
        .trim()
        .toLowerCase();


    if (!q) {

      renderProducts(
        getFilteredProducts()
      );

      return;

    }


    const source =
      getFilteredProducts();


    const result =
      source.filter(
        p =>
          (
            p.name +
            " " +
            p.cat +
            " " +
            p.metal +
            " " +
            p.desc
          )
          .toLowerCase()
          .includes(q)
      );


    document.getElementById(
      "collectionTitle"
    ).textContent =
      "Search Results";


    renderProducts(result);

  }
);


/* =========================
   OPEN PRODUCT
========================= */

function openProduct(id) {

  const product =
    products.find(
      p =>
        p.id === id
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
    product.cat +
    " • " +
    product.metal;


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
    function () {

      addToCart(product.id);

      closeModal("productModal");

    };


  document
    .getElementById("productModal")
    .classList.remove("hidden");

}


/* =========================
   ADD CART
========================= */

function addToCart(id) {

  const product =
    products.find(
      p =>
        p.id === id
    );


  if (!product) return;


  const found =
    cart.find(
      item =>
        item.id === id
    );


  if (found) {

    found.qty++;

  } else {

    cart.push({

      id: id,

      qty: 1

    });

  }


  saveCart();

}


/* =========================
   SAVE CART
========================= */

function saveCart() {

  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );


  updateCartCount();

}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

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


/* =========================
   OPEN CART
========================= */

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
            p =>
              p.id === item.id
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
                ₹${product.price.toLocaleString("en-IN")}
                × ${item.qty}
              </p>

            </div>

            <button
              class="remove"
              onclick="
                removeCart(${product.id})
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
            p =>
              p.id === item.id
          );

        if (!product) {
          return sum;
        }

        return (
          sum +
          product.price *
          item.qty
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


/* =========================
   REMOVE CART
========================= */

function removeCart(id) {

  cart =
    cart.filter(
      item =>
        item.id !== id
    );


  saveCart();

  openCart();

}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(id) {

  document
    .getElementById(id)
    .classList.add("hidden");

}


/* =========================
   CHECKOUT
========================= */

function checkout() {

  if (!cart.length) {

    alert(
      "Cart खाली है।"
    );

    return;

  }


  alert(
    "आपका Cart तैयार है ❤️"
  );

}


/* =========================
   START
========================= */

updateCartCount();

showAll();
