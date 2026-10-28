/* ---------- helpers ---------- */
const $=s=>document.querySelector(s),app=$("#app");
const shuf=a=>[...a].sort(()=>Math.random()-.5);
const speak=t=>{try{const u=new SpeechSynthesisUtterance(t);u.lang="zh-CN";u.rate=.8;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}};
const DAY=864e5,MIN=6e4,LS=[1,10],RS=[10];
let deck={};try{deck=JSON.parse(localStorage.getItem("hs-deck")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("hs-deck",JSON.stringify(deck))}catch(e){}};
const fmt=ms=>{const m=ms/MIN;if(m<1)return"<1m";if(m<60)return Math.round(m)+"m";if(m<1440)return Math.round(m/60)+"h";const d=ms/DAY;if(d<30)return Math.round(d)+"d";if(d<365)return(d/30).toFixed(1).replace(".0","")+"mo";return(d/365).toFixed(1)+"y"};
const dueIn=(c,n=Date.now())=>c.due<=n?"now":"in "+fmt(c.due-n);

/* ---------- Anki-style scheduler (SM-2 variant) ---------- */
function newCard(w){return{...w,state:"new",step:0,ease:2.5,ivl:0,due:Date.now(),lapses:0,reps:0}}
function grad(c,ivl,now){c.state="review";c.ivl=ivl;c.step=0;c.due=now+ivl*DAY}
function sched(c0,r,now=Date.now()){const c={...c0};c.reps++;
 if(c.state==="new"){c.state="learn";c.step=0}
 if(c.state==="learn"||c.state==="relearn"){const relearn=c.state==="relearn",st=relearn?RS:LS;
  if(r===1){c.step=0;c.due=now+st[0]*MIN}
  else if(r===2){const a=st[c.step],b=st[c.step+1];c.due=now+(b?(a+b)/2:a*1.5)*MIN}
  else if(r===3){c.step++;if(c.step>=st.length)grad(c,relearn?c.ivl:1,now);else c.due=now+st[c.step]*MIN}
  else grad(c,relearn?c.ivl+1:4,now);
  return c}
 if(r===1){c.lapses++;c.ease=Math.max(1.3,c.ease-.2);c.ivl=1;c.state="relearn";c.step=0;c.due=now+RS[0]*MIN;return c}
 if(r===2){c.ivl=Math.max(c.ivl+1,Math.round(c.ivl*1.2));c.ease=Math.max(1.3,c.ease-.15)}
 if(r===3)c.ivl=Math.max(c.ivl+1,Math.round(c.ivl*c.ease));
 if(r===4){c.ivl=Math.max(c.ivl+1,Math.round(c.ivl*c.ease*1.3));c.ease+=.15}
 c.due=now+c.ivl*DAY;return c}
function miss(w){const c=deck[w.zh];if(c){c.due=Math.min(c.due,Date.now());save();return false}deck[w.zh]=newCard(w);save();return true}
function pickCard(){const n=Date.now(),all=Object.values(deck);
 return all.filter(x=>x.due<=n).sort((a,b)=>a.due-b.due)[0]||all.filter(x=>x.state!=="review"&&x.due<=n+20*MIN).sort((a,b)=>a.due-b.due)[0]||null}
