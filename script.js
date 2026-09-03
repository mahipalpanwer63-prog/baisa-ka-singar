const categories = [

{
name:"हार",
desc:"Royal Necklace Designs",
icon:"💎",
key:"necklace"
},

{
name:"कड़े",
desc:"Elegant Kade & Bangles",
icon:"✨",
key:"bangles"
},

{
name:"अंगूठियाँ",
desc:"Beautiful Ring Collection",
icon:"💍",
key:"rings"
},

{
name:"मांग टीका",
desc:"Bridal Maang Tikka",
icon:"👑",
key:"maang-tikka"
},

{
name:"नाथ",
desc:"Traditional Nose Rings",
icon:"🌸",
key:"nath"
},

{
name:"पायल",
desc:"Traditional Payal",
icon:"✨",
key:"payal"
},

{
name:"बाजूबंद",
desc:"Royal Bajuband",
icon:"〰️",
key:"bajuband"
},

{
name:"माथा पट्टी",
desc:"Bridal Matha Patti",
icon:"👑",
key:"matha"
}

];


const searchWords = {

necklace:"jewelry necklace",

bangles:"gold bangles jewelry",

rings:"jewelry ring",

"maang-tikka":"bridal jewelry",

nath:"indian jewelry",

payal:"silver anklet jewelry",

bajuband:"indian jewelry",

matha:"bridal jewelry"

};


let products = [];

let cart =
JSON.parse(localStorage.getItem("baisaCart")) || [];

let activeCategory = null;


function createProducts(){

let id = 1;

categories.forEach(category => {


/* 50 SILVER */

for(let i=1;i<=50;i++){

const prices =
[199,299,399];

products.push({

id:id++,

category:category.name,

key:category.key,

metal:"Silver",

name:
`${category.name} Silver Design ${String(i).padStart(2,"0")}`,

price:
prices[(i-1)%3],

image:
`https://loremflickr.com/700/700/${encodeURIComponent(searchWords[category.key])}?lock=${id}`,

desc:
`Premium Silver finish ${category.name} design.`

});

}


/* 50 GOLD */

for(let i=1;i<=50;i++){

const prices =
[499,599,699];

products.push({

id:id++,

category:category.name,

key:category.key,

metal:"Gold",

name:
`${category.name} Gold Design ${String(i).padStart(2,"0")}`,

price:
prices[(i-1)%3],

image:
`https://loremflickr.com/700/700/${encodeURIComponent(searchWords[category.key])}?lock=${id}`,

desc:
`Premium Gold finish ${category.name} design.`

});

}

});

}


const categoryGrid =
document.getElementById("categoryGrid");


categoryGrid.innerHTML =
categories.map((category,index)=>`

<div
class="categoryCard"
onclick="showCategory(${index})"
>

<div class="categoryIcon">
${category.icon}
</div>

<h3>
${category.name}
</h3>

<p>
${category.desc}
</p>

<small>
100 Designs
<br>
50 Silver + 50 Gold
</small>

</div>

`).join("");


const productGrid =
document.getElementById("productGrid");


function renderProducts(list){

document.getElementById("productInfo")
.textContent =
`${list.length} Designs`;


if(!list.length){

productGrid.innerHTML =
`<div class="empty">
कोई Design नहीं मिला ❤️
</div>`;

return;

}


productGrid.innerHTML =
list.map(product=>`

<div class="productCard">

<img
src="${product.image}"
alt="${product.name}"
loading="lazy"
onerror="this.src='https://placehold.co/700x700/f4e7df/65001f?text=Jewellery'"
>

<div class="productBody">

<div class="productCat">
${product.category} • ${product.metal}
</div>

<div class="productName">
${product.name}
</div>

<div class="productBottom">

<span class="price">
₹${product.price.toLocaleString("en-IN")}
</span>

<button
class="addBtn"
onclick="addToCart(${product.id})"
>
Add
</button>

</div>

</div>

</div>

`).join("");

}


function showCategory(index){

activeCategory = index;

const category =
categories[index];

document.getElementById("collectionTitle")
.textContent =
`${category.name} — 100 Designs`;

renderProducts(
products.filter(
product =>
product.key === category.key
)
);

document.getElementById("collection")
.scrollIntoView({
behavior:"smooth"
});

}


