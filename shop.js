// YOSHEN ショップ（商品データ・カート・メール注文・準備中の切り替え）
(function(){
// ===== ここだけ書き換えればOK =====
const SHOP = {
  comingSoon: false,       // true にすると「準備中」だけを表示（2026-10-28 開店）
  email: "yoshen.nft@gmail.com",
};

// 商品一覧。price は円の数字（未定なら null で「お問い合わせ」表示）。status: "" / "sold" / "live"
const ORIGINALS = [
  { file:"blackcat",        title:"BLACK CAT",   year:"2026", medium:"Acrylic on canvas", size:null, price:null, status:"",
    desc:"水色の地に黒猫の横顔。黒の中に青と白を差して、毛の流れを作っています。瞳の黄色だけが強い色。" },
  { file:"chimp",           title:"CHIMPANZEE",  year:"2026", medium:"Acrylic on canvas", size:null, price:null, status:"",
    desc:"朱色の地に、手をあごに当てて考えこむチンパンジー。黒い毛に青を混ぜ、肩に黄色を一筆。" },
  { file:"tiger_panel",     title:"TIGER",       year:"2026", medium:"Acrylic on plywood panel", size:null, price:null, status:"live",
    desc:"イオンモール北花田でのライブペイントで、合板パネルに描いたピンクの虎。黄色の地にオレンジの三角が散ります。" },
  { file:"polarbear",       title:"POLAR BEARS", year:"2026", medium:"Acrylic on paper", size:null, price:null, status:"",
    desc:"ピンクの地に白くまの親子。白い毛をグレーと青で起こし、黒い鼻と爪だけを締めています。" },
  { file:"turtle",          title:"HONU",        year:"2026", medium:"Acrylic on paper", size:null, price:null, status:"",
    desc:"水色の地に、甲羅と顔を赤と黒で組み直したウミガメ。" },
  { file:"caracal",         title:"CARACAL",     year:"2026", medium:"Acrylic on paper", size:null, price:null, status:"",
    desc:"黄色の地に、黒い房のついた長い耳のカラカル。筆の跡を残したまま、顔だけを濃く描きこんでいます。" },
  { file:"dalmatian",       title:"DALMATIAN",   year:"2026", medium:"Acrylic on paper", size:null, price:null, status:"",
    desc:"若草色の地にダルメシアンの横顔。白い毛を厚く盛り、黒い斑点を上から置いています。" },
  { file:"gorilla_acrylic", title:"GORILLA",     year:"2026", medium:"Acrylic on panel", size:null, price:null, status:"",
    desc:"オレンジの地に、上を見上げるゴリラの横顔。黒に青を混ぜて、額と頬に光を置いています。" },
  { file:"tanuki_bag",      title:"TANUKI",      year:"2026", medium:"Acrylic gouache on a snack bag", size:null, price:null, status:"",
    desc:"お菓子の「BIG BAG」の袋に描いたタヌキ。パッケージの文字を地にして、顔だけを置いています。" },
  { file:"pig",             title:"PIG",         year:"2026", medium:"Acrylic on canvas", size:null, price:null, status:"",
    desc:"緑の地に、鼻を上げた豚。ピンクの中に水色と黄色を混ぜ、厚塗りで肌の張りを出しています。" },
];
const DIGI = [
  { file:"gorilla", title:"GORILLA", year:"2025", medium:"Digital / Data + NFT", price:null, status:"", desc:"青一色の地に、赤・紫・黄・緑で組み立て直したゴリラの顔。" },
  { file:"wolf",    title:"WOLF",    year:"2025", medium:"Digital / Data + NFT", price:null, status:"", desc:"ベージュの地に、笑う狼。毛並みに蛍光の色を差しています。" },
  { file:"bulldog", title:"BULLDOG", year:"2025", medium:"Digital / Data + NFT", price:null, status:"", desc:"黄色の地に緑のブルドッグ。ピンクの眼鏡とハーフトーンのドット。" },
  { file:"tiger",   title:"TIGER",   year:"2025", medium:"Digital / Data + NFT", price:null, status:"", desc:"深緑の闇に、黄と黒の縞、ピンクの棘。" },
  { file:"shark",   title:"SHARK",   year:"",     medium:"Digital / NFT on Foundation", price:null, status:"", desc:"青い地に、牙をむいたサメ。黒い体の上を極彩色の線が走ります。Foundationで NFT として発行しています。" },
];

// ===== 以下はしくみ =====
const $ = id => document.getElementById(id);
const yen = n => "¥" + n.toLocaleString("ja-JP");
const priceText = p => p.status === "sold" ? "Sold" : p.price == null ? "価格はお問い合わせ" : yen(p.price);
const meta = p => [p.year, p.medium, p.size].filter(Boolean).join(" — ");
const all = () => [...ORIGINALS, ...DIGI];
const find = k => all().find(p => p.file === k);

// 準備中モード
if (SHOP.comingSoon) { $("soon").hidden = false; $("shopMain").hidden = true; $("fab").hidden = true; return; }
$("soon").hidden = true; $("shopMain").hidden = false; $("fab").hidden = false;
$("shopState").textContent = "Open — originals and data";
$("shopLead").textContent = "原画はすべて一点もの。ご注文はメールで承り、お支払い方法と送料は返信でご案内します。";

// カート（このブラウザの中だけに保存）
let cart = [];
try { cart = JSON.parse(localStorage.getItem("yoshen_cart") || "[]").filter(k => find(k)); } catch (e) { cart = []; }
const save = () => { try { localStorage.setItem("yoshen_cart", JSON.stringify(cart)); } catch (e) {} };
const inCart = p => cart.includes(p.file);
function toast(msg){ const t = $("toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("on"), 1900); }
function add(p){
  if (p.status === "sold") return;
  if (!inCart(p)) { cart.push(p.file); save(); }
  renderCart(); renderGrids(); toast(`${p.title} をカートに入れました`);
}
function remove(k){ cart = cart.filter(x => x !== k); save(); renderCart(); renderGrids(); }

function orderText(){
  const lines = cart.map(find).filter(Boolean).map(p => `・${p.title}（${meta(p)}）${p.price != null ? " " + yen(p.price) : ""}`);
  return `YOSHEN 注文希望\n\n${lines.join("\n")}\n\nお名前：\n送り先：\n電話番号：\nご希望・ご質問：\n`;
}
function renderCart(){
  const items = cart.map(find).filter(Boolean);
  $("fabCount").textContent = items.length; $("fab").classList.toggle("has", items.length > 0);
  $("cartList").innerHTML = items.length
    ? items.map(p => `<div class="row"><img src="images/${p.file}_thumb.jpg" alt=""><div><b>${p.title}</b><small>${meta(p)}</small><small>${priceText(p)}</small></div><button class="rm" type="button" data-k="${p.file}">Remove</button></div>`).join("")
    : `<div class="empty">まだ何も入っていません。</div>`;
  $("cartList").querySelectorAll(".rm").forEach(b => b.addEventListener("click", () => remove(b.dataset.k)));
  const total = items.reduce((s, p) => s + (p.price || 0), 0), unknown = items.some(p => p.price == null);
  $("cartSum").textContent = items.length ? (unknown ? (total ? yen(total) + " ＋ お問い合わせ分" : "お問い合わせ") : yen(total)) : "—";
  const ob = $("orderBtn");
  ob.href = `mailto:${SHOP.email}?subject=${encodeURIComponent("注文希望（" + items.map(p => p.title).join("、") + "）")}&body=${encodeURIComponent(orderText())}`;
  ob.style.pointerEvents = items.length ? "" : "none"; ob.style.opacity = items.length ? "" : ".4";
}
$("copyOrder").addEventListener("click", () => {
  const text = `宛先: ${SHOP.email}\n\n` + orderText();
  const fallback = () => { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("注文内容をコピーしました"); } catch (e) { toast("コピーできませんでした"); } ta.remove(); };
  try { navigator.clipboard.writeText(text).then(() => toast("注文内容をコピーしました"), fallback); } catch (e) { fallback(); }
});

// 商品カード
function card(p){
  const d = document.createElement("div"); d.className = "pd";
  const tag = p.status === "sold" ? `<span class="tag sold">Sold</span>` : p.status === "live" ? `<span class="tag">Live paint</span>` : "";
  const label = p.status === "sold" ? "売約済み" : inCart(p) ? "カートに入っています" : "カートに入れる";
  d.innerHTML = `<div class="im"><img src="images/${p.file}_thumb.jpg" alt="${p.title}" loading="lazy" width="600" height="750"><button class="view" type="button" data-cur="View" aria-label="${p.title} の詳細を見る"></button>${tag}</div>
    <div class="info"><b>${p.title}</b><span class="price ${p.price == null ? "ask" : ""}">${priceText(p)}</span><small>${meta(p)}</small></div>
    <button class="pill lt add" type="button" ${p.status === "sold" || inCart(p) ? "disabled" : ""}>${label}</button>`;
  d.querySelector(".view").addEventListener("click", () => openDetail(p));
  d.querySelector(".add").addEventListener("click", () => add(p));
  return d;
}
function renderGrids(){
  const go = $("gridOriginals"), gd = $("gridDigital");
  go.innerHTML = ""; gd.innerHTML = "";
  ORIGINALS.forEach(p => go.appendChild(card(p))); DIGI.forEach(p => gd.appendChild(card(p)));
}

// 詳細（拡大）
const box = $("slb");
let lastFocus = null;
function openDetail(p){
  lastFocus = document.activeElement;
  $("slbImg").src = `images/${p.file}.jpg`; $("slbImg").alt = p.title;
  $("slbTitle").textContent = p.title; $("slbMeta").textContent = meta(p);
  const pr = $("slbPrice"); pr.textContent = priceText(p); pr.className = "price" + (p.price == null || p.status === "sold" ? " ask" : "");
  $("slbDesc").textContent = p.desc;
  const act = $("slbAct"); act.innerHTML = "";
  if (p.status !== "sold") {
    const b = document.createElement("button"); b.type = "button"; b.className = "pill ink"; b.textContent = inCart(p) ? "カートに入っています" : "カートに入れる"; b.disabled = inCart(p);
    b.addEventListener("click", () => { add(p); b.textContent = "カートに入っています"; b.disabled = true; }); act.appendChild(b);
  }
  const m = document.createElement("a"); m.className = "pill lt"; m.textContent = "この作品について問い合わせる";
  m.href = `mailto:${SHOP.email}?subject=${encodeURIComponent("作品について（" + p.title + "）")}`; act.appendChild(m);
  box.hidden = false; document.body.style.overflow = "hidden"; $("slbClose").focus();
}
function closeDetail(){ box.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
$("slbClose").addEventListener("click", closeDetail);
box.addEventListener("click", e => { if (e.target === box) closeDetail(); });

// カートの引き出し
const drawer = $("drawer");
function openCart(){ renderCart(); drawer.hidden = false; document.body.style.overflow = "hidden"; $("drawerX").focus(); }
function closeCart(){ drawer.hidden = true; document.body.style.overflow = ""; $("fab").focus(); }
$("fab").addEventListener("click", openCart);
$("drawerX").addEventListener("click", closeCart);
$("drawerBg").addEventListener("click", closeCart);
document.addEventListener("keydown", e => { if (e.key !== "Escape") return; if (!drawer.hidden) closeCart(); if (!box.hidden) closeDetail(); });

$("commBtn").href = `mailto:${SHOP.email}?subject=${encodeURIComponent("制作依頼の相談")}&body=${encodeURIComponent("希望する内容（似顔絵 / ペットの肖像 / ライブペイント）：\n原画かデータか：\n希望サイズ：\n希望納期：\n参考写真は添付します。\n")}`;
renderGrids(); renderCart();
})();
