// YOSHEN 共通スクリプト（作品データ・拡大表示・ローダー・作品の輪・文字の塗り・写真の帯）
// ===== ここだけ書き換えればOK =====
const SITE = {
  nftUrl: "",   // NFTミントサイトのURL（空ならボタンは「準備中」）
  instagram: "https://www.instagram.com/yoshen_jp/",
  email: "yoshen.nft@gmail.com",
};

// デジタル作品（images/ に file.jpg と file_thumb.jpg を置く）
const DIGITAL = [
  { file:"leopard", title:"LEOPARD", year:"2026", medium:"Digital painting / iPad", ratio:"1131/1600",
    short:"白い地に、ピザをくわえたヒョウ。",
    desc:"白い地に、ピザをひと切れくわえたヒョウ。黒い斑点と輪郭線だけで毛並みを取り、オレンジの肌色を重ねています。" },
  { file:"wolf_bloom", title:"WOLF & BLOOM", year:"2026", medium:"Digital painting / iPad",
    short:"水色の地に、吠える狼と赤い花の房。",
    desc:"水色の地に、牙をむいて吠える灰色の狼。首もとから赤とオレンジの花の房が伸び、左に黒いサインが走ります。" },
  { file:"tiger_sticker", title:"TIGER STICKER", year:"2026", medium:"Digital painting / iPad", ratio:"3/4",
    short:"黄色の地に、ステッカーのような虎の横顔。",
    desc:"黄色の地に、水色と白の縁取りで切り抜いた虎の横顔。オレンジの毛にピンクの縞を重ね、ステッカーのように浮かせています。" },
  { file:"flamingo", title:"FLAMINGO", year:"2025", medium:"Digital painting / iPad", ratio:"1600/967",
    short:"サーモンピンクの地に、白黒のフラミンゴ。",
    desc:"サーモンピンクの地に、白と黒の線だけで描いたフラミンゴの頭。くちばしの先に小さなハートをひとつ。" },
  { file:"figure", title:"FIGURE", year:"2025", medium:"Digital painting / iPad",
    short:"群青の地に、緑の顔と極彩色の走り書き。",
    desc:"群青の地にピンクの斜線。緑の顔の上を、紫・水色・黄・オレンジの走り書きが渦を巻いて重なっていきます。" },
  { file:"gorilla", title:"GORILLA", year:"2025", medium:"Digital painting / iPad",
    short:"青一色の地に、赤・紫・黄・緑で組み直した顔。",
    desc:"青一色の地に、赤・紫・黄・緑で組み立て直したゴリラの顔。白い縁取りで、ステッカーのように浮かせています。" },
  { file:"wolf", title:"WOLF", year:"2025", medium:"Digital painting / iPad",
    short:"笑う狼。毛並みに差す蛍光の線。",
    desc:"ベージュの地に、笑う狼。毛並みの一本一本に蛍光の色を差し、左上に赤いハートをひとつ。" },
  { file:"bulldog", title:"BULLDOG", year:"2025", medium:"Digital painting / iPad",
    short:"黄の地に緑のブルドッグ。ピンクの眼鏡とドット。",
    desc:"黄色の地に緑のブルドッグ。ピンクの眼鏡、ハーフトーンのドット、青い蝶ネクタイ。コミックの文法で描いた一枚。" },
  { file:"shark", title:"SHARK", year:"NFT on Foundation", medium:"Digital painting / iPad", ratio:"3/2",
    short:"青い地に、極彩色の線で描いたサメ。Foundationで NFT 化。",
    desc:"青い地に、牙をむいたサメ。黒い体の上をオレンジ、ピンク、緑、水色の線が走り、口の中だけが暗い。NFTプラットフォーム Foundation で作品として発行しています。" },
];

// フィジカル作品（新しい順。追加するときはここに1行足して images/ に画像を置く）
const PHYSICAL = [
  { file:"blackcat", title:"BLACK CAT", year:"2026", medium:"Acrylic on canvas", w:600, h:800,
    short:"水色の地に、黒猫の横顔。", desc:"水色の地に黒猫の横顔。黒の中に青と白を差して、毛の流れを作っています。瞳の黄色だけが強い色。" },
  { file:"chimp", title:"CHIMPANZEE", year:"2026", medium:"Acrylic on canvas", w:533, h:800,
    short:"朱色の地に、考えこむチンパンジー。", desc:"朱色の地に、手をあごに当てて考えこむチンパンジー。黒い毛に青を混ぜ、肩に黄色を一筆。" },
  { file:"tiger_panel", title:"TIGER", year:"2026", medium:"Acrylic on plywood panel / Live paint", w:600, h:800,
    short:"ライブペイントで描いた、ピンクの虎。", desc:"2026年9月、イオンモール北花田でのライブペイントで合板パネルに描いたピンクの虎。黄色の地に、オレンジの三角が火花のように散ります。右下にサイン。" },
  { file:"polarbear", title:"POLAR BEARS", year:"2026", medium:"Acrylic on paper", w:600, h:800,
    short:"ピンクの地に、白くまの親子。", desc:"ピンクの地に白くまの親子。白い毛をグレーと青で起こし、黒い鼻と爪だけを締めています。" },
  { file:"turtle", title:"HONU", year:"2026", medium:"Acrylic on paper", w:574, h:800,
    short:"水色の地に、赤と黒のウミガメ。", desc:"スケッチブックに描いたウミガメ。水色の地に、甲羅と顔を赤と黒で組み直しました。" },
  { file:"caracal", title:"CARACAL", year:"2026", medium:"Acrylic on paper", w:570, h:800,
    short:"黄色の地に、耳の長いカラカル。", desc:"黄色の地に、黒い房のついた長い耳のカラカル。筆の跡を残したまま、顔だけを濃く描きこんでいます。" },
  { file:"dalmatian", title:"DALMATIAN", year:"2026", medium:"Acrylic on paper", w:560, h:800,
    short:"若草色の地に、ダルメシアンの横顔。", desc:"若草色の地にダルメシアンの横顔。白い毛を厚く盛り、黒い斑点を上から置いています。" },
  { file:"gorilla_acrylic", title:"GORILLA", year:"2026", medium:"Acrylic on panel", w:600, h:800,
    short:"オレンジの地に、見上げるゴリラ。", desc:"オレンジの地に、上を見上げるゴリラの横顔。黒に青を混ぜて、額と頬に光を置いています。" },
  { file:"tanuki_bag", title:"TANUKI", year:"2026", medium:"Acrylic gouache on a snack bag", w:707, h:800,
    short:"お菓子の袋に、タヌキ。", desc:"お菓子の「BIG BAG」の袋に、アクリルガッシュで描いたタヌキ。パッケージの文字を地にして、顔だけを置いています。制作の様子は動画にも残しています。" },
  { file:"pig", title:"PIG", year:"2026", medium:"Acrylic on canvas", w:800, h:600,
    short:"緑の地に、上を向く豚。", desc:"緑の地に、鼻を上げた豚。ピンクの中に水色と黄色を混ぜ、厚塗りで肌の張りを出しています。" },
];

// ===== 以下はしくみ =====
document.documentElement.classList.add("js");
window.__yoshenOk = true;

// ページを開いたら、必ず一番上から（前回の位置やリンク末尾の目印へは自動で飛ばない）
(function(){
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  let touched = false;
  const mark = () => { touched = true; };
  ["wheel", "touchmove", "keydown", "pointerdown"].forEach(ev => addEventListener(ev, mark, { passive: true, once: true }));
  const top = () => { if (!touched) scrollTo(0, 0); };
  top();
  addEventListener("DOMContentLoaded", top);
  addEventListener("load", () => { top(); setTimeout(top, 60); });
  addEventListener("pageshow", e => { if (e.persisted) { touched = false; scrollTo(0, 0); } });
})();
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const clamp01 = v => Math.max(0, Math.min(1, v));
// SGC の表記はロゴ（各ページの #sgc-mark を使う）
const SGC_M = '<svg class="sgcm" role="img" aria-label="SGC"><use href="#sgc-mark"/></svg>';
const nameHTML = t => t === "SGC" ? SGC_M : t;
const pad2 = n => String(n).padStart(2, "0");

