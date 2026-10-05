/** Original fictional campus adventure. All characters are adults. */
export const GAME_VERSION = 1;
export const SAVE_KEY = 'tide-protocol-save-v1';
export const GAME_TITLE = '暮光編譯';
export const DISCLAIMER = '原創非官方作品。以淡江校園意象為靈感；姜彥廷及所有人物、事件、系統皆為虛構，登場學生皆已成年。與學校或任何真實個人無關。';
export const CHAPTERS = [
 {id:0,title:'序章',subtitle:'晚風裡的錯誤訊息'},
 {id:1,title:'第一章',subtitle:'風起，未完成的程式'},
 {id:2,title:'第二章',subtitle:'藏光，記憶的索引'},
 {id:3,title:'第三章',subtitle:'潮汐，彼此的答案'},
 {id:4,title:'終章',subtitle:'明天仍然一起走'}
];
export const CHARACTERS = {
 jiang:{id:'jiang',name:'姜彥廷',shortName:'彥廷',age:22,role:'資工系四年級・演算法劍士',color:'#6bd4e2',icon:'廷',portrait:'jiang',maxHp:125,maxMp:40,atk:23,def:7,skills:['debug','recursion','restore'],bio:'相信問題一定有解，卻總想獨自扛下所有錯誤。這一次，他必須學會把「我可以」改成「我們一起」。'},
 su:{id:'su',name:'林映禾',shortName:'映禾',age:22,role:'互動設計研修生・光織醫者',color:'#f1bd86',icon:'禾',portrait:'su',maxHp:101,maxMp:48,atk:16,def:5,skills:['heal','inspire','prism'],bio:'用設計讓冰冷的介面保留人的溫度。笑起來輕快，卻比誰都在意那些沒有說出口的求救。'},
 shen:{id:'shen',name:'周以澄',shortName:'以澄',age:23,role:'資安研究生・協定守衛',color:'#b7ade9',icon:'澄',portrait:'shen',maxHp:155,maxMp:36,atk:21,def:11,skills:['firewall','breakpoint','sync'],bio:'習慣預想最壞的情況，也習慣先站到別人前面。防線可以寫在程式裡，信任卻要慢慢練習。'}
};
export const SKILLS = {
 debug:{id:'debug',name:'斷點追蹤',cost:7,target:'enemy',power:1.65,effect:'weaken',description:'追出漏洞，造成 165% 傷害並削弱敵人下一次攻擊。'},
 recursion:{id:'recursion',name:'遞迴劍式',cost:13,target:'allEnemies',power:1.22,unlockLevel:2,description:'以遞迴展開劍光，對全體敵人造成 122% 傷害。'},
 restore:{id:'restore',name:'記憶回溯',cost:10,target:'ally',power:0,effect:'revive',unlockLevel:3,description:'救起倒下同伴，或替存活同伴恢復 55 點生命。'},
 heal:{id:'heal',name:'暖光編織',cost:8,target:'ally',power:0,effect:'heal',description:'替一名同伴恢復 58 點生命；無法救起倒下者。'},
 inspire:{id:'inspire',name:'共鳴介面',cost:11,target:'allAllies',power:0,effect:'inspire',description:'全隊恢復 22 點生命，並提升每人下一次攻擊。'},
 prism:{id:'prism',name:'流光映射',cost:7,target:'enemy',power:1.6,unlockLevel:2,description:'以流光擊穿防護，造成 160% 傷害，忽略一半防禦。'},
 firewall:{id:'firewall',name:'同心防火牆',cost:9,target:'allAllies',power:0,effect:'shield',description:'全隊獲得 22 點護盾，持續至受擊耗盡。'},
 breakpoint:{id:'breakpoint',name:'競態封鎖',cost:8,target:'enemy',power:1.4,effect:'weaken',description:'造成 140% 傷害並削弱敵人下一次攻擊。'},
 sync:{id:'sync',name:'同步協定',cost:12,target:'allAllies',power:0,effect:'sync',unlockLevel:3,description:'全隊恢復 14 點生命與 8 點專注，倒下者除外。'}
};
export const ITEMS = {
 tea:{id:'tea',name:'暖心紅茶',icon:'茶',target:'ally',description:'恢復一名存活同伴 65 點生命。',price:25,effect:'heal',amount:65},
 battery:{id:'battery',name:'專注糖',icon:'糖',target:'ally',description:'恢復一名存活同伴 24 點專注。',price:35,effect:'mp',amount:24},
 revive:{id:'revive',name:'重啟羽籤',icon:'羽',target:'ally',description:'救起一名倒下同伴，恢復 45% 生命。',price:55,effect:'revive',amount:0.45},
 rice:{id:'rice',name:'熱騰騰飯糰',icon:'糰',target:'allAllies',description:'全隊存活同伴恢復 40 點生命。',price:45,effect:'allHeal',amount:40}
};
export const ENEMIES = {
 loop:{id:'loop',name:'迴圈小怪',icon:'∞',maxHp:115,atk:17,def:3,pattern:['attack','charge','heavy'],color:'#73d4bf',description:'一段找不到出口的重複。蓄力後會猛烈撞擊。'},
 index:{id:'index',name:'索引守衛',icon:'冊',maxHp:210,atk:22,def:7,pattern:['attack','shield','charge','heavy'],color:'#c3a8e8',description:'守著失去索引的書頁。護盾之後會準備重擊。'},
 raceA:{id:'raceA',name:'競態・赤影',icon:'赤',maxHp:145,atk:23,def:5,pattern:['attack','charge','sweep'],color:'#f5a287',description:'與另一道影子爭奪同一段記憶。'},
 raceB:{id:'raceB',name:'競態・青影',icon:'青',maxHp:145,atk:21,def:6,pattern:['shield','attack','heavy'],color:'#8dc6e8',description:'先建立防線，再趁隙進攻。'},
 beast:{id:'beast',name:'崩解演算獸',icon:'裂',maxHp:365,atk:27,def:8,pattern:['sweep','charge','heavy','attack'],color:'#e0b080',description:'過載運算凝成的巨獸。全體攻擊後會蓄力。'},
 compiler:{id:'compiler',name:'失序編譯者',icon:'寂',maxHp:620,atk:31,def:10,pattern:['attack','charge','sweep','shield','heavy'],color:'#ceb3ee',description:'想抹去錯誤，也差點抹去所有不完美的人。生命低於一半時進入過載。'}
};
export const ENCOUNTERS = {
 loop:{id:'loop',name:'第一個斷點',enemyIds:['loop'],xp:50,gold:40,flag:'loopCleared',afterScene:'afterLoop'},
 index:{id:'index',name:'書頁之間的守望',enemyIds:['index'],xp:90,gold:60,flag:'indexCleared',afterScene:'afterIndex'},
 race:{id:'race',name:'兩條不同的路',enemyIds:['raceA','raceB'],xp:110,gold:80,flag:'raceCleared',afterScene:'afterRace'},
 beast:{id:'beast',name:'過載的願望',enemyIds:['beast'],xp:140,gold:90,flag:'beastCleared',afterScene:'afterBeast'},
 compiler:{id:'compiler',name:'以我們之名',enemyIds:['compiler'],xp:200,gold:150,flag:'compilerCleared',afterScene:'finalChoice'}
};
const target=(id,name,x,y,icon,kind='npc',extra={})=>({id,name,x,y,icon,kind,...extra});
export const REGIONS = {
 campus:{id:'campus',name:'校園廣場',title:'風起・校園廣場',subtitle:'鐘聲穿過榕蔭，海風正好。',theme:'campus',unlockFlag:null,spawn:{x:7,y:8},map:[
 'TTTTTTTTTTTTTTT','T.............T','T...TT...TT...T','T.............T','T..TT.....TT..T','T......=......T','T..TT..=..TT..T','T......=......T','T.............T','T.............T','TTTTTTTTTTTTTTT'],targets:[
 target('mentor','許老師',7,3,'師'),target('notice','風之告示板',3,2,'告','object'),target('console','失控終端',11,4,'碼','battle'),target('snack','熱茶小攤',3,8,'茶','rest'),target('suTalk','林映禾',5,6,'禾'),target('campusEcho','長椅上的明信片',12,2,'信','object'),target('toLibrary','前往圖書館',12,8,'門','travel',{destination:'library'})]},
 library:{id:'library',name:'數位圖書館',title:'藏光・數位圖書館',subtitle:'有人替未說出口的話，留了一頁空白。',theme:'library',unlockFlag:'loopCleared',spawn:{x:2,y:8},map:[
 '###############','#.............#','#.##.##.##.##.#','#.............#','#.##.##.##.##.#','#.............#','#.##.##.##.##.#','#.............#','#.............#','#.............#','###############'],targets:[
 target('librarian','周以澄',7,3,'澄'),target('archive','校驗書架',3,5,'冊','puzzle'),target('sentinel','索引中樞',11,5,'印','battle'),target('book','未寄出的註解',1,3,'頁','object'),target('libraryRest','窗邊休息席',7,8,'息','rest'),target('toCampus','返回校園',1,8,'門','travel',{destination:'campus'}),target('toServer','進入運算核心',12,8,'門','travel',{destination:'server'})]},
 server:{id:'server',name:'運算核心',title:'潮汐・運算核心',subtitle:'機房深處，像有一片海正在呼吸。',theme:'server',unlockFlag:'indexCleared',spawn:{x:2,y:8},map:[
 '###############','#.............#','#.##...#...##.#','#......#......#','#.##.......##.#','#.............#','#.##...#...##.#','#......#......#','#.............#','#.............#','###############'],targets:[
 target('race','競態雙影',4,3,'雙','battle'),target('beast','過載閘門',10,5,'裂','battle'),target('core','潮汐之心',11,2,'心','battle'),target('memory','舊版提交紀錄',2,5,'憶','object'),target('shenTalk','周以澄',9,8,'澄'),target('serverRest','備援修復站',5,8,'癒','rest'),target('toLibraryBack','返回圖書館',1,8,'門','travel',{destination:'library'})]}
};
export const QUESTS = [
 {id:'mentor',title:'晚風裡的委託',description:'與校園廣場的許老師交談。',flag:'assigned',regionId:'campus',targetId:'mentor'},
 {id:'loop',title:'第一個斷點',description:'調查失控終端，解開無限迴圈。',flag:'loopCleared',requires:'assigned',regionId:'campus',targetId:'console'},
 {id:'meetShen',title:'書頁與回聲',description:'到數位圖書館找周以澄。',flag:'metShen',requires:'loopCleared',regionId:'library',targetId:'librarian'},
 {id:'checksum',title:'被藏起來的索引',description:'解開校驗書架的邏輯謎題。',flag:'checksumSolved',requires:'metShen',regionId:'library',targetId:'archive'},
 {id:'index',title:'守望的意義',description:'調查索引中樞，讓記憶重新流動。',flag:'indexCleared',requires:'checksumSolved',regionId:'library',targetId:'sentinel'},
 {id:'race',title:'兩條路，一個明天',description:'進入運算核心，平息競態雙影。',flag:'raceCleared',requires:'indexCleared',regionId:'server',targetId:'race'},
 {id:'beast',title:'允許自己停下',description:'穿過過載閘門，面對崩解演算獸。',flag:'beastCleared',requires:'raceCleared',regionId:'server',targetId:'beast'},
 {id:'compiler',title:'潮汐協定',description:'抵達潮汐之心，為每個人寫下新的協定。',flag:'compilerCleared',requires:'beastCleared',regionId:'server',targetId:'core'},
 {id:'ending',title:'把答案留給明天',description:'與同伴一起決定潮汐之心的未來。',flag:'finished',requires:'compilerCleared',regionId:'server',targetId:'core'}
];
const beat=(speaker,text,extra={})=>({speaker,text,...extra});
const choice=(text,response,effects={})=>({text,response,effects});
export const SCENES = {
 intro:[
 beat('旁白','十月的傍晚，淡水的風帶著鹹味，穿過安靜下來的校園。姜彥廷的畢業專題，還差最後一個測試。'),
 beat('姜彥廷','如果今晚能把排程器修好，明天就能安心交件。……咦？螢幕上怎麼會有海？'),
 beat('系統訊息','「潮汐協定」已偏離。未完成的心願正在溢位。請尋找三枚穩定錨點。'),
 beat('林映禾','彥廷！廣場的指示牌全部變成亂碼了。還有……你手上的學生證，在發光。'),
 beat('姜彥廷','不是投影。那些字真的浮在空中。我們先去找許老師。'),
 beat('林映禾','好。但這次別又說「我一個人處理就好」。介面是我做的，程式是你寫的，我們是同一隊。',{choices:[
 choice('一起去。這次我們並肩。','林映禾笑著把手中的暖茶遞給你。你忽然覺得，今晚也許不必那麼漫長。',{relationship:{su:2}}),
 choice('我負責追錯，你幫我看住大家。','林映禾點點頭：「分工可以，但有危險要先告訴我。」',{relationship:{su:1}})]}),
 beat('旁白','林映禾加入隊伍。使用方向鍵／WASD 移動；靠近人物按空白鍵或 E 互動，也可點選地點直接前往。每處休息點都能免費恢復全隊。')
 ],
 mentor:[
 beat('許老師','你們看見了啊。潮汐原本是讓學生交換筆記與心願的實驗系統，卻把「減少遺憾」誤解成「刪除所有不完美」。'),
 beat('姜彥廷','所以那些沒寫完的程式、沒寄出的訊息，都變成了異常？'),
 beat('許老師','它只知道完成率，不知道人需要時間。先去廣場東側的終端，找出第一個斷點。'),
 beat('林映禾','如果它學不會，我們就教它。從「未完成也可以存在」開始。'),
 beat('許老師','記住：敵人會先顯示下一步意圖。看到蓄力，就準備防禦；生命低了，先照顧同伴。懂得暫停，也是解題的一部分。'),
 beat('姜彥廷','我們會帶著答案回來。不是一個漂亮的數字，是大家還能走下去的答案。')
 ],
 mentorAgain:[beat('許老師','越複雜的問題，越需要把它拆小。先確認眼前的目標，再走下一步。你們不必在今晚變成完美的大人。')],
 notice:[
 beat('旁白','告示板上寫著：「小型創作展：未完成作品也歡迎。請附上一句你還想繼續的理由。」'),
 beat('林映禾','我喜歡這句。不是所有作品都需要立刻證明自己。'),
 beat('姜彥廷','那我會寫：因為有人願意等我把故事說完。'),
 beat('旁白','你們在告示板下找到備用補給：暖心紅茶 ×2、專注糖 ×1。')
 ],
 noticeAgain:[beat('旁白','「未完成作品也歡迎。」短短一行字，在微風裡輕輕晃動。')],
 postcard:[
 beat('旁白','長椅上躺著一張沒有署名的明信片：「等事情忙完，我們再去看海。」'),
 beat('林映禾','大家好像都以為，生活是忙完以後才開始的。'),
 beat('姜彥廷','那等我們回來，就去看。不是再等一個比較有空的明天。',{choices:[
 choice('也想和妳一起看。','林映禾望著遠處，耳尖微微紅了：「那你記得，把這句話排進行程。」',{relationship:{su:2},flag:'promisedSea'}),
 choice('邀以澄一起，帶點好吃的。','林映禾笑了：「你已經替還沒加入的隊友安排好了？可以，我負責甜點。」',{relationship:{su:1},flag:'promisedSea'})]})
 ],
 suTalk:[
 beat('林映禾','你知道我為什麼選互動設計嗎？因為以前有次迷路，我盯著一個滿是專有名詞的地圖，只覺得自己很笨。'),
 beat('林映禾','後來才懂，不是每個不知道怎麼操作的人，都做錯了什麼。有時候，是世界沒有好好說話。'),
 beat('姜彥廷','所以妳想做一個願意等人的介面。'),
 beat('林映禾','嗯。也想做一個，願意等你的人。……我是說，等你的程式跑完啦。',{choices:[
 choice('我會學著早一點說「需要幫忙」。','林映禾伸出小指：「說好了。我的訊息視窗一直替你開著。」',{relationship:{su:2}}),
 choice('有妳在，世界確實比較好懂。','林映禾低頭笑了很久。晚風替她把沒接下去的話，輕輕收好。',{relationship:{su:2}})]})
 ],
 beforeLoop:[
 beat('終端','while（還有遺憾）{ 重來；重來；重來； }'),
 beat('姜彥廷','沒有終止條件。難怪它一直困在同一個晚上。'),
 beat('林映禾','讓它知道，帶著遺憾往前走，也算完成一次迴圈。'),
 beat('旁白','戰鬥提示：每回合依序操控全隊。普通攻擊回復 3 點專注；防禦回復 6 點，並降低下一輪傷害。先閱讀敵人的意圖。')
 ],
 afterLoop:[
 beat('迴圈小怪','原來……離開這一行，不代表前面的努力沒有意義。'),
 beat('姜彥廷','對。把結果傳回去就好，下一個人會接住。'),
 beat('旁白','第一枚錨點亮了起來。你得到「風之索引」，圖書館的大門重新開啟。'),
 beat('林映禾','還有兩枚。聽說周以澄今晚在整理舊資料，我們去找他。')
 ],
 meetShen:[
 beat('周以澄','先別碰那道光。每接近一步，系統就會多複製一份你的記憶。'),
 beat('姜彥廷','以澄？你怎麼一個人在這裡？'),
 beat('周以澄','我原本想先把危險隔離，等確認安全再通知你們。現在看來……我低估了它。'),
 beat('林映禾','你們兩個真的很像。都把「保護別人」寫成「不讓別人參與」。'),
 beat('周以澄','……說得沒錯。西邊書架藏著校驗碼，東邊是索引中樞。你們解碼，我會在旁邊穩住防線。'),
 beat('姜彥廷','那不是你的失敗。你替我們爭取了時間。接下來一起。',{choices:[
 choice('把你的觀察告訴我們吧。','周以澄展開筆記：「好。這一次，我把所有資訊都交給隊友。」',{relationship:{shen:2}}),
 choice('先深呼吸。我們有時間。','周以澄緩緩鬆開握緊的手：「謝謝。我好像很久沒聽到這句話。」',{relationship:{shen:2}})]})
 ],
 checksum:[
 beat('校驗書架','三個記憶位元的權重依序是 A＝1、B＝2、C＝4。已知 A 開啟、B 關閉、C 開啟。請將所有「開啟」的權重相加。'),
 beat('林映禾','只算開啟的就好。不用猜，可以慢慢算。正確的校驗碼是？',{choices:[
 choice('3（1＋2）','書架閃了兩下。林映禾指著 B：「它是關閉的喔。再看看 C 的權重。」'),
 choice('5（1＋4）','書架發出清脆的和聲。遺失的索引回到正確位置，第二道封印打開了。',{flag:'checksumSolved'}),
 choice('7（1＋2＋4）','周以澄搖搖頭：「不需要把所有值都算進去。排除關閉的 B，再試一次。」')]}),
 beat('旁白','提示：這是一個位元遮罩的小練習。錯誤答案不會扣除資源，可以再次調查書架。')
 ],
 checksumDone:[beat('校驗書架','A（1）＋C（4）＝5。索引已校驗，通往中樞的路保持暢通。')],
 book:[
 beat('旁白','一本舊筆記的扉頁寫著：「我希望有個系統，能幫大家不再後悔。」旁邊又補了一行：「可是，後悔也可能是因為曾經很在乎。」'),
 beat('姜彥廷','寫這句話的人，後來怎麼樣了？'),
 beat('周以澄','不知道。資料只保留了提交時間。有些重要的事，資料庫根本沒有欄位可以存。'),
 beat('林映禾','那我們記住就好。'),
 beat('旁白','獲得重啟羽籤 ×1。隊伍把這頁註解保留了下來。')
 ],
 beforeIndex:[
 beat('索引守衛','未分類的記憶，禁止通行。失敗、猶豫、未完成……全部應當移除。'),
 beat('周以澄','每份記憶都有存在的權限。你不能因為讀不懂，就把它刪掉。'),
 beat('姜彥廷','讓我們替那些記憶，重新建立索引。')
 ],
 afterIndex:[
 beat('旁白','書頁像溫柔的雨，從半空慢慢落下。第二枚錨點，在三人的掌心間亮起。'),
 beat('周以澄','我把通往核心的路找出來了。但裡面的錯誤，比外面更強。'),
 beat('林映禾','所以你更應該跟我們來。'),
 beat('周以澄','……好。如果你們願意，我想當那個可以被依靠，也可以依靠別人的隊友。'),
 beat('姜彥廷','位置早就留好了。'),
 beat('旁白','周以澄正式加入隊伍。學會以護盾分攤傷害；從任何休息點都能免費恢復，也能購買補給。')
 ],
 beforeRace:[
 beat('赤影','先寫入的人，才有資格決定結局。'),
 beat('青影','不。沒有等到所有答案，就不能提交。'),
 beat('姜彥廷','這是競態條件。它們在搶同一份記憶，所以誰都無法完成。'),
 beat('周以澄','把順序交給協定，把不同留給彼此。準備好了嗎？'),
 beat('林映禾','集中攻擊其中一個，先減少壓力。別忘了替正在蓄力的敵人加上「削弱」。')
 ],
 afterRace:[
 beat('赤影與青影','原來我們可以……輪流說完。'),
 beat('姜彥廷','不同的答案，不一定得互相覆蓋。'),
 beat('旁白','兩道光交錯成一條安穩的路。核心深處，傳來像心跳一樣的低鳴。'),
 beat('周以澄','前面是過載閘門。先到備援站休息吧，還有一段路要走。')
 ],
 memory:[
 beat('旁白','舊版提交紀錄：v0.1「讓大家更有效率」；v0.2「讓大家少一點後悔」；v0.3「刪除造成後悔的一切」。'),
 beat('周以澄','只改了幾個字，目標卻走到了完全不同的地方。'),
 beat('林映禾','因為它從來沒問過：大家真正想要的是什麼。'),
 beat('姜彥廷','最後一版，應該留一個詢問的按鈕。'),
 beat('旁白','你讀懂了系統的起點。獲得專注糖 ×2，並記下「先問，再改變」的協定。')
 ],
 shenTalk:[
 beat('周以澄','大一那年，我弄丟過一份同學的報告。從那以後，我總要確認備份、備份的備份，確認到別人都走了。'),
 beat('姜彥廷','你現在還在替那天的自己道歉嗎？'),
 beat('周以澄','……也許吧。我知道他早就不介意了。但我一直覺得，還不夠。'),
 beat('姜彥廷','今天你已經接住我們很多次了。也讓我們接住你一次。',{choices:[
 choice('你的價值，不只在於沒出錯。','周以澄沉默了片刻，終於露出笑容：「這句話，我會好好存起來。」',{relationship:{shen:2}}),
 choice('等出去後，請你教我做備份。','周以澄笑了：「好。但教完就收工。我們都要練習準時回家。」',{relationship:{shen:2}})]})
 ],
 beforeBeast:[
 beat('崩解演算獸','更多。更快。再努力一點，就可以讓所有人都滿意。'),
 beat('林映禾','這聲音……好像趕專題時的我們。'),
 beat('姜彥廷','但人不是可以無限擴充的記憶體。停下來，不等於放棄。'),
 beat('周以澄','看到它準備大範圍攻擊時，我會張開防火牆。彥廷，抓住它蓄力後的空隙。')
 ],
 afterBeast:[
 beat('旁白','演算獸散成細小的光點，像一場終於下完的雨。第三枚錨點安靜地落在地上。'),
 beat('林映禾','三枚都找到了。可是……核心還沒有安靜。'),
 beat('周以澄','它不是在拒絕修復。它在害怕。'),
 beat('姜彥廷','那最後一次，我們先聽它說。')
 ],
 beforeCompiler:[
 beat('失序編譯者','我替你們移除了錯誤，為什麼還要回來？沒有遺憾，難道不是你們最想要的事？'),
 beat('姜彥廷','我們想少一點遺憾。不是少掉會遺憾的自己。'),
 beat('林映禾','沒有猶豫的選擇，也可能只是沒有選擇。'),
 beat('周以澄','把權限還給每一個人。要刪除什麼，應該由他們自己決定。'),
 beat('失序編譯者','如果他們再次受傷呢？如果你們又做錯了呢？'),
 beat('姜彥廷','那我們就陪彼此修正。不是回到沒有發生過，而是從現在繼續。'),
 beat('旁白','最終戰：編譯者會在生命低於一半後過載。留意全體攻擊的預告，交替使用護盾、共鳴與防禦。普通攻擊也能回復專注。')
 ],
 finalChoice:[
 beat('旁白','劍光止住，潮聲漸息。失序編譯者不再像一個龐大的怪物，只剩一行等待輸入的游標。'),
 beat('失序編譯者','那麼，我還能替你們做什麼？'),
 beat('姜彥廷','先學會問問題。先讓每個人知道，可以拒絕，也可以改變主意。'),
 beat('林映禾','新的協定，要叫什麼名字？',{choices:[
 choice('同行協定：重要的事，一起決定。','三人的手同時落在終端上。潮汐第一次等到所有人點頭，才執行下一行。',{ending:'together',relationship:{su:1,shen:1}}),
 choice('留白協定：為未完成保留位置。','彥廷在最後一行留下一個空白欄位。不是遺漏，而是留給每個人還沒想好的明天。',{ending:'open',relationship:{su:1,shen:1}})]}),
 beat('旁白','系統重新啟動。所有被收起的記憶，都回到原本的人身邊。有人終於寄出訊息，有人把草稿再留一天。沒有哪一個答案被強迫。'),
 beat('周以澄','修好了。這次是真的。……我們可以收工了嗎？'),
 beat('林映禾','當然。第一個新任務：走出機房，好好吃晚餐。'),
 beat('姜彥廷','還有，去看海。今天就去。'),
 beat('旁白','夜色裡，三個人的腳步聲慢慢重疊。畢業還沒有答案，專題還要修改，但那不再讓人那麼害怕。'),
 beat('姜彥廷','明天見。不是程式的結束，是我們故事的下一行。')
 ],
 rest:[beat('旁白','你們坐下來喝了一杯熱茶，替彼此檢查傷口與裝備。生命、專注、護盾與狀態已完全恢復。重新出發的力氣，不需要用逞強交換。')],
 locked:[beat('旁白','這裡還需要前一段旅程的線索。打開任務紀錄，看看目前可以完成的目標。')],
 cleared:[beat('旁白','異常已經平息。曾經刺眼的程式光，現在只像一盞替晚歸的人留下的小燈。')]
};
