/* =========================================================
   BAISA KA SINGAR
   12 CATEGORIES × 50 PRODUCTS
   ========================================================= */


/* =========================
   CATEGORIES
========================= */

const categories = [

  {
    name: "हार / Necklace",
    desc: "Royal Necklace Designs",
    emoji: "💎",
    key: "necklace"
  },

  {
    name: "Rani Haar",
    desc: "Royal Bridal Collection",
    emoji: "👑",
    key: "rani-haar"
  },

  {
    name: "झुमके",
    desc: "Beautiful Earrings",
    emoji: "💎",
    key: "earrings"
  },

  {
    name: "चूड़ियाँ",
    desc: "Designer Bangles",
    emoji: "⭕",
    key: "bangles"
  },

  {
    name: "कंगन",
    desc: "Elegant Kada & Bangles",
    emoji: "✨",
    key: "kangan"
  },

  {
    name: "अंगूठियाँ",
    desc: "Beautiful Rings",
    emoji: "💍",
    key: "rings"
  },

  {
    name: "मांग टीका",
    desc: "Bridal Maang Tikka",
    emoji: "👸",
    key: "maang-tikka"
  },

  {
    name: "नथ",
    desc: "Traditional Nose Rings",
    emoji: "🌸",
    key: "nath"
  },

  {
    name: "पायल",
    desc: "Traditional Payal",
    emoji: "✨",
    key: "payal"
  },

  {
    name: "बाजूबंद",
    desc: "Royal Bajuband",
    emoji: "〰️",
    key: "bajuband"
  },

  {
    name: "माथा पट्टी",
    desc: "Bridal Matha Patti",
    emoji: "👑",
    key: "matha-patti"
  },

  {
    name: "Choker",
    desc: "Premium Choker Designs",
    emoji: "💎",
    key: "choker"
  }

];


/* =========================
   PRODUCT DATA
========================= */

const productTypes = {

  "necklace": [
    "Royal Necklace",
    "Kundan Necklace",
    "Bridal Necklace",
    "Diamond Necklace",
    "Pearl Necklace",
    "Polki Necklace",
    "Meenakari Necklace",
    "Temple Necklace",
    "Designer Necklace",
    "Wedding Necklace"
  ],

  "rani-haar": [
    "Royal Rani Haar",
    "Bridal Rani Haar",
    "Kundan Rani Haar",
    "Pearl Rani Haar",
    "Polki Rani Haar",
    "Temple Rani Haar",
    "Meenakari Rani Haar",
    "Diamond Rani Haar",
    "Designer Rani Haar",
    "Wedding Rani Haar"
  ],

  "earrings": [
    "Royal Jhumka",
    "Kundan Jhumka",
    "Bridal Jhumka",
    "Pearl Jhumka",
    "Diamond Jhumka",
    "Meenakari Jhumka",
    "Temple Jhumka",
    "Long Jhumka",
    "Designer Jhumka",
    "Wedding Jhumka"
  ],

  "bangles": [
    "Royal Bangles",
    "Kundan Bangles",
    "Bridal Bangles",
    "Diamond Bangles",
    "Pearl Bangles",
    "Meenakari Bangles",
    "Temple Bangles",
    "Designer Bangles",
    "Wedding Bangles",
    "Traditional Bangles"
  ],

  "kangan": [
    "Royal Kangan",
    "Kundan Kangan",
    "Bridal Kangan",
    "Diamond Kangan",
    "Pearl Kangan",
    "Meenakari Kangan",
    "Temple Kangan",
    "Designer Kangan",
    "Wedding Kangan",
    "Traditional Kangan"
  ],

  "rings": [
    "Royal Ring",
    "Kundan Ring",
    "Bridal Ring",
    "Diamond Ring",
    "Pearl Ring",
    "Polki Ring",
    "Meenakari Ring",
    "Designer Ring",
    "Wedding Ring",
    "Statement Ring"
  ],

  "maang-tikka": [
    "Royal Maang Tikka",
    "Kundan Maang Tikka",
    "Bridal Maang Tikka",
    "Diamond Maang Tikka",
    "Pearl Maang Tikka",
    "Polki Maang Tikka",
    "Meenakari Maang Tikka",
    "Designer Maang Tikka",
    "Wedding Maang Tikka",
    "Traditional Maang Tikka"
  ],

  "nath": [
    "Royal Nath",
    "Kundan Nath",
    "Bridal Nath",
    "Diamond Nath",
    "Pearl Nath",
    "Polki Nath",
    "Meenakari Nath",
    "Designer Nath",
    "Wedding Nath",
    "Traditional Nath"
  ],

  "payal": [
    "Royal Payal",
    "Kundan Payal",
    "Bridal Payal",
    "Diamond Payal",
    "Pearl Payal",
    "Meenakari Payal",
    "Designer Payal",
    "Wedding Payal",
    "Traditional Payal",
    "Fancy Payal"
  ],

  "bajuband": [
    "Royal Bajuband",
    "Kundan Bajuband",
    "Bridal Bajuband",
    "Diamond Bajuband",
    "Pearl Bajuband",
    "Polki Bajuband",
    "Meenakari Bajuband",
    "Designer Bajuband",
    "Wedding Bajuband",
    "Traditional Bajuband"
  ],

  "matha-patti": [
    "Royal Matha Patti",
    "Kundan Matha Patti",
    "Bridal Matha Patti",
    "Diamond Matha Patti",
    "Pearl Matha Patti",
    "Polki Matha Patti",
    "Meenakari Matha Patti",
    "Designer Matha Patti",
    "Wedding Matha Patti",
    "Traditional Matha Patti"
  ],

  "choker": [
    "Royal Choker",
    "Kundan Choker",
    "Bridal Choker",
    "Diamond Choker",
    "Pearl Choker",
    "Polki Choker",
    "Meenakari Choker",
    "Temple Choker",
    "Designer Choker",
    "Wedding Choker"
  ]

};