// 作品の図
function fig(w, i, list, square){
  const f = document.createElement("figure"); f.className = "wk";
  const attrs = square ? 'width="640" height="640"' : `width="${w.w}" height="${w.h}"`;
  const ratio = w.ratio ? ` style="aspect-ratio:${w.ratio}"` : "";
  f.innerHTML = `<button type="button" aria-label="${w.title} を拡大" data-cur="Open"><div class="im clip c${i % 2 + 1}"${ratio}><img src="images/${w.file}_thumb.jpg" alt="${w.title}" loading="lazy" ${attrs}></div></button>
    <figcaption><b>${w.title}</b><span class="y">${w.year}</span><span class="d">${w.short}</span></figcaption>`;
  f.querySelector("button").addEventListener("click", () => openLb(list, i));
  return f;
}
const dg = document.getElementById("digitalGrid");
if (dg) DIGITAL.forEach((w, i) => dg.appendChild(fig(w, i, DIGITAL, true)));
const pc = document.getElementById("physicalCols");
if (pc) PHYSICAL.forEach((w, i) => pc.appendChild(fig(w, i, PHYSICAL, false)));

// 拡大表示
const lb = document.getElementById("lb");
let curList = DIGITAL, cur = 0, lastFocus = null;
function show(i){
  cur = (i + curList.length) % curList.length;
  const w = curList[cur];
  const img = document.getElementById("lbImg");
  img.src = `images/${w.file}.jpg`; img.alt = w.title;
  document.getElementById("lbNo").textContent = `${pad2(cur + 1)} / ${pad2(curList.length)}`;
  document.getElementById("lbTitle").textContent = w.title;
  document.getElementById("lbMeta").textContent = [w.year, w.medium].filter(Boolean).join(" — ");
  document.getElementById("lbDesc").textContent = w.desc;
}
function openLb(list, i){ lastFocus = document.activeElement; curList = list; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; document.getElementById("lbClose").focus(); }
function closeLb(){ lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
if (lb) {
  document.getElementById("lbClose").addEventListener("click", closeLb);
  document.getElementById("lbPrev").addEventListener("click", () => show(cur - 1));
  document.getElementById("lbNext").addEventListener("click", () => show(cur + 1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
}

// トップで選んだ作品を、移った先のページのタイトルのすぐ下に大きく置く（リンク末尾の #作品名 で受け取る）
const EXTRA_PICKS = [
  { file:"live_painting", title:"LIVE PAINT", year:"2026", medium:"Aeon Mall Kitahanada",
    desc:"イオンモール北花田のアトリウムで、合板パネルにピンクの虎を描き始めたところ。" },
];
(function(){
  const key = decodeURIComponent(location.hash.slice(1));
  const head = document.querySelector(".ph");
  if (!key || !head) return;
  // 問い合わせのカードから来たときは、問い合わせ欄をタイトルのすぐ下へ
  const sectionByKey = document.getElementById(key);
  if (key === "contact" && sectionByKey) { head.after(sectionByKey); return; }
  let list = null, idx = DIGITAL.findIndex(w => w.file === key);
  if (idx >= 0) list = DIGITAL; else { idx = PHYSICAL.findIndex(w => w.file === key); if (idx >= 0) list = PHYSICAL; }
  const w = list ? list[idx] : EXTRA_PICKS.find(x => x.file === key);
  if (!w) return;
  const sec = document.createElement("section"); sec.className = "pick wrap"; sec.setAttribute("aria-label", "選んだ作品");
  sec.innerHTML = `<div class="g"><div class="im clip c1"><img src="images/${w.file}.jpg" alt="${w.title}"></div>
    <div class="tx"><p class="lbl">Selected</p><h2>${nameHTML(w.title)}</h2><p class="lbl" style="margin-top:10px">${[w.year, w.medium].filter(Boolean).join(" — ")}</p><p class="desc">${w.desc}</p></div></div>`;
  if (list && document.getElementById("lb")) {
    const b = document.createElement("button"); b.type = "button"; b.className = "pill lt"; b.textContent = "拡大して見る";
    b.addEventListener("click", () => openLb(list, idx)); sec.querySelector(".tx").appendChild(b);
  }
  head.after(sec);
  scrollTo(0, 0);
})();

// NFTボタン
const nftBtn = document.getElementById("nftBtn");
if (nftBtn && SITE.nftUrl) nftBtn.href = SITE.nftUrl;
else if (nftBtn) { nftBtn.textContent = "ミントサイト 準備中"; nftBtn.setAttribute("aria-disabled", "true"); nftBtn.removeAttribute("href"); }

document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

// 作品に入り込んだ先: 同じ絵が画面いっぱいに残り、奥へ抜けながら消えてページが現れる
(function(){
  let src = null;
  try { src = sessionStorage.getItem("yoshen-enter"); sessionStorage.removeItem("yoshen-enter"); } catch (e) {}
  if (!src || reduce) return;
  const a = document.createElement("div"); a.className = "arrive"; a.setAttribute("aria-hidden", "true");
  if (src.startsWith("color:")) { a.classList.add("solid"); a.style.background = src.slice(6); }
  else {
    // "logo:" は白地に線画のロゴ。切らずに全体を見せる
    if (src.startsWith("logo:")) { a.classList.add("logo"); src = src.slice(5); }
    const im = document.createElement("img"); im.alt = ""; im.src = src; a.appendChild(im);
  }
  document.body.appendChild(a);
  a.getBoundingClientRect(); setTimeout(() => a.classList.add("out"), 60);
  setTimeout(() => a.remove(), 1500);
})();

// トップの見出し: 2行の幅をそろえる（短い行は字間を広げて、長い行と同じ幅にする）
(function(){
  const lines = [...document.querySelectorAll(".ring .rh .ln")]; if (lines.length < 2) return;
  const balance = () => {
    const chs = lines.map(l => [...l.querySelectorAll(".ch")]);
    chs.flat().forEach(c => { c.style.marginRight = ""; });
    const width = cs => cs[cs.length - 1].getBoundingClientRect().right - cs[0].getBoundingClientRect().left;
    const ws = chs.map(width), max = Math.max(...ws);
    chs.forEach((cs, i) => {
      const gap = (max - ws[i]) / Math.max(1, cs.length - 1);
      if (gap > .5) cs.slice(0, -1).forEach(c => { c.style.marginRight = gap.toFixed(2) + "px"; });
    });
  };
  balance();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(balance);
  addEventListener("load", balance);
  addEventListener("resize", balance);
})();

// ページ移動の幕: 出るときは夜の色の幕が下からせり上がり、行き先の名前が1文字ずつばらばらに立ち上がる。
// 着いた先では、名前が上へはけ、幕が上へ抜けてページが現れる（オープニングと同じ文字の動き）。
// トップへ戻るとき（オープニングが出る）、作品の輪から入るとき（絵が広がる演出がある）、別タブ・メール・ページ内の移動では出さない。
(function(){
  const NAMES = { "digital.html": ["Chapter 01", "DIGITAL"], "physical.html": ["Chapter 02", "PHYSICAL"], "live.html": ["Chapter 03", "LIVE"],
                  "sgc.html": ["Chapter 04", "SGC"], "about.html": ["Profile", "ABOUT"], "shop.html": ["Shop", "SHOP"] };
  const root = document.documentElement;
  const build = ([lbl, name]) => {
    const pt = document.createElement("div"); pt.className = "pt"; pt.setAttribute("aria-hidden", "true");
    const word = name === "SGC" ? `<span class="lm"><span class="ll">${SGC_M}</span></span>`
      : [...name].map(c => `<span class="lm"><span class="ll">${c}</span></span>`).join("");
    pt.innerHTML = `<div class="in"><p class="lbl">${lbl}</p><p class="nm">${word}</p></div>`;
    document.body.appendChild(pt);
    // 名前を画面の幅に合わせる（短い語は高さで止める）
    const nm = pt.querySelector(".nm"); nm.style.fontSize = "100px";
    const w = nm.scrollWidth, avail = innerWidth - 2 * parseFloat(getComputedStyle(pt.querySelector(".in")).paddingLeft);
    nm.style.fontSize = Math.min(100 * avail / w, innerHeight * .42).toFixed(1) + "px";
    const ls = [...pt.querySelectorAll(".ll")];
    ls.map((l, i) => i).sort(() => Math.random() - .5).forEach((k, j) => ls[k].style.setProperty("--d", (j * .05).toFixed(2) + "s"));
    return pt;
  };
  // 着いたとき
  let key = null;
  try { key = sessionStorage.getItem("yoshen-pt"); sessionStorage.removeItem("yoshen-pt"); } catch (e) {}
  if (key && NAMES[key] && !reduce) {
    const pt = build(NAMES[key]); pt.classList.add("now", "full", "rise");   // 最初は動かさず、出ていくときの続きの姿で置く
    root.classList.remove("pt-in");
    pt.getBoundingClientRect();
    requestAnimationFrame(() => { pt.classList.remove("now"); setTimeout(() => pt.classList.add("leave"), 120); });
    setTimeout(() => pt.remove(), 1300);
  } else root.classList.remove("pt-in");
  // 出るとき
  if (reduce) return;
  document.addEventListener("click", e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]"); if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
    const href = a.getAttribute("href"); if (!href || href.startsWith("#") || /^[a-z]+:/i.test(href)) return;
    const file = href.split("#")[0].split("?")[0].split("/").pop();
    const here = location.pathname.split("/").pop() || "index.html";
    if (!NAMES[file] || file === here) return;   // トップへは幕を出さない（オープニングが出る）
    e.preventDefault();
    try { sessionStorage.setItem("yoshen-pt", file); } catch (err) {}
    const pt = build(NAMES[file]);
    pt.getBoundingClientRect();
    requestAnimationFrame(() => pt.classList.add("full"));
    setTimeout(() => pt.classList.add("rise"), 180);
    setTimeout(() => { location.href = href; }, 820);
  });
  // 「戻る」で戻ってきたとき、幕が残っていたら外す
  addEventListener("pageshow", ev => { if (ev.persisted) document.querySelectorAll(".pt").forEach(p => p.remove()); });
})();

// メールアドレスのコピー
const copyBtn = document.getElementById("copyMail");
if (copyBtn) copyBtn.addEventListener("click", () => {
  const done = t => { copyBtn.textContent = t; setTimeout(() => copyBtn.textContent = "Copy address", 1800); };
  const sel = () => { const r = document.createRange(); r.selectNodeContents(document.getElementById("mailText")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); done("Selected"); };
  try { navigator.clipboard.writeText(SITE.email).then(() => done("Copied"), sel); } catch (e) { sel(); }
});

// スマホのメニュー
const menu = document.getElementById("menu"), menuBtn = document.getElementById("menuBtn");
if (menu && menuBtn) {
  const setMenu = open => { menu.hidden = !open; menuBtn.setAttribute("aria-expanded", open); menuBtn.textContent = open ? "Close" : "Menu"; document.body.style.overflow = open ? "hidden" : ""; };
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) setMenu(false); });
  addEventListener("resize", () => { if (innerWidth > 760 && !menu.hidden) setMenu(false); });
}

