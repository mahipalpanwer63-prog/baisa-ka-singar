/* =========================================
   BAISA KA SINGAR
   ========================================= */


/* WHATSAPP NUMBER */

const WHATSAPP_NUMBER = "917568496499";


/* =========================================
   CATEGORIES
   ========================================= */

const categories = [

  {
    name: "हार / Necklace",
    icon: "📿",
    desc: "Royal Necklace Designs"
  },

  {
    name: "कान की बालियाँ",
    icon: "💎",
    desc: "Beautiful Earrings"
  },

  {
    name: "अंगूठियाँ",
    icon: "💍",
    desc: "Beautiful Rings"
  },

  {
    name: "मांग टीका",
    icon: "👑",
    desc: "Bridal Maang Tikka"
  },

  {
    name: "नथ",
    icon: "🌸",
    desc: "Traditional Nose Rings"
  },

  {
    name: "पायल",
    icon: "✨",
    desc: "Traditional Payal"
  },

  {
    name: "बाजूबंद",
    icon: "〰️",
    desc: "Royal Bajuband"
  },

  {
    name: "माथा पट्टी",
    icon: "👑",
    desc: "Bridal Matha Patti"
  },

  {
    name: "Choker",
    icon: "💎",
    desc: "Premium Choker Designs"
  }

];


/* =========================================
   PRODUCTS
   ========================================= */

let products = [];


/* SILVER - 50 PRODUCTS */

for (let i = 1; i <= 50; i++) {

  const prices = [199, 299, 399];

  const price =
    prices[(i - 1) % prices.length];

  const category =
    categories[(i - 1) % categories.length];

  products.push({

    id: "S" + i,

    name:
      category.name +
      " Silver Design " +
      String(i).padStart(2, "0"),

    category:
      category.name,

    metal: "Silver",

    price: price,

    icon: category.icon,

    desc:
      "Beautiful premium silver look artificial jewellery design."

  });

}


/* GOLD - 50 PRODUCTS */

for (let i = 1; i <= 50; i++) {

  const prices = [499, 599, 699];

  const price =
    prices[(i - 1) % prices.length];

  const category =
    categories[(i - 1) % categories.length];

  products.push({

    id: "G" + i,

    name:
      category.name +
      " Gold Design " +
      String(i).padStart(2, "0"),

    category:
      category.name,

    metal: "Gold",

    price: price,

    icon: category.icon,

    desc:
      "Elegant premium gold look artificial jewellery design."

  });

}


/* =========================================
   CART
   ========================================= */

let cart =
  JSON.parse(
    localStorage.getItem("baisaCart") || "[]"
  );


/* =========================================
   DOM
   ========================================= */

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


/* =========================================
   CATEGORY CARDS
   ========================================= */

function renderCategories() {

  categoryGrid.innerHTML =
    categories.map((category, index) => {

      return `

        <div
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

        </div>

      `;

    }).join("");

}


/* =========================================
   RENDER PRODUCTS
   ========================================= */

function renderProducts(list) {

  productInfo.innerText =
    `${list.length} Designs`;

  productGrid.innerHTML =
    list.map(product => {

      return `

        <div class="product-card">

          <div
            class="product-image ${product.metal.toLowerCase()}"
            onclick="openProduct('${product.id}')"
          >

            <div class="jewellery-shape">
              ${product.icon}
            </div>

          </div>


          <div class="product-body">

            <div class="product-category">
              ${product.category} • ${product.metal}
            </div>

            <div class="product-name">
              ${product.name}
            </div>


            <div class="product-bottom">

              <span class="price">
                ₹${product.price}
              </span>

              <button
                class="add-btn"
                onclick="addToCart('${product.id}')"
              >
                Add
              </button>

            </div>

          </div>

        </div>

      `;

    }).join("");

}


/* =========================================
   SHOW ALL
   ========================================= */

function showAll() {

  collectionTitle.innerText =
    "खास Jewellery Collection";

  renderProducts(products);

}


/* =========================================
   SHOW SILVER
   ========================================= */

