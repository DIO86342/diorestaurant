/* ===== SETTINGS ===== */
const WHATSAPP = "+252617868692"; // number with country code, digits only
const HOURS = {
  0: [8, 23],
  1: [8, 23],
  2: [8, 23],
  3: [8, 23],
  4: [8, 23],
  5: [14, 23],
  6: [8, 23],
};
/* Real photos: paste image URLs or file paths (e.g. "images/hero.jpg"). Empty = illustration is shown. */
const PHOTOS = { hero: "", about: ["", "", ""] };

/* ===== ILLUSTRATIONS (used until you add photos) ===== */
const W =
  '<circle cx="100" cy="100" r="92" fill="#fff"/><circle cx="100" cy="100" r="72" fill="#EFEFEA"/>';
const ART = {
  plate: (a) =>
    `<svg viewBox="0 0 200 200">${W}<ellipse cx="82" cy="108" rx="44" ry="30" fill="${a[0]}"/><rect x="96" y="66" width="56" height="30" rx="15" fill="${a[1]}" transform="rotate(-22 124 81)"/><rect x="100" y="104" width="50" height="28" rx="14" fill="${a[1]}" transform="rotate(14 125 118)"/><circle cx="58" cy="136" r="8" fill="#4a8f3c"/><circle cx="74" cy="144" r="6" fill="#e5484d"/><circle cx="48" cy="86" r="5" fill="#4a8f3c"/></svg>`,
  fish: (a) =>
    `<svg viewBox="0 0 200 200">${W}<ellipse cx="95" cy="100" rx="52" ry="26" fill="${a[0]}"/><polygon points="140,100 172,78 172,122" fill="${a[1]}"/><circle cx="68" cy="94" r="4" fill="#222"/><path d="M80 84q16 16 0 32" stroke="${a[1]}" stroke-width="3" fill="none"/><circle cx="60" cy="140" r="14" fill="#FFE066"/><circle cx="60" cy="140" r="8" fill="#FFF3B0"/></svg>`,
  samosa: (a) =>
    `<svg viewBox="0 0 200 200">${W}<polygon points="76,58 130,140 30,140" fill="${a[0]}"/><polygon points="130,70 178,148 92,148" fill="${a[1]}"/><circle cx="150" cy="60" r="12" fill="#4a8f3c"/></svg>`,
  bowl: (a) =>
    `<svg viewBox="0 0 200 200"><path d="M24 96H176A76 76 0 0 1 24 96Z" fill="#fff"/><ellipse cx="100" cy="96" rx="76" ry="15" fill="${a[0]}"/><circle cx="76" cy="94" r="6" fill="${a[1]}"/><circle cx="108" cy="98" r="7" fill="${a[1]}"/><circle cx="130" cy="92" r="5" fill="${a[1]}"/><path d="M80 70q-10-14 0-26M110 70q-10-14 0-26" stroke="#c9c9c2" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  glass: (a) =>
    `<svg viewBox="0 0 200 200"><path d="M58 40H142L130 172Q100 182 70 172Z" fill="#ffffffb0"/><path d="M62 72H138L130 172Q100 182 70 172Z" fill="${a[0]}"/><rect x="108" y="14" width="8" height="70" rx="4" fill="${a[1]}" transform="rotate(14 112 50)"/><circle cx="142" cy="44" r="16" fill="${a[1]}"/></svg>`,
  cake: (a) =>
    `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="158" rx="80" ry="14" fill="#fff"/><rect x="46" y="78" width="108" height="76" rx="14" fill="${a[0]}"/><rect x="46" y="108" width="108" height="14" fill="${a[1]}"/><path d="M46 92q14-26 54-18t54 18v-6q-8-30-54-30t-54 30Z" fill="${a[1]}"/><circle cx="100" cy="52" r="9" fill="#e5484d"/></svg>`,
};
/* ===== MENU: [name, description, price, art, [colors], tint, optional photo URL] ===== */
const MENU = {
  Mains: [
    [
      "Grilled chicken",
      "Marinated overnight, served with rice and salad.",
      9,
      "plate",
      ["#F5E6B8", "#B0631C"],
      "#FFF0D2",
    ],
    [
      "Beef suqaar",
      "Pan-fried beef cubes with peppers and onion.",
      10,
      "plate",
      ["#F3E2B0", "#7A3B1A"],
      "#FDE7DA",
    ],
    [
      "Spiced rice with lamb",
      "Fragrant rice with slow-cooked lamb.",
      12,
      "plate",
      ["#E8C46A", "#8C4A22"],
      "#FFF3C9",
    ],
    [
      "Grilled fish",
      "Catch of the day with lemon and herbs.",
      13,
      "fish",
      ["#E39A5A", "#C9743A"],
      "#DDF1F0",
    ],
  ],
  Starters: [
    [
      "Samosas",
      "Three crisp pastries with spiced filling.",
      4,
      "samosa",
      ["#E3A64F", "#C9822F"],
      "#FFEBD0",
    ],
    [
      "Lentil soup",
      "Warm, lightly spiced, with fresh bread.",
      3.5,
      "bowl",
      ["#E3A63F", "#B8741C"],
      "#FFF1CF",
    ],
    [
      "House salad",
      "Greens, tomato, cucumber and lime.",
      4,
      "bowl",
      ["#7DBB5B", "#e5484d"],
      "#E4F3DC",
    ],
  ],
  Drinks: [
    [
      "Fresh mango juice",
      "Pressed to order.",
      3,
      "glass",
      ["#FFB224", "#FF8A00"],
      "#FFEFC9",
    ],
    [
      "Avocado and milk",
      "Thick, cold and lightly sweet.",
      3.5,
      "glass",
      ["#A8CF6A", "#5E9E3C"],
      "#E8F4D4",
    ],
    [
      "Spiced tea",
      "Black tea with cardamom and ginger.",
      1.5,
      "glass",
      ["#B8651F", "#E6A24C"],
      "#F6E4D2",
    ],
  ],
  Desserts: [
    [
      "Date cake",
      "Warm, with vanilla ice cream.",
      4.5,
      "cake",
      ["#8C5230", "#F2D8B0"],
      "#F5E3D3",
    ],
    [
      "Fruit plate",
      "Seasonal fruit, cut at the table.",
      4,
      "bowl",
      ["#FFD36B", "#E5484D"],
      "#FFE9E4",
    ],
  ],
};
const pic = (kind, col, photo, alt) =>
  photo ? `<img src="${photo}" alt="${alt}" loading="lazy">` : ART[kind](col);

/* ===== RENDER ===== */
const tabsEl = document.getElementById("tabs"),
  itemsEl = document.getElementById("items");
function show(cat) {
  tabsEl
    .querySelectorAll(".tab")
    .forEach((b) => b.setAttribute("aria-pressed", b.textContent === cat));
  itemsEl.innerHTML = MENU[cat]
    .map(
      (i) =>
        `<article class="card"><div class="thumb" style="background:${i[5]}">${pic(i[3], i[4], i[6], i[0])}</div><div class="b"><div class="t"><h3>${i[0]}</h3><span class="price">$${i[2].toFixed(2)}</span></div><p>${i[1]}</p><button class="add" type="button" data-id="${i[0]}">Add to order</button></div></article>`,
    )
    .join("");
}
Object.keys(MENU).forEach((c) => {
  const b = document.createElement("button");
  b.className = "tab";
  b.type = "button";
  b.textContent = c;
  b.onclick = () => show(c);
  tabsEl.appendChild(b);
});
show("Mains");
document.getElementById("heroImg").innerHTML = pic(
  "plate",
  ["#F5E6B8", "#B0631C"],
  PHOTOS.hero,
  "Signature dish at Dio",
);
document.getElementById("collage").innerHTML = [
  ["fish", ["#E39A5A", "#C9743A"], "#DDF1F0"],
  ["glass", ["#FFB224", "#FF8A00"], "#FFEFC9"],
  ["cake", ["#8C5230", "#F2D8B0"], "#F5E3D3"],
]
  .map(
    (c, i) =>
      `<div style="background:${c[2]}">${pic(c[0], c[1], PHOTOS.about[i], "Dio restaurant")}</div>`,
  )
  .join("");

/* ===== NAV ===== */
const hdr = document.getElementById("hdr"),
  menuBtn = document.getElementById("menuBtn"),
  links = document.getElementById("links");
const onScroll = () => hdr.classList.toggle("scrolled", scrollY > 30);
onScroll();
addEventListener("scroll", onScroll, { passive: true });
menuBtn.onclick = () => {
  const o = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", o);
};
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  }
});

/* ===== OPEN NOW ===== */
(() => {
  const n = new Date(),
    h = HOURS[n.getDay()],
    t = n.getHours() + n.getMinutes() / 60,
    o = h && t >= h[0] && t < h[1];
  document.getElementById("dot").classList.add(o ? "on" : "off");
  document.getElementById("statusText").textContent = o
    ? `Open now until ${h[1]}:00`
    : "Closed now. See opening hours below";
})();

/* ===== RESERVATION ===== */
const form = document.getElementById("form"),
  msg = document.getElementById("msg"),
  done = document.getElementById("done");
form.date.min = new Date().toISOString().split("T")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "";
  let ok = true;
  ["name", "phone", "date", "time"].forEach((k) => {
    const bad = !form[k].value.trim();
    form[k].classList.toggle("bad", bad);
    if (bad) ok = false;
  });
  if (!ok) {
    msg.textContent = "Please fill in your name, phone, date and time.";
    return;
  }
  const v = Object.fromEntries(new FormData(form)),
    nm = v.name.replace(/[<>&]/g, "");
  const text = `Hello Dio, I would like a table for ${v.guests} on ${v.date} at ${v.time}. Name: ${nm}. Phone: ${v.phone}.`;
  done.innerHTML = `<h3>Thanks, ${nm}.</h3><p>Your request for ${v.guests} guests on ${v.date} at ${v.time} is ready. Send it on WhatsApp to confirm.</p><p><a class="btn" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Send on WhatsApp</a></p>`;
  done.hidden = false;
  form.hidden = true;
});
/* ===== ORDER CART ===== */
const PRICES = {};
Object.values(MENU)
  .flat()
  .forEach((i) => (PRICES[i[0]] = i[2]));
const cart = {}; // dish name -> quantity
const $ = (id) => document.getElementById(id);
const money = (n) => "$" + n.toFixed(2);
function draw() {
  let total = 0,
    count = 0;
  const names = Object.keys(cart);
  $("lines").innerHTML = names.length
    ? names
        .map((n) => {
          const q = cart[n],
            s = q * PRICES[n];
          total += s;
          count += q;
          return `<div class="ln"><b>${n}</b><span>${money(s)}</span><div class="qty"><button type="button" data-d="-1" data-id="${n}" aria-label="Remove one ${n}">−</button><span>${q}</span><button type="button" data-d="1" data-id="${n}" aria-label="Add one ${n}">+</button></div></div>`;
        })
        .join("")
    : `<p class="empty">Your order is empty. Add dishes from the menu.</p>`;
  $("total").textContent = money(total);
  $("cnt").textContent = count;
}
function toggle(on) {
  $("drawer").classList.toggle("on", on);
  $("shade").classList.toggle("on", on);
  $("drawer").setAttribute("aria-hidden", !on);
}
$("fab").onclick = () => toggle(true);
$("close").onclick = $("shade").onclick = () => toggle(false);
addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggle(false);
});
let tt;
function toast(t) {
  const e = $("toast");
  e.textContent = t;
  e.classList.add("on");
  clearTimeout(tt);
  tt = setTimeout(() => e.classList.remove("on"), 1400);
}
itemsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".add");
  if (!b) return;
  const n = b.dataset.id;
  cart[n] = (cart[n] || 0) + 1;
  draw();
  toast(n + " added to your order");
});
$("lines").addEventListener("click", (e) => {
  const b = e.target.closest("[data-d]");
  if (!b) return;
  const n = b.dataset.id;
  cart[n] += +b.dataset.d;
  if (cart[n] < 1) delete cart[n];
  draw();
});
$("send").onclick = () => {
  const names = Object.keys(cart),
    m = $("omsg");
  m.style.color = "#e5484d";
  m.textContent = "";
  if (!names.length) {
    m.textContent = "Add at least one dish.";
    return;
  }
  const nm = $("oname").value.trim(),
    ty = $("otype").value,
    ad = $("oaddr").value.trim(),
    note = $("onote").value.trim();
  if (!nm) {
    m.textContent = "Please enter your name.";
    return;
  }
  if (ty === "Delivery" && !ad) {
    m.textContent = "Please enter your delivery address.";
    return;
  }
  let total = 0;
  const lines = names.map((n) => {
    total += cart[n] * PRICES[n];
    return `${cart[n]} x ${n} (${money(cart[n] * PRICES[n])})`;
  });
  const text = `New order from ${nm}\nType: ${ty}${ty === "Delivery" ? "\nAddress: " + ad : ""}\n\n${lines.join("\n")}\n\nTotal: ${money(total)}${note ? "\nNote: " + note : ""}`;
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  const w = window.open(url, "_blank");
  if (!w) {
    m.style.color = "var(--ink)";
    m.innerHTML = `<a href="${url}" target="_blank" rel="noopener">Tap here to open WhatsApp and send your order</a>`;
  }
};
draw();
document.getElementById("year").textContent = new Date().getFullYear();