// 巨大な名前を横幅ぴったりに
// 詳細ページの見出しも横幅いっぱいに（短い語は高さが出すぎないよう上限あり）
function fitOne(el, maxPx){
  const box = el.parentElement, cs = getComputedStyle(box);
  const avail = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  el.style.fontSize = "100px";
  const w = el.getBoundingClientRect().width;
  if (w > 0) el.style.fontSize = Math.min(100 * avail / w, maxPx).toFixed(2) + "px";
}
function fitMark(){
  const mk = document.getElementById("mk"); if (mk) fitOne(mk, 1e5);
  document.querySelectorAll(".ftmark .fm").forEach(el => fitOne(el, 1e5));
  document.querySelectorAll(".ph .fit").forEach(el => fitOne(el, innerWidth * 0.3));
}
fitMark();
if (document.fonts) {
  if (document.fonts.ready) document.fonts.ready.then(fitMark);
  document.fonts.addEventListener && document.fonts.addEventListener("loadingdone", fitMark);
  // 表示用の太さを先に読み込んでから測り直す
  if (document.fonts.load) Promise.all([document.fonts.load('900 100px "Archivo"', "YOSHENPHYSICALDIGT"), document.fonts.load('800 100px "Archivo"', "LIVE")]).then(fitMark, () => {});
}
addEventListener("load", fitMark);
addEventListener("resize", fitMark);

// オープニング（トップ、毎回）: 画面幅いっぱいの YOSHEN● がばらばらの順に立ち上がって上へはけ、
// 続いて ART が左から開きながら字間が詰まって現れる。下の細い線が 000→100。最後に ART が右へ抜けて、
// 奥の輪が回り込みながら落ち着き、見出しが1文字ずつばらばらの順で立ち上がる。
// 2回目からは短い版。クリック・タップ・スクロール・キーで、すぐ開く。（ほかの候補の控え: _build/opening_candidates/）
(function(){
  const ld = document.getElementById("ld");
  const chars = [...document.querySelectorAll(".ring .rh .ch")];
  // 見出しの文字は、毎回ちがう順番で立ち上がる
  const stepD = Math.min(.07, 1.1 / chars.length);   // 文字が多いほど間隔を詰めて、全体の長さをそろえる
  chars.map((c, i) => i).sort(() => Math.random() - .5).forEach((k, j) => chars[k].style.setProperty("--d", (j * stepD).toFixed(3) + "s"));
  const release = () => { document.body.classList.remove("pre"); };
  if (!ld || ld.hidden) { setTimeout(release, 60); return; }
  const short = ld.classList.contains("short");
  const inOut = t => t < .5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;   // power4.inOut
  const pad3 = n => String(Math.max(0, Math.min(100, Math.round(n)))).padStart(3, "0");
  let phase = 0, go = null;
  // 開く: 輪に知らせ、見出しを立ち上げ、終わったら幕を外す
  function opened(dur){
    try { sessionStorage.setItem("yoshen-ld", "1"); } catch (e) {}
    document.dispatchEvent(new Event("yoshen:open"));
    setTimeout(release, dur * .45);
    setTimeout(() => ld.remove(), dur + 80);
  }
  const skip = () => { if (!phase && go) go(); };
  ["pointerdown", "keydown", "wheel", "touchstart"].forEach(t => addEventListener(t, skip, { once: true, passive: true }));

  // YOSHEN● が立ち上がって一度上へはける → 続いて ART が左から開きながら字間が詰まって現れる → ART が右へ抜けて輪が見える
  const narrow = innerWidth < 760;
  const scenes = [narrow ? ["YOS", "HEN"] : ["YOSHEN"], ["ART"]];   // スマホの YOSHEN は2行にして、画面の高さも使う
  const box = document.createElement("div"); box.className = "vd";
  box.innerHTML = `<div class="stage">${scenes.map((rows, k) => `<div class="sc">${rows.map((w, r) =>
      `<p class="wm">${[...w].map(c => `<span class="lm"><span class="ll">${c}</span></span>`).join("")}${k === 0 && r === rows.length - 1 ? `<span class="dot"></span>` : ""}</p>`).join("")}</div>`).join("")}</div>
    <div class="bar"><span>000</span><i><b></b></i><span>100</span></div>
    <p class="cp"><span>Digital, physical and live painting</span><span>Osaka, Japan</span></p>`;
  ld.prepend(box);
  const stage = box.querySelector(".stage"), scs = [...box.querySelectorAll(".sc")], fill = box.querySelector(".bar b"), num = box.querySelector(".bar span");
  scs[1].classList.add("art");   // ART は立ち上がりではなく、左から右へ開きながら字間が詰まって現れる
  // それぞれの場面を、画面の幅いっぱいに合わせる（背の低い画面では高さで止める）。舞台の高さは大きいほうに合わせる
  const fit = () => {
    const avail = innerWidth - 2 * parseFloat(getComputedStyle(box).paddingLeft);
    box.classList.add("measuring");   // ART は詰まったあとの字間で測る
    scs.forEach(sc => {
      const wms = [...sc.querySelectorAll(".wm")];
      wms.forEach(w => { w.style.fontSize = "100px"; });
      const w = Math.max(...wms.map(x => x.scrollWidth));
      const fs = Math.min(100 * avail / w, innerHeight * .62 / (wms.length * .8));
      wms.forEach(x => { x.style.fontSize = fs.toFixed(2) + "px"; });
    });
    stage.style.height = Math.max(...scs.map(sc => sc.offsetHeight)) + "px";
    box.classList.remove("measuring");
  };
  fit();
  // 文字は場面ごとに、毎回ちがう順番で立ち上がり・はける
  scs.forEach(sc => {
    const ls = [...sc.querySelectorAll(".ll")], st = short ? .05 : .1;
    ls.map((l, i) => i).sort(() => Math.random() - .5).forEach((k, j) => { ls[k].style.setProperty("--d", (j * st).toFixed(2) + "s"); });
    ls.map((l, i) => i).sort(() => Math.random() - .5).forEach((k, j) => { ls[k].style.setProperty("--e", (j * st * .7).toFixed(2) + "s"); });
  });
  const sp = short ? .55 : 1;   // 短い版は全体を縮める
  const T1 = 2200 * sp, T2 = T1 + 750 * sp, DUR = T2 + 2000 * sp;   // YOSHEN がはける / ART が現れる / 終わり（ゆっくりめ）
  let t0 = 0;
  const run = now => {
    if (phase) return;
    const p = clamp01((now - t0) / DUR), e = inOut(p);
    fill.style.transform = `scaleX(${e.toFixed(4)})`; num.textContent = pad3(e * 100);
    if (p < 1) requestAnimationFrame(run); else go();
  };
  const timers = [];
  go = () => {
    if (phase) return; phase = 1;
    timers.forEach(clearTimeout);
    fill.style.transform = "scaleX(1)"; num.textContent = "100";
    scs.forEach(sc => { if (sc.classList.contains("rise")) sc.classList.add("exit"); });   // 出ている文字は上へはけ、線は消える（飛ばしたときは、まだの場面は出さない）
    ld.classList.add("exit");
    setTimeout(() => { ld.classList.add("open"); opened(1200); }, 260);
  };
  (document.fonts && document.fonts.load ? document.fonts.load('900 100px "Archivo"', "YOSHENART").catch(() => {}) : Promise.resolve()).then(() => {
    fit();
    requestAnimationFrame(() => {
      scs[0].classList.add("rise"); t0 = performance.now(); requestAnimationFrame(run);
      timers.push(setTimeout(() => scs[0].classList.add("exit"), T1));
      timers.push(setTimeout(() => scs[1].classList.add("rise"), T2));
    });
  });

})();