function showSilver() {

  const list =
    products.filter(
      p => p.metal === "Silver"
    );

  collectionTitle.innerText =
    "Silver Jewellery — 50 Designs";

  renderProducts(list);

  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================
   SHOW GOLD
   ========================================= */

function showGold() {

  const list =
    products.filter(
      p => p.metal === "Gold"
    );

  collectionTitle.innerText =
    "Gold Jewellery — 50 Designs";

  renderProducts(list);

  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================
   SHOW CATEGORY
   ========================================= */

function showCategory(index) {

  const category =
    categories[index];

  const list =
    products.filter(
      p => p.category === category.name
    );

  collectionTitle.innerText =
    `${category.name} — ${list.length} Designs`;

  renderProducts(list);

  document
    .getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================
   OPEN PRODUCT
   ========================================= */

function openProduct(id) {

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) return;


  document.getElementById("modalImage")
    .innerHTML = `
      <div class="jewellery-shape">
        ${product.icon}
      </div>
    `;


  document.getElementById("modalCat")
    .innerText =
      `${product.category} • ${product.metal}`;


  document.getElementById("modalName")
    .innerText =
      product.name;


  document.getElementById("modalDesc")
    .innerText =
      product.desc;


  document.getElementById("modalPrice")
    .innerText =
      `₹${product.price}`;


  document.getElementById("modalAdd")
    .onclick = function () {

      addToCart(product.id);

      closeModal("productModal");

    };


  document
    .getElementById("productModal")
    .classList.remove("hidden");

}


/* =========================================
   ADD CART
   ========================================= */

function addToCart(id) {

  const existing =
    cart.find(
      item => item.id === id
    );


  if (existing) {

    existing.qty++;

  } else {

    cart.push({

      id: id,

      qty: 1

    });

  }


  saveCart();

  updateCartCount();

  alert("🛒 Product Cart में add हो गया।");

}


/* =========================================
   SAVE CART
   ========================================= */

function saveCart() {

  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );

}


/* =========================================
   CART COUNT
   ========================================= */

function updateCartCount() {

  const count =
    cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );


  document.getElementById(
    "cartCount"
  ).innerText = count;

}


/* =========================================
   OPEN CART
   ========================================= */

function openCart() {

  renderCart();

  document
    .getElementById("cartModal")
    .classList.remove("hidden");

}


/* =========================================
   RENDER CART
   ========================================= */

function renderCart() {

  const box =
    document.getElementById("cartItems");


  if (cart.length === 0) {

    box.innerHTML = `
      <p style="text-align:center;padding:30px;">
        आपका Cart अभी खाली है 🛒
      </p>
    `;

    document.getElementById(
      "cartTotal"
    ).innerText = "₹0";

    return;

  }


  let total = 0;


  box.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          p => p.id === item.id
        );


      if (!product) return "";


      const itemTotal =
        product.price * item.qty;


      total += itemTotal;


      return `

        <div class="cart-item">

          <div>

            <b>
              ${product.name}
            </b>

            <br>

            <small>
              ₹${product.price}
              × ${item.qty}
            </small>

          </div>


          <div>

            <strong>
              ₹${itemTotal}
            </strong>

            <button
              onclick="removeFromCart('${product.id}')"
            >
              ×
            </button>

          </div>

        </div>

      `;

    }).join("");


  document.getElementById(
    "cartTotal"
  ).innerText =
    `₹${total}`;

}


/* =========================================
   REMOVE CART ITEM
   ========================================= */

function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  saveCart();

  updateCartCount();

  renderCart();

}


/* =========================================
   CHECKOUT
   ========================================= */

function checkout() {

  if (cart.length === 0) {

    alert(
      "पहले Cart में Jewellery add करें।"
    );

    return;

  }


  let message =
    "👑 *बाईसा का सिंगार - New Order*%0A%0A";


  let total = 0;


  cart.forEach(item => {

    const product =
      products.find(
        p => p.id === item.id
      );


    if (!product) return;


    const itemTotal =
      product.price * item.qty;


    total += itemTotal;


    message +=
      `💎 ${product.name}%0A` +
      `Quantity: ${item.qty}%0A` +
      `Price: ₹${itemTotal}%0A%0A`;

  });


  message +=
    `━━━━━━━━━━━━%0A` +
    `💰 *Total: ₹${total}*%0A%0A` +
    `📲 Payment QR से Online Payment करें।%0A` +
    `कृपया Payment के बाद Screenshot भेजें।`;


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  window.open(
    url,
    "_blank"
  );

}


/* =========================================
   PAYMENT WHATSAPP
   ========================================= */

function sendPaymentMessage() {

  const message =
    "नमस्ते बाईसा का सिंगार 👑%0A%0A" +
    "मैंने Online Payment के लिए QR Code देखा है।%0A" +
    "मुझे Jewellery Order करना है।%0A%0A" +
    "कृपया Order की जानकारी बताएं।";


  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    "_blank"
  );

}


/* =========================================
   SEARCH
   ========================================= */

search.addEventListener(
  "input",
  function () {

    const query =
      this.value
        .toLowerCase()
        .trim();


    if (!query) {

      showAll();

      return;

    }


    const result =
      products.filter(product =>

        product.name
          .toLowerCase()
          .includes(query)

        ||

        product.category
          .toLowerCase()
          .includes(query)

        ||

        product.metal
          .toLowerCase()
          .includes(query)

      );


    collectionTitle.innerText =
      `Search Result — ${result.length} Designs`;


    renderProducts(result);

  }
);


/* =========================================
   CLOSE MODALS
   ========================================= */

function closeModal(id) {

  document
    .getElementById(id)
    .classList.add("hidden");

}


/* बाहर क्लिक करने पर modal बंद */

document
  .querySelectorAll(".modal")
  .forEach(modal => {

    modal.addEventListener(
      "click",
      function(e) {

        if (e.target === modal) {

          modal.classList.add("hidden");

        }

      }
    );

  });


/* =========================================
   START WEBSITE
   ========================================= */

renderCategories();

showAll();

updateCartCount();
