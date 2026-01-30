import { ProductGroup, ProductGroupLabels } from "./products";

type Slide = {
    src: string;
    alt: string;
    title?: string;
    link?: string;
};

export const durationMs: number = 5000;
export const aspect: string = "aspect-[16/7]";

export const homeSlides: Slide[] = [
    {
        src: "/homepage_sliders/slider_1.png",
        alt: "Probiyom mikrop bilgileri",
        title: "Mikroplarla Başetmek "
    }
];

export const productSlides: Slide[] = [
    {
        src: "/products_sliders/professional_cleaning.png",
        alt: ProductGroupLabels[ProductGroup.ProfessionalCleaning],
        title: ProductGroupLabels[ProductGroup.ProfessionalCleaning],
        link: "/products/professional_cleaning",
    },
    {
        src: "/products_sliders/home_cleaning.png",
        alt: ProductGroupLabels[ProductGroup.HomeCleaning],
        title: ProductGroupLabels[ProductGroup.HomeCleaning],
        link: "/products/home_cleaning",
    },
    {
        src: "/products_sliders/personal_care.png",
        alt: ProductGroupLabels[ProductGroup.PersonalCare],
        title: ProductGroupLabels[ProductGroup.PersonalCare],
        link: "/products/personal_care",
    },
    {
        src: "/products_sliders/cold_mist_spraying.png",
        alt: ProductGroupLabels[ProductGroup.ColdMistSpraying],
        title: ProductGroupLabels[ProductGroup.ColdMistSpraying],
        link: "/products/cold_mist_spraying",
    },
    {
        src: "/products_sliders/industrial_water_treatment.png",
        alt: ProductGroupLabels[ProductGroup.IndustrialWaterTreatment],
        title: ProductGroupLabels[ProductGroup.IndustrialWaterTreatment],
        link: "/products/industrial_water_treatment",
    },
    {
        src: "/products_sliders/pet_and_livestock.png",
        alt: ProductGroupLabels[ProductGroup.PetAndLivestock],
        title: ProductGroupLabels[ProductGroup.PetAndLivestock],
        link: "/products/pet_and_livestock",
    },
];