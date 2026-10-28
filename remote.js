/* ---------- open-licence sources, loaded live and shown in our own reader ---------- */
const WB="https://en.wikibooks.org/w/api.php",WP="https://zh.wikipedia.org/api/rest_v1/feed/featured/";
const R={},jget=u=>fetch(u).then(r=>{if(!r.ok)throw 0;return r.json()});
const esc=t=>t.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const failed=k=>R[k]&&R[k].e;
function need(k,loader){if(R[k]&&R[k].v!==undefined)return R[k].v;if(!R[k]){R[k]={};const my=rt;R[k].p=loader().then(v=>R[k].v=v).catch(()=>R[k].e=1).then(()=>{if(my===rt)draw(true)})}}
const OK=new Set("p ul ol li table thead tbody tr td th h1 h2 h3 h4 h5 h6 b strong i em br dl dt dd blockquote div span".split(" "));
function clean(n){[...n.childNodes].forEach(c=>{if(c.nodeType===3)return;if(c.nodeType!==1){c.remove();return}const t=c.tagName.toLowerCase(),k=typeof c.className==="string"?c.className:"";
 if(/^(script|style|sup|img|figure|audio|video|svg|noscript)$/.test(t)||c.id==="toc"||/(^|\s)(mw-editsection|navbox|toc|noprint|thumb|reference|metadata|mbox)/.test(k)){c.remove();return}
 clean(c);if(!OK.has(t)){c.replaceWith(...c.childNodes);return}[...c.attributes].forEach(a=>c.removeAttribute(a.name))})}
/* one pipeline for textbook pages and reading texts: bold terms and linked concepts become notes, HSK words become tappable */
function buildDoc(id,title,sub,html,concepts={}){const doc=new DOMParser().parseFromString("<body>"+html,"text/html").body;clean(doc);
 const hits=[],notes=[],terms=Object.keys(concepts).filter(t=>t.length>1).sort((a,b)=>b.length-a.length);
 doc.querySelectorAll("b,strong").forEach(b=>{const t=b.textContent.trim();if(!t)return;const blk=b.closest("p,li,td,dd,div")||b.parentNode,m=document.createElement("mark");m.dataset.a="note";m.dataset.i=notes.push({t,n:blk.textContent.replace(/\s+/g," ").trim().slice(0,220)})-1;m.textContent=t;b.replaceWith(m)});
 const tw=document.createTreeWalker(doc,NodeFilter.SHOW_TEXT),ns=[];while(tw.nextNode())ns.push(tw.currentNode);
 ns.forEach(nd=>{if(nd.parentNode.closest("mark"))return;const x=nd.nodeValue;let h="";
  for(let i=0;i<x.length;){let hit=false;for(const t of terms){if(x.startsWith(t,i)){h+=`<mark data-a="note" data-i="${notes.push({t,n:concepts[t]})-1}">${t}</mark>`;i+=t.length;hit=true;break}}
   if(hit)continue;let m=null;for(let l=Math.min(4,x.length-i);l>0;l--){const w=LEX.get(x.substr(i,l));if(w){m=w;break}}
   if(m){h+=`<mark data-a="hit" data-i="${hits.push(m)-1}">${m.zh}</mark>`;i+=m.zh.length}else h+=esc(x[i++])}
  const tp=document.createElement("template");tp.innerHTML=h;nd.replaceWith(tp.content)});
 return{id,title,sub,auto:true,hits,notes,html:doc.innerHTML,plain:doc.textContent.replace(/\s+/g," ").slice(0,1500)}}
const wbc='<p class="note" style="margin-top:30px">Text: Wikibooks, “Chinese (Mandarin)”, licensed CC BY-SA. Pages load live and are highlighted by this app.</p>';
const tbPicker=()=>page("Textbooks","Choose a book. Its pages open here, highlighted with HSK vocabulary and key terms, and your place is saved.",`<button class="main" data-a="tbm" aria-expanded="${tbOpen}">Choose your textbook ${tbOpen?"▴":"▾"}</button>`+(tbOpen?`<div style="margin-top:14px">${TB.map((t,i)=>row("learning/textbooks/"+t.id,t.title,t.sub,t.g,i)).join("")}</div>`:"")+(P.tb.last?`<div style="margin-top:22px">${row("learning/textbooks/"+P.tb.last,"Continue where you left off",P.tb.lastT||"","续",1)}</div>`:"")+wbc,["learning","Learning"]);
async function tocWB(){let t=[],c="";do{const j=await jget(WB+"?action=query&list=allpages&apprefix="+encodeURIComponent("Chinese (Mandarin)/")+"&aplimit=500&format=json&origin=*"+c);t.push(...j.query.allpages.map(p=>p.title));c=j.continue?"&apcontinue="+encodeURIComponent(j.continue.apcontinue):""}while(c);
 const rk=s=>{const m=s.match(/Lesson\s*(\d+)/i);return /pronunc/i.test(s)?0:/vocab/i.test(s)?1:m?2+ +m[1]/100:9};
 return t.filter(s=>!/Planning|Contributors|How To Use|Print|Template|Talk|Cover/i.test(s)).map(s=>({title:s,label:s.replace("Chinese (Mandarin)/","")})).sort((a,b)=>rk(a.title)-rk(b.title)||a.title.localeCompare(b.title,undefined,{numeric:true}))}
