

// 8 TAROT KARTI (azaltılmayacak!)
window.tarotCards = [
  {name:{tr:"Aptal",en:"The Fool"},img:"https://i.pinimg.com/1200x/95/75/b2/9575b2acd29bf516d8a7cf02402bb54a.jpg",emoji:"🤹‍♂️"},
  {name:{tr:"Büyücü",en:"The Magician"},img:"https://i.pinimg.com/1200x/89/32/b8/8932b890833f0294c811e330687ae67b.jpg",emoji:"🪄"},
  {name:{tr:"Baş Rahibe",en:"The High Priestess"},img:"https://i.pinimg.com/1200x/c1/36/04/c13604c1cf56137b891380da1a9eea49.jpg",emoji:"🌙"},
  {name:{tr:"İmparatoriçe",en:"The Empress"},img:"https://i.pinimg.com/1200x/2e/db/f2/2edbf2d51095e73034d467298b8c3ecd.jpg",emoji:"👑"},
  {name:{tr:"İmparator",en:"The Emperor"},img:"https://i.pinimg.com/1200x/33/c2/d4/33c2d42f970ae4f0c4ca0aac7d3e9a59.jpg",emoji:"🏛️"},
  {name:{tr:"Aşıklar",en:"The Lovers"},img:"https://i.pinimg.com/1200x/66/a8/e7/66a8e7aa137882ced8daa6e0e3063cd9.jpg",emoji:"💘"},
  {name:{tr:"Güç",en:"Strength"},img:"https://i.pinimg.com/1200x/45/30/75/4530755737a4f036e5db8efa81811d34.jpg",emoji:"🦁"},
  {name:{tr:"Ermiş",en:"The Hermit"},img:"https://i.pinimg.com/1200x/02/a7/79/02a779d8c755e082be57f38a9832d141.jpg",emoji:"🧘"}
];

// Burçlar ve yorumlar (gerektiğinde eklenir)
window.burclar = [
  {ad:"Oğlak",bas:"01-01",bit:"01-20"},{ad:"Kova",bas:"01-21",bit:"02-19"},{ad:"Balık",bas:"02-20",bit:"03-20"},{ad:"Koç",bas:"03-21",bit:"04-20"},
  {ad:"Boğa",bas:"04-21",bit:"05-21"},{ad:"İkizler",bas:"05-22",bit:"06-21"},{ad:"Yengeç",bas:"06-22",bit:"07-22"},{ad:"Aslan",bas:"07-23",bit:"08-22"},
  {ad:"Başak",bas:"08-23",bit:"09-22"},{ad:"Terazi",bas:"09-23",bit:"10-22"},{ad:"Akrep",bas:"10-23",bit:"11-21"},{ad:"Yay",bas:"11-22",bit:"12-21"},{ad:"Oğlak",bas:"12-22",bit:"12-31"}
];
// Her kart için geçmiş/şimdi/gelecek, aşk/kariyer/normal (TR & EN)
window.cardMeanings = [
  // 0: Aptal / The Fool
  {
    tr: {
      normal: {
        past: "Geçmişinde hayatı fazla ciddiye almadan, cesurca adımlar attığın ve içindeki çocuğu özgür bıraktığın bir dönem yaşadın. Bazen düşünmeden hareket ettin ama bu sana paha biçilmez deneyimler kattı.",
        present: "Şu anda yeni başlangıçlara açıksın, özgür ruhunla çevrendeki fırsatlara göz kırpıyorsun. Bazen risk alsan da, kalbinin sesini dinlediğinde hep doğru yolu buluyorsun.",
        future: "Yakın zamanda seni heyecanlandıracak beklenmedik gelişmeler olacak. Gelecek, yeni bir maceraya atılmanı ve kendine güvenmeni istiyor. Unutma, içindeki cesaret seni ileriye taşıyacak."
      },
      ask: {
        past: "Geçmiş aşk hayatında, mantıktan çok kalbini dinledin. Belki safça başladın, gözün kara davrandın ama yaşadıkların sana gerçek sevgiyi öğretti.",
        present: "Aşk hayatında yeni bir sayfa açılıyor; bazen fevri olabilirsin ama içindeki coşku karşındakini etkiliyor. Flört etmeye, yeni deneyimlere açıksın.",
        future: "Çok yakında sürpriz bir aşk karşına çıkabilir. Bir maceraya atılmaya hazırsın; duygularını korkusuzca ifade ettiğinde mutlu olacaksın."
      },
      kariyer: {
        past: "Kariyerinde risk almaktan çekinmedin. Yeni başlangıçlar, beklenmedik fırsatlar geçmişinde belirleyici oldu.",
        present: "Şu an işinde yeniliklere açık, değişime istekli bir haldesin. Cesaretin ve açık fikirliliğin sana avantaj sağlıyor.",
        future: "Kariyerinde yeni bir yol ayrımı görünüyor. Beklemediğin bir teklif ya da proje, seni tamamen farklı bir noktaya taşıyabilir."
      }
    },
    en: {
      normal: {
        past: "In the past, you lived boldly, letting your inner child lead the way. Sometimes you acted without thinking, but those moments brought you invaluable experiences.",
        present: "You’re open to new beginnings, winking at opportunities around you with your free spirit. Even when you take risks, your heart guides you to the right path.",
        future: "Soon, unexpected developments will excite you. The future invites you to embark on a new adventure—have faith in your courage."
      },
      ask: {
        past: "In love, you followed your heart over logic. Maybe you started naively and jumped in headfirst, but you learned what true love means.",
        present: "A new chapter is opening in your love life; your enthusiasm makes you magnetic. You’re ready for flirts and fresh experiences.",
        future: "Very soon, a surprising love may appear. You’re ready for an adventure—express your feelings fearlessly and happiness will follow."
      },
      kariyer: {
        past: "You never hesitated to take risks in your career. New beginnings and unexpected opportunities shaped your past.",
        present: "You’re open to innovations at work and willing to change. Your courage and open-mindedness give you a real edge.",
        future: "A new fork in your career is emerging. An unexpected offer or project could transport you somewhere entirely new."
      }
    }
  },
  // 1: Büyücü / The Magician
  {
    tr: {
      normal: {
        past: "Geçmişte hayallerini gerçeğe dönüştürmek için zekânı ve yeteneklerini ustaca kullandın. Kendi gücünün farkına vardığın bir dönemdi.",
        present: "Şu anda kelimelerin ve davranışlarınla çevrene güçlü bir etki bırakıyorsun. Hedeflerine ulaşmak için ihtiyacın olan her şey sende mevcut.",
        future: "Yakında, aklındaki fikirleri gerçeğe dönüştürme fırsatı bulacaksın. Evren sana kendi gücünü kullanman için alan açıyor."
      },
      ask: {
        past: "Geçmişte ilişkilerinde manipülatif veya çekici yönünle karşı tarafı etkiledin. Aşka ulaşmak için aktif oldun.",
        present: "Şu an partnerinle arandaki kimya çok güçlü. Etkileyici sözlerin ve çekiciliğinle yeni bir aşka yelken açabilirsin.",
        future: "Yakında aşk hayatında kendi iradenle bir şeyleri değiştirecek ve istediğini elde edeceksin. Flörtte üstünlük sende olacak."
      },
      kariyer: {
        past: "İş hayatında fırsatları iyi değerlendirdin. Yeteneklerinle bir adım öne çıktın.",
        present: "Şu anda işinde tüm dikkatleri üzerine çekiyorsun. Zekân ve iletişiminle başarı kaçınılmaz.",
        future: "Yakında yeni bir projeye liderlik edebilirsin. Girişimlerin başarıya ulaşacak ve çevreni etkileyeceksin."
      }
    },
    en: {
      normal: {
        past: "In the past, you skillfully used your intelligence and talents to turn dreams into reality. It was a time of realizing your own power.",
        present: "Right now, your words and actions have a powerful influence on those around you. You possess everything you need to reach your goals.",
        future: "Soon, you’ll have the opportunity to bring your ideas to life. The universe is giving you space to use your full power."
      },
      ask: {
        past: "In past relationships, your charisma or even manipulative side often influenced others. You actively pursued love.",
        present: "There’s strong chemistry with your partner now. Your charm and words can open the door to new romance.",
        future: "Soon, you’ll change something in your love life through your own willpower, getting what you want. You’ll have the upper hand in flirting."
      },
      kariyer: {
        past: "In your career, you seized opportunities. Your skills set you ahead.",
        present: "Currently, you draw all eyes at work. With your intelligence and communication, success is inevitable.",
        future: "You may soon lead a new project. Your ventures will succeed and influence those around you."
      }
    }
  },
  // 2: Baş Rahibe / The High Priestess
  {
    tr: {
      normal: {
        past: "Geçmişte bilinçaltın ve sezgilerin sana sık sık yol gösterdi. O dönem sırlar, gizemler ve içsel keşiflerle doluydu.",
        present: "Şu anda olayların perde arkasını görüyorsun. Duyguların ve sezgilerin güçlü; kalbinin fısıltılarına kulak veriyorsun.",
        future: "Yakında hayatında perde arkasında kalan bir gerçek açığa çıkacak. Sezgilerinle hareket ettiğinde doğru yolu bulacaksın."
      },
      ask: {
        past: "Aşk hayatında duygularını saklamış veya derinden yaşamış olabilirsin. Kalbinin gizli köşelerinde önemli duygular var.",
        present: "Şu an hislerin çok güçlü. Partnerinle aranda söylenmeyen ama hissedilen bir bağ var.",
        future: "Yakında aşk hayatında bir sır veya saklı bir his gün yüzüne çıkacak. Sezgilerine güven, seni doğru aşka götürecek."
      },
      kariyer: {
        past: "İş hayatında sezgilerine güvenip önemli kararlar aldın. Bazen perde arkasındaki oyunları fark ettin.",
        present: "Şu anda iş ortamında herkesin göremediği detayları fark ediyorsun.",
        future: "Yakında kariyerinde saklı bir fırsat ortaya çıkacak. Sakin kalıp, iç sesini dinlersen başarılı olacaksın."
      }
    },
    en: {
      normal: {
        past: "In the past, your subconscious and intuition guided you often. That time was full of mysteries and inner discoveries.",
        present: "You’re seeing behind the scenes now. Your feelings and intuition are strong—listen to your heart’s whispers.",
        future: "Soon, a truth hidden behind the curtain will be revealed. By following your instincts, you’ll find the right path."
      },
      ask: {
        past: "In love, you may have kept your feelings hidden or experienced them deeply. There are important emotions in your heart’s secret corners.",
        present: "Your feelings are very strong now. There’s an unspoken but deeply felt connection with your partner.",
        future: "A secret or hidden feeling will soon come to light in your love life. Trust your intuition—it’ll lead you to the right love."
      },
      kariyer: {
        past: "In work, you made key decisions by trusting your intuition. Sometimes you noticed the behind-the-scenes games.",
        present: "Now, you’re seeing the details others may miss at work.",
        future: "A hidden opportunity will soon arise in your career. Stay calm and listen to your inner voice for success."
      }
    }
  },
  // ... diğer kartlar aynı şekilde devam edecek (İmparatoriçe, İmparator, Aşıklar, Güç, Ermiş) ...
];
// 3: İmparatoriçe / The Empress
{
  tr: {
    normal: {
      past: "Geçmişte sevgi dolu, besleyici bir ortamın parçası oldun. Yaratıcılığın ve üretkenliğin ön plandaydı; sevdiklerinle güçlü bağlar kurdun.",
      present: "Şu anda hayatında huzur ve bolluk hakim. Etrafına sıcaklık ve şefkat saçıyor, çevrendekileri destekliyorsun.",
      future: "Yakında bereketli ve verimli bir döneme giriyorsun. Hayatında yeni projeler, ilişkiler ya da ailevi mutluluklar gündeme gelebilir."
    },
    ask: {
      past: "Geçmişte aşk hayatında sevgi dolu bir yaklaşım sergiledin. Koruyucu, anaç ve anlayışlı bir partnerdin.",
      present: "Şu anda ilişkindeki şefkat ve empati öne çıkıyor. Karşılıklı destek ve ilgi ile aşkın büyüyor.",
      future: "Aşk hayatında yakında büyük bir tatmin ve huzur yaşayacaksın. Belki yeni bir aşka ya da mevcut ilişkide bir adım öteye geçiş var."
    },
    kariyer: {
      past: "Kariyerinde yaratıcı projeler, ekip çalışması ve verimlilik öne çıktı.",
      present: "Şu anda işinde üretkenliğin zirvesindesin. Fikirlerin ve desteğinle çevrene ilham veriyorsun.",
      future: "Yakında işinde büyük bir başarıya, berekete ve rahatlığa kavuşacaksın. Projelerin meyvesini verecek."
    }
  },
  en: {
    normal: {
      past: "In the past, you were part of a loving, nurturing environment. Your creativity and productivity stood out; you built strong bonds with loved ones.",
      present: "Currently, there is peace and abundance in your life. You spread warmth and support those around you.",
      future: "Soon, you will enter a fruitful and abundant period. New projects, relationships, or family joys may be on the horizon."
    },
    ask: {
      past: "In love, you showed a caring and nurturing side. You were a protective and understanding partner.",
      present: "Now, compassion and empathy are at the forefront of your relationship. Your love grows with mutual support.",
      future: "You will soon experience deep satisfaction and peace in your love life. This could be a new love or taking your current relationship to the next level."
    },
    kariyer: {
      past: "Creativity, teamwork, and productivity were key in your career.",
      present: "Right now, you are at your most productive at work. Your ideas and support inspire others.",
      future: "Soon, you’ll enjoy great success and abundance at work. Your projects will bear fruit."
    }
  }
},
// 4: İmparator / The Emperor
{
  tr: {
    normal: {
      past: "Geçmişte kararlı, disiplinli ve otoriter bir dönem geçirdin. Kurallar ve düzen senin için önemliydi.",
      present: "Şu anda hayatında sağlam temeller kurmaya çalışıyor, sorumluluklarını ön plana alıyorsun.",
      future: "Yakında liderlik yapacağın bir süreç geliyor. Güçlü ve kararlı adımların hayatına yön verecek."
    },
    ask: {
      past: "Aşk hayatında sağlam ve ciddi ilişkiler senin için önemliydi. Kontrolü elde tutmaya çalıştın.",
      present: "Şu anda ilişkinde istikrar ve güven arıyorsun. Duyguların kadar mantığın da ön planda.",
      future: "Yakında ilişkinde uzun vadeli bir adım veya ciddi bir karar gündeme gelebilir. Kalıcı birliktelik mümkün."
    },
    kariyer: {
      past: "Kariyerinde düzen, disiplin ve liderlik ön plandaydı.",
      present: "Şu an işinde sorumluluk sahibisin, yönetici vasfın öne çıkıyor.",
      future: "Yakında işte yükseliş, terfi veya kendi işinin başına geçme şansı var. Gücünle fark yaratacaksın."
    }
  },
  en: {
    normal: {
      past: "In the past, you were determined, disciplined, and authoritative. Rules and order mattered to you.",
      present: "Now, you are focused on building strong foundations and taking responsibility.",
      future: "Soon, you will enter a phase of leadership. Your strong and steady steps will shape your life."
    },
    ask: {
      past: "In love, solid and serious relationships were important to you. You tried to stay in control.",
      present: "Now, you seek stability and security in your relationship. Your mind is as important as your heart.",
      future: "A serious step or long-term decision may soon arise in your relationship. Long-lasting commitment is possible."
    },
    kariyer: {
      past: "Order, discipline, and leadership stood out in your career.",
      present: "You are now responsible at work, and your managerial skills are evident.",
      future: "A promotion, leadership role, or running your own business is possible soon. You’ll stand out with your power."
    }
  }
},
// 5: Aşıklar / The Lovers
{
  tr: {
    normal: {
      past: "Geçmişte önemli seçimlerle karşılaştın. Kalbin ve aklın arasında kaldığın bir dönemdi.",
      present: "Şu an duyguların ön planda. İlişkilerinde uyum ve birliktelik arıyorsun.",
      future: "Yakında bir karar vermen gerekecek. Doğruyu seçmek için kalbini dinle."
    },
    ask: {
      past: "Aşk hayatında iki kişi arasında kalmış veya duygusal bir yol ayrımı yaşamış olabilirsin.",
      present: "Şu an aşkta uyum, karşılıklı sevgi ve tutku hâkim.",
      future: "Çok yakında önemli bir aşk kararı seni bekliyor. Gerçek aşkın ne olduğunu keşfedeceksin."
    },
    kariyer: {
      past: "Kariyerinde seçimler ve ortaklıklar ön plandaydı.",
      present: "İş hayatında takım çalışması ve uyum senin için önemli.",
      future: "Yakında yeni bir işbirliği ya da ortaklık fırsatı doğabilir. Doğru kişiyi seçmek başarı getirecek."
    }
  },
  en: {
    normal: {
      past: "In the past, you faced important choices. It was a time when you were torn between your heart and your mind.",
      present: "Now, your emotions take the lead. You seek harmony and unity in your relationships.",
      future: "You’ll soon have to make a decision. Listen to your heart to choose rightly."
    },
    ask: {
      past: "In love, you may have been torn between two people or experienced a romantic crossroads.",
      present: "Now, love is about harmony, mutual affection, and passion.",
      future: "A major love decision awaits you soon. You will discover what true love means."
    },
    kariyer: {
      past: "Choices and partnerships were prominent in your career.",
      present: "Teamwork and harmony matter most to you at work.",
      future: "A new collaboration or partnership opportunity may soon arise. Choosing the right person will bring success."
    }
  }
},
// 6: Güç / Strength
{
  tr: {
    normal: {
      past: "Geçmişte büyük zorlukların üstesinden geldin. İçindeki güç ve sabır, engelleri aşmanı sağladı.",
      present: "Şu an iraden ve inancın çok güçlü. Zorluklar karşısında sarsılmıyorsun.",
      future: "Yakında hayatına güç ve cesaret gerektiren yeni bir sınav çıkacak. Kendine güven; başaracaksın."
    },
    ask: {
      past: "Aşk hayatında sorunlar olsa da, sabrın ve şefkatinle bunları aştın.",
      present: "Şu an ilişkinde fedakarlık, güven ve duygusal dayanıklılık ön planda.",
      future: "Yakında ilişkinin güçlenmesini sağlayacak bir sınavdan geçeceksin. Sevginle her şeyi aşacaksın."
    },
    kariyer: {
      past: "Kariyerinde zorluklar yaşadın ama direncin sayesinde yılmadın.",
      present: "İşinde kararlı ve azimlisin; her engelin üstesinden geliyorsun.",
      future: "Yakında iş hayatında büyük bir mücadele seni bekliyor, ama iradenle zafer senin olacak."
    }
  },
  en: {
    normal: {
      past: "In the past, you overcame great difficulties. Your inner strength and patience helped you get through.",
      present: "Now, your will and faith are strong. You don’t shake in the face of challenges.",
      future: "A test requiring strength and courage is coming. Trust yourself—you’ll succeed."
    },
    ask: {
      past: "Even if there were issues in love, you overcame them with patience and compassion.",
      present: "Sacrifice, trust, and emotional resilience are central in your relationship now.",
      future: "Soon, your relationship will be tested, but your love will help you overcome anything."
    },
    kariyer: {
      past: "You faced hardships in your career but persisted thanks to your resilience.",
      present: "You’re determined and persistent at work; you overcome every challenge.",
      future: "A big struggle awaits you at work, but with your willpower, victory is yours."
    }
  }
},
// 7: Ermiş / The Hermit
{
  tr: {
    normal: {
      past: "Geçmişte yalnız kalmayı seçtin veya zorunda kaldın. Kendi iç dünyanı keşfetmek, sana önemli farkındalıklar kazandırdı.",
      present: "Şu an içsel bir yolculuktasın; sessizliğin ve yalnızlığın sana güç veriyor.",
      future: "Yakında inzivaya çekilme veya daha çok kendine dönme ihtiyacı hissedeceksin. Bu süreçte önemli bir bilgelik kazanacaksın."
    },
    ask: {
      past: "Aşk hayatında bir süre yalnız kalmayı tercih ettin. Kendini ve duygularını daha iyi tanıdın.",
      present: "Şu anda aşk konusunda içe dönük bir dönemdesin. Kendini dinlemeye ve duygularını çözmeye ihtiyacın var.",
      future: "Yakında aşka dair önemli bir içsel aydınlanma yaşayacaksın. Yalnızlık sana yeni bir perspektif katacak."
    },
    kariyer: {
      past: "Kariyerinde bir süre kendi başına çalıştın veya yalnız kaldın. Bu dönem kişisel gelişimini hızlandırdı.",
      present: "Şu anda kendi fikirlerinle ilerlemek istiyorsun. Yalnız çalışmak sana huzur veriyor.",
      future: "Yakında işte yalnız başına önemli bir sorumluluk üstleneceksin. Bu süreç sana büyük bir deneyim kazandıracak."
    }
  },
  en: {
    normal: {
      past: "In the past, you chose or were forced to be alone. Exploring your inner world brought you major insights.",
      present: "Now, you are on an inner journey; silence and solitude empower you.",
      future: "You’ll soon feel the need for solitude or more self-reflection. You’ll gain wisdom through this process."
    },
    ask: {
      past: "You chose to be alone for a while in love. You came to know yourself and your feelings better.",
      present: "Right now, you’re in an introspective phase in love. You need to listen to yourself and work through your feelings.",
      future: "Soon, you’ll have an important inner awakening about love. Solitude will give you a new perspective."
    },
    kariyer: {
      past: "You worked alone or in solitude for a time in your career. This period accelerated your personal development.",
      present: "You now want to advance with your own ideas. Working alone gives you peace.",
      future: "Soon, you’ll take on a major responsibility alone at work. This will give you valuable experience."
    }
  }
}
// Her kombinasyon için özgün aşk ve kariyer özetleri (TR & EN)
window.comboSummaryTexts = {
  tr: {
    ask: {
      "0-1-2": "Geçmişte kalbini cesurca açtın ve yeni başlangıçlar yaşadın (Aptal). Şu anda büyülü bir çekim ve karşılıklı bir tutku içinde olabilirsin (Büyücü). Yakında ise ilişkinde hislerin ve sezgilerin çok güçlenecek; iç sesini dinlersen gerçek aşkı bulabilirsin (Baş Rahibe).",
      "0-1-3": "Aşk hayatının geçmişinde özgürlük ve neşeyle başlamış bir dönem var (Aptal). Şu anda iletişimin çok kuvvetli ve partnerini etkiliyorsun (Büyücü). Gelecek ise huzur, şefkat ve doyasıya mutluluk vadediyor (İmparatoriçe).",
      "0-1-4": "Geçmişte aşk adına risk almaktan korkmadın (Aptal). Şu an kendini partnerine daha güçlü ifade ediyorsun (Büyücü). Yakında, ilişkinde sağlamlık ve güvenle dolu, daha ciddi bir döneme giriyorsun (İmparator).",
      "0-1-5": "Geçmişinde aşkı keşfetmenin heyecanı var (Aptal). Şu anda ise ilişkinde tutku ve çekim ön planda (Büyücü). Çok yakında, önemli bir seçim veya kader anı yaşayacaksın (Aşıklar).",
      "0-1-6": "Aşk geçmişinde cesur adımlar atmışsın (Aptal). Bugün büyüleyici enerjinle sevdiğine güç veriyorsun (Büyücü). Yakın gelecekte ilişkiniz güçlenecek ve birlikte zorlukların üstesinden geleceksiniz (Güç).",
      "0-1-7": "Geçmişte hayatının aşkını ararken korkusuzdun (Aptal). Şu anda iletişimin ve çekimin kuvvetli (Büyücü). Gelecekte ise aşkta daha derin bir yalnızlık veya içsel sorgulama dönemi başlayabilir (Ermiş).",
      "0-2-1": "Geçmişte hislerine ve sezgilerine çok güvenmişsin (Baş Rahibe). Şu an ise karşındakini etkileyen bir çekim gücüne sahipsin (Büyücü). Gelecekte, aşkı biraz daha mantık ve liderlikle yönlendireceksin (İmparator).",
      "0-2-3": "Geçmişte iç dünyana ve duygularına kulak vermişsin (Baş Rahibe). Şu an ilişkinin başrolünde sen varsın (Büyücü). Yakında huzur, şefkat ve verimli bir aşk dönemi başlıyor (İmparatoriçe).",
      "0-2-4": "Geçmişte duygularını derinlemesine yaşadın (Baş Rahibe). Şu anda ilişkinde karşılıklı bir büyü var (Büyücü). Gelecekte ise birlikte sağlam ve ciddi bir adım atacaksınız (İmparator).",
      "0-2-5": "Aşk hayatının geçmişinde gizli duyguların etkisi büyüktü (Baş Rahibe). Şu anda büyülü bir çekim içindesin (Büyücü). Yakında önemli bir seçim aşamasına geliyorsun (Aşıklar).",
      // ... Bu şekilde 512 kombinasyonun tamamı, özgün ve detaylı şekilde doldurulacak ...
    },
    kariyer: {
      "0-1-2": "Kariyer geçmişinde risk alarak yeni bir sayfa açtın (Aptal). Şu anda beceri ve zekânla çevrendekilere ilham oluyorsun (Büyücü). Yakında sezgilerinle gizli bir fırsat yakalayacaksın (Baş Rahibe).",
      "0-1-3": "Geçmişte kariyerinde yeni projelere atıldın (Aptal). Şimdi iş ortamında yıldızın parlıyor (Büyücü). Gelecekte ise bolluk ve başarı ile taçlanacaksın (İmparatoriçe).",
      "0-1-4": "Kariyerinde cesur bir adım attın (Aptal). Şu anda projelerinde büyük etki yaratıyorsun (Büyücü). Çok yakında yönetici konumuna yükselebilirsin (İmparator).",
      "0-1-5": "Geçmişte kariyer alanında yeni fırsatlar kovaladın (Aptal). Şu an etkileyici iletişimin ve karizman sayesinde fark yaratıyorsun (Büyücü). Gelecekte ise önemli bir kariyer seçimi kapıda (Aşıklar).",
      "0-1-6": "Kariyerinin başlangıcı risk ve yenilikle doluydu (Aptal). Şu an başarıya ulaşmak için kendine güveniyorsun (Büyücü). Gelecek ise zorlukları aşarak güç kazanacağın bir dönem olacak (Güç).",
      "0-1-7": "Kariyerinde yenilikçi ve açık fikirli oldun (Aptal). Şimdi ise iletişiminle ön plandasın (Büyücü). Yakında biraz içe dönüp büyük bir bilgi ve deneyim kazanacaksın (Ermiş).",
      "0-2-1": "Geçmişte sezgilerinle yol aldın (Baş Rahibe). Şu an yaratıcılığınla dikkat çekiyorsun (Büyücü). Gelecekte ise otoriteni ortaya koyacaksın (İmparator).",
      "0-2-3": "Geçmişte iç sesini dinleyerek kariyer yolunda ilerledin (Baş Rahibe). Şu anda ise gücünle öne çıkıyorsun (Büyücü). Yakında verimli ve bereketli bir dönem seni bekliyor (İmparatoriçe).",
      "0-2-4": "Kariyerinin geçmişinde derin düşünceler ve sezgiler etkiliydi (Baş Rahibe). Şu an işteki enerjinle dikkat çekiyorsun (Büyücü). Çok yakında liderlik rolü üstleneceksin (İmparator).",
      "0-2-5": "Sezgilerinle doğru yolu bulduğun bir kariyer geçmişin var (Baş Rahibe). Şu an etkili iletişiminle fark yaratıyorsun (Büyücü). Gelecekte önemli bir kariyer seçimiyle karşılaşacaksın (Aşıklar).",
      // ... 512 kombinasyonun tamamı aynı şekilde doldurulacak ...
    }
  },
  en: {
    ask: {
      "0-1-2": "In the past, you opened your heart boldly and experienced new beginnings (The Fool). Now, you may be in a state of magical attraction and mutual passion (The Magician). Soon, your feelings and intuition in your relationship will strengthen—listen to your inner voice to find true love (The High Priestess).",
      "0-1-3": "Your love life began with freedom and joy in the past (The Fool). Now, your communication is very strong, and you influence your partner (The Magician). The future promises peace, compassion, and pure happiness (The Empress).",
      "0-1-4": "You were not afraid to take risks for love in the past (The Fool). Now, you express yourself more confidently to your partner (The Magician). Soon, you enter a more serious, secure phase in your relationship (The Emperor).",
      "0-1-5": "The excitement of discovering love lies in your past (The Fool). Currently, passion and attraction are at the forefront (The Magician). Very soon, you will face an important choice or turning point (The Lovers).",
      "0-1-6": "You've made bold moves in love's past (The Fool). Today, you give strength to your beloved with your enchanting energy (The Magician). In the near future, your relationship will grow stronger and you'll overcome challenges together (Strength).",
      "0-1-7": "You were fearless in seeking love in the past (The Fool). Now, your communication and attraction are strong (The Magician). In the future, a period of deeper loneliness or inner questioning in love may begin (The Hermit).",
      "0-2-1": "You relied heavily on your feelings and intuition in the past (The High Priestess). Now, you have a magnetic appeal to others (The Magician). In the future, you'll steer love with more logic and leadership (The Emperor).",
      "0-2-3": "You listened to your inner world and emotions in the past (The High Priestess). Now, you are the lead in your relationship (The Magician). Soon, a peaceful, compassionate, and fertile love period begins (The Empress).",
      "0-2-4": "You experienced your emotions deeply in the past (The High Priestess). Currently, there is mutual magic in your relationship (The Magician). In the future, you will take a solid and serious step together (The Emperor).",
      "0-2-5": "Hidden feelings played a big part in your love life in the past (The High Priestess). Now, you are in a magical state of attraction (The Magician). Soon, you'll come to an important crossroads in love (The Lovers).",
      // ... and so on, for every combination ...
    },
    kariyer: {
      "0-1-2": "In your career past, you took risks and opened a new page (The Fool). Now, you inspire others with your skills and intelligence (The Magician). Soon, you’ll catch a hidden opportunity with your intuition (The High Priestess).",
      "0-1-3": "You started new projects in your career past (The Fool). Now, your star shines at work (The Magician). The future will be crowned with abundance and success (The Empress).",
      "0-1-4": "You made a bold move in your career (The Fool). Currently, you create a big impact in your projects (The Magician). Soon, you could rise to a managerial position (The Emperor).",
      "0-1-5": "In the past, you chased new opportunities in your career (The Fool). Now, your charisma and effective communication set you apart (The Magician). In the future, an important career decision awaits (The Lovers).",
      "0-1-6": "Your career started with risk and innovation (The Fool). Now, you are confident in your abilities (The Magician). The future brings a period where you gain strength by overcoming obstacles (Strength).",
      "0-1-7": "You were innovative and open-minded in your career (The Fool). Now, you are at the forefront with your communication (The Magician). Soon, you’ll turn inward and gain significant knowledge and experience (The Hermit).",
      "0-2-1": "In the past, you followed your intuition in your career (The High Priestess). Now, your creativity attracts attention (The Magician). In the future, you’ll assert your authority (The Emperor).",
      "0-2-3": "In the past, you progressed by listening to your inner voice in your career (The High Priestess). Now, you stand out with your strength (The Magician). Soon, a productive and abundant period awaits (The Empress).",
      "0-2-4": "Deep thoughts and intuition shaped your career past (The High Priestess). Now, your energy is noticed at work (The Magician). Soon, you'll take on a leadership role (The Emperor).",
      "0-2-5": "You have a career past where you found the right path with your intuition (The High Priestess). Now, your effective communication makes a difference (The Magician). In the future, you'll face an important career decision (The Lovers).",
      // ... and so on, for every combination ...
    }
  }
};
// Kombinasyon özetlerinin devamı (TR & EN)
Object.assign(comboSummaryTexts.tr.ask, {
  "0-3-1": "Geçmişte ilişkilerinde huzur ve şefkat ön plandaydı (İmparatoriçe). Şu anda iletişim gücün ve çekiciliğin yüksek (Büyücü). Yakında ilişkinde liderlik ve kararlılık öne çıkacak; daha ciddi bir bağa adım atacaksın (İmparator).",
  "0-3-2": "Geçmişte sevgi dolu ve verimli bir aşk dönemi yaşadın (İmparatoriçe). Şu an büyüleyici enerjinle partnerine ilham veriyorsun (Büyücü). Gelecek ise sezgilerinin yönlendirdiği bir aşk hikayesiyle şekillenecek (Baş Rahibe).",
  "0-3-3": "Aşk geçmişinde şefkat ve bereket hakimdi (İmparatoriçe). Şu anda güçlü bir iletişim ve karşılıklı etkileşim var (Büyücü). Gelecekte ise aynı huzuru ve mutluluğu yeniden yakalayacaksın (İmparatoriçe).",
  "0-3-4": "Geçmişte sevgiyle inşa ettiğin bir ilişki oldu (İmparatoriçe). Şu an iletişim becerilerin öne çıkıyor (Büyücü). Çok yakında ilişkinde daha oturaklı ve kararlı bir dönem başlıyor (İmparator).",
  "0-3-5": "Aşk hayatının geçmişi huzur ve mutluluk doluydu (İmparatoriçe). Şu an ilişkinin büyüsünü yaşıyorsun (Büyücü). Yakın zamanda önemli bir aşk seçimiyle karşılaşacaksın (Aşıklar).",
  "0-3-6": "Geçmişte şefkat ve sıcaklıkla ilişkini besledin (İmparatoriçe). Şu an çekim gücün yüksek (Büyücü). Yakında ilişkin daha da güçlenecek, birlikte engelleri aşacaksınız (Güç).",
  "0-3-7": "Aşk geçmişinde huzur ve bereket ön plandaydı (İmparatoriçe). Şu an partnerini büyüleyen bir enerjiye sahipsin (Büyücü). Yakında iç dünyana dönüp aşkı sorgulayacağın bir süreç başlayabilir (Ermiş).",
  // ... diğer kombinasyonlar ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "0-3-1": "Geçmişte üretkenliğin ve ekip çalışması kariyerine yön verdi (İmparatoriçe). Şu anda beceri ve iletişiminle iş ortamında fark yaratıyorsun (Büyücü). Çok yakında liderlik ve otorite rolü üstleneceksin (İmparator).",
  "0-3-2": "Kariyerinde verimli bir dönemin ardından sezgilerinle doğru adımlar atıyorsun (İmparatoriçe). Şu an iş arkadaşlarını motive ediyorsun (Büyücü). Gelecek ise sezgilerinle fark yaratacağın bir fırsat sunacak (Baş Rahibe).",
  "0-3-3": "Geçmişte işte bereket ve üretkenlik ön plandaydı (İmparatoriçe). Şu an enerjinle parlıyorsun (Büyücü). Gelecekte benzer bir bereket ve rahatlık seni bekliyor (İmparatoriçe).",
  "0-3-4": "Kariyerinde geçmişte ekip ruhu ve üretkenlik hakimdi (İmparatoriçe). Şu an projelerine liderlik ediyorsun (Büyücü). Yakında iş yerinde otoriten ve pozisyonun güçlenecek (İmparator).",
  "0-3-5": "Geçmişte ekip çalışmasında başarılıydın (İmparatoriçe). Şu an iletişiminle iş hayatında fark yaratıyorsun (Büyücü). Yakında önemli bir kariyer seçimiyle karşılaşacaksın (Aşıklar).",
  "0-3-6": "Kariyerinde bereketli bir dönemin ardından şimdi motivasyon ve güçlüsün (Büyücü). Gelecek ise zorluklara rağmen daha da güçleneceğin bir dönem olacak (Güç).",
  "0-3-7": "İş hayatında verimli ve huzurlu bir geçmişin var (İmparatoriçe). Şu anda enerjinle dikkat çekiyorsun (Büyücü). Yakında kendine dönüp tecrübe kazanacağın bir süreç başlayabilir (Ermiş).",
  // ... diğer kombinasyonlar ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "0-3-1": "In the past, peace and compassion were at the forefront of your relationships (The Empress). Now, your communication skills and charm are at their peak (The Magician). Soon, leadership and decisiveness will stand out in your relationship, leading to a more serious bond (The Emperor).",
  "0-3-2": "You experienced a loving and fruitful period in the past (The Empress). Now, your enchanting energy inspires your partner (The Magician). The future will be shaped by a love story guided by your intuition (The High Priestess).",
  "0-3-3": "Peace and abundance dominated your love life in the past (The Empress). Currently, there's a strong mutual communication (The Magician). In the future, you’ll experience the same happiness and contentment again (The Empress).",
  "0-3-4": "In the past, you built a relationship with love (The Empress). Now, your communication skills are prominent (The Magician). Very soon, a more established and stable period will begin in your relationship (The Emperor).",
  "0-3-5": "Your love life was filled with happiness and peace in the past (The Empress). Now, you're experiencing the magic in your relationship (The Magician). Soon, you'll face an important love decision (The Lovers).",
  "0-3-6": "You nurtured your relationship with compassion and warmth in the past (The Empress). Now, your attraction is strong (The Magician). Soon, your relationship will get even stronger and you’ll overcome obstacles together (Strength).",
  "0-3-7": "Abundance and tranquility were central in your love life in the past (The Empress). Currently, you have a magnetic energy that enchants your partner (The Magician). Soon, you may turn inward and enter a phase of inner questioning in love (The Hermit).",
  // ... other combinations ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "0-3-1": "In the past, your productivity and teamwork shaped your career (The Empress). Now, your skills and communication make you stand out at work (The Magician). Soon, you will assume a leadership and authority role (The Emperor).",
  "0-3-2": "After a fruitful period in your career, you are now taking the right steps with your intuition (The Empress). Currently, you motivate your colleagues (The Magician). The future will offer you an opportunity where your intuition will make a difference (The High Priestess).",
  "0-3-3": "In the past, abundance and productivity were at the forefront of your work (The Empress). Now, you shine with your energy (The Magician). In the future, similar abundance and comfort await you (The Empress).",
  "0-3-4": "In your career, team spirit and productivity were dominant in the past (The Empress). Now, you are leading your projects (The Magician). Soon, your authority and position at work will strengthen (The Emperor).",
  "0-3-5": "You were successful in teamwork in the past (The Empress). Now, your communication makes you stand out in business life (The Magician). Soon, you'll face an important career choice (The Lovers).",
  "0-3-6": "After a productive period in your career, you are now motivated and strong (The Magician). The future will bring a period of even greater strength despite challenges (Strength).",
  "0-3-7": "You have a fruitful and peaceful background at work (The Empress). Now, your energy draws attention (The Magician). Soon, you may turn inward and gain experience (The Hermit).",
  // ... other combinations ...
});
// Kombinasyon özetlerinin devamı (TR & EN)
Object.assign(comboSummaryTexts.tr.ask, {
  "0-4-1": "Geçmişte ilişkinde sağlam ve ciddi adımlar attın (İmparator). Şu an iletişimin ve çekiciliğin ön planda (Büyücü). Gelecek ise seni aşkın yeni bir evresine, daha derin bir bağlılığa taşıyor (İmparatoriçe).",
  "0-4-2": "Aşk geçmişinde istikrar ve güven arayışın öne çıkıyor (İmparator). Şu anda büyüleyici bir iletişim içindesin (Büyücü). Yakında duyguların ve sezgilerin öne çıkacağı bir ilişki yaşayabilirsin (Baş Rahibe).",
  "0-4-3": "İlişkinde sağlamlık ve liderlik geçmişte önemliydi (İmparator). Şu an karşılıklı büyü ve tutku var (Büyücü). Gelecekte ise şefkat ve huzur dolu bir ilişkiye adım atacaksın (İmparatoriçe).",
  "0-4-4": "Geçmişte ilişkinde sorumluluk aldın (İmparator). Şu an iletişimin kuvvetli (Büyücü). Gelecek ise yeni bir ciddi beraberlik ya da evlilik vadediyor (İmparator).",
  "0-4-5": "Aşk hayatının geçmişi ciddiyetle doluydu (İmparator). Şu an partnerini etkiliyorsun (Büyücü). Yakında önemli bir aşk kararı alman gerekebilir (Aşıklar).",
  "0-4-6": "Geçmişte kararlı bir şekilde ilişkini korudun (İmparator). Şu anda çekim gücün yüksek (Büyücü). Gelecekte aşkınız daha da güçlenecek, sorunların üstesinden geleceksiniz (Güç).",
  "0-4-7": "Aşk hayatının geçmişinde liderlik ve koruyuculuk vardı (İmparator). Şu anda iletişimin ön planda (Büyücü). Yakında ilişkinde içsel bir yolculuğa çıkacaksın (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "0-4-1": "Kariyerinin geçmişinde otorite ve disiplin önemliydi (İmparator). Şu anda iş ortamında beceri ve yaratıcılığın öne çıkıyor (Büyücü). Yakında yeni bir proje ya da bereketli bir iş fırsatı gündeme gelecek (İmparatoriçe).",
  "0-4-2": "Geçmişte disiplin ve düzen ile ilerledin (İmparator). Şu anda çevrende ilham veriyorsun (Büyücü). Gelecekte ise sezgilerinle önemli bir fırsat yakalayacaksın (Baş Rahibe).",
  "0-4-3": "Kariyerinde sorumluluk ve liderlik ön plandaydı (İmparator). Şu an iş ortamında etkileyici bir iletişimin var (Büyücü). Yakında verimli ve bereketli bir döneme giriyorsun (İmparatoriçe).",
  "0-4-4": "İş hayatının geçmişi sağlam temeller üzerine kuruldu (İmparator). Şu an iletişimin kuvvetli (Büyücü). Yakında yeni bir yönetici rolü ya da önemli bir terfi kapıda (İmparator).",
  "0-4-5": "Kariyerinin geçmişinde ciddiyet ön plandaydı (İmparator). Şu an iş ortamında fark yaratıyorsun (Büyücü). Gelecekte önemli bir kariyer seçimiyle karşılaşacaksın (Aşıklar).",
  "0-4-6": "Geçmişte sorumluluk ve güç seninleydi (İmparator). Şu anda iş hayatında motivasyonun yüksek (Büyücü). Gelecekte büyük bir zorluğu aşacaksın (Güç).",
  "0-4-7": "Kariyerinin geçmişinde liderlik ettin (İmparator). Şu an yaratıcılığın ile parlıyorsun (Büyücü). Yakında yalnız çalışacağın, önemli deneyimler edineceğin bir dönem var (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "0-4-1": "In the past, you took solid and serious steps in your relationship (The Emperor). Now, your communication and charm are at the forefront (The Magician). The future brings you into a new phase of love—a deeper connection (The Empress).",
  "0-4-2": "Your love history is marked by a search for stability and security (The Emperor). Currently, you are in an enchanting conversation (The Magician). Soon, you may experience a relationship guided by feelings and intuition (The High Priestess).",
  "0-4-3": "Strength and leadership were important in your relationship's past (The Emperor). Now, there is mutual magic and passion (The Magician). In the future, you’ll enter a relationship full of compassion and peace (The Empress).",
  "0-4-4": "In the past, you took responsibility in love (The Emperor). Now, your communication is strong (The Magician). The future promises a new serious relationship or even marriage (The Emperor).",
  "0-4-5": "Your love history was marked by seriousness (The Emperor). Currently, you influence your partner (The Magician). Soon, you'll need to make an important love decision (The Lovers).",
  "0-4-6": "You protected your relationship with determination in the past (The Emperor). Now, your attraction is strong (The Magician). In the future, your love will get stronger and overcome obstacles (Strength).",
  "0-4-7": "Your love life in the past was about leadership and protection (The Emperor). Now, communication is prominent (The Magician). Soon, you will embark on an inner journey in your relationship (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "0-4-1": "In the past, authority and discipline were important in your career (The Emperor). Now, your skill and creativity stand out at work (The Magician). Soon, a new project or fruitful opportunity is coming (The Empress).",
  "0-4-2": "You moved forward with discipline and order in the past (The Emperor). Now, you inspire those around you (The Magician). In the future, your intuition will lead you to a major opportunity (The High Priestess).",
  "0-4-3": "Responsibility and leadership stood out in your career past (The Emperor). Currently, you communicate impressively at work (The Magician). Soon, you’ll enter a productive and abundant period (The Empress).",
  "0-4-4": "Your business life was built on solid foundations (The Emperor). Now, your communication is strong (The Magician). A managerial role or important promotion is on the horizon (The Emperor).",
  "0-4-5": "Seriousness was at the forefront in your career history (The Emperor). Now, you make a difference at work (The Magician). In the future, you'll face an important career decision (The Lovers).",
  "0-4-6": "Responsibility and power were with you in the past (The Emperor). Now, you're highly motivated at work (The Magician). Soon, you'll overcome a great challenge (Strength).",
  "0-4-7": "You led in your career past (The Emperor). Now, you shine with your creativity (The Magician). Soon, there’s a period ahead where you'll work alone and gain major experience (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "0-5-1": "Geçmişte iki kişi arasında kalmış ya da büyük bir aşk seçimiyle karşılaşmış olabilirsin (Aşıklar). Şu anda iletişiminle ve enerjinle partnerini etkiliyorsun (Büyücü). Yakında ise ilişkinde şefkat ve huzur ön planda olacak (İmparatoriçe).",
  "0-5-2": "Aşk hayatının geçmişinde tutku dolu bir karar verdin (Aşıklar). Şu an büyüleyici enerjinle yeni bir aşk çekiyorsun (Büyücü). Yakında duygularının derinliğine inen, sezgisel bir bağ kurabilirsin (Baş Rahibe).",
  "0-5-3": "Geçmişinde aşkın en heyecanlı ve seçici dönemi vardı (Aşıklar). Şimdi çekiciliğin yüksek (Büyücü). Gelecek ise sana huzur ve bereket getiriyor (İmparatoriçe).",
  "0-5-4": "Aşk hayatının geçmişi bir dönüm noktasıydı (Aşıklar). Şu anda güçlü bir iletişimdesin (Büyücü). Yakında ciddi ve sağlam bir birlikteliğe adım atacaksın (İmparator).",
  "0-5-5": "Geçmişinde bir aşk kararı ya da ikilem vardı (Aşıklar). Şu an partnerinle karşılıklı çekim yaşıyorsun (Büyücü). Gelecek ise önemli bir ilişki seçimiyle yeniden şekillenecek (Aşıklar).",
  "0-5-6": "Aşk geçmişinde seçimler ön plandaydı (Aşıklar). Şimdi partnerini büyülüyorsun (Büyücü). Gelecekte ilişkiniz zorluklara rağmen güçlenecek (Güç).",
  "0-5-7": "İlişkinde geçmişte önemli bir karar aşamasından geçtin (Aşıklar). Şu an etkileyici sözlerinle öne çıkıyorsun (Büyücü). Yakında aşk konusunda derin bir iç yolculuğa çıkabilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "0-5-1": "Kariyerinde önemli bir tercih yaptın (Aşıklar). Şu anda iletişimin ve becerilerinle fark yaratıyorsun (Büyücü). Yakında işte yeni ve bereketli bir dönem başlıyor (İmparatoriçe).",
  "0-5-2": "Geçmişte kariyerinde bir yol ayrımına geldin (Aşıklar). Şu an çevreni etkiliyorsun (Büyücü). Gelecekte ise sezgilerinle büyük bir fırsat yakalayacaksın (Baş Rahibe).",
  "0-5-3": "Kariyerinde seçimler ve iş birlikleri vardı (Aşıklar). Şu anda enerjin çok yüksek (Büyücü). Gelecek ise işte huzur ve verimlilik getirecek (İmparatoriçe).",
  "0-5-4": "İş hayatının geçmişi büyük bir karar dönemiydi (Aşıklar). Şu an güçlü iletişiminle dikkat çekiyorsun (Büyücü). Yakında yönetici konumuna yükselebilirsin (İmparator).",
  "0-5-5": "Geçmişte işte önemli bir seçim yaptın (Aşıklar). Şu an farkını ortaya koyuyorsun (Büyücü). Gelecek ise yeni bir iş tercihiyle yeniden şekillenecek (Aşıklar).",
  "0-5-6": "Kariyer geçmişinde seçimler öne çıkıyor (Aşıklar). Şu anda projelerde etkileyicisin (Büyücü). Yakında büyük bir zorluğu aşacaksın (Güç).",
  "0-5-7": "İş hayatında geçmişte karar anındaydın (Aşıklar). Şimdi iletişiminle öne çıkıyorsun (Büyücü). Yakında yalnız başına önemli bir projeye imza atacaksın (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "0-5-1": "In the past, you may have been torn between two people or faced a big love decision (The Lovers). Now, your communication and energy captivate your partner (The Magician). Soon, compassion and peace will come to the forefront in your relationship (The Empress).",
  "0-5-2": "You made a passionate decision in your love life’s past (The Lovers). Now, your magnetic energy attracts new love (The Magician). Soon, you'll form a deeply intuitive bond (The High Priestess).",
  "0-5-3": "Your past was a time of exciting and selective love (The Lovers). Now, your charm is at its peak (The Magician). The future brings you peace and abundance (The Empress).",
  "0-5-4": "Your love life’s past was a turning point (The Lovers). Currently, you have strong communication (The Magician). Soon, you will enter a serious and stable partnership (The Emperor).",
  "0-5-5": "There was a decision or dilemma in your love past (The Lovers). Now, you share mutual attraction with your partner (The Magician). The future will once again bring an important love decision (The Lovers).",
  "0-5-6": "Choices were at the forefront in your love past (The Lovers). Now, you fascinate your partner (The Magician). In the future, your relationship will grow stronger through challenges (Strength).",
  "0-5-7": "In the past, you faced a major turning point in your relationship (The Lovers). Now, your words are influential (The Magician). Soon, you may embark on an inner journey in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "0-5-1": "You made an important choice in your career (The Lovers). Now, your communication and skills set you apart (The Magician). Soon, a new and abundant work period will begin (The Empress).",
  "0-5-2": "You came to a crossroads in your career past (The Lovers). Now, you inspire those around you (The Magician). In the future, your intuition will bring a major opportunity (The High Priestess).",
  "0-5-3": "Choices and partnerships stood out in your career past (The Lovers). Now, your energy is high (The Magician). The future brings peace and productivity at work (The Empress).",
  "0-5-4": "A major decision period marked your career past (The Lovers). Currently, you stand out with your strong communication (The Magician). Soon, you may rise to a managerial role (The Emperor).",
  "0-5-5": "You made an important choice at work in the past (The Lovers). Now, you are making your mark (The Magician). The future will once again bring a new work choice (The Lovers).",
  "0-5-6": "Choices are highlighted in your career past (The Lovers). Currently, you are impressive in projects (The Magician). Soon, you’ll overcome a big challenge (Strength).",
  "0-5-7": "You were at a decision point in your career past (The Lovers). Now, you stand out with your communication (The Magician). Soon, you’ll sign an important solo project (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "0-6-1": "Geçmişte ilişkinde fedakarlık ve güç ön plandaydı (Güç). Şu anda enerjin ve iletişiminle sevdiğin kişiyi etkiliyorsun (Büyücü). Yakında ise aşkınız daha da güçlenip sağlamlaşacak (İmparatoriçe).",
  "0-6-2": "Aşk hayatının geçmişinde zorlukları aşmayı başardın (Güç). Şu anda büyüleyici bir çekim var (Büyücü). Gelecekte ise sezgisel bir aşk dönemi başlıyor (Baş Rahibe).",
  "0-6-3": "Geçmişinde ilişkini güçle ve sabırla korudun (Güç). Şimdi çekiciliğin zirvede (Büyücü). Gelecek ise aşkın huzur ve bereketle dolacağı bir zaman (İmparatoriçe).",
  "0-6-4": "Aşk geçmişinde güçlü bir duruş sergiledin (Güç). Şu anda partnerini etkiliyorsun (Büyücü). Gelecekte ilişkinin temelleri daha da sağlamlaşacak (İmparator).",
  "0-6-5": "İlişkinin geçmişi zorluklarla test edildi (Güç). Şu an karşılıklı çekim ve tutku var (Büyücü). Yakında önemli bir aşk kararıyla karşılaşacaksın (Aşıklar).",
  "0-6-6": "Geçmişte aşkında dayanıklılık ve sevgiyle büyüdün (Güç). Şu an partnerinle aranda güçlü bir bağ var (Büyücü). Gelecekte ise ilişkiniz tüm sınavlardan daha da güçlenerek çıkacak (Güç).",
  "0-6-7": "Aşk hayatının geçmişinde güç ve sabır ön plandaydı (Güç). Şu anda iletişimin kuvvetli (Büyücü). Yakında aşkı daha derinden sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "0-6-1": "Kariyerinde zorlukları aşarak güç kazandın (Güç). Şu anda iş ortamında yaratıcılığın öne çıkıyor (Büyücü). Yakında daha üretken ve bereketli bir döneme giriyorsun (İmparatoriçe).",
  "0-6-2": "Geçmişte iş hayatında mücadele ettin (Güç). Şu an çevrende dikkat çekiyorsun (Büyücü). Gelecek ise sezgilerinle büyük bir fırsat getirecek (Baş Rahibe).",
  "0-6-3": "İş hayatında geçmişte güç ve kararlılık öne çıktı (Güç). Şimdi projelerinde başarılısın (Büyücü). Yakında işte bolluk ve huzur seni bekliyor (İmparatoriçe).",
  "0-6-4": "Kariyerinin geçmişi zorluklara karşı dayanıklılıkla geçti (Güç). Şu anda projelerine liderlik ediyorsun (Büyücü). Yakında işte sağlam bir konuma ulaşacaksın (İmparator).",
  "0-6-5": "Kariyerinde geçmişte zorlu tercihler yaptın (Güç). Şu an becerilerinle ön plandasın (Büyücü). Gelecekte önemli bir iş kararı alabilirsin (Aşıklar).",
  "0-6-6": "İş hayatının geçmişinde güçlü bir irade vardı (Güç). Şu an motivasyonun yüksek (Büyücü). Gelecek ise tüm engelleri aşarak daha da güçleneceğin bir dönem (Güç).",
  "0-6-7": "Kariyerinin geçmişinde zorluklara göğüs gerdin (Güç). Şu anda iletişimin kuvvetli (Büyücü). Yakında yalnız çalışarak büyük bir deneyim edineceksin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "0-6-1": "In the past, sacrifice and strength were prominent in your relationship (Strength). Now, your energy and communication affect your loved one (The Magician). Soon, your love will grow even stronger and more solid (The Empress).",
  "0-6-2": "You overcame difficulties in your love life’s past (Strength). Currently, there’s a magical attraction (The Magician). In the future, a period of intuitive love begins (The High Priestess).",
  "0-6-3": "In the past, you protected your relationship with strength and patience (Strength). Now, your charm is at its peak (The Magician). The future brings a period of peace and abundance in love (The Empress).",
  "0-6-4": "You showed a strong stance in your love’s past (Strength). Now, you influence your partner (The Magician). In the future, your relationship will become even more solid (The Emperor).",
  "0-6-5": "Your relationship was tested by challenges in the past (Strength). Currently, there’s mutual attraction and passion (The Magician). Soon, you'll face an important love decision (The Lovers).",
  "0-6-6": "You grew in love through endurance and affection in the past (Strength). Now, there is a strong bond between you and your partner (The Magician). In the future, your relationship will emerge even stronger from every test (Strength).",
  "0-6-7": "Strength and patience were central in your love’s past (Strength). Currently, your communication is strong (The Magician). Soon, you may enter a period of deeper self-reflection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "0-6-1": "You gained strength by overcoming difficulties in your career (Strength). Now, your creativity stands out at work (The Magician). Soon, you will enter a more productive and abundant period (The Empress).",
  "0-6-2": "You struggled in your professional past (Strength). Now, you attract attention (The Magician). The future will bring a big opportunity through your intuition (The High Priestess).",
  "0-6-3": "Strength and determination stood out in your professional past (Strength). Now, you succeed in your projects (The Magician). Soon, abundance and peace await you at work (The Empress).",
  "0-6-4": "Endurance marked your career’s past (Strength). Now, you’re leading your projects (The Magician). Soon, you’ll reach a solid position at work (The Emperor).",
  "0-6-5": "You made tough choices in your career’s past (Strength). Now, you are at the forefront with your skills (The Magician). In the future, you may make a major career decision (The Lovers).",
  "0-6-6": "Strong willpower marked your work life’s past (Strength). Now, you are highly motivated (The Magician). The future brings a time when you'll grow even stronger by overcoming every obstacle (Strength).",
  "0-6-7": "You faced difficulties with resilience in your career’s past (Strength). Now, your communication is strong (The Magician). Soon, you’ll gain great experience working solo (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "0-7-1": "Geçmişte aşk hayatında yalnız kalmayı ya da içe dönmeyi tercih ettin (Ermiş). Şu an iletişimin ve enerjin kuvvetli (Büyücü). Gelecekte ise huzur ve bereket dolu bir ilişki kapıda (İmparatoriçe).",
  "0-7-2": "Aşk geçmişinde içsel bir yolculuğa çıktın (Ermiş). Şu anda büyüleyici bir çekim gücün var (Büyücü). Yakında sezgilerinin yönlendirdiği derin bir aşk ilişkisi yaşayabilirsin (Baş Rahibe).",
  "0-7-3": "Geçmişte aşkı yalnız yaşadın veya kendini keşfettin (Ermiş). Şu an iletişim ve çekim yüksek (Büyücü). Gelecekte huzur ve sevgi dolu bir ilişki seni bekliyor (İmparatoriçe).",
  "0-7-4": "Aşk geçmişinde kendi iç sesini dinledin (Ermiş). Şu an etkileyici sözlerin var (Büyücü). Gelecek ise sağlam ve ciddi bir ilişki vadediyor (İmparator).",
  "0-7-5": "Aşk hayatının geçmişi içsel sorgulamalarla geçti (Ermiş). Şu an partnerini büyülüyorsun (Büyücü). Yakında önemli bir aşk kararı alacaksın (Aşıklar).",
  "0-7-6": "Geçmişte yalnızlığın ve derin düşüncelerin vardı (Ermiş). Şu anda enerjin yüksek (Büyücü). Gelecekte ilişkiniz her sınavdan güçlenerek çıkacak (Güç).",
  "0-7-7": "Aşk geçmişinde içe dönüklük hakimdi (Ermiş). Şu an iletişimin kuvvetli (Büyücü). Yakında aşkı ve hayatı yeniden sorgulayacağın bir dönem olacak (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "0-7-1": "Kariyerinde bir dönem yalnız çalıştın veya kendine odaklandın (Ermiş). Şu anda işte enerjin ve yaratıcılığın ön planda (Büyücü). Yakında daha üretken ve huzurlu bir döneme giriyorsun (İmparatoriçe).",
  "0-7-2": "Geçmişte işte tek başına önemli kararlar aldın (Ermiş). Şu an fark yaratıyorsun (Büyücü). Gelecekte sezgilerinle büyük bir iş fırsatı yakalayacaksın (Baş Rahibe).",
  "0-7-3": "Kariyerinde bir dönem içe kapandın (Ermiş). Şimdi iş ortamında çekiciliğin ve enerjin öne çıkıyor (Büyücü). Gelecekte huzur ve bolluk dönemi başlıyor (İmparatoriçe).",
  "0-7-4": "Geçmişte yalnız çalıştın veya kendi projelerine odaklandın (Ermiş). Şu anda güçlü iletişiminle liderlik yapıyorsun (Büyücü). Yakında yöneticiliğe yükselebilirsin (İmparator).",
  "0-7-5": "İş hayatının geçmişinde içsel sorgulama ve yalnızlık vardı (Ermiş). Şu anda iletişim ve becerilerin ön planda (Büyücü). Gelecek ise yeni bir iş seçimini gündeme getirecek (Aşıklar).",
  "0-7-6": "Kariyerinin geçmişinde yalnızlık ve tecrübe kazanımı vardı (Ermiş). Şu anda projelerinde çok başarılısın (Büyücü). Yakında büyük zorluklara rağmen daha da güçleneceksin (Güç).",
  "0-7-7": "Geçmişte işte içe dönük bir dönem yaşadın (Ermiş). Şu an enerjin ve iletişimin kuvvetli (Büyücü). Gelecekte tek başına büyük bir sorumluluk üstleneceksin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "0-7-1": "In the past, you preferred solitude or introspection in love (The Hermit). Now, your energy and communication are strong (The Magician). The future holds a relationship full of peace and abundance (The Empress).",
  "0-7-2": "You went on an inner journey in your love’s past (The Hermit). Now, your attraction is magnetic (The Magician). Soon, you'll experience a deep love guided by intuition (The High Priestess).",
  "0-7-3": "You lived or discovered love alone in the past (The Hermit). Now, there’s strong communication and attraction (The Magician). The future promises a relationship full of peace and affection (The Empress).",
  "0-7-4": "You listened to your inner voice in love’s past (The Hermit). Now, your words are impactful (The Magician). The future offers a stable and serious relationship (The Emperor).",
  "0-7-5": "Your love life’s past was spent in introspection (The Hermit). Now, you fascinate your partner (The Magician). Soon, you’ll make an important love decision (The Lovers).",
  "0-7-6": "Solitude and deep thoughts marked your love’s past (The Hermit). Now, your energy is high (The Magician). In the future, your relationship will emerge stronger from every test (Strength).",
  "0-7-7": "Introversion was dominant in your love’s past (The Hermit). Now, your communication is strong (The Magician). Soon, there’ll be a new phase of questioning love and life (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "0-7-1": "There was a period you worked alone or focused on yourself in your career (The Hermit). Now, your creativity and energy stand out at work (The Magician). Soon, you’ll enter a more productive and peaceful period (The Empress).",
  "0-7-2": "You made important decisions alone at work in the past (The Hermit). Now, you stand out (The Magician). In the future, intuition will bring a major business opportunity (The High Priestess).",
  "0-7-3": "There was a period of withdrawal in your career’s past (The Hermit). Now, your charm and energy are prominent at work (The Magician). The future brings a period of peace and abundance (The Empress).",
  "0-7-4": "You worked alone or focused on your own projects in the past (The Hermit). Now, you’re leading with strong communication (The Magician). Soon, you may rise to a managerial position (The Emperor).",
  "0-7-5": "Introspection and solitude marked your work history (The Hermit). Now, communication and skills are at the forefront (The Magician). The future will bring a new business choice (The Lovers).",
  "0-7-6": "There was solitude and experience-gaining in your career’s past (The Hermit). Now, you’re very successful in projects (The Magician). Soon, you'll grow stronger despite big challenges (Strength).",
  "0-7-7": "You lived an introverted period at work in the past (The Hermit). Now, your energy and communication are strong (The Magician). In the future, you’ll take on a major responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-0-2": "Geçmişte özgür ve cesur bir aşk deneyimi yaşadın (Aptal). Şu anda karşındaki kişi üzerinde büyüleyici bir etkin var (Büyücü). Gelecekte ise ilişkinde gizli duyguların ortaya çıkması ve sezgilerinin güçlenmesi bekleniyor (Baş Rahibe).",
  "1-0-3": "Aşk hayatının geçmişinde macera ve heyecan hakimdi (Aptal). Şu an büyülü bir çekim ve enerjiyle ilişkin canlanıyor (Büyücü). Yakında huzurlu ve şefkatli bir aşk süreci başlıyor (İmparatoriçe).",
  "1-0-4": "Geçmişte aşk adına risk alıp yeni adımlar attın (Aptal). Şu anda karşındakini etkiliyorsun (Büyücü). Gelecekte ilişkinde sağlamlık ve kararlılık dönemi başlıyor (İmparator).",
  "1-0-5": "Aşk geçmişinde cesaret ve yeni başlangıçlar vardı (Aptal). Şu an büyüleyici bir iletişim içindesin (Büyücü). Yakında büyük bir aşk kararı veya seçim seni bekliyor (Aşıklar).",
  "1-0-6": "Geçmişte ilişkinde özgürlüğün tadını çıkardın (Aptal). Şu an enerjinle partnerine güç veriyorsun (Büyücü). Gelecekte ise ilişkiniz tüm zorlukları birlikte aşacak (Güç).",
  "1-0-7": "Aşk hayatında geçmişte yeni maceralara açıktın (Aptal). Şu an iletişim ve çekiciliğin ön planda (Büyücü). Yakında iç dünyana döneceğin, aşkı sorgulayacağın bir süreç olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-0-2": "Geçmişte kariyerinde risk alarak yenilikçi adımlar attın (Aptal). Şu anda beceri ve zekânla çevrene ilham oluyorsun (Büyücü). Yakında sezgilerinle büyük bir fırsat yakalayabilirsin (Baş Rahibe).",
  "1-0-3": "Kariyerinin geçmişinde yenilik ve özgürlük vardı (Aptal). Şu anda iş ortamında yıldızın parlıyor (Büyücü). Gelecekte üretkenlik ve bolluk seni bekliyor (İmparatoriçe).",
  "1-0-4": "Kariyerinde risk aldığın ve yeni yollar denediğin bir dönem vardı (Aptal). Şu an etkili iletişiminle fark yaratıyorsun (Büyücü). Yakında yönetici pozisyonuna yükselebilirsin (İmparator).",
  "1-0-5": "Geçmişte kariyerinde macera ve yeni fırsatlar ön plandaydı (Aptal). Şu an iletişim ve karizman sayesinde projelerde öne çıkıyorsun (Büyücü). Gelecek ise önemli bir iş seçimini gündeme getirecek (Aşıklar).",
  "1-0-6": "Kariyer geçmişinde risk ve cesaretle hareket ettin (Aptal). Şu anda projelerinde başarıya odaklısın (Büyücü). Yakında tüm engelleri aşarak daha da güçleneceksin (Güç).",
  "1-0-7": "İş hayatında yenilikçi ve cesur bir geçmişin var (Aptal). Şu anda iletişimin kuvvetli (Büyücü). Yakında kendi içine dönüp, büyük bir bilgi ve tecrübe kazanacaksın (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-0-2": "In the past, you had a bold and free love experience (The Fool). Now, you have a magical effect on your partner (The Magician). Soon, hidden feelings will come to light and your intuition in the relationship will be strengthened (The High Priestess).",
  "1-0-3": "Adventure and excitement defined your love’s past (The Fool). Now, your relationship is revived with magical attraction and energy (The Magician). Soon, a peaceful and caring love period begins (The Empress).",
  "1-0-4": "In the past, you took risks for love and made new moves (The Fool). Now, you influence your partner (The Magician). The future brings a phase of stability and determination (The Emperor).",
  "1-0-5": "Courage and new beginnings were present in your love past (The Fool). Now, there is enchanting communication (The Magician). Soon, a major love decision or choice awaits (The Lovers).",
  "1-0-6": "You enjoyed freedom in your relationship’s past (The Fool). Now, your energy gives strength to your beloved (The Magician). In the future, you will overcome all difficulties together (Strength).",
  "1-0-7": "In the past, you were open to new adventures in love (The Fool). Now, communication and attraction are at the forefront (The Magician). Soon, you may turn inward and question love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-0-2": "In the past, you took risks and made innovative steps in your career (The Fool). Now, your skills and intelligence inspire those around you (The Magician). Soon, your intuition will bring a big opportunity (The High Priestess).",
  "1-0-3": "Innovation and freedom stood out in your professional past (The Fool). Now, your star shines at work (The Magician). The future promises productivity and abundance (The Empress).",
  "1-0-4": "You took risks and tried new paths in your career past (The Fool). Now, you make a difference with your communication (The Magician). Soon, you may rise to a managerial position (The Emperor).",
  "1-0-5": "Adventure and new opportunities marked your career past (The Fool). Now, your communication and charisma make you stand out in projects (The Magician). The future will bring an important work choice (The Lovers).",
  "1-0-6": "You acted with risk and courage in your professional past (The Fool). Now, you are focused on success in your projects (The Magician). Soon, you will overcome all obstacles and become stronger (Strength).",
  "1-0-7": "Your career past is innovative and courageous (The Fool). Now, your communication is strong (The Magician). Soon, you will turn inward and gain significant knowledge and experience (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-2-0": "Geçmişte iç sesini dinledin, duygularını gizledin (Baş Rahibe). Şu an büyülü bir çekim içindesin (Büyücü). Yakında aşk hayatında yeni ve cesur bir başlangıç yapacaksın (Aptal).",
  "1-2-3": "Geçmişte sezgilerinle hareket ettin (Baş Rahibe). Şu anda iletişimin ve çekiciliğin yüksek (Büyücü). Gelecek ise huzur ve şefkat dolu bir ilişkiyi müjdeliyor (İmparatoriçe).",
  "1-2-4": "Aşk geçmişinde içsel keşifler öne çıkıyor (Baş Rahibe). Şu an karşındaki kişi üzerinde büyüleyici bir etki bırakıyorsun (Büyücü). Gelecekte ise ilişkinde sağlamlık ve kararlılık öne çıkacak (İmparator).",
  "1-2-5": "Geçmişte gizli duygular, tutkulu anlar yaşadın (Baş Rahibe). Şu an enerjinle partnerini büyülüyorsun (Büyücü). Yakında büyük bir aşk kararı vermen gerekebilir (Aşıklar).",
  "1-2-6": "Aşk hayatının geçmişinde derin hisler ve sezgiler ön plandaydı (Baş Rahibe). Şu an iletişimle aşkın güçleniyor (Büyücü). Gelecekte ilişkiniz dayanıklılık ve sevgiyle daha da güçlenecek (Güç).",
  "1-2-7": "Geçmişinde iç dünyana döndüğün bir aşk dönemi vardı (Baş Rahibe). Şu anda çekiciliğinle ön plandasın (Büyücü). Yakında aşkta derin bir sorgulama ve yalnızlık hissi yaşayabilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-2-0": "Kariyerinde geçmişte sezgilerine güvenerek önemli adımlar attın (Baş Rahibe). Şu an çevreni etkileyen bir enerjin var (Büyücü). Yakında iş hayatında cesur ve yenilikçi bir yol seni bekliyor (Aptal).",
  "1-2-3": "Geçmişte işte perde arkasında olup biteni fark ettin (Baş Rahibe). Şu an iletişimin kuvvetli (Büyücü). Gelecek ise verimli ve huzurlu bir dönemi işaret ediyor (İmparatoriçe).",
  "1-2-4": "Kariyer geçmişinde içsel analizler ve gözlemler öne çıktı (Baş Rahibe). Şu an etkileyici iletişiminle fark yaratıyorsun (Büyücü). Yakında liderlik ve otorite rolü üstleneceksin (İmparator).",
  "1-2-5": "İş hayatının geçmişinde gizli fırsatları sezerek ilerledin (Baş Rahibe). Şu an projelerde aktif rol alıyorsun (Büyücü). Gelecek ise önemli bir iş tercihini gündeme getiriyor (Aşıklar).",
  "1-2-6": "Kariyerinin geçmişinde sezgilerin ve dikkatli gözlemlerin vardı (Baş Rahibe). Şu an iş ortamında yaratıcılığın ön planda (Büyücü). Gelecek ise dayanıklılık ve güç kazanacağın bir dönem (Güç).",
  "1-2-7": "Geçmişte iş hayatında perde arkasında önemli işler yaptın (Baş Rahibe). Şu anda projelerde fark yaratıyorsun (Büyücü). Yakında yalnız başına büyük bir sorumluluk üstleneceksin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-2-0": "In the past, you listened to your inner voice and hid your feelings (The High Priestess). Now, you are in a state of magical attraction (The Magician). Soon, you'll make a bold and new beginning in your love life (The Fool).",
  "1-2-3": "You acted with intuition in the past (The High Priestess). Now, your communication and charm are high (The Magician). The future promises a relationship full of peace and compassion (The Empress).",
  "1-2-4": "Your love past was marked by inner discoveries (The High Priestess). Now, you leave a magical impression on your partner (The Magician). The future will bring stability and determination in your relationship (The Emperor).",
  "1-2-5": "Hidden feelings and passionate moments defined your love past (The High Priestess). Now, your energy fascinates your partner (The Magician). Soon, you may face a major love decision (The Lovers).",
  "1-2-6": "Deep feelings and intuition were prominent in your love life’s past (The High Priestess). Now, your relationship is strengthened through communication (The Magician). The future will make your relationship even stronger through endurance and love (Strength).",
  "1-2-7": "You had a period of turning inward in love in the past (The High Priestess). Now, you stand out with your charm (The Magician). Soon, you may experience deep reflection and solitude in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-2-0": "You took important steps by trusting your intuition in your career’s past (The High Priestess). Now, you have an influential energy (The Magician). Soon, a bold and innovative path awaits in business (The Fool).",
  "1-2-3": "You saw what was happening behind the scenes at work in the past (The High Priestess). Now, your communication is strong (The Magician). The future signals a productive and peaceful time at work (The Empress).",
  "1-2-4": "Inner analysis and observations stood out in your career past (The High Priestess). Now, you make a difference with your communication (The Magician). Soon, you'll assume a leadership and authority role (The Emperor).",
  "1-2-5": "You advanced by sensing hidden opportunities in your professional past (The High Priestess). Now, you play an active role in projects (The Magician). The future brings an important business choice (The Lovers).",
  "1-2-6": "Your career past was marked by intuition and careful observation (The High Priestess). Now, your creativity is prominent at work (The Magician). The future will bring a period of endurance and gaining strength (Strength).",
  "1-2-7": "You did important behind-the-scenes work in the past (The High Priestess). Now, you make a difference in projects (The Magician). Soon, you'll take on a big responsibility solo (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-3-0": "Geçmişte huzur ve şefkat dolu bir ilişki yaşadın (İmparatoriçe). Şu an büyülü bir iletişim içindesin (Büyücü). Gelecek ise sana yepyeni bir aşk macerası getiriyor (Aptal).",
  "1-3-2": "Aşk hayatının geçmişinde sevgi ve bolluk ön plandaydı (İmparatoriçe). Şu an partnerin üzerinde büyüleyici bir etkin var (Büyücü). Yakında derin bir duygusallık ve sezgisel bir aşk dönemi başlıyor (Baş Rahibe).",
  "1-3-4": "Geçmişinde şefkat ve üretkenlik ön plandaydı (İmparatoriçe). Şu an etkileyici sözlerinle aşkını güçlendiriyorsun (Büyücü). Gelecekte ise ilişkinde ciddi ve sağlam adımlar atacaksın (İmparator).",
  "1-3-5": "Aşk geçmişin huzur ve paylaşım doluydu (İmparatoriçe). Şu anda karşılıklı büyü ve çekim yaşıyorsun (Büyücü). Yakında büyük bir aşk kararı vermen gerekebilir (Aşıklar).",
  "1-3-6": "Geçmişte ilişkini sevgiyle besledin (İmparatoriçe). Şu anda enerjin yüksek (Büyücü). Gelecek ise birlikte güçleneceğiniz, her türlü sınavı aşacağınız bir dönem olacak (Güç).",
  "1-3-7": "Aşk hayatının geçmişinde huzur ve verimlilik vardı (İmparatoriçe). Şu an iletişimin ve enerjinle öne çıkıyorsun (Büyücü). Yakında yalnız kalıp aşkı sorgulayacağın bir süreç başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-3-0": "Kariyerinin geçmişi verimlilik ve ekip çalışmasıyla doluydu (İmparatoriçe). Şu anda iletişim gücünle iş ortamında parlıyorsun (Büyücü). Yakında iş hayatında cesur ve yenilikçi bir adım atacaksın (Aptal).",
  "1-3-2": "Geçmişte işte bolluk ve huzur hakimdi (İmparatoriçe). Şu anda yaratıcılığın ön planda (Büyücü). Gelecek ise sezgilerinle fark yaratacağın bir dönem (Baş Rahibe).",
  "1-3-4": "Kariyerinde ekip çalışması ve verimlilik öne çıktı (İmparatoriçe). Şu an iş ortamında etkileyicisin (Büyücü). Yakında yönetici ya da lider rolüne geçebilirsin (İmparator).",
  "1-3-5": "Geçmişte işte uyum ve bereket vardı (İmparatoriçe). Şu anda projelerde fark yaratıyorsun (Büyücü). Gelecekte önemli bir iş tercihi gündeme gelecek (Aşıklar).",
  "1-3-6": "Kariyer geçmişin üretken ve huzurluydu (İmparatoriçe). Şu an projelerde enerjin yüksek (Büyücü). Gelecek ise tüm engelleri aşarak güçleneceğin bir dönem (Güç).",
  "1-3-7": "İş hayatında geçmişte huzur ve paylaşım ön plandaydı (İmparatoriçe). Şu anda projelerde dikkat çekiyorsun (Büyücü). Yakında yalnız çalışarak önemli bir başarı elde edeceksin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-3-0": "You experienced a relationship full of peace and compassion in the past (The Empress). Now, you are in magical communication (The Magician). The future brings you a brand new love adventure (The Fool).",
  "1-3-2": "Love and abundance dominated your love life’s past (The Empress). Now, you have a magical influence on your partner (The Magician). Soon, a period of deep emotion and intuitive love begins (The High Priestess).",
  "1-3-4": "Compassion and productivity were at the forefront in your love past (The Empress). Now, you strengthen your love with impactful words (The Magician). In the future, you will take serious and solid steps in your relationship (The Emperor).",
  "1-3-5": "Your love history was full of peace and sharing (The Empress). Currently, there’s mutual magic and attraction (The Magician). Soon, you may have to make a major love decision (The Lovers).",
  "1-3-6": "You nurtured your relationship with love in the past (The Empress). Now, your energy is high (The Magician). The future brings a time when you’ll grow together and overcome all tests (Strength).",
  "1-3-7": "Peace and productivity stood out in your love’s past (The Empress). Now, you stand out with your communication and energy (The Magician). Soon, you may enter a period of solitude and reflection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-3-0": "Your career past was full of productivity and teamwork (The Empress). Now, your communication skills make you shine at work (The Magician). Soon, you’ll take a bold and innovative step in your business life (The Fool).",
  "1-3-2": "There was abundance and peace at work in the past (The Empress). Now, your creativity is prominent (The Magician). The future brings a period where you’ll stand out with your intuition (The High Priestess).",
  "1-3-4": "Teamwork and productivity stood out in your career past (The Empress). Now, you are impressive in the workplace (The Magician). Soon, you may take on a manager or leader role (The Emperor).",
  "1-3-5": "There was harmony and abundance at work in the past (The Empress). Now, you make a difference in projects (The Magician). The future brings an important work choice (The Lovers).",
  "1-3-6": "Your work past was productive and peaceful (The Empress). Now, your energy in projects is high (The Magician). The future brings a period of overcoming all obstacles and becoming stronger (Strength).",
  "1-3-7": "Peace and sharing were at the forefront of your work life in the past (The Empress). Now, you stand out in projects (The Magician). Soon, you’ll achieve major success by working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-4-0": "Geçmişte ilişkinde ciddi ve kararlı bir tavır sergiledin (İmparator). Şu anda büyülü bir iletişim içindesin (Büyücü). Gelecek ise yepyeni bir aşk yolculuğu vadediyor (Aptal).",
  "1-4-2": "Aşk geçmişinde liderlik ve sağlamlık ön plandaydı (İmparator). Şu anda partnerini etkiliyorsun (Büyücü). Yakında sezgisel bir bağ ve duygusal bir aşk dönemi başlıyor (Baş Rahibe).",
  "1-4-3": "İlişkinin geçmişinde otorite ve güven hakimdi (İmparator). Şu an iletişim ve çekim ön planda (Büyücü). Gelecekte ise huzur ve şefkat dolu bir aşk yaşanacak (İmparatoriçe).",
  "1-4-5": "Geçmişte aşkında ciddi bir karar dönemi yaşadın (İmparator). Şu anda büyüleyici bir çekim içindesin (Büyücü). Yakında aşk hayatında büyük bir seçim yapacaksın (Aşıklar).",
  "1-4-6": "Aşk hayatının geçmişi güç ve disiplinle şekillendi (İmparator). Şu anda enerjin yüksek (Büyücü). Gelecek ise ilişkinizde tüm sınavları aşarak daha da güçleneceğiniz bir dönem (Güç).",
  "1-4-7": "Geçmişte ilişkinde sorumluluklar üstlendin (İmparator). Şu anda iletişimin kuvvetli (Büyücü). Yakında aşkı ve hayatı daha derinden sorgulayacağın bir süreç olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-4-0": "Kariyerinin geçmişinde disiplin ve otorite ön plandaydı (İmparator). Şu an iş ortamında yaratıcılığınla fark yaratıyorsun (Büyücü). Yakında cesur bir iş adımı atabilirsin (Aptal).",
  "1-4-2": "İş hayatının geçmişinde liderlik vardı (İmparator). Şu an çevrende ilham veriyorsun (Büyücü). Gelecek ise sezgilerinle büyük bir iş fırsatı getiriyor (Baş Rahibe).",
  "1-4-3": "Kariyerinin geçmişinde düzen ve güven öne çıktı (İmparator). Şu anda projelerde etkin rol alıyorsun (Büyücü). Yakında üretken ve bereketli bir dönem başlıyor (İmparatoriçe).",
  "1-4-5": "Geçmişte kariyerinde ciddi kararlar aldın (İmparator). Şu anda projelerde fark yaratıyorsun (Büyücü). Gelecekte önemli bir iş tercihi gündeme gelebilir (Aşıklar).",
  "1-4-6": "Kariyerinin geçmişi güç ve kararlılıkla şekillendi (İmparator). Şu anda projelerde enerjin yüksek (Büyücü). Gelecekte tüm engelleri aşarak güç kazanacaksın (Güç).",
  "1-4-7": "Kariyerinin geçmişinde otorite ve disiplin vardı (İmparator). Şu anda projelerde öne çıkıyorsun (Büyücü). Yakında yalnız çalışacağın önemli bir süreç seni bekliyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-4-0": "In the past, you displayed a serious and determined attitude in your relationship (The Emperor). Now, you are in magical communication (The Magician). The future promises a brand new journey in love (The Fool).",
  "1-4-2": "Leadership and stability were at the forefront of your love's past (The Emperor). Now, you influence your partner (The Magician). Soon, a period of intuitive connection and emotional love begins (The High Priestess).",
  "1-4-3": "Authority and trust marked your relationship's past (The Emperor). Now, communication and attraction are prominent (The Magician). The future promises a relationship full of peace and compassion (The Empress).",
  "1-4-5": "In the past, you had a time of serious decisions in love (The Emperor). Now, you are in a state of magical attraction (The Magician). Soon, you will make a big decision in your love life (The Lovers).",
  "1-4-6": "Your love life was shaped by strength and discipline in the past (The Emperor). Now, your energy is high (The Magician). The future brings a time where you will overcome every test and become even stronger together (Strength).",
  "1-4-7": "You took on responsibilities in your relationship's past (The Emperor). Now, your communication is strong (The Magician). Soon, there may be a period of deeper introspection about love and life (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-4-0": "Discipline and authority stood out in your career past (The Emperor). Now, your creativity makes you stand out at work (The Magician). Soon, you may take a bold career step (The Fool).",
  "1-4-2": "There was leadership in your professional past (The Emperor). Now, you inspire those around you (The Magician). The future will bring a major work opportunity through intuition (The High Priestess).",
  "1-4-3": "Order and security stood out in your career's past (The Emperor). Now, you play an active role in projects (The Magician). Soon, a productive and abundant period begins (The Empress).",
  "1-4-5": "You made serious decisions in your career past (The Emperor). Now, you make a difference in projects (The Magician). In the future, an important work choice may arise (The Lovers).",
  "1-4-6": "Your career past was shaped by strength and determination (The Emperor). Now, your energy in projects is high (The Magician). The future brings a time when you will overcome every obstacle and gain strength (Strength).",
  "1-4-7": "Authority and discipline were prominent in your career past (The Emperor). Now, you stand out in projects (The Magician). Soon, you'll face an important solo period (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-5-0": "Geçmişte büyük bir aşk kararı ya da duygusal bir ikilem yaşadın (Aşıklar). Şu an partnerin üzerinde büyüleyici bir etkin var (Büyücü). Gelecek ise seni bambaşka ve cesur bir aşk macerasına sürüklüyor (Aptal).",
  "1-5-2": "Aşk hayatının geçmişinde önemli bir seçim yaptın (Aşıklar). Şu anda enerjin ve iletişimin yüksek (Büyücü). Yakında sezgilerinle yönlendireceğin özel bir aşk ilişkisi başlayabilir (Baş Rahibe).",
  "1-5-3": "Geçmişinde bir aşk ikilemi ya da önemli bir karar vardı (Aşıklar). Şu an çekiciliğinle partnerini etkiliyorsun (Büyücü). Gelecek ise huzur ve paylaşım dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "1-5-4": "Aşk hayatının geçmişi bir seçimle değişti (Aşıklar). Şu an büyülü bir iletişim içindesin (Büyücü). Gelecek ise ilişkinde ciddi ve sağlam adımlar atılacağına işaret ediyor (İmparator).",
  "1-5-6": "Aşk geçmişinde ikilemler ve kararlar ön plandaydı (Aşıklar). Şu an partnerini büyülüyorsun (Büyücü). Gelecekte ilişkiniz güçlenerek sınavlardan başarıyla çıkacak (Güç).",
  "1-5-7": "Geçmişte önemli bir aşk seçimiyle karşılaştın (Aşıklar). Şu anda iletişim gücün yüksek (Büyücü). Yakında içsel bir sorgulama ve yalnızlık dönemi başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-5-0": "Kariyerinin geçmişinde önemli bir seçim vardı (Aşıklar). Şu anda projelerde ve iletişimde ön plandasın (Büyücü). Yakında iş hayatında cesur bir başlangıç yapabilirsin (Aptal).",
  "1-5-2": "İş geçmişinde büyük bir karar aldın (Aşıklar). Şu an farkını ortaya koyuyorsun (Büyücü). Gelecekte ise sezgilerinle yönlendireceğin önemli bir fırsat var (Baş Rahibe).",
  "1-5-3": "Kariyerinin geçmişi seçimler ve işbirlikleriyle şekillendi (Aşıklar). Şu an yaratıcılığın ön planda (Büyücü). Gelecek ise bereket ve paylaşım dolu bir dönemi müjdeliyor (İmparatoriçe).",
  "1-5-4": "Geçmişte kariyerinde büyük bir karar verdin (Aşıklar). Şu an projelerde etkileyicisin (Büyücü). Gelecekte yönetici veya liderlik rolüne geçebilirsin (İmparator).",
  "1-5-6": "Kariyer geçmişinde önemli seçimler yaptın (Aşıklar). Şu anda fark yaratıyorsun (Büyücü). Gelecek ise tüm zorlukları aşarak güç kazanacağın bir dönem (Güç).",
  "1-5-7": "İş hayatının geçmişinde karar anları öne çıktı (Aşıklar). Şu an projelerde parlıyorsun (Büyücü). Yakında yalnız çalışacağın büyük bir süreç seni bekliyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-5-0": "In the past, you faced a major love decision or emotional dilemma (The Lovers). Now, you have a magical influence on your partner (The Magician). The future leads you to a bold, brand new love adventure (The Fool).",
  "1-5-2": "You made an important choice in your love life’s past (The Lovers). Now, your energy and communication are high (The Magician). Soon, a special love relationship guided by your intuition may begin (The High Priestess).",
  "1-5-3": "A love dilemma or major decision defined your love’s past (The Lovers). Now, your charm influences your partner (The Magician). The future brings a relationship full of peace and sharing (The Empress).",
  "1-5-4": "Your love life’s past changed with a choice (The Lovers). Now, you are in magical communication (The Magician). The future signals serious and solid steps in your relationship (The Emperor).",
  "1-5-6": "Dilemmas and decisions were at the forefront in your love past (The Lovers). Now, you fascinate your partner (The Magician). The future brings a relationship that will become stronger through every test (Strength).",
  "1-5-7": "You faced a major love choice in the past (The Lovers). Now, your communication is strong (The Magician). Soon, a period of introspection and solitude may begin (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-5-0": "There was an important choice in your career past (The Lovers). Now, you are at the forefront in projects and communication (The Magician). Soon, you may make a bold new start in business (The Fool).",
  "1-5-2": "You made a major decision at work in the past (The Lovers). Now, you make your mark (The Magician). The future brings an important opportunity guided by your intuition (The High Priestess).",
  "1-5-3": "Choices and partnerships shaped your career past (The Lovers). Now, your creativity is prominent (The Magician). The future promises a period full of abundance and sharing (The Empress).",
  "1-5-4": "You made a major decision in your career past (The Lovers). Now, you stand out in projects (The Magician). Soon, you may transition into a leadership or manager role (The Emperor).",
  "1-5-6": "You made significant choices in your professional past (The Lovers). Now, you make a difference (The Magician). The future brings a time where you’ll gain strength by overcoming all challenges (Strength).",
  "1-5-7": "Turning points marked your career past (The Lovers). Now, you shine in projects (The Magician). Soon, a major solo period awaits you (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-6-0": "Geçmişte ilişkinde sabır, güç ve fedakarlık ön plandaydı (Güç). Şu anda partnerin üzerinde büyüleyici bir etkin var (Büyücü). Gelecek ise sana yeni ve cesur bir aşk hikayesi getiriyor (Aptal).",
  "1-6-2": "Aşk hayatının geçmişinde zorlukları aşmayı başardın (Güç). Şu anda enerjin ve iletişimin yüksek (Büyücü). Yakında derin bir aşk ve sezgisel bir bağ yaşayabilirsin (Baş Rahibe).",
  "1-6-3": "İlişkinde geçmişte güç ve dayanıklılık hakimdi (Güç). Şu an büyülü bir çekim içindesin (Büyücü). Gelecekte huzur ve bereket seni bekliyor (İmparatoriçe).",
  "1-6-4": "Geçmişte ilişkin zorluklara rağmen ayakta kaldı (Güç). Şu anda iletişimde güçlüsün (Büyücü). Gelecek ise ciddi ve sağlam bir birlikteliğe işaret ediyor (İmparator).",
  "1-6-5": "Aşk hayatında geçmişte zorlukların üstesinden geldin (Güç). Şu an çekiciliğinle partnerini büyülüyorsun (Büyücü). Yakında önemli bir aşk kararı alabilirsin (Aşıklar).",
  "1-6-7": "İlişkinde geçmişte güç ve sabır vardı (Güç). Şu anda iletişimin kuvvetli (Büyücü). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-6-0": "Kariyerinde geçmişte zorlukları sabır ve güçle aştın (Güç). Şu anda projelerde ve iletişimde öne çıkıyorsun (Büyücü). Yakında cesur bir iş başlangıcı yapabilirsin (Aptal).",
  "1-6-2": "Geçmişte iş hayatında mücadele ve güç ön plandaydı (Güç). Şu an yaratıcılığınla fark yaratıyorsun (Büyücü). Gelecek ise sezgilerinle fark yaratacağın bir dönem (Baş Rahibe).",
  "1-6-3": "Kariyerinin geçmişinde güçlü bir duruş sergiledin (Güç). Şu an enerjin yüksek (Büyücü). Yakında üretken ve huzurlu bir iş dönemi başlıyor (İmparatoriçe).",
  "1-6-4": "Geçmişte işte mücadeleciydin (Güç). Şu anda projelerde liderliğin ön planda (Büyücü). Gelecek ise yeni bir yönetici veya otorite rolünü getiriyor (İmparator).",
  "1-6-5": "Kariyer geçmişinde zorlukları aştın (Güç). Şu anda projelerde fark yaratıyorsun (Büyücü). Gelecekte önemli bir iş kararı verebilirsin (Aşıklar).",
  "1-6-7": "İş hayatında geçmişte dirençliydin (Güç). Şu anda projelerde öne çıkıyorsun (Büyücü). Yakında yalnız çalışacağın, büyük bir sorumluluk alacağın bir dönem geliyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-6-0": "In the past, patience, strength, and sacrifice stood out in your relationship (Strength). Now, you have a magical effect on your partner (The Magician). The future brings you a brand new and bold love story (The Fool).",
  "1-6-2": "You overcame difficulties in your love life’s past (Strength). Now, your energy and communication are high (The Magician). Soon, you may experience deep love and an intuitive bond (The High Priestess).",
  "1-6-3": "Strength and resilience dominated your relationship's past (Strength). Now, you are in magical attraction (The Magician). The future brings peace and abundance (The Empress).",
  "1-6-4": "Despite challenges, your relationship survived in the past (Strength). Now, you are strong in communication (The Magician). The future points to a serious and stable union (The Emperor).",
  "1-6-5": "You overcame challenges in your love life’s past (Strength). Now, your charm fascinates your partner (The Magician). Soon, you may make an important love decision (The Lovers).",
  "1-6-7": "Strength and patience marked your love past (Strength). Now, your communication is strong (The Magician). Soon, you may go through a period of solitude and reflection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-6-0": "In your career’s past, you overcame difficulties with patience and strength (Strength). Now, you stand out in projects and communication (The Magician). Soon, you may make a bold new business start (The Fool).",
  "1-6-2": "Struggle and strength stood out in your professional past (Strength). Now, you make a difference with your creativity (The Magician). The future brings a period where your intuition will make a difference (The High Priestess).",
  "1-6-3": "You showed strength in your career past (Strength). Now, your energy is high (The Magician). Soon, a productive and peaceful work period begins (The Empress).",
  "1-6-4": "You were combative in your professional past (Strength). Now, your leadership in projects is at the forefront (The Magician). The future brings a new managerial or authority role (The Emperor).",
  "1-6-5": "You overcame difficulties in your career past (Strength). Now, you make a difference in projects (The Magician). Soon, you may make an important work decision (The Lovers).",
  "1-6-7": "You were resilient in your work history (Strength). Now, you stand out in projects (The Magician). Soon, you will work solo and take on great responsibility (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "1-7-0": "Geçmişte aşk hayatında yalnız kalmayı seçtin ya da iç dünyana döndün (Ermiş). Şu anda büyüleyici bir çekim içindesin (Büyücü). Gelecek ise bambaşka, cesur bir aşk hikayesini vadediyor (Aptal).",
  "1-7-2": "Aşk geçmişinde içsel sorgulamalar ve yalnızlık vardı (Ermiş). Şu an enerjin ve iletişimin yüksek (Büyücü). Yakında sezgisel ve derin bir aşk bağı kurabilirsin (Baş Rahibe).",
  "1-7-3": "Geçmişte ilişkinde yalnızlık veya içsel keşif ön plandaydı (Ermiş). Şu an büyülü bir iletişim ve çekim var (Büyücü). Gelecek ise huzur ve bereket getiriyor (İmparatoriçe).",
  "1-7-4": "Aşk hayatının geçmişinde içe dönüklük hakimdi (Ermiş). Şu anda partnerine büyüleyici bir enerjiyle yaklaşıyorsun (Büyücü). Gelecek ise ciddi ve sağlam bir birlikteliğe işaret ediyor (İmparator).",
  "1-7-5": "Geçmişte aşkı sorguladın, yalnız kaldın (Ermiş). Şu an çekiciliğinle partnerini büyülüyorsun (Büyücü). Yakında önemli bir aşk kararı seni bekliyor (Aşıklar).",
  "1-7-6": "Aşk hayatının geçmişi içsel bir yolculuk ve yalnızlıkla şekillendi (Ermiş). Şu an iletişimin kuvvetli (Büyücü). Gelecek ise ilişkinizin tüm sınavlardan güçlenerek çıkacağı bir dönem (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "1-7-0": "Kariyerinin geçmişinde yalnız çalışmak ya da içe dönmek vardı (Ermiş). Şu anda projelerde ve iletişimde ön plandasın (Büyücü). Yakında cesur ve yenilikçi bir iş adımı atabilirsin (Aptal).",
  "1-7-2": "İş geçmişinde yalnızlık ve içsel analizler öne çıktı (Ermiş). Şu anda yaratıcılığınla fark yaratıyorsun (Büyücü). Gelecek ise sezgilerinle büyük bir fırsat yakalayacaksın (Baş Rahibe).",
  "1-7-3": "Kariyer geçmişinde yalnızlık ya da kendi projelerine odaklanma vardı (Ermiş). Şu anda iş ortamında enerjin yüksek (Büyücü). Gelecekte üretken ve huzurlu bir dönem başlıyor (İmparatoriçe).",
  "1-7-4": "İş hayatının geçmişinde tek başına ilerlemek vardı (Ermiş). Şu anda projelerde etkileyici bir liderliğin var (Büyücü). Gelecekte önemli bir yönetici veya liderlik rolüne geçebilirsin (İmparator).",
  "1-7-5": "Geçmişte işte yalnız ve sorgulayıcıydın (Ermiş). Şu anda projelerde fark yaratıyorsun (Büyücü). Gelecek ise önemli bir iş tercihini işaret ediyor (Aşıklar).",
  "1-7-6": "Kariyerinin geçmişinde içsel yolculuk ve yalnızlık vardı (Ermiş). Şu anda projelerde enerjin yüksek (Büyücü). Gelecekte tüm zorlukları aşarak güç kazanacağın bir dönem geliyor (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "1-7-0": "In the past, you chose solitude or turned inward in love (The Hermit). Now, you are in a state of magical attraction (The Magician). The future promises a brand new and bold love story (The Fool).",
  "1-7-2": "Your love past involved introspection and solitude (The Hermit). Now, your energy and communication are high (The Magician). Soon, you may form a deep and intuitive love bond (The High Priestess).",
  "1-7-3": "Solitude or inner discovery was at the forefront of your love’s past (The Hermit). Now, there’s magical communication and attraction (The Magician). The future brings peace and abundance (The Empress).",
  "1-7-4": "Introversion marked your love past (The Hermit). Now, you approach your partner with an enchanting energy (The Magician). The future signals a serious and stable union (The Emperor).",
  "1-7-5": "You questioned love and were alone in the past (The Hermit). Now, your charm fascinates your partner (The Magician). Soon, an important love decision awaits (The Lovers).",
  "1-7-6": "Your love life’s past was shaped by inner journey and solitude (The Hermit). Now, your communication is strong (The Magician). The future brings a period where your relationship will emerge stronger from all tests (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "1-7-0": "Working alone or turning inward was present in your career past (The Hermit). Now, you are at the forefront in projects and communication (The Magician). Soon, you may take a bold and innovative career step (The Fool).",
  "1-7-2": "Solitude and inner analysis were prominent in your work past (The Hermit). Now, you make a difference with your creativity (The Magician). The future will bring a big opportunity through your intuition (The High Priestess).",
  "1-7-3": "Your career past involved solitude or focusing on your own projects (The Hermit). Now, your energy is high at work (The Magician). The future brings a productive and peaceful period (The Empress).",
  "1-7-4": "Progressing alone marked your professional past (The Hermit). Now, you show impressive leadership in projects (The Magician). Soon, you may move into an important managerial or leadership role (The Emperor).",
  "1-7-5": "You were introspective and solitary at work in the past (The Hermit). Now, you make a difference in projects (The Magician). The future signals an important work choice (The Lovers).",
  "1-7-6": "Your professional past was about inner journey and solitude (The Hermit). Now, your energy in projects is high (The Magician). The future brings a period where you will grow stronger by overcoming all challenges (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-0-1": "Geçmişte iç sesine ve sezgilerine çok kulak verdin (Baş Rahibe). Şu anda özgürlük ve cesaretle aşkı yaşıyorsun (Aptal). Yakında büyüleyici bir iletişim ve çekim dönemi başlıyor (Büyücü).",
  "2-0-3": "Aşk hayatının geçmişinde duyguların ön plandaydı (Baş Rahibe). Şu an ilişkinde yeni bir başlangıç var (Aptal). Gelecek ise huzur, şefkat ve verimlilik vadediyor (İmparatoriçe).",
  "2-0-4": "Geçmişte sezgilerinle hareket ettin (Baş Rahibe). Şu anda özgür ve cesur bir yaklaşım sergiliyorsun (Aptal). Gelecekte ilişkinin temelleri daha sağlam atılacak (İmparator).",
  "2-0-5": "Aşk geçmişinde gizli duygular ve sezgisel kararlar vardı (Baş Rahibe). Şu an cesurca yeni aşklara açıksın (Aptal). Yakında büyük bir aşk seçimiyle karşılaşabilirsin (Aşıklar).",
  "2-0-6": "Geçmişte içsel derinliklerin yoğundu (Baş Rahibe). Şu an aşk hayatında risk almaktan korkmuyorsun (Aptal). Gelecekte ilişkiniz zorluklara rağmen güçlenecek (Güç).",
  "2-0-7": "Aşk hayatının geçmişinde duygusal keşifler ön plandaydı (Baş Rahibe). Şu anda aşkı macera gibi yaşıyorsun (Aptal). Yakında içe dönüp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-0-1": "Kariyerinin geçmişinde sezgilerinle yol aldın (Baş Rahibe). Şu anda iş ortamında yenilikçi ve özgürsün (Aptal). Yakında çevreni büyüleyecek projelerle öne çıkacaksın (Büyücü).",
  "2-0-3": "Geçmişte işte dikkatli ve sezgisel davrandın (Baş Rahibe). Şu an yeni bir iş ya da proje ile başlangıç yaptın (Aptal). Gelecek ise bereket ve huzur getirecek (İmparatoriçe).",
  "2-0-4": "Kariyerinin geçmişinde gizli fırsatları değerlendirdin (Baş Rahibe). Şu anda özgür ve yenilikçi davranıyorsun (Aptal). Yakında işte sağlam bir konuma ulaşacaksın (İmparator).",
  "2-0-5": "Geçmişte sezgilerinle doğru seçimler yaptın (Baş Rahibe). Şu anda işte risk almaktan çekinmiyorsun (Aptal). Gelecek ise önemli bir iş tercihini gündeme getirecek (Aşıklar).",
  "2-0-6": "Kariyerinin geçmişinde içsel analizler ve dikkat vardı (Baş Rahibe). Şu an iş ortamında cesur adımlar atıyorsun (Aptal). Yakında tüm engelleri aşarak güçleneceksin (Güç).",
  "2-0-7": "İş geçmişinde sezgilerinle ilerledin (Baş Rahibe). Şu an yenilikçi bir projedesin (Aptal). Yakında yalnız başına önemli bir iş sorumluluğu alabilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-0-1": "In the past, you listened closely to your inner voice and intuition (The High Priestess). Now, you live love with freedom and courage (The Fool). Soon, a period of magical communication and attraction begins (The Magician).",
  "2-0-3": "Emotions were at the forefront in your love’s past (The High Priestess). Now, there is a new beginning in your relationship (The Fool). The future promises peace, compassion, and productivity (The Empress).",
  "2-0-4": "You acted with intuition in the past (The High Priestess). Now, you take a free and bold approach (The Fool). The future will see stronger foundations in your relationship (The Emperor).",
  "2-0-5": "Hidden feelings and intuitive decisions were present in your love’s past (The High Priestess). Now, you boldly open yourself to new loves (The Fool). Soon, you may face a major love decision (The Lovers).",
  "2-0-6": "You had inner depth in the past (The High Priestess). Now, you’re not afraid to take risks in love (The Fool). The future will make your relationship stronger through challenges (Strength).",
  "2-0-7": "Emotional exploration was prominent in your love’s past (The High Priestess). Now, you live love as an adventure (The Fool). Soon, there may be a time of introspection and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-0-1": "In your career’s past, you followed your intuition (The High Priestess). Now, you are innovative and free at work (The Fool). Soon, you’ll stand out with projects that enchant your surroundings (The Magician).",
  "2-0-3": "You acted carefully and intuitively at work in the past (The High Priestess). Now, you have started a new job or project (The Fool). The future brings abundance and peace (The Empress).",
  "2-0-4": "You seized hidden opportunities in your career’s past (The High Priestess). Now, you are acting freely and innovatively (The Fool). Soon, you’ll reach a solid position at work (The Emperor).",
  "2-0-5": "You made the right choices with your intuition in your career’s past (The High Priestess). Now, you’re not afraid to take risks at work (The Fool). The future will bring an important business choice (The Lovers).",
  "2-0-6": "Inner analysis and careful attention stood out in your career’s past (The High Priestess). Now, you are taking bold steps at work (The Fool). Soon, you’ll overcome all obstacles and become stronger (Strength).",
  "2-0-7": "You advanced in your career with intuition in the past (The High Priestess). Now, you are in an innovative project (The Fool). Soon, you may take on major responsibility solo (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-1-0": "Geçmişte büyülü bir çekim yaşadın (Büyücü). Şu anda özgür ve cesur adımlar atıyorsun (Aptal). Gelecek ise duygusal ve sezgisel bir aşk hikayesini işaret ediyor (Baş Rahibe).",
  "2-1-3": "Aşk hayatının geçmişinde güçlü bir iletişim vardı (Büyücü). Şu an yeni bir aşk macerasına açıksın (Aptal). Yakında huzur ve şefkat dolu bir dönem başlıyor (İmparatoriçe).",
  "2-1-4": "Geçmişte ilişkinde karşılıklı bir büyü vardı (Büyücü). Şu an özgürce ve cesurca hareket ediyorsun (Aptal). Gelecekte ise ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "2-1-5": "Aşk geçmişinde karşılıklı tutku ve çekim yaşandı (Büyücü). Şu an risk almaktan korkmuyorsun (Aptal). Yakında büyük bir aşk kararıyla karşılaşacaksın (Aşıklar).",
  "2-1-6": "Geçmişinde iletişim ve çekicilik ön plandaydı (Büyücü). Şu an özgür bir ruhla hareket ediyorsun (Aptal). Gelecek ise ilişkinin tüm sınavlardan güçlenerek çıkacağını gösteriyor (Güç).",
  "2-1-7": "Aşk hayatının geçmişinde büyü ve çekim vardı (Büyücü). Şu an maceracı bir ruh halindesin (Aptal). Yakında yalnızlık ve içsel sorgulama dönemi olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-1-0": "Kariyerinde geçmişte projelerde fark yarattın (Büyücü). Şu an iş ortamında yenilikçi ve cesursun (Aptal). Yakında sezgilerinle büyük bir fırsat yakalayacaksın (Baş Rahibe).",
  "2-1-3": "İş geçmişinde iletişiminle ön plandaydın (Büyücü). Şu anda yeni bir işe veya projeye açıksın (Aptal). Gelecek ise üretken ve bereketli bir dönemi müjdeliyor (İmparatoriçe).",
  "2-1-4": "Kariyerinin geçmişinde iletişim ve etki vardı (Büyücü). Şu an özgür ve yenilikçi davranıyorsun (Aptal). Yakında yönetici konumuna yükselebilirsin (İmparator).",
  "2-1-5": "Geçmişte projelerde aktif ve etkiliydin (Büyücü). Şu an işte risk almaktan korkmuyorsun (Aptal). Gelecekte önemli bir iş kararı kapıda (Aşıklar).",
  "2-1-6": "Kariyer geçmişinde projelerde dikkat çekiciydin (Büyücü). Şu an işte özgürce hareket ediyorsun (Aptal). Gelecek ise tüm engelleri aşarak daha da güçleneceğin bir dönem (Güç).",
  "2-1-7": "İş hayatının geçmişinde etki ve başarı vardı (Büyücü). Şu an yenilikçi projelerle ilgileniyorsun (Aptal). Yakında yalnız başına önemli bir sorumluluk alacaksın (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-1-0": "In the past, you experienced a magical attraction (The Magician). Now, you take bold and free steps (The Fool). The future signals an emotional and intuitive love story (The High Priestess).",
  "2-1-3": "Strong communication marked your love’s past (The Magician). Now, you are open to a new love adventure (The Fool). Soon, a period of peace and compassion begins (The Empress).",
  "2-1-4": "There was mutual magic in your relationship’s past (The Magician). Now, you act freely and boldly (The Fool). In the future, solid and serious steps will be taken in your relationship (The Emperor).",
  "2-1-5": "Mutual passion and attraction defined your love’s past (The Magician). Now, you’re not afraid to take risks (The Fool). Soon, you'll face a major love decision (The Lovers).",
  "2-1-6": "Communication and charm stood out in your past (The Magician). Now, you move with a free spirit (The Fool). The future shows your relationship becoming stronger from every test (Strength).",
  "2-1-7": "There was magic and attraction in your love’s past (The Magician). Now, you are in an adventurous mood (The Fool). Soon, there may be a period of solitude and self-questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-1-0": "In your career’s past, you made a difference in projects (The Magician). Now, you are innovative and bold at work (The Fool). Soon, your intuition will bring a big opportunity (The High Priestess).",
  "2-1-3": "Communication was at the forefront in your professional past (The Magician). Now, you are open to a new job or project (The Fool). The future promises a productive and abundant period (The Empress).",
  "2-1-4": "Influence and communication stood out in your career past (The Magician). Now, you act freely and innovatively (The Fool). Soon, you may rise to a managerial position (The Emperor).",
  "2-1-5": "You were active and effective in projects in your professional past (The Magician). Now, you’re not afraid to take risks at work (The Fool). The future will bring an important business decision (The Lovers).",
  "2-1-6": "You were remarkable in your past projects (The Magician). Now, you act freely at work (The Fool). The future will bring a period where you grow stronger overcoming all obstacles (Strength).",
  "2-1-7": "There was influence and achievement in your professional past (The Magician). Now, you’re involved in innovative projects (The Fool). Soon, you’ll take on a major solo responsibility (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-3-0": "Geçmişte aşk hayatında sezgisel bağlar ve derin hisler ön plandaydı (Baş Rahibe). Şu an huzur, şefkat ve paylaşım dolu bir döneme girdin (İmparatoriçe). Gelecek ise yeni ve cesur bir aşk yolculuğu vadediyor (Aptal).",
  "2-3-1": "Aşk geçmişinde iç dünyana önem verdin (Baş Rahibe). Şu anda ilişkinde huzur ve üretkenlik hakim (İmparatoriçe). Yakında karşındaki kişiye büyüleyici bir etkiyle yaklaşacaksın (Büyücü).",
  "2-3-4": "Aşk hayatında geçmişte içsel keşifler ön plandaydı (Baş Rahibe). Şu an ilişkinde huzur ve güven var (İmparatoriçe). Gelecek ise sağlam ve ciddi bir birlikteliğe işaret ediyor (İmparator).",
  "2-3-5": "Geçmişte sezgilerinle hareket ettin (Baş Rahibe). Şu anda huzur ve şefkat içindesin (İmparatoriçe). Yakında önemli bir aşk seçimi gündeme gelebilir (Aşıklar).",
  "2-3-6": "Aşk geçmişinde derin duygular ve sezgisel bağlar ön plandaydı (Baş Rahibe). Şu an huzurlu bir ilişkidesin (İmparatoriçe). Gelecekte aşkınız daha da güçlenecek (Güç).",
  "2-3-7": "Geçmişte iç dünyana dönük bir aşk yaşadın (Baş Rahibe). Şu anda şefkat dolu bir ilişki içindesin (İmparatoriçe). Yakında içsel sorgulama ve yalnızlık dönemi olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-3-0": "Kariyerinin geçmişinde sezgilerinle önemli adımlar attın (Baş Rahibe). Şu anda ekip çalışmasında ve projelerde ön plandasın (İmparatoriçe). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "2-3-1": "İş geçmişinde perde arkasında etkiliydin (Baş Rahibe). Şu anda üretkenlik ve huzur ön planda (İmparatoriçe). Yakında çevrende büyüleyici bir etki bırakacaksın (Büyücü).",
  "2-3-4": "Kariyer geçmişinde sezgilerin ve analizlerin ön plandaydı (Baş Rahibe). Şu an ekip ruhuyla başarılısın (İmparatoriçe). Yakında yönetici pozisyonuna yükselebilirsin (İmparator).",
  "2-3-5": "Geçmişte iş hayatında sezgilerinle kararlar verdin (Baş Rahibe). Şu an huzurlu bir ortamdasın (İmparatoriçe). Gelecek ise önemli bir iş seçimini gündeme getiriyor (Aşıklar).",
  "2-3-6": "Kariyerinin geçmişinde içsel gözlemler ve dikkat ön plandaydı (Baş Rahibe). Şu an ekip içinde uyumlusun (İmparatoriçe). Gelecek ise tüm engelleri aşarak güçleneceğin bir dönem (Güç).",
  "2-3-7": "İş geçmişinde perde arkasında etkin oldun (Baş Rahibe). Şu anda huzur ve paylaşım ön planda (İmparatoriçe). Yakında yalnız çalışacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-3-0": "In the past, intuitive bonds and deep feelings were prominent in your love life (The High Priestess). Now, you are in a period full of peace, compassion, and sharing (The Empress). The future promises a brand new and bold love journey (The Fool).",
  "2-3-1": "You valued your inner world in your love past (The High Priestess). Currently, there is peace and productivity in your relationship (The Empress). Soon, you will approach your partner with a magical effect (The Magician).",
  "2-3-4": "Inner discoveries stood out in your love past (The High Priestess). Now, there is peace and security in your relationship (The Empress). The future signals a solid and serious union (The Emperor).",
  "2-3-5": "You acted with intuition in your love past (The High Priestess). Now, you are in peace and compassion (The Empress). Soon, an important love decision may arise (The Lovers).",
  "2-3-6": "Deep feelings and intuitive bonds were present in your love past (The High Priestess). Now, you are in a peaceful relationship (The Empress). The future will make your love even stronger (Strength).",
  "2-3-7": "You experienced an inward-oriented love in the past (The High Priestess). Now, you are in a relationship full of compassion (The Empress). Soon, there may be a period of introspection and solitude (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-3-0": "In your career’s past, you took important steps with your intuition (The High Priestess). Now, you stand out in teamwork and projects (The Empress). Soon, you may make an innovative career move (The Fool).",
  "2-3-1": "You were effective behind the scenes at work in the past (The High Priestess). Now, productivity and peace are prominent (The Empress). Soon, you will leave a magical impression on your surroundings (The Magician).",
  "2-3-4": "Intuition and analysis were at the forefront in your career past (The High Priestess). Now, you succeed with team spirit (The Empress). Soon, you may rise to a managerial position (The Emperor).",
  "2-3-5": "You made decisions with intuition in your work past (The High Priestess). Now, you’re in a peaceful environment (The Empress). The future brings an important business choice (The Lovers).",
  "2-3-6": "Inner observations and attentiveness stood out in your career past (The High Priestess). Now, you are harmonious within the team (The Empress). The future brings a time to become stronger by overcoming every obstacle (Strength).",
  "2-3-7": "You were effective behind the scenes at work in the past (The High Priestess). Now, peace and sharing are at the forefront (The Empress). Soon, there may be a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-4-0": "Geçmişte aşk hayatında içsel analizler ve sezgisel kararlar vardı (Baş Rahibe). Şu an ilişkinde ciddi ve kararlı bir tutum sergiliyorsun (İmparator). Gelecek ise seni yepyeni ve cesur bir aşk yolculuğuna götürecek (Aptal).",
  "2-4-1": "Aşk geçmişinde duygularınla hareket ettin (Baş Rahibe). Şu an ilişkinde güven ve istikrar öne çıktı (İmparator). Yakında büyüleyici bir iletişim dönemi başlıyor (Büyücü).",
  "2-4-3": "Geçmişinde gizli duygular ve içe dönüklük hakimdi (Baş Rahibe). Şu anda ilişkinde sorumlulukların arttı (İmparator). Gelecek ise huzur, şefkat ve paylaşım getiriyor (İmparatoriçe).",
  "2-4-5": "Aşk geçmişinde derin hisler ve sezgisel bağlar ön plandaydı (Baş Rahibe). Şu an ilişkinde sağlamlık var (İmparator). Gelecekte önemli bir aşk kararı kapıda (Aşıklar).",
  "2-4-6": "İlişkinde geçmişte sezgisel kararlar aldın (Baş Rahibe). Şu anda ilişkinin temelleri sağlam (İmparator). Yakında aşkınız güçlenerek tüm sınavlardan geçecek (Güç).",
  "2-4-7": "Geçmişte aşkı içsel bir yolculuk olarak yaşadın (Baş Rahibe). Şu anda ciddi bir ilişkin var (İmparator). Gelecekte ise yalnızlık veya içsel sorgulama gündeme gelebilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-4-0": "Kariyerinde geçmişte içsel analizler ve dikkatli adımlar attın (Baş Rahibe). Şu anda işte liderliğin öne çıktı (İmparator). Yakında cesur ve yenilikçi bir adım atacaksın (Aptal).",
  "2-4-1": "İş geçmişinde sezgilerinle karar verdin (Baş Rahibe). Şu an iş ortamında güven ve istikrar sağladın (İmparator). Yakında çevreni büyüleyecek projelerle öne çıkacaksın (Büyücü).",
  "2-4-3": "Kariyerinde geçmişte gözlemci ve analizciydin (Baş Rahibe). Şu anda otorite sahibi bir pozisyona geldin (İmparator). Gelecek ise bereket ve huzur dolu bir dönemi getiriyor (İmparatoriçe).",
  "2-4-5": "İş hayatının geçmişinde sezgilerinle ilerledin (Baş Rahibe). Şu anda işte sağlam bir pozisyona sahipsin (İmparator). Gelecek ise önemli bir iş seçimi ile yeniden şekillenecek (Aşıklar).",
  "2-4-6": "Geçmişte işte içsel analiz ve dikkat ön plandaydı (Baş Rahibe). Şu anda güçlü ve otoriter bir konumdasın (İmparator). Yakında iş hayatında tüm engelleri aşacaksın (Güç).",
  "2-4-7": "Kariyerinin geçmişinde perde arkasında etkiliydin (Baş Rahibe). Şu an lider konumdasın (İmparator). Gelecekte yalnız veya bağımsız çalışacağın bir dönem var (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-4-0": "In the past, your love life included inner analysis and intuitive decisions (The High Priestess). Now, you show a serious and determined attitude in your relationship (The Emperor). The future will lead you into a brand new and bold love journey (The Fool).",
  "2-4-1": "You acted with your feelings in your love’s past (The High Priestess). Now, trust and stability are prominent in your relationship (The Emperor). Soon, a period of magical communication begins (The Magician).",
  "2-4-3": "There were hidden feelings and introversion in your love’s past (The High Priestess). Now, you have increased responsibilities (The Emperor). The future brings peace, compassion, and sharing (The Empress).",
  "2-4-5": "Deep feelings and intuitive bonds were prominent in your love’s past (The High Priestess). Now, your relationship is solid (The Emperor). An important love decision is ahead (The Lovers).",
  "2-4-6": "You made intuitive decisions in your relationship’s past (The High Priestess). Now, the foundations of your relationship are strong (The Emperor). Soon, your love will grow stronger by overcoming all tests (Strength).",
  "2-4-7": "In the past, you experienced love as an inner journey (The High Priestess). Now, you have a serious relationship (The Emperor). The future may bring solitude or inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-4-0": "In your career’s past, you took careful steps with inner analysis (The High Priestess). Now, your leadership stands out (The Emperor). Soon, you’ll make a bold and innovative move (The Fool).",
  "2-4-1": "You made decisions with intuition in your work past (The High Priestess). Now, you have established trust and stability at work (The Emperor). Soon, you’ll stand out with projects that enchant your surroundings (The Magician).",
  "2-4-3": "You were observant and analytical in your professional past (The High Priestess). Now, you’ve reached a position of authority (The Emperor). The future brings a period full of abundance and peace (The Empress).",
  "2-4-5": "You advanced with intuition in your career’s past (The High Priestess). Now, you have a solid position at work (The Emperor). The future will be reshaped by an important business choice (The Lovers).",
  "2-4-6": "Inner analysis and attention stood out in your professional past (The High Priestess). Now, you’re in a strong and authoritative position (The Emperor). Soon, you’ll overcome all obstacles at work (Strength).",
  "2-4-7": "You were effective behind the scenes in your career’s past (The High Priestess). Now, you’re a leader (The Emperor). The future brings a period of working solo or independently (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-5-0": "Geçmişte aşk hayatında önemli bir seçim veya ikilem yaşadın (Aşıklar). Şu anda ilişkinde sezgilerin ve içsel analizlerin ön planda (Baş Rahibe). Gelecek ise cesur ve yenilikçi bir aşk başlangıcı getiriyor (Aptal).",
  "2-5-1": "Aşk geçmişinde büyük bir aşk kararı vardı (Aşıklar). Şu an iç dünyana dönük bir ilişki yaşıyorsun (Baş Rahibe). Yakında büyüleyici bir iletişim ve çekim dönemi başlıyor (Büyücü).",
  "2-5-3": "Geçmişinde aşk konusunda seçimler ve derin hisler vardı (Aşıklar). Şu anda duygularını içsel olarak yaşıyorsun (Baş Rahibe). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "2-5-4": "Aşk geçmişinde büyük bir karar verdin (Aşıklar). Şu an ilişkinde sezgisel bir dönemdesin (Baş Rahibe). Yakında ciddi ve sağlam bir birliktelik başlıyor (İmparator).",
  "2-5-6": "Geçmişinde aşkın zor seçimlerle şekillendi (Aşıklar). Şu an ilişkinde sezgisel bir bağ var (Baş Rahibe). Gelecekte ise aşkınız tüm sınavlardan daha da güçlenerek çıkacak (Güç).",
  "2-5-7": "Aşk hayatının geçmişinde kararlar ve içsel sorgulamalar vardı (Aşıklar). Şu an iç dünyanda derin duygular yaşıyorsun (Baş Rahibe). Yakında yalnızlık veya içsel sorgulama dönemi başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-5-0": "Kariyerinde geçmişte önemli bir seçim yaptın (Aşıklar). Şu anda iş ortamında sezgilerinle ilerliyorsun (Baş Rahibe). Yakında cesur ve yenilikçi bir adım atacaksın (Aptal).",
  "2-5-1": "İş geçmişinde önemli bir karar verdin (Aşıklar). Şu an analizci ve dikkatli bir süreçtesin (Baş Rahibe). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "2-5-3": "Geçmişte işte seçimler ve derin analizler vardı (Aşıklar). Şu anda sezgilerin ön planda (Baş Rahibe). Gelecek ise bereket ve huzur dolu bir dönemi işaret ediyor (İmparatoriçe).",
  "2-5-4": "Kariyerinin geçmişinde büyük bir karar aldın (Aşıklar). Şu anda perde arkasında analizler yapıyorsun (Baş Rahibe). Yakında işte yönetici rolüne geçebilirsin (İmparator).",
  "2-5-6": "Geçmişte kariyerinde önemli kararlar verdin (Aşıklar). Şu anda analiz ve gözlem ön planda (Baş Rahibe). Gelecek ise tüm zorlukları aşarak güç kazanacağın bir dönem (Güç).",
  "2-5-7": "İş hayatının geçmişinde seçimler ve içsel sorgulama vardı (Aşıklar). Şu anda perde arkasında aktif rol alıyorsun (Baş Rahibe). Yakında yalnız çalışacağın büyük bir proje var (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-5-0": "In the past, you experienced an important love choice or dilemma (The Lovers). Now, intuition and inner analysis are at the forefront in your relationship (The High Priestess). The future brings a bold and innovative new start in love (The Fool).",
  "2-5-1": "There was a major love decision in your past (The Lovers). Now, you are in an introspective relationship (The High Priestess). Soon, a period of magical communication and attraction begins (The Magician).",
  "2-5-3": "Choices and deep feelings marked your love past (The Lovers). Now, you are experiencing your emotions inwardly (The High Priestess). The future brings a relationship full of peace and compassion (The Empress).",
  "2-5-4": "You made a big decision in your love past (The Lovers). Now, you’re in an intuitive phase (The High Priestess). Soon, a serious and solid relationship begins (The Emperor).",
  "2-5-6": "Love in your past was shaped by difficult choices (The Lovers). Now, there is an intuitive bond in your relationship (The High Priestess). The future will make your love even stronger through every test (Strength).",
  "2-5-7": "Your love history included decisions and inner questioning (The Lovers). Now, you’re experiencing deep feelings within (The High Priestess). Soon, there may be a period of solitude or introspection (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-5-0": "In your career’s past, you made an important choice (The Lovers). Now, you’re moving forward with intuition at work (The High Priestess). Soon, you’ll take a bold and innovative step (The Fool).",
  "2-5-1": "You made a major decision at work in the past (The Lovers). Now, you’re in an analytical and attentive phase (The High Priestess). Soon, you may achieve magical success in projects (The Magician).",
  "2-5-3": "Choices and deep analysis stood out at work in your past (The Lovers). Now, your intuition is at the forefront (The High Priestess). The future promises a period full of abundance and peace (The Empress).",
  "2-5-4": "You made a major decision in your career’s past (The Lovers). Now, you’re working behind the scenes with analysis (The High Priestess). Soon, you may move into a managerial role (The Emperor).",
  "2-5-6": "Important decisions shaped your career past (The Lovers). Now, analysis and observation are prominent (The High Priestess). The future brings a period to gain strength by overcoming all challenges (Strength).",
  "2-5-7": "Choices and inner questioning were present in your professional past (The Lovers). Now, you’re active behind the scenes (The High Priestess). Soon, there will be a major solo project (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-6-0": "Geçmişte aşk hayatında zorlukların üstesinden geldin (Güç). Şu anda içsel analizlerin ve sezgilerin ön planda (Baş Rahibe). Gelecek ise cesur bir aşk başlangıcı getiriyor (Aptal).",
  "2-6-1": "Aşk geçmişinde güç ve dayanıklılık hakimdi (Güç). Şu an ilişkinde sezgisel bir bağ yaşıyorsun (Baş Rahibe). Yakında büyüleyici bir iletişim ve çekim dönemi başlıyor (Büyücü).",
  "2-6-3": "Geçmişte ilişkinde zorluklarla mücadele ettin (Güç). Şu anda içsel bir süreçtesin (Baş Rahibe). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "2-6-4": "Aşk hayatının geçmişinde sabır ve güç ön plandaydı (Güç). Şu an sezgilerinle hareket ediyorsun (Baş Rahibe). Gelecekte ise ilişkinde sağlamlık ve ciddi adımlar var (İmparator).",
  "2-6-5": "Aşk geçmişinde mücadele ve kararlar vardı (Güç). Şu anda duygularını derinden yaşıyorsun (Baş Rahibe). Yakında önemli bir aşk kararı kapıda (Aşıklar).",
  "2-6-7": "Aşk hayatında geçmişte güç ve sabır vardı (Güç). Şu anda içsel olarak kendini keşfediyorsun (Baş Rahibe). Gelecekte yalnızlık veya içsel sorgulama dönemi başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-6-0": "Kariyerinde geçmişte zorlukları sabır ve güçle aştın (Güç). Şu anda iş ortamında sezgilerinle yol alıyorsun (Baş Rahibe). Yakında cesur bir iş adımı atacaksın (Aptal).",
  "2-6-1": "İş geçmişinde mücadele ve dayanıklılık vardı (Güç). Şu an analizci ve sezgilerine güvenen bir süreçtesin (Baş Rahibe). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "2-6-3": "Geçmişte iş hayatında zorluklarla baş ettin (Güç). Şu anda içsel analizler ön planda (Baş Rahibe). Gelecek ise bereket ve huzur dolu bir dönemi getiriyor (İmparatoriçe).",
  "2-6-4": "Kariyerinin geçmişinde sabır ve güç öne çıktı (Güç). Şu an işte sezgilerinle ilerliyorsun (Baş Rahibe). Gelecek ise yönetici pozisyonuna işaret ediyor (İmparator).",
  "2-6-5": "İş geçmişinde mücadele ve kararlar vardı (Güç). Şu an analiz ve dikkatle hareket ediyorsun (Baş Rahibe). Yakında önemli bir iş tercihi seni bekliyor (Aşıklar).",
  "2-6-7": "Kariyer geçmişinde güç ve irade ön plandaydı (Güç). Şu anda içsel analiz yapıyorsun (Baş Rahibe). Yakında yalnız başına büyük bir sorumluluk üstleneceksin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-6-0": "In the past, you overcame challenges in your love life (Strength). Now, intuition and inner analysis are at the forefront (The High Priestess). The future brings a bold new love beginning (The Fool).",
  "2-6-1": "Strength and resilience marked your love’s past (Strength). Now, you are in an intuitive bond (The High Priestess). Soon, a period of magical communication and attraction begins (The Magician).",
  "2-6-3": "You struggled with difficulties in your relationship’s past (Strength). Now, you are in an inner process (The High Priestess). The future brings a relationship full of peace and compassion (The Empress).",
  "2-6-4": "Patience and strength were at the forefront in your love’s past (Strength). Now, you act with intuition (The High Priestess). The future signals stability and serious steps in your relationship (The Emperor).",
  "2-6-5": "Struggles and decisions defined your love’s past (Strength). Now, you experience your emotions deeply (The High Priestess). Soon, an important love decision is ahead (The Lovers).",
  "2-6-7": "Strength and patience marked your love’s past (Strength). Now, you’re on a journey of inner discovery (The High Priestess). Soon, there may be a period of solitude or introspection (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-6-0": "In your career’s past, you overcame challenges with patience and strength (Strength). Now, you move forward with intuition at work (The High Priestess). Soon, you’ll make a bold business move (The Fool).",
  "2-6-1": "There was struggle and resilience in your work past (Strength). Now, you are in an analytical and intuitive phase (The High Priestess). Soon, you may achieve magical success in projects (The Magician).",
  "2-6-3": "You coped with difficulties in your career’s past (Strength). Now, inner analysis is prominent (The High Priestess). The future brings abundance and peace (The Empress).",
  "2-6-4": "Patience and strength stood out in your career’s past (Strength). Now, you’re advancing with intuition at work (The High Priestess). The future signals a move to a managerial position (The Emperor).",
  "2-6-5": "There was struggle and important decisions in your work past (Strength). Now, you act with analysis and attention (The High Priestess). Soon, an important business choice awaits (The Lovers).",
  "2-6-7": "Strength and willpower marked your professional past (Strength). Now, you’re conducting inner analysis (The High Priestess). Soon, you’ll take on a major solo responsibility (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "2-7-0": "Geçmişte aşk hayatında içe dönüklük ve yalnızlık vardı (Ermiş). Şu anda sezgisel bağların güçlendiği bir süreçtesin (Baş Rahibe). Gelecek ise sana cesur bir aşk başlangıcı getiriyor (Aptal).",
  "2-7-1": "Aşk geçmişinde yalnızlık ve içsel yolculuk öne çıktı (Ermiş). Şu anda duygularını sezgilerinle yaşıyorsun (Baş Rahibe). Yakında büyüleyici bir iletişim dönemi başlayabilir (Büyücü).",
  "2-7-3": "Geçmişte ilişkinde yalnızlık ve iç gözlem hakimdi (Ermiş). Şu an içsel bir huzur ve sezgisel bağ var (Baş Rahibe). Gelecek ise şefkat ve huzur dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "2-7-4": "Aşk hayatının geçmişinde içsel sorgulamalar vardı (Ermiş). Şu anda sezgisel bir süreçtesin (Baş Rahibe). Gelecekte ilişkinde ciddi ve sağlam bir dönem başlıyor (İmparator).",
  "2-7-5": "Aşk geçmişinde yalnızlık ve derin düşünceler vardı (Ermiş). Şu anda duygularını iç dünyanda yaşıyorsun (Baş Rahibe). Yakında önemli bir aşk kararı vereceksin (Aşıklar).",
  "2-7-6": "İlişkinde geçmişte yalnızlık ve sabır hakimdi (Ermiş). Şu an sezgilerinle hareket ediyorsun (Baş Rahibe). Gelecekte ise ilişkiniz tüm sınavlardan güçlenerek çıkacak (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "2-7-0": "Kariyerinin geçmişinde yalnızlık ve içe dönüklük öne çıktı (Ermiş). Şu anda sezgilerinle ve analizlerinle ilerliyorsun (Baş Rahibe). Yakında cesur bir iş adımı atabilirsin (Aptal).",
  "2-7-1": "İş geçmişinde yalnızlık ve içsel sorgulama vardı (Ermiş). Şu anda işte sezgilerinle yol alıyorsun (Baş Rahibe). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "2-7-3": "Kariyer geçmişinde yalnız çalışma ve analiz ön plandaydı (Ermiş). Şu an içsel analizlerin güçlü (Baş Rahibe). Gelecek ise bereketli ve huzurlu bir dönemi getiriyor (İmparatoriçe).",
  "2-7-4": "İş hayatının geçmişinde içe dönük ve gözlemciydin (Ermiş). Şu an analizci bir süreçtesin (Baş Rahibe). Yakında yönetici pozisyonuna yükselebilirsin (İmparator).",
  "2-7-5": "Geçmişte işte yalnızlık ve sorgulama ön plandaydı (Ermiş). Şu anda perde arkasında aktif rol alıyorsun (Baş Rahibe). Yakında önemli bir iş seçimiyle karşılaşabilirsin (Aşıklar).",
  "2-7-6": "Kariyerinin geçmişinde sabır ve yalnızlık vardı (Ermiş). Şu an analiz ve sezgiyle ilerliyorsun (Baş Rahibe). Gelecekte ise tüm engelleri aşarak güç kazanacağın bir dönem geliyor (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "2-7-0": "In the past, introversion and solitude were present in your love life (The Hermit). Now, you’re in a process where intuitive bonds are strengthened (The High Priestess). The future brings you a bold new love beginning (The Fool).",
  "2-7-1": "Solitude and inner journey stood out in your love’s past (The Hermit). Now, you are experiencing emotions through intuition (The High Priestess). Soon, a period of magical communication may begin (The Magician).",
  "2-7-3": "Solitude and introspection marked your relationship’s past (The Hermit). Now, there is inner peace and intuitive bonding (The High Priestess). The future brings a relationship full of compassion and peace (The Empress).",
  "2-7-4": "There was inner questioning in your love’s past (The Hermit). Now, you’re in an intuitive process (The High Priestess). The future brings a serious and stable period in your relationship (The Emperor).",
  "2-7-5": "Solitude and deep thoughts shaped your love past (The Hermit). Now, you experience your feelings inwardly (The High Priestess). Soon, you’ll make an important love decision (The Lovers).",
  "2-7-6": "Solitude and patience were prominent in your relationship’s past (The Hermit). Now, you act with intuition (The High Priestess). The future brings a relationship that grows stronger by overcoming all tests (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "2-7-0": "In your career’s past, solitude and introversion were prominent (The Hermit). Now, you’re moving forward with intuition and analysis (The High Priestess). Soon, you may make a bold career move (The Fool).",
  "2-7-1": "Solitude and inner questioning were present in your work past (The Hermit). Now, you move forward with intuition at work (The High Priestess). Soon, you may achieve magical success in projects (The Magician).",
  "2-7-3": "Working alone and analysis were prominent in your career’s past (The Hermit). Now, your inner analysis is strong (The High Priestess). The future brings a period of abundance and peace (The Empress).",
  "2-7-4": "Introversion and observation marked your professional past (The Hermit). Now, you are in an analytical process (The High Priestess). Soon, you may rise to a managerial position (The Emperor).",
  "2-7-5": "Solitude and questioning were present at work in the past (The Hermit). Now, you are active behind the scenes (The High Priestess). Soon, an important work choice may arise (The Lovers).",
  "2-7-6": "Patience and solitude were present in your professional past (The Hermit). Now, you move forward with analysis and intuition (The High Priestess). The future will bring a period where you’ll grow stronger by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-0-1": "Geçmişte ilişkinde huzur ve üretkenlik vardı (İmparatoriçe). Şu anda yeni başlangıçlara açıksın (Aptal). Gelecek ise karşındaki kişiyle büyülü bir çekim ve iletişim vadediyor (Büyücü).",
  "3-0-2": "Aşk hayatının geçmişinde huzur ve bolluk ön plandaydı (İmparatoriçe). Şu an maceracı bir ruhla aşkı yaşıyorsun (Aptal). Yakında sezgilerinle yönlendireceğin duygusal bir dönem başlıyor (Baş Rahibe).",
  "3-0-4": "Geçmişte ilişkinde şefkat ve bereket hakimdi (İmparatoriçe). Şu anda özgürce hareket ediyorsun (Aptal). Gelecek ise ilişkinin temellerinin daha sağlam atılacağı bir dönemi getiriyor (İmparator).",
  "3-0-5": "Aşk geçmişinde huzur ve verimlilik vardı (İmparatoriçe). Şu an aşkı bir macera gibi yaşıyorsun (Aptal). Yakında büyük bir aşk kararı ile karşılaşabilirsin (Aşıklar).",
  "3-0-6": "Geçmişte ilişkini sevgiyle büyüttün (İmparatoriçe). Şu anda cesurca yeni bir aşka adım atıyorsun (Aptal). Gelecek ise ilişkinin güçlenerek sınavlardan başarıyla çıkacağı bir dönemi getiriyor (Güç).",
  "3-0-7": "Aşk hayatının geçmişinde huzur ve şefkat vardı (İmparatoriçe). Şu anda aşkı özgürce yaşıyorsun (Aptal). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-0-1": "Kariyerinde geçmişte bereket ve ekip ruhu öne çıktı (İmparatoriçe). Şu anda yeni projelere açıksın (Aptal). Yakında çevreni büyüleyecek işlerle dikkat çekeceksin (Büyücü).",
  "3-0-2": "İş hayatının geçmişinde huzur ve verimlilik hakimdi (İmparatoriçe). Şu an yenilikçi ve maceracı bir ruhlasın (Aptal). Gelecek ise sezgilerinle büyük başarılar getirecek (Baş Rahibe).",
  "3-0-4": "Geçmişte işte üretkenlik ve bereket vardı (İmparatoriçe). Şu anda yenilikçi bir yaklaşım içindesin (Aptal). Yakında sağlam bir pozisyon elde edeceksin (İmparator).",
  "3-0-5": "Kariyerinin geçmişinde verimlilik ve paylaşım ön plandaydı (İmparatoriçe). Şu anda işte yeni maceralara açıksın (Aptal). Yakında önemli bir iş seçimiyle karşılaşacaksın (Aşıklar).",
  "3-0-6": "İş geçmişinde üretken ve paylaşımcıydın (İmparatoriçe). Şu an yeni başlangıçlar yapıyorsun (Aptal). Gelecek ise tüm engelleri aşarak güçleneceğin bir dönem (Güç).",
  "3-0-7": "Kariyerinin geçmişinde huzur ve ekip ruhu ön plandaydı (İmparatoriçe). Şu an yenilikçi bir süreçtesin (Aptal). Yakında yalnız başına önemli bir sorumluluk alabilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-0-1": "In the past, your relationship was full of peace and productivity (The Empress). Now, you are open to new beginnings (The Fool). The future promises magical attraction and communication with your partner (The Magician).",
  "3-0-2": "Peace and abundance were prominent in your love’s past (The Empress). Now, you are living love with an adventurous spirit (The Fool). Soon, a period of emotional intuition begins (The High Priestess).",
  "3-0-4": "Compassion and abundance marked your relationship’s past (The Empress). Now, you act freely (The Fool). The future brings a time when the foundations of your relationship will be set stronger (The Emperor).",
  "3-0-5": "Your love past was peaceful and productive (The Empress). Now, you are living love as an adventure (The Fool). Soon, a major love decision may arise (The Lovers).",
  "3-0-6": "You grew your relationship with love in the past (The Empress). Now, you boldly step into new love (The Fool). The future brings a time when your relationship will grow stronger through every test (Strength).",
  "3-0-7": "Peace and compassion stood out in your love’s past (The Empress). Now, you are living love freely (The Fool). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-0-1": "Abundance and team spirit stood out in your career’s past (The Empress). Now, you are open to new projects (The Fool). Soon, you’ll attract attention with enchanting work (The Magician).",
  "3-0-2": "Peace and productivity dominated your work past (The Empress). Now, you are innovative and adventurous (The Fool). The future will bring great success with your intuition (The High Priestess).",
  "3-0-4": "Productivity and abundance marked your professional past (The Empress). Now, you are innovative (The Fool). Soon, you’ll achieve a solid position (The Emperor).",
  "3-0-5": "Productivity and sharing stood out in your career’s past (The Empress). Now, you are open to new adventures at work (The Fool). Soon, you’ll face an important business choice (The Lovers).",
  "3-0-6": "You were productive and sharing in your professional past (The Empress). Now, you are making new beginnings (The Fool). The future brings a period of overcoming all obstacles and gaining strength (Strength).",
  "3-0-7": "Peace and team spirit were prominent in your career’s past (The Empress). Now, you are in an innovative process (The Fool). Soon, you may take on a major responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-1-0": "Geçmişte ilişkinde büyülü bir çekim ve enerji hakimdi (Büyücü). Şu an yeni başlangıçlara açıksın (Aptal). Gelecek ise huzur ve bereket dolu bir ilişkiyi işaret ediyor (İmparatoriçe).",
  "3-1-2": "Aşk hayatının geçmişinde karşılıklı çekim vardı (Büyücü). Şu anda özgürce ve cesurca hareket ediyorsun (Aptal). Yakında sezgisel bir bağ güçlenebilir (Baş Rahibe).",
  "3-1-4": "Geçmişte ilişkinde iletişim ve çekim ön plandaydı (Büyücü). Şu anda yeni başlangıçlara açıksın (Aptal). Gelecek ise ciddi ve sağlam bir ilişkiye işaret ediyor (İmparator).",
  "3-1-5": "Aşk geçmişinde iletişim ve büyü vardı (Büyücü). Şu an aşkı özgürce yaşıyorsun (Aptal). Yakında büyük bir aşk kararı seni bekliyor (Aşıklar).",
  "3-1-6": "Geçmişte büyülü bir çekim yaşadın (Büyücü). Şu anda yeni maceralara açıksın (Aptal). Gelecekte ilişkinde tüm sınavlardan güçlenerek çıkacağın bir dönem olacak (Güç).",
  "3-1-7": "Aşk hayatında geçmişte büyüleyici bir etki hakimdi (Büyücü). Şu anda aşkı yeni bir gözle yaşıyorsun (Aptal). Yakında içsel sorgulama ve yalnızlık dönemi olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-1-0": "Kariyerinde geçmişte iletişim ve başarı ön plandaydı (Büyücü). Şu anda yeni işlere açıksın (Aptal). Gelecek ise bereketli ve üretken bir dönemi getiriyor (İmparatoriçe).",
  "3-1-2": "İş hayatının geçmişinde projelerde fark yarattın (Büyücü). Şu anda yenilikçi ve özgürsün (Aptal). Yakında iş hayatında sezgilerinle büyük fırsatlar yakalayacaksın (Baş Rahibe).",
  "3-1-4": "Geçmişte iş ortamında iletişim ve başarı vardı (Büyücü). Şu anda yeni projelere açıksın (Aptal). Yakında yönetici pozisyonuna geçebilirsin (İmparator).",
  "3-1-5": "Kariyerinin geçmişinde projelerde öne çıktın (Büyücü). Şu an yenilikçi bir ruhlasın (Aptal). Yakında önemli bir iş kararı seni bekliyor (Aşıklar).",
  "3-1-6": "Geçmişte projelerde aktif ve etkilisin (Büyücü). Şu anda yeni maceralara açıksın (Aptal). Yakında tüm zorlukları aşarak güçleneceksin (Güç).",
  "3-1-7": "İş hayatının geçmişinde projelerde büyüleyici bir etki yarattın (Büyücü). Şu anda yenilikçi bir sürecin var (Aptal). Yakında yalnız çalışacağın bir döneme giriyorsun (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-1-0": "In the past, there was magical attraction and energy in your relationship (The Magician). Now, you are open to new beginnings (The Fool). The future points to a relationship full of peace and abundance (The Empress).",
  "3-1-2": "Mutual attraction marked your love’s past (The Magician). Now, you act freely and boldly (The Fool). Soon, an intuitive bond may strengthen (The High Priestess).",
  "3-1-4": "Communication and attraction stood out in your relationship’s past (The Magician). Now, you are open to new beginnings (The Fool). The future signals a serious and solid relationship (The Emperor).",
  "3-1-5": "Communication and magic defined your love’s past (The Magician). Now, you live love freely (The Fool). Soon, a major love decision awaits (The Lovers).",
  "3-1-6": "You experienced magical attraction in the past (The Magician). Now, you’re open to new adventures (The Fool). The future will be a time when your relationship grows stronger through every test (Strength).",
  "3-1-7": "There was a magical effect in your love’s past (The Magician). Now, you’re living love with a fresh perspective (The Fool). Soon, there may be a period of inner questioning and solitude (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-1-0": "Communication and achievement were at the forefront of your career’s past (The Magician). Now, you are open to new jobs (The Fool). The future brings a period of abundance and productivity (The Empress).",
  "3-1-2": "You made a difference in projects in your professional past (The Magician). Now, you are innovative and free (The Fool). Soon, your intuition will bring great opportunities (The High Priestess).",
  "3-1-4": "Communication and success were present in your work past (The Magician). Now, you are open to new projects (The Fool). Soon, you may move to a managerial position (The Emperor).",
  "3-1-5": "You stood out in projects in your career past (The Magician). Now, you’re in an innovative spirit (The Fool). Soon, an important business decision awaits (The Lovers).",
  "3-1-6": "You were active and effective in past projects (The Magician). Now, you’re open to new adventures (The Fool). Soon, you will grow stronger by overcoming all challenges (Strength).",
  "3-1-7": "You created a magical impact in past projects (The Magician). Now, you’re in an innovative process (The Fool). Soon, you’ll enter a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-2-0": "Geçmişte ilişkinde sezgisel bağlar ve duygusal derinlik vardı (Baş Rahibe). Şu an huzur ve verimlilik ön planda (İmparatoriçe). Yakında yeni ve cesur bir aşk başlangıcı seni bekliyor (Aptal).",
  "3-2-1": "Aşk geçmişinde iç dünyana önem verdin (Baş Rahibe). Şu anda huzurlu bir ilişkidesin (İmparatoriçe). Yakında karşındaki kişiye büyüleyici bir çekimle yaklaşacaksın (Büyücü).",
  "3-2-4": "Geçmişte ilişkinde içsel analizler ön plandaydı (Baş Rahibe). Şu anda bereket ve huzur var (İmparatoriçe). Gelecek ise ciddi ve sağlam bir birlikteliğe işaret ediyor (İmparator).",
  "3-2-5": "Aşk hayatında geçmişte sezgisel bağlar güçlüydü (Baş Rahibe). Şu anda huzur ve şefkat içindesin (İmparatoriçe). Yakında önemli bir aşk seçimi yapabilirsin (Aşıklar).",
  "3-2-6": "Geçmişte duygusal derinlik ve sezgi ön plandaydı (Baş Rahibe). Şu an huzurlu bir ilişki içindesin (İmparatoriçe). Gelecekte aşkınız güçlenerek sınavlardan başarıyla çıkacak (Güç).",
  "3-2-7": "Aşk geçmişinde içsel yolculuklar ve sezgi vardı (Baş Rahibe). Şu anda ilişkinde huzur var (İmparatoriçe). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-2-0": "Kariyerinde geçmişte sezgilerinle yol aldın (Baş Rahibe). Şu anda ekip içinde üretken ve huzurlusun (İmparatoriçe). Yakında yenilikçi bir iş başlangıcı seni bekliyor (Aptal).",
  "3-2-1": "İş geçmişinde perde arkasında etkiliydin (Baş Rahibe). Şu anda ekip çalışmasında huzur var (İmparatoriçe). Yakında çevrene büyüleyici bir etki bırakacaksın (Büyücü).",
  "3-2-4": "Kariyerinin geçmişinde içsel analizler ve dikkat vardı (Baş Rahibe). Şu an bereketli ve huzurlu bir iş ortamındasın (İmparatoriçe). Yakında liderliğin öne çıkacak (İmparator).",
  "3-2-5": "İş hayatında geçmişte analiz ve sezgi ön plandaydı (Baş Rahibe). Şu an verimlilik ve huzur içindesin (İmparatoriçe). Gelecek ise önemli bir iş tercihi getirecek (Aşıklar).",
  "3-2-6": "Kariyerinde geçmişte dikkat ve analiz öne çıktı (Baş Rahibe). Şu anda ekip içinde huzurlu bir dönemdesin (İmparatoriçe). Yakında tüm engelleri aşarak güçleneceksin (Güç).",
  "3-2-7": "İş geçmişinde perde arkasında aktif rol aldın (Baş Rahibe). Şu an ekipte huzur ve paylaşım var (İmparatoriçe). Yakında yalnız çalışacağın bir süreç olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-2-0": "In the past, there were intuitive bonds and emotional depth in your relationship (The High Priestess). Now, peace and productivity are at the forefront (The Empress). Soon, a brand new and bold love beginning awaits (The Fool).",
  "3-2-1": "You valued your inner world in your love past (The High Priestess). Now, you are in a peaceful relationship (The Empress). Soon, you will approach your partner with magical attraction (The Magician).",
  "3-2-4": "Inner analysis was prominent in your love’s past (The High Priestess). Now, there is abundance and peace (The Empress). The future signals a serious and solid union (The Emperor).",
  "3-2-5": "Intuitive bonds were strong in your love’s past (The High Priestess). Now, you are in peace and compassion (The Empress). Soon, you may make an important love choice (The Lovers).",
  "3-2-6": "Emotional depth and intuition stood out in your love’s past (The High Priestess). Now, you are in a peaceful relationship (The Empress). The future brings a time when your love will grow stronger through every test (Strength).",
  "3-2-7": "Inner journeys and intuition were present in your love’s past (The High Priestess). Now, there is peace in your relationship (The Empress). Soon, you may go through a period of solitude and reflection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-2-0": "In your career’s past, you followed your intuition (The High Priestess). Now, you are productive and peaceful in your team (The Empress). Soon, an innovative work start awaits (The Fool).",
  "3-2-1": "You were effective behind the scenes in your work past (The High Priestess). Now, there is peace in teamwork (The Empress). Soon, you will leave a magical impression on your environment (The Magician).",
  "3-2-4": "Inner analysis and attention stood out in your career’s past (The High Priestess). Now, you are in an abundant and peaceful work environment (The Empress). Soon, your leadership will stand out (The Emperor).",
  "3-2-5": "Analysis and intuition were prominent in your professional past (The High Priestess). Now, you are in productivity and peace (The Empress). The future will bring an important work choice (The Lovers).",
  "3-2-6": "Attention and analysis stood out in your career’s past (The High Priestess). Now, you are in a peaceful period in your team (The Empress). Soon, you’ll overcome all obstacles and grow stronger (Strength).",
  "3-2-7": "You played an active role behind the scenes at work in the past (The High Priestess). Now, there is peace and sharing in the team (The Empress). Soon, you may have a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-4-0": "Geçmişte ilişkinde huzur ve bereket vardı (İmparatoriçe). Şu anda ilişkinde ciddi ve sağlam bir duruş sergiliyorsun (İmparator). Yakında yeni ve cesur bir aşk macerası başlıyor (Aptal).",
  "3-4-1": "Aşk hayatında geçmişte paylaşım ve şefkat ön plandaydı (İmparatoriçe). Şu an ilişkinde güven ve disiplin hakim (İmparator). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "3-4-2": "Geçmişte ilişkinde bereket ve verimlilik hakimdi (İmparatoriçe). Şu an ilişkinde kararlılık ve otorite var (İmparator). Yakında sezgisel bir bağ güçlenebilir (Baş Rahibe).",
  "3-4-5": "Aşk geçmişinde huzur ve paylaşım ön plandaydı (İmparatoriçe). Şu anda ilişkinde disiplin ve kararlılık hakim (İmparator). Yakında önemli bir aşk kararı gündeme gelebilir (Aşıklar).",
  "3-4-6": "Geçmişte ilişkinde huzur ve üretkenlik vardı (İmparatoriçe). Şu an ilişkinde güçlü ve istikrarlısın (İmparator). Gelecek ise ilişkide tüm sınavlardan güçlenerek çıkılacağı bir dönemi getiriyor (Güç).",
  "3-4-7": "Aşk hayatının geçmişinde huzur ve şefkat vardı (İmparatoriçe). Şu anda ilişkinde disiplin ve sorumluluk ön planda (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-4-0": "Kariyerinde geçmişte bereket ve paylaşım vardı (İmparatoriçe). Şu anda işte liderlik ve disiplin ön planda (İmparator). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "3-4-1": "İş hayatının geçmişinde üretkenlik ve huzur vardı (İmparatoriçe). Şu anda otorite ve güven sahibisin (İmparator). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "3-4-2": "Geçmişte işte ekip çalışmasında verimlilik vardı (İmparatoriçe). Şu anda yönetici konumundasın (İmparator). Yakında iş hayatında sezgilerinle öne çıkacaksın (Baş Rahibe).",
  "3-4-5": "Kariyerinde geçmişte paylaşım ve bereket ön plandaydı (İmparatoriçe). Şu an disiplin ve otoriteyle fark yaratıyorsun (İmparator). Yakında önemli bir iş seçimiyle karşılaşabilirsin (Aşıklar).",
  "3-4-6": "İş geçmişinde üretken ve huzurluydun (İmparatoriçe). Şu an güçlü ve yönetici bir konumdasın (İmparator). Gelecek ise tüm engelleri aşarak güçleneceğin bir dönem getiriyor (Güç).",
  "3-4-7": "Kariyerinde geçmişte ekip ruhu ve bereket vardı (İmparatoriçe). Şu an iş ortamında lider ve disiplinlisin (İmparator). Yakında yalnız çalışacağın bir süreç seni bekliyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-4-0": "In the past, there was peace and abundance in your relationship (The Empress). Now, you show a serious and stable attitude in your relationship (The Emperor). Soon, a brand new and bold love adventure begins (The Fool).",
  "3-4-1": "Sharing and compassion were prominent in your love’s past (The Empress). Now, trust and discipline are prominent in your relationship (The Emperor). Soon, a period of magical attraction and communication begins (The Magician).",
  "3-4-2": "Abundance and productivity marked your relationship’s past (The Empress). Now, there is determination and authority (The Emperor). Soon, an intuitive bond may strengthen (The High Priestess).",
  "3-4-5": "Peace and sharing stood out in your love’s past (The Empress). Now, there is discipline and determination (The Emperor). Soon, an important love decision may arise (The Lovers).",
  "3-4-6": "There was peace and productivity in your relationship’s past (The Empress). Now, you are strong and stable (The Emperor). The future brings a time when your relationship will grow stronger through every test (Strength).",
  "3-4-7": "Peace and compassion were present in your love’s past (The Empress). Now, there is discipline and responsibility in your relationship (The Emperor). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-4-0": "Abundance and sharing were prominent in your career’s past (The Empress). Now, leadership and discipline are at the forefront at work (The Emperor). Soon, you’ll make an innovative business move (The Fool).",
  "3-4-1": "Productivity and peace were present in your work past (The Empress). Now, you possess authority and trust (The Emperor). Soon, you may achieve magical success in projects (The Magician).",
  "3-4-2": "Team productivity was prominent in your career’s past (The Empress). Now, you are in a managerial position (The Emperor). Soon, you’ll stand out in business with your intuition (The High Priestess).",
  "3-4-5": "Sharing and abundance stood out in your career’s past (The Empress). Now, you make a difference with discipline and authority (The Emperor). Soon, you may face an important business choice (The Lovers).",
  "3-4-6": "You were productive and peaceful in your professional past (The Empress). Now, you are strong and in a managerial position (The Emperor). The future brings a period of overcoming all obstacles and gaining strength (Strength).",
  "3-4-7": "Team spirit and abundance stood out in your career’s past (The Empress). Now, you are a leader and disciplined at work (The Emperor). Soon, a period of working alone awaits (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-5-0": "Geçmişte aşk hayatında önemli bir seçimle karşılaştın (Aşıklar). Şu anda ilişkinde huzur ve verimlilik ön planda (İmparatoriçe). Gelecek ise cesur ve yeni bir aşk başlangıcı getiriyor (Aptal).",
  "3-5-1": "Aşk geçmişinde büyük bir karar verdin (Aşıklar). Şu an ilişkinde huzur ve paylaşım hakim (İmparatoriçe). Yakında büyüleyici bir çekim dönemi başlıyor (Büyücü).",
  "3-5-2": "Geçmişte aşkında ikilem ve seçimler öne çıktı (Aşıklar). Şu anda huzur ve üretkenlik var (İmparatoriçe). Gelecek ise sezgisel ve duygusal bir dönemi getiriyor (Baş Rahibe).",
  "3-5-4": "Aşk hayatının geçmişinde büyük bir karar dönemi vardı (Aşıklar). Şu an ilişkinde huzur ve paylaşım ön planda (İmparatoriçe). Gelecek ise ciddi ve sağlam bir birlikteliğe işaret ediyor (İmparator).",
  "3-5-6": "Geçmişte aşkında önemli bir tercih yaptın (Aşıklar). Şu anda ilişkinde huzur hakim (İmparatoriçe). Gelecek ise aşkınızın güçlenerek sınavlardan başarıyla çıkacağı bir dönem olacak (Güç).",
  "3-5-7": "Aşk geçmişinde kararlar ve duygusal süreçler yaşadın (Aşıklar). Şu anda ilişkinde huzur ve paylaşım var (İmparatoriçe). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-5-0": "Kariyerinde geçmişte önemli bir karar verdin (Aşıklar). Şu anda ekip çalışmasında huzur ve bereket ön planda (İmparatoriçe). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "3-5-1": "İş hayatında geçmişte karar anları yaşadın (Aşıklar). Şu an ekipte paylaşım ve huzur var (İmparatoriçe). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "3-5-2": "Kariyer geçmişinde seçimler ve işbirlikleri vardı (Aşıklar). Şu anda ekip içinde üretkensin (İmparatoriçe). Yakında sezgilerinle öne çıkacağın bir süreç başlıyor (Baş Rahibe).",
  "3-5-4": "Geçmişte işte büyük bir tercih yaptın (Aşıklar). Şu anda huzur ve paylaşım ön planda (İmparatoriçe). Yakında yönetici pozisyonuna gelebilirsin (İmparator).",
  "3-5-6": "Kariyerinde geçmişte önemli kararlar aldın (Aşıklar). Şu anda ekip içinde huzur var (İmparatoriçe). Gelecek ise tüm engelleri aşarak güç kazanacağın bir dönem (Güç).",
  "3-5-7": "İş geçmişinde kararlar ve ortaklıklar vardı (Aşıklar). Şu an ekip içinde huzurlu bir süreçtesin (İmparatoriçe). Yakında yalnız çalışacağın bir dönem başlıyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-5-0": "In the past, you faced an important choice in your love life (The Lovers). Now, peace and productivity are at the forefront in your relationship (The Empress). The future brings a bold and new love beginning (The Fool).",
  "3-5-1": "You made a big decision in your love past (The Lovers). Now, there is peace and sharing (The Empress). Soon, a period of magical attraction begins (The Magician).",
  "3-5-2": "Dilemmas and choices were prominent in your love’s past (The Lovers). Now, there is peace and productivity (The Empress). The future brings a period of intuition and emotion (The High Priestess).",
  "3-5-4": "A period of big decisions marked your love’s past (The Lovers). Now, there is peace and sharing in your relationship (The Empress). The future signals a serious and solid union (The Emperor).",
  "3-5-6": "You made an important preference in your love’s past (The Lovers). Now, peace prevails in your relationship (The Empress). The future brings a time when your love will grow stronger through every test (Strength).",
  "3-5-7": "Your love history included decisions and emotional processes (The Lovers). Now, there is peace and sharing in your relationship (The Empress). Soon, you may go through a period of solitude and reflection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-5-0": "In your career’s past, you made an important decision (The Lovers). Now, peace and abundance in teamwork are at the forefront (The Empress). Soon, you’ll make an innovative business move (The Fool).",
  "3-5-1": "There were decision moments in your professional past (The Lovers). Now, there is sharing and peace in the team (The Empress). Soon, you will achieve magical success in projects (The Magician).",
  "3-5-2": "Choices and partnerships stood out in your career’s past (The Lovers). Now, you are productive in the team (The Empress). Soon, you’ll stand out in business with your intuition (The High Priestess).",
  "3-5-4": "You made a major choice in your professional past (The Lovers). Now, peace and sharing are at the forefront (The Empress). Soon, you may come to a managerial position (The Emperor).",
  "3-5-6": "You made important decisions in your career’s past (The Lovers). Now, there is peace in the team (The Empress). The future brings a period of overcoming all obstacles and gaining strength (Strength).",
  "3-5-7": "Decisions and partnerships were present in your career’s past (The Lovers). Now, there is a peaceful process in the team (The Empress). Soon, you’ll enter a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-6-0": "Geçmişte ilişkinde sabır ve dayanıklılık ön plandaydı (Güç). Şu anda huzurlu ve üretken bir dönemde bulunuyorsun (İmparatoriçe). Gelecek ise cesur ve yeni bir aşk başlangıcı vadediyor (Aptal).",
  "3-6-1": "Aşk hayatının geçmişinde zorlukları aştın (Güç). Şu anda huzurlu ve paylaşımcı bir ilişkidesin (İmparatoriçe). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "3-6-2": "Geçmişte ilişkinde mücadele ve güç vardı (Güç). Şu anda huzur ve duygusal derinlik ön planda (İmparatoriçe). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "3-6-4": "Aşk hayatının geçmişinde güç ve sabır öne çıktı (Güç). Şu an huzurlu ve üretkensin (İmparatoriçe). Gelecek ise ilişkinde ciddi ve sağlam adımlar atılacağına işaret ediyor (İmparator).",
  "3-6-5": "Geçmişte ilişkinde güç ve zorlukların üstesinden geldin (Güç). Şu an huzurlu bir ilişkidesin (İmparatoriçe). Yakında önemli bir aşk kararı gündeme gelebilir (Aşıklar).",
  "3-6-7": "Aşk hayatının geçmişinde güç ve dayanıklılık ön plandaydı (Güç). Şu anda huzur içindesin (İmparatoriçe). Yakında yalnız kalıp aşkı sorgulayacağın bir süreç olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-6-0": "Kariyerinde geçmişte zorlukları sabırla aştın (Güç). Şu anda ekip içinde huzur ve verimlilik hakim (İmparatoriçe). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "3-6-1": "İş hayatının geçmişinde mücadele ve direnç vardı (Güç). Şu anda ekipte paylaşım ve huzur var (İmparatoriçe). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "3-6-2": "Geçmişte işte güç ve sabır ön plandaydı (Güç). Şu an ekip içinde huzurlu ve uyumlusun (İmparatoriçe). Yakında sezgilerinle fark yaratacağın bir süreç başlıyor (Baş Rahibe).",
  "3-6-4": "Kariyerinde geçmişte mücadele ve sabır öne çıktı (Güç). Şu anda ekipte huzur ve verimlilik ön planda (İmparatoriçe). Yakında yönetici rolüne geçebilirsin (İmparator).",
  "3-6-5": "İş geçmişinde zorlukları aştın (Güç). Şu an huzurlu bir ekiptesin (İmparatoriçe). Yakında önemli bir iş seçimiyle karşılaşacaksın (Aşıklar).",
  "3-6-7": "Kariyerinin geçmişinde güç ve dayanıklılık vardı (Güç). Şu anda ekipte huzur var (İmparatoriçe). Yakında yalnız çalışacağın bir dönem geliyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-6-0": "In the past, patience and endurance were at the forefront in your relationship (Strength). Now, you are in a peaceful and productive period (The Empress). The future promises a bold and new love beginning (The Fool).",
  "3-6-1": "You overcame difficulties in your love’s past (Strength). Now, you are in a peaceful and sharing relationship (The Empress). Soon, a period of magical attraction and communication may begin (The Magician).",
  "3-6-2": "Struggle and strength marked your love’s past (Strength). Now, peace and emotional depth are at the forefront (The Empress). The future brings a period where intuitive bonds will strengthen (The High Priestess).",
  "3-6-4": "Strength and patience stood out in your love’s past (Strength). Now, you are peaceful and productive (The Empress). The future signals serious and solid steps in your relationship (The Emperor).",
  "3-6-5": "You overcame struggles and challenges in your relationship’s past (Strength). Now, you are in a peaceful relationship (The Empress). Soon, an important love decision may arise (The Lovers).",
  "3-6-7": "Strength and endurance were prominent in your love’s past (Strength). Now, you are at peace (The Empress). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-6-0": "In your career’s past, you overcame challenges with patience (Strength). Now, there is peace and productivity in your team (The Empress). Soon, an innovative business move awaits (The Fool).",
  "3-6-1": "There was struggle and resilience in your professional past (Strength). Now, there is sharing and peace in the team (The Empress). Soon, you will achieve magical success in projects (The Magician).",
  "3-6-2": "Strength and patience were prominent in your work past (Strength). Now, you are harmonious and peaceful in the team (The Empress). Soon, your intuition will make a difference (The High Priestess).",
  "3-6-4": "Struggle and patience stood out in your career’s past (Strength). Now, there is peace and productivity in the team (The Empress). Soon, you may move to a managerial role (The Emperor).",
  "3-6-5": "You overcame challenges in your work past (Strength). Now, you are in a peaceful team (The Empress). Soon, you’ll face an important business choice (The Lovers).",
  "3-6-7": "Strength and endurance were at the forefront in your professional past (Strength). Now, there is peace in the team (The Empress). Soon, you will enter a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "3-7-0": "Geçmişte ilişkinde huzur ve paylaşım ön plandaydı (İmparatoriçe). Şu an yalnız kalmaya ve içsel keşfe açıksın (Ermiş). Gelecek ise sana cesur ve yeni bir aşk macerası getirecek (Aptal).",
  "3-7-1": "Aşk geçmişinde huzur ve bereket vardı (İmparatoriçe). Şu anda içsel bir yolculuktasın (Ermiş). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "3-7-2": "Geçmişte ilişkinde huzur ve üretkenlik ön plandaydı (İmparatoriçe). Şu anda yalnız kalıp duygularını sorguluyorsun (Ermiş). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "3-7-4": "Aşk hayatının geçmişinde huzur ve paylaşım vardı (İmparatoriçe). Şu anda içe dönük bir süreçtesin (Ermiş). Gelecek ise ilişkinde ciddi ve sağlam adımlar atılacağına işaret ediyor (İmparator).",
  "3-7-5": "Geçmişte ilişkinde huzur ve bereket ön plandaydı (İmparatoriçe). Şu an yalnızlık ve içsel sorgulama dönemi yaşıyorsun (Ermiş). Yakında önemli bir aşk kararı alabilirsin (Aşıklar).",
  "3-7-6": "Aşk geçmişinde huzur ve üretkenlik vardı (İmparatoriçe). Şu an içsel bir yolculuktasın (Ermiş). Gelecek ise ilişkinde tüm sınavlardan güçlenerek çıkılacağı bir dönemi getiriyor (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "3-7-0": "Kariyerinde geçmişte huzur ve paylaşım vardı (İmparatoriçe). Şu anda yalnız çalışıyor ya da içsel analiz yapıyorsun (Ermiş). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "3-7-1": "İş hayatının geçmişinde verimlilik ve ekip ruhu ön plandaydı (İmparatoriçe). Şu an yalnız başına bir süreçtesin (Ermiş). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "3-7-2": "Geçmişte işte bereket ve ekip uyumu vardı (İmparatoriçe). Şu an yalnız çalışıyorsun (Ermiş). Yakında sezgilerinle fark yaratacağın bir süreç başlayacak (Baş Rahibe).",
  "3-7-4": "Kariyerinde geçmişte huzur ve paylaşım öne çıktı (İmparatoriçe). Şu an içsel bir sorgulama dönemindesin (Ermiş). Yakında yönetici pozisyonuna geçebilirsin (İmparator).",
  "3-7-5": "İş geçmişinde ekip ruhu ve üretkenlik vardı (İmparatoriçe). Şu anda yalnız çalışıyorsun (Ermiş). Yakında önemli bir iş seçimiyle karşılaşacaksın (Aşıklar).",
  "3-7-6": "Kariyerinde geçmişte huzur ve paylaşım vardı (İmparatoriçe). Şu anda yalnız başına büyük sorumluluklar alıyorsun (Ermiş). Yakında tüm engelleri aşarak güçleneceksin (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "3-7-0": "In the past, peace and sharing were present in your relationship (The Empress). Now, you are open to solitude and inner discovery (The Hermit). The future brings you a bold and new love adventure (The Fool).",
  "3-7-1": "Peace and abundance were prominent in your love’s past (The Empress). Now, you are on an inner journey (The Hermit). Soon, a period of magical attraction and communication begins (The Magician).",
  "3-7-2": "Peace and productivity marked your love’s past (The Empress). Now, you are alone and questioning your feelings (The Hermit). The future brings a period where intuitive bonds will strengthen (The High Priestess).",
  "3-7-4": "Peace and sharing stood out in your love’s past (The Empress). Now, you are in a process of introspection (The Hermit). The future signals serious and solid steps in your relationship (The Emperor).",
  "3-7-5": "Peace and abundance were present in your love’s past (The Empress). Now, you are in a period of solitude and introspection (The Hermit). Soon, you may make an important love decision (The Lovers).",
  "3-7-6": "There was peace and productivity in your love’s past (The Empress). Now, you are on an inner journey (The Hermit). The future brings a period when your relationship will grow stronger through every test (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "3-7-0": "Abundance and sharing were prominent in your career’s past (The Empress). Now, you work alone or conduct inner analysis (The Hermit). Soon, you’ll make an innovative business move (The Fool).",
  "3-7-1": "Productivity and team spirit stood out in your professional past (The Empress). Now, you are on your own (The Hermit). Soon, you’ll achieve magical success in projects (The Magician).",
  "3-7-2": "There was abundance and team harmony in your work past (The Empress). Now, you work alone (The Hermit). Soon, your intuition will make a difference (The High Priestess).",
  "3-7-4": "Peace and sharing stood out in your professional past (The Empress). Now, you are in a period of introspection (The Hermit). Soon, you may move into a managerial position (The Emperor).",
  "3-7-5": "Team spirit and productivity were present in your career’s past (The Empress). Now, you work alone (The Hermit). Soon, an important business choice may arise (The Lovers).",
  "3-7-6": "Peace and sharing were present in your career’s past (The Empress). Now, you take on major responsibilities alone (The Hermit). Soon, you’ll grow stronger by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-0-1": "Geçmişte ilişkinde otorite ve disiplin ön plandaydı (İmparator). Şu anda yeni bir aşk macerasına açıksın (Aptal). Gelecek ise partnerinle büyüleyici bir iletişim ve çekimi işaret ediyor (Büyücü).",
  "4-0-2": "Aşk geçmişinde güven ve kararlılık vardı (İmparator). Şu an özgürce aşkı yaşıyorsun (Aptal). Yakında duygusal ve sezgisel bir bağ kurabilirsin (Baş Rahibe).",
  "4-0-3": "Geçmişte ilişkinde disiplin ve güç hakimdi (İmparator). Şu anda aşkı cesurca yaşıyorsun (Aptal). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "4-0-5": "Aşk hayatında geçmişte ciddi adımlar atıldı (İmparator). Şu anda özgürce yeni aşklara açıksın (Aptal). Yakında büyük bir aşk kararıyla karşılaşabilirsin (Aşıklar).",
  "4-0-6": "Geçmişte ilişkinde istikrar ve güç ön plandaydı (İmparator). Şu an aşk hayatında yenilikçi ve cesursun (Aptal). Gelecekte ilişkiniz tüm sınavlardan güçlenerek çıkacak (Güç).",
  "4-0-7": "Aşk geçmişinde disiplin ve sorumluluk vardı (İmparator). Şu anda aşkı özgürce ve maceracı bir ruhla yaşıyorsun (Aptal). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-0-1": "Kariyerinde geçmişte disiplin ve liderlik ön plandaydı (İmparator). Şu anda yeni işlere açıksın (Aptal). Yakında çevrende büyüleyici bir etki yaratabilirsin (Büyücü).",
  "4-0-2": "İş hayatının geçmişinde güven ve istikrar vardı (İmparator). Şu an yenilikçi ve özgür bir süreçtesin (Aptal). Yakında projelerde sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "4-0-3": "Kariyerinde geçmişte otorite ve başarı hakimdi (İmparator). Şu anda yeni projelere açıksın (Aptal). Yakında ekip içinde huzur ve bereket dolu bir dönem başlıyor (İmparatoriçe).",
  "4-0-5": "İş geçmişinde ciddi kararlar ve adımlar vardı (İmparator). Şu an yenilikçi ve maceracı bir ruhlasın (Aptal). Yakında önemli bir iş seçimiyle karşılaşabilirsin (Aşıklar).",
  "4-0-6": "Kariyerinin geçmişinde liderlik ve güç ön plandaydı (İmparator). Şu anda özgür ve yenilikçi davranıyorsun (Aptal). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  "4-0-7": "İş hayatının geçmişinde disiplin ve sorumluluk vardı (İmparator). Şu anda yeni bir başlangıç aşamasındasın (Aptal). Yakında yalnız başına büyük bir sorumluluk üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-0-1": "In the past, authority and discipline were at the forefront in your relationship (The Emperor). Now, you are open to a new love adventure (The Fool). The future signals magical communication and attraction with your partner (The Magician).",
  "4-0-2": "Trust and determination marked your love’s past (The Emperor). Now, you live love freely (The Fool). Soon, you may form an emotional and intuitive bond (The High Priestess).",
  "4-0-3": "Discipline and strength stood out in your relationship’s past (The Emperor). Now, you live love boldly (The Fool). The future brings a relationship full of peace and compassion (The Empress).",
  "4-0-5": "Serious steps were taken in your love’s past (The Emperor). Now, you’re open to new love adventures (The Fool). Soon, you may face a major love decision (The Lovers).",
  "4-0-6": "Stability and strength stood out in your relationship’s past (The Emperor). Now, you are innovative and bold in love (The Fool). The future will make your relationship stronger through every test (Strength).",
  "4-0-7": "Discipline and responsibility were prominent in your love’s past (The Emperor). Now, you live love freely and adventurously (The Fool). Soon, there may be a period of solitude and introspection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-0-1": "Discipline and leadership stood out in your career’s past (The Emperor). Now, you are open to new jobs (The Fool). Soon, you’ll create a magical effect in your environment (The Magician).",
  "4-0-2": "Trust and stability were present in your professional past (The Emperor). Now, you’re innovative and free (The Fool). Soon, your intuition will make a difference in projects (The High Priestess).",
  "4-0-3": "Authority and achievement were prominent in your work past (The Emperor). Now, you are open to new projects (The Fool). Soon, a period of peace and abundance begins in the team (The Empress).",
  "4-0-5": "Serious decisions and steps were present in your career’s past (The Emperor). Now, you are innovative and adventurous (The Fool). Soon, you’ll face an important business choice (The Lovers).",
  "4-0-6": "Leadership and strength stood out in your career’s past (The Emperor). Now, you’re acting freely and innovatively (The Fool). Soon, you’ll gain strength by overcoming all challenges (Strength).",
  "4-0-7": "Discipline and responsibility were prominent in your professional past (The Emperor). Now, you are in a new beginning phase (The Fool). Soon, you may take on a major responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-1-0": "Geçmişte ilişkinde büyüleyici bir çekim ve güçlü iletişim hakimdi (Büyücü). Şu an ilişkinde kararlılık ve ciddiyet ön planda (İmparator). Gelecek ise yeni ve cesur bir aşk başlangıcını müjdeliyor (Aptal).",
  "4-1-2": "Aşk hayatının geçmişinde karşılıklı çekim vardı (Büyücü). Şu anda ilişkinde güven ve istikrar ön planda (İmparator). Yakında sezgisel ve duygusal bir dönem başlayabilir (Baş Rahibe).",
  "4-1-3": "Geçmişte ilişkinde büyü ve çekim hakimdi (Büyücü). Şu an ilişkinde disiplin ve sorumluluk ön planda (İmparator). Gelecek ise huzur ve verimlilik getiriyor (İmparatoriçe).",
  "4-1-5": "Aşk geçmişinde büyüleyici bir iletişim vardı (Büyücü). Şu an ilişkinde kararlılık hakim (İmparator). Yakında önemli bir aşk kararı vereceksin (Aşıklar).",
  "4-1-6": "Geçmişte ilişkinde karşılıklı çekim ve enerji ön plandaydı (Büyücü). Şu an ilişkinde disiplin ve güç var (İmparator). Gelecek ise ilişkinin güçlenerek tüm sınavlardan başarıyla çıkacağı bir dönemi getiriyor (Güç).",
  "4-1-7": "Aşk hayatının geçmişinde büyü ve çekim vardı (Büyücü). Şu anda ilişkinde kararlılık ve sorumluluk hakim (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-1-0": "Kariyerinde geçmişte iletişim ve başarı ön plandaydı (Büyücü). Şu anda liderlik ve disiplin hakim (İmparator). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "4-1-2": "İş hayatında geçmişte projelerde fark yarattın (Büyücü). Şu an iş ortamında otorite ve güven var (İmparator). Yakında projelerde sezgilerinle fark yaratabilirsin (Baş Rahibe).",
  "4-1-3": "Geçmişte işte iletişim ve başarı ön plandaydı (Büyücü). Şu an liderlik ve sorumluluk üstleniyorsun (İmparator). Gelecek ise ekip içinde huzur ve verimlilik getiriyor (İmparatoriçe).",
  "4-1-5": "Kariyerinin geçmişinde projelerde öne çıktın (Büyücü). Şu anda disiplinli bir süreçtesin (İmparator). Yakında önemli bir iş tercihi seni bekliyor (Aşıklar).",
  "4-1-6": "Geçmişte projelerde başarı ve çekim öne çıktı (Büyücü). Şu anda güçlü ve otoriter bir pozisyondasın (İmparator). Gelecek ise tüm engelleri aşarak güç kazanacağın bir dönem (Güç).",
  "4-1-7": "İş hayatında geçmişte projelerde büyüleyici bir etki yarattın (Büyücü). Şu anda lider ve sorumluluk sahibisin (İmparator). Yakında yalnız çalışacağın bir süreç olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-1-0": "In the past, magical attraction and strong communication were present in your relationship (The Magician). Now, determination and seriousness are at the forefront (The Emperor). The future promises a new and bold love beginning (The Fool).",
  "4-1-2": "Mutual attraction marked your love’s past (The Magician). Now, there is trust and stability (The Emperor). Soon, a period of emotional intuition may begin (The High Priestess).",
  "4-1-3": "Magic and attraction were present in your relationship’s past (The Magician). Now, discipline and responsibility are prominent (The Emperor). The future brings peace and productivity (The Empress).",
  "4-1-5": "Magical communication was prominent in your love’s past (The Magician). Now, determination is prominent (The Emperor). Soon, you’ll make an important love decision (The Lovers).",
  "4-1-6": "Mutual attraction and energy stood out in your relationship’s past (The Magician). Now, there is discipline and strength (The Emperor). The future brings a time when your relationship will grow stronger through every test (Strength).",
  "4-1-7": "There was magic and attraction in your love’s past (The Magician). Now, there is determination and responsibility (The Emperor). Soon, there may be a period of solitude and introspection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-1-0": "Communication and achievement were at the forefront in your career’s past (The Magician). Now, leadership and discipline are prominent (The Emperor). Soon, you’ll make an innovative business move (The Fool).",
  "4-1-2": "You made a difference in projects in your work past (The Magician). Now, there is authority and trust at work (The Emperor). Soon, you’ll make a difference in projects with your intuition (The High Priestess).",
  "4-1-3": "Communication and achievement were present in your professional past (The Magician). Now, you are taking on leadership and responsibility (The Emperor). The future brings a period of peace and productivity in the team (The Empress).",
  "4-1-5": "You stood out in projects in your career’s past (The Magician). Now, you are in a disciplined process (The Emperor). Soon, an important business choice awaits (The Lovers).",
  "4-1-6": "Success and attraction stood out in your past projects (The Magician). Now, you are in a strong and authoritative position (The Emperor). The future brings a period where you gain strength by overcoming all challenges (Strength).",
  "4-1-7": "You created a magical effect in projects in your career’s past (The Magician). Now, you are a leader and responsible (The Emperor). Soon, you may enter a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-2-0": "Geçmişte ilişkinde sezgisel bağlar ve duygusal analizler ön plandaydı (Baş Rahibe). Şu anda ilişkinde kararlılık ve ciddiyet hakim (İmparator). Gelecek ise cesur ve yeni bir aşk başlangıcına işaret ediyor (Aptal).",
  "4-2-1": "Aşk geçmişinde derin hisler ve sezgi vardı (Baş Rahibe). Şu an ilişkinde güven ve disiplin var (İmparator). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "4-2-3": "Geçmişte ilişkinde duygusal analizler ön plandaydı (Baş Rahibe). Şu anda ilişkinde otorite ve sorumluluk öne çıktı (İmparator). Gelecek ise huzur ve bereket dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "4-2-5": "Aşk hayatının geçmişinde sezgi ve analiz ön plandaydı (Baş Rahibe). Şu anda ilişkinde kararlılık hakim (İmparator). Yakında önemli bir aşk kararı seni bekliyor (Aşıklar).",
  "4-2-6": "Geçmişte ilişkinde sezgisel kararlar aldın (Baş Rahibe). Şu anda ilişkinde güç ve disiplin var (İmparator). Gelecek ise aşkınız tüm sınavlardan güçlenerek çıkacak (Güç).",
  "4-2-7": "Aşk geçmişinde derin içsel yolculuklar vardı (Baş Rahibe). Şu anda ilişkinde ciddiyet ve sorumluluk hakim (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-2-0": "Kariyerinde geçmişte sezgisel analizler ve dikkat ön plandaydı (Baş Rahibe). Şu anda liderlik ve disiplin ön planda (İmparator). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "4-2-1": "İş hayatında geçmişte analiz ve gözlem hakimdi (Baş Rahibe). Şu an otoriter ve güven verici bir pozisyondasın (İmparator). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "4-2-3": "Geçmişte işte perde arkasında analizciydin (Baş Rahibe). Şu anda yönetici rolündesin (İmparator). Yakında ekip içinde huzur ve bereket var (İmparatoriçe).",
  "4-2-5": "Kariyerinin geçmişinde analiz ve sezgi ön plandaydı (Baş Rahibe). Şu anda işte kararlılık ve disiplinle ilerliyorsun (İmparator). Yakında önemli bir iş seçimi gündeme gelecek (Aşıklar).",
  "4-2-6": "Geçmişte kariyerinde gözlem ve sezgi ön plandaydı (Baş Rahibe). Şu anda liderlik rolündesin (İmparator). Gelecek ise tüm engelleri aşarak güç kazanacağın bir dönem (Güç).",
  "4-2-7": "İş hayatında geçmişte analiz ve sezgi vardı (Baş Rahibe). Şu anda otorite ve sorumluluk sendeyken (İmparator). Yakında yalnız çalışacağın büyük bir proje olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-2-0": "In the past, intuitive bonds and emotional analysis were present in your relationship (The High Priestess). Now, there is determination and seriousness in your relationship (The Emperor). The future signals a bold and new love beginning (The Fool).",
  "4-2-1": "Deep feelings and intuition marked your love’s past (The High Priestess). Now, there is trust and discipline (The Emperor). Soon, a period of magical attraction and communication begins (The Magician).",
  "4-2-3": "Emotional analysis was prominent in your relationship’s past (The High Priestess). Now, authority and responsibility stand out (The Emperor). The future brings a relationship full of peace and abundance (The Empress).",
  "4-2-5": "Intuition and analysis stood out in your love’s past (The High Priestess). Now, there is determination (The Emperor). Soon, an important love decision awaits (The Lovers).",
  "4-2-6": "You made intuitive decisions in your love’s past (The High Priestess). Now, there is strength and discipline (The Emperor). The future will make your love even stronger through every test (Strength).",
  "4-2-7": "There were deep inner journeys in your love’s past (The High Priestess). Now, seriousness and responsibility are prominent (The Emperor). Soon, there may be a period of solitude and introspection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-2-0": "In your career’s past, intuitive analysis and attention were at the forefront (The High Priestess). Now, leadership and discipline are prominent (The Emperor). Soon, you’ll make an innovative business move (The Fool).",
  "4-2-1": "Analysis and observation were present in your professional past (The High Priestess). Now, you are in an authoritative and trustworthy position (The Emperor). Soon, you’ll achieve magical success in projects (The Magician).",
  "4-2-3": "You were an analytical person behind the scenes at work in your career’s past (The High Priestess). Now, you are in a managerial role (The Emperor). Soon, there will be peace and abundance in the team (The Empress).",
  "4-2-5": "Analysis and intuition were prominent in your career’s past (The High Priestess). Now, you advance with determination and discipline (The Emperor). Soon, an important business choice will arise (The Lovers).",
  "4-2-6": "Observation and intuition stood out in your professional past (The High Priestess). Now, you are in a leadership role (The Emperor). The future brings a period of overcoming all obstacles and gaining strength (Strength).",
  "4-2-7": "Analysis and intuition were present in your work past (The High Priestess). Now, you hold authority and responsibility (The Emperor). Soon, you may have a major solo project (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-3-0": "Geçmişte ilişkinde huzur ve verimlilik ön plandaydı (İmparatoriçe). Şu anda ilişkinde kararlılık ve ciddiyet hakim (İmparator). Gelecek ise yeni ve cesur bir aşk yolculuğunu işaret ediyor (Aptal).",
  "4-3-1": "Aşk geçmişinde şefkat ve paylaşım vardı (İmparatoriçe). Şu an ilişkinde otorite ve güven ön planda (İmparator). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "4-3-2": "Geçmişte ilişkinde huzur ve üretkenlik vardı (İmparatoriçe). Şu anda ilişkinde liderlik ve disiplin ön planda (İmparator). Gelecek ise sezgisel bir bağın güçleneceğine işaret ediyor (Baş Rahibe).",
  "4-3-5": "Aşk hayatının geçmişinde huzur ve paylaşım vardı (İmparatoriçe). Şu anda ilişkinde kararlılık hakim (İmparator). Yakında önemli bir aşk kararı seni bekliyor (Aşıklar).",
  "4-3-6": "Geçmişte ilişkinde huzur ve bereket ön plandaydı (İmparatoriçe). Şu an ilişkinde güç ve disiplin ön planda (İmparator). Gelecek ise ilişkinin tüm sınavlardan güçlenerek çıkacağı bir dönemi getiriyor (Güç).",
  "4-3-7": "Aşk geçmişinde şefkat ve bereket vardı (İmparatoriçe). Şu an ilişkinde otorite ve sorumluluk hakim (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-3-0": "Kariyerinde geçmişte huzur ve paylaşım vardı (İmparatoriçe). Şu anda işte liderlik ve disiplin ön planda (İmparator). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "4-3-1": "İş hayatında geçmişte üretkenlik ve huzur vardı (İmparatoriçe). Şu anda otoriter ve güven verici bir pozisyondaydın (İmparator). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "4-3-2": "Geçmişte işte ekip ruhu ve bereket vardı (İmparatoriçe). Şu anda lider ve disiplinli bir süreçtesin (İmparator). Yakında iş ortamında sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "4-3-5": "Kariyerinin geçmişinde ekip uyumu ve huzur ön plandaydı (İmparatoriçe). Şu anda işte disiplin ve otoriteyle ilerliyorsun (İmparator). Yakında önemli bir iş seçimi gündeme gelecek (Aşıklar).",
  "4-3-6": "İş geçmişinde huzur ve üretkenlik vardı (İmparatoriçe). Şu anda güçlü ve yönetici bir konumdasın (İmparator). Gelecek ise tüm engelleri aşarak güç kazanacağın bir dönem (Güç).",
  "4-3-7": "Kariyerinin geçmişinde paylaşım ve bereket vardı (İmparatoriçe). Şu anda otorite ve sorumluluk üstlendin (İmparator). Yakında yalnız çalışacağın bir süreç olabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-3-0": "In the past, peace and productivity were present in your relationship (The Empress). Now, there is determination and seriousness (The Emperor). The future signals a new and bold love journey (The Fool).",
  "4-3-1": "Compassion and sharing marked your love’s past (The Empress). Now, there is authority and trust in your relationship (The Emperor). Soon, a period of magical attraction and communication begins (The Magician).",
  "4-3-2": "Peace and productivity were present in your love’s past (The Empress). Now, leadership and discipline are at the forefront (The Emperor). The future brings a time when an intuitive bond will grow stronger (The High Priestess).",
  "4-3-5": "Peace and sharing stood out in your love’s past (The Empress). Now, there is determination (The Emperor). Soon, an important love decision awaits (The Lovers).",
  "4-3-6": "Peace and abundance were present in your love’s past (The Empress). Now, there is strength and discipline (The Emperor). The future brings a time when your relationship will grow stronger through every test (Strength).",
  "4-3-7": "Compassion and abundance marked your love’s past (The Empress). Now, authority and responsibility are prominent (The Emperor). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-3-0": "In your career’s past, there was peace and sharing (The Empress). Now, leadership and discipline are prominent at work (The Emperor). Soon, you’ll make an innovative business move (The Fool).",
  "4-3-1": "Productivity and peace were present in your professional past (The Empress). Now, you are in an authoritative and trustworthy position (The Emperor). Soon, you’ll achieve magical success in projects (The Magician).",
  "4-3-2": "Team spirit and abundance marked your career’s past (The Empress). Now, you are a leader and disciplined (The Emperor). Soon, you’ll make a difference in business with your intuition (The High Priestess).",
  "4-3-5": "Team harmony and peace stood out in your career’s past (The Empress). Now, you advance with discipline and authority (The Emperor). Soon, an important business choice will arise (The Lovers).",
  "4-3-6": "There was peace and productivity in your professional past (The Empress). Now, you are strong and in a managerial position (The Emperor). The future brings a period of overcoming all obstacles and gaining strength (Strength).",
  "4-3-7": "Sharing and abundance were present in your career’s past (The Empress). Now, you hold authority and responsibility (The Emperor). Soon, you may enter a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-5-0": "Geçmişte ilişkinde büyük bir seçim veya ikilem yaşadın (Aşıklar). Şu anda ilişkinde kararlılık ve ciddiyet ön planda (İmparator). Gelecek ise yeni ve cesur bir aşk yolculuğu getiriyor (Aptal).",
  "4-5-1": "Aşk hayatının geçmişinde önemli bir karar verdin (Aşıklar). Şu an ilişkinde disiplin ve otorite var (İmparator). Yakında büyüleyici bir çekim ve iletişim dönemi başlayabilir (Büyücü).",
  "4-5-2": "Geçmişte ilişkinde seçimler ve derin hisler vardı (Aşıklar). Şu anda ilişkinde güven ve ciddiyet hakim (İmparator). Gelecek ise sezgisel ve duygusal bir sürece işaret ediyor (Baş Rahibe).",
  "4-5-3": "Aşk geçmişinde büyük kararlar vardı (Aşıklar). Şu anda ilişkinde otorite ve kararlılık hakim (İmparator). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "4-5-6": "Geçmişte ilişkinde büyük bir tercih yaptın (Aşıklar). Şu an ilişkinde güç ve disiplin var (İmparator). Gelecek ise aşkınızın tüm sınavlardan güçlenerek çıkacağı bir dönemi gösteriyor (Güç).",
  "4-5-7": "Aşk geçmişinde önemli kararlar ve içsel sorgulamalar vardı (Aşıklar). Şu anda ilişkinde kararlılık hakim (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-5-0": "Kariyerinde geçmişte önemli bir seçim yaptın (Aşıklar). Şu anda liderlik ve disiplin ön planda (İmparator). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "4-5-1": "İş hayatının geçmişinde kararlar ve iş ortaklıkları vardı (Aşıklar). Şu anda güçlü ve otoriter bir pozisyondasın (İmparator). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "4-5-2": "Kariyerinin geçmişinde seçimler ve analizler ön plandaydı (Aşıklar). Şu an disiplinli bir süreçtesin (İmparator). Yakında sezgilerinle fark yaratacağın bir dönem başlıyor (Baş Rahibe).",
  "4-5-3": "Geçmişte işte kararlar ve ortaklıklar vardı (Aşıklar). Şu an lider ve kararlı bir süreçtesin (İmparator). Yakında işte huzur ve bereket dönemi başlıyor (İmparatoriçe).",
  "4-5-6": "İş geçmişinde önemli seçimler yaptın (Aşıklar). Şu an iş ortamında güç ve otorite hakim (İmparator). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  "4-5-7": "Kariyerinin geçmişinde kararlar ve sorgulamalar vardı (Aşıklar). Şu anda liderlik ve disiplinle ilerliyorsun (İmparator). Yakında yalnız başına büyük bir proje üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-5-0": "In the past, you faced a big choice or dilemma in your relationship (The Lovers). Now, there is determination and seriousness (The Emperor). The future brings a new and bold love journey (The Fool).",
  "4-5-1": "You made an important decision in your love’s past (The Lovers). Now, there is discipline and authority (The Emperor). Soon, a period of magical attraction and communication may begin (The Magician).",
  "4-5-2": "Choices and deep feelings marked your relationship’s past (The Lovers). Now, there is trust and seriousness (The Emperor). The future signals an intuitive and emotional period (The High Priestess).",
  "4-5-3": "There were big decisions in your love’s past (The Lovers). Now, there is authority and determination (The Emperor). The future brings a relationship full of peace and compassion (The Empress).",
  "4-5-6": "You made a big preference in your relationship’s past (The Lovers). Now, there is strength and discipline (The Emperor). The future brings a period when your love will grow stronger through every test (Strength).",
  "4-5-7": "Your love history included important decisions and inner questioning (The Lovers). Now, determination is prominent (The Emperor). Soon, there may be a period of solitude and introspection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-5-0": "In your career’s past, you made an important choice (The Lovers). Now, leadership and discipline are prominent (The Emperor). Soon, an innovative business move awaits (The Fool).",
  "4-5-1": "There were decisions and business partnerships in your professional past (The Lovers). Now, you are in a strong and authoritative position (The Emperor). Soon, you’ll achieve magical success in projects (The Magician).",
  "4-5-2": "Choices and analysis were at the forefront in your career’s past (The Lovers). Now, you’re in a disciplined process (The Emperor). Soon, your intuition will make a difference (The High Priestess).",
  "4-5-3": "There were decisions and partnerships in your work past (The Lovers). Now, you are in a determined and leading process (The Emperor). Soon, a period of peace and abundance begins at work (The Empress).",
  "4-5-6": "You made important choices in your career’s past (The Lovers). Now, strength and authority are prominent at work (The Emperor). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  "4-5-7": "There were decisions and questioning in your professional past (The Lovers). Now, you are advancing with leadership and discipline (The Emperor). Soon, you may take on a major project alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-6-0": "Geçmişte ilişkinde güç ve sabır ön plandaydı (Güç). Şu anda ilişkinde disiplin ve ciddiyet hakim (İmparator). Gelecek ise cesur bir aşk başlangıcı getiriyor (Aptal).",
  "4-6-1": "Aşk hayatının geçmişinde zorluklara rağmen ayakta kaldın (Güç). Şu anda ilişkinde kararlılık ve otorite ön planda (İmparator). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "4-6-2": "Geçmişte ilişkinde mücadele ve sabır vardı (Güç). Şu anda ilişkinde güven ve disiplin hakim (İmparator). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "4-6-3": "Aşk geçmişinde güç ve dayanıklılık ön plandaydı (Güç). Şu anda ilişkinde kararlılık ve liderlik hakim (İmparator). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "4-6-5": "Geçmişte ilişkinde güç ve zorluklar vardı (Güç). Şu an ilişkinde kararlılık ve disiplin ön planda (İmparator). Yakında önemli bir aşk kararı alabilirsin (Aşıklar).",
  "4-6-7": "Aşk hayatında geçmişte mücadele ve güç vardı (Güç). Şu anda ilişkinde disiplin ve sorumluluk hakim (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-6-0": "Kariyerinde geçmişte zorlukları güç ve sabırla aştın (Güç). Şu anda liderlik ve disiplin ön planda (İmparator). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "4-6-1": "İş hayatının geçmişinde mücadele ve dayanıklılık vardı (Güç). Şu anda otorite ve kararlılık hakim (İmparator). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "4-6-2": "Geçmişte işte güç ve sabır öne çıktı (Güç). Şu anda disiplinli ve güven verici bir konumdasın (İmparator). Yakında sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "4-6-3": "Kariyerinde geçmişte dayanıklılık ve güç vardı (Güç). Şu anda liderlik ve otorite ön planda (İmparator). Gelecek ise huzur ve bereket dönemi başlatıyor (İmparatoriçe).",
  "4-6-5": "İş geçmişinde mücadele ve zorluklar vardı (Güç). Şu an liderlik ve kararlılıkla ilerliyorsun (İmparator). Yakında önemli bir iş tercihiyle karşılaşacaksın (Aşıklar).",
  "4-6-7": "Kariyerinde geçmişte güç ve mücadele vardı (Güç). Şu anda disiplin ve sorumluluk sendeyken (İmparator). Yakında yalnız başına önemli bir sorumluluk alabilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-6-0": "In the past, strength and patience were at the forefront in your relationship (Strength). Now, there is discipline and seriousness (The Emperor). The future brings a bold new love beginning (The Fool).",
  "4-6-1": "Despite challenges, you stood tall in your love’s past (Strength). Now, there is determination and authority (The Emperor). Soon, a period of magical attraction and communication begins (The Magician).",
  "4-6-2": "Struggle and patience marked your relationship’s past (Strength). Now, there is trust and discipline (The Emperor). The future brings a period where intuitive bonds will strengthen (The High Priestess).",
  "4-6-3": "Strength and endurance were prominent in your love’s past (Strength). Now, there is determination and leadership (The Emperor). The future brings a relationship full of peace and compassion (The Empress).",
  "4-6-5": "There was strength and hardship in your relationship’s past (Strength). Now, determination and discipline are at the forefront (The Emperor). Soon, you may make an important love decision (The Lovers).",
  "4-6-7": "Struggle and strength were present in your love’s past (Strength). Now, there is discipline and responsibility (The Emperor). Soon, there may be a period of solitude and introspection in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-6-0": "In your career’s past, you overcame challenges with strength and patience (Strength). Now, leadership and discipline are prominent (The Emperor). Soon, an innovative business move awaits (The Fool).",
  "4-6-1": "There was struggle and resilience in your professional past (Strength). Now, authority and determination are prominent (The Emperor). Soon, you will achieve magical success in projects (The Magician).",
  "4-6-2": "Strength and patience stood out in your work past (Strength). Now, you are in a disciplined and trustworthy position (The Emperor). Soon, your intuition will make a difference (The High Priestess).",
  "4-6-3": "Endurance and strength were present in your career’s past (Strength). Now, leadership and authority are prominent (The Emperor). The future brings a period of peace and abundance (The Empress).",
  "4-6-5": "There were struggles and challenges in your career’s past (Strength). Now, you advance with leadership and determination (The Emperor). Soon, you’ll face an important business choice (The Lovers).",
  "4-6-7": "There was strength and struggle in your professional past (Strength). Now, discipline and responsibility are yours (The Emperor). Soon, you may take on a major responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "4-7-0": "Geçmişte ilişkinde otorite ve disiplin öne çıktı (İmparator). Şu anda yalnızlık ve içsel sorgulama sürecindesin (Ermiş). Gelecek ise yeni ve cesur bir aşk başlangıcını işaret ediyor (Aptal).",
  "4-7-1": "Aşk hayatının geçmişinde kararlılık ve sorumluluk vardı (İmparator). Şu anda içsel bir yolculuktasın (Ermiş). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "4-7-2": "Geçmişte ilişkinde disiplin ve ciddiyet ön plandaydı (İmparator). Şu anda yalnız kalıp aşkı sorguluyorsun (Ermiş). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "4-7-3": "Aşk geçmişinde liderlik ve kararlılık öne çıktı (İmparator). Şu anda yalnızlık ve içsel sorgulama sürecindesin (Ermiş). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "4-7-5": "Geçmişte ilişkinde disiplin ve sorumluluk ön plandaydı (İmparator). Şu anda yalnızlık ve içsel değerlendirme sürecindesin (Ermiş). Yakında önemli bir aşk kararı verebilirsin (Aşıklar).",
  "4-7-6": "Aşk geçmişinde kararlılık ve güç vardı (İmparator). Şu anda yalnız başına bir süreçtesin (Ermiş). Gelecek ise ilişkinde tüm sınavlardan güçlenerek çıkacağın bir dönemi getiriyor (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "4-7-0": "Kariyerinde geçmişte liderlik ve disiplin ön plandaydı (İmparator). Şu anda yalnız başına çalışıyorsun veya içsel analiz yapıyorsun (Ermiş). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "4-7-1": "İş hayatının geçmişinde otorite ve sorumluluk öne çıktı (İmparator). Şu anda yalnız çalışıyorsun (Ermiş). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "4-7-2": "Geçmişte işte disiplin ve kararlılık ön plandaydı (İmparator). Şu anda yalnız başına bir analiz sürecindesin (Ermiş). Yakında sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "4-7-3": "Kariyerinin geçmişinde liderlik ve disiplin vardı (İmparator). Şu anda yalnız çalışıyorsun (Ermiş). Yakında ekip içinde huzur ve bereket dolu bir dönem başlıyor (İmparatoriçe).",
  "4-7-5": "İş geçmişinde otorite ve sorumluluk öne çıktı (İmparator). Şu anda yalnız başına bir süreçtesin (Ermiş). Yakında önemli bir iş kararı vereceksin (Aşıklar).",
  "4-7-6": "Kariyerinde geçmişte disiplin ve güç vardı (İmparator). Şu anda yalnız çalışıyorsun (Ermiş). Gelecek ise tüm engelleri aşarak güçleneceğin bir dönem getiriyor (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "4-7-0": "In the past, authority and discipline were prominent in your relationship (The Emperor). Now, you are in a period of solitude and introspection (The Hermit). The future signals a new and bold love beginning (The Fool).",
  "4-7-1": "Determination and responsibility marked your love’s past (The Emperor). Now, you are on an inner journey (The Hermit). Soon, a period of magical attraction and communication begins (The Magician).",
  "4-7-2": "Discipline and seriousness were prominent in your relationship’s past (The Emperor). Now, you are alone and questioning love (The Hermit). The future brings a period when intuitive bonds will strengthen (The High Priestess).",
  "4-7-3": "Leadership and determination stood out in your love’s past (The Emperor). Now, you are in solitude and introspection (The Hermit). The future brings a relationship full of peace and compassion (The Empress).",
  "4-7-5": "Discipline and responsibility were at the forefront in your relationship’s past (The Emperor). Now, you are in a period of solitude and evaluation (The Hermit). Soon, you may make an important love decision (The Lovers).",
  "4-7-6": "Determination and strength marked your love’s past (The Emperor). Now, you are alone in a process (The Hermit). The future brings a period when your relationship will grow stronger through every test (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "4-7-0": "Leadership and discipline were prominent in your career’s past (The Emperor). Now, you are working alone or conducting inner analysis (The Hermit). Soon, you’ll make an innovative business move (The Fool).",
  "4-7-1": "Authority and responsibility stood out in your professional past (The Emperor). Now, you are working alone (The Hermit). Soon, you’ll achieve magical success in projects (The Magician).",
  "4-7-2": "Discipline and determination were prominent in your work past (The Emperor). Now, you are alone in a period of analysis (The Hermit). Soon, your intuition will make a big difference (The High Priestess).",
  "4-7-3": "Leadership and discipline were present in your career’s past (The Emperor). Now, you are working alone (The Hermit). Soon, a period of peace and abundance begins in the team (The Empress).",
  "4-7-5": "Authority and responsibility were present in your work past (The Emperor). Now, you are in a solo process (The Hermit). Soon, you’ll make an important business decision (The Lovers).",
  "4-7-6": "Discipline and strength marked your career’s past (The Emperor). Now, you are working alone (The Hermit). The future brings a period where you’ll grow stronger by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-0-1": "Geçmişte aşk hayatında önemli bir aşk kararı verdin (Aşıklar). Şu anda aşkı özgürce ve yeni başlangıçlarla yaşıyorsun (Aptal). Gelecek ise büyüleyici bir çekim ve iletişim dönemi vadediyor (Büyücü).",
  "5-0-2": "Aşk geçmişinde önemli bir tercih vardı (Aşıklar). Şu anda aşkı maceracı bir ruhla yaşıyorsun (Aptal). Yakında sezgisel bir bağ güçlenebilir (Baş Rahibe).",
  "5-0-3": "Geçmişte ilişkinde kararlar ve tercihler hakimdi (Aşıklar). Şu anda aşkı cesurca yaşıyorsun (Aptal). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "5-0-4": "Aşk hayatında geçmişte büyük bir aşk kararı vardı (Aşıklar). Şu an ilişkinde yeni bir macera dönemindesin (Aptal). Yakında ilişkinde ciddi ve sağlam bir dönem başlıyor (İmparator).",
  "5-0-6": "Geçmişte aşkında seçimler ve zorluklar yaşadın (Aşıklar). Şu an aşkı özgürce ve heyecanla yaşıyorsun (Aptal). Gelecek ise ilişkiniz tüm sınavlardan güçlenerek çıkacak (Güç).",
  "5-0-7": "Aşk geçmişinde önemli bir karar verdin (Aşıklar). Şu anda özgürce yeni aşklara açıksın (Aptal). Yakında yalnızlık ve içsel sorgulama dönemi başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-0-1": "Kariyerinde geçmişte önemli bir iş tercihi yaptın (Aşıklar). Şu anda yeni işlere açıksın (Aptal). Yakında projelerde büyüleyici bir başarı elde edebilirsin (Büyücü).",
  "5-0-2": "İş hayatının geçmişinde kararlar ve seçimler vardı (Aşıklar). Şu an yenilikçi ve maceracı bir ruhlasın (Aptal). Yakında sezgilerinle büyük bir iş başarısı elde edeceksin (Baş Rahibe).",
  "5-0-3": "Geçmişte işte önemli kararlar aldın (Aşıklar). Şu anda yeni projelere açıksın (Aptal). Yakında ekipte huzur ve paylaşım artacak (İmparatoriçe).",
  "5-0-4": "Kariyerinin geçmişinde önemli tercihler ve değişimler vardı (Aşıklar). Şu an yeni bir iş macerasındasın (Aptal). Yakında liderliğin ön plana çıkacak (İmparator).",
  "5-0-6": "İş hayatının geçmişinde seçimler ve zorluklar yaşadın (Aşıklar). Şu anda özgürce hareket ediyorsun (Aptal). Gelecek ise tüm engelleri aşarak güç kazanacağın bir dönem (Güç).",
  "5-0-7": "Geçmişte işte kararlar ve tercihler öne çıktı (Aşıklar). Şu anda yenilikçi bir süreçtesin (Aptal). Yakında yalnız çalışacağın bir dönem başlıyor (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-0-1": "In the past, you made an important love decision (The Lovers). Now, you live love freely and with new beginnings (The Fool). The future promises a period of magical attraction and communication (The Magician).",
  "5-0-2": "An important preference marked your love’s past (The Lovers). Now, you live love with an adventurous spirit (The Fool). Soon, an intuitive bond may strengthen (The High Priestess).",
  "5-0-3": "Decisions and preferences were prominent in your relationship’s past (The Lovers). Now, you live love boldly (The Fool). The future brings a relationship full of peace and compassion (The Empress).",
  "5-0-4": "There was a major love decision in your love’s past (The Lovers). Now, you’re in a new adventure period (The Fool). Soon, a serious and solid period begins in your relationship (The Emperor).",
  "5-0-6": "You experienced choices and challenges in your love’s past (The Lovers). Now, you live love freely and with excitement (The Fool). The future will make your relationship stronger through every test (Strength).",
  "5-0-7": "You made an important decision in your love’s past (The Lovers). Now, you’re open to new loves (The Fool). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-0-1": "In your career’s past, you made an important work choice (The Lovers). Now, you are open to new jobs (The Fool). Soon, you’ll achieve magical success in projects (The Magician).",
  "5-0-2": "There were decisions and choices in your professional past (The Lovers). Now, you’re innovative and adventurous (The Fool). Soon, your intuition will bring a great business success (The High Priestess).",
  "5-0-3": "There were major decisions in your work past (The Lovers). Now, you are open to new projects (The Fool). Soon, peace and sharing will increase in the team (The Empress).",
  "5-0-4": "Major choices and changes were present in your career’s past (The Lovers). Now, you are on a new business adventure (The Fool). Soon, your leadership will come to the fore (The Emperor).",
  "5-0-6": "You experienced choices and difficulties in your career’s past (The Lovers). Now, you are acting freely (The Fool). The future brings a period of overcoming all obstacles and gaining strength (Strength).",
  "5-0-7": "Decisions and preferences were at the forefront in your work past (The Lovers). Now, you are in an innovative process (The Fool). Soon, you will enter a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-1-0": "Geçmişte ilişkinde önemli bir karar verdin (Aşıklar). Şu anda büyülü bir çekim ve iletişim sürecindesin (Büyücü). Gelecek ise aşkı özgürce ve yeni bir gözle yaşamanı sağlayacak (Aptal).",
  "5-1-2": "Aşk geçmişinde seçimler ve iletişim vardı (Aşıklar). Şu an büyüleyici bir çekim içindesin (Büyücü). Yakında ilişkinde sezgisel bir bağ güçlenecek (Baş Rahibe).",
  "5-1-3": "Geçmişte ilişkinde kararlar ve iletişim ön plandaydı (Aşıklar). Şu anda büyüleyici bir iletişim süreci yaşıyorsun (Büyücü). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "5-1-4": "Aşk hayatının geçmişinde önemli bir seçim yaptın (Aşıklar). Şu an büyüleyici bir iletişim içindesin (Büyücü). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "5-1-6": "Geçmişte ilişkinde kararlar ve büyülü çekim vardı (Aşıklar). Şu anda büyüleyici bir etki altındasın (Büyücü). Gelecek ise ilişkinizin tüm sınavlardan güçlenerek çıkacağını gösteriyor (Güç).",
  "5-1-7": "Aşk geçmişinde kararlar ve iletişim ön plandaydı (Aşıklar). Şu anda büyülü bir çekimdesin (Büyücü). Yakında yalnızlık ve içsel sorgulama dönemi başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-1-0": "Kariyerinde geçmişte önemli bir seçim yaptın (Aşıklar). Şu anda projelerde büyüleyici bir başarı elde ediyorsun (Büyücü). Yakında yenilikçi bir iş başlangıcı seni bekliyor (Aptal).",
  "5-1-2": "İş hayatının geçmişinde kararlar ve iletişim vardı (Aşıklar). Şu anda projelerde büyüleyici bir süreçtesin (Büyücü). Yakında sezgilerinle büyük bir başarı elde edeceksin (Baş Rahibe).",
  "5-1-3": "Geçmişte işte önemli kararlar ve iletişim ön plandaydı (Aşıklar). Şu an projelerde büyüleyici bir başarı yakaladın (Büyücü). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "5-1-4": "Kariyerinin geçmişinde önemli kararlar vardı (Aşıklar). Şu anda projelerde büyüleyici bir süreçtesin (Büyücü). Yakında liderliğin öne çıkacak (İmparator).",
  "5-1-6": "İş geçmişinde kararlar ve projelerde büyü vardı (Aşıklar). Şu anda büyüleyici ve başarılı bir sürecin var (Büyücü). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  "5-1-7": "Kariyerinin geçmişinde önemli kararlar vardı (Aşıklar). Şu an projelerde büyüleyici bir süreçtesin (Büyücü). Yakında yalnız çalışacağın bir süreç başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-1-0": "In the past, you made an important decision in your relationship (The Lovers). Now, you’re in a process of magical attraction and communication (The Magician). The future lets you experience love freely and from a new perspective (The Fool).",
  "5-1-2": "Choices and communication were present in your love’s past (The Lovers). Now, you’re in a process of magical attraction (The Magician). Soon, intuitive bonds will strengthen in your relationship (The High Priestess).",
  "5-1-3": "Decisions and communication were prominent in your relationship’s past (The Lovers). Now, you are experiencing magical communication (The Magician). The future brings a relationship full of peace and compassion (The Empress).",
  "5-1-4": "You made an important choice in your love’s past (The Lovers). Now, there is magical communication (The Magician). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "5-1-6": "There were choices and magical attraction in your relationship’s past (The Lovers). Now, you are under a magical effect (The Magician). The future brings a period when your relationship will grow stronger through every test (Strength).",
  "5-1-7": "Decisions and communication were prominent in your love’s past (The Lovers). Now, there is magical attraction (The Magician). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-1-0": "In your career’s past, you made an important choice (The Lovers). Now, you’re achieving magical success in projects (The Magician). Soon, an innovative work beginning awaits (The Fool).",
  "5-1-2": "Choices and communication were present in your work past (The Lovers). Now, you’re in a magical process in projects (The Magician). Soon, your intuition will bring great success (The High Priestess).",
  "5-1-3": "Important decisions and communication were present in your professional past (The Lovers). Now, you have achieved magical success in projects (The Magician). Soon, peace and abundance will increase in the team (The Empress).",
  "5-1-4": "Important decisions were present in your career’s past (The Lovers). Now, you’re in a magical process in projects (The Magician). Soon, your leadership will stand out (The Emperor).",
  "5-1-6": "There were choices and magic in your work past (The Lovers). Now, you’re in a magical and successful process (The Magician). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  "5-1-7": "Important decisions were present in your career’s past (The Lovers). Now, you’re in a magical process in projects (The Magician). Soon, you may start a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-2-0": "Geçmişte aşk hayatında sezgi ve analiz ön plandaydı (Baş Rahibe). Şu anda önemli bir karar aşamasındasın (Aşıklar). Gelecek ise cesur ve yeni bir aşk başlangıcı getiriyor (Aptal).",
  "5-2-1": "Aşk geçmişinde iç dünyana önem verdin (Baş Rahibe). Şu anda ilişkinde büyük bir karar sürecindesin (Aşıklar). Yakında büyüleyici bir çekim ve iletişim dönemi başlayabilir (Büyücü).",
  "5-2-3": "Geçmişte ilişkinde sezgi ve analiz ön plandaydı (Baş Rahibe). Şu anda ilişkinde önemli bir karar arifesindesin (Aşıklar). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "5-2-4": "Aşk hayatının geçmişinde sezgisel bağlar vardı (Baş Rahibe). Şu an ilişkinde büyük bir seçim yapmak üzeresin (Aşıklar). Yakında ciddi ve sağlam bir süreç başlayacak (İmparator).",
  "5-2-6": "Geçmişte ilişkinde içsel analiz ve sezgi ön plandaydı (Baş Rahibe). Şu anda ilişkinde önemli bir karar sürecindesin (Aşıklar). Gelecek ise aşkınız tüm sınavlardan güçlenerek çıkacak (Güç).",
  "5-2-7": "Aşk geçmişinde sezgisel bağlar ve analizler vardı (Baş Rahibe). Şu an ilişkinde bir seçim yapmak üzeresin (Aşıklar). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-2-0": "Kariyerinde geçmişte analiz ve sezgi ön plandaydı (Baş Rahibe). Şu anda önemli bir iş tercihi arifesindesin (Aşıklar). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "5-2-1": "İş geçmişinde içsel analiz ve gözlem öne çıktı (Baş Rahibe). Şu an kariyerinde önemli bir seçim noktasındasın (Aşıklar). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "5-2-3": "Geçmişte işte analiz ve sezgi ön plandaydı (Baş Rahibe). Şu an önemli bir karar verme sürecindesin (Aşıklar). Yakında ekipte huzur ve paylaşım artacak (İmparatoriçe).",
  "5-2-4": "Kariyerinin geçmişinde perde arkasında gözlemciydin (Baş Rahibe). Şu an iş hayatında önemli bir seçim yapmak üzeresin (Aşıklar). Yakında liderliğin ön plana çıkacak (İmparator).",
  "5-2-6": "İş geçmişinde analiz ve sezgi önemliydi (Baş Rahibe). Şu an önemli bir karar arifesindesin (Aşıklar). Yakında tüm engelleri aşarak güçleneceksin (Güç).",
  "5-2-7": "Kariyerinin geçmişinde analiz ve gözlem vardı (Baş Rahibe). Şu anda önemli bir seçim yapmak üzeresin (Aşıklar). Yakında yalnız başına büyük bir sorumluluk üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-2-0": "In the past, intuition and analysis were prominent in your love life (The High Priestess). Now, you are at a critical decision stage (The Lovers). The future brings a bold and new love beginning (The Fool).",
  "5-2-1": "You valued your inner world in your love’s past (The High Priestess). Now, you are in a great decision process (The Lovers). Soon, a period of magical attraction and communication begins (The Magician).",
  "5-2-3": "Intuition and analysis were prominent in your relationship’s past (The High Priestess). Now, you are at the verge of an important decision (The Lovers). The future brings a relationship full of peace and compassion (The Empress).",
  "5-2-4": "Intuitive bonds were present in your love’s past (The High Priestess). Now, you are about to make a big choice (The Lovers). Soon, a serious and solid period will begin (The Emperor).",
  "5-2-6": "Inner analysis and intuition stood out in your love’s past (The High Priestess). Now, you are in a critical decision stage (The Lovers). The future brings a time when your love will grow stronger through every test (Strength).",
  "5-2-7": "Intuitive bonds and analysis were present in your love’s past (The High Priestess). Now, you are about to make a choice (The Lovers). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-2-0": "In your career’s past, analysis and intuition were at the forefront (The High Priestess). Now, you are on the verge of an important business choice (The Lovers). Soon, you’ll make an innovative business move (The Fool).",
  "5-2-1": "Inner analysis and observation stood out in your professional past (The High Priestess). Now, you are at an important decision point in your career (The Lovers). Soon, you’ll achieve magical success in projects (The Magician).",
  "5-2-3": "Analysis and intuition were prominent in your work past (The High Priestess). Now, you are in an important decision process (The Lovers). Soon, peace and sharing will increase in the team (The Empress).",
  "5-2-4": "You were an observer behind the scenes in your career’s past (The High Priestess). Now, you are about to make a big choice at work (The Lovers). Soon, your leadership will come to the fore (The Emperor).",
  "5-2-6": "Analysis and intuition were important in your professional past (The High Priestess). Now, you are at a critical decision point (The Lovers). Soon, you’ll grow stronger by overcoming all obstacles (Strength).",
  "5-2-7": "Analysis and observation were present in your career’s past (The High Priestess). Now, you are about to make an important choice (The Lovers). Soon, you may take on a big responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-3-0": "Geçmişte ilişkinde huzur ve şefkat ön plandaydı (İmparatoriçe). Şu anda önemli bir karar arifesindesin (Aşıklar). Gelecek ise cesur ve yeni bir aşk başlangıcı getiriyor (Aptal).",
  "5-3-1": "Aşk hayatının geçmişinde paylaşım ve bereket vardı (İmparatoriçe). Şu anda büyük bir aşk kararı almak üzeresin (Aşıklar). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "5-3-2": "Geçmişte ilişkinde huzur ve üretkenlik ön plandaydı (İmparatoriçe). Şu anda ilişkinde önemli bir tercih noktasındasın (Aşıklar). Gelecek ise sezgisel ve duygusal bir dönemi getiriyor (Baş Rahibe).",
  "5-3-4": "Aşk geçmişinde huzur ve şefkat vardı (İmparatoriçe). Şu an ilişkinde önemli bir karar arifesindesin (Aşıklar). Yakında ilişkinde ciddi ve sağlam bir dönem başlıyor (İmparator).",
  "5-3-6": "Geçmişte ilişkinde huzur ve verimlilik ön plandaydı (İmparatoriçe). Şu anda önemli bir seçim yapmak üzeresin (Aşıklar). Gelecek ise ilişkinizin tüm sınavlardan güçlenerek çıkacağı bir dönemi getiriyor (Güç).",
  "5-3-7": "Aşk geçmişinde huzur ve bereket vardı (İmparatoriçe). Şu anda önemli bir karar arifesindesin (Aşıklar). Yakında yalnız kalıp aşkı sorgulayacağın bir süreç başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-3-0": "Kariyerinde geçmişte huzur ve üretkenlik ön plandaydı (İmparatoriçe). Şu anda önemli bir iş tercihi arifesindesin (Aşıklar). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "5-3-1": "İş hayatının geçmişinde paylaşım ve bereket vardı (İmparatoriçe). Şu an önemli bir iş kararı arifesindesin (Aşıklar). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "5-3-2": "Geçmişte işte ekip uyumu ve üretkenlik vardı (İmparatoriçe). Şu an kariyerinde önemli bir seçim noktasındasın (Aşıklar). Yakında sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "5-3-4": "Kariyerinin geçmişinde huzur ve paylaşım vardı (İmparatoriçe). Şu anda önemli bir karar sürecindesin (Aşıklar). Yakında liderliğin ön plana çıkacak (İmparator).",
  "5-3-6": "İş geçmişinde huzur ve ekip uyumu vardı (İmparatoriçe). Şu an önemli bir iş tercihi arifesindesin (Aşıklar). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  "5-3-7": "Kariyerinin geçmişinde huzur ve verimlilik vardı (İmparatoriçe). Şu anda önemli bir karar arifesindesin (Aşıklar). Yakında yalnız başına büyük bir proje üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-3-0": "In the past, peace and compassion were prominent in your relationship (The Empress). Now, you are on the verge of an important decision (The Lovers). The future brings a bold and new love beginning (The Fool).",
  "5-3-1": "Sharing and abundance were present in your love’s past (The Empress). Now, you are about to make a big love decision (The Lovers). Soon, a period of magical attraction and communication may begin (The Magician).",
  "5-3-2": "Peace and productivity were at the forefront in your love’s past (The Empress). Now, you are at an important choice point (The Lovers). The future brings an intuitive and emotional period (The High Priestess).",
  "5-3-4": "Peace and compassion marked your love’s past (The Empress). Now, you are on the verge of an important decision (The Lovers). Soon, a serious and solid period begins in your relationship (The Emperor).",
  "5-3-6": "Peace and productivity were prominent in your relationship’s past (The Empress). Now, you are about to make an important choice (The Lovers). The future brings a time when your relationship will grow stronger through every test (Strength).",
  "5-3-7": "Peace and abundance were present in your love’s past (The Empress). Now, you are on the verge of an important decision (The Lovers). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-3-0": "In your career’s past, peace and productivity were prominent (The Empress). Now, you are on the verge of an important work choice (The Lovers). Soon, you’ll make an innovative business move (The Fool).",
  "5-3-1": "Sharing and abundance were present in your professional past (The Empress). Now, you are on the verge of an important business decision (The Lovers). Soon, you’ll achieve magical success in projects (The Magician).",
  "5-3-2": "Team harmony and productivity were present in your work past (The Empress). Now, you are at an important decision point (The Lovers). Soon, your intuition will make a big difference (The High Priestess).",
  "5-3-4": "Peace and sharing were prominent in your professional past (The Empress). Now, you are in an important decision process (The Lovers). Soon, your leadership will come to the fore (The Emperor).",
  "5-3-6": "There was peace and team harmony in your professional past (The Empress). Now, you are on the verge of an important work choice (The Lovers). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  "5-3-7": "Peace and productivity were present in your career’s past (The Empress). Now, you are on the verge of an important decision (The Lovers). Soon, you may take on a major project alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-4-0": "Geçmişte ilişkinde kararlılık ve liderlik ön plandaydı (İmparator). Şu anda önemli bir karar aşamasındasın (Aşıklar). Gelecek ise cesur ve yeni bir aşk yolculuğu getiriyor (Aptal).",
  "5-4-1": "Aşk geçmişinde otorite ve sorumluluk vardı (İmparator). Şu an ilişkinde büyük bir seçim yapmak üzeresin (Aşıklar). Yakında büyüleyici bir çekim ve iletişim dönemi başlayabilir (Büyücü).",
  "5-4-2": "Geçmişte ilişkinde disiplin ve güven vardı (İmparator). Şu anda önemli bir karar arifesindesin (Aşıklar). Gelecek ise sezgisel ve duygusal bir dönemi getiriyor (Baş Rahibe).",
  "5-4-3": "Aşk hayatının geçmişinde kararlılık ve liderlik ön plandaydı (İmparator). Şu an ilişkinde önemli bir karar aşamasındasın (Aşıklar). Yakında huzur ve bereket dolu bir ilişki başlıyor (İmparatoriçe).",
  "5-4-6": "Geçmişte ilişkinde disiplin ve otorite öne çıktı (İmparator). Şu anda önemli bir seçim noktasındasın (Aşıklar). Gelecek ise aşkınızın tüm sınavlardan güçlenerek çıkacağı bir dönemi getiriyor (Güç).",
  "5-4-7": "Aşk geçmişinde kararlılık ve disiplin vardı (İmparator). Şu an önemli bir karar aşamasındasın (Aşıklar). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-4-0": "Kariyerinde geçmişte liderlik ve disiplin ön plandaydı (İmparator). Şu anda önemli bir iş tercihi arifesindesin (Aşıklar). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "5-4-1": "İş hayatının geçmişinde otorite ve sorumluluk vardı (İmparator). Şu an kariyerinde önemli bir seçim noktasındasın (Aşıklar). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "5-4-2": "Geçmişte işte disiplin ve güven ön plandaydı (İmparator). Şu an önemli bir karar verme sürecindesin (Aşıklar). Yakında sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "5-4-3": "Kariyerinin geçmişinde liderlik ve otorite vardı (İmparator). Şu anda önemli bir iş kararı arifesindesin (Aşıklar). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "5-4-6": "İş geçmişinde disiplin ve liderlik ön plandaydı (İmparator). Şu anda önemli bir karar arifesindesin (Aşıklar). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  "5-4-7": "Kariyerinin geçmişinde disiplin ve sorumluluk vardı (İmparator). Şu an önemli bir seçim arifesindesin (Aşıklar). Yakında yalnız başına büyük bir proje üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-4-0": "In the past, determination and leadership were prominent in your relationship (The Emperor). Now, you are at an important decision stage (The Lovers). The future brings a bold and new love journey (The Fool).",
  "5-4-1": "Authority and responsibility marked your love’s past (The Emperor). Now, you are about to make a big choice (The Lovers). Soon, a period of magical attraction and communication may begin (The Magician).",
  "5-4-2": "Discipline and trust were prominent in your relationship’s past (The Emperor). Now, you are on the verge of an important decision (The Lovers). The future brings an intuitive and emotional period (The High Priestess).",
  "5-4-3": "Determination and leadership were prominent in your love’s past (The Emperor). Now, you are at an important decision stage (The Lovers). Soon, a relationship full of peace and abundance begins (The Empress).",
  "5-4-6": "Discipline and authority stood out in your love’s past (The Emperor). Now, you are at an important decision point (The Lovers). The future brings a time when your love will grow stronger through every test (Strength).",
  "5-4-7": "Determination and discipline were present in your love’s past (The Emperor). Now, you are at an important decision stage (The Lovers). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-4-0": "Leadership and discipline were prominent in your career’s past (The Emperor). Now, you are on the verge of an important work choice (The Lovers). Soon, you’ll make an innovative business move (The Fool).",
  "5-4-1": "Authority and responsibility were present in your professional past (The Emperor). Now, you are at an important choice point in your career (The Lovers). Soon, you’ll achieve magical success in projects (The Magician).",
  "5-4-2": "Discipline and trust were present in your work past (The Emperor). Now, you are in an important decision process (The Lovers). Soon, your intuition will make a big difference (The High Priestess).",
  "5-4-3": "Leadership and authority were present in your career’s past (The Emperor). Now, you are on the verge of an important business decision (The Lovers). Soon, peace and abundance will increase in the team (The Empress).",
  "5-4-6": "Discipline and leadership were prominent in your professional past (The Emperor). Now, you are on the verge of an important decision (The Lovers). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  "5-4-7": "Discipline and responsibility were present in your career’s past (The Emperor). Now, you are about to make an important choice (The Lovers). Soon, you may take on a major project alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-6-0": "Geçmişte ilişkinde güç ve zorlukların üstesinden geldin (Güç). Şu anda önemli bir aşk kararı arifesindesin (Aşıklar). Gelecek ise cesur ve yeni bir aşk başlangıcını getiriyor (Aptal).",
  "5-6-1": "Aşk hayatının geçmişinde mücadele ve sabır vardı (Güç). Şu anda ilişkinde önemli bir seçim yapmak üzeresin (Aşıklar). Yakında büyüleyici bir çekim ve iletişim dönemi başlıyor (Büyücü).",
  "5-6-2": "Geçmişte ilişkinde güç ve sabır ön plandaydı (Güç). Şu an ilişkinde önemli bir karar aşamasındasın (Aşıklar). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "5-6-3": "Aşk geçmişinde güç ve zorluklar vardı (Güç). Şu anda önemli bir tercih yapıyorsun (Aşıklar). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "5-6-4": "Geçmişte ilişkinde mücadele ve güç ön plandaydı (Güç). Şu an ilişkinde önemli bir karar alıyorsun (Aşıklar). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "5-6-7": "Aşk hayatının geçmişinde zorluklar ve güç vardı (Güç). Şu an ilişkinde önemli bir karar sürecindesin (Aşıklar). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-6-0": "Kariyerinde geçmişte mücadele ve güç ön plandaydı (Güç). Şu anda önemli bir iş tercihi arifesindesin (Aşıklar). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "5-6-1": "İş hayatında geçmişte zorlukların üstesinden geldin (Güç). Şu an önemli bir seçim noktasındasın (Aşıklar). Yakında projelerde büyüleyici bir başarı elde edeceksin (Büyücü).",
  "5-6-2": "Geçmişte işte güç ve sabır öne çıktı (Güç). Şu anda önemli bir karar verme sürecindesin (Aşıklar). Yakında sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "5-6-3": "İş geçmişinde mücadele ve sabır ön plandaydı (Güç). Şu anda önemli bir tercih arifesindesin (Aşıklar). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "5-6-4": "Kariyerinin geçmişinde güç ve dayanıklılık vardı (Güç). Şu anda önemli bir karar sürecindesin (Aşıklar). Yakında liderliğin öne çıkacak (İmparator).",
  "5-6-7": "Kariyerinin geçmişinde mücadele ve zorluklar vardı (Güç). Şu anda önemli bir karar arifesindesin (Aşıklar). Yakında yalnız başına büyük bir sorumluluk üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-6-0": "In the past, you overcame strength and difficulties in your relationship (Strength). Now, you are on the verge of an important love decision (The Lovers). The future brings a bold and new love beginning (The Fool).",
  "5-6-1": "Struggle and patience marked your love’s past (Strength). Now, you are about to make an important choice (The Lovers). Soon, a period of magical attraction and communication begins (The Magician).",
  "5-6-2": "Strength and patience were at the forefront in your love’s past (Strength). Now, you are at an important decision stage (The Lovers). The future brings a period where intuitive bonds will strengthen (The High Priestess).",
  "5-6-3": "There was strength and hardship in your love’s past (Strength). Now, you are making an important choice (The Lovers). The future brings a relationship full of peace and compassion (The Empress).",
  "5-6-4": "Struggle and strength were at the forefront in your love’s past (Strength). Now, you are making an important decision (The Lovers). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "5-6-7": "There were hardships and strength in your love’s past (Strength). Now, you are in a critical decision process (The Lovers). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-6-0": "In your career’s past, struggle and strength were prominent (Strength). Now, you are on the verge of an important work choice (The Lovers). Soon, an innovative business move awaits (The Fool).",
  "5-6-1": "You overcame difficulties in your professional past (Strength). Now, you are at an important decision point (The Lovers). Soon, you’ll achieve magical success in projects (The Magician).",
  "5-6-2": "Strength and patience were present in your work past (Strength). Now, you are in an important decision process (The Lovers). Soon, your intuition will make a big difference (The High Priestess).",
  "5-6-3": "Struggle and patience stood out in your professional past (Strength). Now, you are on the verge of an important work choice (The Lovers). Soon, peace and abundance will increase in the team (The Empress).",
  "5-6-4": "There was strength and endurance in your career’s past (Strength). Now, you are at an important decision process (The Lovers). Soon, your leadership will stand out (The Emperor).",
  "5-6-7": "There were struggles and hardships in your career’s past (Strength). Now, you are on the verge of an important choice (The Lovers). Soon, you may take on a big responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "5-7-0": "Geçmişte ilişkinde önemli bir seçim veya kararsızlık yaşadın (Aşıklar). Şu anda yalnız kalıp aşk hayatını sorguluyorsun (Ermiş). Gelecek ise yeni ve cesur bir aşk başlangıcına işaret ediyor (Aptal).",
  "5-7-1": "Aşk geçmişinde büyük bir aşk kararı verdin (Aşıklar). Şu anda içsel bir yolculuktasın (Ermiş). Yakında büyüleyici bir çekim ve iletişim dönemi başlayabilir (Büyücü).",
  "5-7-2": "Geçmişte ilişkinde önemli seçimler ve analizler vardı (Aşıklar). Şu anda yalnız kalıp aşkı sorguluyorsun (Ermiş). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "5-7-3": "Aşk hayatının geçmişinde büyük kararlar vardı (Aşıklar). Şu anda yalnız başına duygularını analiz ediyorsun (Ermiş). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "5-7-4": "Geçmişte ilişkinde önemli kararlar verdin (Aşıklar). Şu anda içsel bir sorgulama dönemindesin (Ermiş). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "5-7-6": "Aşk geçmişinde önemli kararlar ve zorluklar vardı (Aşıklar). Şu anda yalnız başına bir süreçtesin (Ermiş). Gelecek ise ilişkinde tüm sınavlardan güçlenerek çıkacağın bir dönem olacak (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "5-7-0": "Kariyerinde geçmişte önemli bir karar verdin (Aşıklar). Şu anda yalnız başına çalışıyor veya içsel analiz yapıyorsun (Ermiş). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "5-7-1": "İş geçmişinde önemli kararlar vardı (Aşıklar). Şu an yalnız başına bir süreçtesin (Ermiş). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "5-7-2": "Kariyerinin geçmişinde önemli seçimler ve analizler vardı (Aşıklar). Şu anda yalnız çalışıyorsun (Ermiş). Yakında sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "5-7-3": "Geçmişte işte önemli kararlar ve tercihler vardı (Aşıklar). Şu anda yalnız başına analiz yapıyorsun (Ermiş). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "5-7-4": "Kariyerinin geçmişinde önemli kararlar vardı (Aşıklar). Şu anda içsel bir sorgulama dönemindesin (Ermiş). Yakında liderliğin öne çıkacak (İmparator).",
  "5-7-6": "İş geçmişinde kararlar ve zorluklar vardı (Aşıklar). Şu an yalnız başına bir süreçtesin (Ermiş). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "5-7-0": "In the past, you faced an important choice or indecision in your relationship (The Lovers). Now, you are alone and questioning your love life (The Hermit). The future signals a bold and new love beginning (The Fool).",
  "5-7-1": "You made a major love decision in your past (The Lovers). Now, you are on an inner journey (The Hermit). Soon, a period of magical attraction and communication may begin (The Magician).",
  "5-7-2": "Important choices and analysis marked your love’s past (The Lovers). Now, you are alone and questioning love (The Hermit). The future brings a period where intuitive bonds will strengthen (The High Priestess).",
  "5-7-3": "There were major decisions in your love’s past (The Lovers). Now, you are analyzing your feelings alone (The Hermit). The future brings a relationship full of peace and compassion (The Empress).",
  "5-7-4": "You made important decisions in your relationship’s past (The Lovers). Now, you are in a period of inner questioning (The Hermit). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "5-7-6": "Important decisions and challenges were present in your love’s past (The Lovers). Now, you are in a solo process (The Hermit). The future brings a period when your relationship will grow stronger through every test (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "5-7-0": "In your career’s past, you made an important decision (The Lovers). Now, you are working alone or conducting inner analysis (The Hermit). Soon, an innovative business move awaits (The Fool).",
  "5-7-1": "There were important decisions in your professional past (The Lovers). Now, you are in a solo process (The Hermit). Soon, you’ll achieve magical success in projects (The Magician).",
  "5-7-2": "Important choices and analysis marked your career’s past (The Lovers). Now, you are working alone (The Hermit). Soon, your intuition will make a big difference (The High Priestess).",
  "5-7-3": "There were important decisions and preferences in your work past (The Lovers). Now, you are analyzing alone (The Hermit). Soon, peace and abundance will increase in the team (The Empress).",
  "5-7-4": "Important decisions were present in your career’s past (The Lovers). Now, you are in a period of inner questioning (The Hermit). Soon, your leadership will stand out (The Emperor).",
  "5-7-6": "There were decisions and challenges in your professional past (The Lovers). Now, you are in a solo process (The Hermit). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-0-1": "Geçmişte ilişkinde güç ve sabır ön plandaydı (Güç). Şu anda aşkı özgürce ve yeni başlangıçlarla yaşıyorsun (Aptal). Gelecek ise büyüleyici bir çekim ve iletişim dönemi vadediyor (Büyücü).",
  "6-0-2": "Aşk hayatının geçmişinde mücadele ve güç vardı (Güç). Şu anda yeni bir aşk macerasına açıksın (Aptal). Yakında ilişkinde sezgisel bir bağ güçlenecek (Baş Rahibe).",
  "6-0-3": "Geçmişte ilişkinde dayanıklılık ve sabır hakimdi (Güç). Şu anda aşkı cesurca ve heyecanla yaşıyorsun (Aptal). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "6-0-4": "Aşk geçmişinde güç ve direnç vardı (Güç). Şu an ilişkinde özgürce yeni bir maceraya açıksın (Aptal). Yakında ciddi ve sağlam bir ilişki başlayabilir (İmparator).",
  "6-0-5": "Geçmişte ilişkinde mücadele ve sabır ön plandaydı (Güç). Şu anda aşkı yeni bir gözle deneyimliyorsun (Aptal). Yakında önemli bir aşk kararı alabilirsin (Aşıklar).",
  "6-0-7": "Aşk geçmişinde dayanıklılık ve güç vardı (Güç). Şu an aşkı maceracı bir ruhla yaşıyorsun (Aptal). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-0-1": "Kariyerinde geçmişte mücadele ve güç ön plandaydı (Güç). Şu anda yeni işlere açıksın (Aptal). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "6-0-2": "İş hayatının geçmişinde güç ve sabır vardı (Güç). Şu anda yenilikçi bir süreçtesin (Aptal). Yakında projelerde sezgilerinle büyük bir fark yaratacaksın (Baş Rahibe).",
  "6-0-3": "Geçmişte işte mücadele ve dayanıklılık ön plandaydı (Güç). Şu an yeni projelere açıksın (Aptal). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "6-0-4": "Kariyerinin geçmişinde güç ve direnç vardı (Güç). Şu anda yenilikçi ve maceracı bir ruhlasın (Aptal). Yakında liderliğin ön plana çıkacak (İmparator).",
  "6-0-5": "İş geçmişinde mücadele ve sabır vardı (Güç). Şu anda yeni bir başlangıç aşamasındasın (Aptal). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  "6-0-7": "Kariyerinin geçmişinde güç ve dayanıklılık vardı (Güç). Şu an yenilikçi bir süreçtesin (Aptal). Yakında yalnız çalışacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-0-1": "In the past, strength and patience were prominent in your relationship (Strength). Now, you live love freely and with new beginnings (The Fool). The future promises a period of magical attraction and communication (The Magician).",
  "6-0-2": "Struggle and strength marked your love’s past (Strength). Now, you are open to a new love adventure (The Fool). Soon, an intuitive bond may strengthen in your relationship (The High Priestess).",
  "6-0-3": "Endurance and patience were prominent in your relationship’s past (Strength). Now, you live love boldly and excitedly (The Fool). The future brings a relationship full of peace and compassion (The Empress).",
  "6-0-4": "Strength and resilience were present in your love’s past (Strength). Now, you are open to a new adventure in love (The Fool). Soon, a serious and solid relationship may begin (The Emperor).",
  "6-0-5": "Struggle and patience were prominent in your relationship’s past (Strength). Now, you experience love with a fresh perspective (The Fool). Soon, you may make an important love decision (The Lovers).",
  "6-0-7": "Endurance and strength were present in your love’s past (Strength). Now, you live love with an adventurous spirit (The Fool). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-0-1": "In your career’s past, struggle and strength were prominent (Strength). Now, you are open to new jobs (The Fool). Soon, you’ll achieve magical success in projects (The Magician).",
  "6-0-2": "Strength and patience were present in your professional past (Strength). Now, you are in an innovative process (The Fool). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "6-0-3": "Struggle and endurance were prominent in your work past (Strength). Now, you are open to new projects (The Fool). Soon, peace and abundance will increase in the team (The Empress).",
  "6-0-4": "Strength and resilience were present in your career’s past (Strength). Now, you’re innovative and adventurous (The Fool). Soon, your leadership will come to the fore (The Emperor).",
  "6-0-5": "Struggle and patience were present in your work past (Strength). Now, you are in a new beginning phase (The Fool). Soon, an important work choice may arise (The Lovers).",
  "6-0-7": "Strength and endurance were present in your professional past (Strength). Now, you’re in an innovative process (The Fool). Soon, you may start working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-1-0": "Geçmişte ilişkinde mücadele ve sabır vardı (Güç). Şu anda büyüleyici bir çekim ve iletişim sürecindesin (Büyücü). Gelecek ise aşkı özgürce ve yeni başlangıçlarla deneyimleyeceğin bir dönemi getiriyor (Aptal).",
  "6-1-2": "Aşk geçmişinde güç ve iletişim ön plandaydı (Güç). Şu anda büyüleyici bir etki altındasın (Büyücü). Yakında ilişkinde sezgisel bir bağ güçlenecek (Baş Rahibe).",
  "6-1-3": "Geçmişte ilişkinde sabır ve mücadele ön plandaydı (Güç). Şu anda ilişkinde büyüleyici bir iletişim var (Büyücü). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "6-1-4": "Aşk hayatının geçmişinde güç ve dayanıklılık vardı (Güç). Şu anda büyüleyici bir çekim içindesin (Büyücü). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "6-1-5": "Geçmişte ilişkinde mücadele ve iletişim ön plandaydı (Güç). Şu anda büyüleyici bir süreçtesin (Büyücü). Yakında önemli bir aşk kararı alabilirsin (Aşıklar).",
  "6-1-7": "Aşk geçmişinde güç ve çekim vardı (Güç). Şu anda büyüleyici bir çekim içindesin (Büyücü). Yakında yalnız kalıp aşkı sorgulayacağın bir süreç başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-1-0": "Kariyerinde geçmişte mücadele ve sabır ön plandaydı (Güç). Şu anda projelerde büyüleyici bir başarı elde ediyorsun (Büyücü). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "6-1-2": "İş hayatında geçmişte güç ve iletişim vardı (Güç). Şu anda büyüleyici bir süreçtesin (Büyücü). Yakında projelerde sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "6-1-3": "Geçmişte işte mücadele ve sabır ön plandaydı (Güç). Şu an projelerde büyüleyici bir süreçtesin (Büyücü). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "6-1-4": "Kariyerinin geçmişinde güç ve iletişim ön plandaydı (Güç). Şu anda projelerde büyüleyici bir başarı içindesin (Büyücü). Yakında liderliğin öne çıkacak (İmparator).",
  "6-1-5": "İş geçmişinde mücadele ve projelerde çekim vardı (Güç). Şu anda büyüleyici ve başarılı bir süreçtesin (Büyücü). Yakında önemli bir iş tercihi gündeme gelecek (Aşıklar).",
  "6-1-7": "Kariyerinin geçmişinde güç ve çekim vardı (Güç). Şu an projelerde büyüleyici bir süreçtesin (Büyücü). Yakında yalnız çalışacağın bir süreç başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-1-0": "In the past, there was struggle and patience in your relationship (Strength). Now, you are in a process of magical attraction and communication (The Magician). The future brings a period to experience love freely and with new beginnings (The Fool).",
  "6-1-2": "Strength and communication were present in your love’s past (Strength). Now, you are under a magical effect (The Magician). Soon, an intuitive bond will strengthen in your relationship (The High Priestess).",
  "6-1-3": "Patience and struggle were prominent in your relationship’s past (Strength). Now, there is magical communication (The Magician). The future brings a relationship full of peace and compassion (The Empress).",
  "6-1-4": "Strength and endurance were present in your love’s past (Strength). Now, there is magical attraction (The Magician). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "6-1-5": "There were struggles and communication in your relationship’s past (Strength). Now, you are in a magical process (The Magician). Soon, you may make an important love decision (The Lovers).",
  "6-1-7": "Strength and attraction were present in your love’s past (Strength). Now, there is magical attraction (The Magician). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-1-0": "In your career’s past, there were struggles and patience (Strength). Now, you’re achieving magical success in projects (The Magician). Soon, an innovative business move awaits (The Fool).",
  "6-1-2": "Strength and communication were present in your professional past (Strength). Now, you’re in a magical process (The Magician). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "6-1-3": "Struggles and patience were at the forefront in your work past (Strength). Now, you are in a magical process in projects (The Magician). Soon, peace and abundance will increase in the team (The Empress).",
  "6-1-4": "Strength and communication were present in your career’s past (Strength). Now, you are in a magical process in projects (The Magician). Soon, your leadership will stand out (The Emperor).",
  "6-1-5": "There were struggles and magical attraction in your work past (Strength). Now, you are in a magical and successful process (The Magician). Soon, an important work choice will arise (The Lovers).",
  "6-1-7": "Strength and attraction were present in your professional past (Strength). Now, you are in a magical process in projects (The Magician). Soon, you may start a period of working alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-2-0": "Geçmişte ilişkinde güç ve sezgisel bağlar ön plandaydı (Güç). Şu anda duygularını analiz ediyorsun (Baş Rahibe). Gelecek ise aşkı cesurca ve yeni bir şekilde yaşamanı sağlayacak (Aptal).",
  "6-2-1": "Aşk hayatının geçmişinde mücadele ve sezgi ön plandaydı (Güç). Şu anda duygusal bir analiz sürecindesin (Baş Rahibe). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "6-2-3": "Geçmişte ilişkinde sabır ve sezgisel bağlar öne çıktı (Güç). Şu anda iç dünyana dönük bir süreçtesin (Baş Rahibe). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "6-2-4": "Aşk geçmişinde güç ve sezgi vardı (Güç). Şu anda duygularını analiz ediyorsun (Baş Rahibe). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "6-2-5": "Geçmişte ilişkinde güç ve sezgi ön plandaydı (Güç). Şu anda derin bir analizdesin (Baş Rahibe). Yakında önemli bir aşk kararı alabilirsin (Aşıklar).",
  "6-2-7": "Aşk geçmişinde sabır ve sezgi vardı (Güç). Şu an içsel bir sorgulama sürecindesin (Baş Rahibe). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-2-0": "Kariyerinde geçmişte mücadele ve sezgisel analiz öne çıktı (Güç). Şu anda dikkatli bir gözlem sürecindesin (Baş Rahibe). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "6-2-1": "İş hayatının geçmişinde güç ve içsel analiz ön plandaydı (Güç). Şu an projelerde derin bir gözlem sürecindesin (Baş Rahibe). Yakında büyüleyici başarılar elde edeceksin (Büyücü).",
  "6-2-3": "Geçmişte işte mücadele ve sezgi öne çıktı (Güç). Şu anda içsel bir analiz sürecindesin (Baş Rahibe). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "6-2-4": "Kariyerinin geçmişinde güç ve sezgi ön plandaydı (Güç). Şu anda analiz ve dikkatli gözlemdesin (Baş Rahibe). Yakında liderliğin öne çıkacak (İmparator).",
  "6-2-5": "İş geçmişinde mücadele ve analiz vardı (Güç). Şu anda sezgisel bir süreçtesin (Baş Rahibe). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  "6-2-7": "Kariyerinin geçmişinde sabır ve sezgi vardı (Güç). Şu anda içsel bir analiz sürecindesin (Baş Rahibe). Yakında yalnız başına büyük bir sorumluluk üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-2-0": "In the past, strength and intuitive bonds were prominent in your relationship (Strength). Now, you are analyzing your emotions (The High Priestess). The future brings a period to live love boldly and in a new way (The Fool).",
  "6-2-1": "Struggle and intuition were present in your love’s past (Strength). Now, you are in an emotional analysis process (The High Priestess). Soon, a period of magical attraction and communication may begin (The Magician).",
  "6-2-3": "Patience and intuitive bonds stood out in your love’s past (Strength). Now, you are in a process turned inward (The High Priestess). The future brings a relationship full of peace and compassion (The Empress).",
  "6-2-4": "Strength and intuition were present in your love’s past (Strength). Now, you are analyzing your feelings (The High Priestess). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "6-2-5": "Strength and intuition were prominent in your relationship’s past (Strength). Now, you are in deep analysis (The High Priestess). Soon, you may make an important love decision (The Lovers).",
  "6-2-7": "Patience and intuition were present in your love’s past (Strength). Now, you are in an inner questioning process (The High Priestess). Soon, there may be a period of solitude and questioning in love (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-2-0": "In your career’s past, struggle and intuitive analysis stood out (Strength). Now, you are in a careful observation process (The High Priestess). Soon, you’ll make an innovative business move (The Fool).",
  "6-2-1": "Strength and inner analysis were present in your professional past (Strength). Now, you are in a deep observation process in projects (The High Priestess). Soon, you’ll achieve magical success (The Magician).",
  "6-2-3": "Struggle and intuition were prominent in your work past (Strength). Now, you are in an inner analysis process (The High Priestess). Soon, peace and abundance will increase in the team (The Empress).",
  "6-2-4": "Strength and intuition were prominent in your career’s past (Strength). Now, you are in analysis and careful observation (The High Priestess). Soon, your leadership will stand out (The Emperor).",
  "6-2-5": "Struggle and analysis were present in your work past (Strength). Now, you are in an intuitive process (The High Priestess). Soon, an important work choice may arise (The Lovers).",
  "6-2-7": "Patience and intuition were present in your professional past (Strength). Now, you are in an inner analysis process (The High Priestess). Soon, you may take on a major responsibility alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-3-0": "Geçmişte ilişkinde güç ve huzur ön plandaydı (Güç). Şu anda şefkat ve paylaşım içindesin (İmparatoriçe). Gelecek ise aşkı cesurca ve yeni bir şekilde yaşamanı sağlayacak (Aptal).",
  "6-3-1": "Aşk hayatının geçmişinde mücadele ve şefkat vardı (Güç). Şu an ilişkinde huzur ve bereket hakim (İmparatoriçe). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "6-3-2": "Geçmişte ilişkinde sabır ve huzur öne çıktı (Güç). Şu an ilişkinde şefkat ve üretkenlik ön planda (İmparatoriçe). Gelecek ise sezgisel bir bağın güçlenmesini sağlayacak (Baş Rahibe).",
  "6-3-4": "Aşk geçmişinde güç ve huzur vardı (Güç). Şu an ilişkinde şefkat ve bereket var (İmparatoriçe). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "6-3-5": "Geçmişte ilişkinde güç ve huzur ön plandaydı (Güç). Şu an şefkatli ve verimli bir süreçtesin (İmparatoriçe). Yakında önemli bir aşk kararı verebilirsin (Aşıklar).",
  "6-3-7": "Aşk geçmişinde güç ve şefkat vardı (Güç). Şu an ilişkinde huzur ve paylaşım ön planda (İmparatoriçe). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-3-0": "Kariyerinde geçmişte mücadele ve huzur ön plandaydı (Güç). Şu anda üretken ve paylaşımcısın (İmparatoriçe). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "6-3-1": "İş hayatının geçmişinde güç ve paylaşım vardı (Güç). Şu an ekipte huzur ve bereket hakim (İmparatoriçe). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "6-3-2": "Geçmişte işte sabır ve huzur ön plandaydı (Güç). Şu an ekipte şefkat ve üretkenlik var (İmparatoriçe). Yakında projelerde sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "6-3-4": "Kariyerinin geçmişinde güç ve huzur vardı (Güç). Şu an üretken ve verimli bir dönemdesin (İmparatoriçe). Yakında liderliğin öne çıkacak (İmparator).",
  "6-3-5": "İş geçmişinde mücadele ve huzur ön plandaydı (Güç). Şu an ekipte paylaşımcı bir süreçtesin (İmparatoriçe). Yakında önemli bir iş tercihiyle karşılaşacaksın (Aşıklar).",
  "6-3-7": "Kariyerinin geçmişinde güç ve şefkat vardı (Güç). Şu an ekipte huzur ve paylaşım ön planda (İmparatoriçe). Yakında yalnız başına büyük bir proje üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-3-0": "In the past, strength and peace were prominent in your relationship (Strength). Now, you are in compassion and sharing (The Empress). The future brings a period to live love boldly and in a new way (The Fool).",
  "6-3-1": "Struggle and compassion marked your love’s past (Strength). Now, there is peace and abundance in your relationship (The Empress). Soon, a period of magical attraction and communication may begin (The Magician).",
  "6-3-2": "Patience and peace were present in your love’s past (Strength). Now, compassion and productivity are at the forefront (The Empress). The future brings a period where an intuitive bond will strengthen (The High Priestess).",
  "6-3-4": "Strength and peace were present in your love’s past (Strength). Now, there is compassion and abundance (The Empress). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "6-3-5": "Strength and peace were prominent in your relationship’s past (Strength). Now, you are in a compassionate and productive period (The Empress). Soon, you may make an important love decision (The Lovers).",
  "6-3-7": "Strength and compassion were present in your love’s past (Strength). Now, peace and sharing are prominent (The Empress). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-3-0": "In your career’s past, struggle and peace were prominent (Strength). Now, you are productive and sharing (The Empress). Soon, you’ll make an innovative business move (The Fool).",
  "6-3-1": "Strength and sharing were present in your professional past (Strength). Now, there is peace and abundance in the team (The Empress). Soon, you’ll achieve magical success in projects (The Magician).",
  "6-3-2": "Patience and peace were prominent in your work past (Strength). Now, compassion and productivity are in the team (The Empress). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "6-3-4": "Strength and peace were present in your career’s past (Strength). Now, you are in a productive period (The Empress). Soon, your leadership will stand out (The Emperor).",
  "6-3-5": "Struggle and peace were at the forefront in your work past (Strength). Now, you are in a sharing process in the team (The Empress). Soon, an important work choice may arise (The Lovers).",
  "6-3-7": "Strength and compassion were present in your professional past (Strength). Now, peace and sharing are in the team (The Empress). Soon, you may take on a major project alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-4-0": "Geçmişte ilişkinde güç ve kararlılık ön plandaydı (Güç). Şu anda ilişkinde ciddiyet ve liderlik hakim (İmparator). Gelecek ise aşkı cesurca ve yeni bir şekilde yaşamanı sağlayacak (Aptal).",
  "6-4-1": "Aşk hayatının geçmişinde disiplin ve güç vardı (Güç). Şu an ilişkinde otorite ve kararlılık hakim (İmparator). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "6-4-2": "Geçmişte ilişkinde güç ve disiplin öne çıktı (Güç). Şu an ilişkinde kararlılık ve güven ön planda (İmparator). Gelecek ise sezgisel bir bağın güçlenmesini sağlayacak (Baş Rahibe).",
  "6-4-3": "Aşk geçmişinde güç ve kararlılık vardı (Güç). Şu an ilişkinde liderlik ve disiplin var (İmparator). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "6-4-5": "Geçmişte ilişkinde güç ve otorite ön plandaydı (Güç). Şu anda ilişkinde ciddiyet ve liderlik hakim (İmparator). Yakında önemli bir aşk kararı verebilirsin (Aşıklar).",
  "6-4-7": "Aşk geçmişinde disiplin ve güç vardı (Güç). Şu anda ilişkinde liderlik ve otorite hakim (İmparator). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-4-0": "Kariyerinde geçmişte güç ve kararlılık ön plandaydı (Güç). Şu anda liderlik ve ciddiyetle ilerliyorsun (İmparator). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "6-4-1": "İş hayatının geçmişinde disiplin ve güç vardı (Güç). Şu an kariyerinde otorite ve kararlılık ön planda (İmparator). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "6-4-2": "Geçmişte işte güç ve disiplin ön plandaydı (Güç). Şu anda otorite ve kararlılık ön planda (İmparator). Yakında projelerde sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "6-4-3": "Kariyerinin geçmişinde güç ve kararlılık vardı (Güç). Şu anda lider ve disiplinli bir süreçtesin (İmparator). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "6-4-5": "İş geçmişinde güç ve otorite vardı (Güç). Şu an liderlik ve kararlılık ön planda (İmparator). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  "6-4-7": "Kariyerinin geçmişinde disiplin ve güç vardı (Güç). Şu anda lider ve otorite sahibisin (İmparator). Yakında yalnız başına büyük bir proje üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-4-0": "In the past, strength and determination were prominent in your relationship (Strength). Now, seriousness and leadership are prominent (The Emperor). The future brings a period to live love boldly and in a new way (The Fool).",
  "6-4-1": "Discipline and strength were present in your love’s past (Strength). Now, authority and determination are prominent (The Emperor). Soon, a period of magical attraction and communication may begin (The Magician).",
  "6-4-2": "Strength and discipline stood out in your love’s past (Strength). Now, determination and trust are at the forefront (The Emperor). The future brings a period where an intuitive bond will strengthen (The High Priestess).",
  "6-4-3": "Strength and determination were present in your love’s past (Strength). Now, leadership and discipline are prominent (The Emperor). The future brings a relationship full of peace and compassion (The Empress).",
  "6-4-5": "Strength and authority were prominent in your love’s past (Strength). Now, seriousness and leadership are prominent (The Emperor). Soon, you may make an important love decision (The Lovers).",
  "6-4-7": "Discipline and strength were present in your love’s past (Strength). Now, leadership and authority are prominent (The Emperor). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-4-0": "In your career’s past, strength and determination were prominent (Strength). Now, you’re progressing with leadership and seriousness (The Emperor). Soon, an innovative business move awaits (The Fool).",
  "6-4-1": "Discipline and strength were present in your professional past (Strength). Now, authority and determination are prominent (The Emperor). Soon, you’ll achieve magical success in projects (The Magician).",
  "6-4-2": "Strength and discipline were prominent in your work past (Strength). Now, authority and determination are prominent (The Emperor). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "6-4-3": "Strength and determination were present in your career’s past (Strength). Now, you are in a leadership and disciplined process (The Emperor). Soon, peace and abundance will increase in the team (The Empress).",
  "6-4-5": "Strength and authority were present in your professional past (Strength). Now, leadership and determination are prominent (The Emperor). Soon, an important work choice may arise (The Lovers).",
  "6-4-7": "Discipline and strength were present in your career’s past (Strength). Now, you are a leader and authority (The Emperor). Soon, you may take on a major project alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-5-0": "Geçmişte ilişkinde güç ve önemli bir aşk kararı ön plandaydı (Güç). Şu anda ilişkinde seçimlerin sonuçlarıyla yüzleşiyorsun (Aşıklar). Gelecek ise aşkı cesurca ve özgürce yaşamanı sağlayacak (Aptal).",
  "6-5-1": "Aşk hayatının geçmişinde mücadele ve kararlar vardı (Güç). Şu an ilişkinde büyük bir seçim aşamasındasın (Aşıklar). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "6-5-2": "Geçmişte ilişkinde güç ve analiz ön plandaydı (Güç). Şu an ilişkinde önemli bir karar arifesindesin (Aşıklar). Gelecek ise sezgisel bağların güçleneceği bir dönemi getiriyor (Baş Rahibe).",
  "6-5-3": "Aşk geçmişinde mücadele ve önemli tercihler vardı (Güç). Şu anda ilişkinde kararların etkisini hissediyorsun (Aşıklar). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "6-5-4": "Geçmişte ilişkinde güç ve önemli seçimler vardı (Güç). Şu anda ilişkinde bir karar aşamasındasın (Aşıklar). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "6-5-7": "Aşk geçmişinde mücadele ve kararlar ön plandaydı (Güç). Şu an ilişkinde bir seçim noktasındasın (Aşıklar). Yakında yalnız kalıp aşkı sorgulayacağın bir dönem başlayabilir (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-5-0": "Kariyerinde geçmişte mücadele ve önemli kararlar vardı (Güç). Şu anda önemli bir seçim aşamasındasın (Aşıklar). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "6-5-1": "İş hayatının geçmişinde güç ve kararlar vardı (Güç). Şu anda işte önemli bir karar arifesindesin (Aşıklar). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "6-5-2": "Geçmişte işte mücadele ve analiz ön plandaydı (Güç). Şu anda önemli bir seçim noktasındasın (Aşıklar). Yakında sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "6-5-3": "Kariyerinin geçmişinde güç ve önemli tercihler vardı (Güç). Şu anda önemli bir kararın etkisini hissediyorsun (Aşıklar). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "6-5-4": "İş geçmişinde mücadele ve önemli seçimler vardı (Güç). Şu anda işte önemli bir karar aşamasındasın (Aşıklar). Yakında liderliğin öne çıkacak (İmparator).",
  "6-5-7": "Kariyerinin geçmişinde mücadele ve kararlar vardı (Güç). Şu anda önemli bir seçim arifesindesin (Aşıklar). Yakında yalnız başına büyük bir proje üstlenebilirsin (Ermiş).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-5-0": "In the past, strength and an important love decision were prominent in your relationship (Strength). Now, you are facing the consequences of your choices (The Lovers). The future brings a period to live love boldly and freely (The Fool).",
  "6-5-1": "Struggles and decisions were present in your love’s past (Strength). Now, you are at a major decision stage (The Lovers). Soon, a period of magical attraction and communication may begin (The Magician).",
  "6-5-2": "Strength and analysis were prominent in your love’s past (Strength). Now, you are on the verge of an important decision (The Lovers). The future brings a period where intuitive bonds will strengthen (The High Priestess).",
  "6-5-3": "Struggles and important preferences were present in your love’s past (Strength). Now, you feel the impact of your decisions (The Lovers). The future brings a relationship full of peace and compassion (The Empress).",
  "6-5-4": "Strength and important choices were prominent in your love’s past (Strength). Now, you are in a decision process (The Lovers). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "6-5-7": "Struggles and decisions were prominent in your love’s past (Strength). Now, you are at a choice point (The Lovers). Soon, there may be a period of solitude and inner questioning (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-5-0": "In your career’s past, there were struggles and important decisions (Strength). Now, you are at an important choice stage (The Lovers). Soon, an innovative business move awaits (The Fool).",
  "6-5-1": "Strength and decisions were present in your professional past (Strength). Now, you are on the verge of an important decision (The Lovers). Soon, you’ll achieve magical success in projects (The Magician).",
  "6-5-2": "Struggles and analysis were present in your work past (Strength). Now, you are at an important choice point (The Lovers). Soon, your intuition will make a big difference (The High Priestess).",
  "6-5-3": "Strength and important preferences were present in your career’s past (Strength). Now, you feel the impact of your decision (The Lovers). Soon, peace and abundance will increase in the team (The Empress).",
  "6-5-4": "Struggles and important choices were present in your professional past (Strength). Now, you are at an important decision process (The Lovers). Soon, your leadership will stand out (The Emperor).",
  "6-5-7": "Strength and decisions were present in your career’s past (Strength). Now, you are on the verge of an important choice (The Lovers). Soon, you may take on a major project alone (The Hermit).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "6-7-0": "Geçmişte ilişkinde mücadele ve sabır ön plandaydı (Güç). Şu anda yalnız kalıp aşk hayatını sorguluyorsun (Ermiş). Gelecek ise aşkı cesurca ve yeni bir şekilde yaşamanı sağlayacak (Aptal).",
  "6-7-1": "Aşk geçmişinde güç ve sabır vardı (Güç). Şu anda içsel bir sorgulama sürecindesin (Ermiş). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "6-7-2": "Geçmişte ilişkinde mücadele ve sabır vardı (Güç). Şu an yalnız başına bir analiz sürecindesin (Ermiş). Gelecek ise sezgisel bir bağın güçlenmesini sağlayacak (Baş Rahibe).",
  "6-7-3": "Aşk geçmişinde güç ve sabır vardı (Güç). Şu anda yalnız kalıp duygularını analiz ediyorsun (Ermiş). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "6-7-4": "Geçmişte ilişkinde güç ve sabır öne çıktı (Güç). Şu anda yalnız başına içsel bir sorgulama dönemindesin (Ermiş). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "6-7-5": "Aşk hayatının geçmişinde mücadele ve sabır vardı (Güç). Şu an yalnız başına bir süreçtesin (Ermiş). Yakında önemli bir aşk kararı verebilirsin (Aşıklar).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "6-7-0": "Kariyerinde geçmişte mücadele ve sabır ön plandaydı (Güç). Şu anda yalnız başına analiz yapıyorsun (Ermiş). Yakında yenilikçi bir iş adımı atabilirsin (Aptal).",
  "6-7-1": "İş geçmişinde güç ve sabır vardı (Güç). Şu anda yalnız çalışıyor ve analiz yapıyorsun (Ermiş). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "6-7-2": "Geçmişte işte mücadele ve sabır öne çıktı (Güç). Şu anda yalnız başına analiz sürecindesin (Ermiş). Yakında projelerde sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "6-7-3": "Kariyerinin geçmişinde mücadele ve sabır vardı (Güç). Şu an yalnız başına analiz yapıyorsun (Ermiş). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "6-7-4": "İş geçmişinde güç ve sabır vardı (Güç). Şu anda yalnız başına içsel bir sorgulama dönemindesin (Ermiş). Yakında liderliğin öne çıkacak (İmparator).",
  "6-7-5": "Kariyerinin geçmişinde mücadele ve sabır vardı (Güç). Şu anda yalnız başına bir süreçtesin (Ermiş). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "6-7-0": "In the past, struggle and patience were prominent in your relationship (Strength). Now, you are alone and questioning your love life (The Hermit). The future brings a period to live love boldly and in a new way (The Fool).",
  "6-7-1": "Strength and patience were present in your love’s past (Strength). Now, you are in an inner questioning process (The Hermit). Soon, a period of magical attraction and communication may begin (The Magician).",
  "6-7-2": "Struggle and patience were present in your love’s past (Strength). Now, you are in a solo analysis process (The Hermit). The future brings a period where an intuitive bond will strengthen (The High Priestess).",
  "6-7-3": "Strength and patience were present in your love’s past (Strength). Now, you are alone analyzing your feelings (The Hermit). The future brings a relationship full of peace and compassion (The Empress).",
  "6-7-4": "Strength and patience stood out in your love’s past (Strength). Now, you are in a solo inner questioning period (The Hermit). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "6-7-5": "Struggle and patience were present in your love’s past (Strength). Now, you are in a solo process (The Hermit). Soon, you may make an important love decision (The Lovers).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "6-7-0": "In your career’s past, struggle and patience were prominent (Strength). Now, you are analyzing alone (The Hermit). Soon, you’ll make an innovative business move (The Fool).",
  "6-7-1": "Strength and patience were present in your professional past (Strength). Now, you are working alone and analyzing (The Hermit). Soon, you’ll achieve magical success in projects (The Magician).",
  "6-7-2": "Struggle and patience stood out in your work past (Strength). Now, you are in a solo analysis process (The Hermit). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "6-7-3": "Struggle and patience were present in your career’s past (Strength). Now, you are analyzing alone (The Hermit). Soon, peace and abundance will increase in the team (The Empress).",
  "6-7-4": "Strength and patience were present in your professional past (Strength). Now, you are in a solo inner questioning period (The Hermit). Soon, your leadership will stand out (The Emperor).",
  "6-7-5": "Struggle and patience were present in your career’s past (Strength). Now, you are in a solo process (The Hermit). Soon, an important work choice may arise (The Lovers).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "7-0-1": "Geçmişte ilişkinde yalnızlık ve içsel sorgulama öne çıktı (Ermiş). Şu anda aşkı özgürce ve yeni başlangıçlarla yaşıyorsun (Aptal). Gelecek ise büyüleyici bir çekim ve iletişim dönemi getiriyor (Büyücü).",
  "7-0-2": "Aşk hayatının geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda ilişkinde özgür ve maceracı bir süreçtesin (Aptal). Yakında sezgisel bir bağ güçlenebilir (Baş Rahibe).",
  "7-0-3": "Geçmişte ilişkinde içsel sorgulama ve yalnızlık ön plandaydı (Ermiş). Şu anda aşkı cesurca ve yeni bir gözle yaşıyorsun (Aptal). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "7-0-4": "Aşk geçmişinde yalnızlık ve içe dönüş vardı (Ermiş). Şu an ilişkinde yeni bir macera dönemindesin (Aptal). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "7-0-5": "Geçmişte ilişkinde yalnızlık ve içsel sorgulama öne çıktı (Ermiş). Şu anda aşkı özgürce ve yeni bir gözle yaşıyorsun (Aptal). Yakında önemli bir aşk kararı gündeme gelebilir (Aşıklar).",
  "7-0-6": "Aşk hayatının geçmişinde yalnızlık ve içsel analiz vardı (Ermiş). Şu an ilişkinde maceracı bir ruh hakim (Aptal). Gelecek ise ilişkinde tüm sınavlardan güçlenerek çıkacağın bir dönem olacak (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "7-0-1": "Kariyerinde geçmişte yalnızlık ve analiz öne çıktı (Ermiş). Şu anda yeni işlere açıksın (Aptal). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "7-0-2": "İş hayatının geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda yenilikçi ve maceracı bir süreçtesin (Aptal). Yakında projelerde sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "7-0-3": "Geçmişte işte içsel sorgulama ve yalnızlık vardı (Ermiş). Şu anda yeni projelere açıksın (Aptal). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "7-0-4": "Kariyerinin geçmişinde yalnızlık ve içe dönüş vardı (Ermiş). Şu anda yeni bir iş macerasındasın (Aptal). Yakında liderliğin ön plana çıkacak (İmparator).",
  "7-0-5": "İş geçmişinde yalnızlık ve içsel sorgulama öne çıktı (Ermiş). Şu anda yenilikçi bir süreçtesin (Aptal). Yakında önemli bir iş tercihi gündeme gelebilir (Aşıklar).",
  "7-0-6": "Kariyerinin geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda maceracı bir süreçtesin (Aptal). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "7-0-1": "In the past, solitude and inner questioning were prominent in your relationship (The Hermit). Now, you live love freely and with new beginnings (The Fool). The future brings a period of magical attraction and communication (The Magician).",
  "7-0-2": "Solitude and analysis were present in your love’s past (The Hermit). Now, you are in a free and adventurous process (The Fool). Soon, an intuitive bond may strengthen (The High Priestess).",
  "7-0-3": "Inner questioning and loneliness were present in your love’s past (The Hermit). Now, you live love boldly and with a new perspective (The Fool). The future brings a relationship full of peace and compassion (The Empress).",
  "7-0-4": "Solitude and introspection were present in your love’s past (The Hermit). Now, you’re in a new adventure period (The Fool). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "7-0-5": "Solitude and inner questioning were prominent in your relationship’s past (The Hermit). Now, you live love freely and with a new outlook (The Fool). Soon, an important love decision may arise (The Lovers).",
  "7-0-6": "Solitude and inner analysis were present in your love’s past (The Hermit). Now, there is an adventurous spirit in your relationship (The Fool). The future brings a period when your relationship will grow stronger through every test (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "7-0-1": "In your career’s past, solitude and analysis were prominent (The Hermit). Now, you are open to new jobs (The Fool). Soon, you’ll achieve magical success in projects (The Magician).",
  "7-0-2": "Solitude and analysis were present in your professional past (The Hermit). Now, you’re in an innovative and adventurous process (The Fool). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "7-0-3": "Inner questioning and solitude were present in your work past (The Hermit). Now, you are open to new projects (The Fool). Soon, peace and abundance will increase in the team (The Empress).",
  "7-0-4": "Solitude and introspection were present in your career’s past (The Hermit). Now, you’re on a new business adventure (The Fool). Soon, your leadership will come to the fore (The Emperor).",
  "7-0-5": "Solitude and inner questioning were present in your work past (The Hermit). Now, you are in an innovative process (The Fool). Soon, an important work choice may arise (The Lovers).",
  "7-0-6": "Solitude and analysis were present in your career’s past (The Hermit). Now, there is an adventurous process (The Fool). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "7-1-0": "Geçmişte ilişkinde yalnızlık ve içsel sorgulama vardı (Ermiş). Şu anda büyüleyici bir çekim ve iletişim sürecindesin (Büyücü). Gelecek ise aşkı özgürce ve yeni başlangıçlarla yaşamanı sağlayacak (Aptal).",
  "7-1-2": "Aşk geçmişinde yalnızlık ve içsel analiz vardı (Ermiş). Şu anda büyüleyici bir çekim ve iletişimde bulunuyorsun (Büyücü). Yakında ilişkinde sezgisel bir bağ güçlenecek (Baş Rahibe).",
  "7-1-3": "Geçmişte ilişkinde yalnızlık ve sorgulama vardı (Ermiş). Şu anda ilişkinde büyüleyici bir çekim ve iletişim ön planda (Büyücü). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "7-1-4": "Aşk geçmişinde içsel sorgulama ve yalnızlık vardı (Ermiş). Şu an büyüleyici bir çekim içindesin (Büyücü). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "7-1-5": "Geçmişte ilişkinde yalnızlık ve analiz vardı (Ermiş). Şu anda büyüleyici bir süreçtesin (Büyücü). Yakında önemli bir aşk kararı verebilirsin (Aşıklar).",
  "7-1-6": "Aşk geçmişinde yalnızlık ve çekim vardı (Ermiş). Şu anda büyüleyici bir çekim ve iletişimdesin (Büyücü). Yakında ilişkinde tüm sınavlardan güçlenerek çıkacağın bir dönem başlayacak (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "7-1-0": "Kariyerinde geçmişte yalnızlık ve içsel analiz öne çıktı (Ermiş). Şu anda projelerde büyüleyici başarılar elde ediyorsun (Büyücü). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "7-1-2": "İş hayatının geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda büyüleyici bir süreçtesin (Büyücü). Yakında projelerde sezgilerinle büyük fark yaratacaksın (Baş Rahibe).",
  "7-1-3": "Geçmişte işte yalnızlık ve sorgulama ön plandaydı (Ermiş). Şu an projelerde büyüleyici bir süreçtesin (Büyücü). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "7-1-4": "Kariyerinin geçmişinde yalnızlık ve içsel sorgulama vardı (Ermiş). Şu anda projelerde büyüleyici bir başarı içindesin (Büyücü). Yakında liderliğin öne çıkacak (İmparator).",
  "7-1-5": "İş geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu an projelerde büyüleyici bir süreçtesin (Büyücü). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  "7-1-6": "Kariyerinin geçmişinde yalnızlık ve çekim vardı (Ermiş). Şu anda projelerde büyüleyici bir süreçtesin (Büyücü). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "7-1-0": "In the past, there was solitude and inner questioning in your relationship (The Hermit). Now, you are in a process of magical attraction and communication (The Magician). The future brings a period to live love freely and with new beginnings (The Fool).",
  "7-1-2": "Solitude and inner analysis were present in your love’s past (The Hermit). Now, you are in magical attraction and communication (The Magician). Soon, an intuitive bond will strengthen in your relationship (The High Priestess).",
  "7-1-3": "There was solitude and questioning in your love’s past (The Hermit). Now, there is magical attraction and communication (The Magician). The future brings a relationship full of peace and compassion (The Empress).",
  "7-1-4": "Inner questioning and solitude were present in your love’s past (The Hermit). Now, there is magical attraction (The Magician). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "7-1-5": "Solitude and analysis were prominent in your love’s past (The Hermit). Now, you are in a magical process (The Magician). Soon, you may make an important love decision (The Lovers).",
  "7-1-6": "Solitude and attraction were present in your love’s past (The Hermit). Now, there is magical attraction and communication (The Magician). Soon, you’ll grow stronger through every test in your relationship (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "7-1-0": "In your career’s past, solitude and inner analysis were prominent (The Hermit). Now, you’re achieving magical success in projects (The Magician). Soon, an innovative business move awaits (The Fool).",
  "7-1-2": "Solitude and analysis were present in your professional past (The Hermit). Now, you’re in a magical process (The Magician). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "7-1-3": "Solitude and questioning were present in your work past (The Hermit). Now, you are in a magical process in projects (The Magician). Soon, peace and abundance will increase in the team (The Empress).",
  "7-1-4": "Inner questioning and solitude were present in your career’s past (The Hermit). Now, you are in a magical process in projects (The Magician). Soon, your leadership will stand out (The Emperor).",
  "7-1-5": "Solitude and analysis were prominent in your work past (The Hermit). Now, you are in a magical and successful process (The Magician). Soon, an important work choice may arise (The Lovers).",
  "7-1-6": "Solitude and attraction were present in your professional past (The Hermit). Now, you are in a magical process in projects (The Magician). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "7-2-0": "Geçmişte ilişkinde yalnızlık ve içsel analiz vardı (Ermiş). Şu anda duygularını ve ilişkiyi sezgisel olarak değerlendiriyorsun (Baş Rahibe). Gelecek ise aşkı cesurca ve yeni bir gözle yaşamanı sağlayacak (Aptal).",
  "7-2-1": "Aşk hayatının geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda ilişkinde içsel bir gözlem ve sezgi sürecindesin (Baş Rahibe). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "7-2-3": "Geçmişte ilişkinde yalnızlık ve analiz ön plandaydı (Ermiş). Şu an ilişkinde derin bir sezgi süreci var (Baş Rahibe). Gelecek ise huzur ve şefkat dolu bir ilişkiyi getiriyor (İmparatoriçe).",
  "7-2-4": "Aşk geçmişinde yalnızlık ve içe dönüş vardı (Ermiş). Şu anda ilişkinde sezgisel bir analiz sürecindesin (Baş Rahibe). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "7-2-5": "Geçmişte ilişkinde yalnızlık ve analiz öne çıktı (Ermiş). Şu anda ilişkinde içsel ve sezgisel bir süreçtesin (Baş Rahibe). Yakında önemli bir aşk kararı gündeme gelebilir (Aşıklar).",
  "7-2-6": "Aşk geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda içsel bir sorgulama ve sezgi sürecindesin (Baş Rahibe). Yakında ilişkinde tüm sınavlardan güçlenerek çıkacağın bir dönem olacak (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "7-2-0": "Kariyerinde geçmişte yalnızlık ve analiz vardı (Ermiş). Şu anda sezgisel bir analiz ve gözlem sürecindesin (Baş Rahibe). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "7-2-1": "İş geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda içsel analiz ve sezgisel bir süreçtesin (Baş Rahibe). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "7-2-3": "Geçmişte işte yalnızlık ve analiz öne çıktı (Ermiş). Şu anda derin bir gözlem sürecindesin (Baş Rahibe). Yakında ekipte huzur ve bereket artacak (İmparatoriçe).",
  "7-2-4": "Kariyerinin geçmişinde yalnızlık ve içsel sorgulama vardı (Ermiş). Şu anda gözlem ve analiz sürecindesin (Baş Rahibe). Yakında liderliğin öne çıkacak (İmparator).",
  "7-2-5": "İş geçmişinde yalnızlık ve analiz öne çıktı (Ermiş). Şu anda sezgisel ve gözlemsel bir süreçtesin (Baş Rahibe). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  "7-2-6": "Kariyerinin geçmişinde yalnızlık ve analiz vardı (Ermiş). Şu anda içsel sorgulama ve gözlem sürecindesin (Baş Rahibe). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "7-2-0": "In the past, there was solitude and inner analysis in your relationship (The Hermit). Now, you are evaluating your feelings and the relationship intuitively (The High Priestess). The future brings a period to live love boldly and with a new perspective (The Fool).",
  "7-2-1": "Solitude and analysis were present in your love’s past (The Hermit). Now, you are in an inner observation and intuition process (The High Priestess). Soon, a period of magical attraction and communication may begin (The Magician).",
  "7-2-3": "Solitude and analysis were prominent in your love’s past (The Hermit). Now, there is a deep intuition process (The High Priestess). The future brings a relationship full of peace and compassion (The Empress).",
  "7-2-4": "Solitude and introspection were present in your love’s past (The Hermit). Now, you are in an intuitive analysis process (The High Priestess). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "7-2-5": "Solitude and analysis were prominent in your relationship’s past (The Hermit). Now, you are in an inner and intuitive process (The High Priestess). Soon, an important love decision may arise (The Lovers).",
  "7-2-6": "Solitude and analysis were present in your love’s past (The Hermit). Now, you are in an inner questioning and intuition process (The High Priestess). Soon, you’ll grow stronger through every test in your relationship (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "7-2-0": "In your career’s past, there was solitude and analysis (The Hermit). Now, you are in an intuitive analysis and observation process (The High Priestess). Soon, you’ll make an innovative business move (The Fool).",
  "7-2-1": "Solitude and analysis were present in your professional past (The Hermit). Now, you are in an inner analysis and intuitive process (The High Priestess). Soon, you’ll achieve magical success in projects (The Magician).",
  "7-2-3": "Solitude and analysis were prominent in your work past (The Hermit). Now, you are in a deep observation process (The High Priestess). Soon, peace and abundance will increase in the team (The Empress).",
  "7-2-4": "Solitude and inner questioning were present in your career’s past (The Hermit). Now, you are in an observation and analysis process (The High Priestess). Soon, your leadership will stand out (The Emperor).",
  "7-2-5": "Solitude and analysis were prominent in your work past (The Hermit). Now, you are in an intuitive and observational process (The High Priestess). Soon, an important work choice may arise (The Lovers).",
  "7-2-6": "Solitude and analysis were present in your career’s past (The Hermit). Now, you are in an inner questioning and observation process (The High Priestess). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.tr.ask, {
  "7-3-0": "Geçmişte ilişkinde yalnızlık ve huzur ön plandaydı (Ermiş). Şu anda ilişkinde huzur ve paylaşım hakim (İmparatoriçe). Gelecek ise aşkı cesurca ve yeni bir gözle yaşamanı sağlayacak (Aptal).",
  "7-3-1": "Aşk hayatının geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu anda ilişkinde huzur ve bereket ön planda (İmparatoriçe). Yakında büyüleyici bir çekim ve iletişim başlayabilir (Büyücü).",
  "7-3-2": "Geçmişte ilişkinde yalnızlık ve huzur vardı (Ermiş). Şu anda şefkatli ve paylaşımcı bir süreçtesin (İmparatoriçe). Gelecek ise sezgisel bir bağın güçlenmesini sağlayacak (Baş Rahibe).",
  "7-3-4": "Aşk geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu anda ilişkinde huzur ve paylaşım hakim (İmparatoriçe). Yakında ilişkinde ciddi ve sağlam adımlar atılacak (İmparator).",
  "7-3-5": "Geçmişte ilişkinde yalnızlık ve huzur vardı (Ermiş). Şu anda şefkat ve bereket hakim (İmparatoriçe). Yakında önemli bir aşk kararı verebilirsin (Aşıklar).",
  "7-3-6": "Aşk geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu an ilişkinde paylaşım ve huzur hakim (İmparatoriçe). Yakında tüm sınavlardan güçlenerek çıkacağın bir süreç başlayacak (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.tr.kariyer, {
  "7-3-0": "Kariyerinde geçmişte yalnızlık ve huzur ön plandaydı (Ermiş). Şu anda üretken ve paylaşımcısın (İmparatoriçe). Yakında yenilikçi bir iş adımı seni bekliyor (Aptal).",
  "7-3-1": "İş hayatının geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu anda ekipte huzur ve bereket hakim (İmparatoriçe). Yakında projelerde büyüleyici başarılar elde edeceksin (Büyücü).",
  "7-3-2": "Geçmişte işte yalnızlık ve huzur ön plandaydı (Ermiş). Şu an üretken ve paylaşımcı bir süreçtesin (İmparatoriçe). Yakında projelerde sezgilerinle fark yaratacaksın (Baş Rahibe).",
  "7-3-4": "Kariyerinin geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu anda ekipte paylaşım ve huzur hakim (İmparatoriçe). Yakında liderliğin öne çıkacak (İmparator).",
  "7-3-5": "İş geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu anda ekipte şefkat ve bereket hakim (İmparatoriçe). Yakında önemli bir iş tercihiyle karşılaşabilirsin (Aşıklar).",
  "7-3-6": "Kariyerinin geçmişinde yalnızlık ve huzur vardı (Ermiş). Şu anda paylaşımcı ve huzurlu bir süreçtesin (İmparatoriçe). Yakında tüm engelleri aşarak güç kazanacaksın (Güç).",
  // ...
});
Object.assign(comboSummaryTexts.en.ask, {
  "7-3-0": "In the past, there was solitude and peace in your relationship (The Hermit). Now, there is peace and sharing in your relationship (The Empress). The future brings a period to live love boldly and with a new perspective (The Fool).",
  "7-3-1": "Solitude and peace were present in your love’s past (The Hermit). Now, peace and abundance are prominent (The Empress). Soon, a period of magical attraction and communication may begin (The Magician).",
  "7-3-2": "Solitude and peace were present in your love’s past (The Hermit). Now, you are in a compassionate and sharing process (The Empress). The future brings a period where an intuitive bond will strengthen (The High Priestess).",
  "7-3-4": "Solitude and peace were present in your love’s past (The Hermit). Now, there is peace and sharing (The Empress). Soon, serious and solid steps will be taken in your relationship (The Emperor).",
  "7-3-5": "Solitude and peace were prominent in your relationship’s past (The Hermit). Now, there is compassion and abundance (The Empress). Soon, you may make an important love decision (The Lovers).",
  "7-3-6": "Solitude and peace were present in your love’s past (The Hermit). Now, there is sharing and peace in your relationship (The Empress). Soon, you’ll grow stronger through every test in your relationship (Strength).",
  // ...
});
Object.assign(comboSummaryTexts.en.kariyer, {
  "7-3-0": "In your career’s past, solitude and peace were prominent (The Hermit). Now, you are productive and sharing (The Empress). Soon, you’ll make an innovative business move (The Fool).",
  "7-3-1": "Solitude and peace were present in your professional past (The Hermit). Now, peace and abundance are prominent in the team (The Empress). Soon, you’ll achieve magical success in projects (The Magician).",
  "7-3-2": "Solitude and peace were prominent in your work past (The Hermit). Now, you are in a productive and sharing process (The Empress). Soon, your intuition will make a big difference in projects (The High Priestess).",
  "7-3-4": "Solitude and peace were present in your career’s past (The Hermit). Now, there is sharing and peace in the team (The Empress). Soon, your leadership will stand out (The Emperor).",
  "7-3-5": "Solitude and peace were present in your work past (The Hermit). Now, there is compassion and abundance in the team (The Empress). Soon, an important work choice may arise (The Lovers).",
  "7-3-6": "Solitude and peace were present in your professional past (The Hermit). Now, you are in a sharing and peaceful process (The Empress). Soon, you’ll gain strength by overcoming all obstacles (Strength).",
  // ...
});
Object.assign(cardMeanings.tr.gecmis, {
  "0": "Geçmiş aşk hayatında cesaretin ve özgürlüğün öne çıkmış olabilir. Hiçbir şeyi kafana takmadan, içindeki çocuğu dinleyerek ilişkilerine adım attın. Eski hataların, yeni heyecanların ve yaşadığın sürprizler aşk yolculuğunun en belirgin izleriydi. Bu dönemde iç sesini dinlemiş, bazen plansızca ama saf bir inançla kalbini açmışsın. Şimdiye kadar öğrendiğin en büyük ders, risk almanın bazen aşkı gerçek anlamda deneyimlemenin yolu olduğu.",
  "kariyer": "Kariyer yolculuğunda geçmişte yeniliklere açık oldun. Klişeleri yıktın, başkalarının denemediği yolları seçtin. Cesaretin ve maceracı ruhun seni zaman zaman belirsizliğe sürüklese de, kendi tarzını yaratmana yardımcı oldu. Geçmiş işlerinde korkusuzca adımlar atarak özgüven kazandın.",
  "normal": "Hayatının geçmişinde ani başlangıçlar, sürpriz kararlar ve beklenmedik değişimler vardı. Aptal kartı, bu dönemde yaşamı fazla sorgulamadan akışına bıraktığını ve spontane hareket ettiğini gösteriyor. Bu süreç, sana hayatı hafife almanın, anda kalmanın değerini öğretmiş olabilir.",
});
Object.assign(cardMeanings.tr.simdi, {
  "0": "Şu anda aşk hayatında yeni bir sayfa açıyorsun! Cesur, korkusuz ve özgür bir ruhla hareket ediyorsun. Kalbinin sesini dinliyor, kurallar yerine duygularına öncelik veriyorsun. Her an yeni bir maceraya atılmaya hazırsın. Şu anda romantik ilişkilerde 'anı yaşa' felsefesini benimsemiş olabilirsin.",
  "kariyer": "Kariyerinde yeni bir dönem başladı. Risk almaktan çekinmiyorsun. Yaratıcılığın yüksek, özgür ve yenilikçi fikirlere açıksın. Şu anda alışılmışın dışında bir yol izliyor, kariyerinde taze bir başlangıç yapıyorsun.",
  "normal": "Hayatında yeni bir başlangıç eşiğindesin. Hiçbir engeli büyütmeden, kendine güvenle ilerliyorsun. Aptal kartı şu anki dönemde sana hafiflik, özgürlük ve umut getiriyor. Her şeyin mümkün olduğuna inandığın, pozitif bir ruh halindesin.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "0": "Aşk yolculuğunda çok yakında yeni bir macera kapıda! Tüm korkularını bırakıp, kalbini tamamen açacağın biriyle karşılaşabilirsin. Ön yargısız, sıfırdan başlayan, çok heyecanlı bir aşk seni bekliyor. Gelecekte Aptal kartı; aşkı tamamen yeni bir gözle deneyimleyeceğini ve hayatına taptaze bir enerji geleceğini müjdeliyor.",
  "kariyer": "Yakında kariyerinde sana tamamen yeni bir yol açılacak. Farklı projelere, iş değişikliklerine veya cesur girişimlere hazır ol. Gelecek, seni klasik düzenin dışına çıkaracak, yeni keşifler yapmaya itecek. Risk almaktan çekinmezsen çok şey kazanabilirsin.",
  "normal": "Önünde keşfedilmemiş fırsatlar, heyecanlı başlangıçlar var. Yakın gelecekte Aptal kartı, hayatına beklenmedik sürprizler ve umut dolu yeni deneyimler getirecek. Korkusuzca adım atarsan ödülü büyük olacak.",
});

Object.assign(cardMeanings.en.past, {
  "0": "In your past love life, you were marked by courage and freedom. You took steps into relationships by listening to your inner child, often with little worry and plenty of faith. Mistakes, excitement, and surprises were a big part of your love journey. The Fool suggests that you learned the value of risk and the meaning of truly experiencing love.",
  "career": "In your career, you embraced innovation and fresh starts. You broke clichés, tried paths that others avoided. Your bravery sometimes led you into the unknown, but you built your own style. Past work experiences gave you confidence and a unique outlook.",
  "normal": "Your past was full of sudden beginnings, spontaneous decisions, and unexpected changes. The Fool means you let life flow, learned to live lightly, and valued the moment. This phase likely taught you the beauty of taking things easy.",
});
Object.assign(cardMeanings.en.present, {
  "0": "Right now, you’re opening a new page in your love life! With courage and a free spirit, you follow your heart—not the rules. You’re ready for a new adventure at any moment and may be living by the motto 'seize the day' in romance.",
  "career": "A fresh period has started in your career. You’re not afraid to take risks. Your creativity is high, you’re open to new ideas, and you’re making a bold start. You’re walking an unconventional path right now.",
  "normal": "You’re at the threshold of a new beginning in your life. You’re advancing with confidence, without magnifying obstacles. The Fool brings lightness, freedom, and hope to your present. You’re in a positive, anything-is-possible mindset.",
});
Object.assign(cardMeanings.en.future, {
  "0": "Very soon, a new adventure in love awaits! You may meet someone and open your heart with zero prejudice, starting from scratch. An exciting, brand-new romance is coming. The Fool says you’ll experience love from a whole new perspective and with fresh energy.",
  "career": "Soon, a brand new career path will open for you. Be ready for different projects, changes, or bold initiatives. The future will push you to explore beyond the ordinary. If you’re brave, you’ll gain much.",
  "normal": "Ahead are unexplored opportunities and exciting beginnings. The Fool will bring unexpected surprises and hopeful new experiences to your life in the near future. Step forward without fear—the reward will be great.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "1": "Geçmiş aşk hayatında çekim gücün ve iletişimin ön plandaydı. Karşındakiler üzerinde büyüleyici bir etki yaratmış, ilişkilerini tutkulu bir şekilde yönetmiş olabilirsin. Bazen fazla iddialı veya manipülatif davrandığın dönemler de olmuş olabilir. Büyücü kartı, geçmişte aşkı ellerinle şekillendirmeye çalıştığını gösteriyor.",
  "kariyer": "Kariyerinde geçmişte büyük fırsatlar ve yaratıcı projelerle karşılaştın. İşini zekan ve pratikliğinle ileri taşıdın. Büyücü, iş ortamında başkalarını ikna edebilen, yeteneklerini sergileyen biri olduğunu işaret eder. Geçmişte başarıya ulaşmak için elindeki tüm araçları kullanmışsın.",
  "normal": "Geçmişte hayatında olaylara yön veren, çözümleri elinde toplayan biriydin. Zorluklara karşı pratik yaklaşımlar sergiledin, çevren üzerinde etki kurmayı başardın. Büyücü kartı, geçmişte başarma azminin ve özgüveninin yüksek olduğunu vurgular.",
});
Object.assign(cardMeanings.tr.simdi, {
  "1": "Şu anda aşk hayatında büyüleyici bir enerji taşıyorsun. Karşı tarafı etkileyebilecek, ilişkide iletişimi güçlendirecek bir döneme girdin. Şu an flörtlerde ya da ilişkinde sözlerin, davranışların ve enerjinle dikkat çekiyorsun. Her türlü duyguyu ustaca ifade ediyorsun.",
  "kariyer": "Kariyerinde şu anda yeteneklerinle fark yaratacağın bir dönemdesin. Her şeyi kontrol edebilecek güçte ve motivasyondasın. Proje veya iş başvurularında özgüvenin yüksek, fırsatları iyi değerlendirebilirsin.",
  "normal": "Hayatının bu döneminde elin kolun çok becerikli, sorunlara kolayca çözüm buluyorsun. Büyücü kartı, her şeyin senin iradene bağlı olarak şekillendiği bir dönemde olduğunu gösteriyor.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "1": "Aşk hayatında yakın gelecekte karizmatik ve çekici bir dönem başlıyor! Kendini özgürce ifade edebileceğin, karşı tarafı etkileyip büyüleyeceğin bir aşk yaşanabilir. Yeni biriyle tanışmak veya mevcut ilişkide taze bir heyecan yakalamak mümkün.",
  "kariyer": "Yakında kariyerinde büyük fırsatlar ve önemli başarılar seni bekliyor. Büyücü kartı, elindeki tüm yetenekleri parlatabileceğin, dikkat çekici bir projeye veya sunuma hazırlanabileceğini gösteriyor.",
  "normal": "Yakın gelecekte çevreni ve hayatındaki gelişmeleri istediğin gibi şekillendirme şansı bulacaksın. Yaratıcılığın ve girişimciliğin ön planda olacak.",
});

Object.assign(cardMeanings.en.past, {
  "1": "In your past love life, your charm and communication were at the forefront. You had a magnetic effect on others and managed your relationships with passion. Sometimes you may have been too assertive or even a bit manipulative. The Magician suggests you tried to shape love with your own hands.",
  "career": "In your career, you encountered big opportunities and creative projects in the past. You advanced with intelligence and practicality. The Magician marks someone who can persuade others and display talents at work. You made use of every tool available to succeed.",
  "normal": "In the past, you were someone who directed events in life and held the solutions. You showed practical approaches to difficulties and made an impact on your surroundings. The Magician highlights a period of high ambition and confidence.",
});
Object.assign(cardMeanings.en.present, {
  "1": "You carry a magical energy in your love life right now. You’re entering a period where you can strengthen communication and impress your partner. Whether in flirting or relationships, your words and actions draw attention. You express emotions skillfully.",
  "career": "You’re in a phase where your skills make a difference at work. You’re motivated and have the power to control situations. Your confidence is high in projects or job applications, and you can make the most of opportunities.",
  "normal": "Right now, you are dexterous and quickly solve problems. The Magician means that everything is shaped by your willpower and effort.",
});
Object.assign(cardMeanings.en.future, {
  "1": "A charismatic and attractive period in love is approaching! You’ll be able to express yourself freely, captivate someone, and experience an enchanting romance. You may meet someone new or revive excitement in your current relationship.",
  "career": "Soon, major opportunities and important achievements await in your career. The Magician shows you’ll polish your talents and possibly prepare for an impressive project or presentation.",
  "normal": "In the near future, you’ll have the chance to shape your environment and life events as you wish. Your creativity and initiative will shine.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "2": "Geçmiş aşk hayatında hislerine güvenmeyi öğrenmiş, ilişkilerde sezgilerinle yol almış olabilirsin. Açıkça söylenmeyen duygular, gizli kalan sırlar veya karmaşık bir iletişim dönemi yaşanmış olabilir. Baş Rahibe kartı, ilişkide derinleşmek, iç sesini dinlemek ve sabırlı olmak gerektiğini öğretti.",
  "kariyer": "Kariyerinde geçmişte önemli konularda sezgilerinle hareket ettin. Arka planda kalsan bile olayların gerçek yüzünü sezebildin. Dedikodulardan, işyerindeki gizli gelişmelerden haberin oldu. Bazen sadece gözlemci oldun, ama doğru zamanda harekete geçtin.",
  "normal": "Geçmişte hayatında kendini geri plana çekip iç dünyana dönmeyi tercih ettin. Her şeyin göründüğü gibi olmadığını fark ettin. Sabır, sezgi ve sakinlik sana büyük katkılar sağladı.",
});
Object.assign(cardMeanings.tr.simdi, {
  "2": "Aşk hayatında şu anda sezgilerin çok güçlü. Karşındaki kişinin gerçek niyetini anlayabiliyor, ilişkide sözlerden çok hislere güveniyorsun. Duygusal anlamda bir dönemeçtesin; yüzeyde göremediğin detaylara dikkat etmelisin.",
  "kariyer": "Kariyerinde şu anda olayları perde arkasından izliyor, insanları ve gelişmeleri dikkatlice gözlemliyorsun. Bilgeliğin ve sezgilerinle hareket ediyorsun. Görünmeyeni görme gücüne sahipsin.",
  "normal": "Hayatında şu anda derin bir iç gözlem ve sezgi dönemi yaşıyorsun. Başkalarının niyetlerini kolayca sezebiliyor, olaylara yüzeyden bakmak yerine derinlemesine analiz yapabiliyorsun.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "2": "Yakın gelecekte aşk hayatında saklı duygular açığa çıkabilir. İç sesin seni doğru yola götürecek. Sabırlı olursan, karşındaki kişinin gerçek duygularını öğrenebilirsin. Sırlar aydınlanacak.",
  "kariyer": "Kariyerinde yakın gelecekte önemli bir sırrı ya da arka planda dönen bir gelişmeyi fark edeceksin. Sezgilerinle hareket edersen büyük fırsatlar seni bulacak.",
  "normal": "Yakında içgüdülerinin seni yönlendirdiği bir döneme giriyorsun. Sakin kalıp sezgilerine güvenmen gerekiyor. Bilgeliğin artacak, görünmeyen gerçekleri göreceksin.",
});

Object.assign(cardMeanings.en.past, {
  "2": "In your past love life, you learned to trust your instincts and followed intuition in relationships. There may have been unspoken feelings, hidden secrets, or complex communication. The High Priestess taught you to listen to your inner voice and be patient.",
  "career": "In your career, you acted on intuition in important matters. Even if you stayed in the background, you sensed the truth behind situations. You were aware of gossip and secret developments. Sometimes, you waited and struck at the right moment.",
  "normal": "In the past, you retreated into your inner world. You realized not everything is as it seems. Patience, intuition, and calmness greatly benefited you.",
});
Object.assign(cardMeanings.en.present, {
  "2": "Your intuition is very strong in your love life right now. You sense your partner’s true intentions and trust feelings more than words. You’re at a turning point emotionally—pay attention to subtle details you can’t see on the surface.",
  "career": "You’re watching people and developments from behind the scenes at work. You move with wisdom and intuition. You have the power to see what’s hidden.",
  "normal": "You’re experiencing a deep period of introspection and intuition. You easily sense others’ motives and analyze situations deeply rather than superficially.",
});
Object.assign(cardMeanings.en.future, {
  "2": "In the near future, hidden feelings may come to light in your love life. Your inner voice will lead you in the right direction. If you’re patient, you’ll discover your partner’s true feelings. Secrets will be revealed.",
  "career": "Soon, you’ll notice an important secret or behind-the-scenes development at work. Following your intuition will bring major opportunities.",
  "normal": "Soon, you’ll enter a period guided by your instincts. You need to remain calm and trust your intuition. Your wisdom will grow, and you’ll see unseen truths.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "3": "Geçmiş aşk hayatında huzur, şefkat ve verimlilik ön plandaydı. İlişkilerinde duygusal olarak doyumlu, karşılıklı anlayışa dayalı bir dönem yaşamış olabilirsin. İmparatoriçe, geçmişte aşkı sahiplenmeyi, ilgini esirgememeyi ve sevdiklerine değer vermeyi vurgular.",
  "kariyer": "Kariyerinde geçmişte ekip çalışması, üretkenlik ve bereket öne çıktı. Yaratıcılığınla veya çözüm odaklı yaklaşımınla çevrene ilham oldun. İş yerinde destekleyici biri olarak öne çıktın ve başkalarının gelişimine katkı sundun.",
  "normal": "Hayatının geçmişinde sevdiklerine, ailene veya dostlarına karşı koruyucu, fedakar ve şefkatli davrandın. İmparatoriçe kartı, sıcak ilişkiler, huzurlu bir yuva veya bereketli bir dönem geçirdiğini gösterir.",
});
Object.assign(cardMeanings.tr.simdi, {
  "3": "Aşk hayatında şu anda bereketli ve huzurlu bir dönemdesin. İlişkinde şefkat, anlayış ve paylaşım öne çıkıyor. Sevgiye açık, duygularını cömertçe paylaşan, karşı tarafa güven veren bir enerji taşıyorsun.",
  "kariyer": "Kariyerinde şu anda üretkenliğin yüksek. Yaratıcı projelerde yer alabilir, ekip içinde liderlik rolünü üstlenebilirsin. Başkalarına ilham veren, motive eden ve verimli çalışan birisin.",
  "normal": "Hayatının bu döneminde huzur, paylaşım ve bereket ön planda. Sevdiklerinle sıcak ilişkiler kuruyor, çevrene destek oluyorsun. Yeni projeler ya da evle ilgili güzel gelişmeler yaşanabilir.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "3": "Aşk hayatında yakın gelecekte büyük bir şefkat, huzur ve bağlılık dönemi geliyor. Sevgi dolu, besleyici bir ilişkiye adım atabilirsin. Mevcut ilişkinde ise duygular daha derinleşecek.",
  "kariyer": "Yakında iş hayatında bereketli bir dönem seni bekliyor. Yaratıcılığın artacak, projelerinde başarı ve üretkenlik ön plana çıkacak. Başkaları tarafından takdir edilip destek göreceksin.",
  "normal": "Yakın gelecekte huzurlu ve bereketli bir dönem geliyor. Yeni dostluklar, aile bağlarında güçlenme veya evde güzellikler yaşayabilirsin. Hayatında pozitif gelişmeler öne çıkacak.",
});

Object.assign(cardMeanings.en.past, {
  "3": "In your past love life, peace, compassion, and productivity were prominent. You may have experienced emotionally fulfilling and understanding relationships. The Empress highlights nurturing, giving affection, and valuing loved ones.",
  "career": "In your career, teamwork, productivity, and abundance stood out in the past. You inspired others with creativity and a solution-oriented approach. You were known for supporting others’ growth.",
  "normal": "In the past, you acted protectively and compassionately towards family or friends. The Empress means warm relationships, a peaceful home, or a prosperous period.",
});
Object.assign(cardMeanings.en.present, {
  "3": "You’re in a fruitful and peaceful period in your love life. Compassion, understanding, and sharing are at the forefront. You’re open to love and share your feelings generously, giving your partner security.",
  "career": "You’re highly productive in your career now. You may lead creative projects or play a leadership role in the team. You inspire, motivate, and work efficiently.",
  "normal": "Currently, peace, sharing, and abundance are at the forefront. You have warm connections with loved ones and support your surroundings. There may be new projects or pleasant developments at home.",
});
Object.assign(cardMeanings.en.future, {
  "3": "In the near future, a period of great compassion, peace, and commitment is coming in love. You may start a nurturing and loving relationship, or your current one will deepen emotionally.",
  "career": "A prosperous period is approaching in your professional life. Creativity will increase, and you’ll be successful and productive in projects. You’ll be appreciated and supported by others.",
  "normal": "Soon, a peaceful and abundant period is coming. New friendships, strengthened family ties, or pleasant developments at home will stand out. Positive changes are ahead in your life.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "4": "Geçmiş aşk hayatında kontrol, güven ve istikrar arayışın ön plandaydı. Kuralcı veya koruyucu bir tutum takınmış olabilir, ilişkilerde sağlam temeller atmak istemişsin. Bazen fazla dominant ya da duygularını bastıran bir yapın olmuş olabilir.",
  "kariyer": "Kariyerinde geçmişte disiplin, düzen ve liderlik ön plandaydı. Otoritenin önemli olduğu, işlerinde kurallara bağlı, sorumluluklarını aksatmayan biri olarak öne çıktın. Takımda veya işte yönlendirici bir rol üstlendin.",
  "normal": "Hayatının geçmişinde düzen kurmak, hayatı kontrol altına almak ve istikrar sağlamak için büyük çaba sarf ettin. Zaman zaman duygularını geri plana atıp mantığınla hareket ettin. İmparator kartı, olgunlaşma ve sınır çizme dönemine işaret eder.",
});
Object.assign(cardMeanings.tr.simdi, {
  "4": "Aşk hayatında şu an ciddiyet, sadakat ve güven duygusu öne çıkıyor. Sağlam temeller atmak, ilişkinin uzun vadeli olmasını sağlamak için çabalıyorsun. Partnerine karşı koruyucu bir tavır sergileyebilirsin.",
  "kariyer": "Şu anda kariyerinde disiplinli, planlı ve hedef odaklı hareket ediyorsun. İmparator kartı, işte kararlı ve liderlik vasıflarını öne çıkardığın bir dönemi simgeler. Sorumluluklarını ciddiyetle yerine getiriyorsun.",
  "normal": "Hayatının bu döneminde sağlam adımlar atıyor, geleceğini güvence altına almak için çalışıyorsun. Ailen ve sevdiklerin için koruyucu bir rol üstlenebilirsin. Düzen ve otorite senin için çok önemli.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "4": "Yakın gelecekte ilişkinde daha fazla ciddiyet ve istikrar hakim olacak. Güçlü, koruyucu ve lider bir partner ile karşılaşabilirsin. Mevcut ilişkinde ise bağlar daha da sağlamlaşacak.",
  "kariyer": "İş hayatında yakın zamanda yönetici bir pozisyona yükselebilirsin. Sorumlulukların artacak ama başarıya ulaşmak için gereken disipline sahipsin. Kurduğun düzen sayesinde başkalarına örnek olacaksın.",
  "normal": "Gelecekte hayatında istikrar, güven ve düzen hakim olacak. Maddi veya manevi anlamda kendini daha güçlü ve güvende hissedeceksin. Kendi sınırlarını net bir şekilde belirleyip sağlam temeller atacaksın.",
});

Object.assign(cardMeanings.en.past, {
  "4": "In your past love life, control, security, and the pursuit of stability were prominent. You may have taken on a protective or rule-oriented role, aiming to establish solid foundations in relationships. Sometimes, you might have been dominant or suppressed your emotions.",
  "career": "In your career, discipline, order, and leadership stood out in the past. Authority mattered, and you emerged as someone who adhered to rules and fulfilled responsibilities. You often took a guiding role in the team.",
  "normal": "In your past, you worked hard to establish order, control life, and ensure stability. Sometimes you set aside feelings and relied on logic. The Emperor card marks maturity and setting boundaries.",
});
Object.assign(cardMeanings.en.present, {
  "4": "Right now, seriousness, loyalty, and a sense of security are at the forefront in your love life. You’re striving to lay strong foundations for a long-term relationship and may display a protective attitude toward your partner.",
  "career": "You’re moving forward with discipline, planning, and a goal-oriented mindset. The Emperor signifies a time when you display strong leadership qualities at work. You’re handling responsibilities seriously.",
  "normal": "Currently, you are taking firm steps and working to secure your future. You may play a protective role for family and loved ones. Order and authority are highly important to you now.",
});
Object.assign(cardMeanings.en.future, {
  "4": "In the near future, greater seriousness and stability will dominate your relationship. You may meet a strong, protective, leader-type partner, or your current relationship will become even more secure.",
  "career": "Soon, you may be promoted to a managerial position. Responsibilities will increase, but you have the discipline needed for success. The order you establish will set an example for others.",
  "normal": "In the future, stability, security, and order will prevail in your life. You’ll feel stronger and safer, both materially and emotionally. You’ll set clear boundaries and build solid foundations.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "5": "Geçmiş aşk hayatında önemli kararlar, seçimler ve ikilemler ön plandaydı. Kalbinle aklın arasında kalmış, kimi zaman fedakarlıklar yapmak zorunda kalmış olabilirsin. Bazen iki kişi veya iki farklı yol arasında git-gel yaşadın. Aşıklar kartı, geçmişte aşkı seçmenin ve dürüst olmanın ne kadar önemli olduğunu hatırlatır.",
  "kariyer": "Kariyerinde geçmişte önemli bir yol ayrımına geldin. Seçimlerin, ortaklıkların veya iş birliklerinin hayatına etkisi büyük oldu. Zor kararlar vermek, değerlerini sorgulamak ve başkalarıyla uyum içinde çalışmak ön plandaydı.",
  "normal": "Hayatının geçmişinde birden fazla seçenekle karşı karşıya kaldın. Aile, arkadaşlık veya yaşam tarzı konusunda büyük kararlar verdin. Aşıklar kartı, geçmişte yaşanan önemli ayrılıklar veya birleşmeleri simgeler.",
});
Object.assign(cardMeanings.tr.simdi, {
  "5": "Aşk hayatında şu an önemli bir karar aşamasındasın. İlişkinde yol ayrımında olabilir, kalbini dinleyerek en doğru seçimi yapmak zorunda kalabilirsin. Duygusal anlamda dürüst ve net olmanın zamanı.",
  "kariyer": "Kariyerinde şu anda önemli bir tercih yapman gerekebilir. Ortaklık, anlaşma veya yeni bir proje gündeme gelebilir. Doğru insanlarla bir araya gelmek ve iç sesini dinlemek çok önemli.",
  "normal": "Hayatında şu an bir dönüm noktasındasın. Karşına çıkan fırsatlarda seçim yaparken değerlerini ve önceliklerini göz önünde bulundurman gerekiyor.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "5": "Yakın gelecekte aşk hayatında yeni bir karar dönemi geliyor. Karşına iki seçenek çıkabilir ya da mevcut ilişkinde önemli bir dönemeç yaşayabilirsin. İç sesini dinleyerek, aşkı seçmek sana mutluluk getirecek.",
  "kariyer": "İş hayatında yakında önemli bir ortaklık veya seçim seni bekliyor. Bir projede kiminle yola devam edeceğine veya hangi teklifi seçeceğine karar vermen gerekecek. Kararların uzun vadeli etkileri olabilir.",
  "normal": "Gelecekte hayatında önemli bir birleşme, iş birliği ya da dostluk gelişebilir. Seçimlerin hayatına yeni kapılar açacak. Samimi ve dürüst olursan kazanan sen olacaksın.",
});

Object.assign(cardMeanings.en.past, {
  "5": "In your past love life, important decisions, choices, and dilemmas were prominent. You may have been torn between heart and mind, sometimes needing to make sacrifices. The Lovers card reminds you of the importance of choosing love and being honest.",
  "career": "In your career, you faced a crossroads. Choices, partnerships, or collaborations had a big impact. Making tough decisions and working in harmony with others were at the forefront.",
  "normal": "In your past, you faced multiple options and made significant choices about family, friendship, or lifestyle. The Lovers card marks major separations or unions.",
});
Object.assign(cardMeanings.en.present, {
  "5": "You’re at a major decision point in your love life. You may be at a crossroads in your relationship and must listen to your heart to make the best choice. It’s time to be honest and clear emotionally.",
  "career": "You may need to make a significant choice in your career now. Partnership, agreement, or a new project may be on the agenda. Coming together with the right people and listening to your inner voice is crucial.",
  "normal": "You’re at a turning point in life. When faced with opportunities, you need to consider your values and priorities.",
});
Object.assign(cardMeanings.en.future, {
  "5": "Soon, a new decision phase is coming in your love life. You may face two options or reach a critical point in your relationship. Listening to your inner voice and choosing love will bring happiness.",
  "career": "Soon, an important partnership or choice awaits in your career. You’ll need to decide who to continue with or which offer to accept. Your choices may have long-term effects.",
  "normal": "In the future, an important union, collaboration, or friendship may develop. Your choices will open new doors. If you are sincere and honest, you’ll come out ahead.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "7": "Geçmiş aşk hayatında içine kapanmış, yalnız kalmayı tercih etmiş veya duygularını derinlemesine sorgulamış olabilirsin. Yalnızlık, aşkı anlamak ve kendini keşfetmek için bir fırsat oldu. Ermiş kartı, geçmişte yaşanan duygusal çekilmeleri, kabuğuna çekilmeyi ve kalbini koruma isteğini simgeler.",
  "kariyer": "Kariyerinde geçmişte içsel bir sorgulama ve yalnız çalışma dönemi yaşadın. Kendi başına projeler yürüttün veya kalabalıktan uzak durmayı tercih ettin. Bu süreçte deneyimlerinden ve hatalarından çok şey öğrendin.",
  "normal": "Hayatının geçmişinde kendine dönük, derin düşüncelere dalmış, yalnız kalmayı seçmiş olabilirsin. Kendini anlamak, hayatının anlamını bulmak için büyük bir sorgulama ve iç yolculuk yaşadın.",
});
Object.assign(cardMeanings.tr.simdi, {
  "7": "Aşk hayatında şu an içsel bir sorgulama ve yalnızlık sürecindesin. Kendine ve duygularına dönüp gerçekten ne istediğini anlamaya çalışıyorsun. Geçmiş yaralarını sarmak, kalbini dinlemek için kendine vakit veriyorsun.",
  "kariyer": "Kariyerinde şu an bireysel çalışma, yalnızlık veya kendi başına düşünme dönemi yaşıyorsun. İçsel bilgeliğinle hareket ediyor, kararlarını başkalarının etkisi olmadan alıyorsun. Yalnızken üretebileceğin çok şey var.",
  "normal": "Şu anda hayatında içe dönük bir süreçtesin. Kendinle baş başa kalmak, geçmişini sorgulamak ve hayatının yönünü belirlemek istiyorsun. Sakinlik ve huzur arayışındasın.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "7": "Aşk hayatında yakın gelecekte kendine dönme, yalnız kalma ve ilişkileri derinlemesine değerlendirme dönemi geliyor. Bir ilişkiye başlamadan önce kendini iyice tanımak isteyebilirsin. Bu süreç sonunda aşkı bambaşka bir gözle göreceksin.",
  "kariyer": "Yakında kariyerinde yalnız çalışma ya da bireysel projeler gündeme gelebilir. Kendi yolunu çizmek, başkalarından bağımsız hareket etmek isteyebilirsin. Bilgeliğinle öne çıkacaksın.",
  "normal": "Gelecekte hayatında kendinle baş başa kalacağın, derin bir içsel sorgulama dönemi başlıyor. Sakinlik ve yalnızlık seni geliştirecek. Bu süreçte kendini çok daha iyi anlayacaksın.",
});

Object.assign(cardMeanings.en.past, {
  "7": "In your past love life, you may have withdrawn, preferred solitude, or deeply questioned your feelings. Loneliness became an opportunity to understand love and discover yourself. The Hermit symbolizes emotional withdrawal and the desire to protect your heart.",
  "career": "In your career, you experienced a period of inner questioning and working alone. You managed projects independently or preferred to stay away from crowds. You learned much from your experiences and mistakes.",
  "normal": "In the past, you turned inward, delved into deep thoughts, and chose to be alone. You searched for meaning and went through a major inner journey.",
});
Object.assign(cardMeanings.en.present, {
  "7": "Right now, you’re in a period of inner questioning and solitude in love. You’re turning inward to truly understand what you want. You’re giving yourself time to heal and listen to your heart.",
  "career": "Currently, you’re experiencing solo work, loneliness, or independent thinking in your career. You act with inner wisdom and make decisions without outside influence. You have much to produce when you’re alone.",
  "normal": "Now, you’re in an introspective period. You want to be alone, question your past, and determine your life’s direction. You’re seeking peace and calm.",
});
Object.assign(cardMeanings.en.future, {
  "7": "In the near future, a period of turning inward, solitude, and deeply evaluating relationships is coming. You may want to know yourself well before starting a new relationship. You’ll see love from a whole new perspective after this process.",
  "career": "Soon, working alone or individual projects may come to the fore. You’ll want to carve your own path and act independently. Your wisdom will make you stand out.",
  "normal": "In the future, you’ll enter a period of being alone and deep inner questioning. Calm and solitude will help you grow. You’ll understand yourself much better during this process.",
});
Object.assign(cardMeanings.tr.gecmis, {
  "6": "Geçmiş aşk hayatında sabır, dayanıklılık ve duygusal olarak güçlü durmak ön plandaydı. Zor zamanlarda sevgiye tutunmayı başardın; ilişkilerde kırılganlığı iyileştirici bir enerjiyle sarıp sarmaladın. Bazen öfkeni kontrol etmek veya ilişkide huzuru korumak için ekstra çaba gösterdin.",
  "kariyer": "Kariyerinde geçmişte büyük bir direnç gösterdin. Zorluklar karşısında pes etmedin, güçlüklerin üstesinden geldin. Sabırla çalıştın ve her durumda ayakta kalmayı bildin. Güç kartı, eski işlerinde mücadeleci bir ruha sahip olduğunu anlatır.",
  "normal": "Hayatının geçmişinde önemli sınavlardan geçtin. Sabır ve içsel güç geliştirdin, kendini ve başkalarını zor zamanlarda destekledin. Güç kartı, yaşanan zorluklara rağmen dimdik ayakta kalmayı simgeler.",
});
Object.assign(cardMeanings.tr.simdi, {
  "6": "Aşk hayatında şu anda dayanıklılık ve sabır çok önemli. İlişkide anlayışlı, sakin ve güçlü bir enerjiye sahipsin. Sevdiğin kişiye güven veriyorsun. Zor bir süreçte olsan bile sevginle iyileştirici bir etki bırakıyorsun.",
  "kariyer": "Kariyerinde şu an mücadele gerektiren bir dönemden geçiyorsun. Zorluklara göğüs germek, strese dirençli olmak ve ekipte dengeyi korumak önemli. Sakinliğin ve iradenle herkesin takdirini topluyorsun.",
  "normal": "Hayatının bu döneminde güç, sabır ve soğukkanlılık ön planda. Çevrende yaşanan krizlerde herkes senden destek bekliyor. İçsel dengenle olaylara çözüm getirebilirsin.",
});
Object.assign(cardMeanings.tr.gelecek, {
  "6": "Aşk hayatında yakında büyük bir güç sınavı yaşayabilirsin. Birlikte her türlü sorunun üstesinden gelebileceğin, birbirinize tam anlamıyla destek olacağınız bir dönem geliyor. Sabır ve anlayış seni gerçek aşka götürecek.",
  "kariyer": "Yakında iş hayatında seni zorlayacak bir sınavla karşılaşabilirsin. Ama Güç kartı, üstesinden gelecek sabır ve dayanıklılığa sahip olduğunu müjdeliyor. Herkesin güvenini kazanacaksın.",
  "normal": "Yakın gelecekte önemli bir güç gösterisi yapman gerekebilir. Sınavlardan başarıyla geçeceksin. Kendine olan güvenin ve pozitif enerjin çevrendekilere de örnek olacak.",
});

Object.assign(cardMeanings.en.past, {
  "6": "In your past love life, patience, resilience, and emotional strength were prominent. You held onto love through tough times, healing wounds with gentle energy. You worked hard to control anger and maintain peace in the relationship.",
  "career": "In your career, you showed great endurance in the past. You never gave up in the face of challenges and overcame difficulties. You worked patiently and managed to stay strong in every situation. Strength shows a fighting spirit in your old jobs.",
  "normal": "In your past, you went through major tests. You developed patience and inner strength, supporting yourself and others in hard times. Strength symbolizes standing tall despite difficulties.",
});
Object.assign(cardMeanings.en.present, {
  "6": "Resilience and patience are vital in your love life right now. You have a calm, strong energy in relationships, giving security to your partner. Even in tough times, your love is healing.",
  "career": "You’re going through a challenging period at work. Facing difficulties and keeping balance in the team are important. Your calm and willpower earn everyone’s respect.",
  "normal": "Currently, strength, patience, and composure are at the forefront. In any crisis, everyone turns to you for support. You bring solutions with your inner balance.",
});
Object.assign(cardMeanings.en.future, {
  "6": "Soon, you’ll face a great test of strength in love. A period is coming when you’ll overcome all problems together, supporting each other fully. Patience and understanding will lead you to true love.",
  "career": "Soon, you may face a tough challenge at work. But Strength signals that you have the patience and endurance to get through it. You’ll earn everyone’s trust.",
  "normal": "In the near future, you may need to show great strength. You’ll pass the tests successfully. Your confidence and positive energy will inspire those around you.",
});
