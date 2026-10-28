/* ---------- data ---------- */
const LV=[
["hsk1","HSK 1","150 words · beginner","一","你好|nǐ hǎo|hello;谢谢|xiè xie|thank you;再见|zài jiàn|goodbye;朋友|péng you|friend;学校|xué xiào|school;老师|lǎo shī|teacher;苹果|píng guǒ|apple;水|shuǐ|water;米饭|mǐ fàn|rice;喜欢|xǐ huan|to like;今天|jīn tiān|today;医院|yī yuàn|hospital;电话|diàn huà|telephone;漂亮|piào liang|pretty;猫|māo|cat"],
["hsk2","HSK 2","300 words · elementary","二","旅游|lǚ yóu|to travel;孩子|hái zi|child;非常|fēi cháng|very;手机|shǒu jī|mobile phone;运动|yùn dòng|exercise;便宜|pián yi|cheap;咖啡|kā fēi|coffee;房间|fáng jiān|room;公司|gōng sī|company;帮助|bāng zhù|to help;告诉|gào su|to tell;觉得|jué de|to feel;眼睛|yǎn jing|eye;起床|qǐ chuáng|to get up;药|yào|medicine"],
["hsk3","HSK 3","600 words · lower intermediate","三","比赛|bǐ sài|competition;环境|huán jìng|environment;经常|jīng cháng|often;作业|zuò yè|homework;附近|fù jìn|nearby;年轻|nián qīng|young;愿意|yuàn yì|willing;季节|jì jié|season;担心|dān xīn|to worry;世界|shì jiè|world;重要|zhòng yào|important;终于|zhōng yú|finally;声音|shēng yīn|sound;邻居|lín jū|neighbor"],
["hsk4","HSK 4","1,200 words · intermediate","四","经验|jīng yàn|experience;压力|yā lì|pressure;结果|jié guǒ|result;复杂|fù zá|complicated;获得|huò dé|to obtain;成功|chéng gōng|success;目的|mù dì|purpose;感动|gǎn dòng|moved;禁止|jìn zhǐ|to prohibit;交流|jiāo liú|to communicate;导游|dǎo yóu|tour guide;减肥|jiǎn féi|to lose weight;误会|wù huì|misunderstanding;打印|dǎ yìn|to print"],
["hsk5","HSK 5","2,500 words · upper intermediate","五","创造|chuàng zào|to create;道德|dào dé|morality;否则|fǒu zé|otherwise;趋势|qū shì|trend;谨慎|jǐn shèn|cautious;吸收|xī shōu|to absorb;避免|bì miǎn|to avoid;承担|chéng dān|to bear;繁荣|fán róng|prosperous;观念|guān niàn|concept;克服|kè fú|to overcome;摆脱|bǎi tuō|to break free of;贡献|gòng xiàn|contribution;合理|hé lǐ|reasonable"],
["hsk6","HSK 6","5,000 words · advanced","六","弊端|bì duān|drawback;干预|gān yù|to intervene;渺小|miǎo xiǎo|tiny;迫不及待|pò bù jí dài|cannot wait;顽强|wán qiáng|tenacious;诚恳|chéng kěn|sincere;慷慨|kāng kǎi|generous;欣慰|xīn wèi|gratified;愧疚|kuì jiù|guilty;轻而易举|qīng ér yì jǔ|effortless;刻不容缓|kè bù róng huǎn|extremely urgent;根深蒂固|gēn shēn dì gù|deep-rooted"],
["hsk79","HSK 7–9","one combined advanced exam","高","阐述|chǎn shù|to elaborate;凝聚|níng jù|to rally;渗透|shèn tòu|to permeate;悖论|bèi lùn|paradox;范畴|fàn chóu|category;蕴含|yùn hán|to contain;颠覆|diān fù|to overturn;辩证|biàn zhèng|dialectical;潜移默化|qián yí mò huà|subtle influence;一丝不苟|yì sī bù gǒu|meticulous;脱颖而出|tuō yǐng ér chū|to stand out;意味深长|yì wèi shēn cháng|meaningful"]
].map(([id,name,sub,g,s])=>({id,name,sub,g,w:s.split(";").map(x=>{const[zh,py,en]=x.split("|");return{zh,py,en,lvl:name}})}));
const MENU=[["tests","测试","Tests","Exams, practice tests and adaptive review"],["vocab","词汇","Vocab","Every HSK word, searchable"],["learning","学习","Learning","Path and textbooks"],["reading","阅读","Reading","A new text every day"],["flashcards","卡片","Flashcards",""],["wordlist","词表","Wordlist",""]];
/* ---------- word data: loaded in full from the open-source repo, shown in our own UI ---------- */
const DB={},PR={},FB={};
const SRC=["https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/main/","https://cdn.jsdelivr.net/gh/drkameleon/complete-hsk-vocabulary@main/"];
const parse=(d,lvl)=>d.map(e=>{const f=(e.f||e.forms||[])[0]||{},tr=f.i||f.transcriptions||{},m=f.m||f.meanings||[];
 return{zh:e.s||e.simplified,py:tr.y||tr.pinyin||"",en:m.join("; ").split("; ").slice(0,2).join("; ").slice(0,56),lvl}}).filter(w=>w.zh&&w.py&&w.en);
async function fetchLevel(lv){const i=LV.indexOf(lv),p=i<6?"old/"+(i+1):"new/7";
 for(const b of SRC){try{const r=await fetch(b+"wordlists/exclusive/"+p+".min.json");if(!r.ok)continue;const w=parse(await r.json(),lv.name);if(w.length>20)return w}catch(e){}}
 throw 0}
const getLevel=lv=>PR[lv.id]||(PR[lv.id]=fetchLevel(lv).then(w=>DB[lv.id]=w).catch(()=>{FB[lv.id]=1;return DB[lv.id]=lv.w}));
function ensure(lv){if(DB[lv.id])return true;const my=rt;getLevel(lv).then(()=>{if(my===rt)draw(true)});return false}
