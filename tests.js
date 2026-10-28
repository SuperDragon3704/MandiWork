/* exams */
let ex=null;
const lab=(w,t)=>t===0?w.en:t===1?w.zh:w.py;
function mkOpts(w,t,pool,r){const seen=new Set([lab(w,t)]),o=[w];for(const x of sh(pool,r)){const k=lab(x,t);if(!seen.has(k)){seen.add(k);o.push(x);if(o.length===4)break}}return sh(o,r)}
function startExam(lv,kind){const pool=DB[lv.id],n=kind==="practice"?30:10;
 ex={lv,kind,qs:shuf(pool).slice(0,n).map((w,k)=>({w,t:k%3,opts:mkOpts(w,k%3,pool)})),i:0,score:0,wrong:[],added:0,picked:null,rt}}
const exBack=()=>ex.kind==="practice"?["tests/practice","Practice tests"]:["tests/exams","Exams"];
function question(){const q=ex.qs[ex.i],t=q.t,n=ex.qs.length,done=ex.picked!=null;
 const prompt=t===1?`<div class="en big">${q.w.en}</div>`:`<div class="hz" lang="zh">${q.w.zh}</div>`;
 const opts=q.opts.map((o,k)=>{let c="opt"+(t===1?" zhopt":"");if(done){if(o===q.w)c+=" ok";else if(k===ex.picked)c+=" bad"}return`<button class="${c}" data-a="pick" data-k="${k}" ${done?"disabled":""}>${lab(o,t)}</button>`}).join("");
 const right=done&&q.opts[ex.picked]===q.w;
 return page(ex.lv.name+(ex.kind==="practice"?" practice":""),`Question ${ex.i+1} of ${n}`,`<div class="bar"><i style="width:${ex.i/n*100}%"></i></div><p class="ask">${["What does this mean?","Which word means this?","How is this pronounced?"][t]}</p>${prompt}${t!==1?`<button class="ghost" data-a="say" data-t="${q.w.zh}">Listen</button>`:""}<div class="opts">${opts}</div>${done?`<div class="fb">${right?"Correct.":`Not quite: ${q.w.zh} is ${q.w.py}, “${q.w.en}”. Added to Adaptive.`}</div><button class="main" data-a="next">${ex.i+1<n?"Next question":"See results"}</button>`:""}`,exBack())}
function result(){const n=ex.qs.length,b=exBack();
 return page(ex.lv.name+(ex.kind==="practice"?" practice":"")+" result","",`<div class="score">${ex.score}/${n}</div><p class="lead">${ex.wrong.length?ex.added+" new word"+(ex.added===1?"":"s")+" added to Adaptive for review.":"Clean sweep. Nothing to add to Adaptive."}</p>`+
 ex.wrong.map(w=>`<div class="mini"><span class="hzs" lang="zh">${w.zh}</span><span>${w.py}</span><small>${w.en}</small></div>`).join("")+
 `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:30px"><button class="main" data-a="retry">Try again</button><button class="main alt" data-a="go" data-h="tests/adaptive">Open Adaptive</button><button class="main alt" data-a="go" data-h="${b[0]}">${b[1]}</button></div>`,b)}

/* ---------- full-length exams ---------- */
const SP={hsk1:[["Listening",20,15],["Reading",20,17]],hsk2:[["Listening",35,25],["Reading",25,22]],hsk3:[["Listening",40,35],["Reading",30,30],["Writing",10,15]],hsk4:[["Listening",45,30],["Reading",40,40],["Writing",15,25]],hsk5:[["Listening",45,30],["Reading",45,45],["Writing",10,40]],hsk6:[["Listening",50,35],["Reading",50,50],["Writing",10,45]],hsk79:[["Listening",14,20],["Reading",14,25],["Writing",13,25]]};
const EP=2*DAY;let shc=0;try{shc=+localStorage.getItem("hs-sh")||0}catch(e){}
const bump=()=>{shc++;try{localStorage.setItem("hs-sh",shc)}catch(e){}};
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const sh=(a,r=Math.random)=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const clock=ms=>{ms=Math.max(0,Math.ceil(ms/1000));return Math.floor(ms/60)+":"+String(ms%60).padStart(2,"0")};
let fe=null;
function buildExam(lv){const pool=DB[lv.id],r=rng([...lv.id].reduce((h,c)=>h*31+c.charCodeAt(0)|0,7)+(Math.floor(Date.now()/EP)+shc)*1013),ws=sh(pool,r);let k=0;
 return{lv,si:0,qi:0,done:false,on:false,end:0,added:0,secs:SP[lv.id].map(([name,n,min])=>({name,min,items:Array.from({length:n},(_,i)=>{const w=ws[k++%ws.length],m=name[0],t=m==="L"?i%2:m==="R"?i%3:1;return{w,m,t,opts:m==="W"?null:mkOpts(w,t,pool,r),ans:null}})}))}}