// トップの額: 作品がゆっくり切り替わる
(function(){
  const flip = document.getElementById("flip"); if (!flip) return;
  const items = [
    ["tiger","Tiger","Digital, 2025","digital.html"], ["turtle","Honu","Acrylic, 2026","physical.html"],
    ["gorilla","Gorilla","Digital, 2025","digital.html"], ["caracal","Caracal","Acrylic, 2026","physical.html"],
    ["wolf","Wolf","Digital, 2025","digital.html"], ["chimp","Chimpanzee","Acrylic, 2026","physical.html"],
    ["bulldog","Bulldog","Digital, 2025","digital.html"], ["polarbear","Polar bears","Acrylic, 2026","physical.html"],
    ["dalmatian","Dalmatian","Acrylic, 2026","physical.html"], ["blackcat","Black cat","Acrylic, 2026","physical.html"],
  ];
  if (reduce) return;
  items.forEach(it => { const p = new Image(); p.src = `images/${it[0]}_thumb.jpg`; });
  const img = document.getElementById("flipImg"), t = document.getElementById("flipT"), m = document.getElementById("flipM");
  let i = 0, paused = false;
  flip.addEventListener("pointerenter", () => paused = true);
  flip.addEventListener("pointerleave", () => paused = false);
  setInterval(() => {
    if (paused || document.hidden) return;
    i = (i + 1) % items.length; const [f, ti, me, href] = items[i];
    img.src = `images/${f}_thumb.jpg`; img.alt = ti; t.textContent = ti; m.textContent = me; flip.href = `${href}#${f}`;
  }, 1400);
})();

