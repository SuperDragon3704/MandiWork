/* ---------- router + events ---------- */
let view=home;
function draw(anim){app.classList.toggle("still",!anim);app.innerHTML=view()}
let rt=0;
function route(){const[a,b,c,d]=location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);cur=null;shown=false;vq="";vn=60;rt++;fe=null;D=null;pw=null;tbOpen=false;const lv=LV.find(l=>l.id===c);
 if(!a)view=home;
 else if(a==="tests"&&!b)view=testsHub;
 else if(a==="tests"&&b==="exams")view=examList;
 else if(a==="tests"&&b==="practice"&&!c)view=practiceList;
 else if(a==="tests"&&b==="exam"&&lv)view=()=>{if(!ensure(lv))return loading(lv.name,["tests/exams","Exams"]);if(!fe||fe.lv!==lv)fe=buildExam(lv);return fe.done?frep():fe.on?fq():fintro()};
 else if(a==="tests"&&b==="practice"&&lv)view=()=>{const k=b==="exam"?"exam":"practice";
  if(!ensure(lv))return loading(lv.name,k==="exam"?["tests/exams","Exams"]:["tests/practice","Practice tests"]);
  if(!ex||ex.rt!==rt)startExam(lv,k);return ex.i>=ex.qs.length?result():question()};
 else if(a==="tests"&&b==="adaptive")view=adaptive;
 else if(a==="vocab"&&!b)view=vocabHub;
 else if(a==="vocab"&&b==="lists"&&!c)view=listIndex;
 else if(a==="vocab"&&b==="list"&&lv)view=()=>listView(lv);
 else if(a==="learning"&&!b)view=learnHub;
 else if(a==="learning"&&b==="path"&&!c)view=pathList;
 else if(a==="learning"&&b==="path"&&PATH.some(x=>x.id===c)){const d=PATH.find(x=>x.id===c);view=()=>{if(D!==d)openDoc(d);return docView(["learning/path","Path"])}}
 else if(a==="learning"&&b==="textbooks"&&!c)view=tbPicker;
 else if(a==="learning"&&b==="textbooks"&&c==="wb"&&!d)view=wbToc;
 else if(a==="learning"&&b==="textbooks"&&c==="wb")view=()=>wbPage(+d);
 else if(a==="reading")view=readingView;
 else view=()=>soon(a);
 scrollTo(0,0);draw(true)}