const fsay=()=>{if(fe&&fe.on&&!fe.done){const q=fe.secs[fe.si].items[fe.qi];if(q.m==="L")speak(q.w.zh)}};
function finishSec(){fe.si++;fe.qi=0;
 if(fe.si>=fe.secs.length){fe.done=true;fe.on=false;fe.rep=fe.secs.map(s=>{let c=0;s.items.forEach(q=>{const ok=q.m==="W"?(q.ans||"").trim()===q.w.zh:q.opts[q.ans]===q.w;if(ok)c++;else if(miss(q.w))fe.added++});return{n:s.name,c,t:s.items.length}});P.exams[fe.lv.id]={p:Math.round(fe.rep.reduce((a,x)=>a+x.c,0)/fe.rep.reduce((a,x)=>a+x.t,0)*100),d:dkey()};savep()}
 else fe.end=Date.now()+fe.secs[fe.si].min*MIN;draw(false);fsay()}
function fintro(){const t=fe.secs.reduce((a,s)=>a+s.min,0);
 return page(fe.lv.name+" exam","Full length and timed. You cannot go back to a section once you finish it, and answers are only revealed in the final report.",fe.secs.map(s=>`<div class="mini"><span class="hzs" style="font:400 22px var(--serif)">${s.name}</span><span>${s.items.length} questions</span><small>${s.min} minutes</small></div>`).join("")+`<p class="note" style="margin-top:16px">${t} minutes in total. Pass mark 60%. Listening plays through your device voice, so use headphones. Questions change every 2 days.</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px"><button class="main" data-a="fstart">Start exam</button><button class="main alt" data-a="reshuf">Shuffle questions</button></div>`,["tests/exams","Exams"])}
function fq(){const s=fe.secs[fe.si],q=s.items[fe.qi],n=s.items.length;let pr,ask,body;
 if(q.m==="L"){pr=`<button class="main alt" data-a="say" data-t="${q.w.zh}">Play audio</button>`;ask=q.t===0?"Listen. What does it mean?":"Listen. Which word did you hear?"}
 else if(q.m==="W"){pr=`<div class="en big">${q.w.en}</div><p class="note">${q.w.py}</p>`;ask="Write the word in characters."}
 else{pr=q.t===1?`<div class="en big">${q.w.en}</div>`:`<div class="hz" lang="zh">${q.w.zh}</div>`;ask=["What does this mean?","Which word means this?","How is this pronounced?"][q.t]}
 body=q.m==="W"?`<input id="wa" class="search" lang="zh" value="${q.ans||""}" placeholder="汉字" autocomplete="off">`:`<div class="opts">${q.opts.map((o,k)=>`<button class="opt${q.t===1?" zhopt":""}${q.ans===k?" ok":""}" data-a="fa" data-k="${k}">${lab(o,q.t)}</button>`).join("")}</div>`;
 return page(fe.lv.name+" · "+s.name,`Question ${fe.qi+1} of ${n}`,`<div class="stats"><div><b id="tm">${clock(fe.end-Date.now())}</b>left in this section</div></div><p class="ask">${ask}</p>${pr}${body}<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">${fe.qi>0?'<button class="main alt" data-a="fprev">Previous</button>':""}${fe.qi<n-1?'<button class="main" data-a="fnext">Next</button>':""}<button class="main alt" data-a="ffin">Finish section</button></div>`,null)}
function frep(){const c=fe.rep.reduce((a,x)=>a+x.c,0),t=fe.rep.reduce((a,x)=>a+x.t,0),p=Math.round(c/t*100);
 return page(fe.lv.name+" report","",`<div class="score">${p}%</div><p class="lead">${p>=60?"Pass mark reached.":"Below the 60% pass mark."} ${fe.added} missed word${fe.added===1?"":"s"} added to Adaptive.</p>`+fe.rep.map(x=>`<div class="mini"><span class="hzs" style="font:400 22px var(--serif)">${x.n}</span><span>${x.c} of ${x.t} correct</span></div>`).join("")+`<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:30px"><button class="main" data-a="reshuf">Shuffle and retake</button><button class="main alt" data-a="go" data-h="tests/adaptive">Open Adaptive</button><button class="main alt" data-a="go" data-h="tests/exams">All exams</button></div>`,["tests/exams","Exams"])}
