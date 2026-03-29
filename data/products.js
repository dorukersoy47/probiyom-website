var ProductGroup = {
  ProfessionalCleaning: 1,
  HomeCleaning: 2,
  PersonalCare: 3,
  ColdMistSpraying: 4,
  IndustrialWaterTreatment: 5,
  Pet: 6,
  Livestock: 7,
};

var ProductGroupLabels = {};
ProductGroupLabels[ProductGroup.ProfessionalCleaning] = "Profesyonel Temizlik Ürünleri";
ProductGroupLabels[ProductGroup.HomeCleaning] = "Ev Temizlik Ürünleri";
ProductGroupLabels[ProductGroup.PersonalCare] = "Kişisel Bakım Ürünleri";
ProductGroupLabels[ProductGroup.ColdMistSpraying] = "Soğuk Sis ve Püskürtme Ürünleri";
ProductGroupLabels[ProductGroup.IndustrialWaterTreatment] = "Endüstriyel Su Arıtma Ürünleri";
ProductGroupLabels[ProductGroup.Pet] = "PET Ürünleri";
ProductGroupLabels[ProductGroup.Livestock] = "Hayvancılık Ürünleri";

var GroupSlugToEnum = {
  professional_cleaning: ProductGroup.ProfessionalCleaning,
  home_cleaning: ProductGroup.HomeCleaning,
  personal_care: ProductGroup.PersonalCare,
  cold_mist_spraying: ProductGroup.ColdMistSpraying,
  industrial_water_treatment: ProductGroup.IndustrialWaterTreatment,
  pet: ProductGroup.Pet,
  livestock: ProductGroup.Livestock,
};

var ProductGroupIntroText = {};

ProductGroupIntroText[ProductGroup.ProfessionalCleaning] = {
  heading: "Geleneksel kimyasal temizlik ürünleri ve dezenfektanlar yüzeyleri ilk bakışta temizlese de;",
  bullets: [
    "Dengeli bir mikrobiyom oluşmasını sağlamaz",
    "Kullanım sıklığı arttıkça, mikrobiyom dengesini olumsuz etkileyebilir",
    "Yüzeylerdeki çiziklere nüfuz etmekte zorlanır. Organik kirlerin barındığı, kötü koku kaynağı olan yağlı ve kirli tabakayı tamamen ortadan kaldıramaz",
    "Uzun süreli temizlik etkisi sağlamadığı için sık ve tekrarlayan temizlik ihtiyacı doğurur",
  ],
  paragraph: "Bu nedenlerle, geleneksel temizlik yaklaşımları kalıcı hijyen ve doğal denge açısından yetersiz kalmaktadır.",
  warning: "Ürünlerimiz temizlik maddesidir ve biyosidal ürün olarak kullanılamaz.",
  imageDir: "images/products_pages/pp_1.png",
  imageName: "Professional Cleaning Products",
};

ProductGroupIntroText[ProductGroup.HomeCleaning] = {
  heading: "Geleneksel kimyasal temizlik ürünleri ve dezenfektanlar yüzeyleri ilk bakışta temizlese de; ",
  bullets: [
    "Dengeli bir mikrobiyom oluşmasını sağlamaz",
    "Kullanım sıklığı arttıkça, mikrobiyom dengesini olumsuz etkileyebilir",
    "Yüzeylerdeki çiziklere nüfuz etmekte zorlanır. Organik kirlerin barındığı, kötü koku kaynağı olan yağlı ve kirli tabakayı tamamen ortadan kaldıramaz",
    "Uzun süreli temizlik etkisi sağlamadığı için sık ve tekrarlayan temizlik ihtiyacı doğurur",
  ],
  paragraph: "Bu nedenlerle, geleneksel temizlik yaklaşımları kalıcı hijyen ve doğal denge açısından yetersiz kalmaktadır. ",
  warning: "",
  imageDir: "images/products_pages/pp_2.png",
  imageName: "Home Cleaning Products",
};

