/* Leitor do Novo Testamento (rascunho de IA) · bibleme Traduções
   Sem dependências. Dados em ./dados/ (gerados a partir dos rascunhos; ver README.md desta pasta).
   Rotas (hash): #/  ·  #/Mat/5  ·  #/Mat/5/3  ·  #/g/991  ·  #/busca/texto */
(() => {
"use strict";

/* ------------------------------------------------------------------ utilidades */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
function h(tag, props, ...kids) {
  const e = document.createElement(tag);
  if (props) for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === "class") e.className = v;
    else if (k === "text") e.textContent = v;
    else if (k === "data") for (const [dk, dv] of Object.entries(v)) e.dataset[dk] = dv;
    else if (k.startsWith("on") && typeof v === "function") e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? "" : v);
  }
  for (const c of kids.flat(Infinity)) if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(String(c)));
  return e;
}
const store = {
  get(k, d) { try { const v = localStorage.getItem("bm." + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("bm." + k, JSON.stringify(v)); } catch { /* sem armazenamento: segue sem lembrar */ } },
};
/** Minúsculas e sem acento, mantendo o tamanho (um caractere vira um caractere), para destacar trechos na busca. */
function flat(s) {
  let o = "";
  for (const ch of s) {
    let b = ch.normalize("NFD").replace(/[̀-ͯ]/g, "");
    b = (b[0] || ch).toLowerCase();
    o += b === "ς" ? "σ" : b;
  }
  return o;
}
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const BASE = "dados/";

/* ------------------------------------------------------------------ constantes */
const NOTA_ROT = { lit: "Literal", var: "Variante", cult: "Nota cultural", add: "Acréscimo", omit: "Não traduzido", trad: "Tradução contextual" };
const NOTA_SIG = { lit: "L", var: "V", cult: "C", add: "+", omit: "∅", trad: "T" };
const NOTA_AJ = {
  lit: "sentido literal do grego ou outras maneiras de entender",
  var: "outra leitura em edições do grego (o leitor não colaciona manuscritos individuais)",
  cult: "citação do Antigo Testamento ou contexto cultural",
  add: "palavra da tradução que o grego não traz (o português exige)",
  omit: "palavra grega sem equivalente em português neste ponto",
  trad: "termo de sentido amplo traduzido de modo contextual ou difícil",
};
const ABREV = { Mat: "Mt", Mrk: "Mc", Luk: "Lc", Jhn: "Jo", Act: "At", Rom: "Rm", "1Co": "1Co", "2Co": "2Co", Gal: "Gl", Eph: "Ef", Php: "Fp", Col: "Cl",
  "1Th": "1Ts", "2Th": "2Ts", "1Ti": "1Tm", "2Ti": "2Tm", Tit: "Tt", Phm: "Fm", Heb: "Hb", Jas: "Tg", "1Pe": "1Pe", "2Pe": "2Pe", "1Jn": "1Jo",
  "2Jn": "2Jo", "3Jn": "3Jo", Jud: "Jd", Rev: "Ap" };
const GRUPOS = [
  ["Evangelhos", ["Mat", "Mrk", "Luk", "Jhn"]],
  ["Atos", ["Act"]],
  ["Cartas de Paulo", ["Rom", "1Co", "2Co", "Gal", "Eph", "Php", "Col", "1Th", "2Th", "1Ti", "2Ti", "Tit", "Phm"]],
  ["Hebreus e cartas gerais", ["Heb", "Jas", "1Pe", "2Pe", "1Jn", "2Jn", "3Jn", "Jud"]],
  ["Apocalipse", ["Rev"]],
];
/* códigos de livro do OpenBible (fonte das referências cruzadas) */
const OB_NOME = { Gen: "Gênesis", Exod: "Êxodo", Lev: "Levítico", Num: "Números", Deut: "Deuteronômio", Josh: "Josué", Judg: "Juízes", Ruth: "Rute",
  "1Sam": "1 Samuel", "2Sam": "2 Samuel", "1Kgs": "1 Reis", "2Kgs": "2 Reis", "1Chr": "1 Crônicas", "2Chr": "2 Crônicas", Ezra: "Esdras", Neh: "Neemias",
  Esth: "Ester", Job: "Jó", Ps: "Salmos", Prov: "Provérbios", Eccl: "Eclesiastes", Song: "Cântico dos Cânticos", Isa: "Isaías", Jer: "Jeremias",
  Lam: "Lamentações", Ezek: "Ezequiel", Dan: "Daniel", Hos: "Oseias", Joel: "Joel", Amos: "Amós", Obad: "Obadias", Jonah: "Jonas", Mic: "Miqueias",
  Nah: "Naum", Hab: "Habacuque", Zeph: "Sofonias", Hag: "Ageu", Zech: "Zacarias", Mal: "Malaquias" };
const OB_NT = { Matt: "Mat", Mark: "Mrk", Luke: "Luk", John: "Jhn", Acts: "Act", Rom: "Rom", "1Cor": "1Co", "2Cor": "2Co", Gal: "Gal", Eph: "Eph", Phil: "Php",
  Col: "Col", "1Thess": "1Th", "2Thess": "2Th", "1Tim": "1Ti", "2Tim": "2Ti", Titus: "Tit", Phlm: "Phm", Heb: "Heb", Jas: "Jas", "1Pet": "1Pe", "2Pet": "2Pe",
  "1John": "1Jn", "2John": "2Jn", "3John": "3Jn", Jude: "Jud", Rev: "Rev" };
/* edições do grego comparadas pelo TAGNT (bits na mesma ordem do site.py) */
const EDS = [["NA28", "Nestle-Aland, 28ª ed. (2012)"], ["NA27", "Nestle-Aland, 27ª ed."], ["Tyn", "Tyndale House GNT (2017)"], ["SBL", "SBLGNT, Holmes (2010): o texto-base do leitor"],
  ["WH", "Westcott-Hort (1881)"], ["Treg", "Tregelles (1879) com Jongkind (2009)"], ["TR", "Textus Receptus, Scrivener (1894)"], ["Byz", "Bizantino, Robinson-Pierpont (2005)"]];
const SEM_FUNC = /^(T-|PREP|CONJ|PRT|COND|ADV|INJ|P-)/;   // morfologia de palavra funcional (artigo, preposição…): não leva Strong em destaque

/* ------------------------------------------------------------------ estado */
const D = {};                 // dados carregados
const cache = {};
const cfg = { strong: store.get("strong", false), inter: store.get("inter", false), notas: store.get("notas", true), add: store.get("add", true),
              wj: store.get("wj", false), rv: store.get("rv", false),
              tema: store.get("tema", "auto"), tam: store.get("tam", 1.2) };
const cur = { view: "", livro: null, cap: 0, v: 0, ids: [], nota: null };
let token = 0;

function fetchJSON(name) {
  if (!cache[name]) {
    cache[name] = fetch(BASE + name).then(r => {
      if (!r.ok) throw new Error(name + ": HTTP " + r.status);
      return r.json();
    }).catch(e => { delete cache[name]; throw e; });
  }
  return cache[name];
}
async function getLivro(id) {
  const d = await fetchJSON("livros/" + id + ".json");
  if (!d.byCap) {
    d.byCap = {}; d.byCV = {};
    for (const v of d.v) { (d.byCap[v.c] ||= []).push(v); d.byCV[v.c + "." + v.v] = v; }
  }
  return d;
}
const lexOf = s => D.lexico[String(s)] || null;
const verseText = (id, c, v) => { const a = D.texto[id]; return a && a[c - 1] ? a[c - 1][v - 1] : null; };
const nomeLivro = id => (D.byId[id] ? D.byId[id].nome : id);
const refStr = (id, c, v) => `${nomeLivro(id)} ${c}${v ? ":" + v : ""}`;
const aviso = msg => h("div", { class: "erro" }, msg);

/* ------------------------------------------------------------------ referências do OpenBible */
function obParse(s) { const m = /^(\w+)\.(\d+)\.(\d+)$/.exec(s); return m ? { b: m[1], c: +m[2], v: +m[3] } : null; }
function obLabel(ref) {
  const [a, b] = ref.split("-");
  const pa = obParse(a); if (!pa) return ref;
  const nome = OB_NOME[pa.b] || nomeLivro(OB_NT[pa.b] || pa.b);
  let s = `${nome} ${pa.c}:${pa.v}`;
  const pb = b ? obParse(b) : null;
  if (pb) s += pb.b === pa.b ? (pb.c === pa.c ? `-${pb.v}` : `-${pb.c}:${pb.v}`) : ` – ${OB_NOME[pb.b] || nomeLivro(OB_NT[pb.b] || pb.b)} ${pb.c}:${pb.v}`;
  return s;
}
const linkVerso = (id, c, v) => `#/${id}/${c}${v ? "/" + v : ""}`;

/* ------------------------------------------------------------------ rótulos de Strong */
function strongsOf(v, ids, soConteudo) {
  const out = [];
  for (const i of ids) {
    const g = v.g[i - 1]; if (!g || !g[1]) continue;
    if (soConteudo && SEM_FUNC.test(g[2])) continue;
    if (!soConteudo && g[1] === 3588) continue;
    for (const s of String(g[1]).split(",")) if (!out.includes(s)) out.push(s);
  }
  return out;
}
function linkNotas(texto) {
  const frag = document.createDocumentFragment();
  let last = 0;
  for (const m of texto.matchAll(/\bG(\d{1,4})\b/g)) {
    frag.append(texto.slice(last, m.index));
    frag.append(h("a", { href: "#/g/" + m[1] }, m[0]));
    last = m.index + m[0].length;
  }
  frag.append(texto.slice(last));
  return frag;
}

/* ------------------------------------------------------------------ configuração e aparência */
function aplicarCfg() {
  const t = $("#texto");
  t.classList.toggle("inter", cfg.inter);
  t.classList.toggle("sem-notas", !cfg.notas);
  t.classList.toggle("sem-strong", !cfg.strong);
  t.classList.toggle("sem-add", !cfg.add);
  t.classList.toggle("com-wj", cfg.wj);
  t.classList.toggle("com-rv", cfg.rv);
  $("#t-wj").setAttribute("aria-pressed", String(cfg.wj));
  $("#t-rv").setAttribute("aria-pressed", String(cfg.rv));
  for (const [id, k] of [["t-strong", "strong"], ["t-inter", "inter"], ["t-notas", "notas"], ["t-add", "add"]]) $("#" + id).setAttribute("aria-pressed", String(cfg[k]));
  const root = document.documentElement;
  if (cfg.tema === "auto") root.removeAttribute("data-tema"); else root.setAttribute("data-tema", cfg.tema);
  root.style.setProperty("--fs", cfg.tam + "rem");
  $$("#cfg [data-tema]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.tema === cfg.tema)));
}
function alternar(k) {
  cfg[k] = !cfg[k]; store.set(k, cfg[k]);
  if (k === "inter" && cur.view === "cap") renderCapAtual(); else aplicarCfg();
}

/* ------------------------------------------------------------------ lista de livros (gaveta) */
function abrirGaveta(modo, id) {
  const nav = $("#livros");
  nav.replaceChildren();
  nav.append(h("button", { class: "btn sm fecha", type: "button", onclick: fecharGaveta }, "Fechar ✕"));
  if (modo === "caps") {
    const m = D.byId[id];
    nav.append(h("h2", null, m.nome),
      h("p", null, h("button", { class: "btn sm", type: "button", onclick: () => abrirGaveta("livros") }, "← Todos os livros")),
      h("div", { class: "caps" }, m.cap.map((_, i) => h("a", { href: linkVerso(id, i + 1), class: cur.livro === id && cur.cap === i + 1 ? "atual" : "" }, String(i + 1)))));
  } else {
    for (const [nome, ids] of GRUPOS) {
      nav.append(h("h2", null, nome), h("div", { class: "lv-grid" }, ids.map(i => {
        const m = D.byId[i];
        return h("button", { class: "lv-item" + (cur.livro === i ? " atual" : ""), type: "button", onclick: () => abrirGaveta("caps", i) },
          h("span", null, m.nome), h("small", null, `${m.cap.length} cap. · `, chipRev(m, true)));
      })));
    }
  }
  nav.hidden = false; $("#veil").hidden = false; $("#b-livros").setAttribute("aria-expanded", "true");
}
function fecharGaveta() { $("#livros").hidden = true; $("#veil").hidden = true; $("#b-livros").setAttribute("aria-expanded", "false"); }
function chipRev(m) {
  const n = m.rev_n || 0;
  const cls = n && m.rev === "aprovado" ? "rv ok" : n && m.rev === "ajustes" ? "rv aj" : "rv";
  const sit = m.rev === "aprovado" ? "aprovado pela IA revisora" + (m.caps_ap && m.caps_ap !== "–" ? ` (${m.caps_ap.replace("/", " de ")} capítulos)` : "")
    : m.rev === "ajustes" ? "ajustes pedidos; aguarda a próxima rodada" : "ainda sem revisão cruzada";
  return h("span", { class: cls, title: `Revisão cruzada feita por IA (não é revisão humana). Rodadas: ${n}. Situação: ${sit}.` }, `revisão de IA: ${n}x`);
}

/* ------------------------------------------------------------------ rodapé de fontes */
/** Versão do texto publicado: o workflow troca __SHA__, __DIA__ e __REPO__ nas meta tags (RFC-0010); localmente ficam os marcadores. */
function versaoInfo() {
  const meta = n => { const e = document.querySelector(`meta[name="${n}"]`); const v = e ? e.content : ""; return v && !v.startsWith("__") ? v : ""; };
  return { sha: meta("bibleme-commit"), dia: meta("bibleme-dia"), repo: meta("bibleme-repo") };
}
function blocoVersao() {
  const v = versaoInfo();
  if (!v.sha) return h("p", { style: "margin:0 0 6px" }, h("b", null, "Versão do texto: "), "rascunho de IA sem release (pré-release 0.x, em quarentena); cópia local, sem commit.");
  const url = new URL("../traducao/", location.href).href;
  const commit = v.repo ? h("a", { href: `https://github.com/${v.repo}/commit/${v.sha}` }, v.sha) : v.sha;
  return h("p", { style: "margin:0 0 6px" }, h("b", null, "Versão do texto: "), "rascunho de IA sem release (pré-release 0.x, em quarentena) · commit ", commit, ` · publicado em ${v.dia}. `,
    h("b", null, "Como citar "), v.repo ? h("a", { href: `https://github.com/${v.repo}/blob/main/rfcs/0010-citacao-por-tipo-de-uso.md` }, "(RFC-0010, aceita em 2026-11-10)") : "(RFC-0010)", ": ",
    h("code", null, `bibleme NT pt-BR (rascunho de IA) · main@${v.sha} · CC BY 4.0 · ${url}`));
}
function rodape() {
  return h("footer", { class: "card", style: "margin-top:32px;font-size:.82rem;color:var(--muted)" },
    blocoVersao(),
    h("p", { style: "margin:0 0 6px" }, h("b", null, "Rascunho de IA em quarentena. "), "Tradução feita com uso de IA (que pode incluir escrita e revisão) a partir do grego, ainda sem revisão humana formal; não é texto aprovado do projeto. ",
      h("a", { href: "../traducao/" }, "Como foi feito e o que falta →")),
    h("p", { style: "margin:0" }, "Texto grego: ", h("a", { href: "https://github.com/LogosBible/SBLGNT" }, "SBLGNT"), " (SBL e Logos, CC BY 4.0), uma edição crítica e não um manuscrito único. Strong, lema, morfologia e as edições de cada palavra: ",
      h("a", { href: "https://github.com/STEPBible/STEPBible-Data" }, "STEPBible TAGNT/TBESG"), " (Tyndale House e STEPBible.org, CC BY 4.0), reformatados e combinados com o alinhamento deste projeto. Referências cruzadas: ",
      h("a", { href: "https://www.openbible.info/labs/cross-references/" }, "OpenBible.info"), " (CC BY)."));
}

/* ------------------------------------------------------------------ página inicial */
function renderHome() {
  cur.view = "home"; cur.livro = null;
  topo({ cap: false });
  document.title = "Leitor do Novo Testamento (rascunho de IA) · bibleme Traduções";
  const info = D.info;
  const n = info.notas;
  const main = $("#texto");
  main.replaceChildren(
    h("div", { class: "largo" },
      h("h1", { style: "font-size:clamp(2rem,6vw,3rem);margin-bottom:.2em" }, "Novo Testamento, palavra a palavra"),
      h("p", { class: "lead" }, "Um rascunho do Novo Testamento em português, feito com uso de IA e traduzido do grego (SBLGNT), com Strong em cada termo, interlinear, notas explicativas e versículos relacionados. Está em quarentena: ", h("b", null, "ainda sem revisão humana formal"), "."),
      h("div", { class: "stats" },
        h("span", null, h("b", null, info.versos.toLocaleString("pt-BR")), " versículos"),
        h("span", null, h("b", null, info.palavras_gregas.toLocaleString("pt-BR")), " palavras gregas com Strong"),
        h("span", null, h("b", null, info.strongs.toLocaleString("pt-BR")), " termos (Strong)"),
        h("span", null, h("b", null, info.relacoes.toLocaleString("pt-BR")), " versículos relacionados"),
        h("span", null, h("b", null, (n.lit + n.var + n.cult + n.add + n.omit + n.trad).toLocaleString("pt-BR")), " notas")),
      h("div", { class: "card", style: "margin-top:18px" },
        h("h2", { style: "font-size:1.1rem" }, "Comece por aqui"),
        h("p", { style: "margin:0 0 8px" }, "Abra um capítulo e toque num versículo: o painel mostra o grego palavra a palavra, as notas e os versículos relacionados. Use os botões ", h("b", null, "Strong"), " e ", h("b", null, "Interlinear"), " para ver o grego no próprio texto."),
        h("p", { style: "margin:0" }, "Exemplos: ", ...[["Jhn", 1, 1], ["Jhn", 3, 16], ["Mat", 5, 3], ["Rom", 8, 1], ["1Co", 13, 4]].flatMap((x, i) => [i ? " · " : "", h("a", { href: linkVerso(...x) }, refStr(...x))]),
          " · busque ", h("a", { href: "#/g/26" }, "G26"), " (ágape), ", h("a", { href: "#/busca/amor" }, "amor"), " ou ", h("a", { href: "#/busca/%CF%80%CE%AF%CF%83%CF%84%CE%B9%CF%82" }, "πίστις"), ".")),
      h("div", { class: "grupo-livros" }, GRUPOS.flatMap(([nome, ids]) => [h("h2", null, nome), ...ids.map(i => {
        const m = D.byId[i];
        return h("div", { class: "card" }, h("h3", { style: "margin:0 0 4px;display:flex;gap:8px;align-items:center;flex-wrap:wrap" }, m.nome, chipRev(m)),
          h("div", { class: "caps" }, m.cap.map((_, k) => h("a", { href: linkVerso(i, k + 1) }, String(k + 1)))));
      })])),
      rodape()));
  painelLegenda(false);
  window.scrollTo(0, 0);
}

/* ------------------------------------------------------------------ capítulo */
function topo({ cap, titulo }) {
  $("#cap-nav").hidden = !cap; $("#barra").hidden = !cap;
  if (cap) $("#cap-titulo").textContent = titulo;
}
async function mostrarCap(id, cap, vs) {
  const meta = D.byId[id];
  if (!meta) { $("#texto").replaceChildren(aviso("Livro não encontrado: " + id)); return; }
  cap = clamp(cap || 1, 1, meta.cap.length);
  const my = ++token;
  const mudou = !(cur.view === "cap" && cur.livro === id && cur.cap === cap);
  if (mudou) {
    $("#texto").replaceChildren(h("p", { class: "carregando" }, "Carregando " + meta.nome + "…"));
    cur.cam = null;
    try { cur.data = await getLivro(id); if (D.camadas && D.camadas[id]) cur.cam = await fetchJSON("camadas/" + id + ".json").catch(() => null); } catch (e) { if (my === token) $("#texto").replaceChildren(aviso("Não foi possível carregar " + meta.nome + ". " + e.message)); return; }
    if (my !== token) return;
    cur.view = "cap"; cur.livro = id; cur.cap = cap; cur.ids = [];
    renderCap(meta, cur.data, cap);
    $("#t-wj").hidden = $("#t-rv").hidden = !cur.cam;
    window.scrollTo(0, 0);
  }
  topo({ cap: true, titulo: `${meta.nome} ${cap}` });
  document.title = `${meta.nome} ${cap} · Leitor NT (rascunho de IA) · bibleme`;
  if (vs) selecionar(vs, !mudou && vs === cur.v ? cur.ids : [], true); else if (mudou) limparSelecao();
}
function renderCapAtual() { if (cur.view === "cap") renderCap(D.byId[cur.livro], cur.data, cur.cap); aplicarCfg(); reaplicarSel(); }

function renderCap(meta, data, cap) {
  const verses = data.byCap[cap] || [];
  const leitura = h("div", { class: "leitura", id: "leitura", lang: "pt-BR" });
  let bloco = null, poema = false;
  for (const v of verses) {
    const mk = v.m || "";
    if (v.s) {
      bloco = null;
      leitura.append(h("p", { class: "aviso-sup" }, `O versículo ${v.v} não está no SBLGNT (o texto-base). Está traduzido à parte, do grego de outras edições.`));
      bloco = h("p", { class: "para verso-sup" }); leitura.append(bloco); poema = false;
    } else if (!bloco || mk === "p" || mk.startsWith("q")) {
      poema = mk.startsWith("q");
      bloco = h(poema ? "div" : "p", { class: poema ? "poema" : "para" });
      leitura.append(bloco);
    }
    bloco.append(renderVerso(v, data));
  }
  const rv = chipRev(meta);
  const sup = verses.filter(v => v.s).length;
  const main = $("#texto");
  main.replaceChildren(
    h("div", { class: "cab-cap" }, h("h1", null, `${meta.nome} ${cap}`),
      h("div", { class: "sub" }, `${verses.length - sup} versículos · rascunho de IA · `, rv)),
    leitura,
    rodape());
  aplicarCfg();
}

const CAT_PRON = { J: "Jesus", D: "Deus", E: "o Espírito" };
const TIPO_WJ = { "após a ressurreição": "Jesus já ressuscitado ou glorificado", "citado por outro": "citação do que Jesus disse, feita por outra pessoa" };
/** Texto do toque/tooltip de uma faixa de "palavras de Jesus": certeza (ou o aviso de limite debatido) + tipo, quando houver. */
function wjTitle(r) {
  const cert = r[2] === "debatido" ? "limite da fala debatido entre leituras" : `certeza ${r[2]}`;
  const tipo = r[5] ? `; ${TIPO_WJ[r[5]] || r[5]}` : "";
  return `Palavras de Jesus (revisada 2x; ${cert}${tipo})`;
}
/** Pronomes escritos que levam maiúscula reverencial quando o referente é divino (camada opcional; o CSS faz a maiúscula). */
function pronFrag(text, info) {
  const re = /(?<![\p{L}])(ele|dele|nele|lhe|seu|sua|seus|suas)(?![\p{L}])|(?<=-)(o|lo|no)(?![\p{L}])/giu;
  const frag = document.createDocumentFragment();
  let last = 0;
  for (const m of text.matchAll(re)) {
    frag.append(text.slice(last, m.index));
    frag.append(h("span", { class: "rvp", title: `Pronome reverencial: refere-se a ${CAT_PRON[info[1]] || info[1]} (proposta automática, certeza ${info[2]})` }, m[0]));
    last = m.index + m[0].length;
  }
  frag.append(text.slice(last));
  return frag;
}

function renderVerso(v, data) {
  const span = h("span", { class: "verso", data: { v: v.v }, id: "v" + v.v });
  span.append(h("button", { class: "vn", type: "button", "aria-label": "Versículo " + v.v, title: "Selecionar o versículo " + v.v }, String(v.v)));
  const chave = v.c + "." + v.v;
  const wjR = (cur.cam && cur.cam.wj[chave]) || [];
  const rvM = new Map(((cur.cam && cur.cam.rv[chave]) || []).map(x => [x[0], x]));
  let target = span, wjEl = null, wjFim = -1;
  let nIdx = 0, lastPt = null;
  v.t.forEach((t, ti) => {
    const k = t[0];
    if (wjEl && ti > wjFim) { target = span; wjEl = null; }
    if (!wjEl) {
      const r = wjR.find(x => ti >= x[0] && ti <= x[1]);
      if (r && k !== "n") { wjEl = h("span", { class: "wj" + (r[2] === "debatido" ? " debatido" : ""), title: wjTitle(r) }); span.append(wjEl); target = wjEl; wjFim = r[1]; }
    }
    if (k !== "n") lastPt = (k === "p" ? lastPt : null);
    if (k === "u") { const parts = renderUnit(v, t, rvM.get(ti)); target.append(...parts); lastPt = cfg.inter ? parts[parts.length - 1].firstChild : null; return; }
    if (k === "f") {
      if (t[3]) target.append(" ");
      const pt = h("span", { class: "pt" }, t[1]);
      target.append(h("span", { class: "add-p" + (cfg.inter ? " free-u" : ""), title: "Acréscimo da tradução: sem palavra grega correspondente" },
        cfg.inter ? [pt, h("span", { class: "gr" }, "·")] : t[1]));
    } else if (k === "p") {
      if (lastPt && !t[3]) lastPt.append(t[1]); else { if (t[3]) target.append(" "); target.append(t[1]); }
    } else if (k === "o") {
      if (cfg.inter) {
        target.append(" ", h("span", { class: "omit-u", data: { ids: t[2].join(",") }, title: "Palavra grega não traduzida" },
          h("span", { class: "pt" }, "∅"), h("span", { class: "gr", lang: "grc" }, t[2].map(i => v.g[i - 1][0]).join(" ")),
          h("span", { class: "gs" }, strongsOf(v, t[2], false).map(s => "G" + s).join(" "))));
      }
    } else if (k === "n") {
      span.append(h("button", { class: "nt nt-" + t[1], type: "button", data: { n: nIdx }, title: NOTA_ROT[t[1]] + ": " + NOTA_AJ[t[1]], "aria-label": "Nota: " + NOTA_ROT[t[1]] }, h("span", null, NOTA_SIG[t[1]])));
      nIdx++;
    }
  });
  return span;
}

function renderUnit(v, t, rvInfo) {
  const [, txt, ids, sp] = t;
  const m = /^([^\p{L}\p{N}]*)([\s\S]*?)([^\p{L}\p{N}]*)$/u.exec(txt);
  const pre = m[1], core = m[2], post = m[3];
  const tx = x => (rvInfo ? pronFrag(x, rvInfo) : x);
  const u = h("span", { class: "u", data: { ids: ids.join(",") } });
  const out = [];
  if (sp) out.push(" ");
  if (cfg.inter) {
    u.append(h("span", { class: "pt" }, tx(txt)),
      h("span", { class: "gr", lang: "grc" }, ids.map(i => (v.g[i - 1] ? v.g[i - 1][0] : "")).join(" ")),
      h("span", { class: "gs" }, strongsOf(v, ids, false).map(s => "G" + s).join(" ")));
  } else {
    if (pre) out.push(pre);
    u.append(tx(core || txt));
    const ss = strongsOf(v, ids, true);
    if (ss.length) u.append(h("sup", { class: "sg" }, ss.map((s, i) => [i ? " " : "", h("a", { href: "#/g/" + s, "data-g": s }, "G" + s)])));
  }
  out.push(u);
  if (post && !cfg.inter) out.push(post);
  return out;
}

/** Seção do painel com o que as camadas opcionais dizem sobre o versículo. */
function painelCamadas(V) {
  if (!cur.cam) return null;
  const chave = V.c + "." + V.v;
  const wj = cur.cam.wj[chave] || [], rv = cur.cam.rv[chave] || [];
  if (!wj.length && !rv.length) return null;
  const itens = [];
  wj.forEach(r => {
    const cert = r[2] === "debatido" ? "limite debatido entre leituras" : `certeza ${r[2]}`;
    const tipo = r[5] ? `, ${TIPO_WJ[r[5]] || r[5]}` : "";
    const li = h("li", null, h("b", null, "Palavras de Jesus"), `: fala ${r[3]}, ${cert}${tipo}${r[4] ? "; verbo " + r[4] : ""}.`);
    if (r[6]) li.append(h("br"), h("span", { class: "leg" }, r[6]));
    itens.push(li);
  });
  rv.forEach(r => itens.push(h("li", null, h("b", null, "Pronome reverencial"), ": ", h("span", { lang: "grc" }, r[3]), ` → ${CAT_PRON[r[1]] || r[1]} (certeza ${r[2]}).`)));
  return h("details", { open: true }, h("summary", null, h("span", null, "Camadas opcionais", h("span", { class: "n" }, "revisado-2"))),
    h("p", { class: "leg", style: "margin:0 0 6px" }, cur.cam.estado + ". Podem errar: confira no grego."),
    h("ul", { class: "leg", style: "margin:0;padding-inline-start:1.1em" }, itens));
}

/* ------------------------------------------------------------------ seleção de versículo */
function limparSelecao() {
  cur.v = 0; cur.ids = [];
  $$(".verso.sel, .u.sel, .omit-u.sel, .nt.sel").forEach(e => e.classList.remove("sel"));
  painelVazio();
}
function selecionar(vs, ids, scroll) {
  cur.v = vs; cur.ids = ids || [];
  reaplicarSel(scroll);
  renderPainel();
  $("#painel").classList.add("aberto");   // no celular o painel é uma folha que sobe; no desktop a classe não muda nada
}
function reaplicarSel(scroll) {
  $$(".verso.sel, .u.sel, .omit-u.sel").forEach(e => e.classList.remove("sel"));
  if (!cur.v) return;
  const el = $("#v" + cur.v);
  if (!el) return;
  el.classList.add("sel");
  if (cur.ids.length) {
    const alvo = cur.ids.join(",");
    $$(".u, .omit-u", el).forEach(u => { if (u.dataset.ids === alvo) u.classList.add("sel"); });
  }
  if (scroll) el.scrollIntoView({ block: "center" });
}
function irVerso(vs, ids, nota) {
  const alvo = `#/${cur.livro}/${cur.cap}/${vs}`;
  cur.nota = nota == null ? null : nota;
  if (location.hash !== alvo) history.replaceState(null, "", alvo);   // não dispara hashchange: o capítulo não é redesenhado
  selecionar(vs, ids, false);
}

/* ------------------------------------------------------------------ painel do versículo */
function painelVazio() {
  $("#painel").classList.remove("aberto");
  $("#painel-in").replaceChildren(h("p", { class: "vazio" }, "Toque num versículo ou num trecho do texto para ver o grego palavra a palavra, as notas e os versículos relacionados."));
}
function copiar(texto, rotulo, btn) {
  const ok = () => { const o = btn.textContent; btn.textContent = "Copiado ✓"; setTimeout(() => { btn.textContent = o; }, 1400); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(ok, () => window.prompt(rotulo, texto));
  else window.prompt(rotulo, texto);
}
function renderPainel() {
  const meta = D.byId[cur.livro];
  const V = cur.data && cur.data.byCV[cur.cap + "." + cur.v];
  const box = $("#painel-in");
  if (!V) { painelVazio(); return; }
  const ref = refStr(cur.livro, cur.cap, cur.v);
  const texto = verseText(cur.livro, cur.cap, cur.v) || "";
  const todos = cur.data.byCap[cur.cap].map(x => x.v);
  const pos = todos.indexOf(cur.v);
  const ir = d => { const nv = todos[pos + d]; if (nv != null) irVerso(nv, [], null); };

  const nts = V.t.filter(t => t[0] === "n");
  const pal = painelPal(V);
  const notas = h("div", null, nts.length ? nts.map((t, i) => h("div", { class: "nota" + (cur.nota === i ? " sel" : ""), data: { t: t[1], n: i } }, h("b", null, NOTA_ROT[t[1]]), linkNotas(t[2]))) : h("p", { class: "vazio" }, "Este versículo não tem notas."));
  const relBox = h("div", null, h("p", { class: "vazio" }, "Carregando…"));

  box.replaceChildren(
    h("button", { class: "btn sm fecha-painel", type: "button", onclick: () => $("#painel").classList.remove("aberto"), "aria-label": "Fechar painel" }, "✕"),
    h("h2", null, ref, V.s ? h("span", { class: "sup-tag" }, "ausente do SBLGNT") : null),
    h("p", { class: "lead", style: "font-family:var(--serif);font-size:1.02rem;color:var(--fg);margin:0 0 6px" }, texto),
    h("div", { class: "acoes" },
      h("button", { class: "btn sm", type: "button", onclick: () => ir(-1), disabled: pos <= 0 ? true : null, "aria-label": "Versículo anterior" }, "‹ anterior"),
      h("button", { class: "btn sm", type: "button", onclick: () => ir(1), disabled: pos >= todos.length - 1 ? true : null, "aria-label": "Próximo versículo" }, "próximo ›"),
      h("button", { class: "btn sm", type: "button", onclick: ev => copiar(`“${texto}” (${ref}, bibleme Traduções, rascunho de IA, pt-BR)`, "Copie o texto:", ev.currentTarget) }, "Copiar texto"),
      h("button", { class: "btn sm", type: "button", onclick: ev => copiar(location.href, "Copie o link:", ev.currentTarget) }, "Copiar link")),
    h("details", { open: true }, h("summary", null, h("span", null, "Grego palavra a palavra", h("span", { class: "n" }, String(V.g.length)))), painelGrego(V, pal)),
    h("details", { open: nts.length > 0 }, h("summary", null, h("span", null, "Notas", h("span", { class: "n" }, String(nts.length)))), notas),
    painelCamadas(V),
    h("details", { open: true }, h("summary", null, h("span", null, "Versículos relacionados")), relBox));
  painelRel(relBox, meta, V);
  if (cur.nota != null) { const n = $(".nota.sel", box); if (n) n.scrollIntoView({ block: "nearest" }); }
}

function edChips(mask) {
  return h("span", { class: "eds" }, EDS.map(([sg, nome], i) => h("span", { class: "ed " + (mask & (1 << i) ? "sim" : "nao"), title: nome + (mask & (1 << i) ? ": traz esta palavra" : ": não traz esta palavra") }, sg)));
}
function painelGrego(V, pal) {
  const parc = V.g.filter(g => g[4] != null).length;
  const intro = h("p", { class: "leg", style: "margin:0 0 8px" }, h("b", null, "Texto grego: SBLGNT"), " (Holmes, 2010), uma edição crítica, não um manuscrito único. ",
    V.s ? "Este versículo não está no SBLGNT: o grego vem de outras edições do TAGNT (marcadas em cada palavra). "
      : (parc ? `${parc} de ${V.g.length} palavras não estão em todas as edições comparadas (marcadas abaixo). ` : "Todas as palavras estão em todas as edições comparadas. "));
  const out = [intro, pal];
  if (V.x && V.x.length) {
    out.push(h("div", { class: "card", style: "margin:12px 0 0" },
      h("h3", { style: "font:600 .92rem var(--sans);margin:0 0 4px" }, "Outras edições trazem a mais"),
      h("p", { class: "leg", style: "margin:0 0 8px" }, "Palavras que estas edições têm neste versículo e o SBLGNT não tem (por isso não estão traduzidas no texto):"),
      h("ul", { class: "vx", lang: "grc" }, V.x.map(([gr, s, mo, mask]) => {
        const L = s ? lexOf(String(s).split(",")[0]) : null;
        return h("li", null, h("span", { class: "gr" }, gr), " ", s ? h("a", { href: "#/g/" + String(s).split(",")[0] }, "G" + String(s).split(",")[0]) : null,
          L && L.g ? h("span", { class: "leg", lang: "en" }, " " + L.g) : null, " ", edChips(mask));
      }))));
  }
  out.push(h("details", { class: "eds-leg" }, h("summary", null, h("span", null, "Edições comparadas")),
    h("ul", { class: "leg", style: "margin:4px 0;padding-inline-start:1.1em" }, EDS.map(([sg, nome]) => h("li", null, h("b", null, sg), ": ", nome))),
    h("p", { class: "leg" }, "O TAGNT compara edições impressas, não manuscritos individuais. Manuscritos (Sinaítico, Vaticano, papiros) aparecem só nas variantes que o aparato do SBLGNT cita; este leitor não os consulta diretamente. ",
      "Strong, lema, morfologia e as edições de cada palavra: STEPBible TAGNT. Glosa em inglês: TBESG (Abbott-Smith). O alinhamento ao português é deste projeto e está em revisão.")));
  return h("div", null, ...out);
}

function painelPal(V) {
  // palavra grega -> texto português da unidade que a traduz
  const pt = {}, omit = new Set();
  for (const t of V.t) {
    if (t[0] === "u") for (const i of t[2]) pt[i] = t[1].replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
    if (t[0] === "o") for (const i of t[2]) omit.add(i);
  }
  const sel = new Set(cur.ids);
  const ol = h("ol", { class: "pal", lang: "grc" });
  V.g.forEach((g, k) => {
    const i = k + 1, s = g[1];
    const L = s ? lexOf(String(s).split(",")[0]) : null;
    const lema = g[3] || (L && L.l) || "";
    const det = [];
    if (lema) det.push(h("span", { class: "lema" }, lema));
    if (L && L.t) det.push(L.t);
    if (s) det.push(...String(s).split(",").map((x, j) => [j ? " + " : "", h("a", { href: "#/g/" + x }, "G" + x)]));
    if (L && L.g) det.push(h("span", { lang: "en" }, L.g));
    if (g[2]) det.push(D.morf[g[2]] || g[2]);
    const li = h("li", { class: "gw" + (sel.has(i) ? " sel" : ""), data: { i } },
      h("span", { class: "n" }, String(i)), h("span", { class: "gr" }, g[0]),
      h("span", { class: "pt" + (omit.has(i) ? " om" : ""), lang: "pt-BR" }, omit.has(i) ? "não traduzido" : (pt[i] || "—")),
      h("span", { class: "det" }, det.flatMap((x, j) => [j ? " · " : "", x])),
      g[4] != null ? h("span", { class: "det" }, "edições: ", edChips(g[4])) : null);
    ol.append(li);
  });
  ol.addEventListener("click", ev => {
    if (ev.target.closest("a")) return;
    const li = ev.target.closest(".gw"); if (!li) return;
    const i = +li.dataset.i;
    const alvo = V.t.find(t => (t[0] === "u" || t[0] === "o") && t[2].includes(i));
    irVerso(cur.v, alvo ? alvo[2] : [i], null);
  });
  return ol;
}

async function painelRel(box, meta, V) {
  const my = ++painelRel.n;
  let rel;
  try { rel = await fetchJSON("rel/" + meta.id + ".json"); } catch (e) { if (my === painelRel.n) box.replaceChildren(aviso("Não foi possível carregar as relações. " + e.message)); return; }
  if (my !== painelRel.n) return;
  const lista = rel[V.c + "." + V.v] || [];
  if (!lista.length) { box.replaceChildren(h("p", { class: "vazio" }, "Nenhuma relação registrada.")); return; }
  const grupos = [[2, "Citações e alusões (notas do rascunho)"], [0, "Referências cruzadas"], [1, "Paralelos de vocabulário"]];
  box.replaceChildren(h("p", { class: "leg", style: "margin:0 0 10px" }, `${lista.length} relações. Origem: OpenBible.info (votos de leitores), notas do próprio rascunho e similaridade de vocabulário (Strong).`));
  for (const [tp, titulo] of grupos) {
    const itens = lista.filter(r => r[6] === tp);
    if (!itens.length) continue;
    const ul = h("ul", { class: "rel" });
    const mk = r => relItem(r);
    itens.slice(0, 8).forEach(r => ul.append(mk(r)));
    const g = h("div", { class: "rel-g" }, h("h3", null, `${titulo} (${itens.length})`), ul);
    if (itens.length > 8) {
      const b = h("button", { class: "btn sm mais", type: "button" }, `mostrar mais ${itens.length - 8}`);
      b.addEventListener("click", () => { itens.slice(8).forEach(r => ul.append(mk(r))); b.remove(); });
      g.append(b);
    }
    box.append(g);
  }
}
painelRel.n = 0;

function relItem(r) {
  const [ref, proj, bits, votos, sim, strongs] = r;
  const nt = proj ? proj.split(".") : null;
  const li = h("li");
  if (nt) {
    // o OpenBible usa a numeração do KJV: se o versículo não existe no SBLGNT (ex.: 2Co 13:14), aponta para o último do capítulo
    let vs = +nt[2], tx = verseText(nt[0], +nt[1], vs);
    const m = D.byId[nt[0]], ultimo = m && m.cap[+nt[1] - 1];
    if (!tx && ultimo && vs > ultimo) { vs = ultimo; tx = verseText(nt[0], +nt[1], vs); }
    li.append(h("a", { class: "r", href: linkVerso(nt[0], +nt[1], vs) }, obLabel(ref)));
    if (tx) li.append(h("span", { class: "t" }, tx.length > 170 ? tx.slice(0, 167).trimEnd() + "…" : tx));
  } else li.append(h("span", { class: "r at", title: "Antigo Testamento: o projeto ainda não tem esse texto" }, obLabel(ref)), h("span", { class: "chip", style: "margin-inline-start:6px" }, "AT"));
  const m = h("div", { class: "m" });
  if (bits & 1) m.append(h("span", { class: "chip", title: "Referência citada numa nota do rascunho" }, "nota"));
  if (bits & 2) m.append(h("span", { class: "chip", title: "Referência cruzada do OpenBible.info" }, "OpenBible" + (votos ? ` · ${votos} votos` : "")));
  if (bits & 4) m.append(h("span", { class: "chip", title: "Similaridade de vocabulário (Strong), de 0 a 100" }, `vocabulário · ${sim}%`));
  for (const s of (strongs || []).slice(0, 4)) {
    const L = lexOf(s);
    m.append(h("a", { class: "chip g", href: "#/g/" + s, title: L && L.g ? L.g : "" }, (L ? L.l + " " : "") + "G" + s));
  }
  li.append(m);
  return li;
}

function painelLegenda(abrir = true) {
  const box = $("#painel-in");
  box.replaceChildren(
    h("button", { class: "btn sm fecha-painel", type: "button", onclick: () => $("#painel").classList.remove("aberto"), "aria-label": "Fechar painel" }, "✕"),
    h("h2", null, "Legenda"),
    h("div", { class: "legenda" },
      h("p", { style: "margin:0" }, "Toque num versículo (ou no número dele) para abrir este painel com o grego, as notas e os relacionados."),
      ...Object.keys(NOTA_ROT).map(k => h("div", null, h("span", { class: "nt nt-" + k }, h("span", null, NOTA_SIG[k])), " ", h("b", null, NOTA_ROT[k]), ": ", NOTA_AJ[k], ".")),
      h("div", null, h("span", { class: "add-p" }, "palavra sublinhada"), ": acréscimo da tradução, sem palavra grega correspondente."),
      h("div", null, h("span", { class: "sg", style: "font-size:.9em" }, "G991"), ": número de Strong do termo; toque para ver o termo e todos os versículos em que aparece."),
      h("div", null, h("span", { style: "color:var(--wj)" }, "Texto em vermelho"), ": palavras de Jesus (camada opcional, revisada 2x, cobertura incompleta; botão \"Palavras de Jesus\")."),
      h("div", null, h("span", { style: "color:var(--wj);opacity:.72;text-decoration:underline dashed" }, "sublinhado tracejado"), ": dentro das palavras de Jesus, trecho cujo limite é debatido entre leituras (ex. onde termina a fala a Nicodemos em Jo 3)."),
      h("div", null, h("span", null, "Ele, Seu, Dele"), ": pronomes com maiúscula reverencial quando se referem a Deus, a Jesus ou ao Espírito (camada opcional, revisada 2x, cobertura incompleta; botão \"Pronomes reverenciais\")."),
      h("div", null, h("span", { class: "ed sim" }, "SBL"), " ", h("span", { class: "ed nao" }, "TR"), ": edições do grego. Cada palavra do painel mostra em quais edições ela aparece (riscada = não traz); o texto-base é o SBLGNT."),
      h("div", null, h("b", null, "Interlinear"), ": mostra, sob cada trecho em português, as palavras gregas e o Strong. ", h("b", null, "∅"), " marca palavra grega não traduzida."),
      h("p", { style: "margin:6px 0 0;color:var(--muted)" }, "Tudo isto é rascunho feito com uso de IA e sem revisão humana formal: confira no grego e em fontes confiáveis antes de usar.")));
  if (abrir) $("#painel").classList.add("aberto");
}

/* ------------------------------------------------------------------ página de um termo (Strong) */
async function renderStrong(num) {
  const my = ++token;
  cur.view = "strong"; cur.livro = null;
  topo({ cap: false });
  const L = lexOf(num);
  const main = $("#texto");
  if (!L) { main.replaceChildren(h("div", null, aviso("Número de Strong não encontrado: G" + num), h("p", null, h("a", { href: "#/" }, "Voltar")))); return; }
  document.title = `G${num} ${L.l} · Leitor NT · bibleme`;
  main.replaceChildren(h("p", { class: "carregando" }, "Carregando…"));
  let idx;
  try { idx = await fetchJSON("strong-indice.json"); } catch (e) { main.replaceChildren(aviso("Não foi possível carregar o índice. " + e.message)); return; }
  if (my !== token) return;
  const arr = idx[num] || [];
  const porLivro = {};
  for (const i of arr) { const b = D.refs[i][0]; porLivro[b] = (porLivro[b] || 0) + 1; }
  const filtro = h("select", { class: "sel-l", "aria-label": "Filtrar por livro" }, h("option", { value: "" }, `Todos os livros (${arr.length})`),
    D.livros.map((l, bi) => porLivro[bi] ? h("option", { value: bi }, `${l.nome} (${porLivro[bi]})`) : null));
  const ul = h("ul", { class: "lista" });
  const mais = h("button", { class: "btn sm mais", type: "button" });
  let lista = arr, shown = 0;
  const PAG = 40;
  const mostrar = () => {
    for (const i of lista.slice(shown, shown + PAG)) {
      const [bi, c, v] = D.refs[i]; const id = D.livros[bi].id;
      ul.append(h("li", null, h("a", { class: "r", href: linkVerso(id, c, v) }, refStr(id, c, v)), h("span", { class: "t" }, verseText(id, c, v) || "")));
    }
    shown = Math.min(lista.length, shown + PAG);
    mais.hidden = shown >= lista.length;
    mais.textContent = `mostrar mais (${lista.length - shown})`;
  };
  mais.addEventListener("click", mostrar);
  filtro.addEventListener("change", () => { lista = filtro.value === "" ? arr : arr.filter(i => D.refs[i][0] === +filtro.value); ul.replaceChildren(); shown = 0; mostrar(); });
  main.replaceChildren(
    h("div", { class: "largo" },
      h("p", null, h("a", { href: "#/" }, "← Início")),
      h("div", { class: "st-h" }, h("span", { class: "grc", lang: "grc" }, L.l), h("span", { class: "num" }, "G" + num), L.t ? h("span", { class: "sense" }, L.t) : null),
      L.g ? h("p", { class: "lead", lang: "en", style: "margin:.2em 0 0" }, L.g) : null,
      L.d ? h("p", { class: "sense", lang: "en" }, "Sentidos (Abbott-Smith, via TBESG): " + L.d) : null,
      h("div", { class: "stats" }, h("span", null, h("b", null, L.n.toLocaleString("pt-BR")), " ocorrências no Novo Testamento"), h("span", null, h("b", null, arr.length.toLocaleString("pt-BR")), " versículos")),
      L.r && L.r.length ? h("div", { class: "card", style: "margin-top:16px" }, h("h3", { style: "font-size:1rem" }, "Como este rascunho traduziu o termo"),
        h("p", { class: "leg", style: "margin:0 0 8px" }, "Trechos em português em que o termo é a única palavra de conteúdo (quantas vezes)."),
        h("div", { class: "rend" }, L.r.map(([t, n]) => h("span", { class: "chip" }, t, h("b", null, n)))),
        L.q && L.q.length ? [h("p", { class: "leg", style: "margin:12px 0 6px" }, "Dentro de trechos maiores:"), h("div", { class: "rend" }, L.q.map(([t, n]) => h("span", { class: "chip" }, t, h("b", null, n))))] : null) : null,
      h("div", { style: "margin:18px 0 8px;display:flex;gap:10px;align-items:center;flex-wrap:wrap" }, h("h3", { style: "margin:0" }, "Versículos"), filtro),
      ul, mais, rodape()));
  mostrar();
  painelLegenda(false);
  window.scrollTo(0, 0);
}

/* ------------------------------------------------------------------ busca */
const ALIAS = {};
function montarAlias() {
  const add = (k, id) => { const x = flat(k).replace(/[\s.]/g, ""); if (x) ALIAS[x] = id; };
  for (const l of D.livros) { add(l.nome, l.id); add(l.id, l.id); add(ABREV[l.id], l.id); }
  const extra = { joao: "Jhn", jo: "Jhn", jn: "Jhn", "1joao": "1Jn", "2joao": "2Jn", "3joao": "3Jn", "1jo": "1Jn", "2jo": "2Jn", "3jo": "3Jn", atos: "Act", apocalipse: "Rev", ap: "Rev",
    tiago: "Jas", tg: "Jas", marcos: "Mrk", mc: "Mrk", mr: "Mrk", lucas: "Luk", lc: "Luk", mateus: "Mat", mt: "Mat", ef: "Eph", fp: "Php", fl: "Php", fm: "Phm", hb: "Heb", gl: "Gal", rm: "Rom", cl: "Col", jd: "Jud", tt: "Tit",
    "1ts": "1Th", "2ts": "2Th", "1tm": "1Ti", "2tm": "2Ti", "1co": "1Co", "2co": "2Co", "1pe": "1Pe", "2pe": "2Pe", "1pd": "1Pe", "2pd": "2Pe" };
  for (const [k, id] of Object.entries(extra)) ALIAS[k] = id;
}
function parseRef(q) {
  const m = /^\s*(\d?\s*[A-Za-zÀ-ÿ.]+)\s*(\d+)?(?:\s*[:,.\s]\s*(\d+))?\s*$/.exec(q);
  if (!m) return null;
  const id = ALIAS[flat(m[1]).replace(/[\s.]/g, "")];
  if (!id) return null;
  return { id, cap: m[2] ? +m[2] : 1, v: m[3] ? +m[3] : 0 };
}
function buscar(raw) {
  const q = raw.trim();
  if (!q) return;
  const ms = /^[Gg]?\s*(\d{1,4})$/.exec(q);
  if (ms) { location.hash = "#/g/" + (+ms[1]); return; }
  const r = parseRef(q);
  if (r) { location.hash = linkVerso(r.id, r.cap, r.v); return; }
  location.hash = "#/busca/" + encodeURIComponent(q);
}
function buildTextoIdx() {
  if (D.tIdx) return D.tIdx;
  const out = [];
  D.livros.forEach((l, bi) => (D.texto[l.id] || []).forEach((cap, ci) => cap.forEach((t, vi) => { if (t) out.push({ id: l.id, c: ci + 1, v: vi + 1, t, f: flat(t) }); })));
  return (D.tIdx = out);
}
function buildLexIdx() {
  if (D.lIdx) return D.lIdx;
  return (D.lIdx = Object.entries(D.lexico).map(([s, L]) => ({ s, L, f: flat([L.l, L.t, L.g, L.d, ...(L.r || []).map(x => x[0])].filter(Boolean).join(" | ")) })));
}
function destacar(texto, termos) {
  const f = flat(texto);
  const marc = new Array(texto.length).fill(false);
  for (const t of termos) { let i = f.indexOf(t); while (i >= 0) { for (let k = i; k < i + t.length; k++) marc[k] = true; i = f.indexOf(t, i + t.length); } }
  const frag = document.createDocumentFragment();
  let k = 0;
  while (k < texto.length) {
    let j = k; while (j < texto.length && marc[j] === marc[k]) j++;
    const pedaco = texto.slice(k, j);
    frag.append(marc[k] ? h("mark", null, pedaco) : pedaco);
    k = j;
  }
  return frag;
}
function renderBusca(q) {
  cur.view = "busca"; cur.livro = null; ++token;
  topo({ cap: false });
  document.title = `Busca: ${q} · Leitor NT · bibleme`;
  $("#q").value = q;
  const termos = flat(q).split(/\s+/).filter(Boolean);
  const main = $("#texto");
  const termosGregos = buildLexIdx().filter(e => termos.every(t => e.f.includes(t))).sort((a, b) => b.L.n - a.L.n);
  const achados = buildTextoIdx().filter(e => termos.every(t => e.f.includes(t)));
  const ul = h("ul", { class: "lista" });
  const mais = h("button", { class: "btn sm mais", type: "button" });
  let shown = 0; const PAG = 50;
  const mostrar = () => {
    for (const e of achados.slice(shown, shown + PAG)) ul.append(h("li", null, h("a", { class: "r", href: linkVerso(e.id, e.c, e.v) }, refStr(e.id, e.c, e.v)), h("span", { class: "t" }, destacar(e.t, termos))));
    shown = Math.min(achados.length, shown + PAG);
    mais.hidden = shown >= achados.length; mais.textContent = `mostrar mais (${achados.length - shown})`;
  };
  mais.addEventListener("click", mostrar);
  main.replaceChildren(h("div", { class: "largo" },
    h("p", null, h("a", { href: "#/" }, "← Início")),
    h("h1", { style: "font-size:1.8rem" }, "Busca: ", q),
    h("p", { class: "leg" }, "Procura no texto em português (sem diferenciar acentos) e nos termos gregos (lema, transliteração, glosa em inglês e como o termo foi traduzido)."),
    termosGregos.length ? h("div", { class: "card" }, h("h3", { style: "font-size:1rem" }, `Termos gregos (${termosGregos.length}${termosGregos.length > 40 ? ", mostrando 40" : ""})`),
      h("div", { class: "res-g" }, termosGregos.slice(0, 40).map(e => h("a", { href: "#/g/" + e.s }, h("span", { class: "grc", lang: "grc" }, e.L.l), `G${e.s} · ${e.L.g || ""} · ${e.L.n}×`)))) : null,
    h("h3", { style: "margin:18px 0 8px" }, `Versículos (${achados.length.toLocaleString("pt-BR")})`),
    achados.length ? [ul, mais] : h("p", { class: "vazio" }, "Nenhum versículo encontrado."),
    rodape()));
  mostrar();
  painelLegenda(false);
  window.scrollTo(0, 0);
}

/* ------------------------------------------------------------------ rotas */
function route() {
  fecharGaveta(); $("#cfg").hidden = true; $("#b-cfg").setAttribute("aria-expanded", "false");
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  if (parts[0] !== "busca") $("#q").value = "";
  if (!parts.length) { token++; renderHome(); return; }
  if (parts[0] === "g" && parts[1]) { renderStrong(String(parseInt(parts[1], 10))); return; }
  if (parts[0] === "busca") { renderBusca(parts.slice(1).join("/")); return; }
  if (D.byId[parts[0]]) { mostrarCap(parts[0], parseInt(parts[1], 10) || 1, parseInt(parts[2], 10) || 0); return; }
  const r = parseRef(parts.join(" "));
  if (r) { location.hash = linkVerso(r.id, r.cap, r.v); return; }
  token++; renderHome();
}
function irCap(delta) {
  if (cur.view !== "cap") return;
  const bi = D.byId[cur.livro].i;
  let id = cur.livro, cap = cur.cap + delta;
  if (cap < 1) { if (bi === 0) return; const p = D.livros[bi - 1]; id = p.id; cap = p.cap.length; }
  else if (cap > D.byId[cur.livro].cap.length) { if (bi === D.livros.length - 1) return; id = D.livros[bi + 1].id; cap = 1; }
  location.hash = linkVerso(id, cap);
}

/* ------------------------------------------------------------------ eventos */
function ligar() {
  $("#b-livros").addEventListener("click", () => { $("#livros").hidden ? abrirGaveta(cur.livro ? "caps" : "livros", cur.livro) : fecharGaveta(); });
  $("#veil").addEventListener("click", fecharGaveta);
  $("#b-ant").addEventListener("click", () => irCap(-1));
  $("#b-prox").addEventListener("click", () => irCap(1));
  $("#cap-titulo").addEventListener("click", () => abrirGaveta("caps", cur.livro));
  $("#cap-titulo").setAttribute("role", "button"); $("#cap-titulo").setAttribute("tabindex", "0");
  $("#cap-titulo").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirGaveta("caps", cur.livro); } });
  $("#busca").addEventListener("submit", e => { e.preventDefault(); buscar($("#q").value); });
  for (const [id, k] of [["t-strong", "strong"], ["t-inter", "inter"], ["t-notas", "notas"], ["t-add", "add"], ["t-wj", "wj"], ["t-rv", "rv"]]) $("#" + id).addEventListener("click", () => alternar(k));
  $("#b-legenda").addEventListener("click", () => painelLegenda(true));
  $("#b-cfg").addEventListener("click", () => { const c = $("#cfg"); c.hidden = !c.hidden; $("#b-cfg").setAttribute("aria-expanded", String(!c.hidden)); });
  $$("#cfg [data-tema]").forEach(b => b.addEventListener("click", () => { cfg.tema = b.dataset.tema; store.set("tema", cfg.tema); aplicarCfg(); }));
  $("#tam-menos").addEventListener("click", () => { cfg.tam = clamp(Math.round((cfg.tam - 0.1) * 10) / 10, 0.9, 2); store.set("tam", cfg.tam); aplicarCfg(); });
  $("#tam-mais").addEventListener("click", () => { cfg.tam = clamp(Math.round((cfg.tam + 0.1) * 10) / 10, 0.9, 2); store.set("tam", cfg.tam); aplicarCfg(); });

  // texto do capítulo (delegação)
  const main = $("#texto");
  main.addEventListener("click", ev => {
    if (cur.view !== "cap") return;
    if (ev.target.closest("a")) return;
    const verso = ev.target.closest(".verso"); if (!verso) return;
    const nt = ev.target.closest(".nt");
    const u = ev.target.closest(".u, .omit-u");
    const ids = u && u.dataset.ids ? u.dataset.ids.split(",").map(Number) : [];
    irVerso(+verso.dataset.v, ids, nt ? +nt.dataset.n : null);
  });
  // dica com o grego ao passar o mouse
  if (window.matchMedia && matchMedia("(hover: hover)").matches) {
    const tip = $("#tip");
    main.addEventListener("mouseover", ev => {
      if (cur.view !== "cap" || cfg.inter) return;
      const u = ev.target.closest(".u"); if (!u) { tip.hidden = true; return; }
      const verso = u.closest(".verso"); const V = cur.data.byCV[cur.cap + "." + verso.dataset.v]; if (!V) return;
      const ids = (u.dataset.ids || "").split(",").map(Number).filter(Boolean);
      tip.replaceChildren(...ids.map(i => {
        const g = V.g[i - 1]; if (!g) return null;
        const L = g[1] ? lexOf(String(g[1]).split(",")[0]) : null;
        return h("div", null, h("span", { class: "gr", lang: "grc" }, g[0]), g[1] ? ` · G${g[1]}` : "", L && L.g ? ` · ${L.g}` : "");
      }));
      const r = u.getBoundingClientRect();
      tip.hidden = false;
      tip.style.left = clamp(r.left, 8, innerWidth - tip.offsetWidth - 8) + "px";
      tip.style.top = (r.bottom + 6 + tip.offsetHeight > innerHeight ? r.top - tip.offsetHeight - 6 : r.bottom + 6) + "px";
    });
    main.addEventListener("mouseleave", () => { tip.hidden = true; });
    main.addEventListener("click", () => { tip.hidden = true; });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { fecharGaveta(); $("#cfg").hidden = true; $("#painel").classList.remove("aberto"); $("#tip").hidden = true; return; }
    if (e.target.matches("input, select, textarea") || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === "ArrowLeft") irCap(-1); else if (e.key === "ArrowRight") irCap(1);
  });
  document.addEventListener("click", e => { if (!$("#cfg").hidden && !e.target.closest("#cfg, #b-cfg")) { $("#cfg").hidden = true; $("#b-cfg").setAttribute("aria-expanded", "false"); } });
  window.addEventListener("hashchange", route);
}

/* ------------------------------------------------------------------ início */
async function boot() {
  aplicarCfg();
  ligar();
  try {
    const [li, refs, texto, lexico, morf] = await Promise.all(["livros.json", "refs.json", "texto.json", "lexico.json", "morf.json"].map(fetchJSON));
    D.info = li.info; D.livros = li.livros; D.refs = refs; D.texto = texto; D.lexico = lexico; D.morf = morf;
    D.camadas = await fetchJSON("camadas.json").catch(() => ({}));   // camadas opcionais: palavras de Jesus e pronomes reverenciais
    D.byId = Object.fromEntries(D.livros.map((l, i) => [l.id, { ...l, i }]));
    montarAlias();
  } catch (e) {
    $("#texto").replaceChildren(aviso("Não foi possível carregar os dados do leitor (" + e.message + "). Se você abriu o arquivo direto do disco, sirva a pasta por HTTP (por exemplo: python3 -m http.server)."));
    return;
  }
  route();
}
boot();
})();