/* =========================
   PRICE
========================= */

const priceBase = [
  499,
  699,
  899,
  1099,
  1299,
  1499,
  1699,
  1999,
  2299,
  2499
];


/* =========================
   IMAGE KEYWORDS
========================= */

const imageKeywords = {

  "necklace":
    "indian,jewellery,necklace",

  "rani-haar":
    "indian,jewellery,bridal,necklace",

  "earrings":
    "indian,jewellery,earrings",

  "bangles":
    "indian,jewellery,bangles",

  "kangan":
    "indian,jewellery,bangles",

  "rings":
    "indian,jewellery,ring",

  "maang-tikka":
    "indian,jewellery,maang,tikka",

  "nath":
    "indian,jewellery,nose,ring",

  "payal":
    "indian,jewellery,anklet,payal",

  "bajuband":
    "indian,jewellery,bajuband",

  "matha-patti":
    "indian,jewellery,matha,patti",

  "choker":
    "indian,jewellery,choker"

};


/* =========================
   CREATE 50 UNIQUE PRODUCTS
   ========================= */

let products = [];

let productId = 1;

categories.forEach((category, categoryIndex) => {

  const names = productTypes[category.key];

  for (let i = 1; i <= 50; i++) {

    const typeName =
      names[(i - 1) % names.length];

    const variation =
      Math.floor((i - 1) / names.length) + 1;

    const price =
      priceBase[
        (i + categoryIndex) %
        priceBase.length
      ] +
      (categoryIndex * 50) +
      (variation * 25);


    /*
      IMPORTANT:

      हर product का अलग lock है।
      इसलिए same category में भी
      image URL अलग रहेगा।
    */

    const imageQuery =
      imageKeywords[category.key];

    const imageUrl =
      "https://loremflickr.com/900/900/" +
      imageQuery +
      "?lock=" +
      (1000 + productId);


    products.push({

      id: productId,

      cat: category.name,

      catIndex: categoryIndex,

      key: category.key,

      name:
        typeName +
        " Design " +
        String(i).padStart(2, "0"),

      desc:
        "Premium " +
        category.name +
        " design — शादी, पार्टी और special occasions के लिए elegant collection.",

      price: price,

      img: imageUrl

    });

    productId++;

  }

});


/* =========================
   VARIABLES
========================= */

let activeCategory = null;

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
          ${category.emoji}
        </div>

        <h3>
          ${category.name}
        </h3>

        <p>
          ${category.desc}
        </p>

        <p>
          <b>50 Designs</b>
        </p>

      </div>

    `;

  }).join("");


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

        <p>
          दूसरी Jewellery search करें।
        </p>

      </div>

    `;

    return;
  }


  productGrid.innerHTML =
    list.map(product => {

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

  const category =
    categories[index];


  document.getElementById(
    "collectionTitle"
  ).textContent =
    `${category.name} — ${category.desc}`;


  /*
    IMPORTANT:

    सिर्फ उसी category के
    products filter होंगे।
  */

  const filteredProducts =
    products.filter(
      product =>
        product.catIndex === index
    );


  renderProducts(filteredProducts);


  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================
   SHOW ALL
========================= */

function showAll() {

  activeCategory = null;

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

      if (activeCategory === null) {
        showAll();
      } else {
        showCategory(activeCategory);
      }

      return;

    }


    /*
      Search करते समय भी
      category mix नहीं होगी।
    */

    let sourceProducts = products;


    if (activeCategory !== null) {

      sourceProducts =
        products.filter(
          p =>
            p.catIndex ===
            activeCategory
        );

    }


    const result =
      sourceProducts.filter(
        p =>
          (
            p.name +
            " " +
            p.cat +
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
      p => p.id === id
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
    product.cat;


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
   CART
========================= */

function addToCart(id) {

  const product =
    products.find(
      p => p.id === id
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

      id: product.id,

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
              onclick="removeCart(${product.id})"
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

        return sum +
          (product
            ? product.price *
              item.qty
            : 0);

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
    "Order / Payment system अगला step है। आपका Cart तैयार है ❤️"
  );

}


/* =========================
   START WEBSITE
========================= */

updateCartCount();

showAll();