ProductGroupIntroText[ProductGroup.PersonalCare] = {
  heading: "İnsan cildi, sağlığımızın korunması ve sürdürülmesinde hayati rol oynayan trilyonlarca mikroorganizmaya ev sahipliği yapar. Dengeli bir cilt mikrobiyomu, cildin nem dengesini desteklemeye ve doğal yenilenme süreçlerine katkıda bulunmaya yardımcı olur",
  bullets: [
    "Probiyotik cilt bakımı, bu dengeyi desteklemek amacıyla faydalı mikroorganizmalar içerir ve cildin doğal dengesinin sürdürülmesine uzun süreli katkıda bulunur.",    
    "Hücre lizatı (lysis: hücre duvarının parçalanması) veya ısıyla devra dışı bırakılmış probiyotiklerin aksine, spor bazlı formülasyonlarımız canlı probiyotiklerin korunmasını sağlar ve yalnızca cilde uygulandığında aktive olmalarına imkân tanır",
  ],
  paragraph: "Bu sayede, doğal dengeyi destekleyen kalıcı bir etki sunar.",
  warning: "",
  imageDir: "images/products_pages/pp_3.png",
  imageName: "Personal Care Products",
};

ProductGroupIntroText[ProductGroup.ColdMistSpraying] = {
  heading: "Ofisler, oteller ve kamusal alanlar gibi insan yoğun ortamlar, tüm yüzeylerde sürekli olarak organik birikime ve kire maruz kalır.",
  bullets: [
    "VivoTech yüzey Soğuk sisleme (fogging) ve püskürtme çözümümüz, ulaşılması zor alanların daha etkin şekilde işlenmesine yardımcı olur",    
    "Faydalı probiyotiklerin yüzeylere yerleşmesini ve uzun zaman aktif kalmasını sağlar",
    "HVAC (ısıtma, havalandırma ve iklimlendirme), klima veya hava temizleme sistemleriyle kullanıldığında, ortam havasındaki mikrobiyal dengenin desteklenmesine katkıda bulunur.",
  ],
  paragraph: "Kuruduktan sonra etkisi sona eren geleneksel temizlik ürünlerinin aksine, probiyotikler yüzeylerin uzun süre temiz kalamasına katkı sağlar.",
  warning: "",
  imageDir: "images/products_pages/pp_4.png",
  imageName: "Fogging & Misting Products",
};

ProductGroupIntroText[ProductGroup.IndustrialWaterTreatment] = {
  heading: "Probiyotik su arıtma çözümlerimiz, Endüstriyel su tesislerinde organik birikintilere nüfuz ederek temizler, dağıtır ve yeniden oluşumlarını azaltmaya yardımcı olur.",
  bullets: [
    "Büyük endüstriyel su sistemleri ve göletler, sıklıkla, organik birikim, bulanık su ve mikrobiyal dengesizliklerin neden olduğu verimsizlikler  gibi zorluklarla karşı karşıya kalır.",
    "Probiyotiklerin, istenmeyen organik birikintileri etkin şekilde azalttığı, su kalitesini iyileştirdiği ve sert kimyasallara olan bağımlılığı minimize ettiği gösterilmiştir ",    
    "Biyolojik olarak parçalanabilir bileşenler içerir, pH nötrdür",
    "Biyosit içermez",
    "Biyobazlı yüzey aktif maddelerle birlikte yüksek performanslı biyo-dispersan olarak etki gösterir",
    "Endüstriyel soğutma suyu sistemlerinin güvenilirliğini ve performansını artırır.",
    "Gerekli bakım sıklığını azaltarak, kimyasal tüketimini düşürerek ve su ile enerji tasarrufu sağlayarak operasyonel maliyetlerin azaltılmasına katkıda bulunur",
  ],
  paragraph: "Sahadan aldığımız geri bildirimler, bu çözümlerin daha temiz ve daha stabil su sistemlerinin korunmasında yüksek etkinlik sağladığını ve bakım gereksinimlerini önemli ölçüde azalttığını ortaya koymaktadır.",
  warning: "",
  imageDir: "images/products_pages/pp_5.png",
  imageName: "Industrial Water Treatment Products",
};

