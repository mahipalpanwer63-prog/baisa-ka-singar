/* =========================================================
   BAISA KA SINGAR — JEWELLERY STORE
   100 DESIGNS PER CATEGORY
   50 SILVER + 50 GOLD
   ========================================================= */

const categories = [
  {
    name: "हार / Necklace",
    desc: "Royal Necklace Designs",
    icon: "💎",
    keyword: "necklace"
  },
  {
    name: "Rani Haar",
    desc: "Royal Bridal Collection",
    icon: "👑",
    keyword: "rani haar necklace"
  },
  {
    name: "झुमके",
    desc: "Beautiful Earrings",
    icon: "💎",
    keyword: "earrings"
  },
  {
    name: "चूड़ियाँ",
    desc: "Designer Bangles",
    icon: "⭕",
    keyword: "bangles"
  },
  {
    name: "कंगन",
    desc: "Elegant Kada & Bangles",
    icon: "✨",
    keyword: "kada bracelet"
  },
  {
    name: "अंगूठियाँ",
    desc: "Beautiful Rings",
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
    keyword: "nose ring"
  },
  {
    name: "पायल",
    desc: "Traditional Payal",
    icon: "✨",
    keyword: "anklet payal"
  },
  {
    name: "बाजूबंद",
    desc: "Royal Bajuband",
    icon: "〰️",
    keyword: "armlet bajuband"
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
    keyword: "choker necklace"
  }
];


/* =========================================================
   PRICE SYSTEM
   ========================================================= */

const silverPrices = [199, 299, 399];
const goldPrices = [499, 599, 699];


/* =========================================================
   PRODUCT LIST
   100 PRODUCTS PER CATEGORY
   50 SILVER + 50 GOLD
   ========================================================= */

let products = [];

categories.forEach((category, categoryIndex) => {

  /* -------------------------
     50 SILVER DESIGNS
     ------------------------- */

  for (let i = 1; i <= 50; i++) {

    const designNumber = String(i).padStart(2, "0");

    products.push({
      id: `S-${categoryIndex}-${i}`,
      cat: category.name,
      catIndex: categoryIndex,
      material: "Silver",
      name: `${category.name} Silver Design ${designNumber}`,

      desc:
        `Premium Silver ${category.name} design — शादी, पार्टी और special occasions के लिए।`,

      price:
        silverPrices[(i - 1 + categoryIndex) % silverPrices.length],

      img:
        `https://loremflickr.com/900/1100/${encodeURIComponent(
          category.keyword
        )},jewelry?lock=${categoryIndex * 100 + i}`
    });

  }


  /* -------------------------
     50 GOLD DESIGNS
     ------------------------- */

  for (let i = 1; i <= 50; i++) {

    const designNumber = String(i).padStart(2, "0");

    products.push({
      id: `G-${categoryIndex}-${i}`,
      cat: category.name,
      catIndex: categoryIndex,
      material: "Gold",
      name: `${category.name} Gold Design ${designNumber}`,

      desc:
        `Premium Gold ${category.name} design — शादी, पार्टी और special occasions के लिए royal collection.`,

      price:
        goldPrices[(i - 1 + categoryIndex) % goldPrices.length],

      img:
        `https://loremflickr.com/900/1100/${encodeURIComponent(
          category.keyword
        )},gold,jewelry?lock=${1000 + categoryIndex * 100 + i}`
    });

  }

});


/* =========================================================
   VARIABLES
   ========================================================= */

let activeCategory = null;

let cart =
  JSON.parse(localStorage.getItem("baisaCart") || "[]");

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
      <div class="category" onclick="showCategory(${index})">

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

  document.getElementById("productInfo").textContent =
    `${list.length} Designs`;

  if (!list.length) {

    productGrid.innerHTML = `
      <div class="no-products">
        <h3>कोई Design नहीं मिला 😔</h3>
        <p>कृपया दूसरा नाम search करें।</p>
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
            onerror="this.src='https://placehold.co/900x1100?text=Jewellery'"
          >

          <div class="product-body">

            <div class="product-cat">
              ${product.cat} • ${product.material}
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
                onclick="event.stopPropagation(); addToCart('${product.id}')"
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

  const category = categories[index];

  document.getElementById("collectionTitle").textContent =
    `${category.name} — ${category.desc}`;

  const categoryProducts =
    products.filter(
      product => product.catIndex === index
    );

  renderProducts(categoryProducts);

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

  document.getElementById("collectionTitle").textContent =
    "खास Jewellery Collection";

  renderProducts(products);
}


/* =========================================================
   SEARCH
   ========================================================= */

search.addEventListener("input", () => {

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


  let list = products.filter(product => {

    return (
      product.name.toLowerCase().includes(q) ||
      product.cat.toLowerCase().includes(q) ||
      product.material.toLowerCase().includes(q) ||
      product.desc.toLowerCase().includes(q)
    );

  });


  /* अगर category selected है,
     तो search उसी category में होगा */

  if (activeCategory !== null) {

    list = list.filter(
      product =>
        product.catIndex === activeCategory
    );

  }


  document.getElementById("collectionTitle").textContent =
    "Search Results";

  renderProducts(list);

});


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

function openProduct(id) {

  const product =
    products.find(
      item => item.id === id
    );

  if (!product) return;


  document.getElementById("modalImg").src =
    product.img;

  document.getElementById("modalImg").alt =
    product.name;

  document.getElementById("modalCat").textContent =
    `${product.cat} • ${product.material}`;

  document.getElementById("modalName").textContent =
    product.name;

  document.getElementById("modalDesc").textContent =
    product.desc;

  document.getElementById("modalPrice").textContent =
    "₹" +
    product.price.toLocaleString("en-IN");


  document.getElementById("modalAdd").onclick =
    () => {

      addToCart(product.id);

      closeModal("productModal");

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

    box.innerHTML = cart
      .map(item => {

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
                • ₹${product.price.toLocaleString("en-IN")}
                × ${item.qty}
              </p>

            </div>

            <button
              class="remove"
              onclick="removeCart('${product.id}')"
            >
              Remove
            </button>

          </div>
        `;

      })
      .join("");
  }


  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            p => p.id === item.id
          );

        return sum +
          (product
            ? product.price * item.qty
            : 0);

      },
      0
    );


  document.getElementById("cartTotal")
    .textContent =
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
      item => item.id !== id
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

    alert("Cart खाली है।");

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
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

document.querySelectorAll(".modal")
  .forEach(modal => {

    modal.addEventListener(
      "click",
      event => {

        if (event.target === modal) {

          modal.classList.add("hidden");

        }

      }
    );

  });
