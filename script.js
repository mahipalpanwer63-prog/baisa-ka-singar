const products=[
["गोल्डन हार सेट","₹1,299","👑"],["पारंपरिक झुमके","₹699","💎"],["कुंदन चूड़ियाँ सेट","₹1,199","💫"],["डायमंड अंगूठी","₹1,499","💍"],["ब्राइडल ज्वेलरी सेट","₹2,999","👰"],["मांग टीका","₹599","✨"],["रानी हार","₹1,899","📿"],["नथ डिजाइन","₹799","🌙"],["बाजूबंद","₹899","🌟"],["माथा पट्टी","₹999","👑"],["पायल","₹649","🪷"],["कंगन सेट","₹1,099","⭕"],["चोकर सेट","₹1,599","💎"],["कान की बालियाँ","₹549","🌸"],["ब्राइडल नथ","₹1,299","🌙"]];
const cats=[["💎","हार"],["💎","झुमके"],["⭕","चूड़ियाँ"],["💍","अंगूठियाँ"],["✨","मांग टीका"],["👰","ब्राइडल सेट"],["🌙","नथ"],["🪷","पायल"]];
let cart=[];
document.getElementById("nav").innerHTML=["होम","सभी उत्पाद","हार","झुमके","चूड़ियाँ","अंगूठियाँ","ब्राइडल सेट","नया आगमन","ऑफर","संपर्क करें"].map(x=>`<span>${x}</span>`).join("");
document.getElementById("cats").innerHTML=cats.map(c=>`<div class="cat" onclick="filter('${c[1]}')"><div class="ico">${c[0]}</div><b>${c[1]}</b></div>`).join("");
function render(list=products){document.getElementById("grid").innerHTML=list.map((p,i)=>`<article class="card"><div class="pic">${p[2]}</div><h3>${p[0]}</h3><p class="price">${p[1]}</p><button class="buy" onclick="add(${products.indexOf(p)})">कार्ट में जोड़ें</button></article>`).join("")}
function add(i){cart.push(products[i]);update();openCart()}
function update(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cartItem"><span>${p[2]} ${p[0]}</span><b>${p[1]}</b></div>`).join(""):"<p>कार्ट खाली है।</p>";document.getElementById("total").textContent=cart.reduce((s,p)=>s+Number(p[1].replace(/[₹,]/g,"")),0).toLocaleString("en-IN")}
function openCart(){document.getElementById("drawer").classList.add("open");document.getElementById("overlay").classList.add("open")}
function closeCart(){document.getElementById("drawer").classList.remove("open");document.getElementById("overlay").classList.remove("open")}
function filter(term){render(products.filter(p=>p[0].toLowerCase().includes(term.toLowerCase())||term==="हार"&&p[0].includes("हार")))}
document.getElementById("search").addEventListener("input",e=>render(products.filter(p=>p[0].toLowerCase().includes(e.target.value.toLowerCase()))));
function checkout(){alert("यह अभी DEMO है। असली UPI/Card/Net Banking भुगतान जोड़ने के लिए बाद में आपके चुने हुए payment gateway की merchant details/API keys लगेंगी। COD वेबसाइट में नहीं रखा गया है।")}
render();update();