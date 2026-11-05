/* Lessons add-on. Load AFTER path-addon.js (add its script tag, or paste this code, just before the closing body tag). */
(function(){
const D0={
u1:{w:"妈|mā|mom;麻|má|hemp;马|mǎ|horse;骂|mà|to scold;爸|bà|dad;八|bā|eight;怕|pà|to fear;爬|pá|to climb;你|nǐ|you;好|hǎo|good",s:"你 好|nǐ hǎo|Hello.;我 爱 你|wǒ ài nǐ|I love you.;妈妈 好|mā ma hǎo|Mom is well.;马 很 好|mǎ hěn hǎo|The horse is very good."},
u2:{w:"一|yī|one;二|èr|two;三|sān|three;十|shí|ten;人|rén|person;大|dà|big;小|xiǎo|small;口|kǒu|mouth;水|shuǐ|water;山|shān|mountain",s:"我 喝 水|wǒ hē shuǐ|I drink water.;山 很 大|shān hěn dà|The mountain is big.;三 个 人|sān gè rén|Three people.;十 个 人|shí gè rén|Ten people."},
u3:{w:"你好|nǐ hǎo|hello;谢谢|xiè xie|thank you;再见|zài jiàn|goodbye;我|wǒ|I;你|nǐ|you;他|tā|he;是|shì|to be;不|bù|not;叫|jiào|to be called;名字|míng zi|name",s:"我 叫 大卫|wǒ jiào dà wèi|My name is David.;你 叫 什么 名字|nǐ jiào shén me míng zi|What is your name?;我 是 中国 人|wǒ shì zhōng guó rén|I am Chinese.;谢谢 再见|xiè xie zài jiàn|Thanks, goodbye."},
u4:{w:"二|èr|two;五|wǔ|five;八|bā|eight;九|jiǔ|nine;十|shí|ten;百|bǎi|hundred;年|nián|year;月|yuè|month;点|diǎn|o'clock;半|bàn|half",s:"现在 三 点|xiàn zài sān diǎn|It is three o'clock.;现在 五 点 半|xiàn zài wǔ diǎn bàn|It is half past five.;我 有 二十 个 朋友|wǒ yǒu èr shí gè péng you|I have twenty friends.;一 百 个 人|yì bǎi gè rén|One hundred people."},
u5:{w:"妈妈|mā ma|mom;爸爸|bà ba|dad;姐姐|jiě jie|older sister;哥哥|gē ge|older brother;有|yǒu|to have;没有|méi yǒu|to not have;的|de|possessive particle;个|gè|general measure word;只|zhī|measure word for animals;本|běn|measure word for books",s:"我 有 一 个 姐姐|wǒ yǒu yí gè jiě jie|I have an older sister.;这 是 我 的 书|zhè shì wǒ de shū|This is my book.;他 有 两 只 猫|tā yǒu liǎng zhī māo|He has two cats.;我 没有 哥哥|wǒ méi yǒu gē ge|I have no older brother."},
u6:{w:"米饭|mǐ fàn|rice;面条|miàn tiáo|noodles;茶|chá|tea;咖啡|kā fēi|coffee;肉|ròu|meat;要|yào|to want;吃|chī|to eat;喝|hē|to drink;多少|duō shao|how much;钱|qián|money",s:"我 要 一 杯 茶|wǒ yào yì bēi chá|I want a cup of tea.;这 个 多少 钱|zhè ge duō shao qián|How much is this?;我 想 吃 米饭|wǒ xiǎng chī mǐ fàn|I want to eat rice.;我 不 喝 咖啡|wǒ bù hē kā fēi|I don't drink coffee."},
u7:{w:"左|zuǒ|left;右|yòu|right;前|qián|front;后|hòu|behind;在|zài|to be at;哪里|nǎ li|where;去|qù|to go;地铁|dì tiě|subway;火车|huǒ chē|train;银行|yín háng|bank",s:"银行 在 哪里|yín háng zài nǎ li|Where is the bank?;我 去 火车站|wǒ qù huǒ chē zhàn|I am going to the train station.;学校 在 前面|xué xiào zài qián miàn|The school is ahead.;我 坐 地铁|wǒ zuò dì tiě|I take the subway."},
u8:{w:"早上|zǎo shang|morning;晚上|wǎn shang|evening;上班|shàng bān|to go to work;天气|tiān qì|weather;下雨|xià yǔ|to rain;冷|lěng|cold;热|rè|hot;喜欢|xǐ huan|to like;电影|diàn yǐng|movie;周末|zhōu mò|weekend",s:"今天 下雨|jīn tiān xià yǔ|It is raining today.;今天 很 冷|jīn tiān hěn lěng|It is very cold today.;我 喜欢 看 电影|wǒ xǐ huan kàn diàn yǐng|I like watching movies.;周末 你 做 什么|zhōu mò nǐ zuò shén me|What do you do at the weekend?"},
u9:{w:"了|le|completed-action particle;过|guò|experience marker;在|zài|in progress;昨天|zuó tiān|yesterday;明天|míng tiān|tomorrow;现在|xiàn zài|now;打算|dǎ suàn|to plan;要|yào|going to;会|huì|will;中国|zhōng guó|China",s:"我 吃 了|wǒ chī le|I ate.;我 去 过 中国|wǒ qù guo zhōng guó|I have been to China.;他 在 看 书|tā zài kàn shū|He is reading.;明天 我 要 去 北京|míng tiān wǒ yào qù běi jīng|Tomorrow I am going to Beijing."},
u10:{w:"比|bǐ|than;一样|yí yàng|the same;更|gèng|even more;高|gāo|tall;矮|ǎi|short;贵|guì|expensive;便宜|pián yi|cheap;非常|fēi cháng|very;太|tài|too;快|kuài|fast",s:"我 比 他 高|wǒ bǐ tā gāo|I am taller than him.;她 跟 我 一样 大|tā gēn wǒ yí yàng dà|She is as old as me.;这 个 比 那 个 贵|zhè ge bǐ nà ge guì|This one is more expensive than that one.;今天 太 热 了|jīn tiān tài rè le|It is too hot today."},
u11:{w:"预订|yù dìng|to book;房间|fáng jiān|room;护照|hù zhào|passport;行李|xíng li|luggage;机场|jī chǎng|airport;救命|jiù mìng|help!;迷路|mí lù|to be lost;丢|diū|to lose;手机|shǒu jī|mobile phone;酒店|jiǔ diàn|hotel",s:"我 想 预订 一 个 房间|wǒ xiǎng yù dìng yí gè fáng jiān|I would like to book a room.;我 的 护照 丢 了|wǒ de hù zhào diū le|I lost my passport.;我 迷路 了|wǒ mí lù le|I am lost.;机场 在 哪里|jī chǎng zài nǎ li|Where is the airport?"},
u12:{w:"工作|gōng zuò|work;老板|lǎo bǎn|boss;医生|yī shēng|doctor;开会|kāi huì|to have a meeting;邮件|yóu jiàn|email;请问|qǐng wèn|may I ask;您|nín|you (polite);认识|rèn shi|to know someone;高兴|gāo xìng|happy;下午|xià wǔ|afternoon",s:"我们 下午 三 点 开会|wǒ men xià wǔ sān diǎn kāi huì|We have a meeting at 3 pm.;很 高兴 认识 您|hěn gāo xìng rèn shi nín|Nice to meet you.;请问 经理 在 吗|qǐng wèn jīng lǐ zài ma|May I ask, is the manager in?;我 给 你 发 邮件|wǒ gěi nǐ fā yóu jiàn|I will email you."},
u13:{w:"把|bǎ|object marker;被|bèi|passive marker;门|mén|door;打开|dǎ kāi|to open;关|guān|to close;听懂|tīng dǒng|to understand by listening;看见|kàn jiàn|to see;吃完|chī wán|to finish eating;放|fàng|to put;狗|gǒu|dog",s:"请 把 门 打开|qǐng bǎ mén dǎ kāi|Please open the door.;我 把 书 放 在 桌子 上|wǒ bǎ shū fàng zài zhuō zi shàng|I put the book on the table.;他 被 狗 咬 了|tā bèi gǒu yǎo le|He was bitten by a dog.;我 听 懂 了|wǒ tīng dǒng le|I understood."},
u14:{w:"如果|rú guǒ|if;就|jiù|then;虽然|suī rán|although;但是|dàn shì|but;因为|yīn wèi|because;所以|suǒ yǐ|so;不仅|bù jǐn|not only;而且|ér qiě|but also;即使|jí shǐ|even if;也|yě|also",s:"如果 明天 下雨 我们 就 不 去|rú guǒ míng tiān xià yǔ wǒ men jiù bú qù|If it rains tomorrow, we won't go.;虽然 很 累 但是 很 高兴|suī rán hěn lèi dàn shì hěn gāo xìng|Although I am tired, I am happy.;因为 下雨 所以 我 在 家|yīn wèi xià yǔ suǒ yǐ wǒ zài jiā|Because it is raining, I am at home.;他 不仅 聪明 而且 努力|tā bù jǐn cōng míng ér qiě nǔ lì|He is not only smart but also hardworking."},
u15:{w:"成语|chéng yǔ|idiom;面子|miàn zi|face (dignity);客气|kè qi|polite;哪里哪里|nǎ li nǎ li|you flatter me;算了|suàn le|forget it;倒霉|dǎo méi|unlucky;天天向上|tiān tiān xiàng shàng|improve every day;书面语|shū miàn yǔ|written style;口语|kǒu yǔ|spoken style;故事|gù shi|story",s:"你 太 客气 了|nǐ tài kè qi le|You are too polite.;哪里 哪里|nǎ li nǎ li|You flatter me.;算了 没 关系|suàn le méi guān xi|Forget it, it's fine.;我 喜欢 听 中国 故事|wǒ xǐ huan tīng zhōng guó gù shi|I like listening to Chinese stories."}};
const ALLW=[],ALLS=[];
Object.values(D0).forEach(u=>{u.W=u.w.split(";").map(x=>{const[zh,py,en]=x.split("|");return{zh,py,en}});u.S=u.s.split(";").map(x=>{const[t,py,en]=x.split("|");return{tk:t.split(" "),zh:t.replace(/ /g,""),py,en}});ALLW.push(...u.W);ALLS.push(...u.S)});

const rnd=a=>a[Math.floor(Math.random()*a.length)];
const norm=s=>(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[üv]/gi,"u").replace(/[^a-z]/gi,"").toLowerCase();
const others=(w,key,pool,n)=>{const seen=new Set([w[key]]),o=[];for(const x of [...shuf(pool),...shuf(ALLW)]){if(!seen.has(x[key])){seen.add(x[key]);o.push(x);if(o.length===n)break}}return o};
const mcW=(w,pool,k)=>{const key=["en","zh","py","zh","en"][k],o=shuf([w,...others(w,key,pool,3)]);return{t:"mc",q:["What does "+w.zh+" mean?","Which one is “"+w.en+"”?","How is "+w.zh+" pronounced?","Listen and choose the word.","Listen. What does it mean?"][k],au:k>2?w.zh:null,o:o.map(x=>x[key]),a:o.indexOf(w),w,zh:key==="zh",e:w.zh+" ("+w.py+"): "+w.en}};
const mcS=(s,S)=>{const o=shuf([s,...shuf(S.filter(x=>x!==s).concat(ALLS.filter(x=>!S.includes(x)))).slice(0,2)]);return{t:"mc",q:"What does this mean?",big:s.zh,sub:s.py,au:s.zh,o:o.map(x=>x.en),a:o.indexOf(s),e:s.zh+": "+s.en}};
const cloze=(s,W)=>{const k=Math.floor(Math.random()*s.tk.length),ans=s.tk[k],d=shuf([...new Set(W.map(w=>w.zh).concat(ALLW.map(w=>w.zh)))].filter(z=>z!==ans)).slice(0,3),o=shuf([ans,...d]);return{t:"mc",q:"Fill in the blank.",big:s.tk.map((t,i)=>i===k?"＿＿":t).join(""),sub:s.en,o,a:o.indexOf(ans),zh:true,e:s.zh+" ("+s.py+")"}};
const bank=(s,S,listen)=>{const ex=shuf([...new Set(S.concat(ALLS).flatMap(x=>x.tk))].filter(t=>!s.tk.includes(t))).slice(0,2);return{t:"bank",q:listen?"Tap what you hear.":"Translate this sentence.",big:listen?null:s.en,au:listen?s.zh:null,tiles:shuf([...s.tk,...ex]),ans:s.tk,e:s.zh+" ("+s.py+")"}};
const typ=w=>({t:"type",q:"Type the pinyin (tone marks optional).",big:w.zh,sub:w.en,ans:w.py,w,e:w.zh+": "+w.py+" ("+w.en+")"});
const mat=ws=>({t:"match",q:"Tap the matching pairs.",A:shuf(ws.map(w=>w.zh)),B:shuf(ws.map(w=>w.en)),pair:Object.fromEntries(ws.map(w=>[w.zh,w.en])),ws});

function build(u,part,lvl){const{W,S}=D0[u],q=[],T=lvl===0,add=(...x)=>q.push(...x);
 if(part<=2){const ws=part===1?W.slice(0,5):W.slice(5),rev=part===2?W.slice(0,5):[];
  ws.forEach((w,i)=>{if(T)add({t:"teach",w});if(i%2===1||i===ws.length-1)ws.slice(i-(i%2),i+1).forEach((x,j)=>add(mcW(x,W,j%2)))});
  add(mat(ws),...ws.slice(0,3).map(w=>mcW(w,W,3)),...ws.slice(0,3).map(typ),...ws.slice(2).map(w=>mcW(w,W,2)),...shuf([...ws,...rev]).slice(0,4).map(w=>mcW(w,W,rnd([0,1,4]))));
  if(!T)add(...shuf(ws).map(typ),...ws.slice(0,3).map(w=>mcW(w,W,4)))}
 else if(part===3){S.forEach(s=>{if(T)add({t:"teach",s});add(bank(s,S),mcS(s,S))});S.forEach(s=>add(bank(s,S,1),cloze(s,W)));if(!T)S.forEach(s=>add(mcS(s,S)))}
 else{add(mat(shuf(W).slice(0,5)),...shuf(W).slice(0,6).map(w=>mcW(w,W,rnd([0,1,2,3,4]))),...shuf(W).slice(0,4).map(typ),...S.map(s=>bank(s,S,Math.random()<.5)),...S.map(s=>cloze(s,W)),...shuf(S).slice(0,2).map(s=>mcS(s,S)));q.sort(()=>Math.random()-.5)}
 return q}

/* ---------- session ---------- */
let L=null;window.hsLesson=()=>L;
const streak=()=>{let n=0,d=new Date();if(!(P.days&&P.days[dkey(d)]))d.setDate(d.getDate()-1);while(P.days&&P.days[dkey(d)]){n++;d.setDate(d.getDate()-1)}return n};
function startLesson(u,part){const lvl=(P.les&&P.les[u+"."+part])||0,q=build(u,part,lvl);L={u,part,key:u+"."+part,rt,q,n:q.length,i:0,cl:0,first:0,total:0,xp:0,wrong:[],sel:null,fb:null,val:"",bk:[],m:{a:null,b:null,ok:[],bad:0,err:null},t0:Date.now(),done:false}}
function enter(){const x=L&&L.q[L.i];if(!x)return;const t=x.t==="teach"?(x.w?x.w.zh:x.s.zh):x.au;if(t)speak(t)}
const redraw=()=>draw(false);
function check(){const x=L.q[L.i];let ok;
 if(x.t==="mc")ok=L.sel===x.a;else if(x.t==="bank")ok=L.bk.map(k=>x.tiles[k]).join("|")===x.ans.join("|");else ok=norm(L.val)===norm(x.ans);
 L.fb={ok};if(!x.retry){L.total++;if(ok){L.first++;L.xp+=10}}
 if(!ok&&x.w){L.wrong.push(x.w);miss(x.w)}redraw()}
function next(){const x=L.q[L.i];if(L.fb&&L.fb.ok||x.t==="teach")L.cl++;else L.q.push({...x,retry:1});
 L.i++;L.sel=null;L.fb=null;L.val="";L.bk=[];L.m={a:null,b:null,ok:[],bad:0,err:null};
 if(L.i>=L.q.length)finish();redraw();if(!L.done)enter()}
function finish(){L.done=true;const acc=L.total?L.first/L.total:1,mins=(Date.now()-L.t0)/6e4;L.acc=acc;L.mins=mins;L.pass=L.part<4||acc>=.8;
 if(L.pass){P.les=P.les||{};P.les[L.key]=(P.les[L.key]||0)+1;P.mins=(P.mins||0)+mins;P.xp=(P.xp||0)+L.xp;P.days=P.days||{};P.days[dkey()]=1;if(L.part===4)P.done[L.u]=1;savep()}}
function matchTap(b){const x=L.q[L.i],m=L.m,s=b.dataset.s,v=b.dataset.v;if(m.ok.includes(v))return;m.err=null;m[s]=v;
 if(m.a&&m.b){if(x.pair[m.a]===m.b)m.ok.push(m.a,m.b);else{m.bad++;m.err=[m.a,m.b]}m.a=m.b=null}
 if(m.ok.length===x.A.length*2){L.fb={ok:true,auto:1};if(!x.retry)L.xp+=m.bad<3?8:3}redraw()}

function exView(x){
 const au=x.au?'<button class="main alt" data-x="say" data-t="'+esc(x.au)+'">Play audio</button>':"";
 if(x.t==="teach"){const w=x.w;return w?'<p class="ask">New word</p><div class="card"><div class="hz" lang="zh">'+esc(w.zh)+'</div>'+(typeof doodle==="function"&&doodle(w)?'<div class="dz">'+doodle(w)+'</div>':"")+'<div class="py">'+esc(w.py)+'</div><p class="en" style="font-size:22px;margin:4px 0 12px">'+esc(w.en)+'</p><button class="ghost" data-x="say" data-t="'+esc(w.zh)+'">Listen</button></div><button class="main" data-x="next">Continue</button>'
  :'<p class="ask">New sentence</p><div class="card"><div class="hz" lang="zh" style="font-size:clamp(34px,8vw,54px)">'+esc(x.s.zh)+'</div><div class="py">'+esc(x.s.py)+'</div><p class="en" style="font-size:22px;margin:4px 0 12px">'+esc(x.s.en)+'</p><button class="ghost" data-x="say" data-t="'+esc(x.s.zh)+'">Listen</button></div><button class="main" data-x="next">Continue</button>'}
 let body="",needCheck=true;
 if(x.t==="mc"){body=(x.big?'<div class="hz" lang="zh" style="font-size:clamp(34px,8vw,54px)">'+esc(x.big)+'</div>':"")+(x.sub?'<p class="note">'+esc(x.sub)+'</p>':"")+'<div class="opts">'+x.o.map((o,k)=>{let c="opt"+(x.zh?" zhopt":"");if(L.fb){if(k===x.a)c+=" ok";else if(k===L.sel)c+=" bad"}else if(k===L.sel)c+=" ok";return'<button class="'+c+'" data-x="sel" data-k="'+k+'" '+(L.fb?"disabled":"")+'>'+esc(o)+'</button>'}).join("")+'</div>'}
 else if(x.t==="bank"){const used=new Set(L.bk);body=(x.big?'<div class="en big">'+esc(x.big)+'</div>':"")+'<div class="line" lang="zh">'+L.bk.map(k=>'<button class="tile" data-x="untile" data-k="'+k+'" '+(L.fb?"disabled":"")+'>'+esc(x.tiles[k])+'</button>').join("")+'</div><div class="line nb" lang="zh">'+x.tiles.map((t,k)=>used.has(k)?'<span class="tile ghosted">'+esc(t)+'</span>':'<button class="tile" data-x="tile" data-k="'+k+'" '+(L.fb?"disabled":"")+'>'+esc(t)+'</button>').join("")+'</div>'}
 else if(x.t==="type"){body='<div class="hz" lang="zh">'+esc(x.big)+'</div><p class="note">'+esc(x.sub)+'</p><input id="lx" class="search" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(L.val)+'" '+(L.fb?"disabled":"")+' placeholder="pinyin">'}
 else{needCheck=false;const m=L.m,bt=(v,s)=>'<button class="tile'+(m.ok.includes(v)?" ghosted":"")+(m[s]===v?" sel":"")+(m.err&&m.err.includes(v)?" bad":"")+'" data-x="m" data-s="'+s+'" data-v="'+esc(v)+'" '+(m.ok.includes(v)?"disabled":"")+'>'+esc(v)+'</button>';body='<div class="mg"><div>'+x.A.map(v=>bt(v,"a")).join("")+'</div><div>'+x.B.map(v=>bt(v,"b")).join("")+'</div></div>'}
 const dis=x.t==="mc"?L.sel==null:x.t==="bank"?!L.bk.length:!L.val.trim();
 const foot=L.fb?'<div class="fbk '+(L.fb.ok?"g":"r")+'"><b>'+(L.fb.ok?rnd(["Correct!","Nice!","Well done!"]):"Not quite")+'</b>'+(x.e&&!L.fb.auto?'<p>'+esc(x.e)+'</p>':"")+'</div><button class="main" data-x="next">Continue</button>':needCheck?'<button class="main" data-x="check" '+(dis?"disabled":"")+'>Check</button>':"";
 return '<p class="ask">'+esc(x.q)+'</p>'+au+body+'<div style="margin-top:20px">'+foot+'</div>'}
function summary(){const pct=Math.round(L.acc*100),mn=Math.max(1,Math.round(L.mins));
 return '<div class="page"><h1>'+(L.pass?"Lesson complete":"Not quite yet")+'</h1><div class="score">'+pct+'%</div><p class="lead">'+(L.pass?"+"+L.xp+" XP in "+mn+" min. "+(streak()>1?streak()+"-day streak. ":""):"You need 80% on the unit test. Review the lessons and try again. ")+(L.wrong.length?L.wrong.length+" missed word"+(L.wrong.length===1?"":"s")+" added to Adaptive.":"No mistakes.")+'</p>'+L.wrong.map(w=>'<div class="mini"><span class="hzs" lang="zh">'+esc(w.zh)+'</span><span>'+esc(w.py)+'</span><small>'+esc(w.en)+'</small></div>').join("")+'<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:28px"><a class="main" style="display:inline-block;text-decoration:none" href="#/learning/path/'+L.u+'">Back to unit</a><button class="main alt" data-x="again">Practise again</button></div></div>'}
function lessonView(){if(L.done)return summary();const pr=Math.min(100,Math.round(L.cl/L.n*100));
 return '<div class="page"><div class="lt"><a class="back" href="#/learning/path/'+L.u+'" aria-label="Quit lesson">✕</a><div class="lb"><i style="width:'+pr+'%"></i></div><span class="note">'+L.xp+' XP</span></div><div class="body" style="margin-top:28px">'+exView(L.q[L.i])+'</div></div>'}

/* ---------- unit page: lesson list ---------- */
const TT=[["New words","The first five words, taught then drilled"],["More words","The next five, mixed with review"],["Sentences","Build, hear and complete real sentences"],["Unit test","Mixed exam. 80% to pass the unit"]];
const hm=m=>{m=Math.round(m||0);return m>=60?Math.floor(m/60)+"h "+m%60+"m":m+"m"};
function panel(u){return '<h2>Lessons</h2><div class="stats"><div><b>'+(P.xp||0)+'</b>XP</div><div><b>'+streak()+'</b>day streak</div><div><b>'+hm(P.mins)+'</b>in lessons</div></div>'+TT.map((t,i)=>{const n=(P.les&&P.les[u+"."+(i+1)])||0;return row("learning/path/"+u+"/"+(i+1),t[0],t[1]+" · "+(n?"Level "+n+" · practise again":"Not started"),["一","二","三","考"][i],i)}).join("")+'<p class="note" style="margin-top:18px">Each repeat gets harder: less hand-holding, more typing and listening.</p>'}
const _dv=docView;docView=function(b,x){const h=_dv(b,x),m=location.hash.match(/^#\/learning\/path\/(u\d+)\/?$/);return m&&D0[m[1]]&&D&&D.id===m[1]?h+'<div class="lp">'+panel(m[1])+'</div>':h};
const _draw=draw;draw=function(anim){const m=location.hash.match(/^#\/learning\/path\/(u\d+)\/([1-4])\/?$/);
 if(m&&D0[m[1]]&&!(typeof welcomeView!=="undefined"&&view===welcomeView)){if(!L||L.key!==m[1]+"."+m[2]||L.rt!==rt){startLesson(m[1],+m[2]);setTimeout(enter,300)}view=lessonView}
 _draw(anim)};

app.addEventListener("click",e=>{const b=e.target.closest("[data-x]");if(!b||!L)return;const a=b.dataset.x,x=L.q[L.i];
 if(a==="say")speak(b.dataset.t||(x&&x.au));
 else if(a==="sel"&&!L.fb){L.sel=+b.dataset.k;redraw()}
 else if(a==="tile"&&!L.fb){L.bk.push(+b.dataset.k);redraw()}
 else if(a==="untile"&&!L.fb){L.bk.splice(L.bk.indexOf(+b.dataset.k),1);redraw()}
 else if(a==="check")check();else if(a==="next")next();else if(a==="m")matchTap(b);
 else if(a==="again"){startLesson(L.u,L.part);redraw();enter()}});
app.addEventListener("input",e=>{if(e.target.id==="lx"&&L){L.val=e.target.value;const c=document.querySelector('[data-x="check"]');if(c)c.disabled=!L.val.trim()}});
addEventListener("keydown",e=>{if(e.key==="Enter"&&L&&/#\/learning\/path\/u\d+\/[1-4]/.test(location.hash)){const b=document.querySelector('[data-x="next"],[data-x="check"]:not([disabled])');if(b){e.preventDefault();b.click()}}});

/* ---------- reading quiz built from the text itself ---------- */
function rq(d){const pool=[...LEX.values()],hs=[...new Map(d.hits.filter(h=>h.py).map(h=>[h.zh,h])).values()];if(hs.length<3)return null;
 const dis=(w,key)=>shuf(pool.filter(x=>x.zh!==w.zh&&x[key]&&x[key]!==w[key]&&(key!=="zh"||x.zh.length===w.zh.length))).slice(0,3);
 const ex=w=>w.zh+" ("+w.py+"): "+w.en,it=[],used=new Set();
 d.plain.split(/(?<=[。！？!?])/).map(s=>s.trim()).filter(s=>s.length>6&&s.length<90).forEach(s=>{if(it.length>=4)return;const w=shuf(hs).find(h=>s.includes(h.zh)&&!used.has(h.zh));if(!w)return;used.add(w.zh);const o=shuf([w,...dis(w,"zh")]);it.push({q:"Fill in the blank: "+esc(s.replace(w.zh,"＿＿")),o:o.map(x=>x.zh),a:o.indexOf(w),w,e:ex(w)})});
 shuf(hs.filter(h=>!used.has(h.zh))).forEach((w,i)=>{if(it.length>=8)return;const k=i%3,key=["en","py","zh"][k],o=shuf([w,...dis(w,key)]);it.push({q:k===0?"In this text, what does "+w.zh+" mean?":k===1?"How is "+w.zh+" pronounced?":"Which word from the text means “"+w.en+"”?",o:o.map(x=>x[key]),a:o.indexOf(w),w,e:ex(w)})});
 return it.length>=3?it:null}
const _od=openDoc;openDoc=function(d){_od(d);if(d.auto&&LEX){try{const r=rq(d);if(r)qz.items=r}catch(e){}}};
app.addEventListener("click",e=>{if(!e.target.closest('[data-a="qa"]')||!qz)return;const q=qz.items[qz.i];if(q&&q.w&&qz.p!=null&&!q._m){q._m=1;if(qz.p!==q.a)miss(q.w)}});
const _lh=lh;lh=function(){let h=_lh();const z=qz,q=z&&z.items[z.i];if(q&&q.e&&z.p!=null)h=h.replace('<button class="main" data-a="qn">','<p class="note">'+esc(q.e)+(z.p!==q.a?" Added to Adaptive.":"")+'</p><button class="main" data-a="qn">');return h};

const css=document.createElement("style");css.textContent=`
.lt{display:flex;align-items:center;gap:16px}.lt .back{font-size:22px;margin:0}.lt .back::before{content:none}
.lb{flex:1;height:12px;border-radius:8px;background:var(--line);overflow:hidden}.lb i{display:block;height:100%;background:var(--ink);border-radius:8px;transition:width .5s cubic-bezier(.2,.7,.2,1)}
.line{display:flex;flex-wrap:wrap;gap:8px;min-height:62px;padding:10px 0;margin:14px 0;border-bottom:1px solid var(--line)}.line.nb{border-bottom:0}
.tile{padding:10px 16px;border:1px solid var(--line);border-radius:14px;background:none;color:var(--ink);font:inherit;font-size:22px;cursor:pointer;transition:background .2s,border-color .2s}
.tile:hover:not(:disabled){background:rgba(var(--rgb),.1);border-color:var(--ink)}.tile.ghosted{opacity:.2;cursor:default;pointer-events:none}.tile.sel{background:var(--ink);color:var(--bg)}.tile.bad{border-style:dashed;text-decoration:line-through}
.mg{display:grid;grid-template-columns:1fr 1fr;gap:18px}.mg>div{display:grid;gap:10px;align-content:start}.mg .tile{font-size:18px;text-align:center}
.fbk{padding:16px 20px;border-radius:20px;margin-bottom:12px}.fbk.g{background:var(--ink);color:var(--bg)}.fbk.r{border:1px dashed var(--ink)}.fbk p{margin:4px 0 0}
.dz{width:120px;height:86px;margin:0 auto 8px}.dz svg{width:100%;height:100%;color:var(--ink)}.lp{margin-top:10px}`;
document.head.appendChild(css);
if(/^#\/learning\/path\//.test(location.hash))route();
})();