ProductGroupIntroText[ProductGroup.Livestock] = {
  heading: "Doğada tasarlandı, bilimle mükemmelleştirildi. Hayvan Çiftlikleri ve barınaklarında, Hayvanların toplu halde bulunduğu kapalı yerlerde, dengeli bir mikrobiyal ortamın oluşmasına, hijyenin desteklenmesine, organik birikimin azaltılmasına ve hayvanların yaşam alanlarında dengeli bir mikrobiyomun korunmasına yardımcı olur.",
  bullets: [
    "Probiyotik çiftlik ve Ahır hijyen çözümleri, faydalı mikrobiyal aktiviteyi teşvik ederek amonyak seviyelerinin düşürülmesini sağlar",    
    "Dengeli mikrobiyom ortamında barındırılan hayvanlar",
    "Yüzeylerde dengeli bir mikrobiyom",
    "Minimum koku (özellikle amonyak kaynaklı)",
    "Daha düşük nem seviyesi",
    "Daha kuru altlık ve saman",
    "Hava kalitesinin iyileştirilmesine ve daha temiz barınma koşullarının sağlanmasına katkıda bulunur.",
  ],
  paragraph: "Çiftliklerin kimyasal bazlı dezenfektanlardan uzaklaştığı günümüzde, probiyotikler biyolojik olarak parçalanabilir ve toksik olmayan bir alternatif sunarak hijyenin doğal yollarla desteklenmesini sağlar ve modern sürdürülebilirlik uygulamalarıyla uyum gösterir.",
  warning: "",
  imageDir: "images/products_pages/pp_6.png",
  imageName: "Animal Housing Products",
};

ProductGroupIntroText[ProductGroup.Pet] = {
  heading: "Alerjen ve koku kontrolü – Mutlu patiler, Mutlu sahipler. Probiyotikler, hayvanların deri ve tüy yapısında dengeli bir mikrobiyal ortamın korunmasına ve genel iyi haline katkıda bulunur.",
  bullets: [
    "Evcil Hayvanınızın kendisinde ve çevresinde doğrudan kullanıma uygundur.", 
    "Alerjen ve koku kontrolü sağlar",
    "Mikroskobik derin temizlik sağlayarak en küçük kir ve kalıntıları dahi yokeder",
    "Evcil hayvanınızın tüy yapısındaki proteinleri, tozu ve organik kirleri temizler", 
    "Evcil hayvanınızın üzerinde ve yaşam alanında dengeli bir mikrobiyomun oluşmasını sağlar",
  ],
  paragraph: "Evcil hayvanınızı ve yaşam alanını dezenfektanlar, sert kimyasallar veya sabunlarla değil, probiyotiklerle temizleyin! Doğada tasarlandı, bilimle mükemmelleştirildi. HeiQ Synbio Pet, evcil hayvanınızın deri ve tüy yapısında ve yaşam ortamında dengeli bir mikrobiyomun korunmasına yardımcı olur.HeiQ Synbio Pet’in probiyotik ve prebiyotiklerden oluşan benzersiz formülü, evcil hayvanlardan kaynaklanan istenmeyen kokuların azaltılmasına ve yeniden oluşumunun önlenmesine yardımcı olur. Aynı zamanda dengeli bir deri mikrobiyomu ve parlak, bakımlı bir tüy görünümü için uygun bir ortam oluşturur.",
  warning: "",
  imageDir: "images/products_pages/pp_7.png",
  imageName: "PET Products",
};

