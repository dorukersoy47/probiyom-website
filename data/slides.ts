import { ProductGroup } from "./products";

type Slide = {
    src: string;
    alt: string;
    title?: string;
};

export const durationMs: number = 5000;
export const aspect: string = "aspect-[16/7]";

export const homeSlides: Slide[] = [
    {
        src: "/homepage_sliders/slider_1.png",
        alt: "Probiyom mikrop bilgileri",
        title: "Mikroplarla Başetmek "
    },
    {
        src: "/placeholder.png",
        alt: "placeholder",
        title: "Placeholder"
    },
    {
        src: "/placeholder.png",
        alt: "placeholder",
        title: "Placeholder"
    }
];

export const productSlides: Slide[] = [
    {
        src: "/products_sliders/slider_1.png",
        alt: ProductGroup.ProfessionalCleaning,
        title: ProductGroup.ProfessionalCleaning,
    },
    {
        src: "/products_sliders/slider_2.png",
        alt: ProductGroup.HomeCleaning,
        title: ProductGroup.HomeCleaning,
    },
    {
        src: "/products_sliders/slider_3.png",
        alt: ProductGroup.PersonalCare,
        title: ProductGroup.PersonalCare,
    },
    {
        src: "/products_sliders/slider_4.png",
        alt: ProductGroup.ColdMistSpraying,
        title: ProductGroup.ColdMistSpraying,
    },
    {
        src: "/products_sliders/slider_5.png",
        alt: ProductGroup.IndustrialWaterTreatment,
        title: ProductGroup.IndustrialWaterTreatment,
    },
    {
        src: "/products_sliders/slider_6.png",
        alt: ProductGroup.PetAndLivestock,
        title: ProductGroup.PetAndLivestock,
    },
];
