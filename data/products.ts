export type Product = {
    id: string;
    group: ProductGroup
    name: string;
    description: string;
    imageDir: string;
    imageName: string;
    isAvailable: boolean;
    bullets?: string[];
};

export type ProductGroupIntro = {
    heading: string;
    bullets: string[];
    paragraph: string;
    warning?: string;
    imageDir?: string;
    imageName?: string;
};

export enum ProductGroup {
    ProfessionalCleaning = 1,
    HomeCleaning = 2,
    PersonalCare = 3,
    ColdMistSpraying = 4,
    IndustrialWaterTreatment = 5,
    PetAndLivestock = 6,
}

export const ProductGroupLabels: Record<ProductGroup, string> = {
    [ProductGroup.ProfessionalCleaning]: "Profesyonel Temizlik Ürünleri",
    [ProductGroup.HomeCleaning]: "Ev Temizlik Ürünleri",
    [ProductGroup.PersonalCare]: "Kişisel Bakım Ürünleri",
    [ProductGroup.ColdMistSpraying]: "Soğuk Sis ve Püskürtme Ürünleri",
    [ProductGroup.IndustrialWaterTreatment]: "Endüstriyel Su Arıtma Ürünleri",
    [ProductGroup.PetAndLivestock]: "PET ve Hayvancılık Ürünleri",
};

export const GroupSlugToEnum: Record<string, ProductGroup> = {
    professional_cleaning: ProductGroup.ProfessionalCleaning,
    home_cleaning: ProductGroup.HomeCleaning,
    personal_care: ProductGroup.PersonalCare,
    cold_mist_spraying: ProductGroup.ColdMistSpraying,
    industrial_water_treatment: ProductGroup.IndustrialWaterTreatment,
    pet_and_livestock: ProductGroup.PetAndLivestock,
};

export const ProductGroupIntroText: Partial<Record<ProductGroup, ProductGroupIntro>> = {
    [ProductGroup.ProfessionalCleaning]: {
        heading: "Geleneksel kimyasal temizlik ürünleri ve dezenfektanlar yüzeyleri ilk bakışta temizlese de;",
        bullets: [
            "Dengeli bir mikrobiyom oluşmasını sağlamaz",
            "Kullanım sıklığı arttıkça, dirençli bakteri oluşumunu teşvik eder",
            "Yüzeylerdeki çiziklere nüfuz etmekte zorlanır. Organik kirlerin barındığı, kötü koku kaynağı olan yağlı ve kirli tabakayı tamamen ortadan kaldıramaz",
            "Uzun süreli temizlik etkisi sağlamadığı için sık ve tekrarlayan temizlik ihtiyacı doğurur",
        ],
        paragraph: "Bu nedenlerle, geleneksel temizlik yaklaşımları kalıcı hijyen ve doğal denge açısından yetersiz kalmaktadır.",
        warning: "Ürünlerimiz temizlik maddesidir ve biyosidal ürün olarak kullanılamaz.",
        imageDir: "professional_cleaning.png",
        imageName: "Professional Cleaning Products"
    },
};

export const products: Product[] = [
    {
        id: "GR0101XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech İç Mekan (Interior)",
        description: "Probiyotik bazlı, çok amaçlı bir iç mekân temizleyicisidir. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal [1] hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar. Sağlıklı bir mikrobiyom [2] oluşturarak, kötü kokuları, alerjenleri ve enfeksiyon riskini azaltı.",
        imageDir: "products/placeholder.png",
        imageName: "products/placeholder",
        isAvailable: true,
        bullets: ["Yüksek performanslı temizlik.", "Tüm yıkanabilir yüzeyler için güvenlidir.", "Kötü koku oluşma riskini azaltır.", "Sağlıklı bir mikroflorayı destekler."]
    },
    {
        id: "GR0102XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Yağ Çözücü (Degreaser) Pro",
        description: "Probiyotiklerle zenginleştirilmiş, süper konsantre, çok amaçlı bir temizleyicidir. Her türlü yüzeydeki tüm organik kirlerin temizlenmesi için uygundur. Ürünün etkisi; yüzeyel aktif maddeler ile uzun süre boyunca enzim üreten probiyotiklerin birleşimine dayanır. Bu enzimler organik kirleri parçalayarak kirin yüzeyden ayrılmasını sağlar.  Çözünmüş veya kolloidal bir yapıya dönüşen Aktif Maddeler kirin mekanik ve/veya fiziksel yöntemlerle uzaklaştırılması ve temizlenmesini kolaylaştırır.",
        imageDir: "products/placeholder.png",
        imageName: "placeholder",
        isAvailable: true,
        bullets: ["Çok güçlü temizleme etkisi yaratır", "Tüm yıkanabilir yüzeylerde güvenle kullanılabilir.", "Kötü koku oluşma riskini azaltır.", "Sağlıklı bir mikrofloranın oluşumunu destekler."]
    },
    {
        id: "GR0103XX",
        group: ProductGroup.ProfessionalCleaning,
        name: "HeiQ VivoTech Yüzey (Floor)",
        description: "Probiyotik bazlı bir yer temizleyicisidir. Ürünün etkinliği, yüzeyel aktif maddeler (sürfaktanlar) ile probiyotiklerin birleşiminin sürekli olarak enzim üretmelerine dayanır. Bu enzimler organik kirleri parçalayarak yüzeyden ayırır, çözünmüş veya kolloidal[1] hale getirir ve böylece kirlerin mekanik ve/veya fiziksel olarak daha kolay uzaklaştırılmasını ve temizlenmesini sağlar. Sağlıklı bir mikrobiyom[2] oluşturarak, kötü kokuları, alerjenleri ve enfeksiyon riskini azaltır.",
        imageDir: "products/placeholder.png",
        imageName: "placeholder",
        isAvailable: false,
        bullets: ["Yüksek etkili temizlik gücü.", "Tüm yıkanabilir yüzeyler için güvenlidir.", "Kötü koku oluşma riskini azaltır.", "Sağlıklı bir mikrofloranın oluşumunu destekler.", "İz ve leke bırakmadan temizlik sağlar.", "Nötr pH"]
    },
];