var products = [
    {
        id: "GR0101XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech İç Mekan (Interior)",
        description: "Probiyotik bazlı, çok amaçlı bir iç mekân temizleyicisidir. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal [1] hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar. Dengeli bir mikrobiyomun [2] oluşmasını destekleyerek kötü koku ve alerjen oluşma riskini azaltır.",
        imageDir: "images/products/p_101.jpg",
        imageName: "Product 101",
        isAvailable: true,
        bullets: ["Yüksek performanslı temizlik.", "Tüm yıkanabilir yüzeyler için güvenlidir.", "Kötü koku oluşma riskini azaltır.", "Dengeli bir mikrofloranın oluşumunu destekler."]
    },
    {
        id: "GR0102XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Yağ Çözücü (Degreaser) Pro",
        description: "Probiyotiklerle zenginleştirilmiş, süper konsantre, çok amaçlı bir temizleyicidir. Her türlü yüzeydeki tüm organik kirlerin temizlenmesi için uygundur. Ürünün etkisi; yüzeyel aktif maddeler ile uzun süre boyunca enzim üreten probiyotiklerin birleşimine dayanır. Bu enzimler organik kirleri parçalayarak kirin yüzeyden ayrılmasını sağlar.  Çözünmüş veya kolloidal bir yapıya dönüşen Aktif Maddeler kirin mekanik ve/veya fiziksel yöntemlerle uzaklaştırılması ve temizlenmesini kolaylaştırır.",
        imageDir: "images/products/p_102.jpg",
        imageName: "Product 102",
        isAvailable: true,
        bullets: ["Çok güçlü temizleme etkisi yaratır", "Tüm yıkanabilir yüzeylerde güvenle kullanılabilir.", "Kötü koku oluşma riskini azaltır.", "Dengeli bir mikrofloranın oluşumunu destekler."]
    },
    {
        id: "GR0103XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Yüzey (Floor)",
        description: "Probiyotik bazlı bir yer temizleyicisidir. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal[1] hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar. Dengeli bir mikrobiyomun [2] oluşmasını destekleyerek kötü koku ve alerjen oluşma riskini azaltır.",
        imageDir: "images/products/p_103.jpg",
        imageName: "Product 103",
        isAvailable: true,
        bullets: ["Yüksek etkili temizlik gücü.", "Tüm yıkanabilir yüzeyler için güvenlidir.", "Kötü koku oluşma riskini azaltır.", "Dengeli bir mikrofloranın oluşumunu destekler.", "İz ve leke bırakmadan temizlik sağlar.", "Nötr pH"]
    },
    {
        id: "GR0104XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Yüzey Makina (Scrub) Ecolabel",
        description: "HeiQ VivoTech Yüzey Makina (Scrub) Ecolabel, tüm zemin yıkama makinelerinde kullanılabilen, probiyotik bazlı bir yer temizleyicidir. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar. Dengeli bir mikrobiyomun [2] oluşmasını destekleyerek kötü koku ve alerjen oluşma riskini azaltır.",
        imageDir: "images/products/p_104.jpg",
        imageName: "Product 104",
        isAvailable: true,
        bullets: ["Yüksek etkili temizlik gücü.", "Tüm yıkanabilir yüzeyler için güvenlidir.", "Kötü koku oluşma riskini azaltır.", "Dengeli bir mikrofloranın oluşumunu destekler.", "İz ve leke bırakmadan temizlik sağlar.", "Nötr pH"]
    },
    {
        id: "GR0105XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Yağ Tutucu (Grease Trap)",
        description: "HeiQ VivoTech Yağ Tutucu (Grease Trap), yağ tutucularda kullanılmak üzere geliştirilmiş, stabilize edilmiş bakteriyel sporların yüksek konsantrasyonlu bir karışımıdır. Her türlü yüzeydeki tüm organik kirlerin temizlenmesi için uygundur. Ürünün etkisi; yüzey aktif maddeler ile uzun süre boyunca enzim üreten probiyotiklerin birleşimine dayanır. Bu enzimler organik kirleri parçalayarak kirin yüzeyden ayrılmasını sağlar. Çözünmüş veya kolloidal  bir yapıya dönüşen Aktif Maddeler kirin mekanik ve/veya fiziksel yöntemlerle uzaklaştırılması ve temizlenmesini kolaylaştırır.",
        imageDir: "images/products/p_105.jpg",
        imageName: "Product 105",
        isAvailable: true,
        bullets: ["Koku problemlerini kontrol altına alır.", "Gider ve Boru hatlarının tıkanmasını önlemeye yardımcı olur.", "Kötü koku oluşma riskini azaltır", "Yağ tutucularda mikrobiyal aktiviteyi destekler", "Yağ tutucu boşaltma veya temizleme sıklığını azaltarak maliyet tasarrufu sağlar"]
    },
    {
        id: "GR0106XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Köpük Ekstra (Foam Extra)",
        description: "HeiQ VivoTech Köpük Ekstra (Foam Extra) etkisi Yüksek bir probiyotik temizlik ürünüdür. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar.",
        imageDir: "images/products/p_106.jpg",
        imageName: "Product 106",
        isAvailable: true,
        bullets: ["Genellikle fırçalama veya ovma gerektirmeden, hızlı ve etkili temizlik sağlar.", "Bulunduğu ortamda dengeli bir mikroflora oluşumunu destekler.", "Kalıcı probiyotik etkisi sayesinde yüzeylerde uzun süreli doğal denge sağlar.", "Zamandan tasarruf sağlayan, ekonomik bir kullanım sunar.", "Kalıcı etkisi sayesinde atık su üzerinde olumlu bir etki yaratır."] 
    },
    {
        id: "GR0107XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Sıhhi Temizlik (Sanitary)",
        description: "HeiQ VivoTech Hijyen (Sanitary) mikroorganizmalar temel alınarak geliştirilmiş, çevreye faydalı etki sağlayan güçlü bir probiyotik temizlik ürünüdür. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar.",
        imageDir: "images/products/p_107.jpg",
        imageName: "Product 107",
        isAvailable: true,
        bullets: ["Hızlı ve zahmetsiz temizlik sağlar.", "Kireç oluşumunu önler.", "İz ve leke bırakmadan temizler.", "Nötr pH", "Kötü koku, biyofilm ve alerjen oluşum riskini önemli ölçüde azaltır ve mikrobiyom dengesini destekler.", "Ferah hoş bir koku bırakır."] 
    },
    {
        id: "GR0108XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Tuvalet Jeli (ToiletGel)",
        description: "HeiQ VivoTech Tuvalet Jeli (ToiletGel), günlük kullanım için geliştirilmiş bir probiyotik tuvalet temizleyicisidir. Ürünün etkisi; yüzeyel aktif maddeler ile uzun süre boyunca enzim üreten probiyotiklerin birleşimine dayanır. Bu enzimler organik kirleri parçalayarak kirin yüzeyden ayrılmasını sağlar. Çözünmüş veya kolloidal  bir yapıya dönüşen Aktif Maddeler kirin mekanik ve/veya fiziksel yöntemlerle uzaklaştırılması ve temizlenmesini kolaylaştırır. HeiQ VivoTech Tuvalet Jeli (Toilet Gel), içerdiği probiyotiklerin gider boruları ve fosseptik de çalışmaya devam etmesi sayesinde kireç oluşumunu ve gider tıkanıklığı riskini azaltır.",
        imageDir: "images/products/p_108.jpg",
        imageName: "Product 108",
        isAvailable: true,
        bullets: ["Koku oluşumunu önler ve temizlenen yüzeylerde dengeli bir mikroflora oluşturur", "Jel formülü sayesinde yüzeye daha uzun süre tutunur, böylece daha yüksek verimlilik sağlar", "Uzun süren, kalıcı, ferah bir koku bırakır"] 
    },
   {
        id: "GR0201XX",
        group: ProductGroup.HomeCleaning,
        name: "HeiQ VivoTech Sıvı Bulaşık Deterjanı",
        description: "HeiQ VivoTech Sıvı Bulaşık Deterjanı, probiyotik bakteriler ile zenginleştirilmiş, yüksek konsantrasyonlu bir sıvı bulaşık deterjanıdır. Ürünün etkinliği, yüzey aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar",
        imageDir: "images/products/p_201.jpg",
        imageName: "Product 201",
        isAvailable: true,
        bullets: ["Mükemmel Yağ Çözme Gücü", "Uzun Süreli Etki", "Stabil ve yoğun etkili Köpük Yapısı", "Yüzeylerde leke veya kalıntı bırakmadan kurulama", "Probiyotiklerin sürekli etkisi sayesinde Giderlerde devam eden temizlik",] 
    },  
   {
        id: "GR0202XX",
        group: ProductGroup.HomeCleaning,
        name: "HeiQ VivoTech Sıvı Çamaşır Deterjanı",
        description: "HeiQ VivoTech Sıvı Çamaşır Deterjanı, probiyotik bakteriler ile zenginleştirilmiş, yüksek konsantrasyonlu bir sıvı çamaşır deterjanıdır. Beyaz ve renkli (renk atmayan) tekstiller için uygundur (ipek için uygun değildir). Ürünün etkinliği, yüzey aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar",
        imageDir: "images/products/p_202.jpg",
        imageName: "Product 202",
        isAvailable: true,
        bullets: ["30°C – 60°C aralığında düşük sıcaklıklarda etkilidir.", "Düşük sıcaklıklarda dahi yüksek leke çıkarma performansı sunar.", "İçerdiği probiyotik bakteriler sayesinde kötü kokuları kalıcı olarak giderir.", "Normalde düşük sıcaklıkta yıkamada kalıcı olan kokular üzerinde etkilidir.", "Ağartıcı (bleach) ve optik parlatıcı içermez.",] 
    },
   {
        id: "GR0204XX",
        group: ProductGroup.HomeCleaning,
        name: "HeiQ Synbio Alerjen Sprey",
        description: "HeiQ Synbio Alerjen Spreyi, probiyotikli bir sprey, alerjenleri parçalamaya yardımcı olur ve hoş olmayan kokuları azaltır. ",
        imageDir: "images/products/p_204.jpg",
        imageName: "Product 204",
        isAvailable: true,
        bullets: ["Bu çok yönlü sinbiyotik temizlik spreyi, yüzeyleri ve ortamı faydalı bakterilerle kolonize eder.", "Probiyotikler; toz akarı kalıntıları, polen, evcil hayvan tüyü/deri döküntüsü, idrar ve tükürük gibi yaygın cansız alerjenlerin azaltılmasına yardımcı olur.", "Püskürtme sonrasında günler boyunca aktif kalmaya devam ederek uzun süreli etki sağlar.", "Mikroskobik düzeyde derin temizlik sayesinde en küçük kir partiküllerine kadar etki eder.", "Hoş olmayan kokuları giderir ve yeniden oluşumunu önler.", "Çoğu kumaş ve halı için güvenlidir. Deri, süet ve ipek üzerinde kullanımı önerilmez.", "Püskürtme sonrasında günler boyunca etki göstermeye devam eder.", "Patentli HeiQ Synbio Teknolojisi içerir.", "180 ml / 6 oz.", "Belçika’da üretilmiştir.",] 
    },
   {
        id: "GR0203XX",
        group: ProductGroup.HomeCleaning,
        name: "HeiQ VivoTech Temizlik Spreyi",
        description: "HeiQ VivoTech Temizlik Spreyi, kullanıma hazır çok amaçlı probiyotikli bir temizleyicidir. Her türlü yüzeydeki tüm organik kirleri temizlemek için uygundur. Ürünün etkinliği, yüzey aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar",
        imageDir: "images/products/p_203.jpg",
        imageName: "Product 203",
        isAvailable: true,
        bullets: ["Son derece etkili temizleme gücü.", "Tüm yıkanabilir yüzeyler için güvenlidir.", "Hoş olmayan koku riskini azaltır.", "Sağlıklı bir mikroflora oluşumunu destekler.",] 
    },
   {
        id: "GR0205XX",
        group: ProductGroup.HomeCleaning,
        name: "HeiQ VivoTech Tuvalet Jeli (Toilet Gel)",
        description: "HeiQ VivoTech Tuvalet Jeli (Toilet Gel), günlük kullanım için geliştirilmiş bir probiyotik tuvalet temizleyicisidir. Ürünün etkisi; yüzeyel aktif maddeler ile uzun süre boyunca enzim üreten probiyotiklerin birleşimine dayanır. Bu enzimler organik kirleri parçalayarak kirin yüzeyden ayrılmasını sağlar. Çözünmüş veya kolloidal  bir yapıya dönüşen Aktif Maddeler kirin mekanik ve/veya fiziksel yöntemlerle uzaklaştırılması ve temizlenmesini kolaylaştırır. HeiQ VivoTech Tuvalet Jeli (Toilet Gel), içerdiği probiyotiklerin gider boruları ve fosseptik de çalışmaya devam etmesi sayesinde kireç oluşumunu ve gider tıkanıklığı riskini azaltır. ",
        imageDir: "images/products/p_108.jpg",
        imageName: "Product 205",
        isAvailable: true,
        bullets: ["Koku oluşumunu önler ve temizlenen yüzeylerde sağlıklı bir mikroflora oluşturur.", "Jel formülü sayesinde yüzeye daha uzun süre tutunur, böylece daha yüksek verimlilik sağlar.", "Uzun süren, kalıcı, ferah bir koku bırakır.",] 
    },
   {
        id: "GR0206XX",
        group: ProductGroup.HomeCleaning,
        name: "HeiQ VivoTech Hijyen (Sanitary)",
        description: "HeiQ VivoTech Hijyen (Sanitary) mikroorganizmalar temel alınarak geliştirilmiş, çevreye faydalı etki sağlayan güçlü bir probiyotik temizlik ürünüdür. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal  hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar.",
        imageDir: "images/products/p_206.jpg",
        imageName: "Product 206",
        isAvailable: true,
        bullets: ["Hızlı ve zahmetsiz temizlik sağlar.", "Kireç oluşumunu önler.", "İz ve leke bırakmadan temizler.", "Nötr pH", "Kötü koku, biyofilm, alerjen ve zararlı mikroorganizmaların oluşma riskini önemli ölçüde azaltır.", "Ferah hoş bir koku bırakır.",] 
    },
];
