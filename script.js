/* =========================================================
   BAISA KA SINGAR
   PREMIUM ARTIFICIAL JEWELLERY
   12 CATEGORIES × 50 DESIGNS = 600 PRODUCTS
   ========================================================= */


/* =========================================================
   CATEGORIES
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
    keyword: "rani haar"
  },

  {
    name: "झुमके",
    desc: "Beautiful Earrings",
    icon: "✨",
    keyword: "jhumka earrings"
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
    keyword: "kangan kada"
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
    keyword: "payal anklet"
  },

  {
    name: "बाजूबंद",
    desc: "Royal Bajuband",
    icon: "〰️",
    keyword: "bajuband armlet"
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
   50 DIFFERENT IMAGE LOCKS FOR EACH CATEGORY
   ========================================================= */

const imageLocks = Array.from(
  { length: 50 },
  (_, i) => i + 1
);


/* =========================================================
   CATEGORY-SPECIFIC IMAGE SEARCH
   IMPORTANT:
   Each category gets its OWN jewellery keyword.
   ========================================================= */

function getProductImage(category, number) {

  const keyword = encodeURIComponent(
    category.keyword + " jewellery"
  );

  const lock = imageLocks[number - 1];

  return `https://loremflickr.com/900/900/${keyword}?lock=${category.keyword.length * 100 + lock}`;
}


/* =========================================================
   PRODUCT NAME BANKS
   ========================================================= */

const nameStyles = {

  "हार / Necklace": [
    "Royal Necklace",
    "Kundan Necklace",
    "Bridal Necklace",
    "Rajwadi Necklace",
    "Polki Necklace",
    "Meenakari Necklace",
    "Designer Necklace",
    "Pearl Necklace",
    "Antique Necklace",
    "Diamond Look Necklace"
  ],

  "Rani Haar": [
    "Royal Rani Haar",
    "Bridal Rani Haar",
    "Kundan Rani Haar",
    "Rajwadi Rani Haar",
    "Pearl Rani Haar",
    "Polki Rani Haar",
    "Meenakari Rani Haar",
    "Antique Rani Haar",
    "Premium Rani Haar",
    "Designer Rani Haar"
  ],

  "झुमके": [
    "Royal Jhumka",
    "Kundan Jhumka",
    "Bridal Jhumka",
    "Rajwadi Jhumka",
    "Pearl Jhumka",
    "Meenakari Jhumka",
    "Antique Jhumka",
    "Designer Jhumka",
    "Temple Jhumka",
    "Premium Jhumka"
  ],

  "चूड़ियाँ": [
    "Royal Bangles",
    "Kundan Bangles",
    "Bridal Bangles",
    "Rajwadi Bangles",
    "Meenakari Bangles",
    "Stone Bangles",
    "Designer Bangles",
    "Pearl Bangles",
    "Antique Bangles",
    "Premium Bangles"
  ],

  "कंगन": [
    "Royal Kangan",
    "Kundan Kangan",
    "Bridal Kangan",
    "Rajwadi Kangan",
    "Meenakari Kangan",
    "Polki Kangan",
    "Designer Kangan",
    "Pearl Kangan",
    "Antique Kangan",
    "Premium Kangan"
  ],

  "अंगूठियाँ": [
    "Royal Ring",
    "Kundan Ring",
    "Bridal Ring",
    "Diamond Look Ring",
    "Rajwadi Ring",
    "Polki Ring",
    "Meenakari Ring",
    "Stone Ring",
    "Designer Ring",
    "Premium Ring"
  ],

  "मांग टीका": [
    "Royal Maang Tikka",
    "Kundan Maang Tikka",
    "Bridal Maang Tikka",
    "Rajwadi Maang Tikka",
    "Polki Maang Tikka",
    "Meenakari Maang Tikka",
    "Pearl Maang Tikka",
    "Designer Maang Tikka",
    "Antique Maang Tikka",
    "Premium Maang Tikka"
  ],

  "नथ": [
    "Royal Nath",
    "Kundan Nath",
    "Bridal Nath",
    "Rajwadi Nath",
    "Pearl Nath",
    "Polki Nath",
    "Meenakari Nath",
    "Traditional Nath",
    "Designer Nath",
    "Premium Nath"
  ],

  "पायल": [
    "Royal Payal",
    "Bridal Payal",
    "Silver Look Payal",
    "Pearl Payal",
    "Kundan Payal",
    "Rajwadi Payal",
    "Traditional Payal",
    "Designer Payal",
    "Antique Payal",
    "Premium Payal"
  ],

  "बाजूबंद": [
    "Royal Bajuband",
    "Bridal Bajuband",
    "Kundan Bajuband",
    "Rajwadi Bajuband",
    "Meenakari Bajuband",
    "Polki Bajuband",
    "Pearl Bajuband",
    "Antique Bajuband",
    "Designer Bajuband",
    "Premium Bajuband"
  ],

  "माथा पट्टी": [
    "Royal Matha Patti",
    "Bridal Matha Patti",
    "Kundan Matha Patti",
    "Rajwadi Matha Patti",
    "Polki Matha Patti",
    "Meenakari Matha Patti",
    "Pearl Matha Patti",
    "Antique Matha Patti",
    "Designer Matha Patti",
    "Premium Matha Patti"
  ],

  "Choker": [
    "Royal Choker",
    "Kundan Choker",
    "Bridal Choker",
    "Rajwadi Choker",
    "Polki Choker",
    "Meenakari Choker",
    "Pearl Choker",
    "Diamond Look Choker",
    "Designer Choker",
    "Premium Choker"
  ]

};