// 作品の輪: スクロールで回り、正面の作品名を下に出す
(function(){
  const ring = document.getElementById("ring"); if (!ring) return;
  const stage = document.getElementById("stage"), cyl = document.getElementById("cyl");
  const cards = [...cyl.querySelectorAll(".card")], n = cards.length, step = 360 / n;
  const capB = document.querySelector("#ringCap b"), capS = document.querySelector("#ringCap span"), cnt = document.getElementById("ringCnt");
  let R = 0, theta = 0, drift = 0, tilt = 0, tTilt = 0, last = 0, running = false, front = -1, hover = -1;
  // オープニング: 窓が開く瞬間、輪は少し小さく回り込んだ位置にいて、そこからゆっくり落ち着く
  const ldEl = document.getElementById("ld");
  let born = ldEl && !ldEl.hidden ? 0 : 1, bornT0 = 0;
  const order = cards.map((c, i) => i).sort(() => Math.random() - .5);
  const expoOut = t => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
  document.addEventListener("yoshen:open", () => { bornT0 = performance.now(); });
  // 1枚ずつの動き: h = どれだけ手前に来ているか（0〜1、ばねで行き過ぎて揺れる）
  const st = cards.map((c, i) => ({ h: 0, v: 0, ph: i * .9 }));
  function layout(){
    R = cyl.offsetWidth * n / (2 * Math.PI) * 1.3;
    cards.forEach((c, i) => c.style.transform = `rotateY(${i * step}deg) translateZ(${R}px)`);
  }
  // 選んだ絵（hover）は、大きくなって揺れながら手前へ迫ってくる＝アップ
  // PC: カーソルを乗せると選択。スマホ: 1回目のタップで選択、選択中の絵をもう一度タップで入る。
  // 選択中にスクロールしたら、すぐ選択を外す（もう一度マウスを動かすまで選ばない）。
  let lastScroll = 0, lastPointer = "mouse";
  const clearSel = () => { lastScroll = performance.now(); hover = -1; };
  addEventListener("scroll", clearSel, { passive: true });
  addEventListener("wheel", clearSel, { passive: true });
  addEventListener("touchmove", clearSel, { passive: true });
  addEventListener("pointerdown", e => { lastPointer = e.pointerType || "mouse"; if (!e.target.closest || !e.target.closest(".ring .card")) hover = -1; }, true);
  addEventListener("keydown", () => { lastPointer = "keyboard"; }, true);
  cards.forEach((c, i) => {
    c.addEventListener("pointermove", e => { if (e.pointerType === "mouse" && performance.now() - lastScroll > 180) hover = i; });
    c.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && hover === i) hover = -1; });
  });
  function progress(){ const r = ring.getBoundingClientRect(), total = ring.offsetHeight - innerHeight; return total > 0 ? clamp01(-r.top / total) : 0; }
  function frame(now){
    const dt = last ? Math.min(64, now - last) : 16; last = now;
    if (!reduce) drift += dt * 0.0035 * (hover >= 0 ? .12 : 1);   // 絵に乗っている間は回転をゆるめる
    const target = progress() * 300 + drift;
    theta += reduce ? (target - theta) : (target - theta) * 0.085;
    tilt += (tTilt - tilt) * 0.06;
    // 生まれる途中は、輪全体が勢いよく回り込みながら止まる
    let spin = 0;
    if (born < 1) {
      const T = bornT0 ? (now - bornT0) / 2400 : 0; spin = (1 - expoOut(clamp01(T))) * -step * 4;   // 4枚分回り込んでから止まる（窓の中にはちょうど1枚が正面に来る）
      if (T > 1.2) born = 1;
    }
    cyl.style.transform = `translateZ(${-R}px) rotateX(${(-7 + tilt).toFixed(2)}deg) rotateY(${(-theta - spin).toFixed(2)}deg)`;
    let best = 0, bestAbs = 999;
    const tt = now / 1000, Z = cyl.offsetWidth * 1.45;
    cards.forEach((c, i) => {
      const a = ((i * step - theta - spin) % 360 + 540) % 360 - 180;
      const bt = born >= 1 ? 1 : bornT0 ? clamp01((now - bornT0 - order[i] * 45) / 1900) : 0;
      const k = expoOut(bt), e = .72 + .28 * k, es = .8 + .2 * k;   // 輪の半径と絵の大きさ（落ち着くと1）
      const cos = Math.cos(a * Math.PI / 180);
      if (Math.abs(a) < bestAbs) { bestAbs = Math.abs(a); best = i; }
      // 目標: 乗っている絵は大きく手前へ。正面の絵は少しだけ手前へ（スマホでは大きめに）
      const s = st[i], tgt = reduce ? 0 : i === hover ? 1 : i === front ? (finePointer ? .2 : .5) : 0;
      s.v = (s.v + (tgt - s.h) * .085) * .8; s.h += s.v;    // ばね: 行き過ぎて戻る＝揺れながら近づく
      const h = s.h, hp = Math.max(0, h);
      const bob = reduce ? 0 : Math.sin(tt * 1.4 + s.ph) * 7;              // ふだんの浮き沈み
      const sway = reduce ? 0 : Math.sin(tt * 3.1 + s.ph) * 4.5 * hp;      // 近づいている間の揺れ
      const swayX = reduce ? 0 : Math.cos(tt * 2.4 + s.ph) * 3 * hp;
      const face = -a * Math.min(1, hp);                                   // 横を向いていた絵も、こちらへ向き直る
      const pull = -Math.sin(a * Math.PI / 180) * R * .5 * Math.min(1, hp); // 画面の中央へ少し寄せる
      // 輪の上の位置 → こちらへ向き直る → 中央へ寄りながら、まっすぐ手前へ
      c.style.transform = `rotateY(${i * step}deg) translateZ(${(R * e).toFixed(1)}px) rotateY(${face.toFixed(2)}deg) translateX(${pull.toFixed(1)}px) translateZ(${(h * Z).toFixed(1)}px) translateY(${(bob - hp * 14).toFixed(1)}px) rotateZ(${sway.toFixed(2)}deg) rotateX(${swayX.toFixed(2)}deg) scale(${(Math.max(0, es) * (1 + h * .3)).toFixed(3)})`;
      const op = 0.22 + 0.78 * Math.pow((cos + 1) / 2, 1.6);
      c.style.opacity = Math.max(op, Math.min(1, hp * 1.4)).toFixed(3);
    });
    if (hover >= 0) best = hover;   // 乗っている絵の名前を下に出す
    if (best !== front) {
      front = best; const d = cards[best].dataset;
      capB.innerHTML = nameHTML(d.t); capS.textContent = d.m; cnt.textContent = `${pad2(best + 1)} / ${pad2(n)}`;
    }
    if (running) requestAnimationFrame(frame);
  }
  let entering = false;
  function enter(card){
    if (entering) return; entering = true;
    const src = card.querySelector("img"), r = card.getBoundingClientRect();
    const ov = document.createElement("div"); ov.className = "enter"; ov.setAttribute("aria-hidden", "true");
    Object.assign(ov.style, { left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px" });
    if (src) {
      const im = document.createElement("img"); im.alt = ""; im.src = src.currentSrc || src.src; ov.appendChild(im);
      const full = im.src.replace("_thumb.jpg", ".jpg"), pre = new Image();
      pre.onload = () => { im.src = full; }; pre.src = full;
      try { sessionStorage.setItem("yoshen-enter", full); } catch (e) {}
    } else {
      // 文字カードは、その地色が画面いっぱいに広がる
      const bg = getComputedStyle(card).backgroundColor; ov.style.background = bg;
      try { sessionStorage.setItem("yoshen-enter", "color:" + bg); } catch (e) {}
    }
    document.body.appendChild(ov);
    card.style.visibility = "hidden"; ring.classList.add("leaving");
    ov.getBoundingClientRect();
    setTimeout(() => Object.assign(ov.style, { left: "0px", top: "0px", width: innerWidth + "px", height: innerHeight + "px" }), 20);
    setTimeout(() => ov.classList.add("deep"), 620);
    setTimeout(() => { location.href = card.getAttribute("href"); }, 1180);
  }
  cards.forEach((c, i) => c.addEventListener("click", e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    // スマホなど（マウス以外）は、まだ選んでいない絵なら、まず選んでアップにするだけ
    if (!reduce && lastPointer !== "mouse" && lastPointer !== "keyboard" && hover !== i) { e.preventDefault(); hover = i; return; }
    if (reduce || c.target === "_blank") return;
    e.preventDefault(); enter(c);
  }));
  // 「戻る」で帰ってきたときは輪を元どおりに
  addEventListener("pageshow", e => {
    if (!e.persisted) return;
    document.querySelectorAll(".enter").forEach(el => el.remove());
    ring.classList.remove("leaving"); cards.forEach(c => c.style.visibility = ""); entering = false;
  });
  layout(); addEventListener("resize", layout);
  frame(performance.now());
  if (finePointer && !reduce) stage.addEventListener("pointermove", e => { tTilt = (e.clientY / innerHeight - .5) * -8; });
  new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && !running) { running = true; last = 0; requestAnimationFrame(frame); }
    else if (!e.isIntersecting) running = false;
  })).observe(ring);
})();