const tbBack=["learning/textbooks","Textbooks"];
function wbToc(){const t=need("wbtoc",tocWB);if(!t)return page("Chinese (Mandarin)",failed("wbtoc")?"Could not reach Wikibooks. Check your connection and reload.":"Loading the table of contents…","",tbBack);
 return page("Chinese (Mandarin)","Pronunciation and vocabulary first, then the lessons in order. Progress is saved.",(P.tb.last?row("learning/textbooks/"+P.tb.last,"Continue",P.tb.lastT||"","续",2):"")+t.map((x,i)=>row("learning/textbooks/wb/"+i,x.label,P.done["wb/"+i]?"Quiz completed":"","文",i+3)).join("")+wbc,tbBack)}
function wbPage(i){const back=["learning/textbooks/wb","Contents"],t=need("wbtoc",tocWB);if(!t)return page("Chinese (Mandarin)",failed("wbtoc")?"Could not reach Wikibooks.":"Loading…","",back);
 const it=t[i];if(!it)return learnHub();
 const r=need("wbp"+i,()=>lexAll().then(()=>jget(WB+"?action=parse&page="+encodeURIComponent(it.title)+"&prop=text&redirects=1&disableeditsection=1&disabletoc=1&format=json&origin=*")).then(j=>buildDoc("wb/"+i,it.label,"Wikibooks, CC BY-SA. Underlined: HSK words and the book's bold key terms.",j.parse.text["*"])));
 if(!r)return page(it.label,failed("wbp"+i)?"Could not load this page.":"Loading the page…","",back);
 if(D!==r){openDoc(r);P.tb.last="wb/"+i;P.tb.lastT=it.label;savep()}
 return docView(back)+`<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px">${i>0?`<a class="main alt" style="display:inline-block;text-decoration:none" href="#/learning/textbooks/wb/${i-1}">Previous page</a>`:""}${i<t.length-1?`<a class="main" style="display:inline-block;text-decoration:none" href="#/learning/textbooks/wb/${i+1}">Next page</a>`:""}</div>`}
/* reading: a fresh set of texts every day from Chinese Wikipedia's daily feed */
const rdTabs=[["news","News"],["tfa","Article of the day"],["otd","On this day"],["own","Your own text"]];
let rdTab="news",rdItems=[];
const feed=()=>{const d=new Date();return jget(WP+d.getFullYear()+"/"+String(d.getMonth()+1).padStart(2,"0")+"/"+String(d.getDate()).padStart(2,"0"))};
const txt=h=>new DOMParser().parseFromString(h,"text/html").body.textContent.replace(/\s+/g," ").trim();
const cmap=ls=>Object.fromEntries((ls||[]).filter(l=>(l.normalizedtitle||l.title)&&l.extract).map(l=>[(l.normalizedtitle||l.title).replace(/_/g," "),l.extract.slice(0,200)]));
function rditems(f,tab){
 if(tab==="news")return(f.news||[]).map((n,i)=>({k:"news"+i,title:txt(n.story).slice(0,30),body:txt(n.story),c:cmap(n.links)}));
 if(tab==="tfa")return f.tfa?[{k:"tfa",title:(f.tfa.titles&&f.tfa.titles.normalized)||f.tfa.title,body:f.tfa.extract||"",c:{}}]:[];
 return(f.onthisday||[]).slice(0,12).map((o,i)=>({k:"otd"+i,title:o.year+"年",body:o.year+"年，"+o.text,c:cmap(o.pages)}))}
function readingView(){if(D)return docView(null);
 const tabs=`<div class="chips">${rdTabs.map(t=>`<button class="ghost" data-a="rtab" data-k="${t[0]}" aria-pressed="${t[0]===rdTab}">${t[1]}</button>`).join("")}</div>`;let body;
 if(rdTab==="own")body=`<textarea id="rt" class="search" rows="7" style="border-radius:22px;resize:vertical" lang="zh" placeholder="Paste Chinese text here"></textarea><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="main" data-a="rgo">Study this text</button><button class="main alt" data-a="rsample">Use a sample passage</button></div>`;
 else{const f=need("feed"+dkey(),feed);if(!f)body=`<p class="note">${failed("feed"+dkey())?"Could not reach today's feed. Use “Your own text” in the meantime.":"Loading today's texts…"}</p>`;
  else{rdItems=rditems(f,rdTab);body=rdItems.length?rdItems.map((x,i)=>`<button class="row" data-a="ropen" data-i="${i}" style="width:100%;background:none;border:0;border-bottom:1px solid var(--line);text-align:left;font:inherit;color:inherit;cursor:pointer;--i:${i}"><span><b>${x.title}</b><small>${P.done["rd/"+x.k+dkey()]?"Quiz completed. ":""}${x.body.slice(0,60)}…</small></span><span class="g" lang="zh">读</span></button>`).join(""):'<p class="note">Nothing in this category today.</p>'}}
 return page("Reading","A new set of texts every day from Chinese Wikipedia (CC BY-SA). Tap a word for its meaning, key concepts are underlined, and the lesson helper quizzes you on the text. Some items may appear in traditional characters.",tabs+body,["","Menu"])}
