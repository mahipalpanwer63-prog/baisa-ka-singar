const defaultCats=[
['हार','💎','Necklace'],['कड़े','✨','Bangles'],['अंगूठियाँ','💍','Rings'],['माथा पट्टी','👑','Maang Tikka'],['पायल','〰️','Anklets'],['नथ','🌸','Nose Ring'],['गिफ्ट आइटम','🎁','Gift Items']
];
const products=[
{name:'Royal Necklace Design 01',cat:'हार',price:399,metal:'gold',emoji:'📿'},
{name:'Elegant Kade Design 02',cat:'कड़े',price:299,metal:'gold',emoji:'✨'},
{name:'Beautiful Ring Design 03',cat:'अंगूठियाँ',price:199,metal:'silver',emoji:'💍'},
{name:'Bridal Maang Tikka 04',cat:'माथा पट्टी',price:399,metal:'gold',emoji:'👑'},
{name:'Traditional Payal 05',cat:'पायल',price:299,metal:'silver',emoji:'〰️'},
{name:'Royal Nath 06',cat:'नथ',price:249,metal:'gold',emoji:'🌸'},
{name:'Gift Set 07',cat:'गिफ्ट आइटम',price:499,metal:'gold',emoji:'🎁'},
{name:'Classic Necklace 08',cat:'हार',price:599,metal:'silver',emoji:'📿'}
];
let cart=JSON.parse(localStorage.getItem('baisaCart')||'[]');
function renderCats(){document.getElementById('categoryGrid').innerHTML=defaultCats.map(c=>`<a href="#products" class="category" onclick="showCat('${c[0]}')"><div class="cat-img">${c[1]}</div><h3>${c[0]}</h3><small>${c[2]}</small><div class="pill">100+ डिज़ाइन</div></a>`).join('')}
function renderProducts(list=products){document.getElementById('productGrid').innerHTML=list.map((p,i)=>`<article class="product"><div class="product-img">${p.emoji}</div><div class="product-body"><small>${p.cat} • ${p.metal==='gold'?'Gold':'Silver'}</small><h3>${p.name}</h3><span class="price">₹${p.price}</span><button class="add" onclick="addToCart(${i})">Add</button></div></article>`).join('')}
function addToCart(i){cart.push(products[i]);localStorage.setItem('baisaCart',JSON.stringify(cart));updateCart();alert('सामान कार्ट में जोड़ दिया गया।')}
function updateCart(){document.getElementById('cartCount').textContent=cart.length}
function openCart(){document.getElementById('cartModal').classList.add('show');const box=document.getElementById('cartItems');box.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}</span><b>₹${p.price}</b></div>`).join(''):'<p>कार्ट खाली है।</p>';document.getElementById('cartTotal').textContent=cart.reduce((s,p)=>s+p.price,0)}
function closeCart(){document.getElementById('cartModal').classList.remove('show')}
function checkout(){if(!cart.length)return alert('पहले कोई सामान चुनें।');location.href='admin.html?checkout=1'}
function filterProducts(m,btn){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderProducts(m==='all'?products:products.filter(p=>p.metal===m))}
function showCat(cat){setTimeout(()=>renderProducts(products.filter(p=>p.cat===cat)),50)}
renderCats();renderProducts();updateCart();