// カーソルの丸（マウスのみ）: 作品の上で「View」
(function(){
  if (!finePointer || reduce) return;
  const targets = document.querySelectorAll("[data-cur]"); if (!targets.length) return;
  const c = document.createElement("div"); c.className = "cur"; c.setAttribute("aria-hidden", "true"); document.body.appendChild(c);
  let x = -300, y = -300, tx = -300, ty = -300, s = 0, ts = 0, raf = null;
  function step(){
    x += (tx - x) * .2; y += (ty - y) * .2; s += (ts - s) * .18;
    c.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) scale(${s.toFixed(3)})`;
    raf = (Math.abs(tx - x) > .3 || Math.abs(ty - y) > .3 || Math.abs(ts - s) > .005) ? requestAnimationFrame(step) : null;
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(step); };
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; if (s < .01 && ts === 0) { x = tx; y = ty; } kick(); }, { passive: true });
  targets.forEach(t => {
    t.addEventListener("pointerenter", () => { c.textContent = t.dataset.cur; ts = 1; kick(); });
    t.addEventListener("pointerleave", () => { ts = 0; kick(); });
  });
})();

// 文字の塗り: スクロールに合わせて、一文字ずつ濃くなる
const fills = [...document.querySelectorAll("[data-fill]")].map(el => {
  const text = el.textContent.trim(); el.setAttribute("aria-label", text);
  // 改行（<br>）はそのまま残し、文字だけを1字ずつに分ける
  const nodes = [...el.childNodes], chars = []; el.textContent = "";
  nodes.forEach(n => {
    if (n.nodeName === "BR") { el.appendChild(document.createElement("br")); return; }
    [...n.textContent.replace(/\s*\n\s*/g, "")].forEach(ch => { const s = document.createElement("span"); s.className = "c"; s.textContent = ch; s.setAttribute("aria-hidden", "true"); el.appendChild(s); chars.push(s); });
  });
  el.classList.add("fill");
  return { el, chars, k: -1 };
});
function paintFills(){
  const vh = innerHeight;
  fills.forEach(f => {
    const r = f.el.getBoundingClientRect();
    const p = reduce ? 1 : clamp01((vh * 0.88 - r.top) / (r.height + vh * 0.3));
    const k = Math.round(p * f.chars.length);
    if (k === f.k) return; f.k = k;
    f.chars.forEach((c, i) => c.classList.toggle("on", i < k));
  });
}
if (fills.length) { paintFills(); addEventListener("scroll", paintFills, { passive: true }); addEventListener("resize", paintFills); }

// 出現（少し下から上がる）
(function(){
  const els = document.querySelectorAll(".en, .wk, .ph .sub, .lv .main, .lv .txt, .lv .sub, .ev .txt, .ev .ph2, .sg > *, .ab .txt, .ab .pics, .band .body, .strip .cap");
  const groups = new Map();
  els.forEach(el => {
    const n = groups.get(el.parentElement) || 0; groups.set(el.parentElement, n + 1);
    el.classList.add("rv"); el.style.setProperty("--d", (Math.min(n, 4) * 0.08) + "s");
  });
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add("in"));
})();

// 写真の帯: 指のスワイプ（タッチ）とマウスのドラッグで横に流す
const scroller = document.getElementById("scroller");
if (scroller) (function(){
  let down = false, sx = 0, sl = 0, moved = false;
  scroller.addEventListener("pointerdown", e => { if (e.pointerType === "touch") return; down = true; moved = false; sx = e.clientX; sl = scroller.scrollLeft; scroller.classList.add("drag"); scroller.setPointerCapture(e.pointerId); });
  scroller.addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 3) moved = true; scroller.scrollLeft = sl - dx; });
  const up = () => { down = false; scroller.classList.remove("drag"); };
  scroller.addEventListener("pointerup", up); scroller.addEventListener("pointercancel", up); scroller.addEventListener("lostpointercapture", up);
  scroller.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } }, true);
})();


// ===== なぞると絵が現れる（トップの白い面） =====
// 紙の色で覆ったキャンバスに、なぞった所だけ絵の具の飛沫の形で穴を開ける。穴は少しずつ閉じる。
// 白が閉じきってから、またなぞり始めると、下の作品が次の一枚に替わる。
(function(){
  const hero = document.querySelector(".hero"), cv = document.getElementById("paintCv"), art = document.getElementById("paintArt");
  if (!hero || !cv || !art) return;
  if (reduce) { cv.parentElement.hidden = true; return; }
  const ARTS = ["gorilla", "caracal", "turtle", "bulldog", "chimp", "polarbear", "wolf", "dalmatian"];   // ゴリラから始める（虎は使わない）
  const pre = ARTS.map(f => { const i = new Image(); i.src = `images/${f}.jpg`; return i; });
  let ai = 0, closed = false;
  const ctx = cv.getContext("2d");
  const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim() || "#FAFAFA";
  let W = 0, H = 0, raf = null;
  const splats = [], HOLD = 1500, FADE = 1600, GROW = 220;
  function size(){
    const r = hero.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = r.width; H = r.height; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw(performance.now());
    cv.parentElement.classList.add("on");   // 紙で覆い終えてから、下の作品の層を見せる
  }
  function blob(x, y, r, a){
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(0,0,0,${a})`); g.addColorStop(.62, `rgba(0,0,0,${a})`); g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  function draw(now){
    ctx.globalCompositeOperation = "source-over"; ctx.fillStyle = paper; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "destination-out";
    for (let i = splats.length - 1; i >= 0; i--) {
      const s = splats[i], age = now - s.t;
      if (age > HOLD + FADE) { splats.splice(i, 1); continue; }
      const a = age < HOLD ? 1 : 1 - (age - HOLD) / FADE;
      const grow = 1 - Math.pow(1 - Math.min(1, age / GROW), 3);
      s.parts.forEach(p => blob(s.x + p.dx * grow, s.y + p.dy * grow, p.r * (.35 + .65 * grow), a));
    }
    ctx.globalCompositeOperation = "source-over";
  }
  function tick(now){
    draw(now);
    if (splats.length) raf = requestAnimationFrame(tick);
    else { raf = null; closed = true; }
  }
  function splat(x, y, speed, ux, uy){
    if (closed && !splats.length) { ai = (ai + 1) % ARTS.length; art.src = pre[ai].src; closed = false; }
    const base = Math.min(150, 48 + speed * .6) * (W < 760 ? .7 : 1);
    const parts = [{ dx: 0, dy: 0, r: base }];
    // 本体を少しいびつに（重なった小さな丸）
    for (let k = 0; k < 2; k++) parts.push({ dx: (Math.random() - .5) * base * .5, dy: (Math.random() - .5) * base * .5, r: base * (.55 + Math.random() * .3) });
    // 進む向きに飛ぶ小さな飛沫
    const n = speed > 1.2 ? 2 + Math.floor(Math.random() * 3) : Math.floor(Math.random() * 2);
    for (let k = 0; k < n; k++) {
      const d = base * (1 + Math.random() * 1.2), j = (Math.random() - .5) * 1.1;
      const c = Math.cos(j), sn = Math.sin(j);
      parts.push({ dx: (ux * c - uy * sn) * d, dy: (ux * sn + uy * c) * d, r: base * (.1 + Math.random() * .2) });
    }
    splats.push({ x, y, t: performance.now(), parts });
    if (splats.length > 240) splats.shift();
    if (!raf) raf = requestAnimationFrame(tick);
  }
  let last = null;
  function move(cx, cy){
    const r = hero.getBoundingClientRect(), x = cx - r.left, y = cy - r.top, now = performance.now();
    if (x < 0 || y < 0 || x > r.width || y > r.height) { last = null; return; }
    if (!last) { last = { x, y, t: now }; splat(x, y, 0, 1, 0); return; }
    const dx = x - last.x, dy = y - last.y, dist = Math.hypot(dx, dy);
    if (dist < 6) return;
    const speed = dist / Math.max(8, now - last.t), ux = dx / dist, uy = dy / dist;
    const stepLen = 26, steps = Math.min(12, Math.ceil(dist / stepLen));
    for (let k = 1; k <= steps; k++) splat(last.x + dx * k / steps, last.y + dy * k / steps, speed, ux, uy);
    last = { x, y, t: now };
  }
  hero.addEventListener("pointermove", e => { if (e.pointerType === "mouse" || e.pointerType === "pen") move(e.clientX, e.clientY); });
  hero.addEventListener("pointerleave", () => { last = null; });
  hero.addEventListener("touchmove", e => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
  hero.addEventListener("touchend", () => { last = null; }, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(size).observe(hero); else addEventListener("resize", size);
  size();
  // 最初に画面に入ったとき（黒から白への塗りがある時は、白になりきった時）、一筆だけ自動で塗って「なぞれる」ことを見せる
  let hinted = false;
  const hint = () => {
    if (hinted) return; hinted = true;
    setTimeout(() => {
      const r = hero.getBoundingClientRect(), n = 26;
      for (let k = 0; k <= n; k++) setTimeout(() => {
        const t = k / n, x = r.width * (.08 + .84 * t), y = r.height * (.45 + Math.sin(t * Math.PI * 2) * .12);
        const cr = hero.getBoundingClientRect(); move(cr.left + x, cr.top + y);
        if (k === n) last = null;
      }, k * 34);
    }, 900);
  };
  if (document.getElementById("wash")) addEventListener("yoshen:washed", hint, { once: true });
  else new IntersectionObserver((es, io) => { if (es.some(e => e.isIntersecting)) { io.disconnect(); hint(); } }, { threshold: .35 }).observe(hero);
})();

// ===== トップ: 近づくと逃げるゴースト。くるくる回すと渦に巻き込まれて SGC へ =====
// カーソル（スマホは指）から離れる向きに、回転しながら逃げる。離れると、ばねで元の場所へ戻る。
// 逃げる向きに顔を向ける（元の絵は左向きに走っている）。
// カーソルを何周か回すと、ゴーストが渦に吸い込まれ、SGC のポスターが渦の中心から広がって SGC ページへ入り込む。
(function(){
  const field = document.getElementById("gfield"); if (!field) return;
  const ghosts = [...field.querySelectorAll(".gh")].map((el, i) => ({
    el, rot0: parseFloat(el.style.getPropertyValue("--r")) || 0, phase: i * 1.7,
    x: 0, y: 0, r: 0, s: 1, f: 1, vx: 0, vy: 0, vr: 0, vs: 0, vf: 0, face: 1, cx: 0, cy: 0,
  }));
  let px = 0, py = 0, active = false, running = false, t0 = performance.now();
  // 回した量（ラジアン）。向きの変化を足していき、3周（スマホは2.5周）で入り込む
  let turn = 0, lastAng = null, lastPt = null, lastMove = 0, entering = false, dir = 1;
  const turnsNeeded = () => innerWidth < 761 ? 2.5 : 3;
  const progress = () => Math.min(1, Math.abs(turn) / (Math.PI * 2 * turnsNeeded()));
  // カーソルについてくる進み具合の輪
  const spin = document.createElement("div"); spin.className = "spin"; spin.setAttribute("aria-hidden", "true");
  spin.innerHTML = '<svg viewBox="0 0 72 72"><circle class="tr" cx="36" cy="36" r="30"/><circle class="pg" cx="36" cy="36" r="30"/></svg>';
  field.appendChild(spin);
  const pg = spin.querySelector(".pg"), CIRC = 2 * Math.PI * 30;
  pg.style.strokeDasharray = CIRC; pg.style.strokeDashoffset = CIRC;
  function measure(){
    const fr = field.getBoundingClientRect();
    ghosts.forEach(g => {
      g.cx = fr.width * parseFloat(g.el.style.getPropertyValue("--x")) / 100;
      g.cy = fr.height * parseFloat(g.el.style.getPropertyValue("--y")) / 100;
    });
  }
  function track(x, y){
    if (entering) return;
    if (lastPt) {
      const dx = x - lastPt.x, dy = y - lastPt.y;
      if (Math.hypot(dx, dy) < 7) return;
      const ang = Math.atan2(dy, dx);
      if (lastAng !== null) {
        let d = ang - lastAng;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        if (Math.abs(d) < 1.7) {
          if (turn !== 0 && Math.sign(d) !== Math.sign(turn) && Math.abs(d) > .25) turn *= .85;   // 逆回りはブレーキ
          turn += d;
        }
      }
      lastAng = ang;
    }
    lastPt = { x, y }; lastMove = performance.now();
  }
  function frame(now){
    const small = innerWidth < 761;
    const R = small ? 240 : 440, MAXD = small ? 120 : 340, ROT = small ? 14 : 30, SC = small ? .1 : .2;
    const fr = field.getBoundingClientRect(), mx = px - fr.left, my = py - fr.top, tt = (now - t0) / 1000;
    if (!entering && now - lastMove > 450) { turn *= .92; if (Math.abs(turn) < .05) turn = 0; }   // 止まると渦はほどける
    const p = entering ? 1 : progress();
    if (turn) dir = turn > 0 ? 1 : -1;
    spin.style.transform = `translate(${mx.toFixed(1)}px,${my.toFixed(1)}px)`;
    spin.classList.toggle("on", active && !entering && p > .04);
    pg.style.strokeDashoffset = (CIRC * (1 - p)).toFixed(1);
    ghosts.forEach(g => {
      let tx = 0, ty = 0, tr = 0, ts = 1, k = .045, damp = .86;   // 戻るときはゆっくり弾む
      if (active || entering) {
        const dx = g.cx - mx, dy = g.cy - my, d = Math.hypot(dx, dy), a = Math.atan2(dy, dx);
        if (d < R && !entering) {
          const L = Math.pow((R - d) / R, 1.6);
          tx = Math.cos(a) * L * MAXD; ty = Math.sin(a) * L * MAXD;
          tr = -Math.cos(a) * L * ROT; ts = 1 + L * SC; k = .14; damp = .7;   // 逃げるときは素早く
          if (Math.abs(Math.cos(a)) > .2) g.face = Math.cos(a) < 0 ? 1 : -1;
        }
        if (p > 0) {
          // 渦: カーソルのまわりを回りながら、だんだん中心へ寄っていく
          const a2 = a + dir * p * 2.6 + (entering ? dir * tt * 6 : 0);
          const d2 = entering ? 0 : d * (1 - .72 * p);
          const ox = mx + Math.cos(a2) * d2 - g.cx, oy = my + Math.sin(a2) * d2 - g.cy;
          tx = tx * (1 - p) + ox * p; ty = ty * (1 - p) + oy * p;
          tr = tr * (1 - p) + dir * p * (entering ? 900 : 540);
          ts = ts * (1 - p) + (entering ? 0 : 1 - .35 * p) * p;
          k = entering ? .12 : .1; damp = entering ? .72 : .76;
        }
      }
      if (!entering) ty += Math.sin(tt * 1.3 + g.phase) * 6;   // ふわふわ浮く
      g.vx = (g.vx + (tx - g.x) * k) * damp; g.x += g.vx;
      g.vy = (g.vy + (ty - g.y) * k) * damp; g.y += g.vy;
      g.vr = (g.vr + (tr - g.r) * k) * damp; g.r += g.vr;
      g.vs = (g.vs + (ts - g.s) * k) * damp; g.s += g.vs;
      g.vf = (g.vf + (g.face - g.f) * .12) * .72; g.f += g.vf;
      g.el.style.transform = `translate(-50%,-50%) translate(${g.x.toFixed(1)}px,${g.y.toFixed(1)}px) rotate(${(g.rot0 + g.r).toFixed(2)}deg) scale(${Math.max(0, g.s).toFixed(3)}) scaleX(${g.f.toFixed(3)})`;
    });
    if (!entering && p >= 1) enter();
    if (running || entering) requestAnimationFrame(frame);
  }
  // 回しきったら: ゴーストが中心へ吸い込まれ、Staring Ghost Crew のロゴが渦の中心から広がって SGC ページへ
  function enter(){
    entering = true; active = true;
    const full = new URL("images/sgc_crew_logo.jpg", document.baseURI).href;
    const ov = document.createElement("div"); ov.className = "vortex"; ov.setAttribute("aria-hidden", "true");
    ov.style.setProperty("--vx", px + "px"); ov.style.setProperty("--vy", py + "px");
    const im = document.createElement("img"); im.alt = ""; im.src = full; ov.appendChild(im);
    document.body.appendChild(ov);
    try { sessionStorage.setItem("yoshen-enter", "logo:" + full); } catch (e) {}
    ov.getBoundingClientRect();
    setTimeout(() => ov.classList.add("go"), 380);
    setTimeout(() => { location.href = "sgc.html"; }, 1550);
  }
  if (reduce) return;
  measure();
  if ("ResizeObserver" in window) new ResizeObserver(measure).observe(field); else addEventListener("resize", measure);
  // 最初に見えたとき: ゴーストが SGC のポスターから飛び出し、ばねで弾みながらそれぞれの場所へ
  const poster = document.querySelector('.en[href^="sgc.html"] .im');
  if (poster && "IntersectionObserver" in window) {
    const fr0 = field.getBoundingClientRect(), pr0 = poster.getBoundingClientRect();
    ghosts.forEach((g, i) => { g.el.style.opacity = "0"; });
    const launch = new IntersectionObserver(es => {
      if (!es.some(e => e.isIntersecting)) return; launch.disconnect();
      const fr = field.getBoundingClientRect(), pr = poster.getBoundingClientRect();
      const ox = pr.left + pr.width / 2 - fr.left, oy = pr.top + pr.height * .55 - fr.top;
      ghosts.forEach((g, i) => setTimeout(() => {
        g.x = ox - g.cx; g.y = oy - g.cy; g.s = .2; g.r = (Math.random() - .5) * 120;
        g.vx = 0; g.vy = 0; g.vs = 0; g.vr = 0; g.face = g.x > 0 ? 1 : -1;   // 飛ぶ向きに顔を向ける
        g.el.style.opacity = "1";
      }, i * 70));
    }, { threshold: .2 });
    launch.observe(field);
  }
  const at = (x, y) => { px = x; py = y; active = true; track(x, y); };
  const leave = () => { if (entering) return; active = false; lastPt = null; lastAng = null; };
  field.addEventListener("pointermove", e => at(e.clientX, e.clientY));
  field.addEventListener("pointerdown", e => { lastPt = null; lastAng = null; at(e.clientX, e.clientY); });
  field.addEventListener("pointerleave", leave);
  field.addEventListener("touchmove", e => { const t = e.touches[0]; if (t) at(t.clientX, t.clientY); }, { passive: true });
  field.addEventListener("touchend", leave, { passive: true });
  // 「戻る」で帰ってきたときは、渦を元どおりに
  addEventListener("pageshow", e => {
    if (!e.persisted) return;
    document.querySelectorAll(".vortex").forEach(el => el.remove());
    entering = false; turn = 0; leave();
  });
  new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && !running) { running = true; requestAnimationFrame(frame); }
    else if (!e.isIntersecting) running = false;
  })).observe(field);
})();

