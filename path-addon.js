/* Path add-on: replaces the 4 starter lessons with the full 15-unit curriculum, shown as a winding trail.
   Paste inside <script>...</script> just before </body>, or save as path-addon.js and load it there. */
(function(){
const BN=["Start here","Block 1 · The absolute basics","Block 2 · Daily survival language","Block 3 · Expanding independence","Block 4 · Structural mastery"];
const U=[
{b:0,id:"method",g:"法",title:"How to study",sub:"The method behind this path",
text:"Learn the most frequent words first, then review them with {{spaced repetition|Cards you find hard come back sooner and easy ones come back after days or months. The Flashcards and Adaptive tabs do this for you.}}. Use more than one sense: {{say it, read it, write it|Sound, sight and movement together build stronger memory than looking alone.}}. Add real input early in the Reading tab, and practise whole sentences through {{meaningful use|Dialogues and role-play teach word order and usage better than memorising forms.}}.",
quiz:[["What should you learn first?",["Rare words","The most frequent words","Idioms"],1],["Why use several senses at once?",["Stronger memory","Less review","Faster typing"],0]]},
{b:1,id:"u1",g:"音",title:"Pronunciation and pinyin",sub:"Sounds, tones and tone changes",
text:"Pinyin spells every sound, so learn it before characters. Each syllable has an {{initial|The opening consonant, like m in mā or sh in shū.}}, a final and a tone. Contrast {{b and p|Unaspirated b has no puff of air; aspirated p does. Hold a tissue to your lips to check.}} and {{z and zh|z puts the tongue tip at the teeth; zh curls the tongue back.}}. The four tones, {{mā má mǎ mà|High level, rising, dipping, falling. The tone changes the meaning: mother, hemp, horse, scold.}}, matter. Watch for {{two third tones|When two third tones meet, the first is said rising: nǐ hǎo sounds like ní hǎo.}} and for neutral tone and erhua (儿).",
quiz:[["Two third tones in a row: the first is said…",["Falling","Rising","Level"],1],["Which sound carries a puff of air?",["b","p","m"],1]]},
{b:1,id:"u2",g:"字",title:"Characters and writing",sub:"Strokes, radicals, frequency",
text:"Characters are written stroke by stroke in a set order: {{top to bottom, left to right|Basic stroke-order rules: horizontals before verticals, and outside before inside.}}. Common {{radicals|Meaning parts of a character: 氵 points to water, 亻 to people, 扌 to the hand.}} help you spot patterns. Learn the most frequent characters first: {{about 1,000 characters cover roughly 90% of everyday text|A frequency fact from beginner guides, which is why common characters come first.}}. Practise by hand, then type with a pinyin keyboard.",
quiz:[["Which radical hints at water?",["氵","亻","扌"],0],["In 十, which stroke comes first?",["The vertical","The horizontal","Either"],1]]},
{b:1,id:"u3",g:"你",title:"Identity and greetings",sub:"Introduce yourself",
text:"Start speaking at once. {{你好 nǐ hǎo|Hello. Literally: you good.}} opens a conversation, {{我叫…|My name is… Put your name after 叫.}} gives your name and {{我是…人|I am a person of… Use it for nationality: 我是美国人.}} gives where you are from. Add 谢谢 (thank you) and 再见 (goodbye). Use 我, 你, 他 and 她, make plurals with {{们|Adds a plural to pronouns: 我们 we, 你们 you all.}}, and negate with 不. Role-play an introduction aloud.",
quiz:[["Which means “My name is…”?",["我叫…","我是…","我有…"],0],["What does 们 do?",["Makes pronouns plural","Asks a question","Marks the past"],0]]},
{b:1,id:"u4",g:"数",title:"Numbers, time and dates",sub:"Counting and the calendar",
text:"Count to 100 by combining digits: {{十一 is 11, 二十 is 20|Chinese numbers are regular, so once you know 1 to 10 you can build up to 99.}}. Dates run from largest to smallest: {{年 月 日|Year, month, day, as in 2026年10月28日.}}. Ask the time with 几点 and add {{半|Half past: 三点半 is 3:30.}} for half hours. Use 早上, 中午 and 晚上 for parts of the day.",
quiz:[["How do you say 20?",["二十","十二","二百"],0],["Dates are ordered…",["Year, month, day","Day, month, year","Month, day, year"],0]]},
{b:2,id:"u5",g:"家",title:"Family and measure words",sub:"Possession and counting",
text:"Learn 妈妈, 爸爸 and 姐姐. Show possession with {{有|To have: 我有一个姐姐. The negative is 没有.}} and 的, as in {{我的书|的 links owner and thing, like 's in English.}}. Counting needs a {{measure word|A measure word sits between the number and the noun: 个 is all-purpose, 只 for pets, 本 for books, 张 for flat things.}}: 两只猫, 一本书. Learn each noun with its measure word.",
quiz:[["Which measure word fits 书 (book)?",["本","只","张"],0],["Which means “I have a sister”?",["我有姐姐","我是姐姐","我去姐姐"],0]]},
{b:2,id:"u6",g:"吃",title:"Food and shopping",sub:"Ordering and prices",
text:"Order with {{我要…|I want… A direct, polite way to order: 我要这个.}} or 来一杯茶. Ask the price with {{多少钱|How much? Money is counted in 元 (also 块) and 角 (毛).}}. Point with 这个 and 那个. Role-play a restaurant: call 服务员, order 米饭 and 面条, then pay.",
quiz:[["How do you ask the price?",["多少钱","几点","在哪里"],0],["What does 这个 mean?",["This one","That one","Which one"],0]]},
{b:2,id:"u7",g:"路",title:"Directions and transport",sub:"Where things are",
text:"Ask where something is with {{在哪里|Where is it? 银行在哪里？ 在 marks location.}}. Give directions with 左, 右, 前 and 后, and say where you are going with {{去|To go: 我去火车站. The destination follows directly.}}. Learn 地铁, 公共汽车, 出租车 and 火车, then try: 银行在超市右边.",
quiz:[["Which word means left?",["左","右","前"],0],["Which verb means to go?",["去","在","有"],0]]},
{b:2,id:"u8",g:"天",title:"Daily life and weather",sub:"Routines and hobbies",
text:"Describe your day with times: 早上七点上班. Talk about the weather with {{下雨 and 下雪|Rain and snow use 下, to fall: 今天下雨.}}, 冷 and 热. Say what you enjoy with {{喜欢|To like: 我喜欢看电影.}}. Ask 周末你做什么？ and write your own routine in three sentences.",
quiz:[["What does 下雨 mean?",["It is raining","It is hot","It is late"],0],["Which word means to like?",["喜欢","需要","希望"],0]]},
{b:3,id:"u9",g:"了",title:"Aspect: 了, 过 and 在",sub:"Chinese has no tenses",
text:"Chinese marks aspect with particles, not tense. {{了|Completed action: 我吃了.}} shows completion, {{过|Past experience: 我去过中国.}} shows experience, and 在 or 正在 shows an action in progress: 他在看书. The future uses 要, 会 or 打算. Describe last weekend, right now and tomorrow.",
quiz:[["Which marks past experience?",["过","了","着"],0],["他在看书 means he is…",["Reading now","Read yesterday","Will read"],0]]},
{b:3,id:"u10",g:"比",title:"Comparisons",sub:"Bigger, smaller, the same",
text:"Compare with {{A 比 B + adjective|我比他高: I am taller than him. You do not add a word for “more”.}}. Say two things are equal with 跟…一样, as in 她跟我一样大. Strengthen adjectives with 非常 and 特别, or say 太…了. Describe two people or places aloud.",
quiz:[["Which means “I am taller than him”?",["我比他高","我跟他高","我是他高"],0],["Equality uses…",["跟…一样","比","被"],0]]},
{b:3,id:"u11",g:"游",title:"Travel and digital life",sub:"Hotels, airports, payments",
text:"Reserve a room with {{预订|To book: 我想预订一个房间.}} and use 入住 and 退房 for check-in and check-out. At the airport ask 在哪里办登机手续？ Learn emergency phrases: 救命, 护照丢了, 我迷路了. Pay by app with {{扫一扫|To scan a QR code, used for WeChat and Alipay payments.}}.",
quiz:[["Which word means to check out?",["退房","入住","预订"],0],["扫一扫 is used to…",["Scan a QR code","Order food","Ask directions"],0]]},
{b:3,id:"u12",g:"工",title:"Work and school",sub:"Meetings, phone calls, email",
text:"Learn job titles such as 工程师, 医生 and 老板. Arrange a meeting: 我们下午三点开会. On the phone open with {{你好，我是…，请问…|A polite phone opening: hello, this is…, may I ask…?}}. Begin formal letters with {{尊敬的…|Dear…, a respectful opening for formal messages.}} and use 您 for respect.",
quiz:[["Which opens a formal letter?",["尊敬的…","你好…","喂…"],0],["您 is…",["Polite “you”","Plural “you”","“He”"],0]]},
{b:4,id:"u13",g:"把",title:"把, 被 and complements",sub:"Advanced sentence patterns",
text:"With {{把|Puts the object before the verb to show what is done to it: 请把门打开.}} the object comes first. {{被|Marks the passive, often for something unfortunate: 他被狗咬了.}} shows what happens to someone. Result complements add the outcome: 听懂, 看见, 吃完. Rewrite active sentences with 把 and 被 for practice.",
quiz:[["请把门打开 means…",["Please open the door","The door opened","I like doors"],0],["被 is usually…",["Passive","A question","Future"],0]]},
{b:4,id:"u14",g:"因",title:"Conjunctions and logic",sub:"Linking ideas in pairs",
text:"Link ideas in pairs: {{如果…就…|If… then: 如果下雨，我们就不去.}}, {{虽然…但是…|Although… but: Chinese uses both words together.}}, 不仅…而且… and 即使…也…. Put the condition first. Write three sentences with different pairs, then read a short paragraph and spot them.",
quiz:[["Which means “although… but”?",["虽然…但是","如果…就","不仅…而且"],0],["The condition clause comes…",["First","Last","Never"],0]]},
{b:4,id:"u15",g:"成",title:"Idioms and culture",sub:"成语, 面子 and register",
text:"A 成语 has four characters, like {{天天向上|Make progress every day. Both literal and figurative meanings are used.}}. Learn polite replies such as 哪里哪里 and the idea of {{面子|Face: social dignity and reputation, central to politeness.}}. Notice written (书面语) versus spoken (口语) style, and read short stories or news to see idioms in context.",
quiz:[["How many characters is a 成语?",["Four","Two","Six"],0],["面子 means…",["Face (dignity)","Noodles","Surface"],0]]}
];
PATH.splice(0,PATH.length,...U);
/* carry over progress from the old four lessons */
if((P.done.pinyin||P.done.tones)&&!P.done.u1)P.done.u1=1;
if(P.done.characters&&!P.done.u2)P.done.u2=1;
if(P.done.phrases&&!P.done.u3)P.done.u3=1;
try{savep()}catch(e){}

const items=[];let lastB=-1;U.forEach(u=>{if(u.b!==lastB){items.push(["b",BN[u.b]]);lastB=u.b}items.push(["u",u.id])});
const css=document.createElement("style");css.textContent=`
.trail{position:relative;margin:14px 0 50px}
.trail svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.trail path{fill:none;stroke:var(--line);stroke-width:3;stroke-dasharray:2 10;stroke-linecap:round;vector-effect:non-scaling-stroke}
@keyframes tfade{from{opacity:0}to{opacity:1}}
.trail>*:not(svg){animation:tfade .9s both;animation-delay:calc(var(--i,0)*45ms)}
.tn{position:absolute;transform:translate(-50%,-50%);width:60px;height:60px;border-radius:50%;border:1.5px solid var(--ink);background:var(--bg);color:var(--ink);display:flex;align-items:center;justify-content:center;text-decoration:none;font:700 25px var(--hz);transition:transform .5s cubic-bezier(.2,.7,.2,1),background .3s,color .3s}
.tn:hover,.tn:focus-visible{transform:translate(-50%,-50%) scale(1.14)}
.tn.dn{background:var(--ink);color:var(--bg)}
@keyframes tpulse{0%{box-shadow:0 0 0 0 rgba(var(--rgb),.5)}100%{box-shadow:0 0 0 24px rgba(var(--rgb),0)}}
.tn.nx{animation:tpulse 2.2s infinite}
.tl{position:absolute;transform:translateY(-50%);max-width:42%}
.tl b{display:block;font:400 clamp(18px,3.6vw,24px)/1.15 var(--serif)}
.tl small{display:block;color:var(--mut);font-size:14px;line-height:1.3}
.tb{position:absolute;left:50%;transform:translate(-50%,-50%);background:var(--bg);border:1px solid var(--line);border-radius:30px;padding:6px 16px;font-size:13px;color:var(--mut);white-space:nowrap;z-index:1}
@media(max-width:520px){.tl{max-width:36%}.tl small{display:none}}`;
document.head.appendChild(css);

function trail(){
 const ids=U.map(u=>u.id),next=ids.find(i=>!P.done[i]),n=ids.filter(i=>P.done[i]).length,S=108,H=items.length*S+40;
 const pts=items.map((it,k)=>[it[0]==="b"?50:50+Math.sin(k*1.2)*30,k*S+52]);
 let d="M"+pts[0][0]+" "+pts[0][1];
 for(let k=1;k<pts.length;k++){const a=pts[k-1],b=pts[k];d+=" C "+a[0]+" "+(a[1]+S/2)+" "+b[0]+" "+(b[1]-S/2)+" "+b[0]+" "+b[1]}
 const nodes=items.map((it,k)=>{const[x,y]=pts[k];
  if(it[0]==="b")return'<div class="tb" style="top:'+y+'px;--i:'+k+'">'+it[1]+'</div>';
  const u=U.find(q=>q.id===it[1]),dn=P.done[u.id],left=x>=50;
  return'<a class="tn'+(dn?" dn":"")+(u.id===next?" nx":"")+'" href="#/learning/path/'+u.id+'" style="left:'+x+'%;top:'+y+'px;--i:'+k+'" aria-label="'+u.title+(dn?", completed":"")+'"><span lang="zh">'+(dn?"✓":u.g)+'</span></a>'+
  '<div class="tl" style="top:'+y+'px;--i:'+k+';'+(left?"right:"+(100-x)+"%;padding-right:44px;text-align:right":"left:"+x+"%;padding-left:44px")+'"><b>'+u.title+'</b><small>'+u.sub+'</small></div>'});
 return page("Path","A guided route from first sounds to idioms, built on frequency-first vocabulary, spaced review, and real input. Finish a unit's quiz to light it up.",
 '<div class="stats"><div><b>'+n+'</b>of '+U.length+' units complete</div></div><div class="trail" style="height:'+H+'px"><svg viewBox="0 0 100 '+H+'" preserveAspectRatio="none" aria-hidden="true"><path d="'+d+'"/></svg>'+nodes.join("")+'</div>',["learning","Learning"])}

/* show the trail instead of the old list, without touching the original code */
const _draw=draw;
draw=function(anim){
 if(/^#\/learning\/path\/?$/.test(location.hash)&&!(typeof welcomeView!=="undefined"&&view===welcomeView))view=trail;
 _draw(anim);
 [...app.querySelectorAll(".row small")].forEach(s=>{if(/Four steps/.test(s.textContent))s.textContent="Fifteen units from first sounds to idioms"});
};
if(/^#\/learning(\/path)?\/?$/.test(location.hash))draw(false);
})();
