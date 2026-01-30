type Slide = {
  src: string;
  alt: string;
  title?: string;
};

export const durationMs: number = 5000;

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