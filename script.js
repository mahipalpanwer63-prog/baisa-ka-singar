const categories=[
["हार / Necklace","Royal Necklace Designs","💎"],
["Rani Haar","Royal Bridal Collection","👑"],
["झुमके","Beautiful Earrings","💎"],
["चूड़ियाँ","Designer Bangles","⭕"],
["कंगन","Elegant Kada & Bangles","✨"],
["अंगूठियाँ","Beautiful Rings","💍"],
["मांग टीका","Bridal Maang Tikka","👸"],
["नथ","Traditional Nose Rings","🌸"],
["पायल","Traditional Payal","✨"],
["बाजूबंद","Royal Bajuband","〰️"],
["माथा पट्टी","Bridal Matha Patti","👑"],
["Choker","Premium Choker Designs","💎"]
];

const imagePool=[
"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=80"
];

const priceBase=[499,699,899,1099,1299,1499,1699,1999,2299,2499];
let products=[];
categories.forEach((c,ci)=>{
  for(let i=1;i<=20;i++){
    const n=(ci*20)+i;
    products.push({
      id:n, cat:c[0], catIndex:ci, name:`${c[0]} Design ${String(i).padStart(2,"0")}`,
      desc:`Premium ${c[0]} design — शादी, पार्टी और special occasions के लिए elegant collection.`,
      price:priceBase[(i+ci)%priceBase.length]+(ci*50),
      img:imagePool[(i+ci)%imagePool.length]
    });
  }
});

let activeCategory=null;
let cart=JSON.parse(localStorage.getItem("baisaCart")||"[]");

const categoryGrid=document.getElementById("categoryGrid");
const productGrid=document.getElementById("productGrid");
const search=document.getElementById("search");

categoryGrid.innerHTML=categories.map((c,i)=>`
  <div class="category" onclick="showCategory(${i})">
    <div class="emoji">${c[2]}</div><h3>${c[0]}</h3><p>${c[1]}</p><p><b>20 Designs</b></p>
  </div>`).join("");

function renderProducts(list=products){
  document.getElementById("productInfo").textContent=`${list.length} Designs`;
  productGrid.innerHTML=list.map(p=>`
    <article class="product" onclick="openProduct(${p.id})">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <h3>${p.name}</h3>
        <div class="product-bottom">
          <span class="price">₹${p.price.toLocaleString("en-IN")}</span>
          <button class="add" onclick="event.stopPropagation();addToCart(${p.id})">Add</button>
        </div>
      </div>
    </article>`).join("");
}

function showCategory(i){
  activeCategory=i;
  const c=categories[i];
  document.getElementById("collectionTitle").textContent=`${c[0]} — ${c[1]}`;
  renderProducts(products.filter(p=>p.catIndex===i));
  document.getElementById("collection").scrollIntoView({behavior:"smooth"});
}
function showAll(){activeCategory=null;document.getElementById("collectionTitle").textContent="खास Jewellery Collection";renderProducts(products);}

search.addEventListener("input",()=>{
  const q=search.value.trim().toLowerCase();
  if(!q){activeCategory===null?showAll():showCategory(activeCategory);return}
  const list=products.filter(p=>(p.name+" "+p.cat+" "+p.desc).toLowerCase().includes(q));
  document.getElementById("collectionTitle").textContent=`Search Results`;
  renderProducts(list);
});

function openProduct(id){
  const p=products.find(x=>x.id===id);
  document.getElementById("modalImg").src=p.img;
  document.getElementById("modalImg").alt=p.name;
  document.getElementById("modalCat").textContent=p.cat;
  document.getElementById("modalName").textContent=p.name;
  document.getElementById("modalDesc").textContent=p.desc;
  document.getElementById("modalPrice").textContent="₹"+p.price.toLocaleString("en-IN");
  document.getElementById("modalAdd").onclick=()=>{addToCart(p.id);closeModal("productModal")};
  document.getElementById("productModal").classList.remove("hidden");
}
function addToCart(id){
  const p=products.find(x=>x.id===id);
  const found=cart.find(x=>x.id===id);
  if(found) found.qty++; else cart.push({id:p.id,qty:1});
  saveCart();
}
function saveCart(){
  localStorage.setItem("baisaCart",JSON.stringify(cart));
  document.getElementById("cartCount").textContent=cart.reduce((a,b)=>a+b.qty,0);
}
function openCart(){
  const box=document.getElementById("cartItems");
  if(!cart.length) box.innerHTML="<p>Cart अभी खाली है। Jewellery select करके Add करें 💎</p>";
  else box.innerHTML=cart.map(item=>{
    const p=products.find(x=>x.id===item.id);
    return `<div class="cart-row"><img src="${p.img}" alt=""><div><h4>${p.name}</h4><p>₹${p.price.toLocaleString("en-IN")} × ${item.qty}</p></div><button class="remove" onclick="removeCart(${p.id})">Remove</button></div>`
  }).join("");
  const total=cart.reduce((s,item)=>s+products.find(p=>p.id===item.id).price*item.qty,0);
  document.getElementById("cartTotal").textContent="₹"+total.toLocaleString("en-IN");
  document.getElementById("cartModal").classList.remove("hidden");
}
function removeCart(id){cart=cart.filter(x=>x.id!==id);saveCart();openCart()}
function closeModal(id){document.getElementById(id).classList.add("hidden")}
function checkout(){
  if(!cart.length){alert("Cart खाली है।");return}
  alert("Order/Payment integration के लिए UPI ID या payment gateway जोड़ना होगा। अभी आपका cart तैयार है.");
}
window.addEventListener("click",e=>{if(e.target.classList.contains("modal"))e.target.classList.add("hidden")});
saveCart();renderProducts();