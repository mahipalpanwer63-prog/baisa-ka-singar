* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  background: #fbf7f2;
  color: #2c1117;
  font-family: Arial, "Noto Sans Devanagari", sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

/* TOP BAR */
.top-bar {
  width: 100%;
  background: #24070e;
  color: #f0d17e;
  text-align: center;
  padding: 9px 12px;
  font-size: 13px;
}

/* HEADER */
.header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 5%;
  background: #3c0913;
  color: white;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.brand-icon {
  font-size: 38px;
}

.brand h1 {
  margin: 0;
  color: #f0d17e;
  font: 700 28px Georgia, serif;
}

.brand p {
  margin: 4px 0 0;
  color: #eadfbd;
  font-size: 13px;
}

.search-box {
  flex: 1;
  max-width: 600px;
  height: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border-radius: 25px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 15px;
  color: #333;
}

.cart-button {
  border: 0;
  background: #e7c36b;
  color: #300710;
  padding: 11px 17px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
}

.cart-button span {
  background: #4a0a16;
  color: white;
  border-radius: 50%;
  padding: 3px 7px;
  margin-left: 4px;
}

/* NAVIGATION */
.navbar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 14px 10px;
  background: #310710;
}

.navbar a {
  color: #f5dfaa;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.navbar a:hover {
  color: #e7c36b;
}

/* HERO */
.hero {
  width: calc(100% - 40px);
  max-width: 1200px;
  min-height: 400px;
  margin: 24px auto;
  padding: 55px 8%;
  border-radius: 20px;
  background: linear-gradient(110deg, #2d0710, #650e23 60%, #310710);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.hero-content {
  max-width: 650px;
}

.hero-small {
  color: #d7b657;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: bold;
}

.hero h2 {
  margin: 14px 0;
  font: 700 48px Georgia, serif;
  line-height: 1.25;
}

.hero h2 strong {
  color: #f0ca6b;
}

.hero p {
  max-width: 600px;
  color: #f2e6cf;
  line-height: 1.7;
  font-size: 17px;
}

.hero-button {
  display: inline-block;
  margin-top: 12px;
  padding: 13px 22px;
  border-radius: 8px;
  background: #e7c36b;
  color: #2b0810;
  text-decoration: none;
  font-weight: bold;
}

.hero-jewellery {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;
}

/* SECTIONS */
.section {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 45px 5%;
}

.section-heading {
  margin-bottom: 25px;
}

.section-heading span {
  color: #8b651f;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: bold;
}

.section-heading h2 {
  margin: 8px 0;
  color: #4d0b18;
  font: 700 32px Georgia, serif;
}

.section-heading p {
  color: #665b57;
}

/* CATEGORY */
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.category-card {
  border: 1px solid #eadfd3;
  background: white;
  border-radius: 14px;
  padding: 18px 10px;
  text-align: center;
  cursor: pointer;
  color: #2c1117;
  transition: 0.2s;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(75, 16, 21, 0.12);
}

.category-card > div {
  font-size: 35px;
  margin-bottom: 8px;
}

.category-card h3 {
  margin: 5px 0;
  font-size: 15px;
}

.category-card p {
  margin: 5px 0 0;
  color: #777;
  font-size: 12px;
}

/* PRODUCTS */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #eadfd3;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(50, 10, 20, 0.06);
}

.product-image {
  position: relative;
  height: 260px;
  background: #f2eae3;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #4a0a16;
  color: #f4d27a;
  padding: 6px 9px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
}

.product-info {
  padding: 16px;
}

.product-category {
  margin: 0 0 5px;
  color: #8b651f;
  font-size: 12px;
}

.product-info h3 {
  margin: 5px 0 8px;
  font-size: 17px;
}

.rating {
  color: #d29c1f;
  margin-bottom: 8px;
}