/* =========================================================
   PRICE SYSTEM
   ========================================================= */

const priceBase = [
  499,
  699,
  899,
  1099,
  1299,
  1499,
  1699,
  1899,
  2099,
  2299,
  2499,
  2699,
  2899,
  3099,
  3299
];


/* =========================================================
   CREATE 600 PRODUCTS
   ========================================================= */

let products = [];


categories.forEach((category, categoryIndex) => {

  for (let i = 1; i <= 50; i++) {

    const id =
      categoryIndex * 50 + i;

    const styles =
      nameStyles[category.name];

    const styleName =
      styles[(i - 1) % styles.length];

    products.push({

      id: id,

      cat: category.name,

      catIndex: categoryIndex,

      name:
        `${styleName} Design ${String(i).padStart(2, "0")}`,

      desc:
        `Premium ${category.name} jewellery design — शादी, पार्टी और special occasions के लिए elegant collection.`,

      price:
        priceBase[
          (i + categoryIndex) % priceBase.length
        ] +
        (categoryIndex * 50),

      img:
        getProductImage(category, i)

    });

  }

});


/* =========================================================
   STATE
   ========================================================= */

let activeCategory = null;


let cart = [];

try {

  cart =
    JSON.parse(
      localStorage.getItem("baisaCart") || "[]"
    );

  if (!Array.isArray(cart)) {
    cart = [];
  }

} catch (error) {

  cart = [];

}


/* =========================================================
   ELEMENTS
   ========================================================= */

const categoryGrid =
  document.getElementById("categoryGrid");

const productGrid =
  document.getElementById("productGrid");

const search =
  document.getElementById("search");


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

categoryGrid.innerHTML =
  categories.map((category, index) => {

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
          <b>50 Designs</b>
        </p>

      </div>

    `;

  }).join("");


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(list = products) {

  const productInfo =
    document.getElementById("productInfo");

  productInfo.textContent =
    `${list.length} Designs`;


  if (!list.length) {

    productGrid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:60px 20px;
      ">

        <h2>
          Jewellery नहीं मिली 💎
        </h2>

        <p>
          दूसरी jewellery search करके देखें।
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
            onerror="this.src='https://placehold.co/900x900/f8eee8/5b071d?text=Jewellery'"
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


  /*
    IMPORTANT:
    केवल उसी category के 50 products
  */

  const categoryProducts =
    products.filter(
      product =>
        product.catIndex === index
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
  function () {

    const query =
      search.value
        .trim()
        .toLowerCase();


    if (!query) {

      if (activeCategory === null) {

        showAll();

      } else {

        showCategory(activeCategory);

      }

      return;

    }


    let searchableProducts =
      products;


    /*
      अगर category खुली है,
      तो search उसी category में होगा।
    */

    if (activeCategory !== null) {

      searchableProducts =
        products.filter(
          product =>
            product.catIndex === activeCategory
        );

    }


    const result =
      searchableProducts.filter(product => {

        const text =
          `${product.name}
           ${product.cat}
           ${product.desc}`.toLowerCase();

        return text.includes(query);

      });


    document.getElementById(
      "collectionTitle"
    ).textContent =
      "Search Results";


    renderProducts(result);

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
  ).onclick = function () {

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


  alert(
    `${product.name} Cart में add हो गया 💎`
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


  updateCartCount();

}


/* =========================================================
   CART COUNT
   ========================================================= */

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
            p => p.id === item.id
          );

        if (!product) return sum;

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

    alert(
      "Cart खाली है।"
    );

    return;

  }


  alert(
    "Order/Payment integration के लिए UPI ID या payment gateway जोड़ना होगा। अभी आपका cart तैयार है।"
  );

}


/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
   ========================================================= */

document
  .querySelectorAll(".modal")
  .forEach(modal => {

    modal.addEventListener(
      "click",
      function (event) {

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


/* =========================================================
   INITIAL LOAD
   ========================================================= */

updateCartCount();

renderProducts(products);
