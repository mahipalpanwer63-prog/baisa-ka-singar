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

/*
  हर category का अपना image pool है।
  इससे एक category की image दूसरी category में नहीं जाएगी।
*/

const categoryImages = {

  "हार / Necklace": [
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
  ],

  "Rani Haar": [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
  ],

  "झुमके": [
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
  ],

  "चूड़ियाँ": [
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80"
  ],

  "कंगन": [
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80"
  ],

  "अंगूठियाँ": [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
  ],

  "मांग टीका": [
    "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=80"
  ],

  "नथ": [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
  ],

  "पायल": [
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80"
  ],

  "बाजूबंद": [
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80"
  ],

  "माथा पट्टी": [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
  ],

  "Choker": [
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
  ]
};


/* अलग-अलग category के नाम */

const designNames = {

  "हार / Necklace": [
    "Royal Gold Necklace",
    "Kundan Necklace",
    "Diamond Look Necklace",
    "Bridal Necklace",
    "Pearl Necklace",
    "Meenakari Necklace",
    "Polki Necklace",
    "Temple Necklace",
    "Designer Necklace",
    "Traditional Necklace"
  ],

  "Rani Haar": [
    "Royal Rani Haar",
    "Bridal Rani Haar",
    "Kundan Rani Haar",
    "Polki Rani Haar",
    "Pearl Rani Haar",
    "Rajwadi Rani Haar",
    "Meenakari Rani Haar",
    "Gold Look Rani Haar",
    "Designer Rani Haar",
    "Premium Rani Haar"
  ],

  "झुमके": [
    "Kundan Jhumka",
    "Bridal Jhumka",
    "Pearl Jhumka",
    "Meenakari Jhumka",
    "Jhumka Bali",
    "Rajwadi Jhumka",
    "Diamond Look Jhumka",
    "Temple Jhumka",
    "Designer Jhumka",
    "Premium Jhumka"
  ],

  "चूड़ियाँ": [
    "Kundan Chudi",
    "Bridal Chudi Set",
    "Meenakari Chudi",
    "Rajwadi Chudi",
    "Designer Chudi",
    "Gold Look Chudi",
    "Diamond Look Chudi",
    "Pearl Chudi",
    "Traditional Chudi",
    "Premium Chudi"
  ],

  "कंगन": [
    "Royal Kangan",
    "Kundan Kangan",
    "Bridal Kangan",
    "Polki Kangan",
    "Meenakari Kangan",
    "Rajwadi Kangan",
    "Diamond Look Kangan",
    "Gold Look Kangan",
    "Designer Kangan",
    "Premium Kangan"
  ],

  "अंगूठियाँ": [
    "Royal Ring",
    "Kundan Ring",
    "Bridal Ring",
    "Diamond Look Ring",
    "Pearl Ring",
    "Polki Ring",
    "Meenakari Ring",
    "Rajwadi Ring",
    "Designer Ring",
    "Premium Ring"
  ],

  "मांग टीका": [
    "Royal Maang Tikka",
    "Kundan Maang Tikka",
    "Bridal Maang Tikka",
    "Polki Maang Tikka",
    "Pearl Maang Tikka",
    "Meenakari Maang Tikka",
    "Rajwadi Maang Tikka",
    "Diamond Look Maang Tikka",
    "Designer Maang Tikka",
    "Premium Maang Tikka"
  ],

  "नथ": [
    "Royal Nath",
    "Bridal Nath",
    "Kundan Nath",
    "Pearl Nath",
    "Polki Nath",
    "Meenakari Nath",
    "Rajwadi Nath",
    "Diamond Look Nath",
    "Designer Nath",
    "Premium Nath"
  ],

  "पायल": [
    "Royal Payal",
    "Bridal Payal",
    "Silver Look Payal",
    "Kundan Payal",
    "Pearl Payal",
    "Meenakari Payal",
    "Rajwadi Payal",
    "Designer Payal",
    "Traditional Payal",
    "Premium Payal"
  ],

  "बाजूबंद": [
    "Royal Bajuband",
    "Bridal Bajuband",
    "Kundan Bajuband",
    "Polki Bajuband",
    "Pearl Bajuband",
    "Meenakari Bajuband",
    "Rajwadi Bajuband",
    "Diamond Look Bajuband",
    "Designer Bajuband",
    "Premium Bajuband"
  ],

  "माथा पट्टी": [
    "Royal Matha Patti",
    "Bridal Matha Patti",
    "Kundan Matha Patti",
    "Polki Matha Patti",
    "Pearl Matha Patti",
    "Meenakari Matha Patti",
    "Rajwadi Matha Patti",
    "Diamond Look Matha Patti",
    "Designer Matha Patti",
    "Premium Matha Patti"
  ],

  "Choker": [
    "Royal Choker",
    "Kundan Choker",
    "Bridal Choker",
    "Polki Choker",
    "Pearl Choker",
    "Meenakari Choker",
    "Rajwadi Choker",
    "Diamond Look Choker",
    "Designer Choker",
    "Premium Choker"
  ]
};