.price {
  color: #6a0d20;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.add-cart {
  width: 100%;
  padding: 11px;
  border: 0;
  border-radius: 7px;
  background: #4a0a16;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

/* BRIDAL */
.bridal-section {
  width: calc(100% - 40px);
  max-width: 1200px;
  min-height: 300px;
  margin: 20px auto;
  padding: 50px 8%;
  border-radius: 20px;
  background: linear-gradient(120deg, #3a0712, #720e28);
  color: white;
}

.bridal-content {
  max-width: 700px;
}

.bridal-content > span {
  color: #e7c36b;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: bold;
}

.bridal-content h2 {
  font: 700 38px Georgia, serif;
  line-height: 1.3;
}

.bridal-content p {
  color: #f1dfc7;
  line-height: 1.8;
}

/* PAYMENT */
.payment-section {
  max-width: 1200px;
  margin: auto;
  padding: 50px 5%;
  text-align: center;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 25px;
}

.payment-card {
  background: white;
  border: 1px solid #eadfd3;
  border-radius: 14px;
  padding: 25px 15px;
}

.payment-card > div {
  font-size: 40px;
}

.payment-card h3 {
  margin: 10px 0;
}

.payment-card p {
  color: #777;
}

.no-cod {
  margin-top: 25px;
  padding: 18px;
  border-radius: 10px;
  background: #fff0f0;
  color: #6a0d20;
}

/* FOOTER */
.footer {
  background: #25070e;
  color: #eadfc8;
  padding: 40px 7%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 30px;
}

.footer h2 {
  color: #e7c36b;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: #eadfc8;
  text-decoration: none;
}

.footer-payment {
  color: #f0d17e;
}

.copyright {
  grid-column: 1 / -1;
  text-align: center;
  margin: 15px 0 0;
  padding-top: 20px;
  border-top: 1px solid #5a2730;
}

/* CART */
.cart-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.65);
  padding: 20px;
}

.cart-modal.open {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-box {
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  background: white;
  border-radius: 18px;
  padding: 25px;
  position: relative;
}

.close-cart {
  position: absolute;
  right: 15px;
  top: 10px;
  border: 0;
  background: none;
  font-size: 30px;
  cursor: pointer;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}

.checkout-button {
  width: 100%;
  padding: 13px;
  border: 0;
  border-radius: 8px;
  background: #4a0a16;
  color: white;
  font-weight: bold;
}

.cart-note {
  color: #777;
  font-size: 12px;
}

/* TABLET */
@media (max-width: 900px) {
  .header {
    flex-wrap: wrap;
  }

  .search-box {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }

  .category-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .top-bar {
    font-size: 11px;
  }

  .header {
    padding: 16px;
    gap: 12px;
  }

  .brand {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .brand-icon {
    font-size: 30px;
  }

  .brand h1 {
    font-size: 23px;
  }

  .brand p {
    font-size: 12px;
  }

  .search-box {
    width: 100%;
    height: 42px;
  }

  .cart-button {
    width: 100%;
  }

  .navbar {
    gap: 0;
    justify-content: space-around;
    padding: 12px 5px;
    flex-wrap: wrap;
  }

  .navbar a {
    font-size: 12px;
    padding: 5px 7px;
  }

  .hero {
    width: calc(100% - 24px);
    min-height: 330px;
    margin: 15px auto;
    padding: 35px 25px;
  }

  .hero-content {
    width: 100%;
  }

  .hero-small {
    font-size: 11px;
  }

  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 14px;
  }

  .hero-jewellery {
    display: none;
  }

  .section {
    padding: 32px 14px;
  }

  .section-heading h2 {
    font-size: 26px;
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .category-card {
    padding: 14px 6px;
  }

  .category-card h3 {
    font-size: 13px;
  }

  .category-card p {
    font-size: 10px;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .product-image {
    height: 280px;
  }

  .bridal-section {
    width: calc(100% - 24px);
    margin: 10px auto;
    padding: 35px 25px;
  }

  .bridal-content h2 {
    font-size: 29px;
  }

  .payment-section {
    padding: 35px 14px;
  }

  .payment-grid {
    grid-template-columns: 1fr;
  }

  .footer {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 35px 20px;
  }

  .footer-links {
    align-items: center;
  }

  .copyright {
    grid-column: auto;
  }

  .cart-box {
    padding: 20px;
  }
}