function showAll(){

activeCategory = null;

document.getElementById("collectionTitle")
.textContent =
"खास Jewellery Collection — 800 Designs";

renderProducts(products);

document.getElementById("collection")
.scrollIntoView({
behavior:"smooth"
});

}


document
.getElementById("search")
.addEventListener("input",function(){

const value =
this.value.toLowerCase().trim();


if(!value){

if(activeCategory === null)
showAll();

else
showCategory(activeCategory);

return;

}


const result =
products.filter(product =>

product.name
.toLowerCase()
.includes(value)

||

product.category
.toLowerCase()
.includes(value)

||

product.metal
.toLowerCase()
.includes(value)

);


document.getElementById("collectionTitle")
.textContent =
"Search Results";

renderProducts(result);

});


function addToCart(id){

const item =
cart.find(item => item.id === id);


if(item)
item.qty++;

else
cart.push({
id:id,
qty:1
});


saveCart();

alert(
"Jewellery Cart में Add हो गई ❤️"
);

}


function saveCart(){

localStorage.setItem(
"baisaCart",
JSON.stringify(cart)
);

updateCartCount();

}


function updateCartCount(){

const count =
cart.reduce(
(total,item) =>
total + item.qty,
0
);

document.getElementById("cartCount")
.textContent = count;

}


function openCart(){

renderCart();

document.getElementById("cartModal")
.classList.remove("hidden");

}


function renderCart(){

const box =
document.getElementById("cartItems");


if(!cart.length){

box.innerHTML =
`<div class="empty">
आपका Cart खाली है ❤️
</div>`;

document.getElementById("cartTotal")
.textContent = "₹0";

return;

}


let total = 0;


box.innerHTML =
cart.map(item=>{

const product =
products.find(
product =>
product.id === item.id
);


const subtotal =
product.price * item.qty;

total += subtotal;


return `

<div class="cartItem">

<img
src="${product.image}"
alt=""
>

<div class="cartInfo">

<b>
${product.name}
</b>

<div>
₹${product.price.toLocaleString("en-IN")}
</div>

<button
class="remove"
onclick="removeFromCart(${product.id})"
>
Remove
</button>

</div>


<div class="qty">

<button
onclick="changeQty(${product.id},-1)"
>
−
</button>

<b>
${item.qty}
</b>

<button
onclick="changeQty(${product.id},1)"
>
+
</button>

</div>

</div>

`;

}).join("");


document.getElementById("cartTotal")
.textContent =
"₹" + total.toLocaleString("en-IN");

}


function changeQty(id,change){

const item =
cart.find(
item => item.id === id
);


if(!item)
return;


item.qty += change;


if(item.qty <= 0){

cart =
cart.filter(
item => item.id !== id
);

}


saveCart();

renderCart();

}


function removeFromCart(id){

cart =
cart.filter(
item => item.id !== id
);

saveCart();

renderCart();

}


function checkout(){

if(!cart.length){

alert(
"पहले Jewellery Add करें ❤️"
);

return;

}


const total =
cart.reduce((sum,item)=>{

const product =
products.find(
product =>
product.id === item.id
);

return sum +
product.price * item.qty;

},0);


document.getElementById("paymentAmount")
.textContent =
"₹" + total.toLocaleString("en-IN");


closeModal("cartModal");


document.getElementById("payment")
.scrollIntoView({
behavior:"smooth"
});

}


function paymentDone(){

if(!cart.length){

alert(
"पहले Cart में Jewellery Add करें ❤️"
);

return;

}


const total =
cart.reduce((sum,item)=>{

const product =
products.find(
product =>
product.id === item.id
);

return sum +
product.price * item.qty;

},0);


let order = "";

cart.forEach(item=>{

const product =
products.find(
product =>
product.id === item.id
);

order +=
`${product.name} x ${item.qty} = ₹${product.price * item.qty}\n`;

});


const message =
`Hello Baisa Ka Singar,

मैंने Online Payment किया है.

Order:
${order}

Total:
₹${total.toLocaleString("en-IN")}

Payment Screenshot भेज रहा/रही हूँ.`;


window.open(

"https://wa.me/917568496499?text=" +
encodeURIComponent(message),

"_blank"

);

}


function closeModal(id){

document
.getElementById(id)
.classList.add("hidden");

}


/* PRODUCT MODAL */

document.addEventListener(
"click",
function(event){

if(
event.target.classList.contains("productCard")
)
return;

});


createProducts();

renderProducts(products);

updateCartCount();
