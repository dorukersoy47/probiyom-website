export enum ProductGroup {
    ProfessionalCleaning = "Profesyonel Temizlik Ürünleri",
    HomeCleaning = "Ev Temizlik Ürünleri",
    PersonalCare = "Kişisel Bakım Ürünleri",
    ColdMistSpraying = "Soğuk Sis ve Püskürtme Ürünleri",
    IndustrialWaterTreatment = "Endüstriyel Su Arıtma Ürünleri",
    PetAndLivestock = "PET ve Hayvancılık Ürünleri",
}

export type Product = {
    id: string;
    name: string;
    description: string;
    imageDir: string;
    imageName: string;
    isAvailable: boolean;
}

export const products: Product[] = [
    
]