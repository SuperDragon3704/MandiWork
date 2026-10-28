/* ---------- question of the day + monthly calendar ---------- */
let qm=0;
function qd(){const dk=dkey(),n=Math.floor(Date.now()/DAY),lv=LV[n%6];if(!ensure(lv))return null;
 const pool=DB[lv.id],r=rng([...dk].reduce((h,c)=>h*31+c.charCodeAt(0)|0,11)),w=pool[Math.floor(r()*pool.length)],t=n%3;return{dk,lv,w,t,o:mkOpts(w,t,pool,r)}}
function cal(){const d=new Date(),m=new Date(d.getFullYear(),d.getMonth()+qm,1),y=m.getFullYear(),mo=m.getMonth(),pre=y+"-"+String(mo+1).padStart(2,"0"),days=new Date(y,mo+1,0).getDate(),today=dkey();let c="";
 for(let i=0;i<m.getDay();i++)c+="<i></i>";
 for(let i=1;i<=days;i++){const k=pre+"-"+String(i).padStart(2,"0");c+=`<b class="day${P.qotd[k]?" done":""}${k===today?" today":""}">${i}</b>`}
 const n=Object.keys(P.qotd).filter(k=>k.startsWith(pre)).length;
 return`<div class="calh"><button class="ghost" data-a="qprev" aria-label="Previous month">‹</button><span>${m.toLocaleDateString(undefined,{month:"long",year:"numeric"})}: ${n} day${n===1?"":"s"} done</span><button class="ghost" data-a="qnext" aria-label="Next month">›</button></div><div class="cgrid">${["S","M","T","W","T","F","S"].map(x=>`<em>${x}</em>`).join("")}${c}</div>`}
function qotd(){const q=qd();if(!q)return'<div class="qbox"><p class="note">Loading today\'s question…</p></div>';
 const{dk,lv,w,t,o}=q,a=P.qotd[dk],ask=t===0?`What does ${w.zh} mean?`:t===1?`Which word means “${w.en}”?`:`How is ${w.zh} pronounced?`;
 return`<div class="qbox"><p class="ask">Question of the day · ${lv.name}</p><p style="font-size:22px;margin:4px 0 14px">${ask}</p><div class="opts">${o.map((x,k)=>`<button class="opt${t===1?" zhopt":""}${a?(x===w?" ok":k===a.k?" bad":""):""}" data-a="qq" data-k="${k}" ${a?"disabled":""}>${lab(x,t)}</button>`).join("")}</div>${a?`<p class="fb">${a.ok?"Correct.":`Not quite: ${w.zh} is ${w.py}, “${w.en}”. Added to Adaptive.`}</p>`+cal():'<p class="note">Answer to see your calendar.</p>'}</div>`}