/* PRICE */

const priceBase = [
  499,
  599,
  699,
  799,
  899,
  999,
  1099,
  1299,
  1499,
  1699,
  1999,
  2299
];


/* =========================
   600 PRODUCTS GENERATE
   ========================= */

let products = [];

categories.forEach((category, categoryIndex) => {

  const categoryName = category[0];

  for (let i = 1; i <= 50; i++) {

    const names = designNames[categoryName];

    const name =
      names[(i - 1) % names.length] +
      " Design " +
      String(i).padStart(2, "0");

    const price =
      priceBase[(i + categoryIndex) % priceBase.length] +
      categoryIndex * 50;

    products.push({

      id: categoryIndex * 1000 + i,

      cat: categoryName,

      catIndex: categoryIndex,

      name: name,

      desc:
        "Premium " +
        categoryName +
        " — शादी, पार्टी और हर खास मौके के लिए शानदार jewellery design.",

      price: price,

      img: categoryImages[categoryName][0]

    });

  }

});


/* =========================
   CART
   ========================= */

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


/* =========================
   CATEGORY DISPLAY
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
          <b>50 Designs</b>
        </p>

      </div>
    `;

  }).join("");


/* =========================
   PRODUCT DISPLAY
   ========================= */

function renderProducts(list = products) {

  document.getElementById("productInfo")
    .textContent =
    `${list.length} Designs`;

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
                  addToCart(${product.id})
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
    `${category[0]} — ${category[1]}`;

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


    let list;


    if (activeCategory === null) {

      list =
        products.filter(product =>
          (
            product.name +
            " " +
            product.cat +
            " " +
            product.desc
          )
          .toLowerCase()
          .includes(query)
        );

    } else {

      list =
        products.filter(product =>
          product.catIndex === activeCategory &&
          (
            product.name +
            " " +
            product.cat +
            " " +
            product.desc
          )
          .toLowerCase()
          .includes(query)
        );

    }


    document.getElementById(
      "collectionTitle"
    ).textContent =
      "Search Results";

    renderProducts(list);

  }
);


/* =========================
   PRODUCT DETAILS
   ========================= */

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
   ADD TO CART
   ========================= */

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
      id: product.id,
      qty: 1
    });

  }


  saveCart();

  alert(
    product.name +
    " Cart में add हो गया ❤️"
  );

}


/* =========================
   SAVE CART
   ========================= */

function saveCart() {

  localStorage.setItem(
    "baisaCart",
    JSON.stringify(cart)
  );


  document.getElementById(
    "cartCount"
  ).textContent =
    cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );

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

    box.innerHTML =
      `
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
            p => p.id === item.id
          );

        return product
          ? sum +
            product.price *
            item.qty
          : sum;

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
      item => item.id !== id
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
    "Checkout system तैयार है। " +
    "Online payment gateway जोड़ने के बाद " +
    "यहीं से payment लिया जाएगा।"
  );

}


/* =========================
   CLOSE MODAL BY OUTSIDE CLICK
   ========================= */

window.addEventListener(
  "click",
  function (event) {

    if (
      event.target.classList.contains(
        "modal"
      )
    ) {

      event.target.classList.add(
        "hidden"
      );

    }

  }
);


/* =========================
   START WEBSITE
   ========================= */

saveCart();

renderProducts();