// ===== フッターの巨大ロゴ =====
// 画面に入ると文字がランダムな順番でせり上がり、最後にピンクの点が弾む。
// 文字に触れると、その文字だけ点まで縮み、ばねのように弾んで戻る。
(function(){
  const marks = document.querySelectorAll(".ftmark"); if (!marks.length) return;
  // 弾んで戻る動き（elastic）を、なめらかな折れ線のイージングにして使う
  const elastic = t => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - .8 / 4) * (2 * Math.PI) / .8) + 1;
  const pts = []; for (let i = 0; i <= 40; i++) pts.push(elastic(i / 40).toFixed(4));
  let springEase = "cubic-bezier(.34,1.56,.64,1)";
  try { if (CSS.supports("animation-timing-function", "linear(0, 1)")) springEase = `linear(${pts.join(",")})`; } catch (e) {}
  marks.forEach(m => {
    const parts = [...m.querySelectorAll(".ch, .dot")];
    const order = [...m.querySelectorAll(".ch")].map((c, i) => i).sort(() => Math.random() - .5);
    m.querySelectorAll(".ch").forEach((c, i) => c.style.setProperty("--rd", (.15 + order.indexOf(i) * .05) + "s"));
    if (reduce || !("IntersectionObserver" in window)) { m.classList.add("in", "done"); }
    else {
      const io = new IntersectionObserver(es => {
        if (!es.some(e => e.isIntersecting)) return;
        m.classList.add("in"); io.disconnect(); setTimeout(() => m.classList.add("done"), 1700);
      }, { threshold: .25 });
      io.observe(m);
    }
    if (reduce || !Element.prototype.animate) return;
    parts.forEach(el => {
      let busy = false;
      const pop = () => {
        if (busy || !m.classList.contains("done")) return; busy = true;
        const shrink = el.animate([{ transform: "scale(1)" }, { transform: "scale(.05)" }], { duration: 600, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
        shrink.onfinish = () => {
          const back = el.animate([{ transform: "scale(.05)" }, { transform: "scale(1)" }], { duration: 1800, easing: springEase, fill: "forwards" });
          back.onfinish = () => { shrink.cancel(); back.cancel(); busy = false; };
        };
      };
      el.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") pop(); });
      el.addEventListener("pointerdown", pop);
    });
  });
})();


