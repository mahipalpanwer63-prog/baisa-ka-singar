const categories = [
  ["हार / Necklace", "Royal Necklace Designs", "💎", "necklace"],
  ["Rani Haar", "Royal Bridal Collection", "👑", "rani-haar"],
  ["झुमके", "Beautiful Earrings", "💎", "earrings"],
  ["चूड़ियाँ", "Designer Bangles", "⭕", "bangles"],
  ["कंगन", "Elegant Kada & Bangles", "✨", "bracelet"],
  ["अंगूठियाँ", "Beautiful Rings", "💍", "rings"],
  ["मांग टीका", "Bridal Maang Tikka", "👸", "maang-tikka"],
  ["नथ", "Traditional Nose Rings", "🌸", "nose-ring"],
  ["पायल", "Traditional Payal", "✨", "anklet"],
  ["बाजूबंद", "Royal Bajuband", "〰️", "armlet"],
  ["माथा पट्टी", "Bridal Matha Patti", "👑", "matha-patti"],
  ["Choker", "Premium Choker Designs", "💎", "choker"]
];

const priceBase = [
  499, 699, 899, 1099, 1299,
  1499, 1699, 1999, 2299, 2499
];

let products = [];

categories.forEach((c, ci) => {

  for (let i = 1; i <= 50; i++) {

    const id = (ci * 50) + i;

    products.push({
      id: id,

      cat: c[0],

      catIndex: ci,

      name: `${c[0]} Design ${String(i).padStart(2, "0")}`,

      desc:
        `Premium ${c[0]} design — शादी, पार्टी और special occasions के लिए elegant collection.`,

      price:
        priceBase[(i + ci) % priceBase.length] + (ci * 50),

      /*
       * हर category की अपनी image होगी।
       * lock बदलने से अलग-अलग image मिलेगी।
       */
      img:
        `https://loremflickr.com/900/900/${c[3]},jewelry?lock=${id}`
    });

  }

});


let activeCategory = null;

let cart =
  JSON.parse(localStorage.getItem("baisaCart") || "[]");


/* =========================
   CATEGORY SECTION
========================= */

const categoryGrid =
  document.getElementById("categoryGrid");

const productGrid =
  document.getElementById("productGrid");

const search =
  document.getElementById("search");


categoryGrid.innerHTML = categories.map((c, i) => `
  <div class="category" onclick="showCategory(${i})">

    <div class="emoji">${c[2]}</div>

    <h3>${c[0]}</h3>

    <p>${c[1]}</p>

    <p><b>50 Designs</b></p>

  </div>
`).join("");


/* =========================
   PRODUCTS
========================= */

function renderProducts(list = products) {

  document.getElementById("productInfo").textContent =
    `${list.length} Designs`;

  productGrid.innerHTML = list.map(p => `

    <article
      class="product"
      onclick="openProduct(${p.id})"
    >

      <img
        src="${p.img}"
        alt="${p.name}"
        loading="lazy"
      >

      <div class="product-body">

        <div class="product-cat">
          ${p.cat}
        </div>

        <h3>
          ${p.name}
        </h3>

        <div class="product-bottom">

          <span class="price">
            ₹${p.price.toLocaleString("en-IN")}
          </span>

          <button
            class="add"
            onclick="event.stopPropagation();addToCart(${p.id})"
          >
            Add
          </button>

        </div>

      </div>

    </article>

  `).join("");
}


/* =========================
   SHOW CATEGORY
========================= */

function showCategory(i) {

  activeCategory = i;

  const c = categories[i];

  document.getElementById("collectionTitle").textContent =
    `${c[0]} — ${c[1]}`;

  const categoryProducts =
    products.filter(p => p.catIndex === i);

  renderProducts(categoryProducts);

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

  document.getElementById("collectionTitle").textContent =
    "खास Jewellery Collection";

  renderProducts(products);
}


/* =========================
   SEARCH
========================= */

search.addEventListener("input", () => {

  const q =
    search.value.trim().toLowerCase();

  if (!q) {

    activeCategory === null
      ? showAll()
      : showCategory(activeCategory);

    return;
  }

  const list = products.filter(p =>
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

  document.getElementById("collectionTitle").textContent =
    "Search Results";

  renderProducts(list);

});


/* =========================
   PRODUCT POPUP
========================= */

function openProduct(id) {

  const p =
    products.find(x => x.id === id);

  if (!p) return;

  document.getElementById("modalImg").src =
    p.img;

  document.getElementById("modalImg").alt =
    p.name;

  document.getElementById("modalCat").textContent =
    p.cat;

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

  document
    .getElementById("productModal")
    .classList
    .remove("hidden");
}


/* =========================
   CART
========================= */

function addToCart(id) {

  const p =
    products.find(x => x.id === id);

  if (!p) return;

  const found =
    cart.find(x => x.id === id);

  if (found) {

    found.qty++;

  } else {

    cart.push({
      id: p.id,
      qty: 1
    });

  }

  saveCart();
}


function saveCart() {

  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );

  document.getElementById("cartCount").textContent =
    cart.reduce(
      (total, item) => total + item.qty,
      0
    );
}


/* =========================
   OPEN CART
========================= */

function openCart() {

  const box =
    document.getElementById("cartItems");

  if (!cart.length) {

    box.innerHTML =
      "<p>Cart अभी खाली है। Jewellery select करके Add करें 💎</p>";

  } else {

    box.innerHTML = cart.map(item => {

      const p =
        products.find(x => x.id === item.id);

      return `

        <div class="cart-row">

          <img
            src="${p.img}"
            alt="${p.name}"
          >

          <div>

            <h4>
              ${p.name}
            </h4>

            <p>
              ₹${p.price.toLocaleString("en-IN")}
              × ${item.qty}
            </p>

          </div>

          <button
            class="remove"
            onclick="removeCart(${p.id})"
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

        const p =
          products.find(x => x.id === item.id);

        return sum + (p.price * item.qty);

      },
      0
    );


  document.getElementById("cartTotal").textContent =
    "₹" + total.toLocaleString("en-IN");


  document
    .getElementById("cartModal")
    .classList
    .remove("hidden");
}


/* =========================
   REMOVE CART
========================= */

function removeCart(id) {

  cart =
    cart.filter(x => x.id !== id);

  saveCart();

  openCart();
}


/* =========================
   CLOSE POPUP
========================= */

function closeModal(id) {

  document
    .getElementById(id)
    .classList
    .add("hidden");
}


/* =========================
   CHECKOUT
========================= */

function checkout() {

  if (!cart.length) {

    alert("Cart खाली है।");

    return;
  }

  alert(
    "Order/Payment integration के लिए UPI ID या payment gateway जोड़ना होगा। अभी आपका cart तैयार है।"
  );
}


/* =========================
   INITIAL LOAD
========================= */

renderProducts();

saveCart();