app.addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(!b)return;const a=b.dataset.a;
 if(a==="say")speak(b.dataset.t);
 else if(a==="pick"&&ex.picked==null){const q=ex.qs[ex.i];ex.picked=+b.dataset.k;if(q.opts[ex.picked]===q.w)ex.score++;else{ex.wrong.push(q.w);if(miss(q.w))ex.added++}draw(false)}
 else if(a==="next"){ex.i++;ex.picked=null;draw(ex.i>=ex.qs.length)}
 else if(a==="retry"){startExam(ex.lv,ex.kind);draw(true)}
 else if(a==="go")location.hash="#/"+b.dataset.h;
 else if(a==="show"){shown=true;speak(cur.zh);draw(false)}
 else if(a==="rate"){deck[cur.zh]=sched(cur,+b.dataset.r);save();cur=null;shown=false;draw(false)}
 else if(a==="seed"){const lv=LV.find(l=>l.id===b.dataset.l);b.textContent="Adding…";getLevel(lv).then(w=>{shuf(w.filter(x=>!deck[x.zh])).slice(0,20).forEach(x=>deck[x.zh]=newCard(x));save();if(location.hash==="#/tests/adaptive")draw(false)})}
 else if(a==="shufall"){bump();draw(false)}
 else if(a==="reshuf"){const lv=fe.lv;bump();fe=buildExam(lv);draw(true)}
 else if(a==="fstart"){fe.on=true;fe.end=Date.now()+fe.secs[0].min*MIN;draw(true);fsay()}
 else if(a==="fa"){fe.secs[fe.si].items[fe.qi].ans=+b.dataset.k;draw(false)}
 else if(a==="fprev"){fe.qi--;draw(false);fsay()}
 else if(a==="fnext"){fe.qi++;draw(false);fsay()}
 else if(a==="ffin"){if(confirm("Finish this section? You cannot return to it."))finishSec()}
 else if(a==="tbm"){tbOpen=!tbOpen;draw(false)}
 else if(a==="note")pop(`<b>${D.notes[+b.dataset.i].t}</b><p>${D.notes[+b.dataset.i].n}</p>`)
 else if(a==="hit"){pw=D.hits[+b.dataset.i];pop(`<b lang="zh" style="font:700 26px var(--hz)">${pw.zh}</b><p>${pw.py}<br>${pw.en}</p><button class="ghost" data-a="say" data-t="${pw.zh}">Listen</button> <button class="ghost" data-a="addp">Add to Adaptive</button> `)}
 else if(a==="addp"){if(pw&&!deck[pw.zh]){deck[pw.zh]=newCard(pw);save()}b.textContent="Added";b.disabled=true}
 else if(a==="closep")$("#pop").style.display="none"
 else if(a==="send"){const i=$("#ci"),v=i.value.trim();if(!v)return;chat.push({r:"user",t:v});i.value="";$("#cl").innerHTML=chatH();ask().then(t=>{chat.push({r:"assistant",t});$("#cl").innerHTML=chatH()})}
 else if(a==="key"){const k=prompt("Paste your Anthropic API key. It is stored only in this browser.");if(k)try{localStorage.setItem("hs-key",k.trim())}catch(e){}}
 else if(a==="qa"){const q=qz.items[qz.i];if(qz.p==null){qz.p=+b.dataset.k;if(qz.p===q.a)qz.s++}$("#lh").innerHTML=lh()}
 else if(a==="qn"){qz.i++;qz.p=null;if(qz.i>=qz.items.length&&D.id){P.scores[D.id]={s:qz.s,n:qz.items.length};P.done[D.id]=1;savep()}$("#lh").innerHTML=lh()}
 else if(a==="qq"){const q=qd();if(!q||P.qotd[q.dk])return;const ok=q.o[+b.dataset.k]===q.w;P.qotd[q.dk]={k:+b.dataset.k,ok};if(!ok)miss(q.w);savep();draw(false)}
 else if(a==="qprev"){qm--;draw(false)}
 else if(a==="qnext"){qm++;draw(false)}
 else if(a==="rtab"){rdTab=b.dataset.k;draw(false)}
 else if(a==="ropen"){const it=rdItems[+b.dataset.i];lexAll().then(()=>{openDoc(buildDoc("rd/"+it.k+dkey(),it.title,"Chinese Wikipedia (CC BY-SA), "+dkey()+". Underlined: key concepts and HSK words.",esc(it.body),it.c));draw(true)})}
 else if(a==="qre"){qz.i=0;qz.s=0;qz.p=null;$("#lh").innerHTML=lh()}
 else if(a==="addall"){D.hits.forEach(w=>{if(!deck[w.zh])deck[w.zh]=newCard(w)});save();b.textContent="Added"}
 else if(a==="rsample")$("#rt").value=SAMPLE
 else if(a==="rgo"){const t=$("#rt").value;if(!t.trim())return;b.textContent="Loading word lists…";lexAll().then(()=>{openDoc(buildDoc("rd/own","Your text","Underlined: HSK words. Tap one to study it.",esc(t).replace(/\n/g,"<br>")));draw(true)})}
 else if(a==="rclose"){D=null;draw(true)}
 else if(a==="more"){vn+=60;$("#vl").innerHTML=vlist()}
 else if(a==="addw"){const x=vcur[+b.dataset.i];if(x&&!deck[x.zh]){deck[x.zh]=newCard(x);save()}$("#vl").innerHTML=vlist()}
 else if(a==="reset"&&confirm("Clear everything in Adaptive?")){deck={};save();cur=null;shown=false;draw(false)}});
addEventListener("hashchange",route);
setInterval(()=>{if(fe&&fe.on&&!fe.done){const l=fe.end-Date.now();if(l<=0)finishSec();else{const e=$("#tm");if(e)e.textContent=clock(l)}}},1000);
app.addEventListener("input",e=>{if(e.target.id==="wa")fe.secs[fe.si].items[fe.qi].ans=e.target.value;if(e.target.id==="q"){vq=e.target.value;vn=60;$("#vl").innerHTML=vlist()}});
setInterval(()=>{if(location.hash==="#/tests/adaptive"&&!cur&&!shown)draw(false)},15000);

/* ---------- theme + flowing background ---------- */
const root=document.documentElement,cv=$("#bg"),cx=cv.getContext("2d");let W,H,t=0,rgb="255,255,255";
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
function setTheme(th){root.dataset.theme=th;try{localStorage.setItem("hs-theme",th)}catch(e){}rgb=th==="light"?"0,0,0":"255,255,255";if(still)frame()}
$("#inv").onclick=()=>setTheme(root.dataset.theme==="light"?"dark":"light");
function size(){const d=devicePixelRatio||1;W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);if(still)frame()}
function frame(){cx.clearRect(0,0,W,H);const N=24;
 for(let i=0;i<N;i++){cx.beginPath();const y0=H*(i+1)/(N+1),a=26+i*2.2;
  for(let x=0;x<=W+10;x+=10){const y=y0+Math.sin(x*.0045+t*.5+i*.32)*a+Math.sin(x*.011-t*.35+i*.2)*a*.35;x?cx.lineTo(x,y):cx.moveTo(x,y)}
  cx.strokeStyle=`rgba(${rgb},${.05+.09*i/N})`;cx.lineWidth=1;cx.stroke()}
 t+=.012}
function loop(){frame();requestAnimationFrame(loop)}
addEventListener("resize",size);
let saved=null;try{saved=localStorage.getItem("hs-theme")}catch(e){}
setTheme(saved||"dark");size();if(!still)loop();route();
