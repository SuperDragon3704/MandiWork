/* adaptive */
let cur=null,shown=false;
function adaptive(){const n=Date.now(),all=Object.values(deck);if(!cur||!deck[cur.zh])cur=pickCard();
 const due=all.filter(c=>c.due<=n).length,lrn=all.filter(c=>c.state!=="review").length,mat=all.filter(c=>c.state==="review"&&c.ivl>=21).length;
 let main;
 if(cur){main=`<div class="card"><div class="hz" lang="zh">${cur.zh}</div>${shown?`<div class="py">${cur.py}</div><p class="en" style="margin:4px 0 12px;font-size:20px">${cur.en}</p>`:`<div class="hint">Recall the meaning and the pronunciation</div>`}<button class="ghost" data-a="say" data-t="${cur.zh}">Listen</button></div>`+
  (shown?`<div class="rate">${["Again","Hard","Good","Easy"].map((l,i)=>`<button data-a="rate" data-r="${i+1}"><b>${l}</b><span>${fmt(sched(cur,i+1).due-n)}</span></button>`).join("")}</div>`:`<button class="main" data-a="show" style="margin-bottom:34px">Show answer</button>`)}
 else if(all.length){const nx=all.reduce((a,b)=>a.due<b.due?a:b);main=`<div class="card"><div class="hz" style="font-size:56px">✓</div><p class="note" style="margin:0 auto">All caught up. Next card ${dueIn(nx,n)}.</p></div>`}
 else main=`<div class="card"><p class="note" style="margin:0 auto">Nothing here yet. Words you miss in an exam land here automatically, or add 20 words from a level below.</p></div>`;
 const work=all.filter(c=>c.state!=="review"||c.ivl<21).sort((a,b)=>a.due-b.due).slice(0,20);
 const lbl={new:"new",learn:"learning",relearn:"relearning",review:"young"};
 return page("Adaptive","Scheduled the way Anki does it: hard words return within minutes, easy ones drift out to days and months.",
 `<div class="stats"><div><b>${due}</b>due now</div><div><b>${lrn}</b>learning</div><div><b>${mat}</b>mature</div><div><b>${all.length}</b>total</div></div>${main}`+
 (work.length?`<h2>Working on</h2>`+work.map(c=>`<div class="mini"><span class="hzs" lang="zh">${c.zh}</span><span>${c.py} · ${c.en}</span><small>${lbl[c.state]} · ease ${Math.round(c.ease*100)}%${c.lapses?" · lapses "+c.lapses:""}</small><small class="r" style="grid-column:2">${dueIn(c,n)}</small></div>`).join(""):"")+
 `<h2>Add 20 words from a level</h2><div class="seed">${LV.map(l=>`<button class="ghost" data-a="seed" data-l="${l.id}">${l.name}</button>`).join("")}</div>${all.length?`<button class="link" data-a="reset">Reset Adaptive</button>`:""}`,["tests","Tests"])}