// ===== 黒から白へ（輪のあと）: スクロールに合わせて、黒い画面に白い絵の具の飛沫が広がり、白い紙になる =====
(function(){
  const wash = document.getElementById("wash"), cv = document.getElementById("inkCv"); if (!wash || !cv) return;
  if (reduce) { cv.classList.add("gone"); dispatchEvent(new Event("yoshen:washed")); return; }
  const ctx = cv.getContext("2d");
  const night = getComputedStyle(document.documentElement).getPropertyValue("--night").trim() || "#0E0E0F";
  let W = 0, H = 0, spots = [], done = false, ticking = false;
  // 決まった並びの乱数（毎回同じ模様になる）
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  function build(){
    seed = 7; spots = [];
    const cols = W < 760 ? 4 : 7, rows = W < 760 ? 7 : 5, big = Math.max(W, H);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = (c + .5 + (rnd() - .5) * .8) / cols * W, y = (r + .5 + (rnd() - .5) * .8) / rows * H;
      const R = big * (.11 + rnd() * .07);
      const drops = [];
      for (let k = 0; k < 4; k++) { const a = rnd() * Math.PI * 2, d = R * (1 + rnd() * .9); drops.push({ dx: Math.cos(a) * d, dy: Math.sin(a) * d, r: R * (.08 + rnd() * .16) }); }
      spots.push({ x, y, R, drops, at: rnd() });
    }
    spots.sort((a, b) => a.at - b.at);
  }
  function size(){
    const r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = r.width; H = r.height; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); build(); draw();
  }
  function progress(){
    const r = wash.getBoundingClientRect(), total = wash.offsetHeight - innerHeight;
    return total > 0 ? clamp01(-r.top / (total * .7)) : 1;   // 塗りは前半で終わり、後半は白い紙を読む時間
  }
  function blob(x, y, r){
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(0,0,0,1)"); g.addColorStop(.9, "rgba(0,0,0,1)"); g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  function draw(){
    ticking = false;
    const p = progress();
    if (p >= 1) { if (!done) { done = true; cv.classList.add("gone"); dispatchEvent(new Event("yoshen:washed")); } return; }
    if (done) { done = false; cv.classList.remove("gone"); }
    ctx.globalCompositeOperation = "source-over"; ctx.fillStyle = night; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "destination-out";
    const n = spots.length;
    spots.forEach((s, i) => {
      const start = i / n * .78, q = clamp01((p - start) / .22);   // 1つずつ順に、飛沫が広がる
      if (q <= 0) return;
      const e = 1 - Math.pow(1 - q, 3);
      blob(s.x, s.y, s.R * (.25 + e * 1.15));
      s.drops.forEach(d => blob(s.x + d.dx * e, s.y + d.dy * e, d.r * e));
    });
    ctx.globalCompositeOperation = "source-over";
  }
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(draw); } };
  addEventListener("scroll", req, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(size).observe(cv); else addEventListener("resize", size);
  size();
})();

// ===== 画像の出方は1種類: 画面に入ると角から開く =====
(function(){
  const els = document.querySelectorAll(".clip"); if (!els.length) return;
  if (reduce || !("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(el => io.observe(el));
})();


// ===== ページの頭（黒）: スクロールに合わせて、白い絵の具の飛沫で塗られて白い紙になる =====
(function(){
  const heads = document.querySelectorAll(".ph"); if (!heads.length || reduce) return;
  const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim() || "#FAFAFA";
  heads.forEach(head => {
    const cv = head.querySelector(".phink"); if (!cv) return;
    const nx = head.nextElementSibling;
    if (nx && nx.classList.contains("band")) return;   // すぐ下も黒い帯なら、白く塗らずに黒のままつなぐ
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, spots = [], ticking = false, seed = 11;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    function build(){
      seed = 11; spots = [];
      const cols = W < 760 ? 3 : 6, rows = W < 760 ? 4 : 3, big = Math.max(W, H);
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const x = (c + .5 + (rnd() - .5) * .8) / cols * W, y = (r + .5 + (rnd() - .5) * .8) / rows * H;
        const R = big * (.12 + rnd() * .08), drops = [];
        for (let k = 0; k < 4; k++) { const a = rnd() * Math.PI * 2, d = R * (1 + rnd() * .9); drops.push({ dx: Math.cos(a) * d, dy: Math.sin(a) * d, r: R * (.08 + rnd() * .16) }); }
        spots.push({ x, y, R, drops, at: rnd() });
      }
      spots.sort((a, b) => a.at - b.at);
    }
    function size(){
      const r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = r.width; H = r.height; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); build(); draw();
    }
    function blob(x, y, r){
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, paper); g.addColorStop(.9, paper); g.addColorStop(1, "rgba(250,250,250,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    function draw(){
      ticking = false;
      ctx.clearRect(0, 0, W, H);
      const r = head.getBoundingClientRect();
      const p = clamp01((-r.top) / (r.height * .75));   // 頭が上へ抜けていくほど、白く塗られる
      if (p <= 0) return;
      const n = spots.length;
      spots.forEach((s, i) => {
        const q = clamp01((p - i / n * .7) / .3); if (q <= 0) return;
        const e = 1 - Math.pow(1 - q, 3);
        blob(s.x, s.y, s.R * (.25 + e * 1.15));
        s.drops.forEach(d => blob(s.x + d.dx * e, s.y + d.dy * e, d.r * e));
      });
    }
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(draw); } }, { passive: true });
    if ("ResizeObserver" in window) new ResizeObserver(size).observe(cv); else addEventListener("resize", size);
    size();
  });
})();
