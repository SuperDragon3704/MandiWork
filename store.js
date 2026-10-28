/* ---------- saved progress (this browser only) ---------- */
const P=(()=>{try{return JSON.parse(localStorage.getItem("hs-prog")||"{}")}catch(e){return{}}})();
["done","scores","qotd","exams","tb"].forEach(k=>P[k]=P[k]||{});
const savep=()=>{try{localStorage.setItem("hs-prog",JSON.stringify(P))}catch(e){}};
const dkey=(d=new Date())=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
